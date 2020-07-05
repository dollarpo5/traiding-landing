var timeout =3000;
var countDownDate = new Date();
countDownDate.setMinutes(countDownDate.getMinutes()+timeout);
var timestamp = countDownDate.getTime();

if(localStorage.getItem("timestamp")==null)
{
    localStorage.setItem("timestamp",timestamp);
}
  var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = localStorage.getItem("timestamp") - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
  document.getElementById("demo").innerHTML = "<span class='counter day'>"+days + "</span>&nbsp;<span class='counter hour'>" + hours + "</span>&nbsp;<span class='counter minute'>"
  + minutes;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "<h2 class='label label-danger' style='font-size:25px;'>EXPIRED</h2>";
  }
}, 1000);