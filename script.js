
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function disableSidebar(){
    sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none";
}
    document.getElementById('icon2').addEventListener('click',function(event) {
    event.preventDefault();
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        // Switch to dark theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        // Switch to light theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
});

document.getElementById('icon').addEventListener('click',function(event) {
    event.preventDefault();
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        // Switch to dark theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        // Switch to light theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
});