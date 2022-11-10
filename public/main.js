
if (document.readyState !== "loading") {
    initializeCode();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCode();
    });
  }
  
function initializeCode() {
    const textInput = document.getElementById('input-text');
    const submitText = document.getElementById('submit-data');
    submitText.addEventListener('click', function() {
        var textValue = textInput.value;
        console.log(textValue)
        fetch('http://localhost:3000/list', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({"text": textValue})
        })
        .then(response => response)
        .then(data => {
            console.log(data);
        })
    });
  }
