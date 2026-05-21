// console.log($);

// console.log($('h1').text("hiiiii"));
// $('h1').css('color', 'red')

$("#fadeIn").click(() => {
    console.log("hello");
    
    $("#container").fadeIn()
})

$('#fadeOut').click(() => {
    $('#container').fadeOut()
})
$('#fadeToggle').click(() => {
    $('#container').fadeToggle()
})