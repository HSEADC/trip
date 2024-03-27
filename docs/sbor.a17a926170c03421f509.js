/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
$(document).ready(function () {
  $(".draggable").draggable({
    revert: "invalid",
    start: function start(event, ui) {
      $(this).show();
    }
  });
  $(".droppable").droppable({
    drop: function drop(event, ui) {
      ui.draggable.hide();

      if ($(".draggable:visible").length === 0) {
        $(".show-popup").show();
        $(".blur").show();
      }
    }
  });
  $(".Q_Icons-Cross").click(function () {
    $(".show-popup").hide(), $(".blur").hide();
  });
});
/******/ })()
;