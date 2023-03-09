function saklar(params) {
  let lampu1 = document.getElementById("lampu1");

  if (params == "on") {
    //nyala
    lampu1.src = "assets/img/on.gif";
  }
  if (params == "off") {
    // mati
    lampu1.src = "assets/img/off.gif";
  }
  return lampu1;
}
//   function saklarof() {
//     console.log("testing saklar");
//     let lampu1 = document.getElementById("lampu1");
//     console.log(lampu1);
//     lampu1.src = "assets/img/off.png";
//   }
