var min=1;
var max=10;

var random_number=Math.floor(Math.random()*(max-min+1))+min;


var count=5;

var ele=document.getElementById("in");
document.getElementById("remi").innerHTML="Count :"+count;
function getvalue(){
    
    
    
    var v=ele.value;
    document.getElementById("in").value="";
    if(random_number==parseInt(v)){
        document.getElementById("hint").innerHTML="correct guess";
        document.getElementById("remi").innerHTML="You took "+(5-count+1)+" counts to win";
        count=5;
        ele.disabled=true;
        document.getElementById("but").disabled=true;
    }
    else if(random_number>parseInt(v)){
        document.getElementById("hint").innerHTML="enter greater number";
        count--;
        document.getElementById("remi").innerHTML="Count :"+count;
    }
    else if(random_number<parseInt(v)){
        document.getElementById("hint").innerHTML="enter smaller number";
        count--;
        document.getElementById("remi").innerHTML="Count :"+count;
    }

    if(count==0){
        ele.disabled=true;
        document.getElementById("but").disabled=true;
        document.getElementById("hint").innerHTML="YOU LOSE!!better luck next time";

    }
}

function onresets(){
    random_number=Math.floor(Math.random()*(max-min+1))+min;
    count=5;
    document.getElementById("remi").innerHTML="Count :"+count;
    document.getElementById("hint").innerHTML="";
    ele.disabled=false;
        document.getElementById("but").disabled=false;

}


