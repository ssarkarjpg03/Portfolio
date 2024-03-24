// $('.portfolio-button').mousedown(function(){
//     timeout = setInterval(function(){
//         window.scrollBy(0,-1); // May need to be -1 to go down
//     }, 0); // Play around with this number. May go too fast

//     return false;
// });

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function disableSidebar(){
    sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none";
}

// function toggleTheme() {
//     const body = document.body;

//     if (body.classList.contains('light-theme')) {
//         // Switch to dark theme
//         body.classList.remove('light-theme');
//         body.classList.add('dark-theme');
//     } else {
//         // Switch to light theme
//         body.classList.remove('dark-theme');
//         body.classList.add('light-theme');
//     }
// }

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