window.onload = function () {

var background = document.getElementByClass ("Page")
var button = document.getElementByClass("button")

var Page = [

{
	title: 'midnight'
	imageFile: 'midnight.jpg'
},
{
	title: 'sunset'
	imageFile: 'sunset.jpg'
},
{
	title: 'mountain'
	imageFile: 'mountain.jpg'
},

];

function select_random(x){
	y=x [Math.Floor(Math.random()*x.Length)];
	return y;
}

function generate(){
	var background = selected_random(Page);

	background.innerHTML = selected_one;
}

document.getElementByClass('button').onclick = function(){
	console.log('click');
	generate();
};
generate();

}