const copyCode = () => {
    const textInsert = document.querySelector('#textInsert');

    navigator.clipboard.writeText(textInsert.value)
        .then(() => snackbar({ message: 'Content copied to clipboard' }))
        .catch((error) => snackbar({ message: 'Failed to copy content: ' + error, backgroundColor: '#f44336' }));
}

const snackbar = ({ message, backgroundColor = '#5edc9d', timeout = 3000 }) => {
    const snackbar = document.createElement('div');
    
    snackbar.innerHTML = message;
    snackbar.classList.add('snackbar');
    snackbar.style.backgroundColor = backgroundColor;

    document.body.appendChild(snackbar);

    setTimeout(() => document.body.removeChild(snackbar), timeout);
}