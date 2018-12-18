![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 01 Node Ecosystem

### Author: Brent Woodward

### Links and Resources
[![Build Status](https://www.travis-ci.com/BrentTech/01-node-ecosystem.svg?branch=master)](https://www.travis-ci.com/BrentTech/01-node-ecosystem)
* [repo](https://github.com/BrentTech/01-node-ecosystem)
* [travis](https://www.travis-ci.com/BrentTech/01-node-ecosystem)
* [heroku](https://woodward-01-node-ecosystem.herokuapp.com/)

### Modules
#### `arithmetic.js`
##### Exported Values and Methods

###### `arithmetic.add(a, b) -> number`
Used to add two numbers together, or return same value if one number entered.

arithmetic.add(5, 5) //10
arithmetic.add(5) //5
arithmetic.add(5, 'cheese') //null
###### `arithmetic.subtract(a, b) -> number`
Used to subtract two numbers together. Doesn't allow anything two inputs.

arithmetic.subtract(5, 2) //3
arithmetic.subtract(5) //null
arithmetic.subtract(5, 'cheese') //null
###### `arithmetic.multiply(a, b) -> number`
Used to multiply two numbers together. Doesn't allow anything two inputs.

arithmetic.multiply(5, 2) //10
arithmetic.multiply(5) //null
arithmetic.multiply(5, 'cheese') //null
###### `arithmetic.divide(a, b) -> number`
Used to divide two numbers together. Doesn't allow anything two inputs. Returns NULL if 0 is one of the inputs.

arithmetic.divide(6, 2) //3
arithmetic.divide(5) //null
arithmetch.divide(5, 0) //null
arithmetic.divide(5, 'cheese') //null

### Setup
#### `.env` requirements
* `PORT` - Defined by environment

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns console logs from functions from modules.

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?


<!-- 
Things to do:
Finish ReadME
check lab requirements
do Greet portion - all of it
refactor code
allow for arrays
submit
-->