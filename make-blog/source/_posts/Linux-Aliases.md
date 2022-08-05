---
title: Linux Aliases
date: 2021-09-25 13:56:31
tags:
---
In nearly all Linux distro’s, you can set aliases. I thought I’d share what ones I use at the moment!

```bash
alias get="sudo apt-get install"
alias lt="ls -la --human-readable --size -1 -S --classify"
alias count='find . -type f | wc -l'
alias editaliases="sudo gedit /home/${LOGNAME}/.bash_aliases"
alias restart='sudo reboot'
alias mime='file -b --mime-type'
```

In order to make sure this gets enforced every terminal session, I simply add this to my bashrc file:

```bash
AliasContents=`cat ./.bash_aliases`
echo "Current aliases are: $AliasContents"
Where .bash_aliases simply contains the above aliases!
```
