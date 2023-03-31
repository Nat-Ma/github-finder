import React from 'react'

const Footer = () => {
    const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-base-300 text-primary footer-center">
      <span>Copyright © {footerYear} All Rights Reserved</span>
    </footer>
  )
}

export default Footer
