
function outDate(DOM_obj){
	var today = new Date();
	var sdata = new Date(2019, 8, 1);
	var delta = sdata-today;
	var seconds = delta/1000;
	var minutes = seconds/60;
	var hours = minutes/60;
	
	var daysleft = Math.round(hours / 24)
	var hoursleft = Math.round(hours % 24);
	var minutesleft = Math.round(minutes % 60);
	var secondsleft = Math.round(seconds % 60);
	DOM_obj.innerHTML = "<table><tr><th  colspan='4'>До начала 2019 учебного года: </th></tr><tr><td>" +
	daysleft + "</td><td>" + hoursleft + "</td><td>" + minutesleft + "</td><td>" + secondsleft + " </td></tr>"
	+ "<tr><td>Дней</td><td> Часов</td><td> Минут</td><td> Секунд</td></tr></table>";
	console.log("Delta date: " + daysleft + " " + hoursleft + " " + minutesleft + " " + secondsleft );
}


var obj = document.getElementById("timeleft");
window.onload = outDate(obj);
console.log("Script was succesfully included");
setInterval(outDate, 1000, obj);
