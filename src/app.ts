// classes

// Public & Private - loop resume 以特定 format output 到 console  
class resuman {
  constructor(private title: string, private section_counts: number){}
  public format() {
    return `${this.title} consists of ${this.section_counts} sections`;
  }
}
const google_resume = new resuman("Google_Resume",4)
const meta_resume = new resuman("Meta_Resume",5)

let resuman_array: resuman[] = [];
resuman_array.push(google_resume)
resuman_array.push(meta_resume)

resuman_array.forEach(resume => {
  console.log(resume.format());
  // console.log(resume.title, resume.section_counts);
}
)

// b. readonly - 不讓 user 改名
// user 不能改名
class user_public_info {
  readonly name :string;
  public user_id: number;
  constructor(name :string, user_id :number){
    this.name = name;
    this.user_id = user_id
  }
 
}
const new_user = new user_public_info("YOYO MAN",123456789)
// new_user.name = "YOYO 麵"
console.log(new_user)