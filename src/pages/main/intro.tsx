import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion, useScroll, useTransform, useViewportScroll, Variants} from "framer-motion"
import {useEffect, useState} from "react";
import Transition from '@components/ui/transition/transition'

export const Intro = () => {
        const [scrollYProgress, setScrollYProgress] = useState(7);

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            console.log(scrollTop);
            if(scrollTop > 300){
                setScrollYProgress(300);
            }else{
                setScrollYProgress(scrollTop/100+7);
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
        <div className='intro'>
            <motion.div
                style={{
                    width:`${scrollYProgress*10}%`,
                    height:'2000px',
                    borderRadius: '30px',
                    background: 'linear-gradient(to bottom, #0068b7, #0087cc, #00a4d5, #00bfd6, #00d9d1, #3ee5df, #5df0ed, #76fcfb, #a1fbff, #cff9ff, #f0faff, #ffffff)'
                }}
            >
                <Transition threshold={1.5} direction={'up'} time={500}>
                    <>
                        <motion.div
                            className="card"
                            whileHover={{
                                boxShadow : '0px 0px 10px #666',
                                transform:'translateY(-10px)'
                            }}
                        >
                            <p>CONTENT1</p>
                        </motion.div>
                    </>
                </Transition>
                <Transition threshold={2} direction={'up'} time={500}>
                    <>
                        <motion.div
                            className="card"
                            whileHover={{
                                boxShadow : '0px 0px 10px #666',
                                transform:'translateY(-10px)'
                            }}
                        >
                            <p>CONTENT1</p>
                        </motion.div>
                    </>
                </Transition>
            </motion.div>
        </div>
    )
}
