// Mouseover tests 

const experienceCard = document.querySelector('.text-experience');
const educationCard = document.querySelector('.text-education');
const backgrdImg = document.querySelector('.background-image');
const lineDraw = document.querySelector("section > div");
const mainContent = document.querySelector("body > div > section");
const textEducation = document.querySelector("div.text-education > ul > li:nth-child(1)");
const textExperience = document.querySelector("div.text-experience > ul > li:nth-child(1)");


// Education card trigger //

textEducation.addEventListener ("mouseover", (event) => {
    
    setTimeout(() => {
        mainContent.style.backgroundImage = "url(images/background_sideways_new.jpg)";
    }, 500);
    
    setTimeout(() => {        
        lineDraw.classList.toggle("horiz-line");    
    }, 500);
});    



textEducation.addEventListener ("mouseout", (event) => {
    
    setTimeout(() => {        
        lineDraw.classList.toggle("horiz-line");
        mainContent.style.backgroundImage = "url(images/background_original_edited2_resize.jpg)";    
    }, 500);
});

// Experience card trigger //

textExperience.addEventListener ("mouseover", (event) => {

    setTimeout(() => {
        mainContent.style.backgroundImage = "url(images/background_pointing_resize.png)"; // try a setTimeOut function //
    }, 500);
});    


textExperience.addEventListener ("mouseout", (event) => {
    
    setTimeout(() => {
        mainContent.style.backgroundImage = "url(images/background_original_edited2_resize.jpg)";        
    }, 500);
    
});


// Opening Form in a new window with set size 

// let linkForm = document.querySelector('.link-form');

// linkForm.addEventListener('onclick', (event) => {
//     window.open(url("/form/form.html"), 'Contact Me', 'width=600,height=400');
// });
