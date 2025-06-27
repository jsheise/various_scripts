// ==UserScript==
// @name         WhatsApp Web - Disable Ctrl+Delete Shortcut
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Prevents WhatsApp Web from clearing chat when pressing Ctrl+Delete
// @author       oscardianno
// @match        https://web.whatsapp.com/*
// @grant        none
// @license      MIT
// ==/UserScript==
 
document.addEventListener('keydown', function(e) {
    if (e.key === 'Delete' && e.ctrlKey) {
        e.stopImmediatePropagation();
    }
}, true);