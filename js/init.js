$( document ).ready(function() {
    $('.modal').modal();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $("#publicationsLink").click(function() {
        $("#publicationsTab").trigger("click");
    });
    $("#aboutMeTab").click(function() {
        moveFromTop("#aboutMeCard");
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#about';
    });
    $("#educationTab").click(function() {
        moveFromTop("#educationCard");
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#education';
    });
    $("#skillsTab").click(function() {
        moveFromTop("#skillsCard");
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#skills';
    });
    $("#projectsTab").click(function() {
        moveFromTop("#projectsCard");
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#projects';
    });
    $("#awardsTab").click(function() {
        moveFromTop("#awardsCard");
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#awards';
    });
    $("#publicationsTab").click(function() {
        $("#publicationsList").load("publications.html");
        moveFromTop("#publicationsCard");
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#publications';
    });
});

moveFromTop = function(selector) {
    M.anime({
        targets: selector,
        translateY: -200,
        duration: 0   
    });
    M.anime({
        targets: selector,
        opacity: 1,
        translateY: 0,
        duration: 900,
        easing: 'easeOutExpo'
    });
};
