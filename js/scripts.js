function add(firstName, lastName, favFood, favMusic, dob, favoriteColor)  {
  return firstName + " " + lastName + " " + favFood + " " + favMusic + " " + dob + " " + favoriteColor;
}


$(document).ready(function() {
  $("form#survey-1").submit(function(event) {
    event.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const favFood = $("#favFood").val();
    const favMusic = $("input:radio[name=music]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();
    const result = add(firstName, lastName, favFood, favMusic, dob, favoriteColor);
    $("#output").text(result);
  });
});