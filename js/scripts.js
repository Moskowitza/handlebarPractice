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
            "team":"none"
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
        }
    ]
}
$(document).ready(function(){
var characterTemplate = $("#character-template").html();

var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

$(".character-list-container").html(compiledCharacterTemplate(cast.characters[2]))

});