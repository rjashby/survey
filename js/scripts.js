function add(firstName, lastName, favFood, favMusic, dob, favoriteColor)  {
  return firstName + " " + lastName + " " + favFood + " " + favMusic + " " + dob + " " + favoriteColor;
}


$(document).ready(function() {
  $("form#survey-1").submit(function(event) {
    event.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const favFood = $("#favFood").val();
    const favMusic = $("input:radio:checked").val();
    // const favMusic = $("input:radio[name=music]:checked").val();
    // const favMusic = document.getElementById("survey-1").elements[3].value;
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();
    const result = add(firstName, lastName, favFood, favMusic, dob, favoriteColor);
    $("#output").text(result);
  });
});