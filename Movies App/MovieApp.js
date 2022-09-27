const Header = {
    'position': 'relative',
    'text-align': 'center',
    'font-size': '80px',
    'color': '#caddee',
    'font-family': 'cursive'
};

const Top = {
    'padding': '18px',
    'background-color': '#026ac5',
    'color': 'white',
    'font-size': '20px',
    'font-family': 'cursive'
};

const Table = {
    'margin-left': 'auto',
  'margin-right': 'auto',
}


$("#header").css(Header);
$("th").css(Top);
$('table').css(Table);
$('#delete').css("width", "10%")
$('#name').css("width", "50%")
$('#rating').css("width", "20%")
$('body').css('background-color', "#71ace2").css('text-align', 'center')
$('form').css("margin-right", "550px")
$('button').css("margin-right", "220px").css("margin-bottom", "20px")

$('#submit').on('click', function (e) {
    let movieName = $('input').eq(0).val();
    let movieRating = $('input').eq(1).val();
    e.preventDefault();
    if (movieRating >= 0 && movieRating <= 10) {
        if (movieName.length >= 2) {
            
            $('table').append(`<tr><td><button class="remove">Remove Movie</button></td><td>${movieName}</td><td>${movieRating}</td></tr>`);
            $('.remove').css("text-align", "left");
            $('input').eq(0).val('');
            $('input').eq(1).val('');
        } else {
            window.alert('Movie Title Must be at Least Two Characters')
        }
    } else {
        window.alert('Moving Rating Must be Between 0 and 10')
    }
    
});

$('tbody').on('click', '.remove', function () {
    console.log("test");
    $(this).parent().parent().remove();
});
   
    // let movieName = $('input').eq(0).val();
    // let movieRating = $('input').eq(1).val();
    // $('table').append('<td><tr></tr></td>');

  
// $('form').on('click','button', function () {
//     $(this).val('BAMBOOZLED')