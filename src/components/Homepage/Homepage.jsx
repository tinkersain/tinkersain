import { useState } from "react";
import "./imgdesc.css";

function Homepage() {
  let state = true;
  function addInParentContent(state, input1, input2) {
    const content1 = `<div class="content1">
          <div class="data" id="data1">${input1}</div>
          <div class="image" id="image1">
            <img
              src=${input2}
              alt="Book Cover 1"
            />
          </div>
        </div>`;

    const content2 = `<div class="content2">
          <div class="image" id="image2">
            <img
              src=${input2}
              alt="Book Cover 2"
            />
          </div>
          <div class="data" id="data2">${input1}</div>
        </div>`;

    const parentContent = document.getElementById("parentContent");
    if (state) parentContent.innerHTML += content1;
    else parentContent.innerHTML += content2;
  }

  function handleClick() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    if (input1.length === 0 || input2.length === 0) {
      alert("Please fill both the fields !");
    } else {
      addInParentContent(state, input1, input2);
      state = !state;
    }
  }

  return (
    <div class="container">
      <div class="nav">
        <div class="nav-logo">
          <img src="https://ik.imagekit.io/tedxsitb/book-logo.png?updatedAt=1720370243484" />
        </div>
        <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </div>
      </div>
      <div class="input-section">
        <input type="text" id="input1" placeholder="Book-1 Summary " />
        <input type="text" id="input2" placeholder="Book-2 Summary" />
        <button onClick={handleClick}>Add</button>
      </div>
      <div class="content" id="parentContent"></div>
    </div>
  );
}

export default Homepage;
