const key = "d2b39b1ca7a292206e092ce5ee116501"

function viweData(dados){
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png" 
}

async function buscarCidade(cidade){ //utilizar async para alertar o código que iremos acessar um servidor

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json()).catch(Error => error) /*await serve para que o JS espere até que o servidor responda &&  /fetch() serve para acessarmos o servidor e as crases no inicio e fim permite que eu coloque uma variavel no meio do endereço da key */
                          
    changeBG(dados.weather[0].id);
    
    console.log(dados)
    viweData(dados)
}

function clickbutton() {

    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}

function changeBG(id_weather) {

    if(id_weather >= 200 && id_weather <= 531) {
        //tempo chuvoso
        document.body.style.backgroundImage = "url('Imagens/RainBG.png')";

    } else if (id_weather >= 600 && id_weather <= 622) {
        //Neve
        document.body.style.backgroundImage = "url('Imagens/WinterBG.jpg')";

    } else if (id_weather == 800) {
        //Tempo ensolarado
        document.body.style.backgroundImage = "url('Imagens/ClearSkyBG.jpg')";

    } else if(id_weather >= 801 && id_weather <= 804) {
        //tempo nublado
        document.body.style.backgroundImage = "url('Imagens/CloudyBG.png')";
    }
}
