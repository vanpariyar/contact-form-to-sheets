function doGet(e = ''){
  var sheet = SpreadsheetApp.getActiveSheet();
  return ContentService
  .createTextOutput('thank you bro :- you can contact me -> vanpariyar.github.io');
}
function doPost(e){
  var sheet = SpreadsheetApp.getActiveSheet();
  var d = new Date();
  var currentTime = d.toLocaleString();
  
  sheet.appendRow([currentTime, e.parameter.name, e.parameter.surname, e.parameter.email, e.parameter.need , e.parameter.message]);
  
  var result = {
    message: "SuceessFully entered"
  }
  return ContentService
  .createTextOutput(JSON.stringify(result));
  
}
function myFunction() {
 var contact = '';  
}