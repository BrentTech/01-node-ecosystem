'use strict';

const faker = require('faker');
const arithmetic = require('../lib/arithmetic.js');

let numOne = faker.random.number();
let numTwo = faker.random.number();
let string = faker.lorem.word();


// addition - test for two numbers, test for 1 param, no param, test for non numbers

describe('Arithmetic Module - Addition', () => {

  it('can add two numbers', () => {
    let expected = numOne + numTwo;
    let sum = arithmetic.add(numOne, numTwo);
    expect(sum).toEqual(expected);
  });

  it('Only one parameter passed', () => {
    let expected = numOne;
    let sum = arithmetic.add(numOne);
    expect(sum).toEqual(expected);
  });

  it('one param not a number', () => {
    let expected = null;
    let sum = arithmetic.add(numOne, string);
    expect(sum).toEqual(expected);
  });

});

// subtraction - test for two numbers, test for 1 param (how does that look?), test for non numbers

describe('Arithmetic Module - Subtraction', () => {

  it('can subtract two numbers', () => {
    expect(arithmetic.subtract(numOne, numTwo)).toEqual(numOne - numTwo);
  });

  it('requires two parameters', () => {
    expect(arithmetic.subtract(numOne)).toEqual(null);
    expect(arithmetic.subtract()).toEqual(null);
    expect(arithmetic.subtract(numOne, numOne, numTwo)).toEqual(null);
  });

  it('parameters that aren\'t numbers', () => {
    expect(arithmetic.subtract(numOne, string)).toEqual(null);
  });

});

// multiplication - test for two numbers, test for 1 parameter, test for non numbers

describe('Arithmetic Module - Multiplication', () => {

  it('can multiply two numbers', () => {
    expect(arithmetic.multiply(numOne, numTwo)).toEqual(numOne * numTwo);
  });

  it('requires only two parameters', () => {
    expect(arithmetic.multiply(numOne)).toEqual(null);
    expect(arithmetic.multiply(numOne, numOne, numTwo)).toEqual(null);
    expect(arithmetic.multiply()).toEqual(null);
  });

  it('parameters that aren\'t numbers', () => {
    expect(arithmetic.multiply(numOne, string)).toEqual(null);
  });

});

// division - test for two numbers, test for correct number of parameters, test for non numbers, test for dividing by zero

describe('Arithmetic Module - Division', () => {

  it('can divide two numbers', () => {
    expect(arithmetic.divide(numOne, numTwo)).toEqual(numOne / numTwo);
  });

  it('requires only two parameters', () => {
    expect(arithmetic.divide()).toEqual(null);
    expect(arithmetic.divide(numOne)).toEqual(null);
    expect(arithmetic.divide(numOne, numTwo, numOne)).toEqual(null);
  });

  it('only allow numbers', () => {
    expect(arithmetic.divide(numOne, string)).toEqual(null);
  });

  it('prevent division by zero', () => {
    expect(arithmetic.divide(numOne, 0)).toEqual(null);
  });

});

