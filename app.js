// How to request data from an API using JavaScript to jQuery

// There are many ways to do this!
/// 1. jQuery$.ajax() function
/// 2. The Browser's fetch function
/// 3. Using the Axios http client library (google it!)

// creating a shortcut variable
// VARIABLES
const URL = "https://www.omdbapi.com/?apikey=a71b148a&t=";
// ELEMENT REFERENCES
const $title = $("#title");
const $year = $("#year");
const $rating = $("#rated");
const $rating1 = $("#ratings1");
const $rating2 = $("#ratings2");
const $form = $("form");
const $input = $(`input[type='text']`);

// EVENT LISTENERS
$form.on("submit", handleGetData);
// FUNCTIONS

function handleGetData(evt) {
  evt.preventDefault();
  const userInput = $input.val();

  $.ajax(URL + userInput).then(
    function (data) {
      console.log("Movie data is ready");
      console.log(data);
      // returning data once called
      $title.text(data.Title); //grab jq var
      $year.text(data.Year);
      $rating.text(data.Rated);
      $("main").prepend(`<img src='${data.Poster}'>`);
      $rating1.text(data.Ratings[0].Source);
      $rating2.text(data.Ratings[0].Value);
    },
    function (error) {
      console.log("something is wrong");
      console.log(error);
    }
  );
}
// handleGetData();
