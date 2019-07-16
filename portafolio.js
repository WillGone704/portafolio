function emergeWindow(){
  var modal = document.getElementById('modal');
  var state = modal.style.display = 'none';
  
  if (state){
    modal.style.display = 'block';
  }
}
function pushMenu(){
    document.querySelector('#smallScreenMenu').style.height = "250px";
}