function displaytime(){
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let Session="AM"

    if(hours>=12){
        Session="PM";
        hours=hours=12;

    }
    hours=hours<10 ?  "0"+hours :hours;
    minutes=minutes<10?"0"+minutes :minutes;
    seconds=seconds<10? "0"+seconds :seconds;

    const res=`${hours}:${minutes}:${seconds}:${Session}`;
    document.getElementById('time').innerHTML=res;
}
setInterval(displaytime,1000);




