// Handlebars.registerHelper("formatName", function(prop1, prop2) {
//   return new Handlebars.SafeString(
//     "It's <strong>" +
//       prop1 +
//       "</strong> but my friends call me<strong>" +
//       prop2 +
//       "</strong>"
//   );
// });
// Handlebars.registerHelper("formatPhoneNumber", function(prop) {
//   if (prop) {
//     var phone = prop.toString();
//     return (
//       "(" +
//       phone.subStr(0, 3) +
//       ") " +
//       phone.substr(3, 3) +
//       "-" +
//       phone.substr(6, 4)
//     );
//   }
// });
console.log("script loaded");

$(document).ready(function() {
  event.preventDefault();
  var characterTemplate = $("#character-template").html();
  var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

  $.ajax("./data/cast.js").done(function(cast) {
    console.log(cast);
  });
  // $(".character-list-container").html(compiledCharacterTemplate(cast))
});
