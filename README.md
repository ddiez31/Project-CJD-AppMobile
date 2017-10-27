This project built with [Ionic](https://ionicframework.com/) framework crossplatform.

## Install environment Node.js
Download and install [Node downloads](https://nodejs.org/en/download/) source for your platform.

## Using this project with the Ionic CLI and the packages modules

Install the latest Ionic CLI:

```bash
$ npm install -g ionic cordova
```

Install all packages for the project:
```bash
$ npm install
```

### Parameter the local IP address
Modifiy `profile.ts` and `trombinoscope.ts` files and change `private ipAddress` with your local IP Address.

### Run the project into `local path`:
##### - view on browser

```bash
$ ionic serve
```
##### - view on browser with device picture

```bash
$ ionic serve --lab
or
$ npm start
```
##### - view on device
Activate `enable USB debugging` in your `developer mode` device parameters.

```bash
$ ionic cordova run --livereload
```


