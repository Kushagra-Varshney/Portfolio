const root = document.querySelector(':root')
let themeButton = document.querySelector('#theme-toggle')
let codeLogo = document.querySelector('#code-logo')
let github = document.querySelector('#github-logo')
let linkedin = document.querySelector('#linkedin-logo')
let mail = document.querySelector('#mail-logo')
let twitter = document.querySelector('#twitter-logo')
console.log(themeButton);

themeButton.addEventListener('click', changeTheme)

function changeTheme() {
    let rs = getComputedStyle(root)
    if(rs.getPropertyValue('--primary-text-color') != 'black') {
        root.style.setProperty('--primary-text-color', 'black')
        root.style.setProperty('--secondary-text-color', '#1e3a8a')
        root.style.setProperty('--background-color-dark', 'white')
        root.style.setProperty('--primary-text-color', 'black')
        root.style.setProperty('--skill-bg-color', 'white')
        root.style.setProperty('--skill-hover-color', '#1e3a8a')
        root.style.setProperty('--resume-hover-color', '#1e3a8a')
        root.style.setProperty('--hlt-color', '#1e3a8a')
        themeButton.className = 'fa-solid fa-moon fa-lg'
        themeButton.style.color = '#1e3a8a'
        codeLogo.style.color = '#1e3a8a'
        github.style.color = '#1e3a8a'
        linkedin.style.color = '#1e3a8a'
        mail.style.color = '#1e3a8a'
        twitter.style.color = '#1e3a8a'
    }
    else {
        root.style.setProperty('--primary-text-color', '#bdbddd')
        root.style.setProperty('--secondary-text-color', '#90a0d9')
        root.style.setProperty('--background-color-dark', '#23283e')
        root.style.setProperty('--skill-bg-color', '#2a2f4c')
        root.style.setProperty('--skill-hover-color', '#bdbddd')
        root.style.setProperty('--resume-hover-color', '#bdbddd')
        root.style.setProperty('--hlt-color', 'white')
        themeButton.className = 'fa-solid fa-sun fa-lg'
        themeButton.style.color = '#bdbddd'
        codeLogo.style.color = '#bdbddd'
        github.style.color = '#bdbddd'
        linkedin.style.color = '#bdbddd'
        mail.style.color = '#bdbddd'
        twitter.style.color = '#bdbddd'
    }
}