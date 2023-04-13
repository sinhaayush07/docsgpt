import InappLayout from "@/components/app_layout"

export default function Login() {
  return (
    <>
      Some login functionality
    </>
  )
}

Login.getLayout = function getLayout(page) {
  return (
    <InappLayout>
      {page}
    </InappLayout>
  )
}