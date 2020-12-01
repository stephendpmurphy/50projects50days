const panels = document.querySelectorAll('.panel');

panels.forEach((el) => {
    el.addEventListener('click', () => {
        removeActiveClasses();
        el.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}