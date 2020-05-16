window.onload = function () {

	var images = [
	"img/IMG_2867.jpeg",
	"img/IMG_2920.jpeg",
	"img/IMG_2869.jpeg",
	"img/IMG_9982.jpeg",
	"img/IMG_2933.jpeg",
	"img/IMG_5692.jpeg",
	"img/IMG_2924.jpeg",
	"img/IMG_5924.jpeg",
	"img/IMG_6317.jpeg",
	"img/IMG_2495.jpeg",
	"img/IMG_1803.jpeg",
	"img/IMG_1800.jpeg"
	];

var image = $('.grid-item');

function select_random(x){
	y=x[Math.Floor(Math.random()*x.length)];
	return y;
};

      function display_image() {
       var selected_image = select_random(images);
        $('.grid-item').attr("src", selected_image);
      };
      $(document).ready(function(){
        display_image();
        $('button').click(function(){
          display_image();
        });
    });

}