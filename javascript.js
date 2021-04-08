

function coeurdiv1()
{
var btcoeur=document.getElementById('btncoeurdiv1');
btcoeur.style.color='red';
}

function coeurdiv2()
{
var btcoeur=document.getElementById('btncoeurdiv2');
btcoeur.style.color='red';
}

function coeurdiv3()
{
var btcoeur=document.getElementById('btncoeurdiv3');
btcoeur.style.color='red';
}





function minudiv1()
 {

    var valuee = document.getElementById('inputquant1').getAttribute('value') ;
    if(valuee>=1)
    {
        valuee--;
        document.getElementById('inputquant1').setAttribute('value',valuee)
        var x = parseInt(document.getElementById('finalPrice').getAttribute('value'));
    var y = 1379.00;
    var z = x - y;

    document.getElementById('finalPrice').setAttribute('value',z);

    }    
}

function minudiv2()
 {

    var valuee = document.getElementById('inputquant2').value ;
    if(valuee>=1)
    {
        valuee--;
        document.getElementById('inputquant2').value=valuee;
        var x = parseInt(document.getElementById('finalPrice').value);
    var y = 176;
    var z = x - y;
    document.getElementById('finalPrice').value=z;

    }    
}

function minudiv3()
 {

    var valuee = document.getElementById('inputquant3').value ;
    if(valuee>=1)
    {
        valuee--;
        document.getElementById('inputquant3').value=valuee;
        var x = parseInt(document.getElementById('finalPrice').value);
    var y = 249.00;
    var z = x - y;
    document.getElementById('finalPrice').value=z;

    }    
}



function plusdiv1()
 {

    var valuee = document.getElementById('inputquant1').getAttribute('value') ;
    valuee++;
    document.getElementById('inputquant1').setAttribute('value',valuee);
  
    var x = parseInt(document.getElementById('finalPrice').getAttribute('value'));
    var y = 1379.00;
    var z = x + y;

    document.getElementById('finalPrice').setAttribute('value',z);

}

function plusdiv2()
 {

    var valuee = document.getElementById('inputquant2').value ;
    valuee++;
    document.getElementById('inputquant2').value=valuee;
  
    var x = parseInt(document.getElementById('finalPrice').value);
    var y = 176;
    var z = x + y;

    document.getElementById('finalPrice').setAttribute('value',z);

}

function plusdiv3()
 {

    var valuee = document.getElementById('inputquant3').value ;
    valuee++;
    document.getElementById('inputquant3').value=valuee;
  
    var x = parseInt(document.getElementById('finalPrice').value);
    var y = 249;
    var z = x + y;

    document.getElementById('finalPrice').setAttribute('value',z);

}



function deletdiv1()
{
  var x = parseInt(document.getElementById('finalPrice').getAttribute('value'));
  var y=parseInt(document.getElementById('inputquant1').getAttribute('value'))*1379.00;
  var z =x-y;
   document.getElementById('finalPrice').setAttribute('value',z);

var parent=document.getElementById('part');
var child=document.getElementById('chlddiv1');
parent.removeChild(child);
}

function deletdiv2()
{
  var x = parseInt(document.getElementById('finalPrice').value);
  var y=parseInt(document.getElementById('inputquant2').value)*176;
  var z =x-y;
   document.getElementById('finalPrice').value=z;

var parent=document.getElementById('part');
var child=document.getElementById('chlddiv2');
parent.removeChild(child);
}

function deletdiv3()
{
  var x = parseInt(document.getElementById('finalPrice').value);
  var y=parseInt(document.getElementById('inputquant3').value)*249;
  var z =x-y;
   document.getElementById('finalPrice').value=z;

var parent=document.getElementById('part');
var child=document.getElementById('chlddiv3');
parent.removeChild(child);
}



 window.addEventListener("load",function()
 {
  document.getElementById('btncoeurdiv1').addEventListener('click', coeurdiv1);
  document.getElementById('btncoeurdiv2').addEventListener('click', coeurdiv2);
  document.getElementById('btncoeurdiv3').addEventListener('click', coeurdiv3);


  document.getElementById('btnminusdiv1').addEventListener('click', minudiv1);
  document.getElementById('btnminusdiv2').addEventListener('click', minudiv2);
  document.getElementById('btnminusdiv3').addEventListener('click', minudiv3);




  document.getElementById('btnplusdiv1').addEventListener('click', plusdiv1);
  document.getElementById('btnplusdiv2').addEventListener('click', plusdiv2);
  document.getElementById('btnplusdiv3').addEventListener('click', plusdiv3)



  document.getElementById('btndeletdiv1').addEventListener('click', deletdiv1);
  document.getElementById('btndeletdiv2').addEventListener('click', deletdiv2);
  document.getElementById('btndeletdiv3').addEventListener('click', deletdiv3);
  
 }
   );