// ==UserScript==
// @name     Auto-Title REAPER Stash Tabs
// @version  1
// @include  https://www.stash.reaper.fm/*
// ==/UserScript==

window.addEventListener('load', function () {
  const url = window.location.href;

  // Only run the script on the REAPER Stash domain
  if (url.includes('stash.reaper.fm/')) {

    // CASE 1: Handle individual file view pages (e.g., .../v/1234/file.zip)
    if (url.includes('/v/') || url.includes('/theme/')) {
      // Get the full innerText from the element
      const fullText = document.querySelectorAll('.section_title')[0].innerText;

      // Use a regular expression to remove the "Currently..." part and trim whitespace
      const dynamicTitle = fullText.replace(/Currently.*?\n/, '').trim();

      // Set the document title to the cleaned, dynamic string
      document.title = dynamicTitle;
    }

    // CASE 1: Handle the "Untagged" browse/tag pages
    else if (url.includes('/tag/Untagged') || /browse.*?cat=Untagged/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Untagged";
    }

    // CASE 1: Handle the "Untagged" browse/tag pages
    else if (url.includes('/tag/Bank-Patches') || /browse.*?cat=Bank-Patches/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Bank Patches";
    }

    // CASE 2: Handle the "Classic Theme" browse/tag pages
    else if (url.includes('/tag/Classic-Themes') || /browse.*?cat=Classic-Themes/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Classic-Themes";
    }

    // CASE 3: Handle the "Custom Actions" browse/tag pages
    else if (url.includes('/tag/Custom-Actions') || /browse.*?cat=Custom-Actions/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Custom-Actions";
    }

    // CASE 4: Handle the "Extension-Plug-ins" browse/tag pages
    else if (url.includes('/tag/Extension-Plug-ins') || /browse.*?cat=Extension-Plug-ins/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Extension Plug-ins";
    }

    // CASE 5: Handle the "FX-Chains" browse/tag pages
    else if (url.includes('/tag/FX-Chains') || /browse.*?cat=FX-Chains/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | FX Chains";
    }

    // CASE 6: Handle the "FX Preset Libraries" browse/tag pages
    else if (url.includes('/tag/FX-Preset-Libraries') || /browse.*?cat=FX-Preset-Libraries/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | FX Preset Libraries";
    }

    // CASE 7: Handle the "JS Effects" browse/tag pages
    else if (url.includes('/tag/JS-Effects') || /browse.*?cat=JS-Effects/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | JS Effects";
    }

    else if (url.includes('/tag/Key-Maps') || /browse.*?cat=Key-Maps/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Key-Maps";
    }

    else if (url.includes('/tag/Language-Packs') || /browse.*?cat=Language-Packs/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Language-Packs";
    }

    // CASE 3: Handle the "MIDI Drum Maps" browse/tag pages
    else if (url.includes('/tag/MIDI-Drum-Maps') || /browse.*?cat=MIDI-Drum-Maps/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | MIDI Drum Maps";
    }

    else if (url.includes('/tag/Misc') || /browse.*?cat=Misc/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Misc";
    }
    else if (url.includes('/tag/Project-and-Track-Templates') || /browse.*?cat=Project-and-Track-Templates/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Project and Track Templates";
    }
    else if (url.includes('/tag/Projects') || /browse.*?cat=Projects/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Projects";
    }
    else if (url.includes('/tag/Reverb-Impulses') || /browse.*?cat=Reverb-Impulses/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Reverb Impulses";
    }
    else if (url.includes('/tag/Screenshots') || /browse.*?cat=Screenshots/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Screenshots";
    }
    else if (url.includes('/tag/Scripts') || /browse.*?cat=Scripts/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Scripts";
    }
    else if (url.includes('/tag/Sounds') || /browse.*?cat=Sounds/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Sounds";
    }
    else if (url.includes('/tag/Themes') || /browse.*?cat=Themes/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Themes";
    }
    else if (url.includes('/tag/Videos') || /browse.*?cat=Videos/.test(url)) {
      // For these specific pages, set a clear, static title with the desired prefix
      document.title = "REAPER | Resources | Videos";
    }

  }
}, false);