import { Item } from "../models/item.js";

export class ItemService
{
    constructor(ref) {
        this.ref = ref;
    }

    DisplayImage(callback) {
        var object = callback.val();
        var key = callback.key;

        var containerElem = document.createElement('div');
        containerElem.id = key;
        containerElem.className = "container";

        var imgElem = document.createElement('img');
        imgElem.src = object.imageUrl;
        imgElem.title = imgElem.alt = object.label;
        imgElem.className = "displayed-image";

        var middleElem = document.createElement('div');
        middleElem.className = "middle";

        var displayTextElem = document.createElement('div');
        displayTextElem.innerHTML = "Delete";
        displayTextElem.className = "text";
        displayTextElem.addEventListener("click", () => this.RemoveItem(key), false);

        middleElem.appendChild(displayTextElem);
        containerElem.appendChild(imgElem);
        containerElem.appendChild(middleElem);
        
        var list = document.getElementById("object");
        list.appendChild(containerElem);
    }



    AddItem() {
        var label = document.getElementById("new-label").value;
        var imageUrl = document.getElementById("new-url-image").value;
        var cost = document.getElementById("new-cost").value;
        var newItem = new  Item(label, cost, imageUrl);
        this.ref.push(newItem);
        this.ResetField();
    }

    RemoveItem(key) {
        this.ref.child(key).remove().then(function() {
            document.getElementById(key).remove();
        });
    }

    ResetField()
    {
        document.getElementById("new-label").value = "";
        document.getElementById("new-url-image").value = "";
        document.getElementById("new-cost").value = "";
        document.getElementById("dynamic-image").src = "//:0";
    }

    Init() {
        //display
        this.ref.orderByChild("Cout").on('child_added', (callback) => this.DisplayImage(callback));
        //add
        document.getElementById("new-button").addEventListener("click", () => this.AddItem(), false);
        //preview image
        document.getElementById("new-label").addEventListener("change", () => this.ChangeListener(), false);
    }

    Dispose() {
        this.ref.orderByChild("Cout").off();
        var el = document.getElementById('new-button'), elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
        var el = document.getElementById('new-label'), elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el); 
    }

    ChangeListener() {
        var queryValue = document.getElementById("new-label").value;
        GoogleSearchService.GetImageUrl(queryValue);
    }
}
      
