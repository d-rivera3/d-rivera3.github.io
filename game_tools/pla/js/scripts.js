/* Script for Spiritomb wisps icons */

function toggle(id) {
    var img = document.getElementById(id);    // get <img>
    
    // if img is a wisp, swap to check mark
    if(img.getAttribute('src') === "./pla/images/Other/Wisp_Icon.png") {
        img.src="./pla/images/Other/Check.png";
    }
    // else, vice versa
    else {
        img.src="./pla/images/Other/Wisp_Icon.png";
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

  // get array of elements with class 'vert_tabcontent' - the maps with items
  tabcontent = document.getElementsByClassName("vert_tabcontent");
  // hide all vert_tabcontent 
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // get array of elements with class 'vert_tablinks' - the menu tebs
  tablinks = document.getElementsByClassName("vert_tablinks");
  // change tablink active status to none
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // whatever the selected map name from tablink, display their contents 
  document.getElementById(mapName).style.display = "block";
  // change selected tablink status to active
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();