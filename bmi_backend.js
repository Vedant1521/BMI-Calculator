const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height < 0 || height === "" || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi<18.6){
          results.innerHTML=`BMI is ${bmi} and the person is Under-Weight`
    }
    else if(bmi>18.6 && bmi<24.9){
        results.innerHTML=`BMI is ${bmi} and the person is Normal-Weight`
    }
    else{
        results.innerHTML=`BMI is ${bmi} and the person is Over-Weight`
    }
  }
});
