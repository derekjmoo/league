window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onload = function() {formFunction()};
var city = document.getElementById('teamName');
var name = city.textContent || city.innerText;
var grid = document.querySelectorAll('td');

function formFunction(){
  for (var i = 0; i < grid.length; i++) {
    if (grid[i].innerHTML == name) {
        grid[i].style.fontWeight = 900;
    }
    // else if (grid[i].innerHTML == lost) {
    //     grid[i].style.backgroundColor = "rgba(255,0,0,0.5)";
    // }
    // else if (grid[i].innerHTML == "Drew") {
    //     grid[i].style.backgroundColor = "rgba(255,255,0,0.5)";
    //     grid[i].style.color = "black";
    // }
  }
}



//
// $(document).ready(function(){
//   $(".setPiecesSection .sections li a").click(function(){
//     $(".setPieceSctContainer").toggle();
//   });
// });
//
// $(document).ready(function(){
//   $("#backSP").click(function(){
//     $("div.setPieceSctContainer").hide();
//   });
// });
