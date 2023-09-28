// buttons
const editButton = document.getElementById('editButton')
// const closeEditButton = document.getElementById('close-editButton')
const editForm = document.getElementById('myForm')
// const closeForm = document.getElementById('myForm')

// form items
const formName = document.getElementById('formName')
const formRole = document.getElementById('formRole')
const formHeight = document.getElementById('formHeight')
const formImage = document.getElementById('formImage')
const formAvailability = document.getElementById('formAvailability')
const formUsia = document.getElementById('formUsia')
const formLokasi = document.getElementById('formLokasi')
const formPengalaman = document.getElementById('formPengalaman')
const formEmail = document.getElementById('formEmail')
const submitButton = document.getElementById('submitButton')

// target items
const nameTarget = document.getElementById('nameTarget')
const roleTarget = document.getElementById('roleTarget')
const heightTarget = document.getElementById('heightTarget')
const availabilityTarget = document.getElementById('availabilityTarget')
const usiaTarget = document.getElementById('usiaTarget')
const lokasiTarget = document.getElementById('lokasiTarget')
const pengalamanTarget = document.getElementById('pengalamanTarget')
const emailTarget = document.getElementById('emailTarget')
const imageTarget = document.getElementById('imageTarget')

// assign function to edit button
editButton.addEventListener('click', toggleEditForm)
// closeEditButton.addEventListener('click', toggleCloseForm)
submitButton.addEventListener('click', mySubmitForm)


function toggleEditForm (event) {
  editForm.classList.toggle('hide-content')
}
// function toggleCloseForm (event) {
//   closeForm.classList.toggle('formdata')
// }

function mySubmitForm(event) {
  // prevent event bubbling JS
  event.preventDefault()
  // get all values
  const currentName = formName.value
  const currentRole = formRole.value
  const currentHeight = formHeight.value
  const currentAvailability = formAvailability.value
  const currentUsia = formUsia.value
  const currentLokasi = formLokasi.value
  const currentPengalaman = formPengalaman.value
  const currentEmail = formEmail.value
  const currentFile = formImage.files[0]

  // set name to target
  nameTarget.innerHTML = currentName
  roleTarget.innerHTML = currentRole
  // set height to target
  heightTarget.innerHTML = currentHeight
  availabilityTarget.innerHTML = currentAvailability
  usiaTarget.innerHTML = currentUsia
  lokasiTarget.innerHTML = currentLokasi
  pengalamanTarget.innerHTML = currentPengalaman
  emailTarget.innerHTML = currentEmail

  // set file to target
  // cek if file exist
  if(currentFile) {
    // bikin instance file reader
    const reader = new FileReader()

    // set function onload nya, pas filereader nya beres, itu mau ngapain
    reader.onload = function (e) {
      imageTarget.src = e.target.result
    }

    // pass the file to file reader
    reader.readAsDataURL(currentFile);

    // log debugging
    console.log(currentFile)
    console.log('file ada')
  }
  
  // hide form nya lagi
  toggleEditForm()
  // toggleCloseForm()
}

// event bubbling javascript

/**
 * get all items (target, form, buttons)
 * fuction toggle
 * toggle class yang punya display none
 * function submit
 * ambil value (nama, tinggi, image)
 * set value ke target
 * image > FileReader > readAsDatURL> onload
 * toggle si form biar hidden lagi
 */

// ref : https://developer.mozilla.org/en-US/docs/Web/API/FileReader
// ref : https://www.freecodecamp.org/news/event-bubbling-in-javascript/