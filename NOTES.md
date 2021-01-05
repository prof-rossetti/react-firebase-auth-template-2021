
# Editor

Install VS Code Extension: ES7 React Snippets (`dsznajder`).

# NPM

Reproduction from scratch:

```sh
npx create-react-app react-template-2020
cd react-template-2020
```

```sh
npm install react-router-dom --save
#npm install react-router-bootstrap --save
npm install react-bootstrap bootstrap --save
#npm install react-ga --save
#npm install d3 --save
#npm install query-string --save

npm install --save reactfire firebase
npm install @primer/octicons-react --save
```

# Configure Firebase

Go to https://console.firebase.google.com/ to add a new project. Visit "Authentication"  tab and enable the "Google" sign-in option. Visit the project settings to obtain the firebase configuration credentials.

# Configure Env

Add your firebase creds to the ".env" file:

```sh
# .env file

REACT_APP_FIREBASE_API_KEY="_______"
REACT_APP_FIREBASE_AUTH_DOMAIN="_______"
REACT_APP_FIREBASE_DATABASE_URL="_______" # "https://PROJECT_ID.firebaseio.com",
REACT_APP_FIREBASE_PROJECT_ID="_______"
REACT_APP_FIREBASE_STORAGE_BUCKET="_______"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="_______"
REACT_APP_FIREBASE_APP_ID="_______"
```

# Usage

```sh
npm start
```



# References

## React

  + https://reactjs.org/docs/context.html#updating-context-from-a-nested-component


## Examples

Web Dev Simplified:
  + https://www.youtube.com/watch?v=PKwu15ldZ7k
  + https://github.com/WebDevSimplified/React-Firebase-Auth

Maksim Ivanov:

  + https://www.youtube.com/watch?v=unr4s3jd9qA
  + https://github.com/satansdeer/react-firebase-auth

## Firebase

  + https://firebase.google.com/docs/web/setup#node.js-apps
  + https://firebase.google.com/docs/auth/web/google-signin

## Logos

  + https://about.google/brand-resource-center/logos-list/
