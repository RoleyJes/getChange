export function login() {
  const fakeUser = {
    name: 'Roli',
    email: 'jo@gm.co',
  }

  localStorage.setItem('user', JSON.stringify(fakeUser))
}

export function logout() {
  localStorage.removeItem('user')
}
