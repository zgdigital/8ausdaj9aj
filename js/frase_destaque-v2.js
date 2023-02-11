class FraseDestaque {
    
    constructor(frase, palavra, tempo, position, fontSize, delayP) {
        let font_size = fontSize ? fontSize : "2rem"
        let delay = delayP ? delayP : 0;
        this.createH1(position, font_size, frase, palavra).appendTo($( ".personalidade-frases-destaque" ));

        this.show(tempo, delay);
    }

    show(tempo, delay) {
        var delay = delay;
        $( this.h1 ).children().each(function () {
            $( this ).delay(delay).fadeIn(tempo);
            delay = delay + 300;
        });
    }

    destroy() {
        $( ".personalidade-frases-destaque .row" ).fadeOut("slow", function() {
            $( ".personalidade-frases-destaque .row" ).remove();
        });
    }

    createH1(position, fontSize, frase, palavra) {
        var h1 = null;
        var divCol = null;
        if ( position == 'left_top' || position == 'left_bottom' ) {
            h1 = $( "<h1 />" ).css({
                fontSize: fontSize
            });
            divCol = $( "<div />" ).addClass("col-6 offset-1 col-md-3 offset-md-2 col-lg-3 offset-lg-2");
        }
        else if ( position == 'right_top' || position == 'right_bottom' ) {
            h1 = $( "<h1 />" ).css({
                fontSize: fontSize
            });
            divCol = $( "<div />" ).addClass("col-6 offset-5 col-md-3 offset-md-7 col-lg-3 offset-lg-7");
        }

        const palavras = frase.split(palavra);
        this.createSpan(palavras[0]).appendTo(h1);
        if ( palavras.length == 2 ) {
            this.createSpan(palavra).css("color", "#f7d51a").appendTo(h1);
            this.createSpan(palavras[1]).appendTo(h1);
        }
        else if ( palavras.length == 1 && palavra != null ) {
            this.createSpan(palavra).css("color", "#f7d51a").appendTo(h1);
        }
        else if ( palavra != null ) {
            this.createSpan(palavra).css("color", "#f7d51a").appendTo(h1);
        }

        h1.appendTo(divCol);
        var divRow = $( "<div />" ).addClass("row");
        divCol.appendTo(divRow);
        this.h1 = h1;
        return divRow;
    }

    createSpan(text) {
        return $( "<span />" ).text(text).css("display", "none");
    }
}