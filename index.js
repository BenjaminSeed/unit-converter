/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let numValue = document.getElementById("num-value")
let convertBtn = document.getElementById("convert-btn")
let lengthRes = document.getElementById("length-result")
let volumeRes = document.getElementById("volume-result")
let massRes = document.getElementById("mass-result")


function meterToFeet() {
    return (numValue.value * 3.281).toFixed(3) 
}

function feetToMeters() {
    return (numValue.value * 0.3048).toFixed(3)
}

function litersToGallons() {
    return (numValue.value * 0.264).toFixed(3)
}

function gallonsToLiters() {
    return (numValue.value * 3.78451).toFixed(3)
}

function kilosToPounds() {
    return (numValue.value * 2.204).toFixed(3) 
}

function poundsToKilos() {
    return (numValue.value * 0.453592).toFixed(3) 
}

convertBtn.addEventListener("click", function() {
    lengthRes.textContent = `${numValue.value} meters = ${meterToFeet()} feet | ${numValue.value} feet = ${feetToMeters()} meters`
    volumeRes.textContent = `${numValue.value} liters = ${litersToGallons()} gallons | ${numValue.value} gallons = ${gallonsToLiters()} liters`
    massRes.textContent = `${numValue.value} kilos = ${kilosToPounds()} pounds | ${numValue.value} pounds = ${poundsToKilos()} kilos`
})