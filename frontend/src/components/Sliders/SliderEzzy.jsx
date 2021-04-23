import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import BasicLoader from "../LoadingIndicators/BasicLoader";
import ErrorAlert from "../Alerts/ErrorAlert";

import "../../assets/slider-ezzy.scss";

import ImgComp from "./ImgComp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import I1 from "assets/images/hero-bg/hero-leh.jpg";
import I2 from "assets/images/hero-bg/hero-leh-2.jpg";
import I3 from "assets/images/hero-bg/hero-3.jpg";
import I4 from "assets/images/hero-bg/hero-4.jpg";
import I5 from "assets/images/hero-bg/hero-5.jpg";
import { listPackagesTop } from 'actions/packageActions';

export default function SliderEzzy(){

    const dispatch = useDispatch();

    const packageTop = useSelector(state => state.packageTop);
    const {packages,loading,error} = packageTop

    useEffect(() => {
        dispatch(listPackagesTop())
      }, [dispatch])

    //if(!loading && !error){}
        let sliderArr = packages.map(packagei => (
            <ImgComp 
                key={packagei._id} 
                src={packagei.packageImages[0]} 
                route={`/Package/${packagei._id}`} 
                packageName={packagei.title} 
                isHotel={packagei.isHotel}
                isFlight={packagei.isFlight}
                isFood={packagei.isFood}
                isVisa={packagei.isVisa}
                isTransportation = {packagei.isTransportation}
            />
        ))
    

    //let sliderArr = [<ImgComp src={I1} route={`/Package/${packages._id}`} packageName="North & Lights"/>,<ImgComp src={I2} route="/Package" packageName="Ladakh Dreams"/>,<ImgComp src={I3} route="/Package" packageName="London Nights"/>,<ImgComp route="/Package" src={I4} packageName="Paris & Love"/>,<ImgComp src={I5} route="/Package" packageName="Great Barrier Reef"/>];



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
        <>
        {loading ? <BasicLoader loading={loading}/> : error ? <ErrorAlert error={error}/> : (
                <div className="slider-ezzy">
                    {sliderArr && (
                        sliderArr.map((item,index)=> {
                            return(
                                <div key={index} className="slide-ezzy" style={{transform:`translateX(${x}%)`}}>
                                    {item}
                                </div>
                            )
                        })
                    )}
                    <button id="goLeftEzzy" onClick={goLeft}>
                        <FontAwesomeIcon className="text-light" icon={['fas', 'chevron-left']} />
                    </button>
                    <button id="goRightEzzy" onClick={goRight}>
                        <FontAwesomeIcon className="text-light" icon={['fas', 'chevron-right']} />
                    </button>
                </div>
        )}
        </>
    )
}