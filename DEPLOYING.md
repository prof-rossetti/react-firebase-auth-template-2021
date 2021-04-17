

# Deployment Guide

## Setup

See:
  + https://firebase.google.com/docs/cli
  + https://firebase.google.com/docs/cli#deployment

```sh
npm install -g firebase-tools

firebase login

firebase projects:list

firebase init # (from root dir of this repo)
#... choose Firestore and Hosting
# ... use existing app, and choose it
# ... keep "firestore.rules"
# ... keep "firestore.indexes.json"
# ... choose "public"
# ... SPA: no?
# ... automatic builds (no, maybe later)
# ... OK to overwrite public/404.html
```

## Deploying

```sh
firebase deploy
```
