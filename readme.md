# helpnodered
Helper Scripts for running node-red-pi on Raspberry Pi OS

![screenshot](/screenshot.png)

# Installation
Please follow the official installation guide at: https://nodered.org/docs/getting-started/raspberrypi \
In some cases your version of nodejs or especially `npm` may need to be updated to the correct version.

# Scripts
Main Helper - [nodered.sh](/nodered.sh)
```
- API for node package manager to install node-red packages to the right place in the home directory
- Simple bash script which can be added to PATH in Linux instead of typing `./nodered.sh <options>`
```
Shortcut - [index.html](/index.html)
```
- Web Shortcut for launching the user's local instance of node-red (instead of on the server, php?)
```
Recommendations - [recommends.txt](/recommends.txt)
```
- Simple plain text file arbitrarily containing recommended node-red modules and other notes
```
Custom Node - [node-red-contrib-custom](/node-red-contrib-custom/package.json)
```
- Package structure for node-red custom nodes (as of 07:01 25/06/2022)
- More information: https://nodered.org/docs/creating-nodes/first-node
```

![customnode](/customnode.png)