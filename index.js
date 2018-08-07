// Code your solution in this file!

drivers = ['a', 'b', 'c']


const returnFirstTwoDrivers = function(drivers) {

  return [drivers[0], drivers[1]]

}

const returnLastTwoDrivers = function(drivers) {

  return [drivers[drivers.length - 2], drivers[drivers.length - 1]]

}

var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
  return function(fare) {
    return fare * n
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, f) {
  return f(drivers)
}
