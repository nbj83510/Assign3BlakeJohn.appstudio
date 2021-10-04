let city = []
let i = 0 
let addCities = true
while (addCities == true) {
    newCity = ""
    newCity = prompt("Enter new city name")
    city.push(newCity.toLowerCase())
    addCities = confirm("Click Cancel to stop. Otherwise, click OK to continue.")
}

while (i < city.length) {
    console.log(city[i].toLowerCase())
    i++
}
