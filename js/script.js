function validateForm(){
    var x=document.forms["contactform"]["name"].value;
    if(x=="")
        {
            alert("You must be having a name.Just write it!!");
            return false;
        }
    else
        {
            alert("Registeration Successful");
        }            
}

function getResult(){
    var x=document.getElementById("txt1").value;
    var i=parseInt(x,10);
    let high=0;

    if(x=="")
        {
            alert("Enter English marks !!");
            document.getElementById("txt1").style.borderColor = "red";
            return false;
        }
    else high=x;    
    var y=document.getElementById("txt2").value;
    var j=parseInt(y,10);
    if(y=="")
        {
            alert("Enter GK marks !!");
            document.getElementById("txt2").style.borderColor = "red";
            return false;
        }
    else if(y>high)
    {
        high=y;
    }    
    var z=document.getElementById("txt3").value;
    var k=parseInt(z,10);
    if(z=="")
        {
            alert("Enter Math marks !!");
            document.getElementById("txt3").style.borderColor = "red";
            return false;
        }
        else if(z>high)
        {
            high=z;
        }      
    var total=i+j+k;
    var perc=(total/3);
    document.getElementById("total").value = total;
    document.getElementById("perc").value = perc;
    document.getElementById("high").value = high;            
         
}
function quizResult()
{
    var cb1=document.getElementById("c1").checked;
    var cb2=document.getElementById("c2").checked;
    var cb3=document.getElementById("c3").checked;
    var cb4=document.getElementById("c4").checked;
    if(cb1 ==false)
    {
        if(cb2==false)
        {
            if(cb3==false)
            {
                if(cb4==false)
                {
                    alert("Atleast 1 skill is required");
                }
            }
        }            
    }

    var n=prompt("Enter your name","name");
    var result=0;
    var option1=quizz.q1.value;
    if(option1=="A")
    {
        result=result+2;
    }
    option2=quizz.q2.value;
    if(option2=="C")
    {
        result=result+2;
    }
    if(option1=="" && option2=="" )
    {
        alert("Attempt questions to get the result.");
    }
    else if(option1=="")
    {
        alert("Attempt Q1. ")
    }
    else if(option2=="")
    {
        alert("Attempt Q2. ")
    }
    else
        alert(n +" you got "+ result+ " marks.");
          
          
}
/*function checkboxValid()
{
    alert(document.getElementById("c1").checked);
    if(document.getElementById("c1").checked=false && document.getElementById("c2").checked=false && document.getElementById("c3").checked=false && document.getElementById("c4").checked=false)
    {
        alert("Atleast 1 skill is required");
        return false;
    }

}
*/
function isEmpty(a)
{
    var val=document.getElementById(a).value;
    if(val=="")
    {
        document.getElementById(a).focus();
        document.getElementById(a).style.borderColor="red";
    }
    else
    {
        if(val != "101")
        {
            document.getElementById("display").innerHTML ="*Invalid username";
            document.getElementById(a).style.borderColor="red";
            document.getElementById(a).focus();   
        }
        else
        {
            document.getElementById("display").innerHTML ="";
            document.getElementById(a).style.borderColor="transparent";
        }
    }    
}
function colorme(a)
{
    document.getElementById(a).style.borderColor="yellow";
}
function coloroff(a)
{
    document.getElementById(a).style.borderColor="transparent";
}