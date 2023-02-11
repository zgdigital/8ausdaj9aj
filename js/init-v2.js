window.info_details = {};
window.isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var presentationPart;

window.awaitingInput = false;

$('audio').each(function() {
    var id = $(this).attr('id');
    var shouldLoop = ( id=='background-sound' ? 1 : 0 );
    videojs(id, {
        preload: 'auto',
        height: 0,
        loop: shouldLoop
    });
})

var ABC = {A:1, I:1, Q:1, J:1, Y:1, Ì:2, Ï:2, Ä:2, À:2, B:2, K:2, R:2, Í:3, Á:3, C:3,
           G:3, L:3, S:3, Ã:4, D:4, M:4, T:4, E:5, H:5, N:5, U:6, V:6, W:6, X:6, É:7,
           O:7, Z:7, F:8, P:8, Â:8, Ú:8, Ó:9, Õ:10, Ë:10, È:10, Ê:12, Ù:12, Ü:12,
           Ò:14, Ô:14, Ö:14, ' ':0, '`':0, '-':0, "'":0};

var bgNumsSideQty = (window.isMobile.any()) ? 10 : 20;
var bgMaxFontSize = (window.isMobile.any()) ? 28 : 48;

var bonusesCarousel;

// funcao para detectar elemento visivel na tela
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

// Avoid sleep mobile
var noSleep = new NoSleep();
function enableNoSleep() {
        noSleep.enable();
	document.removeEventListener('touchstart', enableNoSleep, false);
}
// Enable wake lock.
// (must be wrapped in a user input event handler e.g. a mouse or touch handler)
document.addEventListener('touchstart', enableNoSleep, false);
//

function execFundoN() {
    // removed animation
    // for (i = 0; i < bgNumsSideQty; i++) i % 2 == 0 ? execAnimeFundoN($("<div />").css("font-size", randomizeRg(14, bgMaxFontSize)).addClass("left").text(randomizeRg(1, 9)).appendTo($("#bg-nums")), "left") : execAnimeFundoN($("<div />").css("font-size", randomizeRg(14, bgMaxFontSize)).addClass("right").text(randomizeRg(1, 9)).appendTo($("#bg-nums")), "right")
}

function execAnimeFundoN(e, t) {
    var a = $("#bg-nums"),
        o = .8 * a.height(),
        n = a.width(),
        i = 40 * (.7 + .4 * Math.random()),
        u = i / 2 * Math.random(),
        s = "left" == t ? randomizeRg(.02 * -n, .15 * n) : randomizeRg(.85 * n, 1.02 * n),
        r = "left" == t ? randomizeRg(.02 * -n, .15 * n) : randomizeRg(.85 * n, 1.02 * n),
        l = "left" == t ? randomizeRg(.02 * -n, .15 * n) : randomizeRg(.85 * n, 1.02 * n);
    TweenLite.set(e, {
        y: randomizeRg(0, o),
        x: s,
        z: .01,
        opacity: "0." + randomizeRg(0, 2)
    }), TweenLite.to(e, i / 2, {
        y: randomizeRg(0, o),
        x: r,
        z: .01,
        autoAlpha: "0" + randomizeRg(4, 7),
        ease: Linear.easeNone
    }), TweenLite.to(e, i / 2, {
        delay: u,
        y: randomizeRg(0, o),
        x: l,
        z: .01,
        autoAlpha: 0,
        ease: Linear.easeNone,
        onComplete: execAnimeFundoN,
        onCompleteParams: [e, t]
    })
}

function vaiParaConteudo(){
    $.scrollTo(0,{duration: 1000})
}

function calcFundoHtml(e) {
    var t = $(window).height();
    return "fixed" == e ? t <= 768 ? "30px" : t > 768 && t <= 860 ? "45px" : t > 861 && t <= 1144 ? "100px" : t > 1144 && t <= 1440 ? "100px" : t > 1440 && t <= 1600 ? "250px" : t > 1600 && t <= 2160 ? "500px" : "600px" : void 0
}

function firstUc(e, t) {
    return (e = t ? e.toLowerCase() : e).replace(/(\b)([a-zA-Z])/, function(e) {
        return e.toUpperCase()
    })
}

function randomizeRg(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}

function mudarFundo(e, t, a) {
    var o = $(".content-bg.active"),
        n = $(".content-bg:not(.active)");
    o.addClass("anim").delay(a).animate({
        opacity: 0
    }, t, function() {
        $(this).css("display", "none").attr("class", "content-bg")
    }), n.css("display", "block").addClass("anim active").addClass(e).delay(a / 2).animate({
        opacity: 1
    }, t / 2, function() {
        $(this).removeClass("anim")
    })
}

function execAnimeLinhas(e) {
    e = $("#" + e);

    $(".label-line", e).each(function(e, t) {
        var spanWidth = $(t).prev("span").width();
        $(t).animate({
            width: $(this).closest("div.form-group").width() - $(this).prev("span").width() - 10,
            marginLeft: spanWidth + 10
        }, 600, "linear");
    }), $(".label-line-left", e).animate({
        width: $(".label-line-left", e).closest("label").width() / 2,
        left: 0
    }, 600, "linear"), $(".label-line-right", e).animate({
        width: $(".label-line-left", e).closest("label").width() / 2
    }, 600, "linear")
}

function mudarFundoNumeros(e, t, a) {
    if ("digits" == e) $("#bg-nums>div").each(function(e, t) {
        $(t).text(randomizeRg(1, 9))
    });
    else if ("letters" == e) {
        var o = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        $("#bg-nums>div").each(function(e, t) {
            $(t).text(o[randomizeRg(0, 25)])
        })
    } else if ("word" == e) o = t.toString().split(""), $("#bg-nums>div").each(function(e, t) {
        $(t).text(o[randomizeRg(0, o.length - 1)])
    });
    else if ("fullname" == e) {
        var n = t.toString().split(""),
            i = a.toString().split("");
        $("#bg-nums>div.left").each(function(e, t) {
            $(t).text(n[randomizeRg(0, n.length - 1)])
        }), $("#bg-nums>div.right").each(function(e, t) {
            $(t).text(i[randomizeRg(0, i.length - 1)])
        })
    } else $("#bg-nums>div").each(function(t, a) {
        $(a).text(e)
    })
}

function ativaCt(clas,duration,delay,isform){

    if(window.awaitingInput) {
        return;
    }

    if ( clas == 'lifepath-calculation-container' && $( ".quiz-container" ).is(":visible") ) {
        iniciarCartasNascimento();
        return;
    }

    if ( clas == 'lifepath-sign-container' && $( ".quiz-container" ).is(":visible") ) {
        window.iniciar_carta_destino = true;
        mostrarCartasDestino();
        return;
    }

    if ( $( ".quiz-container" ).is(":visible") && window.iniciar_carta_destino ) {
        return;
    }

    if ( clas == 'expression-sign-container' && $( ".carta-destino-container" ).is(":visible") ) {
        mostrarCartaExpressao();
        return;
    }
    if ( clas == 'expression-sign-container' ) {
        $( ".expression-calculation-container-2" ).hide();
        $( ".expression-sign-container" ).show();
        mostrarCartaExpressaoComNumero();
    }

    if ( clas == 'soulurge-sign-container' && $( ".carta-expressao-container" ).is(":visible") ) {
        mostrarCartaMotivacao();
        return;
    }
    if ( clas == 'soulurge-sign-container' ) {
        $( ".row-motivacao-calc" ).hide();
        $( ".soulurge-sign-container" ).show();
        mostrarCartaMotivacaoComNumero();
    }

    if ( clas == 'expression-example-container' ) {
        $( ".carta-destino-container" ).hide(100);
        $( ".lifepath-sign-container" ).hide(100);
        $( ".expression-sign-container" ).hide(100);
        $( ".expression-example-container" ).fadeIn(500);
    }

    if ( clas == 'soulurge-example-container' ) {
        $( ".soulurge-sign-container" ).hide(100);
        $( ".row-motivacao-sign" ).hide();
        $( ".quiz-container" ).hide(100);
        $( ".soulurge-example-container" ).fadeIn(500);
    }

    if ( clas == 'expression-calculation-container' && $( ".quiz-container" ).is(":visible") ) {
        $( ".initial-carousel-container" ).hide(200);
        $( ".lifepath-calculation-container" ).hide(200);
    }
    else if ( clas == 'expression-calculation-container' ) {
        $( ".row-expressao-sign" ).hide();
        $( ".expression-calculation-container" ).show();
    }
    else if ( clas == 'expression-calculation-container-2' ) {
        $( ".expression-calculation-container" ).hide();
        $( ".expression-calculation-container-2" ).show();
    }
    else if ( clas == 'soulurge-calculation-container' ) {
        $( ".row-motivacao-sign" ).hide();
        $( ".row-tabela-numerologia-cabalistica-motivacao" ).hide();
        $( ".soulurge-calculation-container" ).show();
    }

    if ( clas == 'soulurge-calculation-container' && $( ".quiz-container" ).is(":visible") ) {
        $( ".initial-carousel-container" ).hide(200);
    }

    if ( clas == 'main-carousel-container' ) {
        showCartasBaralho();
    }

    if ( clas == 'mapa-cover-container' ) {
        $( ".row-ppt-cartas" ).hide();
        $( ".initial-carousel-container" ).hide();
        $( ".row-mapa-cover" ).show();
    }

    if ( clas == 'mandala-container-1' && $( ".quiz-container" ).is(":visible") ) {
        return;
    }

    if(clas == 'lifepath-calculation-container' && lp_anim_count > 0) {
        $(".content-container").removeClass('fadeIn');
        $(".lifepath-calculation-container p").removeClass('fadeIn');
        lp_anim_count++;
    } else {
        $(".content-container").addClass('fadeIn');
        $(".lifepath-calculation-container p").addClass('fadeIn');
    }

    var active = $('.calculations-container .content-container.active');

    active.removeClass('anim active').hide();

    if(isform !== undefined && typeof isform != "undefined") {
        window.awaitingInput = true;
        $( ".initial-carousel-container" ).hide(200);
        $('.calculations-container .'+clas).delay(delay).fadeIn(duration).addClass('active');
        $( ".personalidade-container" ).hide();
    } else {
        if ( clas == 'initial-carousel-container' ) {
            $( ".initial-carousel-container" ).fadeIn(duration).addClass("anim active");
            esconderImagemFundo();
            montarBaralho();
        }
        $('.calculations-container .'+clas).delay(delay).fadeIn(duration).addClass('anim active');
    }

    if(isform !== undefined && typeof isform != "undefined") {
        $('.forms-bg').fadeIn(2000);
        setTimeout(function(){ execAnimeLinhas(isform) },2000);
    } else {
        vaiParaConteudo();
    }

    if(clas.indexOf('buy-form-container') != -1) {
        showCheckoutFinalApresentacao();
    }

}

function showCheckoutFinalApresentacao() {
    $( ".primary-container" ).hide();
    $( ".testimonials" ).hide();
    $( "#report-details" ).show();
    $( "#report-details-container" ).show();

    $( "#main" ).css("height", 2000);

    $( ".container-form" ).hide();
    $( ".row-mapa-cover" ).hide();

    $( ".buy-form-container" ).css("margin-top", -1930);

    $( "section#report-details" ).css("background", "transparent");
    $( "#report-details-container" ).css("background", "transparent");
    
    $( ".buy-form-container" ).fadeIn(500);

    Cookies.set('pv_dd', 'pv_dd', { expires: 365 });
}

var ajustouBaralho = false;
function sgAnime(e, t, a) {
    var o = {
        lifepath: "Sua missão de vida!",
        expression: "Suas oportunidades!",
        soulurge: "A visão dos outros sobre você!",
        birthday: "Suas habilidades e seus pontos fortes!",
        personality: "Sua prosperidade!"
    };
    e = $("." + e + "-carousel-container");
    if ( !ajustouBaralho ) {
        ajustouBaralho = true;
        ajustarBaralho();
    }
    mostrarCarta(t);
    setTimeout(function() {
        $(".sign-container", e).removeClass().addClass("sign-container sign-" + t + "-container");
        // $(".sign-container .sign-image", e).removeClass().addClass("animated pulse infinite sign-image sign-" + t);
        $(".sign-container .sign-title", e).text(o[t]);
    }, 300);
}

function mostraDestinoTabela(e) {
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "https://testenumerologico.com.br/obrigado-api-v2/destino-anime",
        data: {
            dob: e
        },
        success: function(e) {
            // $("#titles-1").addClass('titles-1');
            // $("section#main .primary-container").addClass('background-screen-01-da-apresentacao');
            // $("section#main .primary-container").removeClass('background-screen-01');
            // $(".page-title").hide();
            // $(".subtitulo-02").hide();
            // $(".subtitulo").hide();
            // $(".page-subtitle").hide();
            $( ".row-lp-title" ).hide();
            $( ".row-lp-subtitle" ).hide();
            $( ".row-lp-subtitle2" ).hide();
            $( ".row-lp-form" ).hide();
            if ( window.isMobile.any() ) {
                // $( ".row-main-container" ).attr("style", "margin-top: 50px !important;");
            }

            $("#report-details-container > .primary-container").hide();
            $("#report-details-container > .testimonials").hide();
            $("#report-details-container > .buy-form-container").hide();
            $("#report-details").hide();
            // $(".lifepath-calculation-table").replaceWith(e.table);
            $(".lifepath-sign-container .sign-title b").text(e.lifepath);
            // $('.page-title').addClass('page-title-large');
            $(".greeting-lifepath-container *").removeClass("animated").css("opacity", 1);
            $(".greeting-lifepath-container .lifepath-calculation-table").hide();
            window.table = e.table;
        }
    })
}


function mostraDestinoInfos(e, t) {
    $("body").removeClass("loaded"), $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "https://testenumerologico.com.br/obrigado-api-v2/destino-infos",
        data: {
            name: e,
            dob: t
        },
        success: function(e) {
            e.slideshowid && KaballahSlideshow("lifepath-sound", "https://testenumerologico.com.br/video/slides/"+e.slideshowid+".json", !0);
            var t = {};
            t.firstname = e.firstName, t.dob = e.dob, t.dob_month = e.dobMonth, t.dob_day = e.dobDay, t.dob_year = e.dobYear, t.lifepath = e.lifePath, window.cro_lifepath = e.lifePath;
            window.cards_nascimento = e.dob;
            window.cards_destino = e.lifePath;
            setTimeout(function() {
                personalidadeExibirNomeNascimento();
            }, 500);
        }
    })
}

function mostraExpressaoTabela(o) {
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "https://testenumerologico.com.br/obrigado-api-v2/expressao-anime",
        data: {
            fullname: o
        },
        success: function(e) {
            $(".expression-interpretation").html(e.table);
            $(".expression-sign-container .sign-title b").text(e.expression)
            $( ".row-expressao-form" ).hide();
        }
    })
}

function mostraExpressaoInfos(e, t, a, o) {
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "https://testenumerologico.com.br/obrigado-api-v2/expressao-infos",
        data: {
            name: e,
            dob: t,
            gender: a,
            fullname: o,
            whatsapp: whatsapp
        },
        success: function(e) {
            KaballahSlideshow("expression-sound", "https://testenumerologico.com.br/video/slides/"+e.slideshowid+".json", !0, 8e3);
            var t = {};
            t.fullname = e.fullName, t.gender = e.gender, t.expression = e.expression, window.cro_expression = e.expression;
            window.cards_expressao = e.expression;
            $("b.fullname-title").text(t.fullname.replaceAll("+", " "));
        }
    })
}

function mostraMotivacaoTabelas(e) {
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "https://testenumerologico.com.br/obrigado-api-v2/motivacao-anime",
        data: {
            fullname: e
        },
        success: function(e) {
            $(".soulurge-interpretation").html(e.table);
            window.cards_motivacao = e.soulurge;
            $(".soulurge-sign-container .sign-title b").text(e.soulurge);
        }
    })
}

function mostraMotivacaoInfos(e, t, a, o, n, i, p, c, r, s, k) {
    var u = $("#soulurge-vtid").val();
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "https://testenumerologico.com.br/obrigado-api-v2/motivacao-infos",
        data: {
            name: e,
            dob: t,
            gender: a,
            fullname: o,
            marital: n,
            email: i,
            phone: p,
            ccode: c,
            versao_curta: versao_curta,
            ref: r,
            src: s,
            sck: k
        },
        success: function(e) {
            KaballahSlideshow("soulurge-sound", "https://testenumerologico.com.br/video/slides/"+e.slideshowid+".json", !0, 0);
            var t = {};
            t.relationship = e.relationship, t.soulurge = e.soulUrge, window.cro_soulurge = e.soulUrge, mostrarBlocoForm(), t.email = e.email;
        }
    })
}

function caminhoColunaDestinoAnime(e) {
    var t = $(".lifepath-calculation-container"),
        a = $(".lifepath-column-" + e, t);
    if (1 == e || 3 == e || 5 == e) execAnimeDestinoBl(0, e);
    else if (2 == e || 4 == e) $(".lifepath-arrow", a).addClass("anim zoomIn").animate({
        opacity: 1
    }, 1000, function() {
        $(this).removeClass("anim"), caminhoColunaDestinoAnime(e + 1)
    });
    else if (6 == e) $(".lifepath-column-6 .plus", t).addClass("anim").animate({
        opacity: 1
    }, 1000), caminhoColunaDestinoAnime(7);
    else {
        if (7 != e) return !1;
        $(".lifepath-column-7 .lifepath-result", t).addClass("anim").animate({
            opacity: 1
        }, 1000, function() {
            $(".digit", $(this)).addClass("zoomIn anim").css("opacity", 1)
        })
    }
}

function execAnimeDestinoBl(e, t) {
    var a = $(".lifepath-calculation-container");
    e <= 2 ? $(".lifepath-column-" + t + " .lifepath-block:eq(" + e + ")", a).addClass("anim").animate({
        opacity: 1
    }, 1000, function() {
        $(this).removeClass("anim"), execAnimeDestinoDg(e, t)
    }) : caminhoColunaDestinoAnime(t + 1)
}

function execAnimeDestinoDg(e, t) {
    $(".digit, .plus", $(".lifepath-calculation-container .lifepath-column-" + t + " .lifepath-block:eq(" + e + ")")).each(function(e, t) {
        var a = $(t).hasClass("digit") ? "slideInUp" : "rotateIn";
        $(t).addClass(a)
    }), $(".digit, .plus", $(".lifepath-calculation-container .lifepath-column-" + t + " .lifepath-block:eq(" + e + ")")).animate({
        opacity: 1
    }, 750), 5 == t && $(".lifepath-calculation-container .lifepath-column-5.empty-cell:eq(" + e + ") .plus").addClass("rotateIn anim").css("opacity", 1), $(".lifepath-calculation-container .lifepath-column-" + t + " .lifepath-block:eq(" + e + ") .digit").length > 1 ? reduzirDigitos(e, t) : execAnimeDestinoBl(e + 1, t)
}

function reduzirDigitos(e, t) {
    var a = 0,
        o = $(".lifepath-calculation-container .lifepath-column-" + t + " .lifepath-block:eq(" + e + ")");
    $(".digit", o).each(function(e, t) {
        a += parseInt($(this).text().toString())
    }), $(".digit", o).removeClass("slideInUp anim").animate({
        margin: 0
    }, 750, function() {
        $(this).addClass("slideOutDown")
    }), $(".plus", o).removeClass("rotateIn anim").animate({
        margin: 0
    }, 750, function() {
        $(this).addClass("rotateOut"), o.html('<div class="digit animated slideInUp">' + a + "</div>"), $(".digit", o).css("opacity", 1), execAnimeDestinoBl(e + 1, t)
    })
}

function mostrarDestinoColunas() {
    $(".lifepath-column-1 .digit").css("opacity", 1);
    $(".lifepath-column-1 .lifepath-block").css("opacity", 1);
}

function stDestinoAnime() {
    $(".lifepath-calculation-container div").removeClass("anim zoom slideInUp rotateIn slideOutDown rotateOut").finish().css("opacity", 0);
    $(".lifepath-calculation-container .digit").removeClass("animated").finish().css("opacity", 0);
    // $(".lifepath-calculation-table").replaceWith(window.table);
}

function expressaoAnime(type, fullname){
    if(type == 'example')
        execExExpressao(0,fullname);
    else if(type == 'highlight')
        nomeCompletoAnimeExpressao(0);
    else if(type == 'calculate')
        calcExpressao();
}

function execExExpressao(n, fullname){
    if( n <= fullname.length ){
        var l = fullname.split('');
        $('.expression-example-container .expression-table .expression-letters div:contains('+l[n]+')').removeClass('highlighted bounce anim');
        setTimeout(function(){
            $('.expression-example-container .expression-table .expression-letters div:contains('+l[n]+')').addClass('highlighted').animate({
                    borderSpacing: 1
                },9000/fullname.length, function(){
                    execExExpressao(n+1*1,fullname);
                });
        },1000/fullname.length)

    }else
        return false;
}

function nomeCompletoAnimeExpressao(n){

    var selector = $('.expression-fullname .fullname-expression tr.letters');
    var l = $('td',selector).length;
    var letter = $('td:eq('+n+')>div',selector).text().toUpperCase();

    $('.expression-numbers div, .expression-calculation-container .expression-table .expression-letters div:contains('+letter+')').removeClass('anim highlighted bounce');

    if(n == 0)
        regNomeCompleto('expression-calculation-container','fullname-expression', 0);

    if(letter == ' '){
        nomeCompletoAnimeExpressao(++n);
        return false;
    }
    if(n<l){
        var speed = 12000/l;
        var number = ABC[letter];

        $('.expression-calculation-container .expression-table .expression-letters div:contains('+letter+')').addClass('highlighted');
        $('.expression-calculation-container .expression-table .expression-numbers div[data-index="'+number+'"]').addClass('highlighted')
        $('.expression-fullname .fullname-expression tr.letters td div:eq('+n+')').addClass('anim fadeIn').animate({
            opacity: 1
        },speed, function(){
            nomeCompletoAnimeExpressao(++n);
            return false;
        });

    }

    return false;
}


function calcExpressao(){
    var digits = [];

    regNomeCompleto('expression-calculation-container-2','fullname-expression',1);

    $('.expression-calculation-container-2 .fullname-expression td div:not(.letter,.space)').each(function(){
        if($(this).text() != ' ')
            digits.push({'key': $(this).parent('td').data('index'), 'val':$(this).text()});
        $( this );
    });
    digits.sort(function(d1, d2) { return d1.key - d2.key;});
    var join = $.map(digits, function(obj){ return obj.val}).join('</div><div class="expression-plus animated anim">+</div><div class="expression-digit animated anim">');
    var str = '<div class="expression-digit animated anim">'+join+"</div>";
    // $('.expression-interpretation-calculation').html(str);


    setTimeout(function(){
        animeCalcExpressao(0,false);
    }, 1000);

}


function regNomeCompleto(container, table, index){
    var container = $('.'+container);
    var table = $('.'+table, container);
    var containerWidth = container.width();

    var elementsWidth = 0;
    var elementMargin = window.isMobile.any() ? 3 : 6;
    $('tbody>tr>td>div', table).each(function(i,e){
        if($(this).index() == index)
            elementsWidth += parseInt($(e).closest('td').css('min-width')) + elementMargin;
    });

    if(elementsWidth>containerWidth){

        var qty = $('td', table).length;
        var neededWidth = Math.floor((containerWidth - elementMargin*qty - 30) / qty);

        if(neededWidth < 36){
            var wordslen = [];
            var wordlen = 0;
            $('tbody>tr>td>div', table).each(function(){
                wordlen++;
            });

            var total = 0;
            var totalletters = $('tbody>tr>td', table).length;
            $.each(wordslen,function() { total += this; });
            total += wordslen.length
            wordslen.push(totalletters - total);
            qty = parseInt(Math.max.apply(Math, wordslen));

            if(qty > 15)
                qty = 15;

            neededWidth = Math.floor((containerWidth - elementMargin*qty - 30) / qty);

            if (md.mobile() && (neededWidth<28)) {
                neededWidth = 23;
            } else {
                neededWidth = 28;
            }

            $('td:not(.word-space)', table).css({'min-width': neededWidth, 'min-height': neededWidth, 'font-size': neededWidth*1.0});
        }
        else
            $('td', table).css({'min-width':neededWidth, 'min-height': neededWidth, 'font-size': neededWidth*1.0});
    }
}


function animeCalcExpressao(n,reduced){

    var l = $('.expression-interpretation-calculation div').length;
    var speed = (reduced) ? 500: 12000/(l*2);

    if( n < l ){
        var selector = $('.expression-interpretation-calculation div:eq('+n+')');
        var clas = (selector.hasClass('expression-digit')) ? 'fadeIn' : 'rotateIn';

        selector.addClass('anim '+clas).animate({
            opacity: 1
        },speed,function(){
            animeCalcExpressao(++n);
        });

    }
    else if(n == l){
        reduzirExpressao();
    }
    return false;
}



function reduzirExpressao(){
    var sum = 0;
    $('.expression-interpretation-calculation div.expression-digit').each(function(i,e){
        sum += parseInt($(e).text());
    });
    if(sum.toString().length == 1 || sum == 11 || sum == 22){
        // $('.expression-interpretation-calculation').html('<div class="expression-result anim animated fadeIn">'+sum+'</div>');
        // $('.expression-result').addClass('anim').animate({
        //     opacity:1
        // },600);
    }
    else{
        $('.expression-interpretation-calculation div').removeClass('fadeIn rotateIn');
        $('.expression-interpretation-calculation div.expression-digit').addClass('fadeOut');
        $('.expression-interpretation-calculation div.expression-plus').addClass('rotateOut');
        $('.expression-interpretation-calculation').html('<div class="expression-digit">'+sum+'</div>');
        $('.expression-interpretation-calculation div.expression-digit').addClass('fadeIn').animate({
            opacity: 1
        }, 600, function(){
            cortaReduzirExpressao();
        })
    }
}

function cortaReduzirExpressao(){
    var digits = $('.expression-interpretation-calculation div.expression-digit').text().split('');
    $('.expression-interpretation-calculation div.expression-digit').removeClass('fadeIn').addClass('fadeOut');
    var join = digits.join('</div><div class="expression-plus animated">+</div><div class="expression-digit animated">');
    var str = '<div class="expression-digit animated">'+join+"</div>";
    $('.expression-interpretation-calculation').html(str);
    animeCalcExpressao(0,true);
}

function motivacaoAnime(type){
    if(type == 'example')
        execMotivacao(0);
    else if(type == 'highlight')
        setTimeout(nomeCompletoAnimeMotivacao(0),3000);
    else if(type == 'no-consonants')
        setTimeout(semConsoantesMotivacao(0),1000);
    else if(type == 'calculate')
        calcMotivacao();
}

function execMotivacao(n,letter){
    var letters = ['A','E','I','O','U','Y','U','O','I','E','A','E','I','O','U','Y'];
    $('.soulurge-example-container .expression-table .expression-letters div').removeClass('highlighted bounce');
    if(n<=15){
        $('.soulurge-example-container .expression-table .expression-letters div:contains('+letters[n]+')').addClass('highlighted').animate({
            opacity: 1
        },1500, function(){
           execMotivacao(++n);
        });
    }else
        return false;
}


function nomeCompletoAnimeMotivacao(n){

    var selector = $('.soulurge-fullname table tr.letters');
    var l = $('td',selector).length;
    var letter = $('td:eq('+n+')>div',selector).text().toUpperCase();

    $('.expression-numbers div, .soulurge-example-container .expression-table .expression-letters div:contains('+letter+')').removeClass('anim highlighted bounce fadeIn consonant');

    if(n == 0)
        regNomeCompleto('soulurge-example-container','fullname-soulurge', 0);

    if(letter == ' '){
        nomeCompletoAnimeMotivacao(++n);
        return false;
    }
    if(n<l){
        var speed = 14000/l;
        var number = ABC[letter];

        $('.soulurge-example-container .expression-table .expression-letters div:contains('+letter+')').addClass('highlighted');
        $('.soulurge-example-container .expression-table .expression-numbers div[data-index="'+number+'"]').addClass('highlighted')
        $('.soulurge-fullname table tr.letters td div:eq('+n+')').addClass('anim fadeIn').animate({
            opacity: 1
        },speed, function(){
            nomeCompletoAnimeMotivacao(++n);
            return false;
        });

    }

    return false;
}

function semConsoantesMotivacao(){
    $('.soulurge-fullname .fake-consonant').removeClass('anim fadeIn').animate({opacity: 0, color: '#303f53', backgroundColor: '#e9f3f8'}, 15000, function(){
        $(this).removeClass('fake-consonant');
        $(this).closest('td').remove();
    });
}

function calcMotivacao(){
    var digits = [];
    $('.fullname-soulurge td div.vowel').each(function(){
        if($(this).text() != ' ')
            digits.push({'key': $(this).parent('td').data('index'), 'val': $(this).text()});
    });
    digits.sort(function(d1, d2) { return d1.key - d2.key;});

    var join = $.map(digits, function(obj){ return obj.val}).join('</div><div class="soulurge-plus animated anim">+</div><div class="soulurge-digit animated anim">');
    var str = '<div class="soulurge-digit animated anim">'+join+"</div>";
    $('.soulurge-interpretation-calculation').html(str);

    regNomeCompleto('soulurge-calculation-container', 'fullname-soulurge', 1);

}

function animeCalcMotivacao(e, t) {
    var a = $(".soulurge-interpretation-calculation div").length,
        o = 15e3 / (2 * a);
    if (e < a) {
        var n = $(".soulurge-interpretation-calculation div:eq(" + e + ")"),
            i = n.hasClass("soulurge-digit") ? "fadeIn" : "rotateIn";
        n.addClass("anim " + i).animate({
            opacity: 1
        }, o, function() {
            animeCalcMotivacao(++e)
        })
    } else e == a && reduzirMotivacao();
    return !1
}

function reduzirMotivacao() {
    var e = 0;
    $(".soulurge-interpretation-calculation div.soulurge-digit").each(function(t, a) {
        e += parseInt($(a).text())
    }), 1 == e.toString().length || 11 == e || 22 == e ? ($(".soulurge-interpretation-calculation").html('<div class="soulurge-result anim animated fadeIn">' + e + "</div>"), $(".soulurge-result").addClass("anim").animate({
        opacity: 1
    }, 600)) : ($(".soulurge-interpretation-calculation div").removeClass("fadeIn rotateIn"), $(".soulurge-interpretation-calculation div.soulurge-digit").addClass("fadeOut"), $(".soulurge-interpretation-calculation div.soulurge-plus").addClass("fadeOut"), $(".soulurge-interpretation-calculation").html('<div class="soulurge-digit">' + e + "</div>"), $(".soulurge-interpretation-calculation div.soulurge-digit").addClass("zoomIn").animate({
        opacity: 1
    }, 600, function() {
        spReduzirMotivacao()
    }))
}

function spReduzirMotivacao() {
    var e = $(".soulurge-interpretation-calculation div.soulurge-digit").text().split("");
    $(".soulurge-interpretation-calculation div.soulurge-digit").removeClass("fadeIn").addClass("fadeOut");
    var t = '<div class="soulurge-digit animated">' + e.join('</div><div class="soulurge-plus animated">+</div><div class="soulurge-digit animated">') + "</div>";
    $(".soulurge-interpretation-calculation").html(t), animeCalcMotivacao(0)
}

$(window).on("scroll resize", function() {
        $(".slideshow-container").css("position", "fixed").css("bottom", calcFundoHtml("fixed"));

        if (md.tablet()) {
                $(".slideshow-container").css("position", "fixed").css("bottom", "550px");
        }
});

$(window).resize(function() {
    var e = $("form:visible").attr("id");
    void 0 !== e && execAnimeLinhas(e)
});

function appPlayCustomizada() {
        var customParameterPrimeiroNome = getUrlParameter('custom_parameter_primeiro_nome');
        var customParameterDiaMesAno = getUrlParameter('custom_parameter_dma');

        if (getUrlParameter('custom_parameter_dma')) {
                var customParameterDiaMesAnoArray = customParameterDiaMesAno.split('/');
                var customParameterDia = customParameterDiaMesAnoArray[0];
                var customParameterMes = customParameterDiaMesAnoArray[1];
                var customParameterAno = customParameterDiaMesAnoArray[2];
        } else {
                var customParameterDia = getUrlParameter('custom_parameter_dia');
                var customParameterMes = getUrlParameter('custom_parameter_mes');
                var customParameterAno = getUrlParameter('custom_parameter_ano');
        }

        if ( customParameterPrimeiroNome.length > 0 ) {
                $( '#user-details-name' ).val(customParameterPrimeiroNome);
        }

        if ( customParameterDia.length > 0 ) {
                $( '#user-details-day-helper' ).val(customParameterDia);
                $( 'input#user-details-day' ).val(customParameterDia);
        }

        if ( customParameterMes.length > 0 ) {
                $( '#user-details-month-helper' ).val(customParameterMes);
                $( 'input#user-details-month' ).val(customParameterMes);
        }

        if ( customParameterAno.length > 0 ) {
                $( '#user-details-year-helper' ).val(customParameterAno);
                $( '#user-details-year' ).val(customParameterAno);
                setTimeout(
                        function()
                        {
                              $("#submit-user-form").click();
                        }, 500);
        }
        else {
                $("body").addClass("loaded");
        }
}



            $("a").on('click', function (event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {
                        window.location.hash = hash;
                    });
                }
            });

$(document).ready(function() {

    $("a").on('click', function (event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {
                        window.location.hash = hash;
                    });
                }
    });

    // showCheckoutFinalApresentacao();

    appPlayCustomizada();
    execFundoN();
    execAnimeLinhas("user-details-form");

    // MEXI AQUI
    // $(window).on("load touchend resize",function(e) {
    //     let dob_group = $("#birthdate");
    //     let dropdown_height = window.innerHeight - dob_group.offset().top - 20;
    //     dob_group.css('height', dropdown_height + 'px');
    //     let offset = 68;
    //     $('#birthdate ul.selectbox-dropdown').css('height', (dropdown_height - offset) + 'px');
    // });

    $('.selectbox-dropdown-wrapper.last').click(function(event) {
        if($('#user-details-year').val()=='') {
            $('#dob-year-dropdown').scrollTop($('#dob-year-dropdown li:eq(34)').offset().top);
        }
    });

    $('.slideshow-skip').on('click', function(){
        var cookies = window.info_details;
        if(presentationPart == 'lifepath'){
            ativaCt('expression-form-container', 1000, 0, 'expression-form');
            mudarFundoNumeros('word',cookies.name+''+cookies.dob.replace('/',''));
            videojs("lifepath-sound").dispose();
            $('.slideshow-player-content').empty();
            $('.slideshow-container').hide();
        }else if(presentationPart == 'expression'){
            ativaCt('soulurge-form-container', 600, 0, 'soulurge-form');
            mudarFundoNumeros('digits');
            videojs("expression-sound").dispose();
            $('.slideshow-player-content').empty();
            $('.slideshow-container').hide();
        }
    });

                if (md.mobile() && md.tablet()) {
                        var defaultVolume = 0.1;
                        videojs('background-sound', {}, function() {this.volume(defaultVolume);}).src({type: 'audio/mpeg', src: 'https://storage.testenumerologico.com.br/obrigado/audios/fundo-som.mp3'});
                } else {
                        var defaultVolume = 0.2;
                        videojs('background-sound', {}, function() {this.volume(defaultVolume);}).src({type: 'audio/mpeg', src: 'https://storage.testenumerologico.com.br/obrigado/audios/fundo-som.mp3'});
                }

    if(window.isMobile.any()){
        $('.bg-nums span.left:even, .bg-nums span.right:odd').remove();
        $('.bg-nums span').each(function(i,e){
            var fontsize = parseInt($(e).css('font-size'));
            if(fontsize > 18)
                $(e).css('font-size',fontsize*0.6);
        });
        $('#user-details-month-helper, #user-details-day-helper, #user-details-year-helper, #expression-gender-helper, #soulurge-marital-helper').attr('readonly','readonly');
    }

    $(".selectbox-dropdown-wrapper").on("click focus", function(e) {
        return $(".selectbox-dropdown-wrapper.active").removeClass("active"), $(".selectbox-dropdown-placeholder").attr("disabled", "disabled").blur(), $(this).toggleClass("active"), $(".selectbox-dropdown-wrapper.active .selectbox-dropdown-placeholder").attr("disabled", !1), setTimeout(function() {
            $(".selectbox-dropdown-wrapper.active .selectbox-dropdown-placeholder").focus().val($(".selectbox-dropdown-wrapper.active .selectbox-dropdown-placeholder").val())
        }, 1e3), $(".selectbox-dropdown-wrapper.active .selectbox-dropdown").scrollTo($(".selectbox-dropdown-wrapper.active .selectbox-dropdown li.selected"), {
            duration: 100
        }), !1
    }), $(".selectbox-dropdown-wrapper.active").on("blur", function(e) {
        $(".selectbox-dropdown>li.selected>a", $(this)).click()
    }), $(document).on("click", function(e) {
        $(".selectbox-dropdown-wrapper.active").removeClass("active")
    }), $(".selectbox-dropdown>li>a").on("click", function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = $(this).closest(".selectbox-dropdown-wrapper").data("input"),
            a = $(this).closest("li").data("value"),
            o = $(this).text();
        $(this).closest(".selectbox-dropdown").find("li.selected").removeClass("selected"), $(this).closest("li").addClass("selected"), $(this).closest(".selectbox-dropdown").slideUp(600, function() {
            var e = $(this);
            setTimeout(function() {
                e.closest(".selectbox-dropdown-wrapper").removeClass("active"), e.removeAttr("style")
            }, 100)
        }), $(this).closest(".selectbox-dropdown-wrapper").find(".selectbox-dropdown-placeholder").attr("disabled", !1).val(o).attr("disabled", "disabled"), $("input#" + t).val(a)
    }), $(document).on("keyup change", ".selectbox-dropdown-placeholder", function(e) {
        var t = $(this).closest(".selectbox-dropdown-wrapper").data("input"),
            a = $(this).val();
        if ($(this).nextAll(".selectbox-dropdown").find("li").removeClass("selected"), $.trim(a) && "" != a) {
            var o = "user-details-month" == t ? firstUc(a, !0) : a;
            $(this).nextAll(".selectbox-dropdown").find("li").filter(function() {
                return 0 === $(this).text().indexOf(o)
            }).first().addClass("selected"), a = $(this).nextAll(".selectbox-dropdown").find("li.selected").data("value")
        }
        $(".selectbox-dropdown-wrapper.active .selectbox-dropdown").scrollTo($(".selectbox-dropdown-wrapper.active .selectbox-dropdown li.selected"), {
            duration: 100
        }), $("#" + t).val(a)
    }), $(document).on("keydown", ".selectbox-dropdown-wrapper", function(e) {
        9 == e.keyCode && $(this).hasClass("last") && ($("body").click(), $("#" + $(this).data("nexttab")).focus()), 13 == e.keyCode && $(".selectbox-dropdown > li.selected > a", $(this)).click()
    }), $.validator.setDefaults({
        ignore: ".autocomplete-helper",
        errorPlacement: function(e, t) {
            var a = t.attr("name");
            $("#" + a + "-error").is(":visible") || noty({
                layout: "bottomCenter",
                timeout: 3e3,
                progressBar: !0,
                theme: "metroui",
                text: e,
                force: !0,
                type: "error",
                animation: {
                    open: "animated flipInX",
                    close: "animated zoomOut",
                    easing: "swing",
                    speed: 500
                }
            })
        }
    }), $.validator.addMethod("username", function(e) {
        return name = name.replace(/\s\s+/g, " ").trim(), /^([a-zA-Z\u0027\u00B4\u0060\u00C0-\u00FF ]+)$/.test(e)
    }, "Somente letras e espaços são permitidos."), $.validator.addMethod("nowhitespace", function(e, t) {
        return $.trim(e) && "" != e
    }, "Nome não pode estar vazio."), $.validator.addMethod("startyear", function(e, t) {
        return Number($.trim(e).split("-")[0]) >= (new Date).getFullYear() - 100
    }, "Seu ano de nascimento não deve ser inferior a " + ((new Date).getFullYear() - 100) + "."), $.validator.addMethod("endyear", function(e, t) {
        return Number($.trim(e).split("-")[0]) <= (new Date).getFullYear() + 2
    }, "Seu ano de nascimento não deve ser maior que " + ((new Date).getFullYear() + 2) + "."), $.validator.addMethod("twowords", function(e, t) {
        return e = e.replace(/\s\s+/g, " "), 1 != $.trim(e).split(" ").length
    }, "Nome Completo deve ter pelo menos dois nomes."),


    $.validator.addMethod("addrmail", function(e, t) {
        return this.optional(t) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e);
    }, "Por favor, forneça um endereço de email válido."),

    $.validator.addMethod("addrphone", function(p, t) {
        return this.optional(t) || /^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(p);
    }, "Por favor, forneça um número de WhatsApp válido."),

    $.validator.addMethod("fullname", function(t, a) {
        var e = /^[a-z\u0027\u00B4\u0060\u00E0-\u00FC.,][-’' a-z\u0027\u00B4\u0060\u00E0-\u00FC.,]*[ ][-’' a-z\u0027\u00B4\u0060\u00E0-\u00FC.,]*[a-z\u0027\u00B4\u0060\u00E0-\u00FC.,]$/i;
        return o = (o = t).replace(/\s\s+/g, " "), e.test(o); var o
    }, "Remova todos os números ou símbolos antes de enviar."),

    $.validator.addMethod("checkgender", function(e, t) {
        return this.optional(t) || /^\bmale\b$/.test(e.toLowerCase()) || /^\bfemale\b$/.test(e.toLowerCase())
    }, "Gênero deve ser apenas 'Masculino' ou 'Feminino'."), $.validator.addMethod("checkmarital", function(e, t) {
        return this.optional(t) || /^\bcasado\b$/.test(e.toLowerCase()) || /^\bsolteiro\b$/.test(e.toLowerCase()) || /^\bnamorando\b$/.test(e.toLowerCase()) || /^\bnoivo\b$/.test(e.toLowerCase()) || /^\bseparado\b$/.test(e.toLowerCase()) || /^\bdivorciado\b$/.test(e.toLowerCase()) || /^\bviuvo\b$/.test(e.toLowerCase())
    }, "Valores permitidos do estado civil: 'Casado', 'Namorando', 'Solteiro', 'Divorciado/Separado', 'Viúvo' ou 'Noivo'."),

    $("#user-details-form").validate({
        ignore: "", onsubmit: !0, onkeyup: !1, onclick: !1, onfocusout: !1,
        rules: { "user-details-name": {required: !0, nowhitespace: !0, username: !0},
            "user-details-month": {required: !0},
            "user-details-day": {required: !0},
            "user-details-year": {required: !0},
            "user-details-dob": {required: !0}
        },
        messages: {
            "user-details-name": {required: "Digite apenas seu Primeiro Nome"},
            "user-details-month": {required: "Selecione o Mês de Nascimento"},
            "user-details-day": {required: "Selecione o Dia de Nascimento"},
            "user-details-year": {required: "Selecione o Ano de Nascimento"},
            "user-details-dob": {required: "Selecione a Data de Nascimento"}
        }
    });

    $("#expression-form").validate({
        ignore: "",
        onsubmit: !0,
        onkeyup: !1,
        onclick: !1,
        onfocusout: !1,
        rules: {
            "expression-gender": {
                required: !0,
                checkgender: !0
            },
            "expression-full-birth-name": {
                required: !0,
                nowhitespace: !0,
                twowords: !0,
                fullname: !0,
                remote: {
                    url: "https://testenumerologico.com.br/obrigado-api-v2/valida-nomecompleto",
                    type: "POST",
                    cache: !1,
                    dataType: "json"
                }
            }
        },
        messages: {
            "expression-gender": {
                required: "Selecione o seu Gênero"
            },
            "expression-full-birth-name": {
                required: "Digite seu Nome Completo",
                remote: "Pelo menos 1 vogal é necessário"
            }
        }
    });

     if ( whatsapp == 'yes' ) {

                $("#soulurge-form").validate({
                ignore: "", onsubmit: !0, onkeyup: !1, onclick: !1, onfocusout: !1,
                        rules: {
                        "soulurge-email": {required: !0, addrmail: true},
                        "soulurge-marital": {required: !0, checkmarital: !0},
                        "phone": {required: !0, addrphone: true}
                        },
                        messages: {
                        "soulurge-marital": {required: "Estado civil é obrigatório"},
                        "soulurge-email": {required: "E-mail é obrigatório"},
                        "phone": {required: "Por favor, forneça um número de WhatsApp válido"}
                        }
                });

        }

     if ( whatsapp == 'no' ) {

                $("#soulurge-form").validate({
                ignore: "", onsubmit: !0, onkeyup: !1, onclick: !1, onfocusout: !1,
                        rules: {
                        "soulurge-email": {required: !0, addrmail: true},
                        "soulurge-marital": {required: !0, checkmarital: !0}
                        },
                        messages: {
                        "soulurge-marital": {required: "Estado civil é obrigatório"},
                        "soulurge-email": {required: "E-mail é obrigatório"}
                        }
                });

        }

    $(document).on("keypress", function(e) {
        if ( e.keyCode == 13 && $("#user-details-form").is(":visible") ) {
            if ( $("#submit-user-form").is(":visible") ) {
                $("#submit-user-form").click();
                e.preventDefault();
            }
            else {
                $("#pre-submit-user-form").click();
                e.preventDefault();
            }
        }
        else if ( e.keyCode == 13 && $("#buy-form").is(":visible") ) {
            $("#submit-buy-form").click();
            e.preventDefault();
        }
        else if ( e.keyCode == 13 && $("#expression-form").is(":visible") ) {
            $("#submit-expression-form").click();
            e.preventDefault();
        }
        else if ( e.keyCode == 13 && $("#soulurge-form").is(":visible") ) {
            $("#submit-soulurge-form").click();
            e.preventDefault();
        }
        return;
    }),

    $("#pre-submit-user-form").on("click", function(e) {
        $( "#user-details-day" ).val("00");
        $( "#user-details-month" ).val("00");
        $( "#user-details-year" ).val("00");

        if (e.preventDefault(), $("#user-details-form").valid()) {
            $("body").removeClass("loaded");

            $( "#user-details-day" ).val("");
            $( "#user-details-month" ).val("");
            $( "#user-details-year" ).val("");

            $( ".user-form-nome-campos" ).hide();
            $( ".pre-submit-user-form-custom" ).hide();

            $( ".user-form-birth-campos" ).fadeIn(1000, function() {
                var e = $("form:visible").attr("id");
                $(".label-line").each(function(e, t) {
                    $(t).css({
                        width: 0,
                        marginLeft: 300
                    });
                });
                execAnimeLinhas(e);
            });
            $( ".submit-user-form-custom" ).fadeIn(1000);

	    if (!$(".lp-subtitle2").isInViewport()) {	    
	    	var scrollToSub = document.getElementsByClassName('lp-subtitle2')[0];
	    	scrollToSub.scrollIntoView({
	    	  	behavior: "smooth"
	    	});
	    }

            setTimeout(function() {
                $("body").addClass("loaded");
            }, 750);
        }
    });

    $("#submit-user-form").on("click", function(e) {

        $("#play-1-selector").removeClass('play-step-01-none');
        $("#play-1-selector").addClass('play-step-01-block');
        $("#play-2-selector").removeClass('play-step-02-block');
        $("#play-2-selector").addClass('play-step-02-none');
        $("#play-3-selector").removeClass('play-step-03-block');
        $("#play-3-selector").addClass('play-step-03-none');


        if (e.preventDefault(), $("#user-details-form").valid()) {
                var t = $("#user-details-month").val() + "/" + $("#user-details-day").val() + "/" + $("#user-details-year").val();
                window.dob = t;

            if (checarData(t)) {

                presentationPart = 'lifepath';

                var imagesPreloaded = new Array()
                function preloadImages() {
                        for (i = 0; i < preloadImages.arguments.length; i++) {
                                imagesPreloaded[i] = new Image()
                                imagesPreloaded[i].src = preloadImages.arguments[i]
                        }
                }
                preloadImages(
                        "https://testenumerologico.com.br/video/images/circulo-fundo.png",
                        "https://testenumerologico.com.br/video/images/sombra.png",
                        "https://testenumerologico.com.br/video/images/imagem-01.png",
                        "https://testenumerologico.com.br/video/images/imagem-02.png",
                        "https://testenumerologico.com.br/video/images/imagem-03.png",
                        "https://testenumerologico.com.br/video/images/imagem-04.png",
                        "https://testenumerologico.com.br/video/images/imagem-05.png"
                )

                $(".forms-bg").hide(), $(".initial-mandala-bg").fadeOut(3e3);
                var a = $("#user-details-name").val();
                a = a.replace(/\s\s+/g, " ").trim();
                moment.locale('pt-br');
                // var o = moment(new Date(t)).format("DD [de] MMMM [de] YYYY");
                var o = moment(new Date(t)).format("DD/MM/YYYY");
                var n = window.info_details;
                window.info_details = { name: a, dob: t, gender: n.gender, fullname: n.fullname, marital: n.marital, email: n.email };
                $( ".lifepath-calculation-container" ).show();
                $(".lifepath-calculation-container .content-title b").text(a);
                $(".lifepath-calculation-container .content-subtitle b").text(o);
                mostraDestinoTabela(t);
                mostraDestinoInfos(a, t);
                ativaCt("greeting-lifepath-container", 2e3, 0),
                // Typed.new(".greeting-lifepath-container .content-title span", {
                //     strings: ["Número de Destino para <b>" + a + "</b>"],
                //     contentType: "html",
                //     typeSpeed: 10,
                //     showCursor: !0,
                //     cursorChar: "&nbsp;",
                //     callback: function() {
                //         $(".typed-cursor").remove()
                //         Typed.new(".greeting-lifepath-container .content-subtitle span", {
                //             strings: ["Data de Nascimento <b>" + o + "</b>"],
                //             contentType: "html",
                //             // startDelay: 1250,
                //             typeSpeed: 10,
                //             showCursor: !0,
                //             cursorChar: "&nbsp;",
                //             callback: function() {
                //                 $(".typed-cursor").remove()
                //             }
                //         })
                //     }
                // });
                vaiParaConteudo();
            } else {
                $("#user-details-month").val("");
                $("#user-details-day").val("");
                $('div[data-input="user-details-month"]').find(".selectbox-dropdown-placeholder").text("Month");
                $('div[data-input="user-details-month"]').find(".selectbox-dropdown").find("li.selected").removeClass("selected");
                $('div[data-input="user-details-day"]').find(".selectbox-dropdown-placeholder").text("Day");
                $('div[data-input="user-details-day"]').find(".selectbox-dropdown").find("li.selected").removeClass("selected");
                $("#user-details-form").valid();
            }
        }
    }), ("true" == verify) && $("#submit-user-form").trigger("click");

    $("#submit-expression-form").on("click", function(e) {

        $("#play-2-selector").removeClass('play-step-02-none');
        $("#play-2-selector").addClass('play-step-02-block');
        $("#play-1-selector").removeClass('play-step-01-block');
        $("#play-1-selector").addClass('play-step-01-none');
        $("#play-3-selector").removeClass('play-step-03-block');
        $("#play-3-selector").addClass('play-step-03-none');

        window.awaitingInput = false;
        if (e.preventDefault(), $("#expression-full-birth-name").val($("#expression-full-birth-name").val().trim()), $("#expression-form").valid()) {
            presentationPart = 'expression';
            $(".forms-bg").hide();
            if($("#lifepath-sound").length > 0) {
                videojs("lifepath-sound").dispose();
            }
            var t = $("#expression-gender").val(),
                a = $("#expression-full-birth-name").val(),
                o = a;
            o = (o = (o = (o = (o = (o = o.replace(/([,.])/g, "")).replace(/([’])/g, "")).replace(/(['])/g, "")).replace(/([-])/g, " "))).replace(/\s\s+/g, " "), a = a.replace(/\s\s+/g, " "), $(".expression-calculation-container .content-title b, .expression-calculation-container-2 .content-title b").text(a),
            $( ".greeting-expression-sign-container" ).show();
            Typed.new(".greeting-expression-sign-container .sign-title span", {
                strings: ["Análise da Expressão do seu Nome:<br><b>" + a + "</b>"],
                contentType: "html",
                typeSpeed: 50,
                showCursor: !0,
                cursorChar: "&nbsp;",
                callback: function() {
                    $(".typed-cursor").remove()
                }
            });
            var n = o.split(""),
                i = "";
            $.each(n, function(e, t) {
                i += " " != t ? '<td><div class="animated anim">' + t.toUpperCase() + "</div></td>" : '<td><div class="space anim"> </div></td>'
            }), $(".expression-fullname table tr").html(i);
            var u = window.info_details;
            if(u.dob == undefined || u.dob == '' || u.dob == 'undefined' || u.dob == null) {
              u.dob = window.dob;
            }
                        window.info_details = {
                name: u.name,
                dob: u.dob,
                gender: t,
                fullname: a
                },
                $("body").removeClass("loaded");
                // mudarFundo("expression-calculation", 1500, 0);
                // montarBaralho();
                // setTimeout(function() {
                    $( ".row-ppt-cartas" ).hide();
                    ativaCt("greeting-expression-sign-container", 1500, 0);
                    exibirCartaExpressaoAposFormulario();
                    mostraExpressaoTabela(a);
                    mostraExpressaoInfos(u.name, u.dob, t, a);
                    // var dob_debug = "08/05/1990";
                    // var nome_debug = "Allan";
                    // mostraExpressaoInfos(nome_debug, dob_debug, t, a);
                    vaiParaConteudo();
                // }, 3000);
        }
    }),

    $("#submit-soulurge-form").on("click", async function(e) {

        $("#play-3-selector").removeClass('play-step-03-none');
        $("#play-3-selector").addClass('play-step-03-block');
        $("#play-1-selector").removeClass('play-step-01-block');
        $("#play-1-selector").addClass('play-step-01-none');
        $("#play-2-selector").removeClass('play-step-02-block');
        $("#play-2-selector").addClass('play-step-02-none');
        fbPixelLead();

        window.awaitingInput = false;
        $('.slideshow-skip').hide();
        if ($("#soulurge-form").valid()) {
            $(".forms-bg").hide();
            if($("#expression-sound").length > 0) {
                videojs("expression-sound").dispose();
            }
            var t = $("#soulurge-marital").val(),
                a = $("#soulurge-email").val(),
                o = window.info_details;

                n = ["A", "Á", "À", "Ã", "Â", "Ä", "E", "É", "È", "Ê", "Ë", "I", "Í", "Ì", "Î", "Ï", "O", "Ó", "Ò", "Õ", "Ô", "Ö", "U", "Ú", "Ù", "Û", "Ü", "Y", "Ý", "Ÿ"],
                i = o.fullname.split(""),
                u = "";
                p = $("#phone").val()
                c = $("#ccode").val()
                r = ref;
                s = src;
                k = sck;
            $.each(i, function(e, t) {
                var a = -1 == $.inArray(t.toUpperCase(), n) ? "fake-consonant" : "";
                u += " " != t ? '<td><div class="animated ' + a + '">' + t.toUpperCase() + "</div></td>" : '<td><div class="space"> </div></td>'
            }), $(".soulurge-fullname table tr").html(u), window.info_details = {
                    name: o.name,
                    dob: o.dob,
                    gender: o.gender,
                    fullname: o.fullname,
                    marital: t,
                    email: a,
                    phone: p,
                    ccode: c,
                    ref: r,
                    src: s,
                    sck: k
                },
                $( ".greeting-soulurge-sign-container" ).show();
                Typed.new(".greeting-soulurge-sign-container .sign-title span", {
                strings: ["Análise da Motivação do seu Nome:<br><b>" + o.fullname + "</b>"],
                contentType: "html",
                typeSpeed: 200,
                showCursor: !0,
                cursorChar: "&nbsp;",
                callback: function() {
                    $(".typed-cursor").remove()
                }
            });
            $("body").removeClass("loaded");
            // montarBaralho();
            // setTimeout(function() {
                $( ".row-ppt-cartas" ).hide();
                // mudarFundo("soulurge-calculation", 3e3, 0);
                // $(".lifepath-calculation-container .content-title b").text(a);
                ativaCt("greeting-soulurge-sign-container", 300, 0);
                $( ".soulurge-form-container" ).hide();
                exibirCartaMotivacaoAposFormulario();
                mostraMotivacaoTabelas(o.fullname);
                mostraMotivacaoInfos(o.name, o.dob, o.gender, o.fullname, t, a, p, c, r, s, k);
                // var dob_debug = "08/05/1990";
                // var nome_debug = "Allan";
                // mostraMotivacaoInfos(nome_debug, dob_debug, o.gender, o.fullname, t, a, p, c, r, s, k);
                vaiParaConteudo();
            // }, 3000);
        }
     })
}), jQuery.fn.setCursorToTextEnd = function() {
    var e = this.val();
    this.val(e)
};

function KaballahSlideshow(e, t, a, o) {
    var n = $(".play-modal"),
        i = $(".slideshow-container"),
        u = $(".slideshow-player-content"),
        s = 0,
        r = this,
        l = 0,
        d = !1,
        c = [];
    r.slides = [], r.preload = function() {
        if (0 == c.length) setTimeout(function() {
            u.removeClass("loading").addClass("paused"), false === a || is_mobile === "true" ? videojs(e).pause() : videojs(e).play()
        }, 750);
        else {
            var t = new Image,
                o = c.shift();
            t.onload = function(e) {
                r.preload()
            }, t.src = o
        }
    }, r.drawSlide = function(e) {
        if (!d && (update = !1, e >= l && (update = !0), update && void 0 !== r.slides[s])) {
            d = !0;
            var t = r.slides[s];
            t.clear && u.empty();
            for (var a = 0; a < t.items.length; a++)
                if ("callback" != t.items[a].type || "undefined" == t.items[a].fn) {
                    var o = window.isMobile.any() || !window.isMobile.any() && $(window).width() < 992 ? $(t.items[a].html.replace(/<br.*?>/g, " ").replace(/&nbsp;/g, " ")) : $(t.items[a].html);
                    "object" == typeof t.items[a].style && o.css(t.items[a].style), o.appendTo(u)
                } else void 0 !== window[t.items[a].fn] && window[t.items[a].fn].apply(window, t.items[a].arguments);
            l = r.slides[s].starttime + r.slides[s].time, s++, d = !1
        }
    }, $.getJSON(t, function(t) {
        void 0 !== t.style && u.closest(".slideshow-player").css(t.style), void 0 !== t.script && $.getScript(t.script);
        var d = 0;
        if ("last5sec" === a) {
            for (var p = 0; p < t.slides.length; p++) t.slides[p].starttime = d, d += t.slides[p].time;
            d -= 10
        }
        if (0 === d) r.slides = t.slides;
        else
            for (p = 0; p < t.slides.length; p++) t.slides[p].starttime >= d && r.slides.push(t.slides[p]);
        var m = 0;
        for (p = 0; p < r.slides.length; p++) {
            r.slides[p].starttime = m, m += r.slides[p].time;
            for (var f = 0; f < r.slides[p].items.length; f++) "image" == r.slides[p].items[f].type && c.push(r.slides[p].items[f].src)
        }
        r.preload();
        var currentPlayer = videojs(e);
        currentPlayer.src({type: 'audio/mpeg', src: t.audio + "?" + (new Date).getTime()});
        currentPlayer.ready(function() {
            $(window).trigger('resize');

            slshControles(e);

            $("body").addClass("loaded"), window.isMobile.any() || is_safari ? (i.fadeIn(), n.fadeIn()) : i.delay(o).fadeIn();

            n.on('click', function() {
                currentPlayer.play();
                videojs('background-sound').play();
            });
            this.on('timeupdate', function() {
                var t = this.currentTime();
                r.drawSlide(t);
            });
            this.on('play', function() {
                $("body").addClass("loaded");
                $(u).removeClass("paused").addClass("played");
                $(".anim").resume();
                $(".anim, .animated:not(.free-report-form)").css("-webkit-animation-play-state", "running");
                videojs('background-sound').play();
                n.fadeOut();
            });
            this.on('pause', function() {
                $(u).removeClass("played").addClass("paused");
                $(".anim").pause();
                $(".anim, .animated:not(.free-report-form)").css("-webkit-animation-play-state", "paused");
                videojs('background-sound').pause();
            });
            this.on('ended', function() {
                this.dispose();
                i.hide();
                $(u).removeClass("played").removeClass("paused").empty();
                l = 0;
                s = 0;
                $(".anim").resume();
                $(".anim, animated:not(.free-report-form)").css("-webkit-animation-play-state", "running");
                videojs('background-sound').play();
            });
        })
    })
}

function slshControles(e) {
    var controls = $(".slideshow-player-controls");
    var play = controls.find('.play');
    var pause = controls.find('.pause');
    var mute = controls.find('.mute');
    var unmute = controls.find('.unmute');
    var targetPlayer = videojs(e);
    var bgPlayer = videojs('background-sound');

    controls.children().off();

    play.hide();
    unmute.hide();

    pause.on('click', function() {
        targetPlayer.pause();
        play.toggle();
        pause.toggle();
    });
    play.on('click', function() {
        targetPlayer.play();
        play.toggle();
        pause.toggle();
    });
    mute.on('click', function() {
        targetPlayer.muted(true);
        bgPlayer.muted(true);
        unmute.toggle();
        mute.toggle();
    });
    unmute.on('click', function() {
        targetPlayer.muted(false);
        bgPlayer.muted(false);
        mute.toggle();
        unmute.toggle();
    });
}

function checarData(e) {
    var t = e;
    if ("" == t) return !1;
    var a = t.match(/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/);
    if (null == a) return !1;
    if (dtMonth = a[1], dtDay = a[3], dtYear = a[5], dtMonth < 1 || dtMonth > 12) return !1;
    if (dtDay < 1 || dtDay > 31) return !1;
    if ((4 == dtMonth || 6 == dtMonth || 9 == dtMonth || 11 == dtMonth) && 31 == dtDay) return !1;
    if (2 == dtMonth) {
        var o = dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0);
        if (dtDay > 29 || 29 == dtDay && !o) return !1
    }
    return !0
}
var Numerology = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22],
    getResultNum: function(e) {
        if (-1 == $.inArray(parseInt(e), this.numbers)) {
            for (var t = 0, a = 0; a < $.trim(e).length; a++) t += parseInt(e.charAt(a));
            return !!$.isNumeric(t) && this.getResultNum(t.toString())
        }
        return parseInt(e)
    }
};

function OnOffVerifyAccentsPart1() {
    var nameMatrix = $("#user-details-name").val();

    var regExpAccents14 = /[ÒÔÖòôö]/g;
    var regExpAccents12 = /[ÊÙÜêùü]/g;
    var regExpAccents10 = /[ÈËÕèëõ]/g;
    var regExpAccents09 = /[Óó]/g;
    var regExpAccentsLine08 = /[Ïï]/g;
    var regExpAccentsLine07 = /[ÌÍìí]/g;

    if(regExpAccentsLine07.test(nameMatrix)){
        $(".on-off-verify-accents-line-07").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07").addClass('verify-accents-line-07-off');
    }

    if(regExpAccentsLine08.test(nameMatrix)){
        $(".on-off-verify-accents-line-08").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08").addClass('verify-accents-line-08-off');
    }

    if(regExpAccents09.test(nameMatrix)){
        $(".on-off-verify-accents-09").addClass('verify-accents-09-on');
        } else {
        $(".on-off-verify-accents-09").addClass('verify-accents-09-off');
    }

    if(regExpAccents10.test(nameMatrix)){
        $(".on-off-verify-accents-10").addClass('verify-accents-10-on');
        } else {
        $(".on-off-verify-accents-10").addClass('verify-accents-10-off');
    }

    if(regExpAccents12.test(nameMatrix)){
        $(".on-off-verify-accents-12").addClass('verify-accents-12-on');
        } else {
        $(".on-off-verify-accents-12").addClass('verify-accents-12-off');
    }

    if(regExpAccents14.test(nameMatrix)){
        $(".on-off-verify-accents-14").addClass('verify-accents-14-on');
        } else {
        $(".on-off-verify-accents-14").addClass('verify-accents-14-off');
    }


    if (regExpAccentsLine07.test(nameMatrix) && regExpAccents09.test(nameMatrix)) {
        $(".on-off-verify-accents-line-07-col-09").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07-col-09").addClass('verify-accents-line-07-off');
    }

    if (regExpAccentsLine07.test(nameMatrix) && regExpAccents10.test(nameMatrix)) {
        $(".on-off-verify-accents-line-07-col-10").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07-col-10").addClass('verify-accents-line-07-off');
    }

    if (regExpAccentsLine07.test(nameMatrix) && regExpAccents12.test(nameMatrix)) {
        $(".on-off-verify-accents-line-07-col-12").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07-col-12").addClass('verify-accents-line-07-off');
    }

    if (regExpAccentsLine07.test(nameMatrix) && regExpAccents14.test(nameMatrix)) {
        $(".on-off-verify-accents-line-07-col-14").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07-col-14").addClass('verify-accents-line-07-off');
    }

    if (regExpAccentsLine08.test(nameMatrix) && regExpAccents09.test(nameMatrix)) {
        $(".on-off-verify-accents-line-08-col-09").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08-col-09").addClass('verify-accents-line-08-off');
    }

    if (regExpAccentsLine08.test(nameMatrix) && regExpAccents10.test(nameMatrix)) {
        $(".on-off-verify-accents-line-08-col-10").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08-col-10").addClass('verify-accents-line-08-off');
    }

    if (regExpAccentsLine08.test(nameMatrix) && regExpAccents12.test(nameMatrix)) {
        $(".on-off-verify-accents-line-08-col-12").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08-col-12").addClass('verify-accents-line-08-off');
    }

    if (regExpAccentsLine08.test(nameMatrix) && regExpAccents14.test(nameMatrix)) {
        $(".on-off-verify-accents-line-08-col-14").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08-col-14").addClass('verify-accents-line-08-off');
    }

}

function OnOffVerifyAccentsPart2() {

    $(".on-off-verify-accents-line-07").removeClass('verify-accents-line-07-on');
    $(".on-off-verify-accents-line-07").removeClass('verify-accents-line-07-off');
    $(".on-off-verify-accents-line-08").removeClass('verify-accents-line-08-on');
    $(".on-off-verify-accents-line-08").removeClass('verify-accents-line-08-off');
    $(".on-off-verify-accents-09").removeClass('verify-accents-09-on');
    $(".on-off-verify-accents-09").removeClass('verify-accents-09-off');
    $(".on-off-verify-accents-10").removeClass('verify-accents-10-on');
    $(".on-off-verify-accents-10").removeClass('verify-accents-10-off');
    $(".on-off-verify-accents-12").removeClass('verify-accents-12-on');
    $(".on-off-verify-accents-12").removeClass('verify-accents-12-off');
    $(".on-off-verify-accents-14").removeClass('verify-accents-14-on');
    $(".on-off-verify-accents-14").removeClass('verify-accents-14-off');
    $(".on-off-verify-accents-line-07-col-09").removeClass('verify-accents-line-07-on');
    $(".on-off-verify-accents-line-07-col-09").removeClass('verify-accents-line-07-off');
    $(".on-off-verify-accents-line-07-col-10").removeClass('verify-accents-line-07-on');
    $(".on-off-verify-accents-line-07-col-10").removeClass('verify-accents-line-07-off');
    $(".on-off-verify-accents-line-07-col-12").removeClass('verify-accents-line-07-on');
    $(".on-off-verify-accents-line-07-col-12").removeClass('verify-accents-line-07-off');
    $(".on-off-verify-accents-line-07-col-14").removeClass('verify-accents-line-07-on');
    $(".on-off-verify-accents-line-07-col-14").removeClass('verify-accents-line-07-off');
    $(".on-off-verify-accents-line-08-col-09").removeClass('verify-accents-line-08-on');
    $(".on-off-verify-accents-line-08-col-09").removeClass('verify-accents-line-08-off');
    $(".on-off-verify-accents-line-08-col-10").removeClass('verify-accents-line-08-on');
    $(".on-off-verify-accents-line-08-col-10").removeClass('verify-accents-line-08-off');
    $(".on-off-verify-accents-line-08-col-12").removeClass('verify-accents-line-08-on');
    $(".on-off-verify-accents-line-08-col-12").removeClass('verify-accents-line-08-off');
    $(".on-off-verify-accents-line-08-col-14").removeClass('verify-accents-line-08-on');
    $(".on-off-verify-accents-line-08-col-14").removeClass('verify-accents-line-08-off');

    var fullnameMatrix = $("#expression-full-birth-name").val();

    var regExpAccents14 = /[ÒÔÖòôö]/g;
    var regExpAccents12 = /[ÊÙÜêùü]/g;
    var regExpAccents10 = /[ÈËÕèëõ]/g;
    var regExpAccents09 = /[Óó]/g;
    var regExpAccentsLine08 = /[Ïï]/g;
    var regExpAccentsLine07 = /[ÌÍìí]/g;


    if(regExpAccentsLine07.test(fullnameMatrix)){
        $(".on-off-verify-accents-line-07").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07").addClass('verify-accents-line-07-off');
    }

    if(regExpAccentsLine08.test(fullnameMatrix)){
        $(".on-off-verify-accents-line-08").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08").addClass('verify-accents-line-08-off');
    }

    if(regExpAccents09.test(fullnameMatrix)){
        $(".on-off-verify-accents-09").addClass('verify-accents-09-on');
        } else {
        $(".on-off-verify-accents-09").addClass('verify-accents-09-off');
    }

    if(regExpAccents10.test(fullnameMatrix)){
        $(".on-off-verify-accents-10").addClass('verify-accents-10-on');
        } else {
        $(".on-off-verify-accents-10").addClass('verify-accents-10-off');
    }

    if(regExpAccents12.test(fullnameMatrix)){
        $(".on-off-verify-accents-12").addClass('verify-accents-12-on');
        } else {
        $(".on-off-verify-accents-12").addClass('verify-accents-12-off');
    }

    if(regExpAccents14.test(fullnameMatrix)){
        $(".on-off-verify-accents-14").addClass('verify-accents-14-on');
        } else {
        $(".on-off-verify-accents-14").addClass('verify-accents-14-off');
    }

    if (regExpAccentsLine07.test(fullnameMatrix) && regExpAccents09.test(fullnameMatrix)) {
        $(".on-off-verify-accents-line-07-col-09").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07-col-09").addClass('verify-accents-line-07-off');
    }

    if (regExpAccentsLine07.test(fullnameMatrix) && regExpAccents10.test(fullnameMatrix)) {
        $(".on-off-verify-accents-line-07-col-10").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07-col-10").addClass('verify-accents-line-07-off');
    }

    if (regExpAccentsLine07.test(fullnameMatrix) && regExpAccents12.test(fullnameMatrix)) {
        $(".on-off-verify-accents-line-07-col-12").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07-col-12").addClass('verify-accents-line-07-off');
    }

    if (regExpAccentsLine07.test(fullnameMatrix) && regExpAccents14.test(fullnameMatrix)) {
        $(".on-off-verify-accents-line-07-col-14").addClass('verify-accents-line-07-on');
        } else {
        $(".on-off-verify-accents-line-07-col-14").addClass('verify-accents-line-07-off');
    }

    if (regExpAccentsLine08.test(fullnameMatrix) && regExpAccents09.test(fullnameMatrix)) {
        $(".on-off-verify-accents-line-08-col-09").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08-col-09").addClass('verify-accents-line-08-off');
    }

    if (regExpAccentsLine08.test(fullnameMatrix) && regExpAccents10.test(fullnameMatrix)) {
        $(".on-off-verify-accents-line-08-col-10").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08-col-10").addClass('verify-accents-line-08-off');
    }

    if (regExpAccentsLine08.test(fullnameMatrix) && regExpAccents12.test(fullnameMatrix)) {
        $(".on-off-verify-accents-line-08-col-12").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08-col-12").addClass('verify-accents-line-08-off');
    }

    if (regExpAccentsLine08.test(fullnameMatrix) && regExpAccents14.test(fullnameMatrix)) {
        $(".on-off-verify-accents-line-08-col-14").addClass('verify-accents-line-08-on');
        } else {
        $(".on-off-verify-accents-line-08-col-14").addClass('verify-accents-line-08-off');
    }

}

/**
 * Animações do novo site
 */

function newAnimacaoNomeDataNascimento() {
    exibirImagemFundo();
    $( ".custom-numero-destino-nome" ).addClass("pulse");
    $( ".custom-numero-destino-nome" ).fadeIn(400);
    $( ".custom-numero-destino-nascimento" ).addClass("pulse");
    $( ".custom-numero-destino-nascimento" ).fadeIn(400);
    // animacaoNomeEsquerda();
    // animacaoNascimentoDireita();
}

function animacaoNomeEsquerda() {
    var margin_left = $( ".background-screen-01-da-apresentacao" ).offset().left;
    var margin_top = $( ".background-screen-01-da-apresentacao" ).offset().top;
    var height = $( ".background-screen-01-da-apresentacao" ).height();
    var y = ( height / 2 ) - ( margin_top / 2 );

    $( ".custom-numero-destino-nome" ).css("opacity", 0);
    $( ".custom-numero-destino-nome" ).show();
    setTimeout(function() {
        var novo_x = $( ".custom-numero-destino-nome" ).offset().left;

        let newDiv = $( "<div />" ).css({position: 'absolute', left: 0, top: y}).addClass("custom-numero-destino-nome-grupo-anime");
        $( "<b />" ).text($( ".custom-numero-destino-nome" ).text()).appendTo(newDiv);
        newDiv.hide();
        newDiv.appendTo( $( ".lifepath-calculation-container .content-title" ) );
        var x = novo_x - margin_left;

        newDiv.show(1000, function() {
            TweenLite.to($( ".custom-numero-destino-nome-grupo-anime" ), 2.3, {
                transform: "translate(" + x + "px, 0px)",
                ease: Linear.easeNone,
                onComplete: criarImagemFundo
            });
        });
    }, 1000);
}

function exibirImagemFundo() {
    // $( ".lifepath-calculation-container" ).css("text-align", "center");
    // let image = $( "<img />" ).attr("src", "images/circulo-inicial-01.png").addClass("image-personalidade-fundo");
    // image.hide();
    // image.appendTo( $(".lifepath-calculation-container") );
    $(".image-personalidade-fundo").fadeIn(400);
}

function animacaoNascimentoDireita() {
    var margin_left = $( ".background-screen-01-da-apresentacao" ).offset().left;
    var margin_top = $( ".background-screen-01-da-apresentacao" ).offset().top;
    var background_width = $( ".background-screen-01-da-apresentacao" ).width();
    var height = $( ".background-screen-01-da-apresentacao" ).height();
    var y = ( height / 2 ) - ( margin_top / 2 ) + 50;
    if ( window.isMobile.any() ) {
        var left = background_width - 60;
    }
    else {
        var left = background_width - 120;
    }

    let newDiv = $( "<div />" ).css({position: 'absolute', left: left, top: y}).addClass("custom-numero-destino-nascimento-grupo-anime");
    $( "<b />" ).text($( ".custom-numero-destino-nascimento" ).text()).appendTo(newDiv);
    newDiv.hide();
    newDiv.appendTo( $( ".lifepath-calculation-container .content-title" ) );

    $( ".custom-numero-destino-nascimento" ).css("opacity", 0);
    $( ".custom-numero-destino-nascimento" ).show();
    setTimeout(function() {
        var novo_x = $( ".custom-numero-destino-nascimento" ).offset().left;
        var x = (novo_x - margin_left) * -1;

        newDiv.show(1000, function() {
            TweenLite.to($( ".custom-numero-destino-nascimento-grupo-anime" ), 2.3, {
                transform: "translate(" + x + "px, 0px)",
                ease: Linear.easeNone
            });
        });
    }, 1000);
}

function createDivsForNascimento() {
    let nascimento = $( ".custom-numero-destino-nascimento" ).text();
    $( ".custom-numero-destino-nascimento-grupo-anime" ).fadeOut(1000, function() {
        for ( var i = 0; i < nascimento.length; i++ ) {
            let letter = nascimento.charAt(i);
            if ( letter == "/" ) { continue; }
            let newDiv = $( "<div />" ).css("position", "absolute").addClass("custom-numero-destino-nascimento-anime");
            $( "<b />" ).text(letter).appendTo(newDiv);
            newDiv.appendTo( $( ".lifepath-calculation-container .content-subtitle" ) );
        }
    
        execNascimentoAnimation();
    });
}

function createDivsForName() {
    let nome = $( ".custom-numero-destino-nome" ).text();
    $( ".custom-numero-destino-nome-grupo-anime" ).fadeOut(1000, function() {
        for ( var i = 0; i < nome.length; i++ ) {
            let letter = nome.charAt(i);
            let newDiv = $( "<div />" ).css("position", "absolute").addClass("custom-numero-destino-nome-anime");
            $( "<b />" ).text(letter).appendTo(newDiv);
            newDiv.appendTo( $( ".lifepath-calculation-container .content-title" ) );
        }
    
        execNameAnimation();
    });
}

function execNameAnimation() {
    let divs = $( ".custom-numero-destino-nome-anime" );
    for (i = 0; i < divs.length; i++) {
        var div = divs[i];
        if ( i % 2 == 0 ) {
            execNomeNascimentoAnimationRecursive(div, "left");
        }
        else {
            execNomeNascimentoAnimationRecursive(div, "right");
        }
    }
}

function execNascimentoAnimation() {
    let divs = $( ".custom-numero-destino-nascimento-anime" );
    for (i = 0; i < divs.length; i++) {
        var div = divs[i];
        if ( i % 2 == 0 ) {
            execNomeNascimentoAnimationRecursive(div, "left");
        }
        else {
            execNomeNascimentoAnimationRecursive(div, "right");
        }
    }
}

function execNomeNascimentoAnimationRecursive(element, position) {
    var window_height = $( window ).height();
    var window_width = $( window ).width();
    var margin_left = $( ".background-screen-01-da-apresentacao" ).offset().left;
    var margin_top = $( ".background-screen-01-da-apresentacao" ).offset().top;
    
    var i = 40 * (.7 + .4 * Math.random());
    var u = i / 2 * Math.random();

    let x_min_left = 0;
    let x_max_left = (window_width * 0.5) - margin_left;
    let x_min_right = x_max_left;
    let x_max_right = (window_width - (margin_left * 2)) * 0.9;
    var y_min = 0;
    if ( window.isMobile.any() ) {
        var y_max = (window_height * 0.4) - margin_top;
    }
    else {
        var y_max = (window_height * 0.6) - margin_top;
    }

    var y = randomizeRg(y_min, y_max);

    var s = position == "left" ? randomizeRg(x_min_left, x_max_left) : randomizeRg(x_min_right, x_max_right);
    var r = position == "left" ? randomizeRg(x_min_left, x_max_left) : randomizeRg(x_min_right, x_max_right);
    var l = position == "left" ? randomizeRg(x_min_left, x_max_left) : randomizeRg(x_min_right, x_max_right);

    var fontSize = randomizeRg(30, 50);

    TweenLite.set(element, {
        y: y,
        x: s,
        z: .01,
        fontSize: fontSize, 
        opacity: "0." + randomizeRg(0, 2)
    });
    TweenLite.to(element, i / 2, {
        y: y,
        x: r,
        z: .01,
        autoAlpha: "0" + randomizeRg(4, 7),
        ease: Linear.easeNone
    });
    TweenLite.to(element, i / 2, {
        delay: u,
        y: y,
        x: l,
        z: .01,
        autoAlpha: 0,
        ease: Linear.easeNone,
        onComplete: execNomeNascimentoAnimationRecursive,
        onCompleteParams: [element, position]
    })
}
