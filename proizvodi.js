$(document).ready(function(){
	$.ajax(
		{
	  url: "proizvodi.json",
	  type: "get",
	  dataType : "json",
	  success : function(data) {
		ubaci(data);
	  }
  });
  $(document).on('click','#jednaKolona', function(e){
	  e.preventDefault();
	  $(".proizvod").css("width","100%");
  });
  $(document).on('click','#triKolone', function(e){
	  e.preventDefault();
	  $(".proizvod").css("width","30%");
  });
  $('#cenaOpadajuce').click(function (e){
	  e.preventDefault();
	  var nizProizvodi=$('.proizvod');
	  nizProizvodi.sort(function(a,b){
		  a=parseInt($(a).find(".cena").text());
		  b=parseInt($(b).find(".cena").text());
		  if(a>b)return -1;
		  else if (a<b) return 1;
		  else return 0;
	  });
	  $('#proizvodi').append(nizProizvodi);
  });
  $('#cenaRastuce').click(function (e){
	  e.preventDefault();
	  var nizProizvodi=$('.proizvod');
	  nizProizvodi.sort(function(a,b){
		  a=parseInt($(a).find(".cena").text());
		  b=parseInt($(b).find(".cena").text());
		  if(a>b)return 1;
		  else if (a<b) return -1;
		  else return 0;
	  });
	  $('#proizvodi').append(nizProizvodi);
  });
  $('#nazivSortA').click(function (e){
	  e.preventDefault();
	  var nizProizvodi=$('.proizvod');
	  nizProizvodi.sort(function(a,b){
		  a=($(a).find(".naziv").text());
		  b=($(b).find(".naziv").text());
		  if(a>b)return 1;
		  else if (a<b) return -1;
		  else return 0;
	  });
	  $('#proizvodi').append(nizProizvodi);
  });
  $('#nazivSortZ').click(function (e){
	  e.preventDefault();
	  var nizProizvodi=$('.proizvod');
	  nizProizvodi.sort(function(a,b){
		  a=($(a).find(".naziv").text());
		  b=($(b).find(".naziv").text());
		  if(a>b)return -1;
		  else if (a<b) return 1;
		  else return 0;
	  });
	  $('#proizvodi').append(nizProizvodi);
  });
  $("#proizvod").keyup(function(){
	  var nizProizvodi=$('.proizvod');
	  var uneto=$(this).val();
	  $.each(nizProizvodi, function(index, proizvod){
		  var naziv=$(proizvod).find('.naziv').text();
		  if(uneto==""){$(proizvod).show();}
		  else if(naziv.toUpperCase().indexOf(uneto.toUpperCase())!==-1){
		  $(proizvod).show();}
		  else{$(proizvod).hide();}
		  });
	  });
	$('#cena').change(function(){
		var vrednost=$(this).val();
		$('#cenaIzbor').html(vrednost);
	});
	$('#buttonCena').click(function(){
		var opseg=$('#cena').val();
		var nizProizvodi=$('.proizvod');
		$.each(nizProizvodi,function(index, proizvod){
			var cena=parseInt($(proizvod).find('.cena').text());
			if(opseg==0){
				$(proizvod).show();
			}else if(cena>0 && cena<=opseg){
				$(proizvod).show();
			}else{$(proizvod).hide();}
		});
	});
});
function ubaci(podaci) {
	var prikazProizvodi="";
	
	for(var i=0; i<podaci.length;i++){
		prikazProizvodi+='<div class="proizvod">';
		prikazProizvodi+='<h3 class="naziv">'+podaci[i].naziv+'</h3>';
		prikazProizvodi+='<h3><span class="opisPolja">Cena: </span><span class="cena">'+podaci[i].cena+'</span></h3>';
		prikazProizvodi+='<div class="slika"><img src="'+podaci[i].slika+'" alt="'+podaci[i].naziv+'"/></div>';
		prikazProizvodi+='</div>';
	}
	$('#proizvodi').append(prikazProizvodi);
}

