$(document).ready(function() {
    $("#showDropdownMenu").click(function() {
        $("#DropdownMenu").toggleClass("open");
    });
    $("#downloadLink").click(function() {
        var li = $("#DropdownMenu");
        if(!li.hasClass("open")) {
            $("#DropdownMenu").addClass("open");
        }
    });
});