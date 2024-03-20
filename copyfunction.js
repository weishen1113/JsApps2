function copyText(inputId) {
    // Get the text field
    var copyText = document.getElementById(inputId);
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  function myFunction() {
    copyText("myInput");
}

function myFunction2() {
    copyText("myInput2");
}

function myFunction3() {
  copyText("myInput6");
}