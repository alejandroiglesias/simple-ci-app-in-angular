# Crossover test

## Getting started

This project uses [Node](https://nodejs.org/) and [Gulp](http://gulpjs.com/) to build the project and
run development tasks. Make sure you have Node installed first and install Gulp CLI
(`npm i -g gulp-cli`). Then, install the dependencies: `npm install`. I would recommend using Yarn
instead of npm since I provided a `yarn.lock` file to lock dependencies: `npm install -g yarn` and
`yarn install`.

## Running

After all dependencies have been installed, you can run any of the following Gulp tasks.

* `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
