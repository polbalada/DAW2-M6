Array.prototype.myUcase = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();
console.log(fruits);