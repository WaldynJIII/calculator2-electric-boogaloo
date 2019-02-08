$(document).ready(handleReady);
var toSend = {
    num1: 0,
    funk: "0",
    num2: 0
}
function handleReady() {
    $('#plusB').on('click', addValue)
    $('#minusB').on('click', minusValue)
    $('#divideB').on('click', divideValue)
    $('#multiB').on('click', multiplyValue)
}
function addValue() {

    toSend.num1 = $('#num1').val(),
        toSend.funk = "plus"
    toSend.num2 = $('#num2').val()

    console.log(toSend)
}
function minusValue() {

    toSend.num1 = $('#num1').val(),
        toSend.funk = "minus"
    toSend.num2 = $('#num2').val()

    console.log(toSend)
}
function divideValue() {

    toSend.num1 = $('#num1').val(),
        toSend.funk = "divide"
    toSend.num2 = $('#num2').val()

    console.log(toSend)
}
function multiplyValue() {

    toSend.num1 = $('#num1').val(),
        toSend.funk = "multiply"
    toSend.num2 = $('#num2').val()

    console.log(toSend)
}