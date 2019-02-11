$(document).ready(handleReady);
var toShow = []
var toSend = {
    num1: 0,
    funk: "0",
    num2: 0
}
var catalyst = ""
function handleReady() {
    $('#plusB').on('click', addValue);
    $('#minusB').on('click', minusValue);
    $('#divideB').on('click', divideValue);
    $('#multiB').on('click', multiplyValue);
    $('#calcB').on('click', submitCalc);
    $('#clearB').on('click', clearT);
}
function addValue() {

    
        toSend.funk = "plus"
    catalyst="+"

    console.log(toSend)
}
function minusValue() {

   
        toSend.funk = "minus"
    catalyst = "-"


    console.log(toSend)
}
function divideValue() {

  
        toSend.funk = "divide"
    catalyst = "/"


    console.log(toSend)
}
function multiplyValue() {

   
        toSend.funk = "multiply"
    catalyst = "*"


    console.log(toSend)
}
function submitCalc(){
    
    // toSend.num1 = $('#num1').val(),
    // toSend.num2 = $('#num2').val()
$.ajax({
    method: 'POST',
    url: '/calculate',
    data: toSend
}).then(function (response) {
console.log(toSend)
    console.log(`should be 201: ${response}`);

    getAnswer()

})}
    
function getAnswer() {
    $.ajax({
        method: 'GET',
        url: '/answer',
    }).then(function (response) {
        console.log(response);
        let answer = response
        $('#cAlc').append(`<tr>
      <td> ${answer}  </td>
      </tr>`
        );
    })
}
function clearT() {
    $('#cAlc').empty()
}
function createCalc ( ) {
    let eQuation = $('#num1').val();
    let eArray = eQuation.split(`${catalyst}`)
     toSend = {
        num1: eArray[0],
        funk: catalyst,
        num2: eArray[1]
    }
}