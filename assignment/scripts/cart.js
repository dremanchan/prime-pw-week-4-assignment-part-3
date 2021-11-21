console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

console.log(basket.length);

function addItem( nameOfItem ){
    console.log('Added Item to basket,', nameOfItem);
    basket.push( nameOfItem );
    return true;
}

addItem("Toothpaste");
addItem("Cereal");
console.log(addItem("Newspaper"));
console.log(basket.length);

function listItems(){
    for(items of basket)
    console.log(items);
}

listItems();

function empty(){
    return basket.length = 0;
    console.log(basket);
}

console.log(empty());

listItems();

console.log(listItems());
