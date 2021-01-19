$(document).ready(function() {
    (async function() {
        hideAll();
        await renderSifoni114();
        $('#sifoni114').show();
        await renderSifoni112();
        await renderDvoiniSifoni112();
        await renderPodoviSifoni();
        await renderGofriraniTrubi();
        await renderVentilaciq();
        await renderManshoni();
        await renderVikChasti();
        await renderKraka();
    })();

    function hideAll() {
        $('#sifoni114').hide();
        $('#sifoni112').hide();
        $('#dvoiniSifoni112').hide();
        $('#podoviSifoni').hide();
        $('#gofriraniTrubi').hide();
        $('#ventilaciq').hide();
        $('#manshoni').hide();
        $('#vikChasti').hide();
        $('#kraka').hide();
    }
    async function renderSifoni114() {
        let template = $('#sifoni114Scr').html();
        Mustache.parse(template);
        await $.get('product-template.mustache', function(partialTemplate) {
            let rendered = Mustache.render(template, sifoni114, {
                sifon114: partialTemplate
            });
            $('#sifoni114').html(rendered);
        }, 'text');
    }
    async function renderSifoni112() {
        let template = $('#sifoni112Scr').html();
        Mustache.parse(template);
        await $.get('product-template.mustache', function(partialTemplate) {
            let rendered = Mustache.render(template, sifoni112, {
                sifon112: partialTemplate
            });
            $('#sifoni112').html(rendered);
        }, 'text');
    }
    async function renderDvoiniSifoni112() {
        let template = $('#dvoiniSifoni112Scr').html();
        Mustache.parse(template);
        await $.get('product-template.mustache', function(partialTemplate) {
            let rendered = Mustache.render(template, dvoiniSifoni112, {
                dvoenSifon112: partialTemplate
            });
            $('#dvoiniSifoni112').html(rendered);
        }, 'text');
    }
    async function renderPodoviSifoni() {
        let template = $('#podoviSifoniScr').html();
        Mustache.parse(template);
        await $.get('product-template.mustache', function(partialTemplate) {
            let rendered = Mustache.render(template, podoviSifoni, {
                podovSifon: partialTemplate
            });
            $('#podoviSifoni').html(rendered);
        }, 'text');
    }
    async function renderGofriraniTrubi() {
        let template = $('#gofriraniTrubiScr').html();
        Mustache.parse(template);
        await $.get('product-template.mustache', function(partialTemplate) {
            let rendered = Mustache.render(template, gofriraniTrubi, {
                gofriranaTruba: partialTemplate
            });
            $('#gofriraniTrubi').html(rendered);
        }, 'text');
    }
    async function renderVentilaciq() {
        let template = $('#ventilaciqScr').html();
        Mustache.parse(template);
        await $.get('product-template.mustache', function(partialTemplate) {
            let rendered = Mustache.render(template, ventilaciq, {
                ventilator: partialTemplate
            });
            $('#ventilaciq').html(rendered);
        }, 'text');
    }
    async function renderManshoni() {
        let template = $('#manshoniScr').html();
        Mustache.parse(template);
        await $.get('product-template.mustache', function(partialTemplate) {
            let rendered = Mustache.render(template, manshoni, {
                manshon: partialTemplate
            });
            $('#manshoni').html(rendered);
        }, 'text');
    }
    async function renderVikChasti() {
        let template = $('#vikChastiScr').html();
        Mustache.parse(template);
        await $.get('product-template.mustache', function(partialTemplate) {
            let rendered = Mustache.render(template, vikChasti, {
                vikChast: partialTemplate
            });
            $('#vikChasti').html(rendered);
        }, 'text');
    }
    async function renderKraka() {
        let template = $('#krakaScr').html();
        Mustache.parse(template);
        await $.get('product-template.mustache', function(partialTemplate) {
            let rendered = Mustache.render(template, kraka, {
                krak: partialTemplate
            });
            $('#kraka').html(rendered);
        }, 'text');
    }

    $('#sifoni114Btn').click(function(e) {
        e.preventDefault();
        hideAll();
        $('#sifoni114').show();
    });
    $('#sifoni112Btn').click(function(e) {
        e.preventDefault();
        hideAll();
        $('#sifoni112').show();
    });
    $('#dvoiniSifoni112Btn').click(function(e) {
        e.preventDefault();
        hideAll();
        $('#dvoiniSifoni112').show();
    });
    $('#podoviSifoniBtn').click(function(e) {
        e.preventDefault();
        hideAll();
        $('#podoviSifoni').show();
    });
    $('#gofriraniTrubiBtn').click(function(e) {
        e.preventDefault();
        hideAll();
        $('#gofriraniTrubi').show();
    });
    $('#ventilaciqBtn').click(function(e) {
        e.preventDefault();
        hideAll();
        $('#ventilaciq').show();
    });
    $('#manshoniBtn').click(function(e) {
        e.preventDefault();
        hideAll();
        $('#manshoni').show();
    });
    $('#vikChastiBtn').click(function(e) {
        e.preventDefault();
        hideAll();
        $('#vikChasti').show();
    });
    $('#krakaBtn').click(function(e) {
        e.preventDefault();
        hideAll();
        $('#kraka').show();
    });
});