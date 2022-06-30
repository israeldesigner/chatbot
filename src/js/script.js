import $ from 'jquery';

(function($) {

    $(document).ready(function(){

        $('.balaoInicial').hide();
        $(".chat-icon").hover(function(){
            $(".balaoDinamico").toggle('500');
            $(".balao3").toggle('500');
            $( ".balaoDinamico p:contains('serviços')" ).css("font-weight","800");
        });
        $(".chat-icon").click(function(){
            $(".fd-chat-body").append("<iframe class='.fd-chat-frame' src='https://vortex-hmg.unifor.br/chatbot-tiao/' width='100%' height='100%' scrolling='no' frameborder='no'></iframe>")
            $(".fd-chat").fadeIn();
            $(this).fadeOut();
            // $("iframe").attr("src","https://tiaochat.mybluemix.net");
          });


        $(".fechar").click(function(){
            $(".fd-chat").fadeOut();
            $(".chat-icon").fadeIn();
        });

        function balao(){
            $(".balao").animate({
                opacity: "1",
                bottom: '150px',
                right: '20px',
                height: '100px',
                width: '180px',
                borderRadius: '15px',
            }, 'slow').css('z-index', 10);
            $(".balao2").animate({
                opacity: "1"
            }, 'slow').css('z-index', 10);
            $(".balao").html("Olá, eu sou o Tião, seu assistente virtual :) ");
            $( ".balaoInicial:contains('Tião')" ).css("font-weight","500");

            setTimeout(function(){
                $(".balao").animate({
                    bottom: '30px',
                    right: '40px',
                    height : '80px',
                    width: '10px',
                    opacity: '0'
                });
                $(".balao2").animate({
                    opacity: '0'
                });

            },7000);
        }

        balao();

    });

})($);

