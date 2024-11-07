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

export const Intro2 = () => {
	const navigate = useNavigate()
	const swiperRef = useRef<SwiperType>();
	return (
		<div className='intro2'>
			<div id='intro2-main'>
				<div id='intro2-main1'>
					<p>NEOBRIX</p>
					<p>DIGITAL TRANSFORMATION</p>
					<p>CUSTOMER</p>
				</div>
				<div id='intro2-main2'>
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
				</div>
			</div>
			<div id='intro2-main3'>
				<Swiper
					loop={true}
					slidesPerView={5}
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{delay:2000}}
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
								<p>SI(시스템통합)</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
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
								<p>프로젝트1</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
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
								<p>프로젝트2</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
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
								<p>프로젝트3</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
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
								<p>프로젝트4</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
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
								<p>프로젝트5</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
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
								<p>프로젝트6</p>
								<span>지속적 계발과 안정적인 기술인력을 통해 컨설팅, 시스템 구축, 운영 전반의 최고의 서비스를 제공합니다.</span>
								<div className='intro2-card-arrow'>
									<ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
								</div>
							</div>
						</Button>
					</SwiperSlide>
				</Swiper>
			</div>
			<div id='intro2-main4'>
				<Swiper
					loop={true}
					slidesPerView={9}
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{delay:1000}}
					navigation={{ prevEl: '.prev-swiper', nextEl: '.next-swiper' }}
					modules={[Navigation,Autoplay]}
					className="mySwiper">
					<SwiperSlide>협력사로고1</SwiperSlide>
					<SwiperSlide>협력사로고2</SwiperSlide>
					<SwiperSlide>협력사로고3</SwiperSlide>
					<SwiperSlide>협력사로고4</SwiperSlide>
					<SwiperSlide>협력사로고5</SwiperSlide>
					<SwiperSlide>협력사로고6</SwiperSlide>
					<SwiperSlide>협력사로고7</SwiperSlide>
					<SwiperSlide>협력사로고8</SwiperSlide>
					<SwiperSlide>협력사로고9</SwiperSlide>
					<button className="prev-swiper swiper-button-prev swiper-btn" style={{padding:'0 100px'}}></button>
					<button className="next-swiper swiper-button-next swiper-btn" style={{padding:'0 100px'}}></button>
				</Swiper>
			</div>
		</div>
	)
}
