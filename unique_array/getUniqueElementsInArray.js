function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// usage example:
var a = ["MAC", "WINDOWS", "WINDOWS", "WINDOWS", "WINDOWS"];
var unique = a.filter(onlyUnique);

console.log(unique); // ['a', 1, 2, '1']
