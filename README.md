# Express Starter 2018
+ fork from git+https://github.com/tomyitav/express-es6-starter.git
Starter project for creating a MVC express server, using

+ express
+ mongoose
+ babel-cli
+ winston and morgan for logging
+ Async/Await

## Installation
```bash
yarn
```

## Starting the server

```
npm start
```

The server will run on port 3000. You can change this by editing `config.dev.js` file.

## Run server in production with Docker

```
npm run build
```

After npm building the project, go to project root directory, open shell and run:
```
docker build -t express-es6-starter .
```

Instructions about running the container are available [here](https://hub.docker.com/r/tomyitav/express-es6-starter/)

## Debugging with Webstorm

Set babel-node executable as the node interpreter.
Pass node parameters of --preset=babel-preset-es2015

---

# Skeleton (new)
+ contorllers
+ core
+ data
+ models
+ db
+ routes
+ server.js
+ Dockerfile
+ log


