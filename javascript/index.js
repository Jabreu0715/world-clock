function updateTime() {
  //NewYork
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Jarabacoa
  let jarabacoaElement = document.querySelector("#jarabacoa");
  let jarabacoaDateElement = jarabacoaElement.querySelector(".date");
  let jarabacoaTimeElement = jarabacoaElement.querySelector(".time");
  let jarabacoaTime = moment().tz("America/Santo_Domingo");

  jarabacoaDateElement.innerHTML = jarabacoaTime.format("MMMM Do, YYYY");
  jarabacoaTimeElement.innerHTML = jarabacoaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
