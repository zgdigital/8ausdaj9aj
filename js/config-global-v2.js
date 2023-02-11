	// variaveis

	var campaign_email = 'no';
        var versao_curta = "no";
        var whatsapp = "no";
        var subtituloid = 'none';
	var PCLI = 'none';
        var md = new MobileDetect(window.navigator.userAgent);

        if (md.mobile() || (window.innerWidth <= 767)) {
                var deviceinfos = 'Mobile';
        } else {
                var deviceinfos = 'Desktop';
        }

	// Parametro ref

        var urlcompraSplited = urlcompra.split('/');
        var urlcompraSplitedReverse = urlcompraSplited.reverse();
        var urlcompraSplitedReverseJoined = urlcompraSplitedReverse.join('');
        var urlcompraSplitedReverseJoinedSplited = urlcompraSplitedReverseJoined.split('?');
        var urlcompraSplitedReverseFirstPosition = urlcompraSplitedReverseJoinedSplited[0];

        if (urlcompra.includes("?")){

                if (urlcompraSplitedReverseFirstPosition == "I63469697K") {
                        var ref = 'none';
                } else {
                        var ref = urlcompraSplitedReverseFirstPosition;
                        Cookies.set('ref', ref, { expires: 365 });
                }

        } else {

                if (urlcompraSplitedReverse[0] == "I63469697K") {
                        var ref = 'none';
                } else {
                        var ref = urlcompraSplitedReverse[0];
                        Cookies.set('ref', ref, { expires: 365 });
                }
        }

        if (urlcompra.includes("I63469697K")) {

                if (!getUrlParameter('ref') && Cookies.get('ref')) {
                        ref = Cookies.get('ref');
                }

                if (getUrlParameter('ref') && !Cookies.get('ref')) {
                        ref = getUrlParameter('ref');
                        Cookies.set('ref', ref, { expires: 365 });
                }

                if (getUrlParameter('ref') && Cookies.get('ref')) {
                        ref = getUrlParameter('ref');
                        Cookies.set('ref', ref, { expires: 365 });
                }

                if (ref === undefined || ref === null) {
                        var ref = 'undefined';
                }

        } else {

                if (Cookies.get('ref')) {
                        ref = Cookies.get('ref');
                }
        }

	// SCK ou SRC

        if (urlcompra.includes("I63469697K")) {
                trackingName = 'sck';
                var sck = 'none-VersaoCurta-'+versao_curta+'-'+deviceinfos;
                } else {
                trackingName = 'src';
                var src = 'none-VersaoCurta-'+versao_curta+'-'+deviceinfos;
        }

	// Detecta Device para o app

        if (md.mobile()) {
                var is_mobile = 'true';
                var is_safari = 'true';
        } else {
                var is_mobile = 'false';
                var result = bowser.getParser(window.navigator.userAgent);
                var is_safari = result.parsedResult.browser.name == "Safari" ? true : false;
        }

        if (md.os('iOS')) {
                var is_ios = 'true';
        } else {
                var is_ios = 'false';
        }

        if (getUrlParameter('form') == 'skip') {
                is_mobile = 'true';
                is_safari = 'true';
        }

	// WhatsApp Form

        if (getUrlParameter('whatsapp') == "yes") {
                whatsapp = "yes";
        }

	// Tipo de Apresentacao

        if (getUrlParameter('versao_curta') == "yes") {
                versao_curta = "yes";
        }

        // Parametro subtituloid

        if (!getUrlParameter('subtituloid') && Cookies.get('subtituloid')) {
                // subtituloid = Cookies.get('subtituloid');
		Cookies.remove('subtituloid');
        }

        if (getUrlParameter('subtituloid') && !Cookies.get('subtituloid')) {
                subtituloid = getUrlParameter('subtituloid');
                Cookies.set('subtituloid', subtituloid, { expires: 365 });
        }

        if (getUrlParameter('subtituloid') && Cookies.get('subtituloid')) {
                subtituloid = getUrlParameter('subtituloid');
                Cookies.set('subtituloid', subtituloid, { expires: 365 });
        }

        if (subtituloid === undefined || subtituloid === null) {
                var subtituloid = 'undefined';
        }

        if (subtituloid === "subhd2") {
                $(".lp-subtitle2").text("Digite os dados abaixo para você receber seu Relatório em vídeo de Numerologia personalizado, e descubra as oportunidades ocultas que você ainda não descobriu!");
                $("#scrollBtn").text("CLIQUE AQUI PARA RECEBER O SEU RELATÓRIO NUMEROLÓGICO PERSONALIZADO!");
        }

        if (subtituloid === "subhd3") {
                $(".lp-subtitle").text("Descubra pela sua Data de Nascimento o Seu Destino e o Melhor Caminho para Você Seguir em 2023");
        }

        if (subtituloid === "subhd4") {
                $(".lp-subtitle").text("Descubra pela sua Data de Nascimento o que o Futuro Reserva para a Sua Vida em 2023");
        }

        if (subtituloid === "subhd5") {
                $(".lp-subtitle").text("Vidente Revela Seu Destino em 2023 Usando a Sua Data de Nascimento");
        }

        if (subtituloid === "subhd6") {
		$(".lp-title").text("TESTE NUMEROLÓGICO");
                $(".lp-subtitle").text("Descubra o que seu Nome e a sua Data de Nascimento revelam sobre seus Talentos Secretos e as profundezas da sua Personalidade");
        }

        var verify = 'false';
        var variation = 'original';
        var lp_anim_count = 0;
        var product_type = 'mapa';

        function isNumeric(value) {
                return /^-?\d+$/.test(value);
        }

        // Pixel Facebook

        fbPixelPageView();

        // Shake no botao de compra

        $(function() {
            setInterval(function() {
                 $('#submit-buy-form').toggleClass('shake');
            }, 3000);
        });

// Verifica se deve colocar o form do whatsapp

if (whatsapp == 'yes') {

        const phoneInputField = document.querySelector("#phone");
        const phoneInput = window.intlTelInput(phoneInputField, {
          separateDialCode: true,
          preferredCountries:["br"],
          utilsScript: "intl-tel-input-17.0.0/build/js/utils.js",
        });

        $("#whatsapp-config-selector-5").show();

        const input_phone = document.getElementById('phone');
        input_phone.setAttribute("required", "required");

}

// SCK ou SRC

if (!getUrlParameter(trackingName) && Cookies.get(trackingName)) {
        if (trackingName == "sck") {
                sck = Cookies.get('sck');
                sck = sck+'-VersaoCurta-'+versao_curta+'-'+deviceinfos;
        }
        if (trackingName == "src") {
                src = Cookies.get('src');
                src = src+'-VersaoCurta-'+versao_curta+'-'+deviceinfos;
        }
}

if (getUrlParameter(trackingName) && !Cookies.get(trackingName)) {
        if (trackingName == "sck") {
                sck = getUrlParameter('sck');
		PCLI = getUrlParameter('sck');
                sck = sck+'-VersaoCurta-'+versao_curta+'-'+deviceinfos;
                Cookies.set('sck', sck, { expires: 365 });
        }
        if (trackingName == "src") {
                src = getUrlParameter('src');
		PCLI = getUrlParameter('src');
                src = src+'-VersaoCurta-'+versao_curta+'-'+deviceinfos;
                Cookies.set('src', src, { expires: 365 });
        }
}

if (getUrlParameter(trackingName) && Cookies.get(trackingName)) {
        if (trackingName == "sck") {
                sck = getUrlParameter('sck');
                sck = sck+'-VersaoCurta-'+versao_curta+'-'+deviceinfos;
                Cookies.set('sck', sck, { expires: 365 });
        }
        if (trackingName == "src") {
                src = getUrlParameter('src');
                src = src+'-VersaoCurta-'+versao_curta+'-'+deviceinfos;
                Cookies.set('src', src, { expires: 365 });
        }
}

// Checa SRC ou SCK

if (trackingName == "sck") {
        if (sck === undefined || sck === null) {
                var sck = 'undefined';
        }
}

if (trackingName == "src") {
        if (src === undefined || src === null) {
                var src = 'undefined';
        }
}

// SCK ou SRC com PCLI

if (getUrlParameter(trackingName) && !Cookies.get('PCLI')) {
        if (trackingName == "sck") {
                if (PCLI) Cookies.set('PCLI', PCLI, { expires: 365 });
        }
        if (trackingName == "src") {
                if (PCLI) Cookies.set('PCLI', PCLI, { expires: 365 });
        }
}

if (!getUrlParameter(trackingName) && Cookies.get('PCLI')) {
        PCLI = Cookies.get('PCLI');
}

if (getUrlParameter(trackingName) && Cookies.get('PCLI')) {
        PCLI = Cookies.get('PCLI');
}

if (!getUrlParameter(trackingName) && !Cookies.get('PCLI')) {
        PCLI = 'undefined';
}

// Link - Botao depois da apresentacao

function LinkButtonCheckout() {

        var fullnameCheckout = $("#expression-full-birth-name").val();
        var fullnameCheckoutEncode = fullnameCheckout.replaceAll(" ", "%20");

        if (trackingName == "sck" && !urlcompra.includes("sck")) {
                if (sck) urlcompra=urlcompra+'&sck='+sck+'-PCLI-'+PCLI+'&name='+fullnameCheckoutEncode;
        }
        if (trackingName == "src" && !urlcompra.includes("src")) {
                if (src) urlcompra=urlcompra+'&src='+src+'-PCLI-'+PCLI+'&name='+fullnameCheckoutEncode;
        }

        if (!urlcompra.includes("name=")) {
                urlcompra=urlcompra+'&name='+fullnameCheckoutEncode;
        }

        jQuery(document).ready(function($){
                jQuery('.bt-compra a').attr("href",decodeURIComponent(urlcompra));
        });
}

// Link - Botao na pagina de vendas (depois que o usuario ve a apresentacao)

function LinkButtonCheckoutLP() {

        if (trackingName == "sck" && !urlcompra.includes("sck")) {
                if (sck) urlcompra=urlcompra+'&sck='+sck+'-PCLI-'+PCLI;
        }
        if (trackingName == "src" && !urlcompra.includes("src")) {
                if (src) urlcompra=urlcompra+'&src='+src+'-PCLI-'+PCLI;
        }

        jQuery(document).ready(function($){
                jQuery('.bt-compra a').attr("href",decodeURIComponent(urlcompra));
        });
}

// Controla a liberacao do botao de compra na pagina de vendas

if (Cookies.get('pv_dd') == 'pv_dd') {
        $( '.lp_buy_form' ).show();
        LinkButtonCheckoutLP();
        // if ((md.mobile() || (window.innerWidth <= 767)) && !md.tablet())  {
        //         $('.pv_dd_desktop').css('display', 'none');
        //         $('.pv_dd_mobile').css('display', 'block');
        //         LinkButtonCheckoutLP();
        // } else {
        //         $('.pv_dd_desktop').css('display', 'block');
        //         $('.pv_dd_mobile').css('display', 'none');
        //         LinkButtonCheckoutLP();
        // }
}

