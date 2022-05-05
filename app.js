// How to request data from an API using JavaScript to jQuery

// There are many ways to do this!
/// 1. jQuery$.ajax() function
/// 2. The Browser's fetch function
/// 3. Using the Axios http client library (google it!)

// creating a shortcut variable
const URL = "https://www.omdbapi.com/?apikey=a71b148a&t=Die+Hard";
function handleGetData() {
  $.ajax(URL).then(
    function (data) {
      console.log("Movie data is ready");
      console.log(data);
    },
    function (error) {
      console.log("something is wrong");
      console.log(error);
    }
  );
}
