$(document).ready(function() {
    $("#downloadLink").click(function() {
        if($("#DropdownMenu").hasClass("open")) {
            return false;
        }
        $("#showDropdownMenu").click();
        return false;
    });
});