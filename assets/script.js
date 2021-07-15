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



// This function will save the given text to the local storage
$(".saveBtn").on("click", saveTask)

  function saveTask() {

    var time = $(this).parent().parent().data("time");
    var task = $(this).parent().siblings(".form-control").val();

    localStorage.setItem(time, task);

    $("textarea").each(function () {
      var id = $(this).parent().parent().data("time");
      var task = localStorage.getItem(id);
    
      if (task !== null) {
        $(this).children(".form-control").val(task);
      }
    })
  };
