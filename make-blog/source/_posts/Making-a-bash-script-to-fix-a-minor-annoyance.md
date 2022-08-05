---
title: Making a bash script to fix a minor annoyance
date: 2021-11-26 09:37:31
tags: bash, MacOS, Anaconda, Conda, Python, Linux
---
So, it turns out, if you try and run pip while in my schools network, it recognises a self signed ssl certificate and refuses to connect due to security concerns, forcing us to do`pip install [package] --trusted-host pypi.org --trusted-host files.pythonhosted.org` every single time we want to install a package, which is really annoying. So, why not fix this?

It turns out pip has a semi-universal config system, meaning that I can simply quickly shop up a script to permanently trust specific hosts. Turns out there are 3 'levels' of config file ([See here](https://pip.pypa.io/en/stable/topics/configuration/) for the full docs), that load in this order, overwriting eachother:

- Enviroment Variable - Always overwrites everything else
  
- Global (All users on system) - Only overwrites User and Global
  
- User (just the current user) - Only overwrites Site
  
- Site (per enviroment) - Cannot overwrite
  

Now ideally, I'd write to the *Enviroment Variable*, to prevent a user accidently messing up the fix, however, I want this solution to work for all users, and writing to the Env Var seems to require admin permissions, so I'll settle for the Global config file (`/Library/Application Support/pip/pip.conf` on MacOS).

So by simply doing

```bash
mkdir -p /Library/Application\ Support/pip && printf "%s\n" "[global]" "trusted-host = pypi.python.org" "               pypi.org" "               files.pythonhosted.org" > /Library/Application\ Support/pip/pip.conf || echo "Failed to create conf file, please run with root permissions and try again"
```

I can write the correct config options.

Lets break this down, first I do `mkdir -p`, making a new directory, with intermediate folders automatically being created if needed (thus the `-p` option). After that, if the folder creation runs successfully, print the following string:

```
[global]
    trusted-host = pypi.python.org 
                   pypi.org 
                   files.pythonhosted.org
```

And then output it to pip.conf (using the `>` redirection character), else if it fails (`||`), then print an error msg.

Ok, so now pip is fixed, but theres still 1 annoying issue, anaconda never likes to start up while connected to wifi, on this specific network. To figure this out, I simply opened wireshark before opening anaconda, and tried to figure out what was going wrong.

Turns out, it tries to call home to see if there are any updates avalible, however, if the server does not respond for any reason (say for example, an ssl certificate being self signed and causing an error), it has an insanely long timeout period.

So, let's fix this!

The first thing I did, was try to see if there was any ssl documentation, turns out, [there is!](https://docs.anaconda.com/anaconda-repository/admin-guide/install/config/config-reference/#ssl-options) So, all I needed to do, was make a new certificate, append my schools self signed certificate, and I'd be home free!

Easier said than done it turns out...

First, I had to download the current, full ssl certificate, I opted to use curl for this:

`curl https://curl.se/ca/cacert.pem -o $PWD/.conda.ssl.pem`

After downloading it, I next had to fetch woodleighs certificate... once again, easier said than done!

To do this, I ended up using the fantastic `openssl` client's feature of being able to see the certificates you send and recieve.

This is the line i came up with:

```bash
openssl s_client -showcerts -servername "curl.haxx.se" -connect curl.haxx.se:443 | pcregrep -M -e "----.*(\n.*){19}" | pcregrep -M -v -e "---\nServer certificate" >> $b || echo "Failed to append to new certificate"
```

Now, how does that work?

Getting into the openssl `man` page (which is ***STUPID*** long BTW), we can see the `s_client` option does the following:

```plaintext
The s_client command implements a generic SSL/TLS client which connects to a remote host using SSL/TLS.

     If a connection is established with an SSL server, any data received from the server is displayed and
     any key presses will be sent to the server.
```

So next, we add the `-showcerts` and `-servername` options, opting to connect to the curl page (ironic, I know), followed by the `-connect` option, specifying what port we would like to connect to in specific (443 for https).

I then pipe (`|`) this to a bunch of pcregrep statements, designed to filter down the last certificate, which, conveniantly, is the school one. I then append (`>>`) that to the certificate sheet (here, stored in the $b variable), otherwise, echo an error command.

I then copy the file to a new location for permanent storage, in particular the $HOME location, named with a dot `.` to make sure the file is non-visable.

I then run 2 sed commands

```bash
sed -i '' "s~ssl_verify: true~$c~" $HOME/$a ||  sed -i '' "s~ssl_verify: True~$c~" $HOME/$a
```

This repleaces the content `ssl_verify: true` (the default value) with the directory to my custom certificate, basically saying "use that certificate for ssl verification". I also run another copy of this searching for a capital T in 'true' just be to sure.

After that, everything is patched and the follow should have been fixed:

- Anaconda taking forever to load when connected to the internet
  
- Pip Needing an overly complex install cmd (now it should just be `pip install package`)
  

I am currently investigating the occasional nature of curl to fail, ironically due to a self signed ssl certificate, although I may simply switch to wget instead to avoid this issue.

On top of that, some installations of anaconda seem to be in different places, without any rhyme or reason, and i'll be investigating this further soon.

The full script:

```bash
#!/bin/bash

# This script patches both pip and anaconda to not give self-signed cert errors while maintaining an ssl connection.
# Made by Jake Aronleigh - contact me at: ghostoverflow256@gmail.com

echo "Patching pip first"
# This patch tells the pip program to always trust the needed sites through a global config file. 
# The loading order for config files is as follows:
# Path specified by the PIP_CONFIG_FILE enviroment variable (couldnt get that to work without root)
# Global - /Library/Application Support/pip/pip.conf
# User - $HOME/Library/Application Support/pip/pip.conf OR $HOME/.config/pip/pip.conf
# Site - $VIRTUAL_ENV/pip.conf

# Here I'm using the Global method. It would be better to use the PIP_CONFIG_FILE method,
# however to edit the enviroemtn variables I would need root access. 
# This creates an issue of authentication, meaning I would be unable to portably pack this 
# Application without giving EVERY user some sort of admin role, which is not wise. 
mkdir -p /Library/Application\ Support/pip &&  printf "%s\n" "[global]" "trusted-host = pypi.python.org" "               pypi.org" "               files.pythonhosted.org" > /Library/Application\ Support/pip/pip.conf || echo "Failed to create conf file, please run with root permissions and try again"
echo "Patched pip, attempting anaconda"

# The way this patch works is it gets the file for ssl certificates, then patches in the
# woodleigh ssl certs to make sure anaconda doesn't think it's being attacked by a Man-in-the-middle attack. 
b=.conda.ssl.pem
c="ssl_verify: $HOME/$b"
a=.continuum/anaconda-client/config.yaml
mv "$PWD/$b" "$PWD/old_certs/$b" || echo "Couldn't move old file, assuming this is the first time running this patch"
curl https://curl.se/ca/cacert.pem -o $PWD/$b || echo "Curl failed, couldn't get default certificate!" # This sometimes doesnt work - Why?
echo quit | openssl s_client -showcerts -servername "curl.haxx.se" -connect curl.haxx.se:443 | pcregrep -M -e "----.*(\n.*){19}" | pcregrep -M -v -e "---\nServer certificate" >> $b || echo "Failed to append to new certificate"
cp $PWD/$b $HOME/$b || echo "Failed to move the new certificate, do I have root?"
sed -i '' "s~ssl_verify: true~$c~" $HOME/$a ||  sed -i '' "s~ssl_verify: True~$c~" $HOME/$a || echo "Failed to write to conda config! Do I have root?"
# Here, not only is sed different on macos than linux or other bash systems, 
# but it also needs the double quotes in order to expand the $b option.
# You will also notice that i have used '~' as the seporator, this is because my variables
# have slashes in them
echo "Patched Both successfully!" 
```
