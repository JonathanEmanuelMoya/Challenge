//async await para obtener datos del JSON
async function obtenerDatos() {
    const response = await fetch("/challenge-front2022/carsJSON.json");
    const responseJson = await response.json();

    console.log(responseJson);
    for (const carKey in responseJson["cars"]) {
        console.log(responseJson["cars"][carKey])
        for (const letter in responseJson["cars"][carKey]) {
            console.log(responseJson["cars"][carKey][letter])
        }
    }
}

obtenerDatos();


