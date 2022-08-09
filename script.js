const secHand = document.querySelector('.seconds-hand');

const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds / 60) * 360)+90;
    secHand.style.transform=`rotate(${secDeg}deg)`
}

setInterval(setDate, 1000)