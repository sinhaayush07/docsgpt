import { Navbar } from "./navbar";
import Sidebar from "./sidebar";


export default function InappLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <Sidebar />
        {children}
      </div>
      <div>This is footer</div>
    </>
  )
} 