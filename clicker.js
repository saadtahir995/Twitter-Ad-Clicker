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

  // const spans = document.querySelectorAll("span");
  // let btn = null;

  // for (let span of spans) {
  //   if (!span.textContent) continue;

  //   if (
  //     span.textContent.includes("Promoted") ||
  //     span.textContent.includes("Promoted by")
  //   ) {
  //     // Are we sure it's not just a tweet that says "Promoted"??
  //     // Let's try to be more sure. Check for svg promoted icon.
  //     if (!span.parentNode) continue;

  //     const divPromoted = span.parentNode.parentNode;
  //     if (!divPromoted) continue;

  //     const svgPromoted = divPromoted.querySelector(
  //       'svg[viewBox="0 0 24 24"]'
  //     );
  //     if (!svgPromoted) continue;

  //     const svgShape = divPromoted.querySelector(
  //       '[d="M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"]'
  //     );
  //     if (!svgShape) continue;

  //     btn = span;
  //     break;
  //   }
  // }

  // return btn;
  // }

  function blockAdvertiser() {
    // const spans = document.querySelectorAll("span");
    // let btn = null;

    // for (let span of spans) {
    //   if (
    //     span.textContent.includes("Promoted") ||
    //     span.textContent.includes("Promoted by")
    //   ) {
    //     // Are we sure it's not just a tweet that says "Promoted"??
    //     // Let's try to be more sure. Check for svg promoted icon.
    //     const divPromoted = span.parentNode.parentNode;
    //     const svgPromoted = divPromoted.querySelector(
    //       'svg[viewBox="0 0 24 24"]'
    //     );
    //     if (!svgPromoted) continue;

    //     const svgShape = divPromoted.querySelector(
    //       '[d="M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"]'
    //     );
    //     if (!svgShape) continue;

    //     btn = span;
    //     break;
    //   }
    // }

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



    /*const someSpans = pnt.querySelectorAll("span");

    someSpans.forEach((span) => {
      if (!span.textContent) return;
      if (span.textContent.includes("@")){
          console.log(span.textContent);
          //span.click();
         // pnt.click();

      }
    });*/


  }


  setInterval(() => {
              blockAdvertiser();

  }, 15000);
})();
