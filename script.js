document.addEventListener("DOMContentLoaded", function () {
	var btn=document.querySelectorAll(".numberbtn");

	var display=document.querySelector(".display");
	var opeartion=""
	var firstValue="";
	var displayValue="";
	display.value="";
	console.log(display);

	for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (event) {
		var value=event.target.outerText;
		
		if(value=="AC"){
			displayValue="";
			display.value="";
		}
		else if(value=="DEL"){
			displayValue=displayValue.slice(0,-1);
			display.value=displayValue;
		}

		else if(value=="="){
			try{
				displayValue=eval(displayValue).toString();
				display.value=displayValue;
				displayValue="";
			}
			catch (error) {
				display.value = "error";
				displayValue = "";
			}
		}

		else{
			
				displayValue += value;
				display.value = displayValue;
      		} 
		console.log(display.textContent);
		console.log(value);
		// console.log(value);
    });
  }





});
