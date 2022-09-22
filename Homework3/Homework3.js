/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function loadTable(tableInfo) {
  const q1 = document.createElement("div");
  q1.innerText = "Question 1";
  const table = document.createElement("table");
  let tr = document.createElement("tr");
  const tbody = document.createElement("tbody");
  let row = "";

  for (var i = 0; i < tableInfo.tableHeader.length; i++) {
    tr.innerHTML += "<th>" + tableInfo.tableHeader[i] + "</th>";
  }

  for (var i = 0; i < tableInfo.tableContent.length; i++) {
    row +=
      "<tr>" +
      "<td>" +
      tableInfo.tableContent[i]["Student Name"] +
      "</td>" +
      "<td>" +
      tableInfo.tableContent[i].Age +
      "</td>" +
      "<td>" +
      tableInfo.tableContent[i].Phone +
      "</td>" +
      "<td>" +
      tableInfo.tableContent[i].Address +
      "</td>" +
      "<td>";
  }

  tbody.appendChild(tr);
  tbody.innerHTML += row;
  table.append(tbody);
  q1.append(table);
  document.body.appendChild(q1);
}

loadTable(tableInfo);

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
//ordered list
let ol = document.querySelector("#ol");
let item = list.map((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  return li;
});
ol.append(...item);

//unordered list

let ul = document.querySelector("#ul");

let listItem = list.map((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  return li;
});
ul.append(...listItem);

/*
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function dropDown(dropDownList) {
  const q3 = document.createElement("div");
  q3.innerText = "Question 3";
  const select = document.createElement("select");

  var dropDowns = dropDownList.map(({ value, content }) => {
    let option = document.createElement("option");
    option.innerText += content;
    option.value = value;
    select.appendChild(option);
  });

  q3.appendChild(select);
  document.body.appendChild(q3);
}

dropDown(dropDownList);
