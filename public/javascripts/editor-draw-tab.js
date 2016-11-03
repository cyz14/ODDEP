$(function() {
    $('body').css('min-height', '0px');
    $('#jumpToVHDL').click(function() {
        var code = toVHDL();
        console.log(code);
        $('#vhdlPreview').text(code);
        $('#modalVHDL').modal({
            keyboard: true
        })
    });
});