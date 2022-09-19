// find the volumes
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return (3.14 * Math.pow(this.radius, 2) * this.height).toFixed(4);
  }
}
class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  getVolume() {
    return ((4 / 3) * 3.14 * Math.pow(this.radius, 3)).toFixed(4);
  }
}
class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return ((3.14 * Math.pow(this.radius, 2) * this.height) / 3).toFixed(4);
  }
}

let obj = new Cylinder(7, 5);
console.log(`Volume of Cylinder: ${obj.getVolume()}`);

obj = new Sphere(7);
console.log(`Volume of Sphere: ${obj.getVolume()}`);

obj = new Cone(14, 21);
console.log(`Volume of Cone: ${obj.getVolume()}`);
