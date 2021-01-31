$(document).ready(function(){
	var vestiPrikaz="";
	for(var i=0;i<vesti.length;i++){
		vestiPrikaz+='<section class="slikaTekst"><article class="sadrzajSlika"><img src="'+vesti[i].slika+'" alt="'+vesti[i].alt+'"+/></article>';
		vestiPrikaz+='<article class="sadrzajTekst"><h2 class="tekstNaslov">'+vesti[i].naslov+'</h2>';
		vestiPrikaz+='<p class="pasusTekst">'+vesti[i].tekst+'</p>';
		vestiPrikaz+='<p class="nevidljivo">'+vesti[i].tekstNevidljivi+'</p>';
		vestiPrikaz+='<h4 class="prikazi">PRIKAŽI VIŠE</h4></article><div class="cleaner"></div></section>';
	}
	$('#sadrzaj').append(vestiPrikaz);	
});