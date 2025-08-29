function getElement(id){
  const element=document.getElementById(id);
  return element;
}

document.getElementById("heart-icon1").addEventListener("click",function (){
  const count=getElement("love");
  console.log(count)
  
    
  })