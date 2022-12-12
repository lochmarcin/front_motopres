// const Url = 'http://127.0.0.1:5000'
// const Url = 'http://51.83.134.120:5000'

const production = true

const Url = {
    api : production ? 'https://api.motopres.marcinloch.pl': 'http://localhost:5000',
    front : production ? 'https://motopres.marcinloch.pl' : 'http://localhost:3000'
}


export default Url