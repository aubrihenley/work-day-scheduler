//setting todays date and time
function setTime() {
    // Sets interval in variable
    setInterval(function() {
        var unix;
        $().text(unix);
        
        var unixFormat = moment(unix).format("dddd, MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(unixFormat);
      }, 1000);
    }
    setTime();
    