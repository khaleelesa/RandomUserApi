//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.allData = {}

    }
    getUser() {
        let userData = {}
        let frinedsData = []
        $.get("https://randomuser.me/api/?results=7", function(data, status) {
            userData.firstName = data.results[0].name.first
            userData.lastName = data.results[0].name.last
            userData.city = data.results[0].location.city
            userData.state = data.results[0].location.state
            userData.img = data.results[0].picture.thumbnail
            for (let i = 1; i < data.results.length; i++) {
                frinedsData.push({ firstName: data.results[i].name.first, lastName: data.results[i].name.last })
            }
        });
        this.allData.userData = userData
        this.allData.friendsData = frinedsData
    }
    getQuote() {
        let quote = {}
        $.get("https://api.kanye.rest/", function(data, status) {
            quote.quote = data.quote
        });
        this.allData.Quote = quote

    }
    getPoki() {
        let poki = {}
        $.get("https://pokeapi.co/api/v2/pokemon/" + parseInt((Math.random() * 20) + 1), function(data, status) {
            poki.name = data.name
            poki.img = data.sprites.front_default
        });
        this.allData.pokiData = poki

    }

    getMeat() {
        let meat = {}

        $.get("https://baconipsum.com/api/?type=meat-and-filler", function(data, status) {
            let ran = parseInt((Math.random() * data.length))
            meat.meat = data[ran]
        });
        this.allData.aboutMe = meat
    }





}



// $.get("https://randomuser.me/api/?results=7", function(data, status) {
//     frindsData.data = data
//     for (let n of frindsData.data.results)
//         console.log(n.name)
// });