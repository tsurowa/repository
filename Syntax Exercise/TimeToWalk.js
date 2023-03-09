function TimeToWalk(steps, length, speedKmH) {
    let distance = steps * length;
    let speedMetInSec = speedKmH / 3.6;
    let rest = Math.floor(distance / 500) * 60;
    let time = distance / speedMetInSec + rest;
    let hours = Math.floor(time / 3600);
    let min = Math.floor(time / 60);
    let sec = Math.round(time % 60);
    console.log(`${hours < 10 ? '0' : ''}${hours}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`);
}

TimeToWalk(4000, 0.60, 5);
TimeToWalk(2564, 0.70, 5.5);