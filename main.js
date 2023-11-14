// document.body.textContent = "";

// let header = document.createElement("h1");
// header.textContent = "This page has been eaten";
// document.body.appendChild(header);


document.body.style.border = "5px solid red";

// Get Website Info

console.log("zigi");  

function logTabs(tabs) {
    console.log(tabs);
  }
  
  browser.tabs.query({ currentWindow: true }, logTabs);
  
