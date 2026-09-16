document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const rollno = document.getElementById("rollno").value.trim();
  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value; // fixed id
  const age = document.getElementById("age").value;
  const gender =
    document.querySelector('input[name="gender"]:checked')?.value || "";
  const dob = document.getElementById("dob").value;
  const mobile = document.getElementById("mobile").value.trim();
  const city = document.getElementById("city").value;
  const terms = document.getElementById("terms").checked; // use checked
  const review = document.getElementById("review").value.trim();

  // Simple validations
  if (!rollno || rollno.length < 2) {
    alert("Enter a valid roll number (min 2 characters).");
    return;
  }

  if (!name) {
    alert("Username is required.");
    return;
  }

  if (!email) {
    alert("Email is required.");
    return;
  }
  if (!gender) {
    alert("Please select gender.");
    return;
  }

  if (!city) {
    alert("Please select a city.");
    return;
  }

  if (!terms) {
    alert("You must agree to the terms.");
    return;
  }

  document.getElementById("output").innerHTML = `
    <p><strong>Rollnumber:</strong> ${rollno}</p>
    <p><strong>userName:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>gender:</strong> ${gender}</p>
    <p><strong>dob:</strong> ${dob}</p>
    <p><strong>mobile:</strong> ${mobile}</p>
    <p><strong>city:</strong> ${city}</p>
    <p><strong>Terms:</strong> ${terms ? "Accepted" : "Not accepted"}</p>
    <p><strong>review:</strong> ${review}</p>
  `;
});

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const text = document.getElementById("strengthText");
  const bar = document.getElementById("strengthBar");

  let strength = 0;
  if (password.length > 0) strength += 20;
  if (password.length >= 8) strength += 30;
  if (/[A-Z]/.test(password)) strength += 20;
  if (/[0-9]/.test(password)) strength += 20;
  if (/[^0-9a-zA-Z]/.test(password)) strength += 10;

  bar.style.width = strength + "%";

  if (strength < 50) {
    bar.style.backgroundColor = "red";
    text.textContent = "Strength:Weak";
  } else if (strength < 80) {
    bar.style.backgroundColor = "orange";
    text.textContent = "Strength:Medium";
  } else if (strength < 100) {
    bar.style.backgroundColor = "Green";
    text.textContent = "Strength:Very Strong";
  } else {
    bar.style.backgroundColor = "Green";
    text.textContent = "Strength: Strong";
  }
}
