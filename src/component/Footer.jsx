import React from 'react'
import "./footer.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <footer className="footer">
        <ul className="menuItems">
            <li className="menuItem">Terms Of Use</li>
            <li className="menuItem">Privacy-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <div className="socialIcons">
            <span className="icon">
                <FacebookIcon />
            </span>
            <span className="icon">
                <InstagramIcon />
            </span>
            <span className="icon">
                <TwitterIcon />
            </span>
            <span className="icon">
                <LinkedInIcon />
            </span>
        </div>
</footer>
  )
}

export default Footer
