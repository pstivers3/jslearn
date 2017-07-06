var TAX_RATE = 0.08;
var PHONE_PRICE = 500.00;
var ACCESSORY_PRICE = 30.00;
var SPENDING_THRESHOLD = 800.00;
var STARTING_BANK_BALANCE = 3000.00;
var total;
var bank_balance = STARTING_BANK_BALANCE;

function calculateTax(taxable_amount) {
    var tax = taxable_amount * TAX_RATE;
return tax
}

function formatPrice(price) {
    return '$' + price.toFixed(2);
}

while (true) {
    bank_balance = bank_balance - PHONE_PRICE - ACCESSORY_PRICE;
    sub_total = PHONE_PRICE + ACCESSORY_PRICE;
    total = sub_total + calculateTax(sub_total);
    if ((total >= SPENDING_THRESHOLD) || (total >= bank_balance)) { break; }
    document.writeln('purchas phone and accessories at ' + formatPrice(total) + ',bank balance is ' + formatPrice(bank_balance));
}

if (total >= SPENDING_THRESHOLD) {
    document.writeln('Total of ' + formatPrice(total) + ' exceeded threshold of ' + formatPrice(SPENDING_THRESHOLD));
}
else {
    document.writeln('Oops, ran out of money. Total of ' +  formatPrice(total) + ' exceeded bank balance of ' + formatPrice(bank_balance));
}

