// sounds
const coin_sound = document.querySelector('#coin_sound');
const fireball_sound = document.querySelector('#fireball_sound');
const pipe_sound = document.querySelector('#pipe_sound');
const stomp_sound = document.querySelector('#stomp_sound');
const pause_sound = document.querySelector('#pause_sound');

const countValue = document.querySelector('#counter_box');

function increment(){
    //get value from ui
    let value = parseInt(countValue.innerText);
    //update the value
    value = value + 1;
    //set new value on ui
    countValue.innerText = value;
    coin_sound.currentTime = 0;
    coin_sound.play();
};

function decrement(){
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
    fireball_sound.currentTime = 0;
    fireball_sound.play();
};

function zero(){
    let value = parseInt(countValue.innerText);
    value = 0;
    countValue.innerText = value;
    stomp_sound.currentTime = 0;
    stomp_sound.play();
};

function incrementTen(){
    let value = parseInt(countValue.innerText);
    value = value + 10;
    countValue.innerText = value;
    pause_sound.currentTime = 0;
    pause_sound.play();
};

function decrementTen(){
    let value = parseInt(countValue.innerText);
    value = value - 10;
    countValue.innerText = value;
    pipe_sound.currentTime = 0;
    pipe_sound.play();
};

