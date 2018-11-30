// Skill Progress Bar
$('.skill-progress').circleProgress({
    size: 160,
    thickness: 13
}).on('circle-animation-progress', function(event, progress) {
    var PercentValue = $(this).find('span').attr('data-value');
    $(this).find('span').html(Math.round(PercentValue * progress) + '<i>%</i>');
});



// Activate Mixitup
var Mixitup = mixitup('.portfolio-items', {
    animation: {
        duration: 300
    }
});