import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'

import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import introImg from '@images/common/img-intro2.png'
import earth from '@images/main/earth.gif'
import logoBlack from '@images/common/logoN-black2.png'
import React from 'react'
import {Divider, Fade, Grid} from '@mui/material'
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import { motion } from 'framer-motion'
import {alert} from "@utils/alert";
import {ALERT} from "@common/const";
import {$FileDownLoad} from "@utils/request";
import {getViewSize} from "@utils/functions";
import { Helmet } from 'react-helmet-async';

const Menu1 = () => {
	const style = {
		width: '100%',
		minHeight: '600px',
		minWidth: '100%'
	}

	const handleClick = (event: React.MouseEvent, cName:String) => {

		let file = cName == 'ci-download3'?'/download/NEOBRIX.pdf':
					cName == 'ci-download1'?'/download/ci.png':
					cName == 'ci-download4'?'/download/Poster.pdf'
						:'/download/ci.ai'
		let name = cName == 'ci-download3'?'NEOBRIX_회사소개서':
			cName == 'ci-download4'? 'NEOBRIX_브로셔'
						:'NEOBRIX_logo'
		let type = cName == 'ci-download3'?'pdf':
					cName == 'ci-download1'?'png':
					cName == 'ci-download4'?'pdf':
							'ai'
		alert.confirm({
			type: ALERT.CONFIRM,
			text: `'${name}' 를\n 저장 하시겠습니까?\n\n`,
			confirmText: '확인',
			confirmCall: () => {
				$FileDownLoad(file, name, type)
			}
		})
	}

	return  (
		<Layout>
			<Helmet>
				<title>인사말 - 네오브릭스</title>
			</Helmet>
			<div id="companyLayout">
				<Swiper
					className='company-slide'
					loop={true}
					modules={[Navigation, Pagination, Autoplay, EffectFade]}
					spaceBetween={1}
					effect="slide"
					speed={2000}
					slidesPerView={1}
					navigation={{ prevEl: '.prev-swiper', nextEl: '.next-swiper' }}
					pagination={{ clickable: true }}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
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
									y: { duration: 3 },
								}}
							>
								<div>
									<p className='white-text'>CONFIDENCE</p>
									<p className='gra-text'>AND INTERACTION:</p>
									<p className='small-text'>Neobrix</p>
								</div>
							</motion.div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div id="slider2" className="slider-img">

						</div>
					</SwiperSlide>
				</Swiper>
				<div className="menu_title_contain" style={style}>
					<div className="contain" style={getViewSize()=='lg'?{}:{padding:'0 20px'}}>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{
								ease: "easeInOut",
								duration: 1,
								y: { duration: 1 },
							}}
						>
							<Grid container spacing={0}>
								<Grid item lg={6} md={12} xs={12}>
									<Fade in={true} timeout={1500}>
										<div className="ceo_area">
											<div className="ceo_tit">
												Neo BRIX의 기술과 서비스는
												{getViewSize()=='lg'?<br/>:<></>}
												고객의 디지털 트랜스포메이션 실현을 위한
												{getViewSize()=='lg'?<br/>:<></>}
												모든 서비스를 제공합니다.
											</div>
											<div className="ceo_txt">
												<p>
													고객 비지니스의 모든 영역에 디지털 기술을 통합하기 위해
													{getViewSize()=='lg'?<br/>:<></>}
													기업의 전략, 조직, 프로세스, 커뮤니케이션, 문화, 시스템,
													{getViewSize()=='lg'?<br/>:<></>}
													가치사슬, 비지니스 모델을 근본적으로 변화시키기 위한
													{getViewSize()=='lg'?<br/>:<></>}
													기술과 전문성을 제공합니다.
													{getViewSize()=='lg'?<br/>:<></>}
													새로운 경험과 혁신을 Neo BRIX와 함께 합니다.
												</p>
											</div>
											<div className='ci-logo'>
												<div onClick={(e)=>{handleClick(e,e.currentTarget.className)}} className='ci-download3'>
													<SystemUpdateAltIcon/>
													<span className='download'>회사소개서 다운로드</span>
												</div>
												<div onClick={(e)=>{handleClick(e,e.currentTarget.className)}} className='ci-download4'>
													<SystemUpdateAltIcon/>
													<span className='download'>브로셔 다운로드</span>
												</div>
											</div>
										</div>
									</Fade>
								</Grid>
								<Grid item lg={6} md={12} xs={12}>
									<div className="ceo_img">
										<FadeImg pc={earth} delay={1500} isContent={true} />
									</div>
								</Grid>
							</Grid>
						</motion.div>
					</div>
				</div>
				<Divider/>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						y: { duration: 1 },
					}}
				>
				<div className='greeting'>
					<div className='greeting-main'>
						Greetings
					</div>
					<div className='greeting-sub'>
						{getViewSize() == 'lg'?
						<>
							<p>자율-창조적인 마인드와 지속적인 기술개발을 통해</p>
							<p>손에 잡히는 IT서비스 제공으로 고객 만족을 보장하겠습니다.</p>
						</>:
							<p>자율-창조적인 마인드와 지속적인 기술개발을 통해 손에 잡히는 IT서비스 제공으로 고객의 성장을 보상하겠습니다.</p>
						}
					</div>
					<div className='greeting-content'>
						<p>
							NeoBRIX는 4차 산업혁명에 필요한 다양한 융복합 기술을 제공할 수 있는 전문가들로 구성하여 설립하였으며, 고객만족과 신뢰를
						</p>
						<p>
							최우선 가치로 서비스를 제공합니다.
						</p>
						<p>
							특히, 변화되는 디지털 환경에 맞게 단순한 기술도입이 아닌 비즈니스 모델과 조직문화를 재구성할 수 있는 디지털 트랜스포메이션(DX)
						</p>
						<p>
							서비스를 정보화사업에 제공하고자 합니다.
						</p>
						<p>
							이를 위해 고객이 언제 어디서나 일관된 채널을 통합(SI)하여 고객 데이터 분석(Big Data),
						</p>
						<p>
							실시간 상호 작용(Data Mining AI)을 지원하여 고객 만족도를 높이겠습니다.  이러한 NeoBRIX의 서비스
						</p>
						<p>
							시스템 통합(SI), 아웃소싱(ITO), IT컨설팅, 솔루션 도입 등 다양한 서비스로 제공 될 것입니다.
						</p>
						<p>
							앞으로도 NeoBRIX는 자율-창조적인 마인드의 인재 양성과 지속적인 기술개발을 통해 고객 자원의
						</p>
						<p>
							효율성 및 생산성을 높여 고객의 성장을 보장하는 혁신기업이 되겠습니다.
						</p>
						<p>
							감사합니다.
						</p>
					</div>
				</div>
				</motion.div>
				<Divider/>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						y: { duration: 1 },
					}}
				>
				<div className='ci'>
					<Grid container spacing={0}>
						<Grid item lg={6} md={12} xs={12}>
							<div className='ci-main'>
								<p>Corporate</p>
								<p>Identity</p>
							</div>
							<div className='ci-sub'>
								<p>NeoBrix의 심볼마크의 검정 컬러는 믿음을 상징합니다.</p>
								{getViewSize()=='lg'?
									<>
										<p>로고에 NeoBrix의 N이 녹아들어 있으며 위 아래 도형을 연결해주는 역할로서 B2B, B2C를 연결해주는 Bridge를 의미합니다.</p>
									</>:
									<p>로고에 NeoBrix의 N이 녹아들어 있으며 위 아래 도형을 연결해주는 역할로서 B2B, B2C를 연결해주는 Bridge를 의미합니다.</p>
								}
							</div>
							<div className='ci-logo'>
								<div onClick={(e)=>{handleClick(e,e.currentTarget.className)}} className='ci-download1'>
									<SystemUpdateAltIcon/>
									<span className='download'>CI 다운로드 (PNG)</span>
								</div>
								<div onClick={(e)=>{handleClick(e,e.currentTarget.className)}} className='ci-download2'>
									<SystemUpdateAltIcon/>
									<span className='download'>CI 다운로드 (ai)</span>
								</div>
							</div>
						</Grid>
						<Grid item lg={6} md={12} xs={12} style={{alignContent:'center'}}>
							<div className='ci-logoBox'>
								<img src={logoBlack}/>
							</div>
						</Grid>
					</Grid>
				</div>
				</motion.div>
			</div>
		</Layout>
	)
}

export default Menu1
