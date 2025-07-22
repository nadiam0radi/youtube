const menuButton = document.querySelector('.menu-button')

const themebutton = document.querySelector('.theme-button i')

menuButton.addEventListener('click' ,()=>{
    document.body.classList.toggle('sidebar-hidden')
})
if(localStorage.getItem('dark-mode')==='enabled'){
    document.body.classList.add('dark-mode')
    themebutton.classList.replace('uil-moon','uil-sun')
}else{
    themebutton.classList.replace('uil-sun','uil-moon')
}

themebutton.addEventListener('click' ,()=>{
    const isDarkMode = document.body.classList.toggle('dark-mode')
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled')
    themebutton.classList.toggle('uil-sun',isDarkMode)
    themebutton.classList.toggle('uil-moon',!isDarkMode)
})