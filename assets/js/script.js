$(document).ready(function () {
    //display current day & time.
   var span = document.getElementById('currentDay');

   function time() {
     var d = moment().format('MMMM Do YYYY, h:mm:ss a');
     span.textContent = d 
   }
   setInterval(time, 1000);

    $(".saveBtn").on("click", function () {
     
        console.log(this);
        var text = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
        window.alert('Your task has been saved!');
        console.log('The button has been clicked!');
    })
        //We need to load the data from each storage to display it correctly
