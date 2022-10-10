let timerID = null;
 let timer = 0;
 let minutes = 0;
 let sw_status = "off"
 let STOP_WATCH = document.getElementById('stop_watch');
 function start_count(){
     if(sw_status == "off"){
     sw_status = "on"
     timerID = setInterval("count()", 1000);
     }
 }
 function count(){
     timer++;
     if(timer % 60 === 0){
      minutes ++;
      timer = 0
     }
     STOP_WATCH.innerHTML = minutes + 'm' + timer + 's';
 }
 function stop_count(){
     clearInterval(timerID);
     sw_status = "off"
 }
 function reset_count(){
     stop_count();
     timer = 0;
     minutes = 0;
     STOP_WATCH.innerHTML = minutes + 'm' + timer + 's';
 }