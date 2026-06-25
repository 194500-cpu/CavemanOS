function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#currentTime");
  timeText.innerHTML = currentTime;
}

setInterval(updateTime, 1000);


makedragElement(document.getElementById("campfire"));
makedragElement(document.getElementById("welcome"));
makedragElement(document.getElementById("cave"));


function makedragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  document.getElementById(element.id + "header").onmousedown = startDragging;

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();

    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;

    initialX = e.clientX;
    initialY = e.clientY;

    if (
      element.offsetLeft + element.offsetWidth - currentX < window.innerWidth &&
      element.offsetLeft - currentX > 0 &&
      element.offsetTop - currentY > 0 &&
      element.offsetTop + element.offsetHeight - currentY < innerHeight
    ) {
      element.style.top = (element.offsetTop - currentY) + "px";
      element.style.left = (element.offsetLeft - currentX) + "px";
    }
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


var campfireScreen = document.querySelector("#campfire");
var campfireClose = document.querySelector("#campfireclose");
var campfireOpen = document.querySelector("#campfireIcon");

var welcomeScreen = document.querySelector("#welcome");
var welcomeClose = document.querySelector("#welcomeclose");
var welcomeOpen = document.querySelector("#welcomeIcon");

var caveScreen = document.querySelector("#cave");
var caveClose = document.querySelector("#caveclose");
var caveOpen = document.querySelector("#caveIcon");


function closeWindow(element) {
  element.style.display = "none";
}


function openWindow(element) {
  element.style.display = "block";

  biggestIndex++;

  element.style.zIndex = biggestIndex;
  navBar.style.zIndex = biggestIndex + 1;
  dock.style.zIndex = biggestIndex + 1;
}


let campfireimage = document.getElementById("campfireIMG");
let welcomeimage = document.getElementById("welcomeIMG");
let caveimage = document.getElementById("caveIMG");


campfireClose.addEventListener("click", function () {
  closeWindow(campfireScreen);
  campfireimage.classList.remove("selected");
});

campfireOpen.addEventListener("click", function () {
  openWindow(campfireScreen);
  campfireimage.classList.add("selected");
});


welcomeClose.addEventListener("click", function () {
  closeWindow(welcomeScreen);
  welcomeimage.classList.remove("selected");
});

welcomeOpen.addEventListener("click", function () {
  openWindow(welcomeScreen);
  welcomeimage.classList.add("selected");
});


caveClose.addEventListener("click", function () {
  closeWindow(caveScreen);
  caveimage.classList.remove("selected");
});

caveOpen.addEventListener("click", function () {
  openWindow(caveScreen);
  caveimage.classList.add("selected");
});


var navBar = document.querySelector("#navbar");
var dock = document.querySelector("#dock");

var biggestIndex = 1;

addWindowTapHandling(welcomeScreen);
addWindowTapHandling(campfireScreen);
addWindowTapHandling(caveScreen);


function handleWindowTap(element) {
  biggestIndex++; 
  element.style.zIndex = biggestIndex;
}


function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  );
}


navBar.style.zIndex = biggestIndex + 1;
dock.style.zIndex = biggestIndex + 1;


function shareMessage() {
  let message = document.querySelector('input[id="message"]').value;
}

let ach2 = 0;
let ach2text = document.getElementById("ach2text")
function homepageAchievment() {
  if (ach2 === 0) {
    alert("Achievment unlocked: 'There is no homepage!'");
    ach2 = 1;
    let ach2img = document.querySelector("#welcomeAchievmentIMG");
    ach2img.classList.remove("notfound");
    ach2text.style.textDecoration = "line-through";
    ach2text.style.color = "white";  
  } else {
    alert("You already have this, greedy user!");
  }
}


// doing some supabase stuff

const url = "https://tgpokcloaaefyrqzxbob.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncG9rY2xvYWFlZnlycXp4Ym9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNDA4NzgsImV4cCI6MjA5NzgxNjg3OH0.JvkSko3QizB2kYnHjTM2qHoW3nNj65BjXPw2k5ieGzk";

const Supabase = supabase.createClient(url, key);