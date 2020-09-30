$(document).ready(function () {
    $(".edit").click(function () {
        $("ul").slideToggle(100);
    });
});

$(document).ready(function () {
    var heights = $(".card").map(function () {
        return $(this).height();
    }).get(),

        maxHeight = Math.max.apply(null, heights);

    $(".card").height(maxHeight);
});