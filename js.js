function temperatureConverter(valueNum){
    valueNum=parseFloat(valueNum);
    document.getElementById('outputCelsius').innerHTML= (valueNum-32)/1.8;
}