// Adds A Initial Null Value To The Username
let username = "null";

// To Change The Minimum Length Of A Username, Change The Number In This Variable
let minimumUsernameLength = 3;

// To Change The Maximum Length Of A Username, Change The Number In This Variable
let maximumUsernameLength = 16;

// Ask The User What Username They Want, Then Runs The Valid Username Checker
function runUsernameChecker() {

  // Ask The User What Username They Want
  username = prompt("What is your username?", "Insert username here.");

  // To Change The Welcome Message, Please Change The Value Of The Variable Below
  welcomeMessage = "Welcome " + username + "!";

  let usernameLength = username.length;

  // This Is The Valid Username Checker
  // This Section Checks For Invalid Characters And Spaces
  // Checks For Any Tilde Symbols Within The Username
  if (username.includes("~")) {

    alert("Your username is invalid. You can only have a username without any tilde symbols(~) in it. Please try again.");

    // Changes The Username Value To null
    username = "null";

    // Checks For Any Grave Accents(`) Within The Username
  } else if (username.includes("`")) {

    alert("Your username is invalid. You can only have a username without any grave accents(`) in it. Please try again.");

    // Changes The Username Value To null
    username = "null";

  } else if (username.includes("@")) {

      alert("Your username is invalid. You can only have a username without any address signs(@) in it. Please try again.");

      // Changes The Username Value To null
      username = "null";

      // Checks For Any Dollar Signs($) Within The Username
    } else if (username.includes("$")) {

      alert("Your username is invalid. You can only have a username without any dollar signs($) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Ampersands(&) Within The Username
    } else if (username.includes("&")) {

      alert("Your username is invalid. You can only have a username without any ampersands(&) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Full Stops(.) Within The Username
    } else if (username.includes(".")) {

      alert("Your username is invalid. You can only have a username without any full stops(.) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Quetion Masrks(?) Within The Username
    } else if (username.includes("?")) {

      alert("Your username is invalid. You can only have a username without any question marks(?) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Colons(:) Within The username
    } else if (username.includes(":")) {

      alert("Your username is invalid. You can only have a username without any colons(:) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Semicolons(;) Within The Username
    } else if (username.includes(";")) {

      alert("Your username is invalid. You can only have a username without any semicolons(;) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Commas(,) Within The Username
    } else if (username.includes(",")) {

      alert("Your username is invalid. You can only have a username without any commas(,) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Plus Signs(+) Within The Username
    } else if (username.includes("+")) {

      alert("Your username is invalid. You can only have a username without any plus signs(+) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Dashes(-) Within The Username
    } else if (username.includes("-")) {

      alert("Your username is invalid. You can only have a username that without any dashes(-) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Forward Slashes(/) Within The Username
    } else if (username.includes("/")) {

      alert("Your username is invalid. You can only have a username without any forward slashes(/) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Asterisks(*) Within The Username
    } else if (username.includes("*")) {

      alert("Your username is invalid. You can only have a username without any asterisks(*) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Equal Signs(=) Within The Username
    } else if (username.includes("=")) {

      alert("Your username is invalid. You can only have a username without any equal signs(=) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Space Within The Username
    } else if (username.includes(" ")) {

      alert("Your username is invalid. You can only have a username without any space in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Brackets(<>) Within The Username
    } else if (username.includes("<")) {

      alert("You username is invalid. You can only have a username without any brackets(<>) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checks For Any Brackets(<>) Within The Username
    } else if (username.includes(">")) {

      alert("You username is invalid. You can only have a username without any brackets(<>) in it. Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // This Section Checks For Length Requirments
      // Checking If The Username Meets The Minimum Length Requirment
    } else if (usernameLength < minimumUsernameLength) {

      alert("Your username is invalid. You can only have a username between the length of " + minimumUsernameLength + "-" + maximumUsernameLength + ". Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // Checking If The Username Meets The Maximum Length Requirment
    } else if (usernameLength > maximumUsernameLength) {

      alert("Your username is invalid. You can only have a username between the length of " + minimumUsernameLength + "-" + maximumUsernameLength + ". Please try again.");

      // Changes The Username Value To Null
      username = "null";

      // If All The Above Requirments Are Met, The Username With Go Through
    } else {

      // Welcomes The New User With It's New Username
      alert(welcomeMessage);

    }

  }
