// document.addEventListener("DOMContentLoaded", function () {
//     const themeSwitch = document.getElementById("themeSwitch");
//     const themeStylesheet = document.getElementById("themeStylesheet");

//     // Check local storage for theme preference
//     if (localStorage.getItem("theme") === "light") {
//         themeSwitch.checked = true;
//         themeStylesheet.setAttribute("href", "lightStyle.css");
//     }

//     themeSwitch.addEventListener("change", function () {
//         if (themeSwitch.checked) {
//             themeStylesheet.setAttribute("href", "darkStyle.css");
//             localStorage.setItem("theme", "dark");
//         } else {
//             themeStylesheet.setAttribute("href", "lightStyle.css");
//             localStorage.setItem("theme", "light");
//         }
//     });
// });
// function toggleTheme() {
//   const video = document.getElementById("bg-video");
//   const source = document.getElementById("video-source");

//   if (source.getAttribute("src") === "light.mp4") {
//     source.src = "dark.mp4";   
//   } else {
//     source.src = "light.mp4";
//   }

//   video.load(); // reload video
// }


document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("themeSwitch");
    const themeStylesheet = document.getElementById("themeStylesheet");

    const video = document.getElementById("bg-video");
    const source = document.getElementById("video-source");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        themeSwitch.checked = true;
        themeStylesheet.setAttribute("href", "darkStyle.css");
        source.src = "dark.mp4";
    } else {
        themeStylesheet.setAttribute("href", "lightStyle.css");
        source.src = "light.mp4";
    }

    video.load();

    // Toggle theme
    themeSwitch.addEventListener("change", function () {
        if (themeSwitch.checked) {
            themeStylesheet.setAttribute("href", "darkStyle.css");
            source.src = "dark.mp4";
            localStorage.setItem("theme", "dark");
        } else {
            themeStylesheet.setAttribute("href", "lightStyle.css");
            source.src = "light.mp4";
            localStorage.setItem("theme", "light");
        }

        video.load(); 
    });
});