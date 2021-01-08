# React App with Firebase Auth (2021)

This is a starter / template repository for creating new react apps with mobile responsive nav and firebase authentication.

<img src="https://github.com/s2t2/react-firebase-auth-template-2021/raw/demo/demo.gif" alt="a demonstration of app functionality" height="400" />


## Prerequisites

[Install NVM](https://github.com/nvm-sh/nvm#install--update-script) and
use it to install the latest stable version of [Node.js / NPM](https://nodejs.org/en/).

## Installation

Clone this repo and navigate to the root directory.

Install package dependencies:

```sh
npm install
```

## Configuration

### Firebase Credentials

Visit https://console.firebase.google.com/ to add a new project. Visit "Authentication"  tab and enable the "Google" sign-in option. Visit the project settings to obtain the firebase configuration credentials.

### Environment Variables

Create a new file called ".env" in the root directory, and place inside the following contents, using your own respective firebase credentials:

```sh
# .env file

REACT_APP_FIREBASE_API_KEY="_______"
REACT_APP_FIREBASE_AUTH_DOMAIN="_______"
REACT_APP_FIREBASE_DATABASE_URL="_______" # like "https://PROJECT_ID.firebaseio.com",
REACT_APP_FIREBASE_PROJECT_ID="_______"
REACT_APP_FIREBASE_STORAGE_BUCKET="_______"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="_______"
REACT_APP_FIREBASE_APP_ID="_______"

#REACT_APP_GA_TRACKER_ID="UA-XXXXXX-1"
```

> FYI: [Environment Variable Security in React Apps](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## Usage

Run the app locally:

```sh
npm start
```
