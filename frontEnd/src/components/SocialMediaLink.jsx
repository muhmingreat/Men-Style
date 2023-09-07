import {
  faFacebook,
  faTwitter,
  faTiktok,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";


const SocialMediaLink = () => {
    const [socialMedia, setSocialMedia] = useState({})
      const navigate = useNavigate()
    useEffect(()=> {
           const fetchData = async () => {

            try{
                const data = await axios.get('/api/social-media')
        setSocialMedia(data);
        console.log(data)
            }catch(err){
              console.log(err)
            }
           } 
           fetchData() 
    },[])
  return (
    <div>
      <div className="social-icons">
        <div className="icons">
          <Link
            to={socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="social-p"> Our facebook contant</p>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
        <div className="icons">
          <Link
            to={socialMedia.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="social-p"> Our tiktok contant</p>

            <FontAwesomeIcon icon={faTiktok} />
          </Link>
        </div>

        <div className="icons">
          <Link
            to={socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="social-p"> Our instagram contant</p>

            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
        <div className="icons">
          <Link
            to={socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="social-p"> Our twitter contant</p>

            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
        <div className="icons">
          <p className="social-p"> 08140806540</p>

          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="contant">
          <p>
            {" "}
            Check us at Plot 1 block A<br />
            Barister Fatai Abolaji Pegamut estate
            <br />
            ota Ogun State Nigeria{" "}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} />: 08140806540
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLink;
