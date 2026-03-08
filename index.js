let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const wishList = (icon) => {
  icon.classList.toggle("text-red-800");

  if (icon.classList.contains("text-red-800")) {
    heartCount++;
  } else {
    heartCount--;
  }
  document.getElementById("love").innerText = heartCount;
};

// copy button click function
const copyBtn = (number) => {
  navigator.clipboard.writeText(number);
  copyCount++;
  document.getElementById("copy-btt").innerText = copyCount;
  alert("Number count copy :" + number);
};
// call button click function
const callHistory = [];

const callNowBtn = (name, number) => {
  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return;
  }
  coinCount -= 20;
  document.getElementById("coin-count").innerText = coinCount;
  alert(`calling ${name} ${number}`);
  callHistory.push({ name, number, time: new Date().toLocaleTimeString() });
  showHistory();
};

// call history function

const showHistory = () => {
  const historyContainer = document.getElementById("all-history");
  historyContainer.innerHTML = "";
  callHistory.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="flex justify-between items-center p-4 rounded-2xl bg-gray-50 ">
        <div>
        <h1 class="text-lg font-semibold">${item.name}</H1>
        <h1>${item.number}</H1>
        </div>
        <div>
        <h1>${item.time} </h1?
        </div>
      </div>
    
    `;
    historyContainer.append(div);
  });
};

// clear container function

const clearContainer = () => {
  document.getElementById("all-history").innerHTML = "";
  callHistory.innerText=""
};
