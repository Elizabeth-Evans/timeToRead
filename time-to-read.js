
// function wordCount(str) {
//   var words = document.getElementsByTagName('body').split(" ");
//   var count = 0;
//   for (i = 0; i < words.length; i++) {
//     if (words[i] !== "") count += 1;
//   }
//
//   function timeToRead(str) {
//     var numberOfWords = str.split(" ").length;
//     var readTime = numberOfWords / 230;
//     console.log("it will take you approximately" + " " + (readTime) + " " +
//       "minutes to read that page");
//     return "it will take you approximately" + " " + (readTime) + " " +
//       "minutes to read that page";
//   }
// }
timeToRead(wordCount());

function wordCount() {
  var paras = document.getElementsByTagName('p');
  var text = "";
  for (var i = 0; i < paras.length; i++) {
    text += paras[i].innerHTML + " ";
  }
  return text
}

function timeToRead(str) {
  var numberOfWords = str.split(" ").length;
  var readTime = numberOfWords / 230;
  console.log("it will take you approximately" + " " + (readTime) + " " +
    "minutes to read that page");
  alert("it will take you approximately" + " " + (readTime) + " " +
    "minutes to read that page")
}

// function wordCount(str) {
//   var words = document.getElementsByTagName('p').split(" ");
//   function timeToRead(str) {
//     var numberOfWords = str.split(" ").length;
//     var readTime = numberOfWords / 230;
//     console.log("it will take you approximately" + " " + (readTime) + " " +
//       "minutes to read that page");
//     return "it will take you approximately" + " " + (readTime) + " " +
//       "minutes to read that page";
//   }
// }
