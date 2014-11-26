// THE constructor
function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = (passengers) ? passengers : [];
}

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function(newValue) {
	this.running = true;
}

Car.prototype.off = function(newValye) {
	this.running = false;
}

Car.prototype.driveTo = function(destination) {
	if (this.running === true) {
	console.log("driving to " + destination);
	return true;
	}
	return false;
}

Car.prototype.park = function(parked) {
	if (this.running === false) {
		console.log("parked!!");
		return true
	}
	return false
}

/* ----- Phase 3 ----- */
Car.prototype.pickUp = function(name) {
	if (this.running === true && this.passengers.length < this.seats-1) {
		console.log("driving to pick up " + name);
		this.passengers.push(name);
	return true
	}
return false
}

Car.prototype.dropOff = function(name) {
	index = this.passengers.indexOf(name);
	if (index != -1 && this.running) {
		this.passengers.splice(index, 1);
		console.log("driving to drop off " + name)
		return true;
	}
	return false;
}

Car.prototype.passengerCount = function() {

	return this.passengers.length;
}



// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;