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
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import Popup from '@components/ui/popup'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/swiper-bundle.css'

import HeaderTop from './header/headerTop'
import { Button, Fab, Fade, Slide, Box, Backdrop, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import useScrollTrigger from "@mui/material/useScrollTrigger";

const actions = [
	{ icon: <ConnectWithoutContactIcon style={{color:'#f38225'}}/>, name: '문의하기' }
];

const Layout = (props: { children: React.ReactNode; main?: boolean }) => {
	const navigate = useNavigate()
	const indexView = useRef<HTMLDivElement>(null)
	const isPopup: boolean = useSelector((state: RootState) => state.layOutReducer.isPopup)
	const el: React.ReactNode = useSelector((state: RootState) => state.layOutReducer.children)

	let [scroll, setScroll] = useState(false)
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		navigate('/customer')
		setOpen(false);
	}
	const trigger = useScrollTrigger({
		target: window,
		disableHysteresis: true,
		threshold: 100
	})
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
			top.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
			setScroll(true)
		} else {
			top.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
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
					y: { duration: 2 },
				}}
			>
				<div>
					<div className="slider-text-pc">
						<p className="swiper-main-text">IT 및 업무 전문가와 함께 하는</p>
						<p className="swiper-main-black">디지털 트랜스포메이션</p>
						<p className="swiper-main-mini"
						   style={{
							   marginTop:'68px'
						   }}
						>환경, 국토, 교육 분야</p>
						<p className="swiper-main-mini">Neo BRIX의 풍부한 경험과 노하우를 보유한 직원들과 함께</p>
						<p className="swiper-main-mini">맞춤형 IT서비스로 디지털 트랜스포메이션 성공을</p>
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
						y: { duration: 2 },
					}}
				>
					<div>
						<div className="slider-text-pc">
							<p className="swiper-main-text">통합-연결-관리-생성-분석-AI</p>
							<p className="swiper-main-black">무한한 Data Mining 세계로</p>
							<p className="swiper-main-mini"
							   style={{
								   marginTop:'68px'
							   }}
							>Neo BRIX의 Big Data 및 AI 플랫폼은</p>
							<p className="swiper-main-mini">고객이 필요로 하는</p>
							<p className="swiper-main-mini">Data Mining 서비스를 제공합니다.</p>
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
					y: { duration: 2 },
				}}
			>
				<div>
					<div className="slider-text-pc">
						{/*<div className="in-div" style={{height:'10px',width:'30%', backgroundColor:'#fdd947'}}></div>*/}
						<p className="swiper-main-text"
						>내 손안에 IT솔루션</p>
						<p className="swiper-main-black">Smarts Mobile</p>
						<p className="swiper-main-mini"
							style={{
								marginTop:'68px'
							}}
						>Neo BRIX의 Mobile플랫폼은 GIS(지리정보)와</p>
						<p className="swiper-main-mini">결합하여 스마트한 현장 업무환경을 위한</p>
						<p className="swiper-main-mini">컨설팅부터 구축, 운영까지</p>
						<Button
							id="recruitFile"
							variant="contained"
							sx={{
								width: '150px',
								height: '50px',
								borderRadius: '30px',
								margin: '20px 0px 30px 0',
								marginTop: '64px',
								padding: '15px 24px 15px 32px'
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
						autoplay={{ delay: 4000, disableOnInteraction: false }}
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
			<Fade in={trigger}>
				<Box sx={{ height: 330, position: 'fixed', bottom: 80, right: 15, flexGrow: 1 }}>
					<SpeedDial
						ariaLabel="SpeedDial tooltip example"
						sx={{ position: 'absolute', bottom: 16, right: 16 }}
						icon={<SpeedDialIcon />}
						onOpen={handleOpen}
						onClick={()=>{setOpen(false)}}
						onMouseLeave={()=>{setOpen(false)}}
						open={open}
					>
						{actions.map((action) => (
							<SpeedDialAction
								key={action.name}
								icon={action.icon}
								tooltipTitle={
								<span
									style={{padding:'30px', color:'#f38225', fontWeight:'400'}}
								>{action.name}</span>
								}
								tooltipOpen
								onClick={handleClose}
							/>
						))}
					</SpeedDial>
				</Box>
			</Fade>
			<Popup id="popupWrap" open={isPopup} styleType={0}>
				<>{el}</>
			</Popup>
			<Analytics/>
		</div>
	)
}

export default Layout
