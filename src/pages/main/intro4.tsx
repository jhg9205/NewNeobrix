import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as React from "react";
import {motion, useMotionValueEvent, useScroll, useTransform, useViewportScroll} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {getViewSize} from "@utils/functions";
export const Intro4 = () => {
    const size = getViewSize()
    const { scrollY } = useScroll()
    const [scroll, setScroll] = useState(0);
    const [radius, setRadius] = useState(0);
    const navigate = useNavigate();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if(size=='lg'){
            if(latest/100 >= 47 && latest/100 < 48){
                setScroll(5)
            }else if(latest/100 >= 48 && latest/100 < 49){
                setScroll(10)
            }else if(latest/100 >= 49 && latest/100 < 50){
                setScroll(15)
            }else if(latest/100 >= 50 && latest/100 < 51){
                setScroll(20)
            }
        }else if(size=='sm'){
            if(latest/100 >= 31 && latest/100 < 32){
                setScroll(5)
            }else if(latest/100 >= 32 && latest/100 < 33){
                setScroll(10)
            }else if(latest/100 >= 33 && latest/100 < 34){
                setScroll(15)
            }else if(latest/100 >= 34 && latest/100 < 35){
                setScroll(20)
            }
        }
    })
    useMotionValueEvent(scrollY, "change", (latest) => {
        if(size=='lg'){
            if(latest/100 >= 47 && latest/100 < 48){
                setRadius(10)
            }else if(latest/100 >= 48 && latest/100 < 49){
                setRadius(20)
            }else if(latest/100 >= 49 && latest/100 < 50){
                setRadius(30)
            }else if(latest/100 >= 50 && latest/100 < 51){
                setRadius(40)
            }
        }else if(size=='sm'){
            if(latest/100 >= 31 && latest/100 < 32){
                setRadius(10)
            }else if(latest/100 >= 32 && latest/100 < 33){
                setRadius(20)
            }else if(latest/100 >= 33 && latest/100 < 34){
                setRadius(30)
            }else if(latest/100 >= 34 && latest/100 < 35){
                setRadius(40)
            }
        }
    })


    return (
        <motion.div className='intro4'
            style={{
                width:`${80+scroll}%`,
                borderRadius: `${40-(radius)}px`,
                margin:'0 auto'
            }}
        >
            <p>
                궁금증을 해결하세요.
            </p>
            <span>
                신속한 답변과 전문 컨설팅을 통해 가장 효율적인 변화의 방법을 제안해드립니다.
            </span>
            <Button
                id="recruitFile"
                variant="contained"
                sx={{
                    width: size=='lg'?'300px':'250px',
                    height: '50px',
                    borderRadius: '30px',
                    padding: size=='lg'?'15px 24px 15px 32px':'10px 0',
                    backgroundColor:'white'
                }}
                onClick={()=>{
                    navigate('/customer')
                }}
            >
							<span
                                className='button-text'
                            >NeoBRIX 전문가 만남</span>
                <ArrowForwardIcon/>
            </Button>
        </motion.div>
    )
}