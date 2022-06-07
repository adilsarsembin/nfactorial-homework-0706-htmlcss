const name = 'Dalida';
let greeting =  () => {
    console.log(`Welcome to ${name}'s Asian cosmetics shop!`);
}
greeting()

// you may change gender:DD
console.log('Dear customer, what is your gender?')

let gender = 'F';
if (gender == 'F') {
    console.log("Hope you're enjoying time in our shop. What is the number of products you want to purchase?")
} else {
    console.log('GAY!');
}

const customerName = 'Aruzhan';
console.log('What is your name? May you spell it for me?')
for (i = 0; i < [...customerName].length; i++) {
    console.log([...customerName][i]);
};

let numberOfPurchases = 6; //suppose she buys everything

console.log('Below you may see available products! Choose anything you want! ');
console.log('As you are the participant of nFactorial Incubator there is 50% discount for you!');

let availableProducts1 = ['Cleanser', 'Skin Care', 'Body Care'];
let availableProducts2 = ['Hair Care', 'Masks', 'Makeup'];
let availableProducts = availableProducts1.concat(availableProducts2);

availableProducts.push('Mentoring in n! School is great!');
let someWords = availableProducts.pop();
console.log(someWords);

for (i = 0; i < availableProducts.length; i ++) {
    console.log(`${i + 1}. ${availableProducts[i]}`)
};

let prices = [6000, 10000, 5000, 3000, 1000, 3000];

let newPrices = (price) => {
    return price * 0.5;
}

let newPrice = prices.map((price) => newPrices(price));

let dataBase = {};
for (i = 0; i < newPrice.length; i++) {
    dataBase[availableProducts[i]] = newPrice[i];
}
console.log(dataBase);

let totalSum = (a, b, c, d, e, f) => {
    return a + b + c + d + e + f;
};
console.log('Total price is', totalSum(...newPrice));
console.log('What is your paying method?')

let payingMethod = 'Cash';
let lastWords = (payingMethod == 'Cash') ? "A MEL'CHE NE BUDET?" : "Nice job!";
console.log(lastWords);