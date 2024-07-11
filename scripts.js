// scripts.js
const tips = [
    "Water your plants early in the morning or late in the evening to minimize water loss due to evaporation.",
    "Rotate your indoor plants regularly to ensure even growth and prevent them from leaning towards the light source.",
    "Use organic fertilizers to promote healthy growth without the risk of chemical buildup in your soil.",
    "Check the soil moisture before watering; some plants prefer slightly dry conditions between watering sessions.",
    "Prune dead or yellowing leaves to encourage new growth and maintain the overall health of your plants.",
    "Choose pots with drainage holes to prevent waterlogged soil, which can lead to root rot.",
    "Place pebbles or small rocks at the bottom of your pots to improve drainage and aeration for your plants.",
    "Dust your plant leaves regularly with a soft cloth to allow them to photosynthesize efficiently.",
    "Research the light and humidity requirements of your plants to provide them with the best possible care.",
    "Use a diluted solution of neem oil and water to naturally deter pests from your plants.",
    "Mist your tropical plants with water to create a humid environment, mimicking their natural habitat.",
    "Allow tap water to sit overnight before watering your plants to allow chlorine to evaporate, which can be harmful to some plants.",
    "Repot your plants annually to refresh the soil and provide them with fresh nutrients.",
    "Use a well-balanced fertilizer during the growing season to support healthy foliage and flower production.",
    "Use a humidity tray or a room humidifier to increase moisture levels around your plants, especially during winter months.",
    "Group plants with similar care requirements together to simplify watering and maintenance routines.",
    "Inspect your plants regularly for signs of pests or diseases, and take action promptly to prevent spreading.",
    "Use a support structure such as bamboo stakes or trellises for climbing plants to help them grow upright and strong.",
    "Place your succulents in bright indirect light to prevent sunburn and ensure optimal growth conditions.",
    "Use a soil moisture meter to accurately gauge when your plants need watering, avoiding both overwatering and underwatering.",
   "Use a potting mix formulated for specific plant types (e.g., cactus mix for succulents) to ensure optimal growth conditions.",
    "Create a watering schedule based on your plant's needs and adjust it seasonally as their requirements change.",
    "Remove any yellowing or fallen leaves from the soil surface to prevent mold growth and maintain cleanliness.",
    "Avoid placing plants near drafts or vents as sudden temperature changes can stress them.",
    "For flowering plants, deadhead spent flowers regularly to encourage continuous blooming and maintain plant appearance.",
    "Use mulch around outdoor plants to help retain moisture, regulate soil temperature, and reduce weed growth.",
    "When repotting, gently loosen the plant's root ball to encourage new root growth and better nutrient uptake.",
    "Monitor indoor humidity levels with a hygrometer and adjust as needed to meet your plants' humidity preferences.",
    "Rotate your outdoor container plants periodically to ensure all sides receive adequate sunlight for even growth.",
    "Research companion planting to maximize space and encourage beneficial interactions between different plant species."
];

function newTip() {
    const tipElement = document.getElementById('tip');
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipElement.textContent = tips[randomIndex];
}

// Initialize with a random tip on page load
document.addEventListener('DOMContentLoaded', newTip);

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    });
});
