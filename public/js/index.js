/* global alert, fetch */

// Get references to page elements
var quoteQuery = document.querySelector('#searchQuote')
// var exampleDescription = document.querySelector('#example-description')
var searchBtn = document.querySelector('#search')
// var exampleList = document.querySelector('#example-list')

// The API object contains methods for each kind of request we'll make
// class API {
//   constructor (someDefault = 'defaultVal') {
//     this.someDefault = someDefault
//   }

//   saveExample (example) {
//     return fetch('api/examples', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(example)
//     })
//   }

//   getExamples () {
//     return fetch('api/examples')
//   }

//   deleteExample (id) {
//     return fetch('api/examples/' + id, {
//       method: 'DELETE'
//     })
//   }
// }

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   let api = new API()

//   api.getExamples()
//     .then(results => results.json())
//     .then(function (data) {
//       while (exampleList.firstChild) {
//         exampleList.removeChild(exampleList.firstChild)
//       }

//       for (let example of data) {
//         var aElem = document.createElement('a')
//         aElem.textContent = example.text
//         aElem.setAttribute('href', '/example/' + example.id)

//         var liElem = document.createElement('li')
//         liElem.classList.add('list-group-item')
//         liElem.dataset.id = example.id
//         liElem.appendChild(aElem)

//         var buttonElem = document.createElement('button')
//         buttonElem.classList.add('btn', 'btn-danger', 'float-right', 'delete')
//         buttonElem.textContent = 'ｘ'

//         liElem.appendChild(buttonElem)

//         exampleList.appendChild(liElem)
//       }
//     })
// }

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault()
  // let api = new API()

  var example = {
    text: quoteQuery.value.trim()
    // description: exampleDescription.value.trim()
  }

  console.log(example)

  if (!(example.text)) {
    alert('Please enter a quote or part of a quote to perform a search.')
    return
  }
  // Make an AJAX get request to our api, including the user's book in the url
  fetch('/api/searchbyword/' + example.text)
    .then(response => response.json())
    .then(function (data) {
      // Here is where I think we can update values to export
      window.location.pathname = `/api/searchbyword/${example.text}`
      console.log(data)

      // renderBooks(data)
    })

  // api.saveExample(example).then(function () {
  //   refreshExamples()
  // })

  quoteQuery.value = ''
  // exampleDescription.value = ''
}

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function (event) {
//   if (event.target.matches('button.delete')) {
//     let api = new API()

//     var idToDelete = event.target.parentElement.dataset.id

//     api.deleteExample(idToDelete).then(function () {
//       refreshExamples()
//     })
//   }
// }

// Add event listeners to the submit and delete buttons
searchBtn.addEventListener('click', handleFormSubmit)
// exampleList.addEventListener('click', handleDeleteBtnClick)
