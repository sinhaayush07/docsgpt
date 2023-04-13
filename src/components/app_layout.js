import { Navbar } from "./navbar";


export default function InappLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <div>This is footer</div>
    </>
  )
} 