$(document).ready(function() {
  $("#SunriseSubmit").click(function(e) {
    e.preventDefault();
    var latitude = $("#LatitudeInput").val();
    var longitude = $("#LongitudeInput").val();
    var myurl = "https://api.sunrise-sunset.org/json?lat=" + latitude + "&lng=" + longitude;
    $.ajax({
      url : myurl,
  	  dataType : "json",
  	  success : function(json) {
        json = json;//"
  		  var results = "";
        results += '<h2>Sunrise: ' + json.results.sunrise + '</h2>';
        results += '<h2>Sunset: ' + json.results.sunset + '</h2>';
        results += '<h2>Length of day: ' + json.results.day_length + '</h2>';
        $("#SunriseResults").html(results);
      }
    });
  });
});
