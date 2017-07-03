//alert('Hello, world!');

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

document.writeln('airline is ', flight.airline);

//flight.equipment is undefined
document.writeln('flight equipment is ', flight.equipment || 'unknown'); // unknown
document.writeln('flight equipment is ', flight.equipment); // undefined

// Attempting to retrieve values from undefined will throw a TypeError exception
document.writeln('flight equipment model is ', flight.equipment && flight.equipment.model); //unknown
// document.writeln('flight equipment model is ', (flight.equipment.model); //throws exception.

// update the object
// augment
flight.equipment = {
	model: 'Boeing 777'
};
// augment
flight.status = 'overdue';
// edit
flight.arrival.IATA = 'PDX';

document.writeln('\nflight model is ', flight.equipment.model); // Boing 777
document.writeln('flight status is ', flight.status); // overdue 
document.writeln('flight arrival airport is ', flight.arrival.IATA); // PDX 

// reflection
document.writeln("\n", 'typeof flight.number is a ', typeof flight.number); // number 
document.writeln('type flight.toString is a ', flight.toString); // function
document.writeln('flight.hasOwnProperty(\'number\') is ', flight.hasOwnProperty('number')); // true 

