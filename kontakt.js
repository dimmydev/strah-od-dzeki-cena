document.querySelector("#reset").addEventListener('click', function(){
		document.getElementById("ime").style.borderColor="initial";
		document.getElementById("ime").style.border="1px solid";
		document.getElementsByClassName("regularniFalse")[0].style.display="none";
		document.getElementById("prezime").style.borderColor="initial";
		document.getElementById("prezime").style.border="1px solid";
		document.getElementsByClassName("regularniFalse")[1].style.display="none";
		document.getElementById("email").style.borderColor="initial";
		document.getElementById("email").style.border="1px solid";
		document.getElementsByClassName("regularniFalse")[2].style.display="none";
		document.getElementById("telefon").style.borderColor="initial";
		document.getElementById("telefon").style.border="1px solid";
		document.getElementsByClassName("regularniFalse")[3].style.display="none";
});