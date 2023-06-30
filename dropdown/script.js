const toggleUserHover = () => {
    document.getElementById("dropdown-content").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdown = document.getElementById("dropdown-content");

        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}