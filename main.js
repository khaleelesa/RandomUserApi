const userTest = new APIManager()
const rendTest = new Renderer(userTest.allData)

$(".container").on("click", "#load", function() {


    userTest.getPoki()
    userTest.getUser()
    userTest.getQuote()
    userTest.getMeat()


})

$(".container").on("click", "#display", function() {

    rendTest.renderUser()
    rendTest.renderFriends()
    rendTest.renderQuote()
    rendTest.renderPoki()
    rendTest.renderAboutMe()
})