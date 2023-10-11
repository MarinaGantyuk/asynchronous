let baseurl = "http://numbersapi.com/";
//task 1
fetch(baseurl + "7?json")
  .then((data) => data.json())
  .then((response) => console.log(response));

//task 2
fetch(baseurl + "7,8?json")
  .then((data) => data.json())
  .then((response) => console.log(response));

//task 3
for (let i = 0; i < 4; i++) {
  fetch(baseurl + "7?json")
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
      //document.body.innerHTML += `<p> ${response.text}</p>`;
    });
}

//part 2 task 1
let newdeck = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deckid = null;
fetch(newdeck)
  .then((data) => data.json())
  .then((response) => {
    console.log(response);
    deckid = response.deck_id;

    //console.log(shufflecardsurl);
    //fetch(shufflecardsurl)
    //.then((data) => data.json())
    // .then((result) => {
    //console.log(result, "ok");
    //let card = result.cards[0];
    //console.log(`${card.value} of ${card.suit}`);
    //});
  });

//task 3
let button = document.querySelector("button");
let container = document.querySelector("#container");
button.onclick = function () {
  let shufflecardsurl = `https://deckofcardsapi.com/api/deck/${deckid}/draw`;
  console.log(deckid);
  fetch(shufflecardsurl)
    .then((data) => data.json())
    .then((result) => {
      console.log(result, "ok");
      let card = result.cards[0];
      console.log(`${card.value} of ${card.suit}`);
      let image = document.createElement("img");
      image.style.position = "absolute";
      let random = Math.random();
      let rotate = Math.round(360 * random);
      image.src = card.image;
      image.style.transform = `rotate(${rotate}deg)`;
      container.append(image);
    });
};
