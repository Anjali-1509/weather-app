let city= document.getElementById("cityInput")
let tempElem= document.getElementById("temp")

let getCity =async()=>{
let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=329c7320eafa1d699cc77d2b81c8f956&units=metric`)
let data = await res.json()
tempElem.innerText= `${data.main.temp} °C`
console.log(data.main.temp)
}

document.getElementById("btn").addEventListener("click", getCity)