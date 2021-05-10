const userTest = new APIManager()

$(".container").on("click", "#load", function() {


    userTest.getPoki()
    userTest.getUser()
    userTest.getQuote()
    userTest.getMeat()


})

$(".container").on("click", "#display", function() {
    const rendTest = new Renderer(userTest.allData)
    rendTest.renderUser()
    rendTest.renderFriends()
    rendTest.renderQuote()
    rendTest.renderPoki()
    rendTest.renderAboutMe()
})