// DOM Manupluating

// 01. Access Element
const box = document.querySelector(".content");
const title = document.querySelector("#title");
const para = document.getElementById("para");

// 02. Change the content & attribute
// Get the content of <p>
para.innerText;
para.textContent;

// Change content of <p>
para.innerText = "New version content";

// Change element of <p>
para.innerHTML = "<h2>From paragrapgh to heading level 02</h2>";

// Get attribure of <h1>
title.getAttribute("id");

// Change new attribute of <h1>
title.setAttribute("id", "my-title");

// Set new attribute of <h1>
title.setAttribute("class", "highlight-title");

// Delete attribute "class" of <h1>
title.removeAttribute("class");

// 03. Add, Change, Remove HTML Element
// Create new Element
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragaph";
document.body.appendChild(newPara);

// Change old Element
const newDiv = document.createElement("section");
const newBtn = document.createElement("button");
newDiv.appendChild(title);
newDiv.appendChild(para);
newDiv.appendChild(newPara);
newDiv.appendChild(newBtn);
newBtn.textContent = "Click Me";
box.replaceWith(newDiv);

// Remove Element
para.remove();

// 04. Add, Delete, Toggle Class Attribute
newBtn.setAttribute("class", "my-btn");

// add a class
newBtn.classList.add("active");

// remove class
newBtn.classList.remove("my-btn");

// toggle class
newBtn.classList.toggle("highlight");

// 05. Add CSS Inline
title.style.color = "red";
title.style.cssText = "font-size: 2rem; font-weight: bold";
