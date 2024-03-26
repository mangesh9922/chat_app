import { getMessaging, getToken } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();

// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}


export const fetchToken = async () => {
  let token = "Loading...."
  await getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY }).then((currentToken) => {

    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      console.log("Token will be : " + currentToken)
      token = currentToken
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      token = "No Permission"
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    token = "Undefined"
    throw err
    // ...
  });

  return token
}