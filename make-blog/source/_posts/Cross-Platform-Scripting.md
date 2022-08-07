---
title: Cross-Platform Scripting!
date: 2022-07-16 16:41:51
tags: scripting, bash, powershell, cmd, cli
---
So I wanted to make a script that could be ran on both windows and unix based systems to help with distributing things on multiple platforms, all in 1 script without any changes to said script. 


To do this, I first tried to use the "ErrorActionPreference" enviromental variable.
```
#!/bin/bash
$ErrorActionPreference='SilentlyContinue' # We exploit that this has no meaning in a unix enviroment, but does in the windows powershell
# Bash script here
cal
# This will (obviously) throw an error on windows, but since we silently continue, it executes the below on windows without error
# but stops due to error on linux
New-Item -Path 'C:\Users\ghostdog\Desktop\Test.txt' -ItemType File

```

At first, this seems to work, however, if we look at any command that is shared between the operating systems, we can see this fails, such as the following:
```
#!/bin/bash
$ErrorActionPreference='SilentlyContinue'

cal
echo "This should only execute on unix!"

New-Item -Path 'C:\Users\ghostdog\Desktop\Test.txt' -ItemType File
```

This, obviously, leads to powershell outputting that echo. 

My first thought to fix this, would be to simply modify the third and forth line to `cal && echo "Unix!"`, but, that seems to throw an error not caught by the powershell enviroment variable we set earlier in some versions. To fix this, i need a universal logical AND. 

This, however, proved to be futile, as there was a much simpler solution:

```
:; echo "I'm on unix!!!" #
:; echo "I'm on unix!!!" #
ECHO OFF 
ECHO Hi Windows
PAUSE
```

Or even better:
```
::; echo "Unix!" ; exit
ECHO OFF
ECHO Hi
PAUSE
```

We then save this as a batch file, and when we execute it on unix, it says "Unix!" but on windows, simply says "Hi".