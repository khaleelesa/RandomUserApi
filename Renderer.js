class Renderer {
    constructor(dataArr) {
        this.dataArr = dataArr
    }
    renderUser() {
        let userdata = this.dataArr.userData
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        $(".user-container").empty()
        let newHTML = template({ userdata });
        $(".user-container").append(newHTML);
    }

    renderFriends() {
        let friendsdata = this.dataArr.friendsData
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        $(".friends-container").empty()
        let newHTML = template({ friendsdata });
        $(".friends-container").append(newHTML);
    }
    renderQuote() {
        let quotedata = this.dataArr.Quote.quote
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        $(".quote-container").empty()
        let newHTML = template(quotedata);
        $(".quote-container").append(newHTML);
    }

    renderPoki() {
        let pokidata = this.dataArr.pokiData
        const source = $('#poki-template').html();
        const template = Handlebars.compile(source);
        $(".pokemon-container").empty()
        let newHTML = template({ pokidata });
        $("#pokemon-container").append(newHTML);
    }

    renderAboutMe() {
        let meatdata = this.dataArr.aboutMe.meat
        const source = $('#aboutMe-template').html();
        const template = Handlebars.compile(source);
        $(".meat-container").empty()
        let newHTML = template({ meatdata });
        $(".meat-container").append(newHTML);
    }
}