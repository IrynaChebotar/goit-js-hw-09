!function(){var a=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),t=null;function d(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}a.addEventListener("click",(function(){a.disabled=!0,a.classList.add("disabled"),e.disabled=!1,e.classList.remove("disabled"),e.classList.add("active"),t=setInterval(d,1e3)})),e.addEventListener("click",(function(){a.disabled=!1,a.classList.remove("disabled"),e.disabled=!0,e.classList.remove("active"),e.classList.add("disabled"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.ba0f9f59.js.map
