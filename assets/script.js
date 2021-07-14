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

// get current time in 24 hour format
    var currentTime = moment().hours();


//change time to integer, get data-time attribute 
    $( "textarea").each(function() {
      var taskTime = parseInt($(this).parent().parent().data("time"));


    if (currentTime === taskTime) { 
        $(this).addClass("present");

    } else if (currentTime < taskTime) {
 
        $(this).addClass("future");

    } else if (currentTime > taskTime) {

    $(this).addClass("past");
    }});

  }
displayColors();


$(".saveBtn").on("click", function(){
  console.log($(this));


})
