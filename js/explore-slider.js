$(function(){
    $("#Picture-explore__img").twentytwenty({
        default_offset_pct: 0.6, /* Какая часть изображения отображается при загрузке страницы*/
        orientation: 'horizontal', /* Ориентация фотографий('horizontal' or 'vertical')*/
        before_label: 'January 2017', /* Set a custom before label*/
        after_label: 'March 2017', /* Set a custom after label*/
        no_overlay: true, /*Не показывать наложение до и после*/
        move_slider_on_hover: false, /* Переместить ползунок при наведении мыши?*/
        move_with_handle_only: true, /* Позволяет пользователю проводить пальцем в любом месте изображения для управления движением ползунка.*/
        click_to_move: false /* Разрешить пользователю нажимать (или касаться) в любом месте изображения, чтобы переместить ползунок в это место.*/
    });
});