
function clickHandler(){
    let input = document.getElementById("input-field").value;
    document.getElementById("value-title").textContent = input;

    let length = document.getElementById("length");
    let lengthFeet = (input * 3.2808399).toFixed(3) 
    let lengthMeters = (input / 3.2808399).toFixed(3) 

    
    let volume = document.getElementById("volume");
    let volumeGallons = (input * 0.264172052).toFixed(3) 
    let volumeLiters = (input / 0.264172052).toFixed(3) 

    let weight = document.getElementById("weight");
    let weightPounds = (input * 2.20462262).toFixed(3) 
    let weightKgs = (input / 2.20462262).toFixed(3) 

    length.textContent = `${input} meters = ${lengthFeet} feet | ${input} feet = ${lengthMeters} meters`
    volume.textContent = `${input} liters = ${volumeGallons} gallons | ${input} gallons = ${volumeLiters} liters`
    weight.textContent = `${input} kilos = ${weightPounds} pounds | ${input} pounds = ${weightKgs} kilos`
}





