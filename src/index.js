var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS);

// Initialize the app with a custom auth variable, limiting the server's access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mitonaro-f6796.firebaseio.com",
  databaseAuthVariableOverride: {
    uid: "quotes-db-write"
  }
});

// The app only has access as defined in the Security Rules
var db = admin.database();
var ref = db.ref("/test");
ref.set({ justATest: true });

