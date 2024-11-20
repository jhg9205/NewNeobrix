import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import * as React from "react";
import Transition from "@components/ui/transition/transition";
import {Button} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {getViewSize} from "@utils/functions";
import {useNavigate} from "react-router-dom";

export const Intro3 = () => {
    const navigate = useNavigate()
    const [scrollYProgress, setScrollYProgress] = useState(0);
    const size = getViewSize()
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if(scrollTop < 3500){
            setScrollYProgress(0);
        }else if(scrollTop == 3600){
            setScrollYProgress(5);
        }else if(scrollTop == 3700){
            setScrollYProgress(10);
        }else if(scrollTop == 3800){
            setScrollYProgress(15);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <div className='intro3'>
            <motion.div
                id='intro-container'
                style={{
                    width:`100%`,
                    height:'100%',
                    borderRadius: '30px'
                }}
                className='intro3-main-gradient'
            >
                <motion.div
                    className='intro-text'
                    initial={{ opacity: 0, y: 50,x:-50}}
                    whileInView={{ opacity: 1, y: 0, x:0 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        y: { duration: 0.5 },
                    }}
                >
                    <p>NeoBrix와</p>
                    <p>행복을 함께 할</p>
                    <p>인재를</p>
                    <p>찾습니다.</p>
                </motion.div>

                <div className='intro-content'>
                    <Transition threshold={size=='lg'?25:15} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card10"
                                style={{
                                    float:size == 'lg'?'left':'right',
                                    height:size == 'lg'?'400px':'200px',
                                    transform:size == 'lg'?'none':'translateY(-220px) translateX(-100px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:size == 'lg'?'translateY(-10px)':'translateY(-230px) translateX(-100px)'
                                }}
                            >
                                <Button
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}
                                    onClick={()=>{navigate('/talent')}}
                                >
                                    <div
                                        className='intro-card-button'>
                                        <p>인재상</p>
                                        <span>테스트입니당</span>
                                        <div className='intro-card-arrow'>
                                            <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                        </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </>
                    </Transition>
                    <Transition threshold={size=='lg'?25:17} direction={size=='lg'?'left':'right'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card11"
                                style={{
                                    float:size == 'lg'?'right':'left',
                                    transform : size == 'lg'?'none':'translateY(-50px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:size == 'lg'?'translateY(-10px)':'translateY(-40px)'
                                }}
                            >
                                <Button
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}
                                    onClick={()=>{navigate('/recruit')}}
                                >
                                    <div
                                        className='intro-card-button'>
                                        <p>채용전형</p>
                                        <span>테스트입니당</span>
                                        <div className='intro-card-arrow'>
                                            <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                        </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </>
                    </Transition>
                    <Transition threshold={size=='lg'?28:17} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card12"
                                style={{
                                    float:size == 'lg'?'left':'right',
                                    height:size == 'lg'?'400px':'200px',
                                    transform:size == 'lg'?'translateY(50px)':'translateY(-150px) translateX(-100px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:size == 'lg'?'translateY(40px)':'translateY(-160px) translateX(-100px)'
                                }}
                            >
                                <Button
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}
                                    onClick={()=>{navigate('/hr')}}
                                >
                                    <div
                                        className='intro-card-button'>
                                        <p>인사제도</p>
                                        <span>테스트입니당</span>
                                        <div className='intro-card-arrow'>
                                            <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                        </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </>
                    </Transition>
                </div>
            </motion.div>
        </div>
    )
}