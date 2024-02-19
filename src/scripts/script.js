const navbarNavigation  = document.querySelector(".navbar-navigation");
const menuIcon = document.querySelector(".menu-icon");
const navbarContent = document.querySelector(".navbar-content")

menuIcon.addEventListener("click", () => {
    navbarContent.style.display = "flex";
    navbarContent.style.flexDirection = "column"
    navbarNavigation.style.alignItems = "center";
    navbarNavigation.style.justifyContent = "center";
    menuIcon.style.display = 'none';
});

document.addEventListener("click", (event) => {
    const isClickedOnMenu = navbarContent.contains(event.target)
    const isClickedOnMenuIcon  = menuIcon.contains(event.target);

    if(!isClickedOnMenu && !isClickedOnMenuIcon){
        navbarContent.style.display = "";
        navbarContent.style.flexDirection = ""
        navbarNavigation.style.alignItems = "";
        navbarNavigation.style.justifyContent = "";
        menuIcon.style.display = '';
    }
});