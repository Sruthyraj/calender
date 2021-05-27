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
  let cls_Btn = document.querySelector(".cls-btn");
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

        cell.setAttribute("class", "cellitem");

        let td_Cell = document.querySelector(".cellitem");
        cell.setAttribute("onclick", 'nav( " ' + d + ' " )');

        let cellText = document.createTextNode(date);

        cell.append(cellText);

        row.appendChild(cell);

        date++;
      }
    }

    tbl.appendChild(row);
  }
  nav = (data) => {
    //popup
    model_Bg.classList.add("bg-active");
    model_Bg.classList.add("bg-active");
    cls_Btn.addEventListener("click", function () {
      model_Bg.classList.remove("bg-active");
      window.location.reload();
    });
    let listArray = document.querySelector(".list");

    let formField = document.querySelector(".form");
    let inputField = document.querySelector(".listItem");
    let btn = document.querySelector(".btn");

    btn.addEventListener("click", function () {
      let inputField = document.querySelector(".listItem");
      let items = localStorage.getItem(data);
      items = items ? items.split(",") : [];
      items.push(inputField.value);
      // console.log(items);
      localStorage.setItem(data, items);
      alert("event added sucessfully");
      model_Bg.classList.remove("bg-active");
      window.location.reload();
    });

    let allItems = localStorage.getItem(data);
    // console.log(typeof allItems);
    let newEle = [];

    // console.log(allItems);
    if (allItems) {
      // listArray.innerHTML = allItems;1
      newEle = allItems.split(",");
      // console.log(newEle);

      for (i = 0; i < newEle.length; i++) {
        let item = document.createElement("li");
        text = newEle[i];
        console.log(text);
        item.appendChild(document.createTextNode(newEle[i]));

        listArray.appendChild(item);
        let editBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        editBtn.innerHTML = "edit";
        editBtn.addEventListener(
          "click",
          (deleteFunction = () => {
            let value = prompt("event ?");

            let item = document.createElement("li");

            item.appendChild(document.createTextNode(value));
            let items = localStorage.getItem(data);
            items = items ? items.split(",") : [];
            items.push(value);
            // console.log(items);
            localStorage.setItem(data, items);

            listArray.appendChild(item);

            model_Bg.classList.remove("bg-active");
            alert("Event Updated Sucessfully");
            window.location.reload();
          })
        );
        item.appendChild(editBtn);
        deleteBtn.innerHTML = "X";
        item.addEventListener(
          "click",
          (deleteFunction = () => {
            listArray.removeChild(item);
            value = item.innerText;
            console.log(value);
          

            value = value.slice(0, -5);
            console.log(value);

            let items = localStorage.getItem(data);
            console.log(items);
            items = items ? items.split(",") : [];
            console.log(items);
            if (items.includes(value)) {
              items.splice(items.indexOf(value), 1);
            }

            localStorage.setItem(data, items);
          })
        );
        item.appendChild(deleteBtn);
      }
    }
  };
}
