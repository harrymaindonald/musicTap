window.addEventListener('load', ()=>{
  const sounds=document.querySelectorAll(".sound");
  const pads=document.querySelectorAll(".pads div");

  if('serviceWorker' in navigator){
    try {
      navigator.serviceWorker.register('/assets/js/serviceWorker.js');
      console.log("Service Worker Registered");
    } catch (error) {
      console.log("Service Worker Registration Failed");
    }
  }

  pads.forEach((pad,index) => {
    pad.addEventListener('click', ()=> {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });

});



