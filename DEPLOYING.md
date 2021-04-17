

# Deployment Guide

## Setup

See: https://firebase.google.com/docs/cli

```sh
npm install -g firebase-tools

firebase login

firebase projects:list
```

Within the root directory of this repo:

```sh
firebase init # (from root dir of this repo)
#... choose Hosting
# ... use existing app, and choose it
# ... choose "build" instead of "public"
# ... SPA: no
# ... automatic builds (no, maybe later)
```

## Deploying

https://firebase.google.com/docs/cli#deployment

```sh
firebase deploy
```
