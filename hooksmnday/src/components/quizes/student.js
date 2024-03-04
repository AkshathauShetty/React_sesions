import React, { Component } from "react";
class StudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Mayur",
      lastName: "Pai",
      rollNo: 33,
      age: 23,
      books: [
        "C Programming",
        "C++ Programming",
        "Data Structure and Algorithms",
      ],
    };
  }
  render() {
    let count=0;
    return (
      <div>
        <h1>hello</h1>
        { count && <h1>hello</h1>}
      </div>
    );
  }
}
export default StudentComponent;
