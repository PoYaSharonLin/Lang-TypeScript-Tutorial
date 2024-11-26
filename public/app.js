"use strict";
// classes
// Public & Private - loop resume 以特定 format output 到 console  
var resuman = /** @class */ (function () {
    function resuman(title, section_counts) {
        this.title = title;
        this.section_counts = section_counts;
    }
    resuman.prototype.format = function () {
        return "".concat(this.title, " consists of ").concat(this.section_counts, " sections");
    };
    return resuman;
}());
var google_resume = new resuman("Google_Resume", 4);
var meta_resume = new resuman("Meta_Resume", 5);
var resuman_array = [];
resuman_array.push(google_resume);
resuman_array.push(meta_resume);
resuman_array.forEach(function (resume) {
    console.log(resume.format());
    // console.log(resume.title, resume.section_counts);
});
// b. readonly - 不讓 user 改名
// user 不能改名
var user_public_info = /** @class */ (function () {
    function user_public_info(name, user_id) {
        this.name = name;
        this.user_id = user_id;
    }
    return user_public_info;
}());
var new_user = new user_public_info("YOYO MAN", 123456789);
// new_user.name = "YOYO 麵"
console.log(new_user);
