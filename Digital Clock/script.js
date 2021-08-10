 setInterval(setClock, 1000)
 setInterval(sepAnimation, 500)

const minute = document.getElementById("min");
const hour = document.getElementById("hour");
const separator = document.getElementById("sep");


function setClock(){
    const d = new Date();
    const seconds = d.getSeconds();
    const minD = d.getMinutes();
    const hoursD = d.getHours();
    if(minD < 10)
        minD = "0" + minD;
    if(hoursD < 10)
        hoursD = "0" + hoursD;
    
    minute.innerHTML = minD;
    hour.innerHTML = hoursD;


}
setClock()

function sepAnimation()
{
    if(sep.style.opacity != 0)
        sep.style.opacity = 0;
    else
        sep.style.opacity = 1;

}
