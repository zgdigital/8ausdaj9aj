var cardDeck = [
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/imagem-02_black.png",
    //     id: 2,
    //     alias: 'personality_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/imagem-03_black.png",
    //     id: 3,
    //     alias: 'expression_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/imagem-04_black.png",
    //     id: 4,
    //     alias: 'soulurge_black',
    //     is_enabled: false
    // },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-03.png",
        id: 18,
        alias: 'expression',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-03.png",
        id: 19,
        alias: 'expression',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-04.png",
        id: 20,
        alias: 'soulurge',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-03.png",
        id: 21,
        alias: 'expression',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-04.png",
        id: 22,
        alias: 'soulurge',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-03.png",
        id: 23,
        alias: 'expression',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-04.png",
        id: 24,
        alias: 'soulurge',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-04.png",
        id: 25,
        alias: 'soulurge',
        is_enabled: false
    },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 26,
    //     alias: 'soulurge_virado',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 27,
    //     alias: 'expression_virado',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 1,
    //     alias: 'lifepath_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 5,
    //     alias: 'birthday_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 11,
    //     alias: 'birthday_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 12,
    //     alias: 'birthday_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 13,
    //     alias: 'birthday_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 14,
    //     alias: 'birthday_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 15,
    //     alias: 'birthday_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 16,
    //     alias: 'birthday_black',
    //     is_enabled: false
    // },
    // {
    //     text: "",
    //     image: "https://testenumerologico.com.br/video/images/carta-virada.png",
    //     id: 17,
    //     alias: 'birthday_black',
    //     is_enabled: false
    // },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-02.png",
        id: 6,
        alias: 'lifepath',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-05.png",
        id: 7,
        alias: 'personality',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-03.png",
        id: 8,
        alias: 'expression',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-04.png",
        id: 9,
        alias: 'soulurge',
        is_enabled: false
    },
    {
        text: "",
        image: "https://testenumerologico.com.br/video/images/carta-01.png",
        id: 10,
        alias: 'birthday',
        is_enabled: false
    },
];

var cardsTable = [];
var cardsChoosed = [];

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

var cartasSelecionadas = 0;

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * Updated for EC6/ECMA2015
 * source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

function animacaoMontarBaralho(element, to_element1, element2, to_element2, delay) {
    TweenLite.to(element, 0.5, {
        delay: delay / 5,
        transform: "translate3d(" + to_element1.x + "px, " + to_element1.y + "px, 0px)",
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        transform: to_element2,
        ease: Linear.easeNone
    });
}

function animacaoPilhaSelecionada(element, to_element1, element2, to_element2, element3) {
    TweenLite.to(element, 0.5, {
        transform: "translate3d(" + to_element1.x + "px, " + to_element1.y + "px, 0px)",
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        transform: to_element2,
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        width: "12vh",
        height: "21vh",
        ease: Linear.easeNone
    });

    TweenLite.to(element3, 0.5, {
        fontSize: "7px",
        ease: Linear.easeNone
    });
}

function animacaoDistribuirCartas(element, to_element1, element2, to_element2, delay, width, height, element3, font_size) {
    TweenLite.to(element, 0.5, {
        delay: delay / 4,
        transform: "translate3d(" + to_element1.x + "px, " + to_element1.y + "px, 0px)",
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        transform: to_element2,
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        delay: delay / 4,
        width: width,
        height: height,
        ease: Linear.easeNone
    });

    TweenLite.to(element3, 0.5, {
        fontSize: font_size,
        ease: Linear.easeNone
    });
}

function animacaoSelecionarCarta(element, to_element1, element2, to_element2) {
    TweenLite.to(element, 0.5, {
        transform: "translate3d(" + to_element1.x + "px, " + to_element1.y + "px, 0px)",
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        transform: to_element2,
        ease: Linear.easeNone
    });
}

function animacaoMostrarCarta(element, to_element1, element2, to_element2) {
    TweenLite.to(element, 0.5, {
        transform: "translate3d(" + to_element1.x + "px, " + to_element1.y + "px, 0px)",
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        transform: to_element2,
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        width: "22vh",
        height: "36vh",
        ease: Linear.easeNone
    });
   
}

function animacaoAjustarBaralho(element, element2, coord) {
    TweenLite.to(element, 0.5, {
        transform: "translate3d(" + coord.x + "px, " + coord.y + "px, 0px)",
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        transform: coord,
        ease: Linear.easeNone
    });
}

function animacaoMostrarCartaNascimento(element, to_element1, element2, to_element2, delay) {
    TweenLite.to(element, 0.5, {
        delay: delay / 2,
        transform: "translate3d(" + to_element1.x + "px, " + to_element1.y + "px, 0px)",
        ease: Linear.easeNone,
        onComplete: function() {
            setTimeout(function() {
                element2.addClass("carta-pulsar");
            }, 1000);
        }
    });

    TweenLite.to(element2, 0.5, {
        delay: delay / 2,
        transform: to_element2,
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        width: "15vh",
        height: "20vh",
        ease: Linear.easeNone
    });
}

function animacaoMostrarCartaDestino(element, to_element1, element2, to_element2, element3) {
    TweenLite.to(element, 0.5, {
        transform: "translate3d(" + to_element1.x + "px, " + to_element1.y + "px, 0px)",
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        transform: to_element2,
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        width: "22vh",
        height: "36vh",
        ease: Linear.easeNone
    });

    TweenLite.to(element3, 0.5, {
        fontSize: "70px",
        ease: Linear.easeNone
    });
}

function animacaoMostrarCartasSelecionadas(element, to_element1, element2, to_element2, delay) {
    TweenLite.to(element, 0.5, {
        delay: delay / 2,
        transform: "translate3d(" + to_element1.x + "px, " + to_element1.y + "px, 0px)",
        ease: Linear.easeNone
    });

    TweenLite.to(element2, 0.5, {
        transform: to_element2,
        ease: Linear.easeNone
    });
}
function mostrarCartasSelecionadas() {
    var x = -200;
    var xDelta = 30;
    for ( var i = 0; i < cardsChoosed.length; i++  ) {
        var card = cardsChoosed[i];
        var div1Created = $(" div[data-card-id="+card.id+"] ");
        var div2Created = $(" div[data-card-id="+card.id+"] > div ");

        var to_card = {
            x: x,
            y: -450
        };
    
        var to_trans = `perspective(1500px) rotate(0deg) rotateY(9deg) rotateX(30deg)`;
    
        animacaoMostrarCartasSelecionadas(div1Created, to_card, div2Created, to_trans, i);
        x = x + xDelta;
    }
    window.quiz_selected_answers = cardsChoosed;
    cartasConcluido();
    // fakeCartasConcluido();
}

function createDiv1(css, id) {
    return $( "<div />" ).css("transform", "translate3d(" + css.x + "px, " + css.y + "px, 0px)").attr("data-card-id", id);
}
function createDiv2(css) {
    return $( "<div />" ).css({
        "transform": css.transform,
        "background-image": "url(" + css.background_image + ")"
    }).on("click", function() {
        if ( $( this ).hasClass("cardontable") ) {
            selecionarCarta(this);
        }
    });
}
function createSpan(text) {
    return $( "<span />" ).text(text.toUpperCase());
}

function criarDeck() {
    for ( var i = 0; i < window.quiz_answers.length; i++ ) {
        if ( cardDeck.length == 20 ) {
            break;
        }
        var answer = window.quiz_answers[i];
        var card = {
            text: answer.description,
            id: answer.id
        };
        if ( answer.category.name == "Toque Físico" ) {
            card.category = 1;
            card.category_alias = "toque_fisico";
            card.image = "../images/card-01.png";
        }
        else if ( answer.category.name == "Tempo de Qualidade" ) {
            card.category = 2;
            card.category_alias = "tempo_qualidade";
            card.image = "../images/card-02.png";
        }
        else if ( answer.category.name == "Atos de Serviço" ) {
            card.category = 3;
            card.category_alias = "atos_servico";
            card.image = "../images/card-03.png";
        }
        else if ( answer.category.name == "Presentes" ) {
            card.category = 4;
            card.category_alias = "presentes";
            card.image = "../images/card-04.png";
        }
        else if ( answer.category.name == "Palavras de Afirmação" ) {
            card.category = 5;
            card.category_alias = "palavras_afirmacao";
            card.image = "../images/card-05.png";
        }
        window.quiz_answers.splice(i, 1);
        cardDeck.push(card);
    }
}

var x = 0;
function montarBaralho() {
    // const cards = shuffleArray(cardDeck);
    const cards = cardDeck;
    let screen_height = $( ".bg-board" ).height();
    var margin_left = $( ".bg-board" ).offset().left;
    var top = 0;
    if ( window.isMobile.any() ) {
        top = screen_height / 2 + 40;
    }
    else {
        top = screen_height - $( ".bg-board" ).offset().top + 80;
    }

    var novo_x = $( ".custom-numero-destino-nome" ).offset().left;

    $( ".custom-numero-destino-nome" ).fadeOut(400);
    $( ".custom-numero-destino-nascimento" ).fadeOut(400);

    $( ".lifepath-calculation-container" ).css({display: "block"});

    setTimeout(function() {
        x = margin_left + 10;

        // if ( window.isMobile.any() ) {
        //     x = 0;
        // }

        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            var from_card = from(i);
            if ( window.isMobile.any() ) {
                from_card.x = x;
            }
    
            var to_card = to(i+20);
            if ( window.isMobile.any() ) {
                to_card.x = x;
            }
            var from_trans = trans(from_card.rot, from_card.scale);
            var to_trans = trans(to_card.rot, to_card.scale);
            
            var div1Created = createDiv1({
                x: from_card.x,
                y: from_card.y
            }, card.id).css({top: top, left: x}).addClass("cardonbaralho");
            var div2Created = createDiv2({
                transform: from_trans,
                background_image: card.image
            });
            var spanCreated = createSpan(card.text);
            div1Created.html(div2Created.html(spanCreated)).appendTo( $(" .quiz-container" ) );
            animacaoMontarBaralho(div1Created, to_card, div2Created, to_trans, i);
        }
    }, 1000);
}

function ajustarBaralho() {
    var to = {
        x: 0,
        y: -300
    };
    if ( window.isMobile.any() ) {
        to.y = -150;
    }
    $( ".cardonbaralho" ).each(function() {
        var elem2 = $( this ).children().eq(0);
        animacaoAjustarBaralho($( this ), elem2, to);
    });
}

function distribuirCartas() {
    const cards = shuffleArray(cardDeck);

    var xDelta = 180;
    var yHigh = -380;
    if ( window.isMobile.any() ) {
        var yDown = -480;
    }
    else {
        var yDown = -360;
    }
    
    var rotate = -10;
    var x = -298;
    var y = yDown;
    for (var i = 0; i < 4; i++) {
        var card = cards[i];
        var cardsRemoved = cards.splice(getArrayIndexForKey(cards, "id", card.id), 1);
        cardsTable.push(cardsRemoved[0]);

        var div1Created = $(" div[data-card-id="+card.id+"] ").addClass("cardontable");
        var div2Created = $(" div[data-card-id="+card.id+"] > div ").addClass("cardontable").attr("data-card-x", x);
        var spanCreated = $(" div[data-card-id="+card.id+"] > div > span ").addClass("cardontable");

        var to_card = {
            x: x,
            y: y
        };

        var to_trans = `perspective(1500px) rotate(${rotate}deg) rotateY(3deg) rotateX(30deg)`;
        animacaoDistribuirCartas(div1Created, to_card, div2Created, to_trans, i, "18vh", "33vh", spanCreated,  "14px");

        rotate = rotate + 7;
        x = x + xDelta;
        if ( i == 0 || i == 1 ) {
            y = yHigh;
        }
        else {
            y = yDown;
        }
    }
}

function mostrarCarta(alias, custom_class) {
    $( ".cartas-aniversario-container" ).hide();
    $( ".carta-destino-container" ).hide();

    const cards = cardDeck;
    let screen_width = $( ".bg-board" ).width();
    var margin_left = $( ".bg-board" ).offset().left;
    
    $( ".cardontable" ).fadeOut(500);

    if ( window.isMobile.any() ) {
        var x = screen_width / 12 * 4;
        var y = -145;
    }
    else {
        var x = screen_width / 12 * 5;
        var y = -336;
    }
    
    var foundCard = false;
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if ( card.alias == alias && !foundCard && !card.is_enabled ) {
            foundCard = true;
            card.is_enabled = true;

            var div1Created = $(" div[data-card-id="+card.id+"] ").addClass("cardontable");
            if ( custom_class ) {
                div1Created.addClass(custom_class);
            }
            var div2Created = $(" div[data-card-id="+card.id+"] > div ").addClass("cardontable").addClass("carta-pulsar");

            var to_card = {
                x: x,
                y: y
            };

            var to_trans = `perspective(1500px) rotate(0deg) rotateY(0deg) rotateX(0deg)`;
            animacaoMostrarCarta(div1Created, to_card, div2Created, to_trans);
        }
    }
}

function iniciarCartasNascimento() {
    $( ".row-ppt-cartas" ).attr('style', 'margin-top: 0 !important');

    $( ".personalidade-container" ).hide();
    $( ".cardontable" ).fadeOut(500);
    $( ".initial-carousel-container .signs-carousel .sign-personality-container .sign-title" ).fadeOut(500, function() {
        $( ".initial-carousel-container .signs-carousel .sign-personality-container .sign-title" ).text("Calculando seu Número de Destino...");
        $( ".initial-carousel-container .signs-carousel .sign-personality-container .sign-title" ).fadeIn(500);
    });

    var nascimentoArr = window.cards_nascimento.split("-");
    var ano = nascimentoArr[0];
    var anoArr = ano.split("");
    var mes = nascimentoArr[1];
    var mesArr = mes.split("");
    var dia = nascimentoArr[2];
    var diaArr = dia.split("");

    $( ".cartas-aniversario-container" ).show();
    $( ".carta-aniversario-dia-0" ).css("opacity", 0);
    $( ".carta-aniversario-dia-0" ).show();
    // $( ".carta-aniversario-dia-1" ).css("opacity", 0);
    // $( ".carta-aniversario-dia-1" ).show();
    $( ".carta-aniversario-mes-0" ).css("opacity", 0);
    $( ".carta-aniversario-mes-0" ).show();
    // $( ".carta-aniversario-mes-1" ).css("opacity", 0);
    // $( ".carta-aniversario-mes-1" ).show();
    // $( ".carta-aniversario-ano-0" ).css("opacity", 0);
    // $( ".carta-aniversario-ano-0" ).show();
    $( ".carta-aniversario-ano-1" ).css("opacity", 0);
    $( ".carta-aniversario-ano-1" ).show();
    $( ".carta-aniversario-ano-2" ).css("opacity", 0);
    $( ".carta-aniversario-ano-2" ).show();
    // $( ".carta-aniversario-ano-3" ).css("opacity", 0);
    // $( ".carta-aniversario-ano-3" ).show();

    $( ".carta-aniversario-dia-0 > div > span" ).text(diaArr[0] + diaArr[1]);
    // $( ".carta-aniversario-dia-1 > div > span" ).text(diaArr[1]);
    $( ".carta-aniversario-mes-0 > div > span" ).text(mesArr[0] + mesArr[1]);
    // $( ".carta-aniversario-mes-1 > div > span" ).text(mesArr[1]);
    // $( ".carta-aniversario-ano-0 > div > span" ).text(anoArr[0] + anoArr[1]);
    $( ".carta-aniversario-ano-1 > div > span" ).text(anoArr[0] + anoArr[1]);
    $( ".carta-aniversario-ano-2 > div > span" ).text(anoArr[2] + anoArr[3]);
    // $( ".carta-aniversario-ano-2 > div > span" ).text(anoArr[2]);
    // $( ".carta-aniversario-ano-3 > div > span" ).text(anoArr[3]);

    $( ".carta-aniversario-dia-0" ).fadeTo(1000, 1, function() {
        // $( ".carta-aniversario-dia-1" ).fadeTo(1000, 1, function() {
            $( ".carta-aniversario-mes-0" ).fadeTo(1000, 1, function() {
                // $( ".carta-aniversario-mes-1" ).fadeTo(1000, 1, function() {
                    // $( ".carta-aniversario-ano-0" ).fadeTo(1000, 1, function() {
                        $( ".carta-aniversario-ano-1" ).fadeTo(1000, 1, function() {
                            $( ".carta-aniversario-ano-2" ).fadeTo(1000, 1, function() {
                            //     $( ".carta-aniversario-ano-3" ).fadeTo(1000, 1, function() {
                            //         // yeaaahhh
                            //     });
                            });
                        });
                    // });
                // });
            });
        // });
    });




    return;
    
    

    let screen_width = $( ".bg-board" ).width();

    // DIA
    var x = 0;
    var y = 0;
    if ( window.isMobile.any() ) {
        x = ( screen_width / 12 ) * 2.5;
        y = -180;
    }
    else {
        x = ( screen_width / 12 ) * 4.5;
        y = -380;
    }
    mostrarCartaNascimento(diaArr[0], x, y, 0, "dia-0");
    if ( window.isMobile.any() ) {
        x = ( screen_width / 12 ) * 5.5;
    }
    else {
        x = ( screen_width / 12 ) * 6.5;
    }
    mostrarCartaNascimento(diaArr[1], x, y, 1, "dia-1");

    // MES
    if ( window.isMobile.any() ) {
        x = ( screen_width / 12 ) * 2.5;
    }
    else {
        x = ( screen_width / 12 ) * 4.5;
    }
    y = y + 125;
    mostrarCartaNascimento(mesArr[0], x, y, 2, "mes-0");
    if ( window.isMobile.any() ) {
        x = ( screen_width / 12 ) * 5.5;
    }
    else {
        x = ( screen_width / 12 ) * 6.5;
    }
    mostrarCartaNascimento(mesArr[1], x, y, 3, "mes-1");

    // ANO
    if ( window.isMobile.any() ) {
        x = -10;
    }
    else {
        x = ( screen_width / 12 ) * 2.5;
    }
    y = y + 125;
    mostrarCartaNascimento(anoArr[0], x, y, 4, "ano-0");
    if ( window.isMobile.any() ) {
        x = ( screen_width / 12 ) * 2.5;
    }
    else {
        x = ( screen_width / 12 ) * 4.5;
    }
    mostrarCartaNascimento(anoArr[1], x, y, 5, "ano-1");
    if ( window.isMobile.any() ) {
        x = ( screen_width / 12 ) * 5.5;
    }
    else {
        x = ( screen_width / 12 ) * 6.5;
    }
    mostrarCartaNascimento(anoArr[2], x, y, 6, "ano-2");
    if ( window.isMobile.any() ) {
        x = ( screen_width / 12 ) * 8.5;
    }
    else {
        x = ( screen_width / 12 ) * 8.5;
    }
    mostrarCartaNascimento(anoArr[3], x, y, 7, "ano-3");

    $( ".lds-facebook-container" ).fadeIn(100);
}

function embaralharCartasNascimento(yParam = null) {
    let screen_width = $( ".bg-board" ).width();

    var y = 0;
    if ( window.isMobile.any() ) {
        y = yParam != null ? yParam : 100;
    }
    else {
        y = yParam != null ? yParam : -80;
    }
    
    var y_delta = -2;

    var div1Created = $( ".dia-0" );
    var div2Created = $( ".dia-0 > div" );
    var to_card = to(20);
    to_card.x = ( screen_width / 12 ) * 5.5;
    to_card.y = y;
    var to_trans = trans(to_card.rot, to_card.scale);
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 0);

    y = y + y_delta;

    var div1Created = $( ".dia-1" );
    var div2Created = $( ".dia-1 > div" );
    var to_card = to(21);
    to_card.x = ( screen_width / 12 ) * 5.5;
    to_card.y = y;
    var to_trans = trans(to_card.rot, to_card.scale);
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 0);

    y = y + y_delta;

    var div1Created = $( ".mes-0" );
    var div2Created = $( ".mes-0 > div" );
    var to_card = to(22);
    to_card.x = ( screen_width / 12 ) * 5.5;
    to_card.y = y;
    var to_trans = trans(to_card.rot, to_card.scale);
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 0);

    y = y + y_delta;

    var div1Created = $( ".mes-1" );
    var div2Created = $( ".mes-1 > div" );
    var to_card = to(23);
    to_card.x = ( screen_width / 12 ) * 5.5;
    to_card.y = y;
    var to_trans = trans(to_card.rot, to_card.scale);
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 0);

    y = y + y_delta;

    var div1Created = $( ".ano-0" );
    var div2Created = $( ".ano-0 > div" );
    var to_card = to(24);
    to_card.x = ( screen_width / 12 ) * 5.5;
    to_card.y = y;
    var to_trans = trans(to_card.rot, to_card.scale);
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 0);

    y = y + y_delta;

    var div1Created = $( ".ano-1" );
    var div2Created = $( ".ano-1 > div" );
    var to_card = to(25);
    to_card.x = ( screen_width / 12 ) * 5.5;
    to_card.y = y;
    var to_trans = trans(to_card.rot, to_card.scale);
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 0);

    y = y + y_delta;

    var div1Created = $( ".ano-2" );
    var div2Created = $( ".ano-2 > div" );
    var to_card = to(26);
    to_card.x = ( screen_width / 12 ) * 5.5;
    to_card.y = y;
    var to_trans = trans(to_card.rot, to_card.scale);
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 0);

    y = y + y_delta;

    var div1Created = $( ".ano-3" );
    var div2Created = $( ".ano-3 > div" );
    var to_card = to(27);
    to_card.x = ( screen_width / 12 ) * 5.5;
    to_card.y = y;
    var to_trans = trans(to_card.rot, to_card.scale);
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 0);

    if ( yParam == null ) {
        setTimeout(function() {
            mostrarCartasNascimentoNovamente();
        }, 500);
    }
    else {
        setTimeout(function() {
            mostrarCartasDestino();
        }, 500);
    }
}

function mostrarCartaMotivacao() {
    $( ".lifepath-sign-container" ).hide();
    $( ".carta-expressao-container" ).hide();
    $( ".expression-sign-container" ).hide();
    $( ".cardontable" ).hide();

    $( ".soulurge-sign-container" ).css({ "display": "block", "animation-play-state": "running" });

    $( ".row-ppt-cartas" ).fadeIn(400);
    $( ".quiz-container" ).fadeIn(400);
    $( ".cardonbaralho" ).fadeIn(400);

    mostrarCarta("soulurge");
}

function mostrarCartaMotivacaoComNumero() {
    $( ".carta-motivacao-container" ).css("opacity", 0);
    $( ".carta-motivacao-container" ).show();

    $( ".carta-motivacao-content > div > span" ).text(window.cards_motivacao);

    $( ".carta-motivacao-container" ).fadeTo(1000, 1);

    return;
    $( ".cartas-aniversario-container" ).hide();
    
    $( ".motivacao-com-numero > div > span" ).text(window.cards_motivacao).css({ "font-size": "70px", "font-weight": 700 });
    $( ".cardontable" ).hide();
    $( ".cardonbaralho" ).hide();
    $( ".initial-carousel-container" ).css("display", "block");

    $( ".motivacao-com-numero > div ").addClass("carta-pulsar");
    $( ".motivacao-com-numero > div" ).show();
    $( ".motivacao-com-numero" ).fadeIn("500");
}

function exibirCartaMotivacaoAposFormulario() {
    $( ".cardontable" ).hide();
    $( ".initial-carousel-container" ).css("display", "block");
    
    mostrarCarta("soulurge_virado", "motivacao-com-numero");
}

function showCartasBaralho() {
    $( ".cardontable" ).hide();
    $( ".cardonbaralho" ).show();
    $( ".initial-carousel-container" ).css("display", "block");
    $( ".row-ppt-cartas" ).show();

    window.mostrar_cartas_baralho = true;
}

function mostrarCartaExpressao() {
    $( ".lifepath-sign-container" ).hide(100);
    $( ".expression-sign-container" ).fadeIn(500);
    mostrarCarta("expression");
}

function mostrarCartaExpressaoComNumero() {
    $( ".carta-expressao-container" ).css("opacity", 0);
    $( ".carta-expressao-container" ).show();

    $( ".carta-expressao-content > div > span" ).text(window.cards_expressao);

    $( ".carta-expressao-container" ).fadeTo(1000, 1);

    return;
    $( ".cartas-aniversario-container" ).hide();

    $( ".expressao-com-numero > div > span" ).text(window.cards_expressao).css({ "font-size": "70px", "font-weight": 700 });
    $( ".cardontable" ).hide();
    $( ".cardonbaralho" ).hide();
    $( ".initial-carousel-container" ).css("display", "block");

    $( ".expressao-com-numero > div ").addClass("carta-pulsar");
    $( ".expressao-com-numero > div" ).show();
    $( ".expressao-com-numero" ).fadeIn("500");
}

function exibirCartaExpressaoAposFormulario() {
    $( ".cardontable" ).hide();
    $( ".initial-carousel-container" ).css("display", "block");
    
    mostrarCarta("expression_virado", "expressao-com-numero");
}

function mostrarCartasDestino() {
    $( ".cartas-aniversario-container" ).hide();

    let screen_width = $( ".bg-board" ).width();
    
    $( ".cardontable" ).hide(100);
    $( ".sign-birthday-container" ).hide(100);

    $( ".lds-facebook-container" ).fadeOut(100);
    $( ".initial-carousel-container .signs-carousel" ).fadeOut(100);

    $( ".lifepath-sign-container" ).fadeIn(500);

    $( ".carta-destino-container" ).css("opacity", 0);
    $( ".carta-destino-container" ).show();

    $( ".carta-destino-content > div > span" ).text(window.cards_destino);

    $( ".carta-destino-container" ).fadeTo(1000, 1);

    // var x = ( screen_width / 2 ) - 80;
    // if ( window.isMobile.any() ) {
    //     var y = -100;
    // }
    // else {
    //     var y = -380;
    // }

    // mostrarCartaDestino(window.cards_destino, x, y);
}

function mostrarCartasNascimentoNovamente() {
    let screen_width = $( ".bg-board" ).width();
    var to_trans = `perspective(1500px) rotate(0deg) rotateY(0deg) rotateX(0deg)`;

    var div1Created = $( ".dia-0" );
    var div2Created = $( ".dia-0 > div" );
    if ( window.isMobile.any() ) {
        var to_card = {
            x: ( screen_width / 12 ) * 3,
            y: -170
        };
    }
    else {
        var to_card = {
            x: ( screen_width / 12 ) * 5,
            y: -400
        };
    }
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 0);

    var div1Created = $( ".dia-1" );
    var div2Created = $( ".dia-1 > div" );
    if ( window.isMobile.any() ) {
        var to_card = {
            x: ( screen_width / 12 ) * 6,
            y: -170
        };
    }
    else {
        var to_card = {
            x: ( screen_width / 12 ) * 6,
            y: -400
        };
    }
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 1);

    var div1Created = $( ".mes-0" );
    var div2Created = $( ".mes-0 > div" );
    if ( window.isMobile.any() ) {
        var to_card = {
            x: ( screen_width / 12 ) * 3,
            y: -170 + 140
        };
    }
    else {
        var to_card = {
            x: ( screen_width / 12 ) * 5,
            y: -400 + 140
        };
    }
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 2);

    var div1Created = $( ".mes-1" );
    var div2Created = $( ".mes-1 > div" );
    if ( window.isMobile.any() ) {
        var to_card = {
            x: ( screen_width / 12 ) * 6,
            y: -170 + 140
        };
    }
    else {
        var to_card = {
            x: ( screen_width / 12 ) * 6,
            y: -400 + 140
        };
    }
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 3);

    var div1Created = $( ".ano-0" );
    var div2Created = $( ".ano-0 > div" );
    if ( window.isMobile.any() ) {
        var to_card = {
            x: ( screen_width / 12 ) * 0.5,
            y: -170 + 140 + 140
        };
    }
    else {
        var to_card = {
            x: ( screen_width / 12 ) * 4,
            y: -400 + 140 + 140
        };
    }
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 4);

    var div1Created = $( ".ano-1" );
    var div2Created = $( ".ano-1 > div" );
    if ( window.isMobile.any() ) {
        var to_card = {
            x: ( screen_width / 12 ) * 3.5,
            y: -170 + 140 + 140
        };
    }
    else {
        var to_card = {
            x: ( screen_width / 12 ) * 5,
            y: -400 + 140 + 140
        };
    }
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 5);

    var div1Created = $( ".ano-2" );
    var div2Created = $( ".ano-2 > div" );
    if ( window.isMobile.any() ) {
        var to_card = {
            x: ( screen_width / 12 ) * 6.5,
            y: -170 + 140 + 140
        };
    }
    else {
        var to_card = {
            x: ( screen_width / 12 ) * 6,
            y: -400 + 140 + 140
        };
    }
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 6);

    var div1Created = $( ".ano-3" );
    var div2Created = $( ".ano-3 > div" );
    if ( window.isMobile.any() ) {
        var to_card = {
            x: ( screen_width / 12 ) * 9.5,
            y: -170 + 140 + 140
        };
    }
    else {
        var to_card = {
            x: ( screen_width / 12 ) * 7,
            y: -400 + 140 + 140
        };
    }
    animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, 7);

    setTimeout(function() {
        if ( window.iniciar_carta_destino ) {
            var y = 0;
            if ( window.isMobile.any() ) {
                y = -100;
            }
            else {
                y = -260;
            }
            embaralharCartasNascimento(y);
        }
        else {
            embaralharCartasNascimento();
        }
    }, 5000);
}

function mostrarCartaDestino(number, x, y) {
    $( ".cartas-aniversario-container" ).hide();

    const cards = cardDeck;
    
    var cardFound = false;
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if ( card.alias == "lifepath_black" && !card.is_enabled && !cardFound ) {
            card.is_enabled = true;
            cardFound = true;

            var div1Created = $(" div[data-card-id="+card.id+"] ").addClass('carta-destino').addClass("cardontable");
            var div2Created = $(" div[data-card-id="+card.id+"] > div ");
            var span = $(" div[data-card-id="+card.id+"] > div > span").text(number).css({ "color": "#c3ff76", "font-weight": 900 });

            var to_card = {
                x: x,
                y: y
            };

            var to_trans = `perspective(1500px) rotate(0deg) rotateY(0deg) rotateX(0deg)`;
            animacaoMostrarCartaDestino(div1Created, to_card, div2Created, to_trans, span);

            setTimeout(function() {
                window.iniciar_carta_destino = false;
            }, 4000);
        }
    }
}

function mostrarCartaNascimento(number, x, y, delay, identify) {
    const cards = cardDeck;
    
    var cardFound = false;
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if ( card.alias == "birthday_black" && !card.is_enabled && !cardFound ) {
            card.is_enabled = true;
            cardFound = true;

            var div1Created = $(" div[data-card-id="+card.id+"] ").addClass(identify).addClass("cardontable");
            var div2Created = $(" div[data-card-id="+card.id+"] > div ");
            $(" div[data-card-id="+card.id+"] > div > span").text(number).css({ "color": "#c3ff76", "font-weight": 900, "font-size": "45px" });

            var to_card = {
                x: x,
                y: y
            };

            var to_trans = `perspective(1500px) rotate(0deg) rotateY(0deg) rotateX(0deg)`;
            animacaoMostrarCartaNascimento(div1Created, to_card, div2Created, to_trans, delay);
        }
    }
}

function montarPilhaSelecionada() {
    for (var i = 0; i < cardsChoosed.length; i++) {
        var card = cardsChoosed[i];
        var to_card = to(i+20);
        to_card.x = 400;
        var to_trans = trans(to_card.rot, to_card.scale);
        
        var div1Created = $(" div[data-card-id="+card.id+"] ").removeClass("cardonhand").addClass("cardselected");
        var div2Created = $(" div[data-card-id="+card.id+"] > div ").removeClass("cardonhand").addClass("cardselected");
        var span = $( div2Created ).children().eq(0);
        animacaoPilhaSelecionada(div1Created, to_card, div2Created, to_trans, span);
    }
}

function selecionarCarta(el) {
    var div1Created = $( el ).parent().removeClass("cardontable").addClass("cardonhand");
    var div2Created = $( el ).removeClass("cardontable").addClass("cardonhand");

    var to_card = {
        x: div2Created.attr("data-card-x"),
        y: -450
    };

    var to_trans = `perspective(1500px) rotate(0deg) rotateY(0deg) rotateX(0deg)`;

    animacaoSelecionarCarta(div1Created, to_card, div2Created, to_trans);
    cartasSelecionadas++;

    var idCard = $( div1Created ).attr("data-card-id");
    var cardsSelected = cardsTable.splice(getArrayIndexForKey(cardsTable, "id", idCard), 1);
    cardsChoosed.push(cardsSelected[0]);

    if ( cartasSelecionadas >= 2 ) {
        var cardsTableLength = cardsTable.length;
        for ( var i = 0; i < cardsTableLength; i++ ) {
            var cardsRemoved = cardsTable.splice(0, 1);
            cardDeck.push(cardsRemoved[0]);
        }
        for ( var i = 0; i < cardDeck.length; i++ ) {
            var card = cardDeck[i];
            var div1Created = $(" div[data-card-id="+card.id+"] ").removeClass("cardontable");
            $( div1Created ).fadeOut( "slow", function() {
                $( this ).remove();
            });
        }
        cartasSelecionadas = 0;
        montarPilhaSelecionada();
        if ( cardsChoosed.length <= 8 ) {
            montarBaralho();
            setTimeout(function() {
                distribuirCartas();
            }, 5000);
        }
        else {
            mostrarCartasSelecionadas();
        }
        return;
    }
}

function getArrayIndexForKey(arr, key, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i][key] == val)
            return i;
    }
    return -1;
}
