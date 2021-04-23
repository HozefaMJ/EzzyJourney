import React from 'react';

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImgComp({src,packageName,route,isHotel,isFlight,isFood,isVisa,isTransportation}){

    let imgStyles = {
        width: 100+"%",
        height: "auto"
    }

    return(
        <>
            <Link to={route}>
                <div>
                    <div className="d-flex" style={{flexDirection:'column',position:'absolute',top:'45%',left:'32%'}}>
                        <h1 className="text-light" style={{fontSize:'90px'}}>
                            {packageName}
                        </h1>
                        <div className="d-flex justify-content-around mt-4 text-secondary">
                            {isFood && (
                                <FontAwesomeIcon
                                icon={['fas', 'utensils']}
                                className=""
                                style={{fontSize:'35px'}}
                                />
                            )}
                            {isFlight && (
                                <FontAwesomeIcon
                                icon={['fas', 'plane']}
                                style={{fontSize:'35px'}}
                                color="light"
                                />
                            )}
                            {isTransportation && (
                                <FontAwesomeIcon
                                icon={['fas', 'car']}
                                style={{fontSize:'35px'}}
                                color="light"
                                />
                            )}
                            {isVisa && (
                                <FontAwesomeIcon
                                icon={['fab', 'cc-visa']}
                                style={{fontSize:'35px'}}
                                color="light"
                                />
                            )}
                            {isHotel && (
                                <FontAwesomeIcon
                                icon={['fas', 'hotel']}
                                style={{fontSize:'35px'}}
                                color="light"
                                />
                            )}
                        </div>
                    </div>
                    <img src={src} alt="slide-img" style={imgStyles}/>
                </div>
            </Link>
        </>
    )
}