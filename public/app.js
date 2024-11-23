"use strict";
// output anchor 
var anchor = document.querySelector('a');
console.log("anchor:" + anchor.href);
//output form 
var form = document.querySelector('.new-item-form');
console.log("form child element counts:" + form.childElementCount);
console.log("form children type + name:" + form.children);
// output inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// Type casting 
var FormElement = document.querySelector('.new-item-form');
console.log("form element children type + name:" + FormElement.children);
