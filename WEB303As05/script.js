/*
    Assignment 5
    {Your name here}
*/

$(document).ready(function () {
  class ContentCard {
    constructor(id, title, description, category) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
    }

    updateContent(updatedTitle, updatedDescription, updatedCategory) {
      if (updatedTitle) {
        this.title = updatedTitle;
      }
      if (updatedDescription) {
        this.description = updatedDescription;
      }
      if (updatedCategory) {
        this.category = updatedCategory;
      }
    }

    toString() {
      const contentCardHtml = `
        <div id="content-${this.id}" style="border: black 1px solid; padding:5px; margin-bottom:8px;">
            <h4>${this.title}</h4>
            <p>${this.description}</p>
            <div>${this.category}</div>
        </div>
      `;
      return contentCardHtml;
    }
  }

  const cardsArray = [
    new ContentCard(
      1,
      "Robert Lewandowski",
      "Robert Lewandowski is a Polish footballer who plays as a striker for Bayern Munich and is the captain of the Poland national team",
      "Striker"
    ),
    new ContentCard(
      2,
      "Lionel Messi",
      "Lionel Andrés Messi also known as Leo Messi, is an Argentine professional footballer who plays as a for club Paris Saint-Germain",
      "Forward"
    ),
    new ContentCard(
      3,
      "Cristiano Ronaldo",
      "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team",
      "Forward"
    ),
    new ContentCard(
      4,
      "Andre Silva",
      "Andre Miguel Valente da Silva is a Portuguese professional footballer who plays as a striker for Bundesliga club RB Leipzig and the Portugal national team.",
      "Striker"
    ),
    new ContentCard(
      5,
      "Erling Braut Haaland",
      "Erling Braut Haaland is a Norwegian professional footballer who plays as a striker for German Bundesliga club Borussia Dortmund and the Norway national team.",
      "Striker"
    ),
  ];

  for (const card of cardsArray) {
    const html = card.toString();
    $("div#content-list").append(html);
  }
});

