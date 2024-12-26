const qoute = [
  "bismillah irrahman irrahiim",
  "laa ilaaha illa allah",
  "alhamdulillah",
  "subhaanallah",
  "allaahu akbar",
  "there is no real god but allah"
];
let generate = document.getElementById("generate")
let display = document.getElementById("display")
generate.addEventListener('click', function(){

   let random = Math.floor(Math.random()*qoute.length)
   
  display.textContent = qoute[random];
});