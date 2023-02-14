fetch("http://localhost:2325/produtos")
  .then(response => response.json())
  .then(data => montaTabelaProdutos(data));

const newTable = () => document.createElement('table');
const newTHead = () => document.createElement('thead');
const newTBody = () => document.createElement('tbody');
const newTH = () => document.createElement('th');
const newTR = () => document.createElement('tr');
const newTD = () => document.createElement('td');

const createTHead = (array) => {
  const tHead = newTHead();
  const tr = newTR();
  for (string of array) {
    const th = newTH();
    th.innerHTML = string;
    tr.appendChild(th);
  }
  tHead.appendChild(tr);
  return tHead;
}

const createTBody = (obj) => {
  const tBody = newTBody();
  obj.forEach(element => {
    const tr = newTR();
    for (const elemento in element) {
      const td = newTD();
      td.innerHTML = element[elemento];
      tr.appendChild(td);
    }
    tBody.appendChild(tr);
  });
  return tBody;
}

const tblHeader = (obj) => {
  const header = [];
  for (string in obj) {
    header.push(string);
  }
  return header;
}

const montaTabelaProdutos = (obj) => {
  const produtos = document.getElementById('produtos');
  const table = newTable();
  const header = tblHeader(obj[0]);
  table.appendChild(createTHead(header));
  table.appendChild(createTBody(obj));
  table.className = 'table table-striped table-hover'
  produtos.appendChild(table);
}
