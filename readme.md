# node-red-contrib-empython
MicroPython Javascript Port built with Emscripten and Heavily Modified to work with Node-RED

# WARNING: This is Highly Experimental code and should not be deployed in production environments!

![screenshot](https://github.com/TheMindVirus/helpnodered/blob/empython/screenshot.png)

# Notes
* `npm install <local absolute directory>` is used to install it
* Set `httpStatic` in `settings.js` to point to `~/.node-red/src` (new folder)
* Copy `firmware.wasm` to that directory
* Clean up `empython.js` heavily!
* Examine `firmware.wasm` for issues using Web Assembly Tools
* Run Node-RED in a console window and check `localhost:1880/firmware.wasm` is available
* Check the Server Console, F12 Developer Tools and Node-RED Debug for output
