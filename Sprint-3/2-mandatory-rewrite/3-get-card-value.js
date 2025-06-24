function getCardValue(card) {
    // replace with your code from key-implement
    let rank = card.slice(0, -1); // this line removes the emojis

    if (rank === "A") {
      return 11;
    } else if (+rank >= 2 && +rank <= 10) {
      return +rank;
    } else if (rank === "J" || rank === "Q" || rank === "K") {
      return 10;
    } else {
      return "Invalid Card rank.";
    }
}
module.exports = getCardValue;
