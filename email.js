
var $j = jQuery.noConflict();

var http = createRequestObject();
var areal = Math.random() + "";
var real = areal.substring(2,6);

function createRequestObject() {
	var xmlhttp;
	try {
	var xmlhttp = null;if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest();}else{  if (window.ActiveXObject) {     xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');  } }

// xmlhttp=new ActiveXObject("Msxml2.XMLHTTP"); 
	}
  catch(e) {
    try { 
    var xmlhttp = null;if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest();}else{  if (window.ActiveXObject) {     xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');  } }
    	//xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch(f) { xmlhttp=null; }
  }
  if(!xmlhttp&&typeof XMLHttpRequest!="undefined") {
  	xmlhttp=new XMLHttpRequest();
  }
	return  xmlhttp;
}


function sendRequest() {
	
	var rnd = Math.random();
	var country = escape(document.getElementById("country").selectedIndex.value);	
	var name = escape(document.getElementById("name").value);
	var email = escape(document.getElementById("email").value);
	var phone = escape(document.getElementById("phone").value);
	var productKey = escape(document.getElementById("productKey").value);

	try{
    http.open('POST',  'contactform.php');
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = handleResponse;
		http.send('country='+country+'&name='+name+'&email='+email+'&phone='+phone+'&productKey='+productKey+'&rnd='+rnd);
	}
	catch(e){}
	finally{
	jQuery('#contactform').slideUp("slow").hide();
	jQuery('#contactWrapper').append('<div class="success"><h4>Email Successfully Sent!</h4></div>');
	}
}


function validate_email(address) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(reg.test(address) == false) {
      return false;
   }
   else
   return true;
}

function validate_phone(phone){
	 var reg = /^[\:\-\.\_\(\) 0-9]+$/
        	if(reg.test(phone) == false) {
      return false;
   }
   else
   return true;
}

function check_values() {
	//Form
	var valid = '';

	
	var $j = jQuery.noConflict();
	
	var country = '';
	var name = '';
	var email = '';
	var phone = '';
	var productKey = '';
	
	if(typeof $j('#contactform #country option:selected').val() != "undefined" )
	{
	 // country = document.getElementById("country option:selected").value;
	 	country = document.getElementById("country").selectedIndex.value;
	}
	if(typeof $j('#contactform #name').val() != "undefined" )
	{
	 name = document.getElementById("name").value;
	}
	if(typeof $j('#contactform #email').val() != "undefined" )
	{
	 email = document.getElementById("email").value;
	}
	if(typeof $j('#contactform #phone').val() != "undefined" )
	{
	 phone = document.getElementById("phone").value;
	}
	if(typeof $j('#contactform #productKey').val() != "undefined" )
	{
	 productKey = document.getElementById("productKey").value;
	}

	
	var errors=0;
		if($j('#contactform #country option:selected').val()!=undefined)
		if($j('#contactform #country option:selected').val()==''){
		var hasClass=$j('#contactform #country option:selected').parent().find(".error").hasClass("error");
	 	if(!hasClass)
	 	    $j('#contactform #country option:selected').parent().append('<label for="country" generated="true" class="error">You need to select Country!</label>');	
			$j('#contactform #country option:selected').focus();
			//return false;
			errors++;
		}
		else
		$j('#contactform #country option:selected').parent().find(".error").remove();


     if($j('#contactform #name').val()!=undefined)
	 if($j('#contactform #name').val()=='') {
	 	var hasClass=$j('#contactform #name').parent().find(".error").hasClass("error");
	 	if(!hasClass)
	 	    $j('#contactform #name').parent().append('<label for="name" generated="true" class="error">Please enter your name</label>');
			$j('#contactform #name').focus();
			//return false;
			errors++;
		}
		else
		$j('#contactform #name').parent().find(".error").remove();
		
		if($j('#contactform #email').val()!=undefined)
		if(validate_email($j('#contactform #email').val())==false ) {
		var hasClass=$j('#contactform #email').parent().find(".error").hasClass("error");
	 	if(!hasClass)
	 	    $j('#contactform #email').parent().append('<label for="email" generated="true" class="error">Please enter a valid email address</label>');	
			$j('#contactform #email').focus();
			//return false;
			errors++;
		}
		else
		$j('#contactform #email').parent().find(".error").remove();	
		
		if($j('#contactform #phone').val()!=undefined)
		if(validate_phone($j('#contactform #phone').val())==false ) {
		var hasClass=$j('#contactform #phone').parent().find(".error").hasClass("error");
	 	if(!hasClass)
	 	    $j('#contactform #phone').parent().append('<label for="phone" generated="true" class="error">You need to enter a Contact Number!</label>');	
			$j('#contactform #phone').focus();
			//return false;
			errors++;
		}
		else
		$j('#contactform #phone').parent().find(".error").remove();

		if($j('#contactform #productKey').val()!=undefined)
		if($j('#contactform #productKey').val()==''){
		var hasClass=$j('#contactform #productKey').parent().find(".error").hasClass("error");
	 	if(!hasClass)
	 	    $j('#contactform #productKey').parent().append('<label for="productKey" generated="true" class="error">You need to enter a message!</label>');	
			$j('#contactform #productKey').focus();
			//return false;
			errors++;
		}
		else
		$j('#contactform #productKey').parent().find(".error").remove();
		
	

	if(errors==0) {
			document.getElementById("submit").disabled=true;
			document.getElementById("submit").value='Please Wait..';
			sendRequest();
	}
}

function handleResponse() {
	try{
    if((http.readyState == 4)&&(http.status == 200)){
    	var response = http.responseText;
      document.getElementById("confirmation").innerHTML = response;
      document.getElementById("confirmation").style.display ="";
		}
  }
	catch(e){}
	finally{}
}

function isUndefined(a) {
   return typeof a == 'undefined';
}

function trim(a) {
	return a.replace(/^s*(S*(s+S+)*)s*$/, "$1");
}

function isEmail(a) {
   return (a.indexOf(".") > 0) && (a.indexOf("@") > 0);
}

