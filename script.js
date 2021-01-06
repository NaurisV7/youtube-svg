document.querySelector('.dropdown').addEventListener('click', function() {
    if (this.classList.contains('active')) {
        document.querySelector('.dropdown-side').classList.remove('active');
        this.classList.remove('active');
    } else {
        document.querySelector('.dropdown-side').classList.add('active');
        this.classList.add('active');
    }
})