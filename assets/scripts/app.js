$(document).ready(function() {

  $('.button-collapse').sideNav();
  $('.parallax').parallax();

  $('#menu').find('.card').on('click', function() {
    let price = $(this).find('.price').text()
    let title = $(this).find('.card-title').text()

    addToCart(price, title);
  });

  // find price & title
  var addToCart = function(price, title) {
    $('#cart').append(`<tr><td>${title}</td>
    <td>${price}</td></tr>`)
    console.log(`Price: ${price} Title:${title}`);
  }


});
