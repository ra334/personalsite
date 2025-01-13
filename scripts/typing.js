const typingElement = document.getElementById('typing')

function isWatchedAnimation() {
    const animation = localStorage.getItem('watchedAnimation')
    
    if (!animation) {
        const style = document.createElement('style')
        style.textContent = `
            ::-webkit-scrollbar { width: 0; }
        `
        document.head.appendChild(style)
        localStorage.setItem('watchedAnimation', 'true')
        typingElement.style.display = 'flex'
        setTimeout(() => {
            typingElement.style.display = 'none'
            document.head.removeChild(style)
        }, 4500)
    }
}

export default isWatchedAnimation