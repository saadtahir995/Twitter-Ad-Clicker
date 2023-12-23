// ==UserScript==
// @name         Twitter AD Clicker
// @namespace    http://tampermonkey.net/
// @version      2023-12-19
// @description  try to take over the world!
// @author       You
// @match        https://twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  let blockedCount = 0;

  /**
   * Searches the page for spans that contain the word "Promoted"
   * and returns the first one it finds. Checks for the svg icon too.
   */
  function getPromotedTweet() {
    const spans = document.querySelectorAll('[dir="ltr"] > span');
    let btn = null;

    for (let span of spans) {
      if (!span.textContent) continue;

      if (span.textContent === "Ad") {

        btn = span;

      }
    }

    return btn;
  }

  

  function blockAdvertiser() {
    
    const btn = getPromotedTweet();

    if (!btn) return;

    const pnt = btn.closest("article");
     // console.log(pnt);
    if (!pnt) return;
        var divElements = pnt.querySelectorAll('div');

var imgCount = 0;
divElements.forEach(function(divElement) {
    // Use querySelector to find img tags within each div
    var imgElements = divElement.querySelectorAll('img');
    if(imgCount === 1){
        imgElements[1].click(); // Click on the second img tag
    }
    imgCount += 1;
});

  }


  setInterval(() => {
              blockAdvertiser();

  }, 5000);
})();
