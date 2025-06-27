// ==UserScript==
// @name     Auto-Title DrunkenSlug Tabs
// @version  1
// @include  https://www.drunkenslug.com/*
// ==/UserScript==

console.log('Hello World 1!');


window.addEventListener('load', function() {
  let url = window.location.href;
  if (url.includes('drunkenslug.com/details')) {       
    let title = document.querySelectorAll('h2')[0].innerText;
    document.title=title;
    for (const a of document.querySelectorAll("a")) {
      if (a.textContent.includes("Preview")) {
        // console.log(a.textContent)
        a.click();
      }
    } 
    for (const a of document.querySelectorAll("a")) {
      if (a.textContent.includes("Thumbnail")) {
        // console.log(a.textContent)
        a.click();
      }
    }
  }
}, false);
console.log('Hello World 2!');
