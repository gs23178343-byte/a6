document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('open');
        });
    }

    // Modave Interactive Capsule Palette & Fabric Workbench
    const weaveSelect = document.getElementById('weave-select');
    const mommeSlider = document.getElementById('momme-slider');
    const mommeVal = document.getElementById('momme-val');
    const mommeGauge = document.getElementById('momme-gauge');

    if (weaveSelect && mommeGauge) {
        weaveSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            saveStateSafely('gsa_weave', val);
        });
    }

    if (mommeSlider && mommeVal && mommeGauge) {
        mommeSlider.addEventListener('input', (e) => {
            const m = e.target.value;
            mommeVal.textContent = m + ' Momme';
            mommeGauge.textContent = m + ' mm';
            saveStateSafely('gsa_momme', m);
        });
    }

    // Helper for localStorage safety
    function saveStateSafely(key, value) {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(key, value);
            }
        } catch (err) {
            console.warn('localStorage not accessible:', err);
        }
    }
});
