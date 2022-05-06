// How to request data from an API using JavaScript to jQuery

// There are many ways to do this!
/// 1. jQuery$.ajax() function
/// 2. The Browser's fetch function
/// 3. Using the Axios http client library (google it!)

// creating a shortcut variable
// VARIABLES
const URL = "https://www.omdbapi.com/?apikey=a71b148a&t=";
let movieData, userInput;
// ELEMENT REFERENCES
const $title = $("#title");
const $year = $("#year");
const $rating = $("#rated");
const $ratings = $("#ratings");
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
      movieData = data;
      render();
      // returning data once called
      // $title.text(data.Title); //grab jq var
      // $year.text(data.Year);
      // $rating.text(data.Rated);
      // $("main").prepend(`<img src='${data.Poster}'>`);
      // $ratings.text(data.Ratings.Source);
    },
    function (error) {
      console.log("something is wrong");
      console.log(error);
    }
  );
}
function render() {
  $title.text(movieData.Title);
  $year.text(movieData.Year);
  $rated.text(movieData.Rated);
}
// handleGetData();
