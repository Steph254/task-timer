import { useContext } from "react"
import type { NextPage } from "next"
import SignupForm from "../components/signup-page/SignupForm"
import PageHeading from "../components/PageHeading"
import { UserContext } from "../contexts/UserContext"
import Alert from "../components/Alert"

const Signup: NextPage = () => {
  const { username } = useContext(UserContext)

  return (
    <div className="mx-auto mt-20">
      {username ? (
        <Alert type="success">You are logged in as {username}</Alert>
      ) : (
        <>
      <PageHeading extraClasses="text-center mb-8">
        Create an account
      </PageHeading>
      <SignupForm />
      </>
      )}
    </div>
  )
}

export default Signup 