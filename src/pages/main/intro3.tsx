import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import * as React from "react";

export const Intro3 = () => {
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
    return(
        <div className='intro3'>
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
                    <p>NeoBrix와</p>
                    <p>행복을 함께 할</p>
                    <p>인재를</p>
                    <p>찾습니다.</p>
                </motion.div>
            </motion.div>
        </div>
    )
}