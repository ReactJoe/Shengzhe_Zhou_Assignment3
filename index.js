// q1
let tableInfo = {
  // add operate
  tableHeader: ['Student Name', 'Age', 'Phone', 'Address', 'Operate'],
  tableContent: [
    {
      'Student Name': 'John',
      Age: 19,
      Phone: '455 - 983 - 0903',
      Address: '123 Ave, San Francisco, CA, 94011',
    },
    {
      'Student Name': 'Alex',
      Age: 21,
      Phone: '455 - 983 - 0912',
      Address: '456 Rd, San Francisco, CA, 94012',
    },
    {
      'Student Name': 'Josh',
      Age: 22,
      Phone: '455 - 345 - 0912',
      Address: '789 Dr, Newark, CA, 94016',
    },
    {
      'Student Name': 'Matt',
      Age: 23,
      Phone: '321 - 345 - 0912',
      Address: '223 Dr, Sunnyvale, CA, 94016',
    },
  ],
}
//get the thead
let theader = document.querySelector('#theader')
// get the tbody
let tbody = document.querySelector('tbody')
//get add btn
let addPerson = document.querySelector('#add-person')
// get input value
let uname = document.querySelector('#uname')
let age = document.querySelector('#age')
let tel = document.querySelector('#tel')
let addr = document.querySelector('#addr')

// render
function render() {
  //init table
  theader.innerHTML = ''
  tbody.innerHTML = ''
  //render thead
  tableInfo.tableHeader.forEach((item) => {
    let th = document.createElement('th')
    th.innerHTML = item
    theader.appendChild(th)
  })

  // rendert tbody
  tableInfo.tableContent.forEach((item, index) => {
    let tr = document.createElement('tr')
    //add id propoty to locate the position in arr when click delete
    tr.innerHTML = `  
        <td>${item['Student Name']}</td>
        <td>${item.Age}</td>
        <td>${item.Phone.split(' ').join('')}</td>
        <td>${item.Address}</td> 
        <td><button id = ${index}>Delete</button></td>`
    tbody.appendChild(tr)
  })
}
render()

//add button
addPerson.addEventListener('click', () => {
  console.log(11)
  //push new data to arr
  tableInfo.tableContent.push({
    'Student Name': uname.value,
    Age: age.value,
    Phone: tel.value,
    Address: addr.value,
  })
  //re- render
  render()
  //clear text
  uname.value = age.value = tel.value = addr.value = ''
})
//delete
tbody.addEventListener('click', (e) => {
  //event delegation: find button tag and set 4 statics data
  if (e.target.tagName === 'BUTTON' && e.target.id > 3) {
    console.log(e.target)
    // find start posion by id and delete 1 data
    tableInfo.tableContent.splice(e.target.id, 1)
    //re-render
    render()
  }
})

// q2
const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java']
let ol = document.querySelector('ol')
let ul = document.querySelector('ul')
// encapsulate function
function renderList(listName) {
  list.forEach((item) => {
    let li = document.createElement('li')
    li.innerHTML = item
    listName.appendChild(li)
  })
}

renderList(ol)
renderList(ul)

//q3

const dropDownList = [
  { value: 'newark', content: 'Newark' },
  { value: 'santaClara', content: 'Santa Clara' },
  { value: 'unionCity', content: 'Union City' },
  { value: 'albany', content: 'Albany' },
  { value: 'dalyCity', content: 'Daly City' },
  { value: 'sanJose', content: 'San Jose' },
]
let city = document.querySelector('#city')
dropDownList.forEach((item) => {
  let opt = document.createElement('option')
  opt.value = item.value
  opt.innerHTML = item.content
  city.appendChild(opt)
})
