import Image from "next/image"
export const Navbar = () => {
  return (
    <div className="nav">
      <div className="flex justify-between" >
        <Image src="/label.svg" width={121} height={32} alt="logo" className="logo" />
        <div className="profile flex justify-around">
          <div className="block">
            <h5 style={{ fontSize: 14 }}>John Doe</h5>
            <p style={{ lineHeight: 0.5, color: "rgba(0, 0, 0, 0.65)", fontSize: 12 }}>Finance</p>
          </div>
          <Image src="/profile.svg" width={40} height={40} />
        </div>
      </div>
    </div >
  )
}