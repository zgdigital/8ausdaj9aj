function exibirPersonalidadeContainer() {
    $( ".personalidade-container" ).show();
    vaiParaConteudo();
}

function esconderPersonalidadeContainer() {
    $( ".personalidade-container" ).hide();
    vaiParaConteudo();
}

function exibirFrasesDestaqueContainer() {
    $( ".personalidade-frases-destaque" ).show();
}

function esconderFrasesDestaqueContainer() {
    $( ".personalidade-frases-destaque" ).hide();
}

var fraseDestaque = null;
function exibirFraseDestaque(frase, palavra, tempo, position, font_size, delay) {
    fraseDestaque = new FraseDestaque(frase, palavra, tempo, position, font_size, delay);
}

function esconderFrasesDestaque() {
    fraseDestaque.destroy();
}

function personalidadeExibirNomeNascimento() {
    exibirPersonalidadeContainer();
    newAnimacaoNomeDataNascimento();
}

function esconderImagemFundo() {
    $( ".image-personalidade-fundo" ).fadeOut(400);
}

function exibirCartaExpressao() {
    mostrarCartaExpressao();
}
// {
//     "type": "callback",
//     "fn": "ocultarImagemAnimacaoPreCheckout",
//     "arguments": []
// }
function exibirPergaminho() {
    $( ".lifepath-sign-container" ).hide(100);
    $( ".expression-sign-container" ).hide();
    $( ".quiz-container" ).hide();
    $( ".expression-example-container" ).fadeIn(500);
}

function exibirSegundoFormulario() {
    $( ".expression-example-container" ).hide(100);
    $( ".expression-form-container" ).fadeIn(500);
}

function exibirTerceiroFormulario() {
    $( ".soulurge-sign-container" ).hide(100);
    $( ".quiz-container" ).hide();
    $( ".cardontable" ).hide();
    $( ".soulurge-form-container" ).fadeIn(500);
}

function exibirImagemAnimacaoPreCheckout() {
    $( ".soulurge-sign-container" ).hide();
    $( ".carta-motivacao-container" ).hide();
    $( ".image-personalidade-fundo" ).fadeIn(500);
}

function ocultarImagemAnimacaoPreCheckout() {
    $( ".image-personalidade-fundo" ).hide();
}

// function exibirCoracaoEspera(tempo) {
//     window.Loader_Wait.start();
//     $( ".personalidade-coracao-espera" ).fadeIn(tempo);
// }

// function esconderCoracaoEspera(tempo) {
//     $( ".personalidade-coracao-espera" ).fadeOut(tempo);
// }

// function personalidadeEsconderCartaVisivel() {
//     removerCartaIndividualVisivel();
// }

// function personalidadeMostrarCarta(linguagem, tempo) {
//     mostrarCartaIndividual(linguagem, tempo);
// }

// function exibirSilhueta() {
//     $( ".personalidade-silhueta" ).fadeIn(800);
// }

// function esconderSilhueta() {
//     $( ".personalidade-silhueta" ).fadeOut(1);
// }

// function exibirFormularioEmail() {
//     esconderPersonalidadeContainer();
//     $( ".greeting-lifepath-container" ).hide();
//     ativaCt('soulurge-form-container', 600, 0, 'soulurge-form');
// }

// function esconderNomeDataNascimento() {
//     $( ".greeting-lifepath-container" ).hide();
// }