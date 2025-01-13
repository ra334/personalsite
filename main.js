import changeTheme from './scripts/theme.js'
import changeLanguages from './scripts/languages.js'
import isWatchedAnimation from './scripts/typing.js'


window.onload = function () {
    changeLanguages()
    changeTheme()
    isWatchedAnimation()
}
