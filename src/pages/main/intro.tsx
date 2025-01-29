import * as React from 'react'
import {motion, Variants} from "framer-motion"
import {useEffect, useState} from "react";
import Transition from '@components/ui/transition/transition'
import {Button} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {getViewSize} from "@utils/functions";
import {PATH} from "@common/domain";
import {useNavigate} from "react-router-dom";

export const Intro = () => {
        const navigate = useNavigate()
        const [scrollYProgress, setScrollYProgress] = useState(7);
        const size = getViewSize()
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if(size == 'lg'){
                if(scrollTop > 500){
                    setScrollYProgress(100);
                }else{
                    setScrollYProgress(scrollTop/100+5);
                }
            }else if(size =='sm'){
                if(scrollTop > 300){
                    setScrollYProgress(100);
                }else{
                    setScrollYProgress(scrollTop/100+5);
                }
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
                    width:scrollYProgress != 100 ?`${scrollYProgress*10+20}%`:`100%`,
                    height:'100%',
                    borderRadius: '30px'
                }}
                className='intro-main-gradient'
            >
                <motion.div
                    className='intro-text'
                        initial={{ opacity: 0, y: 50, x:-50}}
                        whileInView={{ opacity: 1, y: 0, x:0 }}
                        viewport={{ once: false }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.5,
                            y: { duration: 0.5 },
                        }}
                    >
                        <p>오늘보다</p>
                        <p>나은 내일을</p>
                        <p>위한</p>
                        <p>고객의 선택</p>
                    </motion.div>
                <div className='intro-content'>
                    <Transition threshold={size=='lg'?3:2} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card1"
                                style={{
                                    float:size == 'lg'?'left':'right',
                                    transform : size == 'lg'?'none':'translateY(-220px) translateX(-100px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:size == 'lg'?'translateY(-10px)':'translateY(-230px) translateX(-100px)'
                                }}
                            >
                                <Button
                                    onClick={()=>navigate(PATH.BUSINESS01)}
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                    <div
                                        className='intro-card-button'>
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
                    <Transition threshold={size=='lg'?5:3} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card2"
                                style={{
                                    float:size == 'lg'?'right':'left',
                                    transform : size == 'lg'?'translateY(100px)':'none'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:size == 'lg'?'translateY(90px)':'translateY(-10px)'
                                }}
                            >
                            <Button
                                onClick={()=>navigate(PATH.BUSINESS02)}
                                style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                <div
                                    className='intro-card-button'>
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
                    <Transition threshold={size=='lg'?8:5} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card3"
                                style={{
                                    float:size == 'lg'?'left':'right',
                                    transform : size == 'lg'?'translateY(100px)':'translateY(-100px) translateX(-100px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:size == 'lg'?'translateY(90px)':'translateY(-110px) translateX(-100px)'
                                }}
                            >
                                <Button
                                    onClick={()=>navigate(PATH.BUSINESS03)}
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                    <div
                                        className='intro-card-button'>
                                    <p>Mobile in my hand</p>
                                    <span>GIS와 결합된 스마트한 현장 업무환경 제공</span>
                                    <div className='intro-card-arrow'>
                                        <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                    </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </>
                    </Transition>
                    <Transition threshold={size=='lg'?11:6} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card4"
                                style={{
                                    float:size == 'lg'?'right':'left',
                                    transform : size == 'lg'?'translateY(200px)':'translateY(100px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:size == 'lg'?'translateY(190px)':'translateY(90px)'
                                }}
                            >
                                <Button
                                    onClick={()=>navigate(PATH.BUSINESS04)}
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                    <div
                                        className='intro-card-button'>
                                            <p>Land/Facility Management</p>
                                    <span>효율적인 국토 및 시설관리를 위한 GIS와 결합된 관리시스템</span>
                                    <div className='intro-card-arrow'>
                                        <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                    </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </>
                    </Transition>
                    <Transition threshold={size=='lg'?15:8} direction={'up'} time={500}>
                        <>
                            <motion.div
                                className="card"
                                id="card5"
                                style={{
                                    float:size == 'lg'?'left':'right',
                                    transform : size == 'lg'?'translateY(200px)':'translateY(0px) translateX(-100px)'
                                }}
                                whileHover={{
                                    boxShadow : '0px 0px 10px #666',
                                    transform:size == 'lg'?'translateY(190px)':'translateY(-10px) translateX(-100px)'
                                }}
                            >
                                <Button
                                    onClick={()=>navigate(PATH.BUSINESS05)}
                                    style={{cursor:'pointer',height:'100%', width:'100%'}}>
                                    <div
                                        className='intro-card-button'>
                                            <p>Environment</p>
                                        <span>기후변화에 대응할 수 있는 미래 환경 IT서비스 제공</span>
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
        <div style={{height:size=='lg'?'800px':'100px'}}>

        </div>
        </>
    )
}
