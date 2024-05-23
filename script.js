document.querySelector('.projects-btn').addEventListener('click', function() {
    document.querySelector('.projects-overlay').classList.add('show');
});

document.querySelector('.projects-overlay').addEventListener('click', function(event) {
    if (!event.target.closest('.projects-content')) {
        document.querySelector('.projects-overlay').classList.remove('show');
    }
});
