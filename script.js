let today = new Date();
// console.log(today);
let cMonth = today.getMonth();
let cYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let monthAndYear = document.getElementById("monthAndYear");
Cal(cMonth, cYear);

function nxt() {
  ctYear = cMonth === 11 ? cYear + 1 : cYear;
  cMonth = (cMonth + 1) % 12;
  Cal(cMonth, cYear);
}

function pre() {
  cYear = cMonth === 0 ? cYear - 1 : cYear;
  cMonth = cMonth === 0 ? 11 : cMonth - 1;
  Cal(ctMonth, cYear);
}

function jump() {
  cYear = parseInt(selectYear.value);
  cMonth = parseInt(selectMonth.value);
  Cal(cMonth, cYear);
}

function Cal(month, year) {
  let firstDay = new Date(year, month).getDay();
  // console.log(firstDay);
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  console.log(new Date(year, month, 32).getDate());
  // console.log(daysInMonth);

  let tbl = document.getElementById("calendar-body");

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        cell.setAttribute("onClick", "nav();");
        let cellText = document.createTextNode(date);

        cell.append(cellText);

        row.appendChild(cell);
        date++;
      }
    }

    tbl.appendChild(row);
  }
  nav = () => {
    alert("working");//need to complete!!!!
  };
}
