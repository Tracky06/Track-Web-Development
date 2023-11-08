function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }

  function redirect() {
    alert("Redirecting to appropriate page!");
  }

  function newFunction() {
    const usernameContainer = document.getElementById("name");
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

function newFunction2() {
  const usernameContainer = document.getElementById("name");
  const passwordContainer = document.getElementById("pass");


  let value1 = usernameContainer.value.trim();
  let value2 = passwordContainer.value;

  if (value1 !== '' && value2 !== '') {
      redirect();
  }
  else {
      alert("Complete entry requirements to proceed");
  }
}
