document.getElementById("btn-result").addEventListener("click", function () {
  // Check if all fields are filled
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var age = document.getElementById("age").value;
  var actLvl = document.getElementById("activity-level").value;
  var gender = document.getElementById("gender").value;
  if (height === "" || weight === "" || age === "" || actLvl === "") {
    alert("Please fill in all fields.");
    return;
  }
  // BMI Calculate
  var bmi = weight / Math.pow(height / 100, 2);
  var bmiNum = document.getElementById("bmi-result-num");
  var bmiState = document.getElementById("bmi-result-state");
  var bmiBox1 = document.getElementById("box1");
  var bmiBox2 = document.getElementById("box2");
  bmiNum.innerHTML = Math.round(bmi);
  bmiBox1.style.display = "block";
  bmiBox2.style.display = "block";

  switch (true) {
    case bmi < 18.5:
      bmiState.innerHTML = "Underweight";
      bmiNum.style.color = "blue";
      bmiState.style.color = "blue";
      bmiBox1.style.border = "1px solid #3b82f6";
      break;
    case bmi >= 18.5 && bmi < 24.9:
      bmiState.innerHTML = "Normal";
      bmiNum.style.color = "green";
      bmiState.style.color = "green";
      bmiBox1.style.border = "1px solid #10b981";
      break;
    case bmi >= 25 && bmi < 29.5:
      bmiState.innerHTML = "Overweight";
      bmiNum.style.color = "orange";
      bmiState.style.color = "orange";
      bmiBox1.style.border = "1px solid #f59e0b";
      break;
    case bmi >= 30:
      bmiState.innerHTML = "Obesity";
      bmiNum.style.color = "red";
      bmiState.style.color = "red";
      bmiBox1.style.border = "1px solid #ef4444";
      break;
  }

  // BMR Calculate
  if (gender === "male") {
    var bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === "female") {
    var bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  document.getElementById("bmr-result").innerHTML =
    `${Math.round(bmr)} kcal/day`;

  // TDEE Calculate
  let multiplier;
  switch (actLvl) {
    case "sedentary":
      multiplier = 1.2;
      break;
    case "light":
      multiplier = 1.375;
      break;
    case "moderate":
      multiplier = 1.55;
      break;
    case "active":
      multiplier = 1.725;
      break;
    case "very-active":
      multiplier = 1.9;
      break;
    default:
      multiplier = 1.2;
  }
  var tdee = bmr * multiplier;
  document.getElementById("tdee-result").innerHTML =
    `${Math.round(tdee)} kcal/day`;

  // Maintain - Lose - Gain Calculate
  document.getElementById("maintain-weight").innerHTML =
    `${Math.round(tdee)} kcal/day`;
  document.getElementById("lose-weight").innerHTML =
    `${Math.round(tdee - 500)} kcal/day`;
  document.getElementById("gain-weight").innerHTML =
    `${Math.round(tdee + 500)} kcal/day`;
});
