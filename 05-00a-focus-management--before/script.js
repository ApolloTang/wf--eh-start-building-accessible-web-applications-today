$(document).ready(function () {
  var list = $("ul"),
    listItems = list.find("li");

  $(".btn-delete").on("click", function () {
    $(this).parent().remove();
  });
});
