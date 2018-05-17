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

//Init
firebase.initializeApp(config);
let ref = firebase.database().ref("Collections/Default");  
let itemService = new ItemService(ref);
itemService.Init();


let refCollection = firebase.database().ref("Collections/");
refCollection.on('child_added', (collection) => {
    let collectionElement = document.createElement('option');
    collectionElement.value = collection.key;
    collectionElement.innerHTML = collection.key;
    document.getElementById('new-collection').appendChild(collectionElement);
});

let collections = document.getElementById('new-collection');
collections.addEventListener("change", (event) => {

    let index = collections.selectedIndex;
    let ref = firebase.database().ref("Collections/" + collections.options[index].value);
    
    var list = document.getElementById("object");
    list.innerHTML = "";
    itemService.Dispose();
    itemService = new ItemService(ref);
    itemService.Init();
    
}, false);