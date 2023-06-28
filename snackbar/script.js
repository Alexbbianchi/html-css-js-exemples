function snackbarTest() {
    snackbar({ message: "Test" });
}

function snackbar ({ message, backgroundColor = '#5edc9d', timeout = 3000 }) {
    var snackbar = document.createElement('div');
    
    snackbar.innerHTML = message;
    snackbar.classList.add('snackbar');
    snackbar.style.backgroundColor = backgroundColor;

    document.body.appendChild(snackbar);

    setTimeout(() => document.body.removeChild(snackbar), timeout);
}