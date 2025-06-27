// ==UserScript==
// @name     Auto-Title vdo.ninja tab
// @version  1
// @include  https://vdo.ninja/*
// @description Mainly for use with HASS Agent named-window sensors and automations in HA; need a consistent name for HASS to recognize!
// ==/UserScript==

// console.log('Hello World 1!');

window.addEventListener('load', function() {
    
  let url = window.location.href;

  if (url.includes('vdo.ninja/?label')) {       
    let title = 'VDO.Ninja'
    document.title=title;
  }
  
}, false);

// console.log('Hello World 2!');
