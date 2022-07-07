// const Url = 'http://127.0.0.1:5000'
// const Url = 'http://51.83.134.120:5000'

const production = false

const Url = {
    api : production ? 'http://51.83.134.120:5000': 'http://localhost:5000',
    front : 'http://51.83.134.120',
    local : 'http://127.0.0.1:5000'
}


export default Url