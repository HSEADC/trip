$(document).ready(function() {
    $(".draggable").draggable({
        revert: "invalid", 
        start: function(event, ui) {
            $(this).show();
        }
    });

    $(".droppable").droppable({
        drop: function(event, ui) {
            ui.draggable.hide();

            if ($(".draggable:visible").length === 0) {
                $(".show-popup").show();
                $(".blur").show(); 
            }
        }
    });

    $(".Q_Icons-Cross").click(function(){
        $(".show-popup").hide(),
        $(".blur").hide();
    });

});