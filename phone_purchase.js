var TAX_RATE = 0.08;
var PHONE_PRICE = 500.00;
var ACCESSORY_PRICE = 30.00;
var SPENDING_THRESHOLD = 800.00;
var STARTING_BANK_BALANCE = prompt('what is your staring bank balance? ');
// var STARTING_BANK_BALANCE = 3000.00;
var total;
var bank_balance = STARTING_BANK_BALANCE;

function calculateTax(taxable_amount) {
    var tax = taxable_amount * TAX_RATE;
return tax
}

function dollarFormat(price) {
    return '$' + price.toFixed(2);
}

while (true) {
    sub_total = PHONE_PRICE + ACCESSORY_PRICE;
    bank_balance = bank_balance - sub_total;
    total = sub_total + calculateTax(sub_total);
    if ((total >= SPENDING_THRESHOLD) || (total >= bank_balance)) { break; }
    document.writeln('purchas phone and accessories at ' + dollarFormat(total) + ',bank balance is ' + dolarFormat(bank_balance));
}

if (total >= SPENDING_THRESHOLD) {
    document.writeln('Total of ' + dollarFormat(total) + ' exceeded threshold of ' + dollarFormat(SPENDING_THRESHOLD));
}
else {
    document.writeln('Oops, ran out of money. Total of ' +  dollarFormat(total) + ' exceeded bank balance of ' + dollarFormat(bank_balance + sub_total));
}

