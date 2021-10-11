/* jshint esversion: 6 */
const li1 = $(".dropdownitem1");
const li2 = $(".dropdownitem2");
const li3 = $(".dropdownitem3");
const population = $(".population");
const river = $(".river");
const coasts = $(".coasts");

li1.click(function () {
    population.toggleClass("shown");
});

li2.click(function () {
    river.toggleClass("shown");
});

li3.click(function () {
    coasts.toggleClass("shown");
});
