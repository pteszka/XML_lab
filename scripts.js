
var inputs = document.getElementById("inp").elements;
var x = inputs[0];
var y = inputs[1];


document.getElementById("text_d").innerHTML = 0;
document.getElementById("text_H").innerHTML = 0;
document.getElementById("d_var").innerHTML = 0;
document.getElementById("H_var").innerHTML = 0;
document.getElementById("V_var").innerHTML = 0;

function capacity() {
    var H = x.value;
    console.log(H);
    var d = y.value;
    console.log(d);

    var V = Math.pow(d,2)*H/6;
    console.log(V.toString());

    document.getElementById("text_d").innerHTML = d;
    document.getElementById("text_H").innerHTML = H;
    document.getElementById("d_var").innerHTML = d;
    document.getElementById("H_var").innerHTML = H;
    document.getElementById("V_var").innerHTML = V.toString();
}

// var d = y.addEventListener("input", function (){
//     document.getElementById("demo").innerHTML = y.value;
// })
// var H = x.addEventListener("input", function (){
//     var h = x.value;
// })
// var d = y.addEventListener("input", function (){
//     return y.value;
// })
// var V = d^2 * H/6;
// console.log(V);
//
// document.getElementById("demo").innerHTML = V.toString();
