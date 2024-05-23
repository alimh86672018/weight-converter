document.getElementById("lbsInput").addEventListener("input", function (e) {
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs * 453.592;

  document.getElementById("kgOutput").innerHTML = lbs * 0.453592;

  document.getElementById("ozOutput").innerHTML = lbs * 16;
});
