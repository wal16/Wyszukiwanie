let url = 'http://localhost:3010/api'

if (process.env.NODE_ENV === "production") {
  url = 'https://tranquil-ocean-17204.herokuapp.com/api'
}

export default { url }
