// WEB303 Assignment 2
// Your Name Here

$(document).ready(function () {
  $("#content a").click(function () {
    // `this` represents the <a> tag which is clicked
    // getting the filename from  the id of the <a>
    // slice(1) removes the first character and returns the rest of the name
    const filename = this.id.slice(1) + ".html";

    $.ajax({
      url: filename,
      success: function (result) {
        $("#solution")
          .css({ opacity: 0, marginTop: "+=40px" })
          .html(result)
          .animate({ opacity: 1, marginTop: "-=40px" }, "slow");
      },
    });
  });
});
