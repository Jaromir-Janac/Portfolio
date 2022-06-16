// BOOTSTRAP POPOVER AND TOOLTIP INICIALIZATION

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// NAVBAR HAMBURGER CLOSING ON CLICK

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// NAVBAR ACTIVE LINK CHANGE
const setAria = (page) => {

    let attribHome=document.getElementById("homeLink");
    let attribAbout=document.getElementById("aboutLink");
    let attribSkills=document.getElementById("skillsLink");
    let attribProjects=document.getElementById("projectsLink");
    let attribHobbies=document.getElementById("hobbiesLink");
    let attribContact=document.getElementById("contactLink");
    attribHome.setAttribute("aria-current", "");
    attribAbout.setAttribute("aria-current", "");
    attribSkills.setAttribute("aria-current", "");
    attribProjects.setAttribute("aria-current", "");
    attribHobbies.setAttribute("aria-current", "");
    attribContact.setAttribute("aria-current", "");
    attribHome.classList.remove("active");
    attribAbout.classList.remove("active");
    attribSkills.classList.remove("active");
    attribProjects.classList.remove("active");
    attribHobbies.classList.remove("active");
    attribContact.classList.remove("active");

    if (page == 'home'){
        attribHome.setAttribute("aria-current", "page");
        attribHome.classList.add("active") 
    }
    else if (page == 'about'){
        attribAbout.setAttribute("aria-current", "page");
        attribAbout.classList.add("active") 
    }
    else if (page == 'skills'){
        attribSkills.setAttribute("aria-current", "page");
        attribSkills.classList.add("active") 
    }
    else if (page == 'projects'){
        attribProjects.setAttribute("aria-current", "page");
        attribProjects.classList.add("active") 
    }
    else if (page == 'hobbies'){
        attribHobbies.setAttribute("aria-current", "page");
        attribHobbies.classList.add("active") 
    }
    else if (page == 'contact'){
        attribContact.setAttribute("aria-current", "page");
        attribContact.classList.add("active") 
    }

}
// ONLOAD EVENT
window.onload = function(){ document.getElementById("loading").style.display = "none" }