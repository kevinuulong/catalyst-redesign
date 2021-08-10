// ==UserScript==
// @name         Catalyst Redesign
// @namespace    https://kevinuulong.com/
// @version      2.0.1
// @description  Re-skin Catalyst
// @author       kevinuulong
// @match        https://www.catalyst.uc.edu/*
// @icon         https://www.google.com/s2/favicons?domain=uc.edu
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let pageName = JSON.parse(sessionStorage.getItem('pt_history_last_nui')).pageName;

    if (pageName === "PT_LANDINGPAGE") {
        let loaderStyles = document.createElement('link');
        loaderStyles.rel = "stylesheet";
        loaderStyles.type = "text/css";
        loaderStyles.href = "https://cdn.jsdelivr.net/gh/kevinuulong/catalyst-redesign/styles/css/loader.css";

        let loaderScript = document.createElement('script');
        loaderScript.src = "https://cdn.jsdelivr.net/gh/kevinuulong/catalyst-redesign/scripts/loader.js";

        document.head.appendChild(loaderStyles);
        document.head.appendChild(loaderScript);
    }

    let styles = document.createElement('link');
    styles.rel = "stylesheet";
    styles.type = "text/css";
    styles.href = "https://cdn.jsdelivr.net/gh/kevinuulong/catalyst-redesign/styles/css/custom.css";

    let script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/kevinuulong/catalyst-redesign/scripts/custom.js";

    if (document.readyState !== "loading") {
        console.log("Not ready yet!")
        setTimeout(loadCustom, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", loadCustom);
    }

    function loadCustom() {
        if (pageName === "PT_LANDINGPAGE") {
            document.head.appendChild(styles);
        }
        document.body.appendChild(script);
        document.getElementById("loader").classList.toggle('loaded');
    }
})();