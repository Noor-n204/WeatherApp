class CityWeather{

    constructor(){
        this.data = []
        this.counter = 1
    }

    async getAllCities() {
      try{
          const response = await $.get('/weather/citiesWeather')
          this.data = response;
      }catch(err){
        console.error(err);
        throw new Error(`Failed to get data`);
      }
      }


      async getCityData(cityName) {
        try{
          const response = await $.get(`/weather/${cityName}`)
          this.data=response
          this.data.count = this.counter
          this.counter++
        }catch(err){
          console.error(err);
          throw new Error(`Failed to get data for ${cityName}`);
        }

      }


      async saveCityData(city) {
        try {
          await fetch('/weather/city', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(city),
          });
        } catch (err) {
          console.error(err);
          throw new Error(`Failed to save data for ${cityName}`);
        }
      }
    
      async deleteCity(cityName) {
        try {
          await fetch(`/weather/${cityName}`, {
            method: 'DELETE',
          });
        } catch (error) {
          console.error(error);
          throw new Error(`Failed to delete data for ${cityName}`);
        }
      }
    }
    