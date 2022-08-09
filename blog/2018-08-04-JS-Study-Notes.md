---
slug: Javascript_Study_Note
title: Javascript Study Note 1 - From javascript.info
authors: taowang
tags: [javascript]
---

# JavaScript

Javascript can execute not only in the browser, but also on the server, or actually on any device where there exists a special program called the JavaScript Engine

## How do engines work

Engines are complicated. But the basics are easy

- The engine reads teh script
- Then it converts the script to the machine language
- Then the machine code runs, pretty fast

### In-browser Javascript is able to

- Add new HTML to the page, change the existing content, modify styles
  React to user actions, run on mouse clicks, pointer movements, key presses.
- Send requests over the network to remote network, download and upload files (Ajax and COMET)
  Get and set cookie, ask quesitons to the visitor, show messages
  Remember the data on the client side(local storage)

### Restriction

- JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs, no access to OS system functions
- Different tabs/windows generally do not know each other. Same Origin Policy.
- Javascript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled

## Fundamentals

### Variable

we can declare variables to store data. That can be done using var or let or const

- let - is a modern variable declaration
- var - old-scholl variable declaration
- const - the value of variable can’t be changed

### Type

There are 7 basic types in Javascript

- number for numbers of any kind: integer or floating-point
- String for sttrings
- boolean
- null for unknown values - a standalone type
- object for more complex data structures
- symbol for unique identifiers

The typeof operator allows us to see whihc type is tored in the variable

- Two forms : typeof x or typeof(x)
- Return a string with the name of the type

Backticks are extended functionality quotes. They allow us to embed variables and expressions into a string by wrapping them in ${..}

```js
let name = 'John';
// embed a variable
alert(`Hello ${name}!`);
// embed an expression
alert(`the result is ${1 + 2}`);
```
