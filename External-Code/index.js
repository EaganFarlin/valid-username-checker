
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

function fde(){
  $("h1").fadeOut().fadeIn(1000);

}
fde()

// To Change The Minimum Length Of A Username, Change The Number In This Variable
let minimumUsernameLength = 3;

// To Change The Maximum Length Of A Username, Change The Number In This Variable
let maximumUsernameLength = 16;

$(document).ready(function(){
  // Get value on button click and show alert
  $("#myBtn").click(function(){
   
      let str = $("#myInput").val();
      let strLength = str.length;
      // alert(strLength);
  
// Adds A Initial Null Value To The Username
      let resetValue = $("#myInput").val("");

  // This Is The Valid Username Checker
  // This Section Checks For Invalid Characters And Spaces
  // Checks For Any Tilde Symbols Within The Username
  if (str.includes("~")) {

  
    swal("Try Agin!", "Your username is invalid. You can only have a username without any tilde symbols(~) in it.", "error");

    // Changes The Username Value To null
    resetValue

    // Checks For Any Grave Accents(`) Within The Username
  } else if (str.length===0) {
    swal("Try Agin!", "You must enter a username to continue.", "error");

    // Changes The Username Value To null
    resetValue

  } else if (str.includes("`")) {
    swal("Try Agin!", "Your username is invalid. You can only have a username without any grave accents(`) in it.", "error");
   
    
        // Changes The Username Value To null
        resetValue
    
      } else if (str.includes("@")) {
        swal("Try Agin!", "Your username is invalid. You can only have a username without any address signs(@) in it.", "error");
         
          // Changes The Username Value To null
          resetValue
    
          // Checks For Any Dollar Signs($) Within The Username
        } else if (str.includes("$")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any dollar signs($) in it", "error");
       
    
          // Changes The Username Value To Null
          resetValue
          // Checks For Any Ampersands(&) Within The Username
        } else if (str.includes("&")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any ampersands(&) in it.", "error");
         
    
          // Changes The Username Value To Null
          resetValue
    
          // Checks For Any Full Stops(.) Within The Username
        } else if (str.includes(".")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any full stops(.) in it.", "error");
     
    
          // Changes The Username Value To Null
        
          resetValue
          // Checks For Any Quetion Masrks(?) Within The Username
        } else if (str.includes("?")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any question marks(?) in it.", "error");
        
    
          // Changes The Username Value To Null
         
          resetValue
          // Checks For Any Colons(:) Within The username
        } else if (str.includes(":")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any colons(:) in it.", "error");
         
          // Changes The Username Value To Null
        
          resetValue
          // Checks For Any Semicolons(;) Within The Username
        } else if (str.includes(";")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any semicolons(;) in it.", "error");
        
    
          // Changes The Username Value To Null
     
    
          // Checks For Any Commas(,) Within The Username
        } else if (str.includes(",")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any commas(,) in it", "error");
        
    
          // Changes The Username Value To Null
          resetValue
    
          // Checks For Any Plus Signs(+) Within The Username
        } else if (str.includes("+")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any plus signs(+) in it.", "error");
        
    
          // Changes The Username Value To Null
          
          resetValue
          // Checks For Any Dashes(-) Within The Username
        } else if (str.includes("-")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username that without any dashes(-) in it.", "error");
      
    
          // Changes The Username Value To Null
        
    
          // Checks For Any Forward Slashes(/) Within The Username
        } else if (str.includes("/")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any forward slashes(/) in it.", "error");
          
    
          // Changes The Username Value To Null
          resetValue
    
          // Checks For Any Asterisks(*) Within The Username
        } else if (str.includes("*")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any asterisks(*) in it.", "error");
         
    
          // Changes The Username Value To Null
          resetValue
    
          // Checks For Any Equal Signs(=) Within The Username
        } else if (str.includes("=")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any equal signs(=) in it.", "error");
         
    
          // Changes The Username Value To Null
          resetValue
    
          // Checks For Any Space Within The Username
        } else if (str.includes(" ")) {
          swal("Try Agin!", "Your username is invalid. You can only have a username without any space in it.", "error");
         
    
          // Changes The Username Value To Null
          username = "null";
    
          // Checks For Any Brackets(<>) Within The Username
        } else if (str.includes("<")) {
          swal("Try Agin!", "You username is invalid. You can only have a username without any brackets(<>) in it.", "error");
        
    
          // Changes The Username Value To Null
          resetValue
    
          // Checks For Any Brackets(<>) Within The Username
        } else if (str.includes(">")) {
          swal("Try Agin!", "You username is invalid. You can only have a username without any brackets(<>) in it.", "error");
       
    
          // Changes The Username Value To Null
          resetValue
    
          // This Section Checks For Length Requirments
          // Checking If The Username Meets The Minimum Length Requirment
        } else if (strLength < minimumUsernameLength) {
          swal("Try Agin!", "Your username is invalid. You can only have a username between the length of " + minimumUsernameLength + "-" + maximumUsernameLength + ".", "error");

          
                // Changes The Username Value To Null
                resetValue
          
                // Checking If The Username Meets The Maximum Length Requirment
              } else if (strLength > maximumUsernameLength) {
                swal("Try Agin!", "Your username is invalid. You can only have a username between the length of " + minimumUsernameLength + "-" + maximumUsernameLength + ".", "error");
                
          
                // Changes The Username Value To Null
                
                resetValue
                // If All The Above Requirments Are Met, The Username With Go Through
              }
  else {
    // Welcomes The New User With It's New Username
    swal("Welcome ",str.toUpperCase(), "success");

  }
  });
});
