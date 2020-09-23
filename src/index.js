var admin = require("firebase-admin");
var data = require("./quotes.json");

var serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mitonaro-f6796.firebaseio.com",
  databaseAuthVariableOverride: {
    uid: "quotes-db-write"
  }
});

var db = admin.database();
var ref = db.ref("/quotes");
ref.set(data, function(error) {
  if (error) {
    console.log("Data could not be saved." + error);
  } else {
    console.log("Data saved successfully.");
  }
  process.exit()
});

