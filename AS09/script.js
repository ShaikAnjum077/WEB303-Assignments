$(document).ready(function () {
  const $table = $("table tbody");
  const data = [];
  const order = {
    id: 0,
    name: 0,
    type: 0,
    dob: 0,
    points: 0,
  };

  function updateOrder(column) {
    if (order[column] == 0) return (order[column] = 1);
    if (order[column] == 1) return (order[column] = -1);
    if (order[column] == -1) return (order[column] = 0);
  }

  function sortData(column) {
    const sortType = updateOrder(column);
    let sortedData = [...data];

    // ascending order
    if (sortType == 1) {
      if (column == "name" || column == "type") {
        sortedData.sort((a, b) => {
          let x = a[column].toLowerCase();
          let y = b[column].toLowerCase();
          return x == y ? 0 : x > y ? 1 : -1;
        });
      } else if (column == "id" || column == "points") {
        sortedData.sort((a, b) => {
          let x = a[column];
          let y = b[column];
          return x == y ? 0 : x > y ? 1 : -1;
        });
      } else if (column == "dob") {
        sortedData.sort(function (a, b) {
          let x = new Date(a.dob);
          let y = new Date(b.dob);
          return x == y ? 0 : x > y ? 1 : -1;
        });
      }
    }
    // descending order
    else if (sortType == -1) {
      $(`a.a-${column}`).html(`${column} &#x25BC;`);
      if (column == "name" || column == "type") {
        sortedData.sort((a, b) => {
          let x = a[column].toLowerCase();
          let y = b[column].toLowerCase();
          return x == y ? 0 : x > y ? -1 : 1;
        });
      } else if (column == "id" || column == "points") {
        sortedData.sort((a, b) => {
          let x = a[column];
          let y = b[column];
          return x == y ? 0 : x > y ? -1 : 1;
        });
      } else if (column == "dob") {
        sortedData.sort(function (a, b) {
          let x = new Date(a.dob);
          let y = new Date(b.dob);
          return x == y ? 0 : x > y ? -1 : 1;
        });
      }
    }
    return sortedData;
  }

  $("th a").click(function (e) {
    e.preventDefault();
    const column = e.target.id.split("-")[1];
    const sortedDataList = sortData(column);
    $(`#link-${column}`).html(column);

    if (order[column] == 1) {
      $(`#link-${column}`).append(` &#x25B2;`);
    } else if (order[column] == -1) {
      $(`#link-${column}`).append(` &#x25BC;`);
    }

    $("tbody").html("");
    $.each(sortedDataList, function (i, obj) {
      $table.append(`
        <tr>
          <td>${obj.id} </td>
          <td>${obj.name} </td>
          <td>${obj.type} </td>
          <td>${obj.dob} </td>
          <td>${obj.points} </td>
        </tr>
      `);
    });
  });

  $.getJSON("data.json", function (result) {
    result.forEach((obj) => data.push(obj));

    $.each(result, function (i, obj) {
      $table.append(`
        <tr>
          <td>${obj.id} </td>
          <td>${obj.name} </td>
          <td>${obj.type} </td>
          <td>${obj.dob} </td>
          <td>${obj.points} </td>
        </tr>
      `);
    });
  });
});
