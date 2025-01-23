# sws-cors-fix #

a simple plugin to fix the CORS authentication issue of the [simple-web-server](https://github.com/terreng/simple-web-server)

## Background ##

The "simple-web-server" is a simple web server for macOS, intended to be used for web app development and test. It comes as an application which can be easily installed, configured and started with a few clicks and without the need to install a bunch of other things.

It supports CORS and basic authorization out-of-the-box - but unfortunately, these two functions do not play together: CORS preflight requests (using the HTTP method "OPTIONS") want to be authorized as well - which is wrong (and browsers will not send any "Authorization" headers along with such requests)

Fortunately, however, the "simple-web-server" comes with a plugin mechanism which can be used to intercept incoming requests and handle them when necessary.

And that's exactly what the files in this repository do: they provide **a plugin which intercepts incoming OPTIONS requests and sends permissive responses back** - even if all other operations require authorization.

## Usage ##

Follow these steps:

1. download this repository, in particular the files `plugin.json` and `plugin.js`. Keep these files in a common folder
2. open the "Simple Web Server" UI, select a server and add a new plugin. When asked, pen the folder with the abovementioned files

That's it!

## License ##

[MIT License](LICENSE.md)
