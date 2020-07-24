var buttons=document.getElementsByClassName('button');
var display=document.getElementById('displaytext');

var operator=null;
var operand1=0;
var operand2=null;
display.innerText=0;

for (var i = 0; i<buttons.length ; i++) {
	buttons[i].addEventListener('click' , function(){ 

		var val=this.getAttribute('data-value') ;

		if(val=='C'){

			display.innerText ="0" ;
			operand1=null;
			operand2=null;
			operator=null;

		}else if(val=='='){

			operand2=parseFloat(displaytext.textContent) ;
			var result=eval(operand1 + " " + operator + " " + operand2) ;
			displaytext.innerText=result;

		}else if(val=='+'){

			operator='+';
			operand1=parseFloat(displaytext.textContent);
			display.innerText =" " ;

		}else if(val=='-'){

			operator='-';
			operand1=parseFloat(displaytext.textContent);
			display.innerText =" " ;

		}else if(val=='*'){
			operator='*';
			operand1=parseFloat(displaytext.textContent);
			display.innerText =" " ;

		}else if(val=='/'){

			operator='/';
			operand1=parseFloat(displaytext.textContent);
			display.innerText =" " ;

		}else if(val=='%'){

			operator='%';
			operand1=parseFloat(displaytext.textContent);
			var result=operand1/100 ;
			displaytext.innerText=result;

		}else if(val=='+/-'){
			
			display.innerText = -(display.innerText);  

		}else{

			display.innerText = +(display.innerText)+ val ;
		}


	});
}