---
title: Creating executables on MacOS from a bash (.sh) script
date: 2022-03-21 13:25:34
tags: bash, macos, macosx
---
Sometimes I have the issue of needing to make a portable, easy to use solution for executing a bash script. 
Of course I could simply do `chmod +x file.sh`, but that would require the user to go into the terminal and enter a command (goodness forbid). 
To fix this, there exists a tool called shc. I'll be covering instructions for compiling on a mac, for macs due to that being what I most often have access to. 
To start off, install shc with homebrew:
`brew install shc`
If your cmd line complains about brew not veing a command, simple enter this first:
```bash
NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
This will install the brew package manager for macos. To use it, just use the command "brew".
Once you've installed brew and shc, create your sh file:
```bash
touch test.sh
# Add content
nano test.sh
# make it executable
chmod +x test.sh
```
At this stage i'd suggest testing it (`sh ./test.sh`) and making sure you have a [shebang](https://www.geeksforgeeks.org/shell-scripting-define-bin-bash/) to ensure it works well portably. 
Next, generate your executable with `shc -f test.sh` (Where test.sh is your sh file)  and it will make 2 new files:
 - test.sh.x
 - test.sh.c
 The first being your new executable, the second being your C source code. 
 Next I like to rename it to remove the extension (Don't worry, it will still work fine without it, as it doesn't depend on the extension) just by doing `mv test.sh.x test` and now you have your executable shell file!
