const cityName = document.querySelector('.cityName');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const btn = document.querySelector('#btn');

const api = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = 'e417df62e04d3b1b111abeab19cea714'
const searchCity = () => {
    cityName.addEventListener('input', () => {
        fetch(`${api}?q=${cityName.value}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                city.innerHTML = data?.name ? data.name : 'Город не найден'
                temp.innerHTML = data?.main ? Math.round(data.main.temp - 273) + '&deg' + 'C' : '..."'
                if (cityName.value === '') {
                        city.innerHTML = 'Введите город'
                }
            })

    })
}

searchCity()

//async await

// const url = 'https://jsonplaceholder.typicode.com/todos/1'
//  // const delay = (ms) => {
//  //    return new Promise((resolve) => {
//  //        setTimeout(() => {
//  //            resolve()
//  //        }, ms)
//  //    })
//  // }
//  //
//  // const fetchData = () => {
//  //     console.log('Start')
//  //     return delay(1000)
//  //         .then(() => fetch(url))
//  //         .then(resp => resp.json())
//  //
//  // }
//  // fetchData()
//  //    .then(data => console.log(data))
//  //    .catch((e) => console.log(e))
//  //    .finally(() => console.log('FINAL'))
//
// const fetchData = async () => {
//     try {
//         const req = await fetch(url)
//     } catch (e){
//         console.log(e)
//     } finally {
//         console.log('FINAL')
//     }
// }
//
// fetchData()
