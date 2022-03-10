const body = document.querySelector('body')

const background = document.createElement('div')
background.classList.add('background')
body.appendChild(background)



for (let index = 0; index < 100; index++) {
    const emoji = document.createElement('div')
    emoji.classList.add('emoji')
    emoji.textContent = '🍩'
    emoji.style.left = `${Math.random() * 100}%`
    emoji.style.top = `${Math.random() * 100}%`

    background.appendChild(emoji)
}