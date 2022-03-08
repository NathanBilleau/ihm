const form = document.querySelector('#loginForm')

const login = (e: Event) => {
    e.preventDefault()
    try {
        const formData = new FormData(e.target as HTMLFormElement)
        if (formData.get('email') != formData.get('emailConfirmation'))
            throw new Error('L\'adresse email ne correspond pas')
        if (formData.get('password') != formData.get('passwordConfirmation'))
            throw new Error('Le mot de passe ne correspond pas')
        if (!formData.get('password').toString().match(/\d+/g) )
            throw new Error('Le mot de passe doit contenir un chiffre')
    }
    catch (err) {
        alert(err)
    }
}

form.addEventListener('submit', login)
