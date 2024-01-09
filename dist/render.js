class Renderer {
    renderAllCities(cities){
        $("#citiesDIV").empty()
        const source = $("#cities-template").html()
        const template = Handlebars.compile(source)
        console.log(cities)
        let newHTML = template({cities})
        $("#citiesDIV").append(newHTML)
    }

    renderCity(city){
        const source = $("#city-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template(city)
        $("#cityDIV").append(newHTML)
    }


}
