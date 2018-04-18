import { ItemService } from "./services/itemService.js";

// Initialize Firebase
export var config = {
apiKey: "AIzaSyBJUn3GnQ3qxqjnUTvtmJRIpiuiFhCCZaw",
authDomain: "tch-p01.firebaseapp.com",
databaseURL: "https://tch-p01.firebaseio.com",
projectId: "tch-p01",
storageBucket: "tch-p01.appspot.com",
messagingSenderId: "505100188137"
};
firebase.initializeApp(config);

export var ref = firebase.database().ref("Collections/Thomas/");
var itemService = new ItemService(ref);
itemService.Init();
  