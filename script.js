console.log("Added");
let audioelem = new Audio('./Sound/tone.wav');
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let btn = document.getElementById("btn");
let stopBtn = document.getElementsByClassName('stop-btn')[0];
function update(minuteValue, secondValue){
    let check=setInterval(()=>{
        document.getElementById('minute-left').innerHTML = minuteValue;
        document.getElementById('second-left').innerHTML = secondValue;
        if(minuteValue !=0 && secondValue==0){
            minuteValue--;
            secondValue = 60;
        }
        else if(minuteValue == 0){
            if(secondValue == 0){
                clearInterval(check);
                audioelem.play();
                audioelem.loop = 'true';
                stopBtn.style.display = 'block';
            }
        }
        secondValue--;
    },1000);
}
function check(minuteValue, secondValue){
    
}
btn.addEventListener('click',()=>{
    let minuteValue = minute.value;
    let secondValue = second.value;
    console.log(minuteValue, secondValue);
    update(minuteValue, secondValue);
    stopBtn.style.display = 'none';
})
stopBtn.addEventListener('click',()=>{
    audioelem.pause();
})