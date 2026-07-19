function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#currentTime");
  timeText.innerHTML = currentTime;
}

setInterval(updateTime, 1000);


makedragElement(document.getElementById("campfire"));
makedragElement(document.getElementById("welcome"));
makedragElement(document.getElementById("cave"));
makedragElement(document.getElementById("AI"));

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

var AIScreen = document.querySelector("#AI");
var AIClose = document.querySelector("#AIclose");
var AIOpen = document.querySelector("#AIIMG");


let opened = 0;
function closeWindow(element) {
  element.style.display = "none";
  opened = 0;
}


function openWindow(element) {
  element.style.display = "block";
  opened++
  if (opened > 9) {
    ach3()
  }
  biggestIndex++;

  element.style.zIndex = biggestIndex;
  navBar.style.zIndex = biggestIndex + 1;
  dock.style.zIndex = biggestIndex + 1;
}


let campfireimage = document.getElementById("campfireIMG");
let welcomeimage = document.getElementById("welcomeIMG");
let caveimage = document.getElementById("caveIMG");
let AIimage = document.getElementById("AIIMG");

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


AIClose.addEventListener("click", function () {
  closeWindow(AIScreen);
  AIimage.classList.remove("selected");
});

AIOpen.addEventListener("click", function () {
  openWindow(AIScreen);
  AIimage.classList.add("selected");
});


var navBar = document.querySelector("#navbar");
var dock = document.querySelector("#dock");

var biggestIndex = 1;

addWindowTapHandling(welcomeScreen);
addWindowTapHandling(campfireScreen);
addWindowTapHandling(caveScreen);
addWindowTapHandling(AIScreen);

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


let ach3count = 0;

function ach3() {
  if (ach3count == 0) {
    opened = 0;
    alert("Achievment unlocked: 'Click an app icon 10 times in a row'");
    ach3count = 1;
    let ach3img = document.querySelector("#clickIMG");
    ach3img.classList.remove("notfound");
    ach3text.style.textDecoration = "line-through";
    ach3text.style.color = "white"; 
  } else {
    alert("YOU CAN STOP CLICKING ME NOW T-T");
  }
}

let ach4count = 0;

function tellBob() {
  let message = document.getElementById('ask');
  let messageText = message.value;

  if (messageText == "hardgraylightgrayhard" && ach4count == 0) {
    alert("OO... BOB warm, TOO WARM!")
    ach4count += 1;
    const endingOverlay = document.getElementById("endingOverlay");
    endingOverlay.classList.add("show");
    endingOverlay.style.display = "flex";
    endingOverlay.style.opacity = "0";
    endingOverlay.style.transition = "opacity 1s";

    setTimeout(function () {
      endingOverlay.style.opacity = "1";
    }, 10);

    setTimeout(function () {
      endingOverlay.classList.remove("show");
      endingOverlay.style.display = "none";
      alert("Hard achievment unlocked!: Make Bob warm");
    }, 3000);

    let ach4img = document.querySelector("#fireIMG");
    ach4img.classList.remove("notfound");
    ach4text.style.textDecoration = "line-through";
    ach4text.style.color = "white"; 
    
  } else if (messageText == "hardgraylightgrayhard" && ach4count != 0) {
    alert("Bob no need anymore.");
  } else if (messageText == ""){
    alert("Who's there? Speak to Bob!")
  } else {
    alert(hint())
  }
}

function hint() {
  const bobHints = [
  "Bob cold. Bob need something that makes fire.",
  "Fire can start when two hard things strike together.",
  "One fire-making tool is called flint and steel.",
  "Think about what flint looks like: hard and gray.",
  "Think about steel too: hard and gray.",
  "The middle part is a lighter gray.",
  "The answer describes three parts joined together.",
  "First part: hard gray.",
  "Middle part: light gray.",
  "Last part: hard.",
  "Put the three clues together with no spaces.",
  "Its hard on both ends, and gray becomes a lighter gray",
  "hardgray? lightgray? hard?"]
  
  let randint = Math.floor(Math.random() * bobHints.length);
  return(bobHints[randint]);
}

// doing some supabase stuff

const url = "https://tgpokcloaaefyrqzxbob.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncG9rY2xvYWFlZnlycXp4Ym9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNDA4NzgsImV4cCI6MjA5NzgxNjg3OH0.JvkSko3QizB2kYnHjTM2qHoW3nNj65BjXPw2k5ieGzk";
const Supabase = window.supabase.createClient(url, key);

let ach1 = 0;

async function shareMessage() {
  let message = document.getElementById('message');
  let messageText = message.value;

  if (messageText === "") {
    alert("Say something!");
    return 0;
  }
  if (messageText.length > 100) {
    alert("100 characters max!");
    return 0;
  }
    let { data, error } = await Supabase
      .from('campfire_messages')
      .insert([
        {message: messageText} 
      ]);
    if (error) {
      alert("Error" + error.message);
    }
    message.value = ""; 
    getMessages();
    if (ach1 === 0) {
      firstmessageachievment();
      ach1 = 1;
    }
    return 1;
}


async function getMessages() {
  let messages = []
  let {data, error} = await Supabase
  .from('campfire_messages')
  .select('*')
  .order('id', { ascending: false })
  if (error) {
      alert("Error" + error.message);
    }
  previous = document.getElementById("previousmessages");
  previous.innerHTML = "";
  for (let i = 1; i <= data.length; i++) {
    let message = data[i-1];
    messages.push(message.message);
  }
  let messageDiv = 0;
  for (let j = 0; j < messages.length; j++) {
    messageDiv = document.createElement("div");
    messageDiv.innerHTML = messages[j];
    messageDiv.classList.add("messagebox");
    previous.appendChild(messageDiv);
  }
  }

getMessages();

Supabase
  .channel('update')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'campfire_messages' }, (payload) => {
    getMessages();
  }
)
  .subscribe();



function firstmessageachievment() {
  alert("Achievment unlocked: 'Hello Camp!'");
  let ach1img = document.querySelector("#messageIMG");
  ach1img.classList.remove("notfound");
  let ach1text = document.getElementById("ach1text");
  ach1text.style.textDecoration = "line-through";
  ach1text.style.color = "white";

}