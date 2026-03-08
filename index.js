
let heartCount=0
let coinCount = 100;
let copyCount = 0;

const wishList=(icon)=>{
 
     icon.classList.toggle("text-red-800");

  if (icon.classList.contains("text-red-800")) {
    heartCount++;
  } else {
    heartCount--;
  }
    document.getElementById("love").innerText=heartCount;
    
}

// copy button click function
const copyBtn=(number)=>{
    navigator.clipboard.writeText(number)
    copyCount++;
    document.getElementById("copy-btt").innerText=copyCount;
    alert("Number count copy :"+ number)


}
// call button click function
const callHistory=[];
