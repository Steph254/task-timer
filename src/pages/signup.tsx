import type { NextPage } from "next"
import SignupForm from "../components/signup-page/SignupForm"
import PageHeading from "../components/PageHeading"

const Signup: NextPage = () => {
  return (
    <div className="mx-auto mt-20">
      <PageHeading extraClasses="text-center mb-8">
        Create an account
      </PageHeading>
      <SignupForm />
    </div>
  )
}

export default Signup 