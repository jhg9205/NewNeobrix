import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as React from "react";
import {motion, useMotionValueEvent, useScroll, useTransform, useViewportScroll} from "framer-motion";
export const Intro4 = () => {
    const { scrollY } = useScroll()
    const [scroll, setScroll] = useState(0);
    const [radius, setRadius] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest/100 >= 47 && latest/100 < 48){
            setScroll(5)
        }else if(latest/100 >= 48 && latest/100 < 49){
            setScroll(10)
        }else if(latest/100 >= 49 && latest/100 < 50){
            setScroll(15)
        }else if(latest/100 >= 50 && latest/100 < 51){
            setScroll(20)
        }
    })
    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest/100 >= 47 && latest/100 < 48){
            setRadius(10)
        }else if(latest/100 >= 48 && latest/100 < 49){
            setRadius(20)
        }else if(latest/100 >= 49 && latest/100 < 50){
            setRadius(30)
        }else if(latest/100 >= 50 && latest/100 < 51){
            setRadius(40)
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
                    width: '300px',
                    height: '50px',
                    borderRadius: '30px',
                    padding: '15px 24px 15px 32px',
                    backgroundColor:'#ffffff'
                }}
                onClick={() => {

                }}
            >
							<span
                                className='button-text'
                            >전문가에게 문의하기</span>
                <ArrowForwardIcon/>
            </Button>
        </motion.div>
    )
}