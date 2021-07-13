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

    var currentTime = moment().format("H");
    var taskTime = element.getAttribute("data-time")

    if (currentTime === taskTime ){
      
    }

  }

  // Loop through all h4 elements to add styling 
for (var i = 0; i < input.length; i++) {

}