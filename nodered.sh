#!/bin/bash

if [ "$1" == "install" ]; then
    npm --prefix ~/.node-red install ${@:2}
elif [ "$1" == "remove" ]; then
    npm --prefix ~/.node-red remove ${@:2}
elif [ "$1" == "status" ]; then
    npm --prefix ~/.node-red list ${@:2}
else
    echo "Usage: ./nodered.sh <install|remove|status>";
fi

exit 0
