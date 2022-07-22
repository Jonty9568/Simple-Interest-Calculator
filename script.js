function compute(){
    var principal=document.getElementById("principal").value;
    if (principal==" " || principal<=0){
        alert("Enter a Positive Number");
        document.getElementById("principal").focus();
        return;
    }

    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=(principal*years*rate)/100;

    var year=parseInt(new Date().getFullYear())+parseInt(years);

    var resultDisplay=document.getElementById("result");
    resultDisplay.innerHTML="If you deposit "+"<span class='highlight'>"+principal+"</span>"+",<br>at an interest rate of "+"<span class='highlight'>"+rate+"</span>"+"%.<br>You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+",<br>in the year "+"<span class='highlight'>"+year+"</span>";
}

function updateRate()
{
    var rateval=document.getElementById("rate");
    var outrate=document.getElementById("rate_val");
    outrate.innerHTML=rateval.value;

    rateval.oninput=function(){
        output.innerHTML=this.value;
    }
}