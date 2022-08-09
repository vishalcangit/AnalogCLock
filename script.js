const secHand = document.querySelector('.seconds-hand');
const minHand = document.querySelector('.minutes-hand');
const hrHand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secDeg = ((seconds / 60) * 360)+90;
    secHand.style.transform=`rotate(${secDeg}deg)`

    const minutes = now.getMinutes();
    const minDeg = ((minutes / 60) * 360)+90;
    minHand.style.transform=`rotate(${minDeg}deg)`

    const hr = now.getHours();
    const hrDeg = ((hr / 60) * 360)+90;
    hrHand.style.transform=`rotate(${hrDeg}deg)`

}

setInterval(setDate, 1000)