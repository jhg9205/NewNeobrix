import Layout from '@components/layouts/layout'
import React from 'react'
import {Divider, Grid} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";
import dream from '@images/menu/intro-dream.png'
import target from '@images/menu/target.png'
import chart from '@images/menu/chart.png'
import slogen from '@images/menu/slogen.png'
import shake from '@images/menu/shake.png'
import check from '@images/menu/check.png'
import earth from '@images/menu/earth.png'
import baloon from '@images/menu/baloon.png'
import { motion } from "framer-motion";
import {getViewSize} from "@utils/functions";
import {Helmet} from "react-helmet-async";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";


const Menu2 = () => {

	const [patent, setPatent] = React.useState(false)
	const navigate = useNavigate()
	const callEndFunc = () => {
		setPatent(true)
	}

	return (
		<Layout>
			<Helmet>
				<title>비전 - 네오브릭스</title>
			</Helmet>
			{getViewSize()=='lg'?
			<>
				<div className='menu-header'>
					<div style={{fontSize:'60px', fontWeight:'600'}}>
						비전 및 이념
					</div>
					<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
						<span>네오브릭스 비전 및 핵심가치</span>
						<div style={{float:'right',fontSize:'16px'}}>
							<div className='header-down-left'>
								<MailOutlineRoundedIcon style={{marginRight:'8px'}}/>
								고객문의
							</div>
							·
							<div className='header-down-right'>
								<PlagiarismOutlinedIcon style={{marginRight:'8px'}}/>
								회사소개서
							</div>
						</div>
					</div>
				</div>
				<Divider/>
				<div className='menu-flow'>
					<HomeIcon onClick={()=>{navigate('/')}}/>
					<p>&gt; 기업소개 &gt; </p><span>비전</span>
				</div>
			</>:
				<Grid container>
					<Grid item sm={8} className='menu-header-mobile'>
						<div className='menu-flow-mobile'>
							<HomeIcon onClick={()=>{navigate('/')}}/>
							<span> · 기업소개 · 비전</span>
						</div>
						<div className='menu-sub-mobile'>
							<p>비전 및 이념</p>
						</div>
					</Grid>
					<Grid item sm={4} className='menu-bg-mobile'>

					</Grid>
				</Grid>
			}
			<Divider/>
			<div id="organizationLayout">
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
				<div className='intro-dream'>
					<p className='intro-dream-title'>Neo BRIX의 다양한 IT 분야 전문가들이 당신의 꿈과 함께 합니다.</p>
					<p className='intro-dream-sub'>Neobrix는 사람을 중요하게 생각하고 우수한 조직문화를 바탕으로 변화와 혁신을 주도하고 있습니다.
						최신 ICT기술을 적용한 신규 솔루션 및 서비스 제공을 위한 지속적인 활동을 하고, 차별화된 고객 서비스 제공을 위해 항상 노력하고 고민하는 기업으로 발전해 가고자 합니다.</p>
				</div>
				<div className='intro-dream'>
					<Grid container>
						<Grid item lg={2} style={{textAlign:'center'}} md={12}>
							<img src={chart}/>
						</Grid>
						<Grid item lg={10} md={12}>
							<p className='intro-dream-main'>비전</p>
							<p className='intro-dream-sub'>구성원 개개인의 자율적인고 창조적인 마인드로 세상을 이롭게 – 행복을 줄 수 있는 기업</p>
						</Grid>
					</Grid>
				</div>
					<div className='intro-dream'>
						<Grid container>
							<Grid item lg={2} style={{textAlign:'center'}} md={12}>
								<img src={slogen}/>
							</Grid>
							<Grid item lg={10} md={12}>
								<p className='intro-dream-main'>슬로건</p>
								<p className='intro-dream-sub'>AUTOONOMY,  CONFIDENCE AND INTERACTION</p>
							</Grid>
						</Grid>
					</div>
					<div className='intro-dream'>
						<Grid container>
							<Grid item lg={2} style={{textAlign:'center'}} md={12}>
								<img src={target}/>
							</Grid>
							<Grid item lg={10} md={12}>
								<p className='intro-dream-main'>경영철학</p>
								<p className='intro-dream-sub'>행복한 구성원이 행복한 기업을 만든다. 행복한 기업이 행복한 세상을 만든다.</p>
							</Grid>
						</Grid>
					</div>
				</motion.div>
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
				<div className='intro-value'>
					<Grid container>
						<Grid item lg={3} md={6}>
							<img src={check}/>
							<p className='vision-main'>자율=책임</p>
							<p className='vision-sub'>개인의 자율에 의한</p>
							<p className='vision-sub'>책임감</p>
						</Grid>
						<Grid item lg={3} md={6}>
							<img src={shake}/>
							<p className='vision-main'>상호 존중=신뢰</p>
							<p className='vision-sub'>상호 존중하는 관계에서</p>
							<p className='vision-sub'>나오는 신뢰성</p>
						</Grid>
						<Grid item lg={3} md={6}>
							<img src={baloon}/>
							<p className='vision-main'>소통=협업</p>
							<p className='vision-sub'>소통으로 만드는</p>
							<p className='vision-sub'>협업</p>
						</Grid>
						<Grid item lg={3} md={6}>
							<img src={earth}/>
							<p className='vision-main'>행복한 사회</p>
							<p className='vision-sub'>행복한 사회를 추구하는</p>
							<p className='vision-sub'>사회적 기업</p>
						</Grid>
					</Grid>
				</div>
				</motion.div>
			</div>
		</Layout>
	)
}

export default Menu2
