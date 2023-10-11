import {Rotate,Bounce,Zoom, Flip, Reveal, Fade, Roll} from 'react-reveal'
import {Link} from 'react-router-dom'
// import Fade from '../components/Fade';

const Display = () => {
 
  return (
    <>
      <div className=" display-page">
        <div className=" text-center">
          <Zoom forever={true}>
            <h1 className="welcome-text">
              <span className="header-first-letter"> W</span>elcome to ABS
              Style's Spot
            </h1>
          </Zoom>
          <Reveal effect="slide-in">
            <p className="discription-text">
              {" "}
              Shop as much as can, we have various product that you can shop
              with, <br />
              from anywhere at any time in Nigeria and abroad.
            </p>
          </Reveal>
          <ul>
            <p className="header-item">Available items you can Shop</p>
            <li className="item-list">
              <span className="list-aprostophy">Agbada :</span> Three pair of
              cloth consist of top and trouser and overrun
            </li>
            <li className="item-list">
              <span className="list-aprostophy">Trouser :</span> A trouser of
              any type pants, Straight and pencil
            </li>
            <li className="item-list">
              <span className="list-aprostophy"> Caftan:</span> Almost all
              African wear this style mostly north and south Africa
            </li>
            <li className="item-list">
              <span className="list-aprostophy"> Senetor :</span> It's mostly
              wear in Nigeria by matual guys and Men
      gi      </li>

            <li className="item-list">
              <span className="list-aprostophy">Shirt:</span> This is a very
              unique top wear through out the world
            </li>
          </ul>
          <Link to='/product'>

          <button className='btn-shop'>Shop now</button>
          </Link>
        </div>
        <div className="image-container">
          <div className="image-flex d-flex">
            <Rotate delay={1000}>
              <img className="image" src="image/s-1.jpg" alt=""></img>
            </Rotate>
            <figure>
              <Fade top duration={1000}>
                {" "}
                <img className="image" src="image/pix-2.png" alt=""></img>
              </Fade>
            </figure>
            <figure>
              <Bounce delay={1000}>
                {" "}
                <img className="image" src="image/pix-1.jpg" alt=""></img>
              </Bounce>
            </figure>
            <figure>
              <Zoom delay={1000}>
                <img className="image" src="image/pix-4.jpg" alt=""></img>
              </Zoom>
            </figure>
            <figure>
              <Rotate delay={1000}>
                <img className="image" src="image/pix-9.jpg" alt=""></img>
              </Rotate>
            </figure>
            <figure>
              <Flip delay={1000}>
                <img className="image" src="image/pix-5.jpg" alt=""></img>
              </Flip>
            </figure>
            <figure>
              <Zoom delay={1000}>
                <img className="image" src="image/pix-5.jpg" alt=""></img>
              </Zoom>
            </figure>
            <figure>
              <Rotate delay={1000}>
                <img className="image" src="image/s-4.jpg" alt=""></img>
              </Rotate>
            </figure>
            <figure>
              <Roll delay={1000}>
                <img className="image" src="image/s-3.jpg" alt=""></img>
              </Roll>
            </figure>
            <figure>
              <Rotate delay={1000}>
                <img className="image" src="image/s-2.jpg" alt=""></img>
              </Rotate>
            </figure>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Display