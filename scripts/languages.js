const mainElement = document.getElementById('header__language')
const html = document.getElementsByTagName('html')[0]
const currentLanguage = document.getElementById('current-language')
const hideLanguage = document.getElementById('hide-language')


function changeLanguages() {
    html.addEventListener('click', () => {
        if (hideLanguage) {
            if (hideLanguage.style.display === 'block') {
                hideLanguage.style.display = 'none'
            }
        }
    })

    if (mainElement) {
        mainElement.addEventListener('click', (event) => {

            event.stopPropagation();

            if (hideLanguage.style.display === 'block') {
                hideLanguage.style.display = 'none'
            } else {
                hideLanguage.style.display = 'block'
            }
        })
    }

    if (hideLanguage) {
        hideLanguage.addEventListener('click', () => {
            if (hideLanguage.innerHTML === 'UK') {
                currentLanguage.innerHTML = 'UK'
                hideLanguage.innerHTML = 'EN'
            } else {
                currentLanguage.innerHTML = 'EN'
            }
        })
    }
}

export default changeLanguages