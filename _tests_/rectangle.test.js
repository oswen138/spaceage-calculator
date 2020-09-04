//test suite for tests related to the planetAge class

import Rectangle from '../src/js/rectangle.js';

describe('Rectangle', () => {

  test('should correctly create a rectangle object using two sides', () => {
    const rectangle = new Rectangle(3,5);
    expect(rectangle.getArea()).toEqual(15);
  });
});




//test for calculating age in mercury years


//test for calculating age in venus years


//test for calculating age in Mars years


//test for calculating age in Jupiter years


//test to determine how many years left to live on planet

//test to determine years left on planet based on life expectancy


//test to determine life expectancy based on eating chocolate


//test to determine life expectancy based on drinking juice

