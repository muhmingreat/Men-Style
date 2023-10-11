import {
  faFacebook,
  faTwitter,
  faTiktok,
  faWhatsapp,
  faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row ,Col } from "react-bootstrap";


const Footer = () => {
    const [socialMedia, setSocialMedia] = useState({})
  
    const date = new Date().getFullYear();
    useEffect(()=> {
           const fetchData = async () => {

            try{
              const data = await axios.get('/api/social-media')
        setSocialMedia(data.data);
      
            }catch(err){
              console.log(err)
            }
          } 
          fetchData() 
        },[])
        return (
          <footer className="footer">
            <div className="wave"></div>
            <div className="grid--footer">
              <div>
                <p className="footer-header">
                  <a href="/home" className="logo">
                    <h1 className="heading">ABS Style Spot</h1>
                  </a>
                </p>
                <ul className="icons">
                  <li className="icon">
                    <a
                      href={socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li className="icon">
                    <a
                      href={socialMedia.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faTiktok} />
                    </a>
                  </li>
                  <li className="icon">
                    <a
                      href={socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="icon">
                    <a
                      href={socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                </ul>
                <p id="copyright">
                  Copyright &copy; <span>{date}</span>
                  <br />
                  by ABS Style's Spot <br />
                  All rights reserved{" "}
                </p>
              </div>
              <div className="address-col">
                <p className="footer-header">Contant us</p>
                <div className="address">
                  <address>
                    Plot 1 block A<br />
                    Barister Fatai Abolaji
                    <br /> Pegamut Estate Ota Ogun State Nig
                    <br />
                    Lagos Address <br />
                    No 3 Shitta Street Dopemu Agege <br />
                    Lagos State Nigeria
                  </address>
                </div>
              </div>
              <div>
                <ul>
                  <p className="footer-header">Call or Chart</p>

                  <li>
                    <FontAwesomeIcon icon={faPhone} /> 08140806540
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faWhatsapp} /> 08140806540
                  </li>
                  <li>
                    <p>
                      {" "}
                      ayatullahmuhmin3
                      <br />
                      @gmail.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        );
};

export default Footer;
