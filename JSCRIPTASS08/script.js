$(document).ready(function () {
  const $table = $("table tbody");
  const aToM = [];
  const nToZ = [];

  for (let i = 97; i <= 109; ++i) {
    aToM.push(String.fromCharCode(i));
  }

  for (let i = 110; i <= 122; ++i) {
    nToZ.push(String.fromCharCode(i));
  }

  $.getJSON("data.json", function (result) {
    let aToMCount = 0;
    let nToZCount = 0;

    $.each(result, function (i, obj) {
      if (nToZ.includes(obj.name.toLowerCase()[0])) {
        nToZCount++;
      } else {
        aToMCount++;
      }

      $table.append(`
        <tr>
          <td>${obj.id} </td>
          <td>${obj.name} </td>
          <td>${obj.type} </td>
          <td>${obj.points} </td>
        </tr>
      `);
    });

    $(".btn-am").html(`A - M (${aToMCount})`);
    $(".btn-nz").html(`N - Z (${nToZCount})`);
  });

  $(".search-input").keyup(function (e) {
    const text = e.target.value.toLowerCase();

    $("tbody > tr").each(function () {
      $(this)
        .children("td")
        .eq(1)
        .each(function () {
          if (text && this.textContent.toLowerCase().indexOf(text) != -1) {
            $(this).parent().css({ backgroundColor: "yellow" });
          } else {
            $(this).parent().css({ backgroundColor: "transparent" });
          }
        });
      // $(this).children().filter();
      // $(this).toggle($(this).text().toLowerCase().indexOf(text) > -1);
    });
  });

  $(".btn-am").click(function () {
    $("tbody > tr").each(function () {
      $(this)
        .children("td")
        .eq(1)
        .each(function () {
          if (aToM.includes(this.textContent.toLowerCase()[0])) {
            $(this).parent().show();
          } else {
            $(this).parent().hide();
          }
        });
    });
  });

  $(".btn-nz").click(function () {
    $("tbody > tr").each(function () {
      $(this)
        .children("td")
        .eq(1)
        .each(function () {
          if (nToZ.includes(this.textContent.toLowerCase()[0])) {
            $(this).parent().show();
          } else {
            $(this).parent().hide();
          }
        });
    });
  });
});
