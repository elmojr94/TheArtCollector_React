const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`

function renderCard(card) {

}

function renderCardList(cardList) {

}

function fetchCardList(url) {
    $('.searching').addClass('active')
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        $('searching').removeClass('active')
        console.log(data.cards)
    })
}
fetchCardList(CARD_URL);

$('#card-search').on('submit', function (event) {

});

$('#results').on('click', '.card .set-name', function () {

});