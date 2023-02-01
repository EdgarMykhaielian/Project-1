//Show Youtube + hide screensaver
const youtube = document.querySelector('.video__youtube')
const screensaver = document.querySelector('.video__screensaver')
const videoBtn = document.querySelector('.video__btn')
videoBtn.addEventListener('click',showYoutube)

function showYoutube() {
    youtube.style.display='block'
    screensaver.style.display='none'
}


// //Change Theme
// const logo = document.querySelector('#toggle')

// logo.addEventListener('click',changeTheme)

// function changeTheme(){
    
// }