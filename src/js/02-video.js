import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector("iframe");
const player = new Player(iframe);
function videoTime(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds)
};
console.log(throttle);
player.on('timeupdate', throttle(videoTime, 1000));

player
    .setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    .then(function (seconds) { })
    .catch(function (error) {
        switch (error.name) {
            case "RangeError":
                console.log(error.name);
                break;
            default:
                console.log(error.name);
                break;
        }
    })