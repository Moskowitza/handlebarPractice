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

$(document).ready(function() {
  var characterTemplate = $("#character-template").html();
  console.log(characterTemplate);

  var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
  console.log(compiledCharacterTemplate);
  $(".character-list-container").html(compiledCharacterTemplate(cast));
  console.log(cast.characters);
});
