$('input').change(function() {
    if( $(this).val() != "" )
        window.onbeforeunload = "Are you sure you want to leave?";
});
