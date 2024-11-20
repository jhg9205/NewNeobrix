import Layout from '@components/layouts/layout'
import Transition from '@components/ui/transition/transition'
import { motion } from "framer-motion";
import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import {Card, Divider, Grid} from '@mui/material'
import recruit0 from '@images/menu/recruit0.jpg'
import recruit1 from '@images/menu/recruit1.jpg'
import recruit2 from '@images/menu/recruit2.jpg'
import recruit3 from '@images/menu/recruit3.jpg'
import recruit4 from '@images/menu/recruit4.jpg'
import recruit5 from '@images/menu/recruit5.jpg'
import recruit6 from '@images/menu/recruit1.jpg'
import recruit7 from '@images/menu/recruit0.jpg'
import recruit8 from '@images/menu/recruit8.png'
import recruit9 from '@images/menu/recruit5.jpg'
import recruitMain from '@images/menu/recruit-main.png'
import recruitMain2 from '@images/menu/recruit-main2.png'
import { fontStyle } from 'html2canvas/dist/types/css/property-descriptors/font-style'
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";

const Menu3 = () => {
	const navigate = useNavigate();
	

	return (
		<Layout>
			<div className='menu-header'>
				<div style={{fontSize:'60px', fontWeight:'600'}}>
					인사제도
				</div>
				<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
					<span>네오브릭스의 인사제도</span>
				</div>
			</div>
			<Divider/>
			<div className='menu-flow'>
				<HomeIcon onClick={()=>{navigate('/')}}/>
				<p>&gt; 인재채용 &gt; </p><span>인사제도</span>
			</div>
			<Divider/>
			<div id="listLayout">
				<motion.div
					className='intro-text'
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					viewport={{ once: false }}
					transition={{
						ease: "easeInOut",
						duration: 0.5,
						y: { duration: 0.5 },
					}}
				>
					<div className="menu_title_contain" style={{width:'100%',textAlign:'center'}}>
						<p className='menu-header2'>인사제도</p>
						<p className='hr-sub'>Neo BRIX의 다양한 IT분야 전문가들이 당신의 꿈과 함께 합니다.</p>
						<p className='hr-text'>Neo BRIX는 데이터 사이언스팀, 디지털 트랜스포메이션팀, 모바일 컨버젼팀 등으로 이루어져 팀단위 발전을 통해 기술 및 비지니스 전문
							역량을 갖춘 인재를 육성합니다.</p>
						<Grid container style={{ padding: '50px 0', width: '70%', margin: '0 auto' }}>
							<Grid item lg={3.5} style={{marginBottom:'50px', textAlign:'left'}}>
								<img src={recruitMain} className='recruit-main-img'/>
							</Grid>
							<Grid item lg={8.5} style={{marginBottom:'50px'}}>
								<p className='role-main-text'>인사제도 기본방향</p>
								<p className='role-sub-text'>성과/능력주의</p>
								<p className='role-text'>성과와 잠재 능력에 대해 보상과 승급 등이 보장됨</p>
								<p className='role-sub-text'>리더중심</p>
								<p className='role-text'>팀 및 구성원별 자율과 책임 강화를 위해 팀 단위 리더들에게 대폭적인 권한을 부여하여 자율적인 운영</p>
								<p className='role-sub-text'>공정/객관적인 제도 운영</p>
								<p className='role-text'>목표 수립 및 합의하는 과정을 포함해 공정성을 최대한 확보</p>
							</Grid>
							<Grid item lg={3.5} style={{textAlign:'left'}}>
								<motion.div
									className='intro-text'
									initial={{ opacity: 0, y: 50}}
									whileInView={{ opacity: 1, y: 0}}
									viewport={{ once: false }}
									transition={{
										ease: "easeInOut",
										duration: 0.5,
										y: { duration: 0.5 },
									}}
								>
								<img src={recruitMain2} className='recruit-main-img'/>
								</motion.div>
							</Grid>
							<Grid item lg={8.5}>
								<motion.div
									className='intro-text'
									initial={{ opacity: 0, y: 50}}
									whileInView={{ opacity: 1, y: 0}}
									viewport={{ once: false }}
									transition={{
										ease: "easeInOut",
										duration: 0.5,
										y: { duration: 0.5 },
									}}
								>
									<p className='role-main-text'>보상제도</p>
									<p className='role-sub-text'>기본급</p>
									<p className='role-text'>연봉제 형태로 매년 평가에 의해 조정된 연봉을 12등분하여 매월 지급</p>
									<p className='role-sub-text'>성과급/인센티브</p>
									<p className='role-text'>개인/팀별 성과를 공정하게 평가하여 일정 목표 달성 시 별도로 지급</p>
									<p className='role-sub-text'>퇴직금</p>
									<p className='role-text'>퇴직연금제도를 통하여 전 직원의 퇴직금을 효율적으로 운영관리</p>
								</motion.div>
							</Grid>
						</Grid>
					</div>
				</motion.div>
			</div>
		</Layout>
	)
}

export default Menu3
