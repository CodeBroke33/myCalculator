function appendToDisplay(value) {
    var displayElement = document.getElementById('display');
    if (displayElement.innerText === '0' || displayElement.innerText === 'Error') {
      displayElement.innerText = value;
    } else {
      displayElement.innerText += value;
    }
  }

  function clearEntry() {
    var displayElement = document.getElementById('display');
    displayElement.innerText = '0';
  }

  function clearAll() {
    var displayElement = document.getElementById('display');
    displayElement.innerText = '0';
  }

  function calculateResult() {
    try {
      var displayElement = document.getElementById('display');
      displayElement.innerText = eval(displayElement.innerText);
    } catch (error) {
      displayElement.innerText = 'Error';
    }
  }