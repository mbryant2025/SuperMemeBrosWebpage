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

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var allText;
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    return allText;
}

function parseData(input) {

  let arr = input.split("[");

  let formattedArr = [];

  for(let entry of arr) {
      if(entry == '') {
          continue;
      }
      while(entry.indexOf('\"') > -1) {
          entry = entry.replace('\"', '');
      }
      while(entry.indexOf(']') > -1) {
          entry = entry.replace(']', '');
      }
      formattedArr.push(entry);
  }

  let subArrs = []

  for(let entry of formattedArr) {
      subArrs.push(entry.split(", ").slice(0,3));
  }

  let dicts = [];

  for(let entry of subArrs) {
      let dict = {player: entry[0], score: entry[1], date: entry[2]};
      dicts.push(dict);
  }

  return dicts;
}




/*let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    //document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","fetchData.py",true);
xmlhttp.send();*/


let players = parseData(readTextFile("data.txt"));






let table = document.querySelector("table");
let data = Object.keys(players[0]);
generateTableHead(table, data);
generateTable(table, players);
