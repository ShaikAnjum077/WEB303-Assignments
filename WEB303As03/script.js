$(document).ready(function () {
  function usingGetJSON() {
    $.getJSON("team.json", function (result) {
      const teammembers = result.teammembers;

      teammembers.forEach((tm) => {
        const tmHtml = `
          <h3>${tm.name}</h3>
          <h4>${tm.title}</h4>
          <p>${tm.bio}</p>
        `;
        $("div#team").append(tmHtml);
      });
    });
  }

  function usingAjax() {
    $.ajax({
      url: "team.json",
      type: "GET",
      timeout: 5000, // 5 seconds in milliseconds

      beforeSend: function () {
        $("div#team").html("Loading...");
      },

      error: function (xhr, status, error) {
        alert(error);
      },

      success: function (result) {
        $("div#team").html("");
        const teammembers = result.teammembers;

        teammembers.forEach((tm) => {
          const tmHtml = `
          <h3>${tm.name}</h3>
          <h4>${tm.title}</h4>
          <p>${tm.bio}</p>
        `;
          $("div#team").append(tmHtml);
        });
      },
    });
  }

  // usingGetJSON();
  usingAjax();
});
