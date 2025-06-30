document.querySelectorAll('section h2').forEach((title) => {
    title.addEventListener('click', () => {
        const section = title.parentElement;
        section.classList.toggle('collapsed');
    });
});
