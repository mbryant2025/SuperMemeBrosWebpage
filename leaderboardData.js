let players = [
  { player: 'ashley', time: '53', date: '12/3/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'michael', time: '542', date: '12/5/21' },
  { player: 'ashley', time: '4', date: '12/3/21' },
  { player: 'ashley', time: '53', date: '12/3/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'ashley', time: '53', date: '12/3/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'ashley', time: '53', date: '12/3/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'ashley', time: '53', date: '12/3/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'michael', time: '54253', date: '12/5/21' },
  { player: 'michael', time: '189', date: '12/5/21' },
  { player: 'bob', time: '1859', date: '12/5/21' }
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key.charAt(0).toUpperCase() + key.slice(1));
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}


function convertTime(time) {
  let hours = parseInt(parseInt(time) / 3600);
  let minutes = parseInt(((parseInt(time) - hours * 3600) / 60));
  let seconds = parseInt(parseInt(time) % 60);
  
  let ret = "";

  if(hours > 0) {
    ret += hours + ":";
  }
  if(minutes < 10) {
    ret += "0" + minutes + ":";
  }
  else {
    ret += minutes + ":";
  }
  if(seconds < 10) {
    ret += "0" + seconds;
  }
  else {
    ret += seconds;
  }

  return ret;
}

players.sort(function(a,b) {
  return a.time - b.time
});

players = players.slice(0, 10);

for(let element of players) {
  element.time = convertTime(element.time);
}

let table = document.querySelector("table");
let data = Object.keys(players[0]);
generateTable(table, players);
generateTableHead(table, data);
