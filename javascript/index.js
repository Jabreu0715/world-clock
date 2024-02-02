function updateTime() {
  //NewYork
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Jarabacoa
  let jarabacoaElement = document.querySelector("#jarabacoa");
  if (jarabacoaElement) {
    let jarabacoaDateElement = jarabacoaElement.querySelector(".date");
    let jarabacoaTimeElement = jarabacoaElement.querySelector(".time");
    let jarabacoaTime = moment().tz("America/Santo_Domingo");

    jarabacoaDateElement.innerHTML = jarabacoaTime.format("MMMM Do, YYYY");
    jarabacoaTimeElement.innerHTML = jarabacoaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");
    let melbourneTime = moment().tz("Australia/Melbourne");
    melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do, YYYY");
    melbourneTimeElement.innerHTML = melbourneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
