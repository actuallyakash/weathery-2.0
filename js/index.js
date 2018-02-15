var lat,lon;
var city,state,weather,tempf,tempc,icon,url;
$("document").ready(function()
{ 
  $(".apppic").addClass("animated bounce");
  //$(".tagline").addClass("animated bounce");
        $.getJSON("https://ipapi.co/json", function(result){
			lon = result.longitude;
			lat = result.latitude;
			//document.getElementById("data").innerHTML=lat + " & "+lon;
			loadIt();
        });
});

var d = new Date();
			document.getElementById("day").innerHTML = d.getDate();
			
			var month = new Array();
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";
			document.getElementById("month").innerHTML = month[d.getMonth()];
			

var api="2e9166e9bbc0a0e6";
function loadIt()
{
	$.getJSON("http://api.wunderground.com/api/"+api+"/conditions/forecast/alert/q/"+lat+","+lon+".json", function(details){
		city=details.current_observation.display_location.city;
		state = details.current_observation.display_location.state_name;
		weather=details.current_observation.weather;
		tempf=details.current_observation.temp_f;
		tempc=details.current_observation.temp_c;
		url = details.current_observation.icon_url;
		var img = new Image();
		var div = document.getElementById("image");
		img.onload=function(){
			div.appendChild(img);
		};
		//document["image"].src= url;
		div.src = url;
		//document.getElementById("demo").innerHTML = obj.current_observation.icon_url;			
		document.getElementById("c&s").innerHTML = city+", "+state;
		//document.getElementById("state").innerHTML = state;
		document.getElementById("weather").innerHTML = weather;
		document.getElementById("temp").innerHTML = tempc;
        });
}

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "http://image.flaticon.com/icons/svg/136/136740.svg") 
    {
        document.getElementById("imgClickAndChange").src = "http://image.flaticon.com/icons/svg/136/136739.svg";
		document.getElementById("temp").innerHTML = tempf;
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "http://image.flaticon.com/icons/svg/136/136740.svg";
		document.getElementById("temp").innerHTML = tempc;
    }
}