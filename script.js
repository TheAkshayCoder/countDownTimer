const timeEl=document.getElementById("time")

function countDown() {
  const finalDate = new Date("1 jan 2022");
  let currentDate = new Date();

  let totalSeconds = (finalDate - currentDate)/1000;
  let sec= Math.floor(totalSeconds)
  let days=Math.floor(sec/3600/24)
  let hours=Math.floor(sec/3600)%24
  let minutes=Math.floor(sec/60)%60
  let seconds=Math.floor(totalSeconds%60)
  timeEl.innerHTML=`${days} ${hours} ${minutes} ${seconds}`  
}

setInterval(countDown,1000)
countDown();
