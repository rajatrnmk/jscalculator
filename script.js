function liveScreen(value) {
    let res = document.getElementById("calc");
    if(res.value == "undefined"){
      res.value = "";
    }
    res.value += value;
  }
function clearscreen(){
    document.getElementById("calc").value= " ";
}


    
       

