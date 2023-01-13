$(document).on("click", ".accordion-head", function() {
    $(this).parent().siblings().find("p").addClass("d-none");
    $(this).next().toggleClass("d-none");
});