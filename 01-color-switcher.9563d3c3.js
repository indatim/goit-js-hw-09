!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),timerId:null};t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,t.timerId=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(t.timerId),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.9563d3c3.js.map
