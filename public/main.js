import { ItemService } from "./services/itemService.js";

// Initialize Firebase
var config = {
apiKey: "AIzaSyBJUn3GnQ3qxqjnUTvtmJRIpiuiFhCCZaw",
authDomain: "tch-p01.firebaseapp.com",
databaseURL: "https://tch-p01.firebaseio.com",
projectId: "tch-p01",
storageBucket: "tch-p01.appspot.com",
messagingSenderId: "505100188137"
};
firebase.initializeApp(config);

let refCollection = firebase.database().ref("Collections/");
refCollection.on('child_added', (collection) => {
    let collectionElement = document.createElement('option');
    collectionElement.value = collection.val();
    collectionElement.innerHTML = collection.val();
    document.getElementById('new-collection').appendChild(collectionElement);
});

let collections = document.getElementById('new-collection');
collections.addEventListener("change", (event) => {

    let index = collections.selectedIndex;
    console.log(index,collections.options[index]);
    let ref = firebase.database().ref("Collections/" + collections.options[index]);
    
    let itemService = new ItemService();
    itemService.Init();
}, false);


  