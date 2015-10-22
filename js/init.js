$( document ).ready(function() {
    moveFromTop("#aboutMeCard");
    $('.modal-trigger').leanModal();
    $("#publicationsLink").click(function() {
        $("#publicationsTab").trigger("click");
    });
    $("#aboutMeTab").click(function() {
        moveFromTop("#aboutMeCard");
    });
    $("#educationTab").click(function() {
        moveFromTop("#educationCard");
    });
    $("#skillsTab").click(function() {
        moveFromTop("#skillsCard");
    });
    $("#projectsTab").click(function() {
        moveFromTop("#projectsCard");
    });
    $("#awardsTab").click(function() {
        moveFromTop("#awardsCard");
    });
    $("#publicationsTab").click(function() {
        $("#publicationsList").load("publications.html");
        moveFromTop("#publicationsCard");
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
