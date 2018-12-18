'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a=0,b=0) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a+b;
};

arithmetic.subtract = function (...args) {
  if( args.length !== 2 ) {
    return null;
  }
  if( typeof args[0] !== 'number' || typeof args[1] !== 'number' ) { 
    return null;
  }
  return args[0]-args[1];
};

arithmetic.multiply = function (...args) {
  if( args.length !== 2 ) {
    return null;
  }
  if( typeof args[0] !== 'number' || typeof args[1] !== 'number' ) {
    return null;
  }
  return args[0] * args[1];
};

arithmetic.divide = function (...args) {
  if( args.includes(0) ) {
    return null;
  }
  if( args.length !== 2 ) {
    return null;
  }
  if( typeof args[0] !== 'number' || typeof args[1] !== 'number' ) {
    return null;
  }
  return args[0] / args[1];
};
