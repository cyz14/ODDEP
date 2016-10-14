$(function() {
    console.log('loaded');
    window.onhashchange = function() {
        if (location.hash === '#err') {
            $('.alert-danger').show();
        } else {
            $('.alert-danger').hide();
        }
    };
    window.onhashchange();
});