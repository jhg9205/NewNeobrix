import {Button, Card, Divider, Grid} from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import {useRef} from "react";
import { Swiper as SwiperType } from "swiper/types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from 'framer-motion';
import shLogo from "@images/main/shLogo.png"
import landLogo from "@images/main/lhLogo.png"
import natureLogo from "@images/main/natureLogo.png"
import trianLogo from "@images/main/trianLogo.png"
import ligLogo from "@images/main/ligLogo.png"
import sgaLogo from "@images/main/sgaLogo.png"
import airportLogo from "@images/main/airportLogo.jpg"
import rawLogo from "@images/main/rawLogo.png"
import dataLogo from "@images/main/dataLogo.png"
import kwaterLogo from "@images/main/kwaterLogo.png"
import energyLogo from "@images/main/energyLogo.png"
import {getViewSize} from "@utils/functions";

export const Intro2 = () => {
	const navigate = useNavigate()
	const size = getViewSize()
	const swiperRef = useRef<SwiperType>();
	return (
		<div className='intro2'>
			<div id='intro2-main'>
				<motion.div
					initial={{ opacity: 0, y: 100, x:-100}}
					whileInView={{ opacity: 1, y: 0, x:0 }}
					viewport={{ once: false }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						y: { duration: 1 },
					}}
				>
					<div id='intro2-main1'>
						<p>NEOBRIX</p>
						<p>DIGITAL TRANSFORMATION</p>
						<p>CUSTOMER</p>
					</div>
				</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 100,x:100}}
						whileInView={{ opacity: 1, y: 0,x:0 }}
						viewport={{ once: false }}
						transition={{
							ease: "easeInOut",
							duration: 1,
							y: { duration: 1 },
						}}
						id='intro2-main2'
					>
						<div>
							<ArrowCircleLeftOutlinedIcon className='left-arrow'
														 onClick={() => {
															 swiperRef.current?.slidePrev()
														 }}
														 style={{fontSize:'60px', cursor:'pointer'}}
							/>
							<ArrowCircleRightOutlinedIcon className='right-arrow'
														  onClick={() => {
															  swiperRef.current?.slideNext()
														  }}
														  style={{fontSize:'60px', cursor:'pointer'}}
							/>
						</div>
					</motion.div>
			</div>
			<div id='intro2-main3'>
				<motion.div
					initial={{ opacity: 0, y: 200}}
					whileInView={{ opacity: 1, y: 0}}
					viewport={{ once: false }}
					transition={{
						ease: "easeInOut",
						duration: 2,
						y: { duration: 2 },
					}}
				>
				<Swiper
					loop={true}
					slidesPerView={size=='lg'?5:1}
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{delay:2000,reverseDirection:true}}
					onSwiper={(swiper)=>{
						swiperRef.current = swiper;
					}}
					modules={[Autoplay]}
					className="mySwiper">
					<SwiperSlide>
						<Button
							style={{cursor:'pointer',height:'400px', width:'378px'}}>
							<div
								className='intro2-card-button'
								style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
								<div className='intro2-card-logo' id='intro2-card-logo1' style={{width:'100%'}}></div>
								<Divider/>
								<p>전사자원통합관리시스템 구축</p>
								<span>#주택매입 #보상 #건축물안전관리</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{fontSize:'50px'}}/>
								</div>
							</div>
						</Button>
					</SwiperSlide>
					<SwiperSlide>
						<Button
							style={{cursor:'pointer',height:'400px', width:'378px'}}>
							<div
								className='intro2-card-button'
								style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
								<div className='intro2-card-logo' id='intro2-card-logo2' style={{width:'100%'}}></div>
								<Divider/>
								<p>프로젝트1</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{fontSize:'50px'}}/>
								</div>
							</div>
						</Button>
					</SwiperSlide>
					<SwiperSlide>
						<Button
							style={{cursor:'pointer',height:'400px', width:'378px'}}>
							<div
								className='intro2-card-button'
								style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
								<div className='intro2-card-logo' id='intro2-card-logo3' style={{width:'100%'}}></div>
								<Divider/>
								<p>프로젝트2</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{fontSize:'50px'}}/>
								</div>
							</div>
						</Button>
					</SwiperSlide>
					<SwiperSlide>
						<Button
							style={{cursor:'pointer',height:'400px', width:'378px'}}>
							<div
								className='intro2-card-button'
								style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
								<div className='intro2-card-logo' id='intro2-card-logo4' style={{width:'100%'}}></div>
								<Divider/>
								<p>프로젝트3</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{fontSize:'50px'}}/>
								</div>
							</div>
						</Button>
					</SwiperSlide>
					<SwiperSlide>
						<Button
							style={{cursor:'pointer',height:'400px', width:'378px'}}>
							<div
								className='intro2-card-button'
								style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
								<div className='intro2-card-logo' id='intro2-card-logo5' style={{width:'100%'}}></div>
								<Divider/>
								<p>프로젝트4</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{fontSize:'50px'}}/>
								</div>
							</div>
						</Button>
					</SwiperSlide>
					<SwiperSlide>
						<Button
							style={{cursor:'pointer',height:'400px', width:'378px'}}>
							<div
								className='intro2-card-button'
								style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
								<div className='intro2-card-logo' id='intro2-card-logo6' style={{width:'100%'}}></div>
								<Divider/>
								<p>프로젝트5</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{fontSize:'50px'}}/>
								</div>
							</div>
						</Button>
					</SwiperSlide>
					<SwiperSlide>
						<Button
							style={{cursor:'pointer',height:'400px', width:'378px'}}>
							<div
								className='intro2-card-button'
								style={{verticalAlign:'bottom',display:'table-cell', padding:'0 40px',width:'100%'}}>
								<div className='intro2-card-logo' id='intro2-card-logo7' style={{width:'100%'}}></div>
								<Divider/>
								<p>프로젝트6</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{fontSize:'50px'}}/>
								</div>
							</div>
						</Button>
					</SwiperSlide>
				</Swiper>
				</motion.div>
			</div>
			<div id='intro2-main4'>
				<motion.div
					initial={{ opacity: 0, y: 200}}
					whileInView={{ opacity: 1, y: 0}}
					viewport={{ once: false }}
					transition={{
						ease: "easeInOut",
						duration: 0.5,
						y: { duration: 0.5 },
					}}
				>
					<Swiper
						loop={true}
						slidesPerView={size=='lg'?9:3}
						spaceBetween={100}
						centeredSlides={true}
						autoplay={{delay:1000}}
						navigation={{ prevEl: '.prev-swiper', nextEl: '.next-swiper' }}
						modules={[Navigation,Autoplay]}
						className="mySwiper">
						<SwiperSlide><img src={shLogo}/></SwiperSlide>
						<SwiperSlide><img src={landLogo}/></SwiperSlide>
						<SwiperSlide><img src={natureLogo}/></SwiperSlide>
						<SwiperSlide><img src={trianLogo}/></SwiperSlide>
						<SwiperSlide><img src={ligLogo}/></SwiperSlide>
						<SwiperSlide><img src={sgaLogo}/></SwiperSlide>
						<SwiperSlide><img src={airportLogo}/></SwiperSlide>
						<SwiperSlide><img src={rawLogo}/></SwiperSlide>
						<SwiperSlide><img src={dataLogo}/></SwiperSlide>
						<SwiperSlide><img src={kwaterLogo}/></SwiperSlide>
						<SwiperSlide><img src={energyLogo}/></SwiperSlide>
						<button className="prev-swiper swiper-button-prev swiper-btn" style={{padding:size=='lg'?'0 100px':'0 20px'}}></button>
						<button className="next-swiper swiper-button-next swiper-btn" style={{padding:size=='lg'?'0 100px':'0 20px'}}></button>
					</Swiper>
				</motion.div>
			</div>
		</div>
	)
}
