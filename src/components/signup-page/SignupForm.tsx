import { useState } from "react"
import { LabelAndInput } from "../Form"
import Button from "../Button"
import { postFormData } from "../../utils/postFormData"
import Alert from "../Alert"


const SignupForm = () => {
  const [username, setUsername] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [errors, setErrors] = useState<string | string[]>("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors("")
  
    const formData = { username, password1, password2 };
    const { response, result } = await postFormData(formData, '/api/signup');
    if (response.status !== 200) {
      setErrors(result.error)
      return
    }  
    // console.log({ response, result });
  }
  const displayErrors = () => {
    if (errors.length === 0) return

    return typeof errors === "string" ? (
      <Alert type="danger">{errors}</Alert>
    ) : (
      errors.map((err, i) => (
        <Alert key={i} type="danger">
          {err}
        </Alert>
      ))
    )
  }


  return (
    <form className="w-full sm:w-96" onSubmit={handleSubmit}>
      <LabelAndInput
        label="Username"
        inputType="text"
        inputName="username"
        handleChange={e => setUsername(e.target.value)}
        value={username}
      />
      <LabelAndInput
        label="Password"
        inputType="password"
        inputName="password1"
        handleChange={e => setPassword1(e.target.value)}
        value={password1}
      />
      <LabelAndInput
        label="Confirm password"
        inputType="password"
        inputName="password2"
        handleChange={e => setPassword2(e.target.value)}
        value={password2}
      />
      <Button
        color="success"
        type="submit"
        extraClasses="w-full mt-3 py-3 font-semibold"
      >
        Create Account
      </Button>
      {displayErrors()}
    </form>
  )
  
}

export default SignupForm
