const menu = [
    {
        id : 1,
        title: "Buttermilk Pancakes",
        price: '$15',
        img: "./images/item-1.jpeg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id : 2,
        title: "Diner Double",
        price: '$14',
        img: "./images/item-2.jpeg",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        id : 3,
        title: "Buttermilk Pancakes",
        price: '$16',
        img: "./images/item-3.jpeg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id : 4,
        title: "Buttermilk Pancakes",
        price: '$17',
        img: "./images/item-4.jpeg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
];

const menuSec = document.querySelector('.menuSec');
window.addEventListener('DOMContentLoaded', function(){
    let displayMenu = menu.map(function(item) {
        return item;
    });
    console.log(displayMenu);
});