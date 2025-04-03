$(document).ready(function () {
    $('form').submit(function() {
        event.preventDefault();
    
        let optionsDate = '';
        let optionsCode = '';
    
        $('form select:not(#locales), form input:not(#date)').each(function() {
            if( $(this).val() != '' )
                optionsDate += `"${$(this).attr('id')}": "${$(this).val()}",`;
        });
    
        if( optionsDate != '' ) {
            optionsDate = '{' + optionsDate.slice(0, -1) + '}';
    
            optionsCode = ', ' + optionsDate;
    
            optionsDate = JSON.parse(optionsDate);
        }
    
        let date = $('#date').val() == '' ? new Date() : new Date($('#date').val());
        date = date.toLocaleString($('#locales').val(), optionsDate);
    
        optionsCode = `new Date(${$('#date').val() == '' ? '' : '"' + $('#date').val() + '"' }).toLocaleString("${$('#locales').val()}"${optionsCode});`
    
        $('.js-output').html(date);
        $('.js-output-code').removeClass('d-none').html(optionsCode);
    });

    $(".js-gerar").click();
});
