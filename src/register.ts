const form = document.querySelector('#registerForm')
const cityInput = document.querySelector('input[name="city"]')
const zipInput = document.querySelector('input[name="zip"]')
const zipList = document.querySelector('#zipList')

const citiesAndZip = [
    {
        city: 'Paris',
        zip: ['75000', '75001', '75002', '75003', '75004', '75005', '75006', '75007', '75008', '75009', '75010', '75011', '75012', '75013', '75014', '75015', '75016', '75017', '75018', '75019', '75020']
    },
    {
        city: 'Laval',
        zip: ['53000']
    },
    {
        city: 'Lyon',
        zip: ['69000']
    },
    {
        city: 'Le Mans',
        zip: ['72000']
    },
    {
        city: 'Bordeaux',
        zip: ['33000']
    },
    {
        city: 'Toulouse',
        zip: ['31000']
    }
]

const searchCityForZip = (e: Event) => {
    // @ts-ignore
    const zip = e.target.value

    const zipFound = citiesAndZip.find(c => {
        return c.zip.find(z => {
            return z.startsWith(zip)
        })
    })

    if (zipFound) {
        // @ts-ignore
        cityInput.value = zipFound.city

        zipFound.zip.forEach(zip => {
            const option = document.createElement('option')
            option.value = zip
            option.textContent = zip
            zipList.appendChild(option)
        })
    }
}


const searchZipForCity = (e: Event) => {
    // @ts-ignore
    const city = e.target.value

    const cityFound = citiesAndZip.find(c => {
        return c.city.toLocaleLowerCase().includes(city.toLowerCase())
    })

 
    zipList.innerHTML = ''
    if (cityFound) {
        cityFound.zip.forEach(zip => {
            const option = document.createElement('option')
            option.value = zip
            option.textContent = zip
            zipList.appendChild(option)
        })
    }
}

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

        window.location.href = '/'
    }
    catch (err) {
        alert(err)
    }
}

zipInput.addEventListener('keyup', searchCityForZip)
cityInput.addEventListener('keyup', searchZipForCity)
form.addEventListener('submit', login)
