import { GoogleLogin } from '@react-oauth/google'

export default function Google() {
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          fetch(`/api/auth/sign-up?credential=${credentialResponse.credential}`)
            .then((res) => res.json())
            .then((data) => console.log(data))
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
    </>
  )
}
