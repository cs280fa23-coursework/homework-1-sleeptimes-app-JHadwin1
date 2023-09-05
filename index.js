const clcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const bedtimeHoursDiv = document.getElementById("bedtime-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");
const AMPMSection = document.getElementById("ampm-dropdown");
const hourSection = document.getElementById("hour-dropdown");
const minuteSection = document.getElementById("minute-dropdown");

clcBtn.addEventListener("click", calcSleepTimes);
returnBtn.addEventListener("click", () => {
    promptSection.classList.remove("hidden");
    imageContainer.classList.remove("hidden");
    resultSection.classList.add("hidden");
  });
  
function calcSleepTimes() {
    let sleepTime = new Date(2000, 1, 1, hourSection.value, minuteSection.value -644);
    if(AMPMSection.value == "PM") {
        sleepTime.setHours(sleepTime.getHours() + 12);
    }

    bedtimeHoursDiv.innerHTML = "";
    for (let i = 6; i >= 1; i--) {
        sleepTime.setMinutes(sleepTime.getMinutes() + 90);
        const sleepTimeString = sleepTime.toLocaleTimeString("en-US", {
            timeStyle: "short",
          });
          const cycleDiv = document.createElement("div");
          cycleDiv.classList.add("cycle");
          cycleDiv.setAttribute("id", `cycle-${i}`);
          cycleDiv.textContent = sleepTimeString;
          bedtimeHoursDiv.appendChild(cycleDiv);
    }

    promptSection.classList.add("hidden");
    imageContainer.classList.add("hidden");
    resultSection.classList.remove("hidden");
}