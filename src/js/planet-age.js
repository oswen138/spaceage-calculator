function planetAge(mercuryAge, venusAge, marsAge, jupiterAge) {
  this.mercuryAge = mercuryAge;
  this.venusAge = venusAge;
  this.marsAge = marsAge;
  this.jupiterAge = jupiterAge;
}

planetAge.prototype.checkType = function() {
  return "approaching takeoff!";
}