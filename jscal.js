
	
	Memory = "0";
	Current = "0";
	Operation = 0;
	maxlength = 30;
	
	function AddDigit(dig) {       
	  if (Current.indexOf("!") == -1)  
		{ if (    (eval(Current) == 0)
				  && (Current.indexOf(".") == -1)
			 ) { Current = dig;
			   } else
			   { Current = Current + dig;
			   };
		  Current = Current.toLowerCase(); 
		} else
		{ Current = "press AC'";  
		};
	   if (Current.indexOf("e0") != -1)
		 { var epos = Current.indexOf("e");
		   Current = Current.substring(0,epos+1) + Current.substring(epos+2);
		 };
	  if (Current.length > maxlength)
		 { Current = "exceed maxlength"; 
		 };
	   document.getElementById("Disp").value = Current;
	 } 
	 
	//var addnumtodisp = document.getElementById("0" "1" "2" "3" "4" "5" "6" "7" "8" "9");
	//addnumtodisp.addEventListener("click",AddDigit,false );

	function Dot() {                 
	 
	  if ( Current.length == 0)    
		{ Current = "0.";
		} else
		{  if (   ( Current.indexOf(".") == -1)
				&&( Current.indexOf("e") == -1)
			  )
			 { Current = Current + ".";
		};   };
	  document.getElementById("Disp").value = Current;
	 }
	 
	var adddot = document.getElementById("dot");
	adddot.addEventListener("click",Dot,false);

	 
	function PlusMinus(){
	 
	  if  (Current.indexOf("e") != -1)
		{ var epos = Current.indexOf("e-");
		  if (epos != -1)
			 { Current = Current.substring(0,1+epos) + Current.substring(2+epos); 
			 } else
			 { epos = Current.indexOf("e");
			   Current = Current.substring(0,1+epos) + "-" + Current.substring(1+epos);
			 };
		} else
		{  if ( Current.indexOf("-") == 0 )
			 { Current = Current.substring(1);
			 } else
			 { Current = "-" + Current;
			 };
		   if (    (eval(Current) == 0)
				&& (Current.indexOf(".") == -1 )
			  ) { Current = "0"; };
		};
	  document.getElementById("Disp").value = Current;
	 }		//negate or positive a number
	 
	 var posneg = document.getElementById("plusmin");
	 posneg.addEventListener("click",PlusMinus,false);
	

	function Clear(){                
	  Current = "0";
	   document.getElementById("Disp").value = Current;
	 }		//CLEAR ENTRY
	var erase = document.getElementById("C");
	erase.addEventListener("click",Clear,false);		 
	 

	function AllClear() {            
	   Current = "0";
	   Operation = 0;                //clear operation
	   Memory = "0";                  //clear memory
	   document.getElementById("Disp").value = Current;
	 } 		//Clear ALL entries!
	var eraseAll = document.getElementById("AC");
	eraseAll.addEventListener("click",AllClear,false);		 
	 
	/*function Operate(op){           
	 
	 if (Operation != 0) { Calculate(); }; //'Press "=" if pending operation!
	 

	  if (op.indexOf("*") > -1) { Operation = 1; };       //codes for *
	  if (op.indexOf("/") > -1) { Operation = 2; };       // slash (divide)
	  if (op.indexOf("+") > -1) { Operation = 3; };       // sum
	  if (op.indexOf("-") > -1) { Operation = 4; };       // difference

	  Memory = Current;                 //store value
	  // note how e.g. Current.value gives neither error nor value! ***
	  Current = "";
	  document.getElementById("Disp").value = Current;
	 }		//STORE OPERATION
	*/
	 
	function Calculate(){           
	 
	  if (Operation == 1) { Current = eval(Memory) * eval(Current); };
	  if (Operation == 2)
		{ if (eval(Current) != 0)
		  { Current = eval(Memory) / eval(Current)
		  } else
		  { Current = "Divide by zero is undefined"; 
		  }
		};
	  if (Operation == 3) { Current = eval(Memory) + eval(Current); };
	  if (Operation == 4) { Current = eval(Memory) - eval(Current); };
	  Operation = 0;                //clear operation
	  Memory = "0";                  //clear memory
	  Current = Current + "";       //FORCE A STRING!
	  if (Current.indexOf("Infinity") != -1)       
		{ Current = "Value is too big";
		};
	  if (Current.indexOf("NaN") != -1)       
		{ Current = "I don't understand";
		};
	  document.getElementById("Disp").value = Current;
	  
	 } 		//PERFORM CALCULATION (= button)
	 
	 var equalTo = document.getElementById("equal");
	 equalTo.addEventListener("click",Calculate,false);			 
	 
	 function Random(){
	 
	  Current = Math.random();
	  
	  document.getElementById("Disp").value = Current;
	 }		//generates a random number
	 
	 var randomNum = document.getElementById("rand");
	 randomNum.addEventListener("click",Random,false);	

	/*function Showcurrent(){
	 
	  Current = document.getElementById("Disp").value
	  Current = "" + parseFloat(Current);
	  if (Current.indexOf("NaN") != -1)
		{ Current = "I don't understand";
		};
	  document.getElementById("Disp").value = Current;
	 }
	 */
