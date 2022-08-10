import React from 'react'

export default function Footer() {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%"
  }

  return (
    <>
   <div>
    This is taken from env file:{process.env.REACT_APP_SECRET_KEY}
   </div>
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyToDosList.com
      </p>  
    </footer>
    </>
  )
}
