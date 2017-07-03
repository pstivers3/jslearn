// crreate flight object
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    }
};

// enumerate object properties
document.writeln('\n**** enumerate, filtering functions ****');
var name;
for (name in flight) {
    if (typeof flight[name] !== 'function') {
       document.writeln(name + ': ' + flight[name]);
    }
}

document.writeln('\n**** enumerate, no filters ****');
var name;
for (name in flight) {
       document.writeln(name + ': ' + flight[name]);
}

document.writeln('\n**** enumerate, specific properties ****');
var i;
var properties = [
    flight.airline,
    flight.departure.IATA
];


for (i = 0; i < properties.length; i += 1) {
	document.writeln(properties[i].str + ': ' + properties[i]);
   // console.log(`flight.${properties[i]} = ${flight[properties[i]}`);
}



