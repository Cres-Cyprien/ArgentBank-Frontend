const LOGIN_URL = 'http://localhost:3001/api/v1/user/login'

const post = async (url, data) => fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
      "Content-Type": "application/json"
  }
})

export const postLogin = async data => await post(LOGIN_URL, data)
  .then(res => {
    if (res.status === 400 || res.status === 500) {
        alert('Erreur dans l’identifiant ou le mot de passe')
    }
    return res.json()
  })