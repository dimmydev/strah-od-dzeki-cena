$(document).ready(function(){
  $('#menu li ul').css({
    display: "none",
    left: "auto"
  });
  $('#menu li').hover(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('fast');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('slow');
  }); 
  $('.prikazi').on('click', function() {
	if($(this).text() == "PRIKAŽI VIŠE") {
		$(this).text("PRIKAŽI MANJE");
	} else {
		$(this).text("PRIKAŽI VIŠE");
	}
	$(this).prev().slideToggle(500);
  });
});
	
function proveriIme(){	
	var ime=document.getElementById("ime").value;
	var reIme=/^[A-ZŽŠĐČĆ][a-zžšđčć]{2,20}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,20})?$/;
	if(!reIme.test(ime)){
		document.getElementById("ime").style.border="3px solid #f45f5f";
		document.getElementsByClassName("regularniFalse")[0].style.display="block";
	}
	else {
	document.getElementById("ime").style.border="3px solid #5af8f4";
	document.getElementsByClassName("regularniFalse")[0].style.display="none";
	}
	if(ime==""){
		document.getElementById("ime").style.borderColor="initial";
		document.getElementById("ime").style.border="1px solid";
		document.getElementsByClassName("regularniFalse")[0].style.display="none";
	}
}
function proveriPrezime(){	
	var prezime=document.getElementById("prezime").value;
	var rePrezime=/^[A-ZŽŠĐČĆ][a-zžšđčć]{2,20}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,20})?$/;
	if(!rePrezime.test(prezime)){
		document.getElementById("prezime").style.border="3px solid #f45f5f";
		document.getElementsByClassName("regularniFalse")[1].style.display="block";
	} else {
	document.getElementById("prezime").style.border="3px solid #5af8f4";
	document.getElementsByClassName("regularniFalse")[1].style.display="none";
	}
	if(prezime==""){
		document.getElementById("prezime").style.borderColor="initial";
		document.getElementById("prezime").style.border="1px solid";
		document.getElementsByClassName("regularniFalse")[1].style.display="none";
	}
}
function proveriEmail(){	
	var email=document.getElementById("email").value;
	var reEmail=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(!reEmail.test(email)){
		document.getElementById("email").style.border="3px solid #f45f5f";
		document.getElementsByClassName("regularniFalse")[2].style.display="block";
	} else {
	document.getElementById("email").style.border="3px solid #5af8f4";
	document.getElementsByClassName("regularniFalse")[2].style.display="none";
	}
	if(email==""){
		document.getElementById("email").style.borderColor="initial";
		document.getElementById("email").style.border="1px solid";
		document.getElementsByClassName("regularniFalse")[2].style.display="none";
	}
}
function proveriTelefon(){
	var telefon=document.getElementById("telefon").value;
	var reTelefon=/^(\+381)|(0)(6)[0-9][0-9]{6,8}$/;	
	if(!reTelefon.test(telefon)){
		document.getElementById("telefon").style.border="3px solid #f45f5f";
		document.getElementsByClassName("regularniFalse")[3].style.display="block";
	} else {
	document.getElementById("telefon").style.border="3px solid #5af8f4";
	document.getElementsByClassName("regularniFalse")[3].style.display="none";
	}
	if(telefon==""){
		document.getElementById("telefon").style.borderColor="initial";
		document.getElementById("telefon").style.border="1px solid";
		document.getElementsByClassName("regularniFalse")[3].style.display="none";
	}
}
function proveri(){
	var greske=0;
	var ime=document.getElementById("ime").value;
	var reIme=/^[A-ZŽŠĐČĆ][a-zžšđčć]{2,20}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,20})?$/;
	if(!reIme.test(ime)){
		greske++;
	}
	var prezime=document.getElementById("prezime").value;
	var rePrezime=/^[A-ZŽŠĐČĆ][a-zžšđčć]{2,20}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,20})?$/;
	if(!rePrezime.test(prezime)){
		greske++;
	}
	var email=document.getElementById("email").value;
	var reEmail=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(!reEmail.test(email)){
		greske++;
	}
	var telefon=document.getElementById("telefon").value;
	var reTelefon=/^(\+381)|(0)(6)[0-9][0-9]{6,8}$/;
	if(!reTelefon.test(telefon)){
		greske++;
	}

	var poruka=document.getElementById("poruka").value;
	var reTelefon=/^(\+381)|(0)(6)[0-9][0-9]{6,8}$/;
	if(!reTelefon.test(telefon)){
		greske++;
	}
	
	if (greske>0){
		alert("Proverite da li ste ispravno popunili formular!");
	}
	else alert("Vaša poruka je uspešno poslata!");
}

