const themeElement = document.getElementById('theme')
const themeIMG = document.getElementById('theme-img')
const currentTheme = localStorage.getItem('theme') || 'white-theme';

function changeTorImgTheme(theme) {
	const torImg = document.getElementsByClassName('header__mirror-img')[0];
	if (theme === 'black-theme') {
		console.log('black-theme')
		torImg.style.color = 'white'
	} else {
		torImg.style.color = 'black'
	}
}

function setGlobalScrollbarColor(trackColor, thumbColor) {
	const style = document.createElement('style')
	style.textContent = `
	  ::-webkit-scrollbar-track {
		background-color: ${trackColor};
	  }
	  ::-webkit-scrollbar-thumb {
		background-color: ${thumbColor};
	  }
	`;
	document.head.appendChild(style)
}

function setTheme(theme) {
	if (theme === 'black-theme') {
		themeIMG.src = '../../public/header/sun.svg'
		themeIMG.alt = 'moon'
		setGlobalScrollbarColor('black', 'white')
		changeTorImgTheme(theme)
	} else {
		themeIMG.src = '../../public/header/moon.svg'
		themeIMG.alt = 'sun'
		setGlobalScrollbarColor('white', 'black')
		changeTorImgTheme(theme)
	}
}

function changeTheme() {
    document.body.classList.add(currentTheme);

	setTheme(currentTheme)

	if (themeElement) {
		themeElement.addEventListener('click', () => {
			let currentTheme = document.body.classList.contains('white-theme') ? 'white-theme' : 'black-theme'
			let newTheme = currentTheme === 'white-theme' ? 'black-theme' : 'white-theme'

			setTheme(newTheme)
			
			document.body.classList.replace(currentTheme, newTheme)
			localStorage.setItem('theme', newTheme)
		})
	}
}

export default changeTheme