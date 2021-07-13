//setting todays date and time
function setTime() {
    // Sets interval in variable
    setInterval(function() {
        var unix;
        $().text(unix);
        
        var unixFormat = moment(unix).format("dddd, MMMM Do YYYY, h:mm a");
        $("#currentDay").text(unixFormat);
      }, 1000);
    }
    setTime();
    
  //update local storage when save is clicked then get local storage to place in page
  //change color in the html add/remove classes in css
  function displayColors() {

    var currentTime = moment(unix).format("H");
  

  }

  // Loop through all h4 elements to add styling 
for (var i = 0; i < input.length; i++) {
  siteTitles[i].setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
}