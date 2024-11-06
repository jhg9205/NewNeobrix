import Footer from './footer'
import Header from './header'

import '@css/layout.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {motion} from "framer-motion"

import { RootState } from '@modules/reducer'
import { useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Popup from '@components/ui/popup'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/swiper-bundle.css'

import HeaderTop from './header/headerTop'
import { Button, Fab, Fade, Slide } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"


const Layout = (props: { children: React.ReactNode; main?: boolean }) => {
	const navigate = useNavigate()
	const indexView = useRef<HTMLDivElement>(null)
	const isPopup: boolean = useSelector((state: RootState) => state.layOutReducer.isPopup)
	const el: React.ReactNode = useSelector((state: RootState) => state.layOutReducer.children)

	let [scroll, setScroll] = useState(false)

	useEffect(() => {
		indexView.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		})
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll) //clean up
		}
	}, [])

	const handleScroll = () => {
		const top = document.querySelector('.container .top') as HTMLDivElement

		if (window.scrollY > 50) {
			top.style.backgroundColor = 'rgba(255, 255, 255, 0.37)'
			setScroll(true)
		} else {
			top.style.backgroundColor = 'rgba(255, 255, 255, 0.37)'
			setScroll(false)
		}
	}

	//swiper 후 slide
	const SwiperEvent1 = () => {
		const swiper = useSwiperSlide()

		return swiper.isActive ? (
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{
					ease: "easeInOut",
					duration: 2,
					y: { duration: 5 },
				}}
			>
				<div>
					<div className="slider-text-pc">
						<p className="swiper-main-text">No1. B2B Platform</p>
						<p className="swiper-main-black">Service Provider</p>
						<p className="swiper-main-mini"
						   style={{
							   marginTop:'68px'
						   }}
						>최고의 B2B 플랫폼 서비스 사업자,</p>
						<p className="swiper-main-mini">Neobrix가 만들어나가는 새로운 경험과 혁신의 미래로.</p>
						<Button
							id="recruitFile"
							variant="contained"
							sx={{
								width: '150px',
								height: '50px',
								borderRadius: '30px',
								margin: '20px 0px 30px 0',
								marginTop: '64px',
								padding: '15px 24px 15px 32px',
								backgroundColor:'#74f8c2'
							}}
							onClick={() => {
								navigate('/company')
							}}
						>
							<span
								style={{
									fontWeight: '500',
									fontSize: '16px',
									lineHeight: '18px'
								}}
							>더보기</span>
							<ArrowForwardIcon/>
						</Button>
					</div>
				</div>
			</motion.div>
		) : (
			<></>
		)
	}

	//swiper 후 slide
	const SwiperEvent2 = () => {
		const swiper = useSwiperSlide()

		return swiper.isActive ? (
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{
						ease: "easeInOut",
						duration: 2,
						y: { duration: 5 },
					}}
				>
					<div>
						<div className="slider-text-pc">
							<p className="swiper-main-text">디지털 트랜스포메이션의 시작,</p>
							<p className="swiper-main-black">전문가와 함께 하는 종합 IT 서비스.</p>
							<p className="swiper-main-mini"
							   style={{
								   marginTop:'68px'
							   }}
							>대규모 시스템 구축 및 운영은 풍부한 경험과 노하우를 보유한 Neobrix와 함께.</p>
							<p className="swiper-main-mini">맞춤형 종합 IT 서비스로 시작하는 디지털 트랜스포메이션.</p>
							<Button
								id="recruitFile"
								variant="contained"
								sx={{
									width: '150px',
									height: '50px',
									borderRadius: '30px',
									margin: '20px 0px 30px 0',
									marginTop: '64px',
									padding: '15px 24px 15px 32px',
									backgroundColor:'#74f8c2'
								}}
								onClick={() => {
									navigate('/company')
								}}
							>
							<span
								style={{
									fontWeight: '500',
									fontSize: '16px',
									lineHeight: '18px'
								}}
							>더보기</span>
								<ArrowForwardIcon/>
							</Button>
						</div>
					</div>
				</motion.div>
		) : (
			<></>
		)
	}

	const SwiperEvent3 = () => {
		const swiper = useSwiperSlide()

		return swiper.isActive ? (
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{
					ease: "easeInOut",
					duration: 2,
					y: { duration: 5 },
				}}
			>
				<div>
					<div className="slider-text-pc">
						{/*<div className="in-div" style={{height:'10px',width:'30%', backgroundColor:'#fdd947'}}></div>*/}
						<p className="swiper-main-text"
						>통합, 연결, 생성, 확장</p>
						<p className="swiper-main-black">무한한 유스트라 클라우드의 세계</p>
						<p className="swiper-main-mini"
							style={{
								marginTop:'68px'
							}}
						>당신이 필요로 하는 클라우드의 모든 것이 여기에</p>
						<p className="swiper-main-mini">Neobrix의 클라우드 서비스 브랜드</p>
						<Button
							id="recruitFile"
							variant="contained"
							sx={{
								width: '150px',
								height: '50px',
								borderRadius: '30px',
								margin: '20px 0px 30px 0',
								marginTop: '64px',
								padding: '15px 24px 15px 32px',
								backgroundColor:'#74f8c2'
							}}
							onClick={() => {
								navigate('/company')
							}}
						>
							<span
								style={{
									fontWeight: '500',
									fontSize: '16px',
									lineHeight: '18px'
								}}
							>더보기</span>
							<ArrowForwardIcon/>
						</Button>
					</div>
				</div>
			</motion.div>
		) : (
			<></>
		)
	}

	return (
		<div id="wrap">
			{/* <MenuList /> */}
			<div className="container">
				<div id="back-to-top-anchor" />
				<div id="img-container" ref={indexView}>
					<Header status={scroll} />
					<Swiper
						style={props.main ? { paddingTop: '0px' } : { display: 'none' }}
						loop={true}
						modules={[Navigation, Pagination, Autoplay, EffectFade]}
						spaceBetween={1}
						effect="fade"
						speed={2000}
						slidesPerView={1}
						navigation={{ prevEl: '.prev-swiper', nextEl: '.next-swiper' }}
						pagination={{ clickable: true }}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
					>
						<SwiperSlide>
							<div id="slider1" className="slider-img">
								<SwiperEvent1 />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div id="slider2" className="slider-img">
								<SwiperEvent2 />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div id="slider3" className="slider-img">
								<SwiperEvent3 />
							</div>
						</SwiperSlide>
						<button className="prev-swiper swiper-button-prev swiper-btn"></button>
						<div id="mouse-scroll" style={!scroll ? { visibility: 'visible' } : { visibility: 'hidden' }}>
							<div className="mouse">
								<div className="mouse-in"></div>
							</div>
						</div>
						<button className="next-swiper swiper-button-next swiper-btn"></button>
					</Swiper>
				</div>
				<main style={props.main ? {} : { marginTop: '0px' }}>
					<div className="contents">
						<div>{props.children}</div>
					</div>
				</main>
				<Footer />
			</div>
			<HeaderTop {...props}>
				<Fab size="large" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</HeaderTop>
			<Popup id="popupWrap" open={isPopup} styleType={0}>
				<>{el}</>
			</Popup>
			<Analytics/>
		</div>
	)
}

export default Layout
