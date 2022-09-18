const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Question 1
// Given the array, implement a function for generating a new array
// which doubles the quantity and price in each object.
const itemsObject1 = itemsObject.map((ele) => {
  ele.quantity = ele.quantity * 2;
  ele.price *= 2;

  return ele;
});

console.log(itemsObject1);

// Given the array, implement a function for generating
// a new array which contains item quantity > 2 and price > 300 only.
const itemsObject2 = itemsObject.filter((ele) => {
  return ele.quantity > 2 && ele.price > 300;
});
console.log(itemsObject2);

// Given the array, implement a function to calculate the total value of the items.
const itemsObject3 = itemsObject.reduce((prev, cur) => {
  return prev + cur.price;
}, 0);
console.log(itemsObject3);

/*
  Question 2
  Given the string, implement a function to remove all the non-alphabet
  characters and extra space in the string and convert the string to all lowercase.
  */
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const expectedString = string.trim().toLowerCase().split(/[ -]+/).join(" ");
console.log(expectedString);

/*
  Question 3
  Implement a function to merge two arrays of objects on uuid, 
  but first has uuid and name, second has uuid and role. With the not existing property, fill with null. 
  Sort according to uuid after merge.
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

// const a3 = a1.map(t1 => ({...t1, ...a2.find(t2 => t2.id === t1.id)}))

function merge(first, second) {
  const result = [];
  for (const item of first) {
    const index = second.findIndex((i) => i.uuid === item.uuid);
    if (index !== -1) {
      const { uuid, name, role } = { ...item, ...second[index] };
      result.push({ uuid, name, role });
    } else {
      const { uuid, name } = item;
      result.push({ uuid, name, role: null });
    }
  }

  return result.sort((a, b) => a.uuid - b.uuid);
}

console.log(merge(first, second));
