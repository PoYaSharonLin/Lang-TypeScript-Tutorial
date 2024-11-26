"use strict";
// classes
// a. user input 存成一個 list
var resuman = /** @class */ (function () {
    function resuman(title, section_counts) {
        this.title = title;
        this.section_counts = section_counts;
    }
    return resuman;
}());
var google_resume = new resuman("Google_Resume", 4);
console.log(google_resume);
// b. user input 分開存
var user_public_info = /** @class */ (function () {
    function user_public_info(name, user_id) {
        this.name = name;
        this.user_id = user_id;
    }
    return user_public_info;
}());
var new_user = new resuman("YOYO MAN", 123456789);
console.log(new_user);
// c. 不存 user input 存 input derivitives
// d. Optional input
// e. default input
var user_private_info = /** @class */ (function () {
    function user_private_info(birthyear, payment, sex) {
        if (sex === void 0) { sex = "N/A"; }
        this.age = new Date().getFullYear() - birthyear;
        this.payment = payment;
        this.sexuality = sex;
    }
    return user_private_info;
}());
// const new_user_private_1 = new user_private_info(2001)
var new_user_private_2 = new user_private_info(2000, "VISA");
// console.log(new_user_private_1)
console.log(new_user_private_2);
var user_ = /** @class */ (function () {
    function user_(payment) {
        this.payment_name = payment;
        this.verified;
    }
    return user_;
}());
