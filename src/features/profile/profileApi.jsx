const PROFILE_URL = 'http://localhost:3001/api/v1/user/profile'

export const postProfile = (token) => fetch(PROFILE_URL, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Authorization": "Bearer " + token
  }
}).then((response) => response.json())

export const putProfile = (token, userName) => fetch(PROFILE_URL, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  },
  body: JSON.stringify({ userName })
}).then((response) => response.json())