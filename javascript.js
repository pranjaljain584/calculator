var buttons=document.getElementsByClassName('button');
var display=document.getElementById('displaytext');
var current=document.getElementById('history');

var operator=null;
var operand1=0;
var operand2=null;
display.innerText=0;

for (var i = 0; i<buttons.length ; i++) {
	buttons[i].addEventListener('click' , function(){ 

		var val=this.getAttribute('data-value') ;

		if(val=='C'){

			display.innerText ="0" ;
			current.innerText=" ";

		}else if(val=='='){

			operand2=parseFloat(displaytext.textContent) ;

			if(operator =='/' && operand2 == '0')
           {
              var result = "error";
           }else{
			result=eval(operand1 + " " + operator + " " + operand2) ;
           }

			displaytext.innerText=result;
			current.innerText = current.textContent + "" + val + result;

		}else if(val=='+'){

			operator='+';
			operand1=parseFloat(displaytext.textContent);
			current.innerText = current.textContent + "" + val;
			display.innerText =" " ;

		}else if(val=='-'){

			operator='-';
			operand1=parseFloat(displaytext.textContent);
			current.innerText = current.textContent + "" + val;
			display.innerText =" " ;

		}else if(val=='*'){
			operator='*';
			operand1=parseFloat(displaytext.textContent);
			current.innerText = current.textContent + "" + val;
			display.innerText =" " ;

		}else if(val=='/'){

			operator='/';
			operand1=parseFloat(displaytext.textContent);
			current.innerText = current.textContent + "" + val;
			display.innerText =" " ;

		}else if(val=='%'){

			operator='%';
			operand1=parseFloat(displaytext.textContent);
			var result=operand1/100 ;
			current.innerText = current.textContent/100;
			displaytext.innerText=result;

		}else if(val=='+/-'){

			display.innerText = -(display.innerText); 
			current.innerText = -(current.textContent) ; 

		}else{
			display.innerText = (String(display.innerText) == "0" ? "" : display.innerText) + "" + val ;
			current.innerText = current.textContent + "" + val;
		}

	});
}

document.addEventListener('keypress' , function (event){
	var key= event.keyCode ;
	
	if(key==67){
		display.innerText ="0";
		current.innerText=" ";
	}
	else if(key==13){

		operand2=parseFloat(displaytext.textContent) ;
		if(operator =='/' && operand2 == '0')
       {
          var result = "error";
       }else{
		result=eval(operand1 + " " + operator + "" + operand2) ;
       }
       current.innerText = current.textContent + "" + "=" + result;
		displaytext.innerText=result;

	}else if(key==43){

		operator='+';
		operand1=parseFloat(displaytext.textContent);
		current.innerText = current.textContent + "" + String.fromCharCode(key);
		display.innerText =" " ;

	}else if(key==45){

		operator='-';
		operand1=parseFloat(displaytext.textContent);
		current.innerText = current.textContent + "" + String.fromCharCode(key);
		display.innerText =" " ;

	}else if(key==42){
		operator='*';
		operand1=parseFloat(displaytext.textContent);
		current.innerText = current.textContent + "" + String.fromCharCode(key);
		display.innerText =" " ;

	}else if(key==47){

		operator='/';
		operand1=parseFloat(displaytext.textContent);
		current.innerText = current.textContent + "" + String.fromCharCode(key);
		display.innerText =" " ;

	}else if(key==37){

		operator='%';
		operand1=parseFloat(displaytext.textContent);
		var result=operand1/100 ;
		current.innerText = current.textContent/100;
		displaytext.innerText=result;


	}else if(key >=48 && key<=57 ){

		display.innerText = (String(display.innerText) == "0" ? "" : display.innerText) + "" + (key-48) ;
		current.innerText = current.textContent + "" + String.fromCharCode(key);
	}else{

		if(key==67 || key==99){
			display.innerText ="0";
			current.innerText=" ";
		}
		else{
			display.innerText="error";
			current.innerText=" " ;
		}
	}


});