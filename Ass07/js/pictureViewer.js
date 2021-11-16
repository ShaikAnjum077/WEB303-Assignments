$(function () {
  $(".thumb").click(function (e) {
    e.preventDefault();
    const href = e.target.parentNode.href;
    const hrefValue = href.split("/");
    const photoName = hrefValue[hrefValue.length - 1];
    $("#imageViewer").attr("src", `img/${photoName}`);
    $(".photo-frame").attr("src", `img/${photoName}`);
    $(".photo-frame").attr("href", `img/${photoName}`);
  });

  $(".photo-frame").click(function (e) {
    e.preventDefault();
    const href = e.target.src;
    const hrefValues = href.split("/");
    const photoName = hrefValues[hrefValues.length - 1];

    $("body").append(`<div class="modal-overlay"> 
      <div class="modal">
        <div class="modal-header">
           <button class="modal-close-btn"> &times; </button>
         </div> 
        <div class="modal-body">
          <center><img src="img/load.gif"> </center>
        </div>
      </div>
    `);

    setTimeout(() => {
      $(".modal-body").html(`<img src="img/${photoName}" alt="something" />`);
    }, 1000);

    $(".modal-close-btn").click(function (e) {
      $(".modal-overlay").remove();
    });
  });
});
