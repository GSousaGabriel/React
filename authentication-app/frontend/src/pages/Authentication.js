import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

const authAction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get('mode') || 'login'
  const data = await request.formData()

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported' }, { status: 200 })
  }

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  })

  if (response.status === 422 || response.status === 401) {
    return response
  } else if (!response.ok) {
    throw json({ message: 'Could not authenticate' }, { status: 500 })
  }
  
  const resData= await response.json()
  const token= resData.token

  localStorage.setItem('token', btoa(token))
  const expiration = new Date()
  expiration.setHours(expiration.getHours() + 1)
  localStorage.setItem('tokenE', btoa(expiration.toISOString()))

  return redirect('/')

}

export default AuthenticationPage;
export { authAction }