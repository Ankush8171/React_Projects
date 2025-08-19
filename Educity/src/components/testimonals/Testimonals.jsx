
import React from 'react'
import { useRef } from 'react'
import './Testimonals.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonals = () => {

    const slider=useRef();
    let tx=0;

    const slideForward=()=>{

        if(tx >-50){
            tx -= 25;;
        }
        slider.current.style.transform=`translateX(${tx}%)`

    }

    const BackForward=()=>{
        
        if(tx < 0){
            tx +=25;;
        }
        slider.current.style.transform=`translateX(${tx}%)`

    }

    


  return (
    <div className="testimonals">
        <img src={next_icon} className='next-btn' onClick={slideForward} alt=""/>
        <img src={back_icon} className='back-btn' onClick={BackForward} alt=""/>
         <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt=""/>
                            <div>
                                <h3>Jackione</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p> Chossing to pursure my degree at Educity was one pf the best
                            decisions I've ever made. The supportive community,state-of-the-art facilates,and commitment
                            to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt=""/>
                            <div>
                                <h3>Willian jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p> Chossing to pursure my degree at Educity was one pf the best
                            decisions I've ever made. The supportive community,state-of-the-art facilates,and commitment
                            to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt=""/>
                            <div>
                                <h3>Willian jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p> Chossing to pursure my degree at Educity was one pf the best
                            decisions I've ever made. The supportive community,state-of-the-art facilates,and commitment
                            to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt=""/>
                            <div>
                                <h3>Willian jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p> Chossing to pursure my degree at Educity was one of the best
                            decisions I've ever made. The supportive community,state-of-the-art facilates,and commitment
                            to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>


         </div>
      
    </div>
  )
}


export default Testimonals
