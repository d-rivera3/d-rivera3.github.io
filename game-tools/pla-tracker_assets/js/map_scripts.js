/*** -------- Scripts for text change from Selection Bar - For Location --------- ***/

function showLocations() {
    var list = document.getElementById('LocationList');
    list.style.visibility = 'visible';
    list.style.display = 'flex';

}

function pickLocation(name) {
    // Get and replace text to display picked location
    var list = document.getElementById('displayLocation');
    list.value = name;
    list.textContent = name;

    // hide the options bar 
    var loc_options = document.getElementById('LocationList');
    loc_options.style.visibility = 'hidden';
    loc_options.style.display = 'none';
    
}


/*** -------- Scripts for changing Spiritomb wisps icons & changing maps being shown --------- ***/

function toggle(id) {
    var img = document.getElementById(id);    // get <img>
    
    // if img is a wisp, swap to check mark
    if(img.getAttribute('src') === "./pla-tracker_assets/Other/Wisp_Icon.png") {
        img.src="./pla-tracker_assets/Other/Check.png";
        img.style.backgroundColor = black;
    }
    // else, vice versa
    else {
        img.src="./pla-tracker_assets/Other/Wisp_Icon.png";
        img.style.background = none;
    }
}

/* Spiritomb Wisp check box - shows/hides wisps from map */

function wispSwitch() {
    var checkBox = document.getElementById("wispCheck");      // get toggle switch
    var wisps = document.querySelectorAll('[id*="-wisp-"]');  // get array of wisp images

    // if switch on, show wisps on map
    if (checkBox.checked == true){
        for (var i = 0; i < wisps.length; i++) {
        wisps[i].style.visibility = "visible";  // change visibility property because it's an <img>
        }
    } 
    // if switch off, hide wisp on map
    else {
        for (var i = 0; i < wisps.length; i++) {
        wisps[i].style.visibility= "hidden";    // change visibility property because it's an <img> 
        }
    }
}


/* Script for the vertical navigation tabss */

function openMap(evt, mapName) {
    var i, tabcontent, tablinks;  // variables

    // get array of elements with class 'map_boroder' - the contianer with maps and items
    tabcontent = document.getElementsByClassName("map_border");
    // hide all maps
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // get array of elements with class 'choice' - the location selection menu
    tablinks = document.getElementsByClassName("choice");
    // change tablink active status to none
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");   //
    }

    // whatever the selected map name from tablink, display their contents 
    document.getElementById(mapName).style.display = "block";
    // change selected tablink status to active
    evt.currentTarget.className += " active";
}