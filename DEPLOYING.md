
# Deployer's Guide

## Setup

Creating server:

```sh
heroku create -n react-firebase-2021
```

Associating the server, if necessary:

```sh
git remote -v
# if this doesn't create a new "heroku" remote address...
# heroku git:remote -a react-firebase-2021
```

Customizing buildpacks:

```sh
heroku buildpacks
# if you see the nodejs buildpack, remove it:
# heroku buildpacks:remove heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Customizing the build:

```sh
heroku config:set NODE_MODULES_CACHE=false
```

Configuring env vars:

```sh
heroku config:set REACT_APP_FIREBASE_API_KEY="_______"
heroku config:set REACT_APP_FIREBASE_AUTH_DOMAIN="my-project-123.firebaseapp.com"
heroku config:set REACT_APP_FIREBASE_PROJECT_ID="my-project-123"
heroku config:set REACT_APP_FIREBASE_STORAGE_BUCKET="my-project-123.appspot.com"
heroku config:set REACT_APP_FIREBASE_MESSAGING_SENDER_ID="_______"
heroku config:set REACT_APP_FIREBASE_APP_ID="_______"
heroku config:set REACT_APP_FIREBASE_DATABASE_URL="https://my-project-123.firebaseio.com"

heroku config:set REACT_APP_GA_TRACKER_ID="UA-XXXXXXXXXX-1"
heroku config:set REACT_APP_GA_DEBUG_MODE="false"
```
> NOTE: with the react buildpack, need to re-deploy [AFTER](https://github.com/mars/create-react-app-buildpack/issues/178) setting env vars in order for them to be recognized

## Deploying

Deploying:

```sh
git push heroku master
# if deploying from a branch:
# git push heroku mybranch:master
```

Deploying will run "scripts/build" from "package.json".

Visiting in the browser:

```sh
heroku open
```
