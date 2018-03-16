/*eslint-env browser*/

//GLOBAL VARIABLES
var i;          //Incrementer for loop
var h2;         //Store the currently selected h2
var div;        //Store the currently selected div
var h2Elements; //Store the collection of h2 elements
var faqs;       //Store the main tag

//HELPER FUNCTION GET ELEMENTS FROM THE DOM
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

//MAIN FUNCTION TO TOGGLE VISIBILITY OF ACCORDION
var toggle = function (e) {
    "use strict";
    //Get the currently selected h2 element
    h2 = e.currentTarget;
    //Get the div element for the currently selected element
    div = h2.nextElementSibling;
    //Get all h2 elements in the main tag
    h2Elements = faqs.getElementsByTagName("h2");
    //Loop through the collection of h2 elements
    for (i = 0; i < h2Elements.length; i += 1) {
        //If the h2 element is not the currently selected h2
        if (h2Elements[i] !== e.currentTarget) {
            //Remove the class attribute from the h2
            h2Elements[i].removeAttribute("class");
            //Remove the class attribute from the div
            h2Elements[i].nextElementSibling.removeAttribute("class");
        }
    }
    
    //If the currently selected h2 has a class attribute
    if (h2.hasAttribute("class")) {
        //Remove it
        h2.removeAttribute("class");
    } else {
        //Otherwise set the class to .minus
        h2.setAttribute("class", "minus");
    }
    //If the currently selected div has a class attribute
    if (div.hasAttribute("class")) {
        //Remove it
        div.removeAttribute("class");
    } else {
        //Otherwise set the class to .open
        div.setAttribute("class", "open");
    }
};

//HANDLE PAGE LOAD
window.addEventListener("load", function () {
    "use strict";
    //Get the main tag
    faqs = $("faqs");
    //Get all h2 elements in the main tag
    h2Elements = faqs.getElementsByTagName("h2");
    //Loop through the collection of h2 elements
    for (i = 0; i < h2Elements.length; i += 1) {
        //Add the click event to each h2 element
        h2Elements[i].addEventListener("click", toggle);
    }
});