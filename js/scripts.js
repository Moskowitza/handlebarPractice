var cast = {
    "characters":[
        {
            "name":"Dark Phoenix",
            "shortCode":"dark-phoenix",
            "realName":"Jean Grey",
            "team":"X-men"
        },
        {
            "name":"Spider-Man",
            "shortCode":"spider-man",
            "realName":"Peter Parker",
            "team": undefined
        },
        {
            "name":"Iron Man",
            "shortCode":"iron-man",
            "realName":"Tony Stark",
            "team":"Avengers"
        },
        {
            "name":"Cyclops",
            "shortCode":"cyclops",
            "realName":"Scott Summers",
            "team":"X-men"
        },
        {
            "name":"Hulk",
            "shortCode":"hulk",
            "realName":"Bruce Banner",
            "team":"Avengers"
        },
        {
            "name":"Moon Knight",
            "shortCode":"moon-knight",
            "realName":"Marc Spector",
            "team":undefined
        },
        {
            "name":"Daredevil",
            "shortCode":"daredevil",
            "realName":"Matt Murdock",
            "team": undefined
        }
    ]
}
$(document).ready(function(){
var characterTemplate = $("#character-template").html();

var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

$(".character-list-container").html(compiledCharacterTemplate(cast))

});