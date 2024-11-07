import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import {color, motion, useScroll, useTransform, useViewportScroll, Variants} from "framer-motion"
import {useEffect, useState} from "react";
import Transition from '@components/ui/transition/transition'
import {Button} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Intro = () => {
        const [scrollYProgress, setScrollYProgress] = useState(7);

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if(scrollTop > 500){
                setScrollYProgress(500);
            }else{
                setScrollYProgress(scrollTop/100+5);
            }

        };


        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

    const cardVariants: Variants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 50,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    }
    return (
        <>
        <div className='intro'>
            <motion.div
                id='intro-container'
                style={{
                    width:`${scrollYProgress*10+20}%`,
                    height:'100%',
                    borderRadius: '30px',
                    background: 'linear-gradient(to bottom, #74f8c2, #00e2d3, #00c9de, #00addf, #0090d2, #3f8ed0, #5a8bcd, #6e89c9, #99a4d6, #bec1e3, #e0dff1, #ffffff)'
                }}
            >
                <motion.div
                        style={{
                            float:'left', margin:'100px 0 0 250px',
                            width: '402px',
                            color: '#fff',
                            fontWeight: '500',
                            fontSize: '60px',
                            lineHeight: '78px',
                            textAlign:'left'
                        }}
                        initial={{ opacity: 0, y: 200}}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{
                            ease: "easeInOut",
                            duration: 2,
                            y: { duration: 2 },
                        }}
                    >
                        <p>오늘보다</p>
                        <p>나은 내일을</p>
                        <p>위한</p>
                        <p>고객의 선택</p>
                    </motion.div>
                <div style={{width:'900px', float:'right', margin:'100px 250px 0 0'}}>
                    <Transition threshold={3} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card1"
                                style={{
                                    float:'left'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:'translateY(-10px)'
                                }}
                            >
                                <Button
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                    <div
                                        className='intro-card-button'
                                        style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
                                    <p>IT Service</p>
                                    <span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
                                    <div className='intro-card-arrow'>
                                        <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                    </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </>
                    </Transition>
                    <Transition threshold={5} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card2"
                                style={{
                                    float:'right',
                                    transform:'translateY(100px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:'translateY(+90px)'
                                }}
                            >
                            <Button
                                style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                <div
                                    className='intro-card-button'
                                    style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
                                    <p>Data Mining Vision</p>
                                    <span>HPE Ezmeral Big-Data 플랫폼 (HPE EZMERAL Data Fabric)</span>
                                    <div className='intro-card-arrow'>
                                        <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                    </div>
                                </div>
                            </Button>
                            </motion.div>
                        </>
                    </Transition>
                    <Transition threshold={9} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card3"
                                style={{
                                    float:'left',
                                    transform:'translateY(100px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:'translateY(+90px)'
                                }}
                            >
                                <Button
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                    <div
                                        className='intro-card-button'
                                        style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
                                    <p>Mobile in my hand</p>
                                    <span>HPE Ezmeral AI 플랫폼 (HPE EZMERAL ML OPS Platform)</span>
                                    <div className='intro-card-arrow'>
                                        <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                    </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </>
                    </Transition>
                    <Transition threshold={11} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card4"
                                style={{
                                    float:'right',
                                    transform:'translateY(200px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:'translateY(+190px)'
                                }}
                            >
                                <Button
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                    <div
                                        className='intro-card-button'
                                        style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
                                    <p>Land/Facility Management</p>
                                    <span>중대재해 발생 시 법적대응에 활용할 수 있는 솔루션</span>
                                    <div className='intro-card-arrow'>
                                        <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                    </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </>
                    </Transition>
                    <Transition threshold={15} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card4"
                                style={{
                                    float:'left',
                                    transform:'translateY(200px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:'translateY(+190px)'
                                }}
                            >
                                <Button
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                    <div
                                        className='intro-card-button'
                                        style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
                                        <p>Environment</p>
                                        <span>중대재해 발생 시 법적대응에 활용할 수 있는 솔루션</span>
                                        <div className='intro-card-arrow'>
                                            <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                        </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </>
                    </Transition>
                    <Transition threshold={17} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card4"
                                style={{
                                    float:'right',
                                    transform:'translateY(300px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:'translateY(+290px)'
                                }}
                            >
                                <Button
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                    <div
                                        className='intro-card-button'
                                        style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
                                        <p>Education</p>
                                        <span>중대재해 발생 시 법적대응에 활용할 수 있는 솔루션</span>
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
        <div style={{height:'800px'}}>

        </div>
        </>
    )
}
