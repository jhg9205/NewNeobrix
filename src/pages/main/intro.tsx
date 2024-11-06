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
        <div className='intro'>
            <motion.div
                style={{
                    width:`${scrollYProgress*10}%`,
                    height:'2000px',
                    borderRadius: '30px',
                    background: 'linear-gradient(to bottom, #74f8c2, #00e2d3, #00c9de, #00addf, #0090d2, #3f8ed0, #5a8bcd, #6e89c9, #99a4d6, #bec1e3, #e0dff1, #ffffff)'
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
