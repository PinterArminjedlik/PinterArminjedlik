var array=document.querySelectorAll("nav>a"),
    maincontent=document.getElementsByTagName("main")[0];

function setclass(){
    for(let i = 0; i < array.length; i++)
    {array[i].setAttribute("class","nonactive")}}

function setkezdolap(){maincontent.innerHTML=document.getElementById("kezdolap").innerHTML;setclass();
    document.getElementById("navkezdo").setAttribute("class","active")}
function setalgoritmus(){maincontent.innerHTML=document.getElementById("algoritmus").innerHTML;setclass();
    document.getElementById("navalgoritmus").setAttribute("class","active")}
function settetelek(){maincontent.innerHTML=document.getElementById("tetelek").innerHTML;setclass();
    document.getElementById("navtetelek").setAttribute("class","active")}
function setnyelvek(){maincontent.innerHTML=document.getElementById("nyelvek").innerHTML;setclass();
    document.getElementById("navnyelvek").setAttribute("class","active")}

document.getElementById("navkezdo").onclick=function(){setkezdolap()}
document.getElementById("navalgoritmus").onclick=function(){setalgoritmus()}
document.getElementById("navtetelek").onclick=function(){settetelek()}
document.getElementById("navnyelvek").onclick=function(){setnyelvek()}

function szamitas(){
    var s=document.getElementById("ut").value,
    t=document.getElementById("ido").value;
    document.getElementById("eredmeny").value=s/t
}