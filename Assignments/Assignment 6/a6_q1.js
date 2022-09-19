/*
Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object.
*/
class Rectangle {
  constructor(s_length, s_breadth) {
    this.s_length = s_length;
    this.s_breadth = s_breadth;
  }
  area() {
    return this.s_length * this.s_breadth;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(`Area of the square is: ${square.area()}`);
