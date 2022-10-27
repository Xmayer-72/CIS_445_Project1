var currentDisplay = 2;
var profile = document.getElementsByClassName('prof');
var reflection = document.getElementsByClassName('refl');
var showcase = document.getElementsByClassName('rhow');
var qualifications = document.getElementsByClassName('qual');

hideClass(reflection);
hideClass(showcase);
hideClass(qualifications);

function nextSection(){
    switch(currentDisplay){
        case 1:
            showClass(profile);
            hideClass(reflection);
            hideClass(showcase);
            hideClass(qualifications);
            currentDisplay = 2;
            break;
        case 2:
            hideClass(profile);
            showClass(reflection);
            hideClass(showcase);
            hideClass(qualifications);
            currentDisplay = 3;
            break;
        case 3:
            hideClass(profile);
            hideClass(reflection);
            showClass(showcase);
            hideClass(qualifications);
            currentDisplay = 4;
            break;
        case 4:
            hideClass(profile);
            hideClass(reflection);
            hideClass(showcase);
            showClass(qualifications);
            currentDisplay = 1;
            break;
    }
}

function hideClass(elements){
    for (let index = 0; index < elements.length; index++) {
        elements[index].style.display = 'none';
    }
}

function showClass(elements){
    for (let index = 0; index < elements.length; index++) {
        elements[index].style.display = '';
    }
}