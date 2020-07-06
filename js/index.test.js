const LinkedList = require("./index");

const list = new LinkedList();
list.append(12); console.log(listIsArray(list, [12]));
list.append(99); console.log(listIsArray(list, [12, 99]));
console.log(list.get(0) == 12);
console.log(list.get(1) == 99);
list.set(1, 37); console.log(listIsArray(list, [12, 37]));
console.log(list.get(0) == 12);
list.insert(1, 6); console.log(listIsArray(list, [12, 6, 37]));
list.remove(2); console.log(listIsArray(list, [12, 6]));

function listIsArray(list, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (list.get(i) != arr[i]) {
      return false;
    }
  }
  return true;
}
