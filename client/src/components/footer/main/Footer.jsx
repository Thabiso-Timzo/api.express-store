import React from 'react' 
import { Link } from 'react-router-dom';

import './Footer.scss'
import { socials, information, accounts, quickLinks, links } from '../footer-links/Links'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container section_padding">
        <div className="footer-links">
          <div className="link-container">
            <h1>Connect with us</h1>
            <Link to={'mailto:thabiso.hlatshwayo24@gmail.com'}>
              thabiso.hlatshwayo24@gmail.com
            </Link>
            {socials.map((social, index) => {
              return (
                <Link to={social.path}>
                  <div className="socials">
                    <span>{social.icon}</span>
                    <span>{social.title}</span>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="link-container">
            <h1>information</h1>
            {information.map((info, index) => {
              return (
                <Link to={info.path}>
                  <span key={index}>{info.title}</span>
                </Link>
              )
            })}
          </div>
          <div className="link-container">
            <h1>Account</h1>
            {accounts.map((account, index) => {
              return (
                <Link to={account.path}>
                  <span>{account.title}</span>
                </Link>
              )
            })}
          </div>
          <div className="link-container">
            <h1>Quick links</h1>
            {quickLinks.map((link, index) => {
              return (
                <Link to={link.path}>
                  <span>{link.title}</span>
                </Link>
              )
            })} 
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="foot-below">
        <div className="footer-copyright">
          <p>{new Date().getFullYear()} Express Store. All rights reserved</p>
        </div>
        <div className="footer-below-links">
          {links.map((link, index) => {
            return (
              <Link to={link.path}>
                <p key={index}>{link.title}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer