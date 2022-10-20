let str = "my name is harsh kawadia";
// a
console.log(str.toUpperCase());
// b
console.log(str[0].toUpperCase() + str.slice(1));
// c
let str2 = "MY NAME IS HARSH KAWADIA";
console.log(str2.toLowerCase());
// d
let str3 = "hellothere";
const frontPart = str3.slice(0, str3.length / 2);
const endPart = str3.slice(str3.length / 2);
str3 = endPart + frontPart;
console.log(str3);
// e
let str4 = "this is a string where characters can repeat";
let map = {};
for (let i = 0; i < str4.length; i += 1) {
  const ch = str4[i];
  if (map[ch]) map[ch] += 1;
  else map[ch] = 1;
}
for (const key in map) {
  if (map[key] <= 1) {
    delete map[key];
  }
}
console.log(map);
// f
let str5 = "This is a trial string";
let str6 = "";
for (let i = str5.length - 1; i >= 0; i--) {
  const ch = str5[i];
  str6 += ch;
}
console.log(str6);
