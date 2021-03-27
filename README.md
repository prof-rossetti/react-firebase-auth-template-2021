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

### Firebase Setup

Visit https://console.firebase.google.com/ to **create a new Firebase project**. When you create the project:

  1. Choose an existing Google Analytics account or create a new one.
  2. Enable the setting to automatically create a new property in this account.

After creating the Firebase project, visit it's "Authentication" settings, and "Get Started" to **enable the "Google" sign-in option**.

Click the gear icon to visit the "Project Settings" page, locate the "Your Apps" section, and **create a Web App**, or use an existing one. When you create the app (or in the future by visiting its settings page, finding the "Firebase SDK snippet", and clicking "Config"), you'll see the **Firebase SDK credentials**. Use these values for the `FIREBASE_` environment variables (see "Environment Variables" section below).

### Firestore Database Setup

Follow [this guide](https://firebase.google.com/docs/firestore/quickstart) to create a Firestore database for the Firebase project you just created. When you create the database, "start in test mode".

After the database has been created, create a new collection called "products" with a number of documents inside. Create each document using an auto-generated "id" attribute, as well as the attributes "name" (string), "description" (string), "price" (number) and "url" (string). Populate the documents based on the following examples:

name | description | price | url
--- | --- | --- | ---
Strawberries | Juicy organic strawberries. | 4.99 | https://picsum.photos/id/1080/360/200
Cup of Tea | An individually-prepared tea or coffee of choice. | 3.49 | https://picsum.photos/id/225/360/200
Textbook | It has all the answers. | 129.99 | https://picsum.photos/id/24/360/200


### Google Analytics Setup

Visit https://analytics.google.com/ and navigate to the web property you created via the Firebase project creation process. Visit the web property's admin settings, specifically the "Property Settings", and find the numeric **Property Id** (e.g. "XXXXXXXXXX"). Use this value for the `GA_TRACKER_ID` environment variable, in this format: `"UA-XXXXXXXXXX-1"` (see "Environment Variables" section below).


### Environment Variables

Create a new file called ".env" in the root directory, and place inside the following contents, using your own values:

```sh
# this is an example ".env" file...

#
# FIREBASE
#

REACT_APP_FIREBASE_API_KEY="_______"
REACT_APP_FIREBASE_AUTH_DOMAIN="my-project-123.firebaseapp.com"
REACT_APP_FIREBASE_PROJECT_ID="my-project-123"
REACT_APP_FIREBASE_STORAGE_BUCKET="my-project-123.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="_______"
REACT_APP_FIREBASE_APP_ID="_______"
#REACT_APP_FIREBASE_MEASUREMENT_ID="G-XXXXXXXXXX"
# we don't need the measurement id, but let's add this database url:
REACT_APP_FIREBASE_DATABASE_URL="https://my-project-123.firebaseio.com"

#
# GOOGLE ANALYTICS
#

REACT_APP_GA_TRACKER_ID="UA-XXXXXXXXXX-1"
REACT_APP_GA_DEBUG_MODE="true" # use "true" or "false"
```

> FYI: these credentials will technically be available to the public, see [Environment Variable Security in React Apps](https://create-react-app.dev/docs/adding-custom-environment-variables/).

> FYI: we mitigate security risks by whitelisting ip addresses in firebase


## Usage

Run the app locally:

```sh
npm start
```
