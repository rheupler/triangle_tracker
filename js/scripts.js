var triangle = function(side1, side2, side3) {
  if (side1 >= (side2 + side3) || side2 >= (side1 + side3) || side3 >= (side1 + side2)) {
      return 'Not a triangle.'
  } else if (side1 === side2 && side2 === side3) {
      return 'Equilateral'
  } else if (side1 !== side2 && side2 !== side3) {
      return "Scalene"
  } else {
      return "Isosceles"
  };
};

$(function() {
  $("form#triangles").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangle(side1, side2, side3);

    $("#type").text(result);
    $("#results").show();

    event.preventDefault();
  });
});
//
// $(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if(!result) {
//       $(".not").text("not");
//     } else {
//       $(".not").text("");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
