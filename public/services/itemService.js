import { Item } from "../models/item.js";

export class ItemService
{
    constructor(ref) {
        this.ref = ref;
    }

    DisplayImage(callback) {
    var img = document.createElement("img");
        img.src = callback.val().imageUrl;
        img.classList.add('displayed-image');
        img.id = callback.key;
        img.addEventListener("click", () => this.RemoveItem(callback.key));
        var src = document.getElementById("object");
        src.appendChild(img);
    }

    AddItem(event) {
        var label = document.getElementById("new-label").value;
        var imageUrl = document.getElementById("new-url-image").value;
        var cost = document.getElementById("new-cost").value;
        var newItem = new  Item(label, cost, imageUrl);
        this.ref.push(newItem);
    }

    RemoveItem(key) {
        console.log("displayed-image-click"); 
        this.ref.child(key).remove().then(function() {
            document.getElementById(key).remove();
            console.log("deleted"); 
        });
    }

    Init() {
        //display
        this.ref.orderByChild("Cout").on('child_added', (callback) => this.DisplayImage(callback));
        //add
        document.getElementById("new-button").addEventListener("click", event => this.AddItem(event), false);
        //preview image
        document.getElementById("new-label").addEventListener("change", event => {
            var queryValue = document.getElementById("new-label").value;
            GoogleSearchService.getImageUrl(queryValue);
        }, false);
    }
}
      
