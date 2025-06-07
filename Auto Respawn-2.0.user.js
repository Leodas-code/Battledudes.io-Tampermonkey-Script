// ==UserScript==
// @name         Auto Respawn
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Automatically clicks the respawn button with O key toggle.
// @author       M.Rithish
// @match        *://battledudes.io/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let autoRespawnEnabled = false;

    // Toggle Display Box
    const toggle = document.createElement('div');
    toggle.style.position = 'fixed';
    toggle.style.top = '40px';
    toggle.style.right = '10px';
    toggle.style.padding = '10px';
    toggle.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
    toggle.style.color = 'white';
    toggle.style.borderRadius = '5px';
    toggle.style.zIndex = '1000';
    toggle.style.overflow = 'hidden';
    toggle.style.fontFamily = 'monospace';
    toggle.innerText = 'Auto Respawn: OFF';
    document.body.appendChild(toggle);

    // Listen for 'O' key to toggle auto respawn
    document.addEventListener('keydown', function (e) {
        if (e.key.toUpperCase() === 'O') {
            autoRespawnEnabled = !autoRespawnEnabled;
            toggle.innerText = 'Auto Respawn: ' + (autoRespawnEnabled ? 'ON' : 'OFF');
        }
    });

    // Function for Auto Respawn
    setInterval(() => {
        if (!autoRespawnEnabled) return;
        const btn = document.querySelector('#respawn_button');
        if (btn && btn.offsetParent !== null) {
            btn.click();
        }
    }, 397);
})();
