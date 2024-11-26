// classes

// a. user input 存成一個 list
class resuman {
  constructor(public title: string, public section_counts: number){}
}
const google_resume = new resuman("Google_Resume",4)
console.log(google_resume)

// b. user input 分開存
class user_public_info {
  public name :string;
  public user_id: number;
  constructor(name :string, user_id :number){
    this.name = name;
    this.user_id = user_id
  }
 
}
const new_user = new resuman("YOYO MAN",123456789)
console.log(new_user)

// c. 不存 user input 存 input derivitives
// d. Optional input
// e. default input
class user_private_info {
  public age :number; 
  public payment? :string;
  public sexuality :string;
  constructor(birthyear :number, payment :string, sex :string = "N/A"){
    this.age = new Date ().getFullYear() - birthyear
    this.payment = payment
    this.sexuality = sex
  }
}
// const new_user_private_1 = new user_private_info(2001)
const new_user_private_2 = new user_private_info(2000, "VISA")
// console.log(new_user_private_1)
console.log(new_user_private_2)


class user_ {
  public payment_name :string;
  public verified? :boolean;

  constructor (payment :string, ){
    this.payment_name = payment;
    this.verified

  }
}