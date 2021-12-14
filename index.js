

var customerName = 'bob'
var bestCustomer;

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase() 
}

function setBestCustomer() {
     bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
    const leastFavoriteCustomer = "jeff"
    leastFavoriteCustomer = customerName;
} 