$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
	});
});


let headermenu = document.getElementsByClassName("header__menu");
let welcomefield = document.getElementsByClassName("welcome__field");
let active = document.getElementsByClassName("active");
let headerburger = document.getElementsByClassName("header__burger");


if(headermenu == active) {
	welcomefield.style.opacity = '0';
}




$(document).on("click",".change-mtrx", function(){ if ($(this).hasClass('flipped')) { $('.matrix_a').appendTo('.matrix_a_cover'); $(".matrix_b").appendTo(".matrix_b_cover"); } else { $('.matrix_a').appendTo('.matrix_b_cover'); $(".matrix_b").appendTo(".matrix_a_cover"); } $(this).toggleClass('flipped'); });


// function myFunction(e) {
//             e.target.className = "active";
//         }