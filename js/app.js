$(document).ready(function() {
  $('footer').append('<p>Ayrton Marcazzo ' + Date() + '</p>');

  $.getJSON('https://api.github.com/users/amarcazzo/repos', function(json) {
      console.log(json)
      for (var x in json) {
        let repo = `
          <div class="col-sm-3">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title text-uppercase"><u>` + json[x].name + `</u></h4>
                <p class="card-text">` + json[x].description + `</p>
                <a href='` + json[x].html_url + `' target='_blank'>Go to repository!</a>
              </div>
            </div>
          </div>
        `;

        $('.portfolio > .row').append(repo);
      }
  });

  $('.scrollTo').on('click', function() {
			var page = $(this).attr('href');
			$('html, body').animate({scrollTop: $(page).offset().top }, 1000); // Go
			return false;
	});
  /* Check the location of each desired element */
  $('.hidden').each(function(i){
    $(this).animate({'opacity':'1'}, 1000);
  });
});
