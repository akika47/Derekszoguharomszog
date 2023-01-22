function Megszerkeztheto(){
    var a=document.getElementById("ebef").value;
    var b=document.getElementById("mabef").value;
    var c=document.getElementById("atfogo").value;
    if (a + b > c && a + c > b && b + c > a){
        alert("A derkészögű háromszög szerkezthető!");
    } else {alert("A derékszögű háromszög nem szerkezthető!");}
}

function Random() {
    return Math.floor((Math.random() * 91) + 10);
}

function VeletlenOldalhosszak(){
    document.getElementById("ebef").value=Random();
    document.getElementById("mabef").value=Random();
    document.getElementById("atfogo").value=Random();
}

function AtfogoSzamitas(){
    var a=document.getElementById("ebef").value;
    var b=document.getElementById("mabef").value;
    var c=Number(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)).toFixed(3));
    document.getElementById("atfogo").value = c;
}