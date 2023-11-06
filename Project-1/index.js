function myFunction() {
    const usernameContainer = document.getElementById("username");
    const passwordContainer = document.getElementById("pass");


    let value1 = usernameContainer.value.trim();
    let value2 = passwordContainer.value;

    if (value1 !== '' && value2 !== '') {
        alert("Login successful")
    }
    else {
        alert("Complete login requirements to login")
    }
}

function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }

  function newFunction() {
    alert("Leaving current page!");
  }