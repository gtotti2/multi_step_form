
jQuery(document).ready(function() {
	

            

    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	
    	parent_fieldset.find('input[type="text"],input[type="number"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}
    	
    });
    
    // previous step
    $('.registration-form .btn-previous').on('click', function() {
    	$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });
    
    // submit
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"],input[type="number"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });


    // Lógica para filtrar conteúdos

        btnRadio = document.querySelectorAll("label.btn");
        inputRadio = document.querySelectorAll("label>input");

        for (var i = btnRadio.length - 1; i >= 0; i--) {
            btnRadio[i].addEventListener("click",function(e){
                // Adicionar classe checked ao label clicado
                    for (var i = btnRadio.length - 1; i >= 0; i--) {
                        btnRadio[i].classList.remove("checked");
                        btnRadio[i].querySelector("input").setAttribute("checked", false);
                    }
                        this.classList.add("checked");
                        this.querySelector("input").setAttribute("checked", true);


                    

                // selecionar span com a mesma id que o click e remover a classe hidden
                    areaEscolhida = e.currentTarget.id;
                    
                    var spanEtapa3 = document.querySelectorAll(".etapa3 span");


                        if(areaEscolhida){
                            for(i = 0; i < spanEtapa3.length; i++){
                                spanEtapa3[i].classList.add("hidden");
                                spanEtapa3[i].classList.remove("active");
                                if(spanEtapa3[i].classList.contains(areaEscolhida))  {
                                    spanEtapa3[i].classList.remove("hidden");
                                    spanEtapa3[i].classList.add("active");
                                }
                            }       
                        } 
                        else {
                            for(i = 0; i < spanEtapa3.length; i++){
                                spanEtapa3[i].classList.remove("active");
                            }
                        }
                    })
                }
    
    
});
