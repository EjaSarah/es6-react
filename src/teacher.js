import { Person } from "./person";

export function promote() {}
export default class Teacher extends Person {
  constructor(name, degree) {
    //referencing constructor from parent class so we get the name comig from there
    super(name), //referencing  name coming from parent class
      (this.degree = degree);
  }
  teach() {
    console.log("teach");
  }
}
