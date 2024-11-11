import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'

import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import introImg from '@images/common/img-intro2.png'
import React from 'react'
import {Button, Fade, Grid} from '@mui/material'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import Organize from '@images/common/organize.jpg'
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import { motion } from 'framer-motion'
import {alert} from "@utils/alert";
import {ALERT} from "@common/const";
import {$FileDownLoad} from "@utils/request";

const Menu1 = () => {
	const [ceo, setCeo] = React.useState(false)

	const style = {
		width: '100%',
		minHeight: '800px',
		minWidth: '100%'
	}

	const callEndFunc = () => {
		setCeo(true)
	}
	const handleClick = (event: React.MouseEvent) => {

		let file = '/download/NEOBRIX.pdf'
		let name = 'NEOBRIX_회사소개서'
		let type = 'pdf'
		alert.confirm({
			type: ALERT.CONFIRM,
			text: `'${name}' 를\n 저장 하시겠습니까?\n\n`,
			confirmText: '확인',
			confirmCall: () => {
				$FileDownLoad(file, name, type)
			}
		})
	}
	const menulist = MenuListbar(PATH.COMPANY00)

	return  (
		<Layout>
			<div id="companyLayout">
				<Swiper
					className='company-slide'
					loop={true}
					modules={[Navigation, Pagination, Autoplay, EffectFade]}
					spaceBetween={1}
					effect="slide"
					speed={1000}
					slidesPerView={1}
					navigation={{ prevEl: '.prev-swiper', nextEl: '.next-swiper' }}
					pagination={{ clickable: true }}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
				>
					<SwiperSlide>
						<div id="slider1" className="slider-img">

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
									<p className='white-text'>What we offer for</p>
									<p className='gra-text'>new normal era:</p>
									<p className='small-text'>Neobrix</p>
								</div>
							</motion.div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div id="slider2" className="slider-img">

							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{
									ease: "easeInOut",
									duration: 2,
									y: { duration: 3 },
								}}
							>
								<div>
									<p className='white-text'>What we offer for</p>
									<p className='gra-text'>new normal era:</p>
									<p className='small-text'>Neobrix</p>
								</div>
							</motion.div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className="menu_title_contain" style={style}>
					<div className="contain">
						<Transition threshold={-1} direction={'up'}>
							<Grid container spacing={0}>
								<Grid item lg={6} md={12}>
									<Fade in={true} timeout={1500}>
										<div className="ceo_area">
											<div className="ceo_tit">
												Neo BRIX의 기술과 서비스는
												<br />
												고객의 디지털 트랜스포메이션 실현을 위한
												<br/>
												모든 서비스를 제공합니다.
											</div>
											<div className="ceo_txt">
												<p>
													디지털적이 모든 것으로 발생하는 다양한 변화에 맞춰 디지털 기반으로 기업의
													<br />
													전략, 조직, 프로세스, 커뮤니케이션, 문화, 시스템, 가치사슬, 비지니스 모델을
													<br />
													근본적으로 변화시키기 위한 기술과 전문성을 제공합니다.
													<br />
													새로운 경험과 혁신을 Neo BRIX와 함께 합니다.
												</p>
											</div>

											<div onClick={handleClick} className='download-div'>
												<SystemUpdateAltIcon/>
												<span className='download'>회사소개서 다운로드</span>
											</div>
										</div>
									</Fade>
								</Grid>
								<Grid item lg={6} md={12}>
									<div className="ceo_img">
										<FadeImg pc={introImg} delay={1500} isContent={true} />
									</div>
								</Grid>
							</Grid>
						</Transition>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
