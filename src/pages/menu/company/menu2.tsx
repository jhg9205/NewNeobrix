import Layout from '@components/layouts/layout'
import React from 'react'
import {Divider, Grid} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";
import dream from '@images/menu/intro-dream.png'
import shake from '@images/menu/shake.png'
import check from '@images/menu/check.png'
import earth from '@images/menu/earth.png'
import baloon from '@images/menu/baloon.png'
import { motion } from "framer-motion";
import {getViewSize} from "@utils/functions";


const Menu2 = () => {

	const [patent, setPatent] = React.useState(false)
	const navigate = useNavigate()
	const callEndFunc = () => {
		setPatent(true)
	}

	return (
		<Layout>
			{getViewSize()=='lg'?
			<>
				<div className='menu-header'>
					<div style={{fontSize:'60px', fontWeight:'600'}}>
						비전 및 이념
					</div>
					<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
						<span>네오브릭스 비전 및 핵심가치</span>
					</div>
				</div>
				<Divider/>
				<div className='menu-flow'>
					<HomeIcon onClick={()=>{navigate('/')}}/>
					<p>&gt; 기업소개 &gt; </p><span>비전 및 이념</span>
				</div>
			</>:
				<Grid container>
					<Grid item sm={8} className='menu-header-mobile'>
						<div className='menu-flow-mobile'>
							<HomeIcon onClick={()=>{navigate('/')}}/>
							<span> · 기업소개 · 비전 및 이념</span>
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
					<img src={dream}/>
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
