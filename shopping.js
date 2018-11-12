var qt=0
function plus1(){
     qt++
    document.getElementById("nbr-article1").innerHTML=qt
}
var v=0
function plus2(){
     v++
    document.getElementById("nbr-article2").innerHTML=v
}
var x=0
function plus3(){
     x++
    document.getElementById("nbr-article3").innerHTML=x
}
function moins1(){
     qt--
    document.getElementById("nbr-article1").innerHTML=qt
}
function moins2(){
     v--
    document.getElementById("nbr-article2").innerHTML=v
}
function moins3(){
     x--
    document.getElementById("nbr-article3").innerHTML=x
}
function sum1(){
    document.getElementById("totalprice1").innerHTML=qt*15
}
function sum2(){
    document.getElementById("totalprice2").innerHTML=v*25
}
function sum3(){
    document.getElementById("totalprice3").innerHTML=x*35
}
// start of hidden tabs
var qtt=0
function plus4(){
     qtt++
    document.getElementById("nbr-article4").innerHTML=qtt
}
var vt=0
function plus5(){
     vt++
    document.getElementById("nbr-article5").innerHTML=vt
}
var xt=0
function plus6(){
     xt++
    document.getElementById("nbr-article6").innerHTML=xt
}
function moins4(){
     qtt--
    document.getElementById("nbr-article4").innerHTML=qtt
}
function moins5(){
     vt--
    document.getElementById("nbr-article5").innerHTML=vt
}
function moins6(){
     xt--
    document.getElementById("nbr-article6").innerHTML=xt
}
function sum4(){
    document.getElementById("totalprice4").innerHTML=qtt*15
}
function sum5(){
    document.getElementById("totalprice5").innerHTML=vt*25
}
function sum6(){
    document.getElementById("totalprice6").innerHTML=xt*35
}
// end of hidden tabs
function totalsum(){
    document.getElementById("basic-addon2").innerHTML=(qt*15)+(v*25)+(x*35)+(qtt*15)+(vt*25)+(xt*35)
}
function heartarticle1(){
    document.getElementById("heart1").style.backgroundColor="black"
}
function unheart1(){
    document.getElementById("heart1").style.backgroundColor="transparent"
}
function heartarticle2(){
    document.getElementById("heart2").style.backgroundColor="black"
}
function unheart2(){
    document.getElementById("heart2").style.backgroundColor="transparent"
}
function heartarticle3(){
    document.getElementById("heart3").style.backgroundColor="black"
}
function unheart3(){
    document.getElementById("heart3").style.backgroundColor="transparent"
}
// start of hidden tabs heart
function heartarticle4(){
    document.getElementById("heart4").style.backgroundColor="black"
}
function unheart4(){
    document.getElementById("heart4").style.backgroundColor="transparent"
}
function heartarticle5(){
    document.getElementById("heart5").style.backgroundColor="black"
}
function unheart5(){
    document.getElementById("heart5").style.backgroundColor="transparent"
}
function heartarticle6(){
    document.getElementById("heart6").style.backgroundColor="black"
}
function unheart6(){
    document.getElementById("heart6").style.backgroundColor="transparent"
}
// end of hidden tab hearts
function close1() {
    var x = document.getElementById("tab1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function close2() {
    var x = document.getElementById("tab2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function close3() {
    var x = document.getElementById("tab3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// start of hidden tabs closing
function close4() {
    var x = document.getElementById("tab4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function close5() {
    var x = document.getElementById("tab5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function close6() {
    var x = document.getElementById("tab6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// end of hidden tabs closing
// start of popup tabs