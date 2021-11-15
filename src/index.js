import fetch from 'node-fetch';

const theGoblinShortcutter = async (cardArgs) => {

  const splitCardArgs = cardArgs.split(",");
  let card;
  let formatedCardName;

  splitCardArgs.forEach(function(cardName) {
    formatedCardName = cardName.replace(/ /g,"-");
  });

  card = await fetch('https://api.scryfall.com/cards//search?q=name:' + formatedCardName)
  .then(response => {
    return response.json();
  })
  .then(cardData => {
    return cardData;
  });

  return card
};

export default theGoblinShortcutter;