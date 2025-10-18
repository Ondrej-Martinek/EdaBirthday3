document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const container = document.querySelector('.container');

    function adjustLayout() {
        const navHeight = nav.offsetHeight;
        container.style.paddingTop = navHeight + 'px';
    }

    adjustLayout();
    window.addEventListener('resize', adjustLayout);

    const body = document.body;

    function fireConfetti() {
        const end = Date.now() + (3 * 1000);
        const colors = ['#bb0000', '#ffffff'];

        (function frame() {
            if (Date.now() > end) {
                return;
            }

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            requestAnimationFrame(frame);
        }());
    }

    function createBalloons() {
        const colors = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'];
        for (let i = 0; i < 15; i++) {
            const balloonContainer = document.createElement('div');
            balloonContainer.classList.add('balloon-container');
            balloonContainer.style.left = Math.random() * 100 + 'vw';
            balloonContainer.style.animationDuration = (Math.random() * 10 + 8) + 's'; // 8-18 seconds

            const balloonBody = document.createElement('div');
            balloonBody.classList.add('balloon-body');
            balloonBody.style.backgroundColor = colors[i % colors.length];

            const balloonString = document.createElement('div');
            balloonString.classList.add('balloon-string');

            balloonContainer.appendChild(balloonBody);
            balloonContainer.appendChild(balloonString);
            body.appendChild(balloonContainer);
        }
    }

    body.addEventListener('mouseenter', () => {
        fireConfetti();
        createBalloons();
    });
});

