
let username = prompt("Adınızı nedir ? ");
document.querySelector("#myName").innerHTML = username;


 function timer(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay()

    switch(day){
        case 1: 
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
    }

    hour = hour <10 ? "0" + hour : hour;
    minute = minute <10 ? "0" + minute : minute;
    second = second <10 ? "0" + second : second;

    let time = `${hour} : ${minute} : ${second} ${day} `
    document.querySelector('#myClock').innerHTML = time;

setTimeout(timer,1000);
}
timer();