import React,{useState} from 'react';

import "../../../assets/slider-ezzy.scss";

import ImgCompPackage from "./ImgCompPackage";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import I1 from "../../../assets/images/hero-bg/hero-leh.jpg";
import I2 from "../../../assets/images/hero-bg/hero-leh-2.jpg";
import I3 from "../../../assets/images/hero-bg/hero-3.jpg";
import I4 from "../../../assets/images/hero-bg/hero-4.jpg";
import I5 from "../../../assets/images/hero-bg/hero-5.jpg";

export default function SliderPackage(){

    let sliderArr = [<ImgCompPackage src={I1}/>,<ImgCompPackage src={I2}/>,<ImgCompPackage src={I3}/>,<ImgCompPackage src={I4}/>,<ImgCompPackage src={I5}/>];

    const [x,setX] = useState(0)

    const goLeft = () => {
        //let k = -100 * sliderArr.length-1;
        (x === 0) ? setX(-100 * (sliderArr.length-1)) : setX( x+100 );
        //console.log(x,k)
        //setX(x+100)
    };

    const goRight = () => {
        //let k = -100 * sliderArr.length-1;
        (x === -100*(sliderArr.length-1))?setX(0):setX(x-100);
        //console.log(x,k)
    };

    return(
        <div className="slider-ezzy">
            {
                sliderArr.map((item,index)=> {
                    return(
                        <div key={index} className="slide-ezzy" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeftEzzy" onClick={goLeft}>
                <FontAwesomeIcon className="text-light" icon={['fas', 'chevron-left']} />
            </button>
            <button id="goRightEzzy" onClick={goRight}>
                <FontAwesomeIcon className="text-light" icon={['fas', 'chevron-right']} />
            </button>
        </div>
    )
}