

var inputButtons = document.getElementsByClassName("btn");
	for(var i = 0; i < inputButtons.length; i++) {
	
		if (inputButtons[i].addEventListener) {
		  inputButtons[i].addEventListener('click', function(){val(this.value);}, false); 
			} else if (inputButtons[i].attachEvent)  {
			  inputButtons[i].attachEvent('onclick', modifyText);
			}
		
		
		};
		
		
	function val(answer){
			if(answer === "c"){

			document.displayfield.ansfield.value = " ";
			}
			else if(answer === "="){
			var ia=document.displayfield.ansfield.value;
				document.displayfield.ansfield.value = eval(ia);
				}
			else
			document.displayfield.ansfield.value += answer;  
			return answer;
						document.displayfield.ansfield.value += answer; 

		}



