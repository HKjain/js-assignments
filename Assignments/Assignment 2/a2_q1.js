// Q1 - Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

function checkTriangleType(a, b, c) {
  if (a + b <= c && b + c <= a && a + c <= b)
    return "No triangle can be formed!";
  if (a == b && b == c && c == a) return "Equilateral triangle!";
  else if (a == b || b == c || a == c) return "Isosceles triangle!";
  else return "Scalene triangle!";
}

console.log(checkTriangleType(5, 6, 7));
console.log(checkTriangleType(5, 6, 6));
console.log(checkTriangleType(6, 6, 6));
