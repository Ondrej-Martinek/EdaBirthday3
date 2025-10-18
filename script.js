document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const container = document.querySelector('.container');
    const invitation = document.querySelector('.invitation');
    const button = document.querySelector('.button');

    function adjustLayout() {
        const navHeight = nav.offsetHeight;
        container.style.paddingTop = navHeight + 'px';
    }

    adjustLayout();
    window.addEventListener('resize', adjustLayout);

    const body = document.body;

    function createConfetti() {
        // Clear existing confetti before creating new ones
        const existingConfetti = document.querySelectorAll('.confetti');
        existingConfetti.forEach(confetto => confetto.remove());

        for (let i = 0; i < 100; i++) {
            const confetto = document.createElement('div');
            confetto.classList.add('confetti');
            confetto.style.left = Math.random() * 100 + 'vw';
            confetto.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2-5 seconds
            confetto.style.animationDelay = Math.random() * 2 + 's';
            confetto.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            body.appendChild(confetto);
        }
    }

    let hoverTimeout;
    body.addEventListener('mouseenter', () => {
        createConfetti();
    });

    body.addEventListener('mouseleave', () => {
        // Optional: remove confetti when mouse leaves
        const existingConfetti = document.querySelectorAll('.confetti');
        existingConfetti.forEach(confetto => confetto.remove());
    });
});
