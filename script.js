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
  let model_Bg = document.querySelector(".model-bg");
  let cls_btn = document.querySelector(".cls-btn");
  let firstDay = new Date(year, month).getDay();
  // console.log(firstDay);
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  // console.log(new Date(year, month, 32).getDate());
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
        let d = new Date(year, month, date);
        // console.log(d);

        // let data=document.getElementsByTagName("td").innerHTML=d
        // cell.setAttribute("value", d);

        // document.getElementsByTagName("td").innerHTML=d
        cell.setAttribute("class", "cellitem");

        cell.setAttribute("onclick", 'nav( " ' + d + ' " )');
        let td_cell = document.querySelector(".cellitem");

        // \"(canLaunch(\'' + v.LibraryItemName  + '\'))"\
        // console.log(data);

        let cellText = document.createTextNode(date);

        cell.append(cellText);

        row.appendChild(cell);

        date++;
      }
    }

    tbl.appendChild(row);
  }
  nav = (data) => {
    // let d=document.getElementsByTagName("td").value
    // alert("working"); //need to complete!!!!
    //popup
    model_Bg.classList.add("bg-active");
    console.log(data);
    cls_btn.addEventListener('click', function () {
        model_Bg.classList.remove("bg-active");
    })
  };

  
}
