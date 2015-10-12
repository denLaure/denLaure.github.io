$( document ).ready(function() {
    moveFromTop("#aboutMeCard");
    $("#aboutMeTab").click(function() {
        moveFromTop("#aboutMeCard");
    });
});

moveFromTop = function(selector) {
    $(selector).velocity(
        { translateY: "-200px"},
        { duration: 0 });
    $(selector).velocity(
        { opacity: "1", translateY: "0"},
        { duration: 900, easing: [60, 10] });
};
