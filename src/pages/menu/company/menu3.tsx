import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import REQ1_2 from '@images/menu/REQ1_2.png'
import REQ2_1 from '@images/menu/REQ2_1.png'
import { motion } from "framer-motion";
import REQ3 from '@images/menu/REQ3.png'
import REQ5 from '@images/menu/REQ5.png'
import REQ6 from '@images/menu/REQ6.png'
import REQ7 from '@images/menu/REQ7.png'
import REQ8 from '@images/menu/REQ8.png'
import REQ9 from '@images/menu/REQ9.png'
import REQ10 from '@images/menu/REQ10.png'
import REQ11 from '@images/menu/REQ11.png'
import REQ12 from '@images/menu/REQ12.png'

import React, {useState} from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import {Box, Divider, Fab, Fade, Grid, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {useDispatch} from "react-redux";
import {getViewSize} from "@utils/functions";
import {setPopupShow} from "@modules/reducer/layout";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {TransitionProps} from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import RES1 from "@images/menu/RES1.png";
import RES2 from "@images/menu/RES2.png";
import RES3 from "@images/menu/RES3.png";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import {$FileDownLoad} from "@utils/request";
const title = [
	'사업자등록증',
	'소프트웨어사업자확인서',
	'중소기업확인서',
	'기업부설연구소 인정서',
	'직접생산증명서(공간정보DB)',
	'직접생산증명서(빅데이터분석)',
	'직접생산증명서(SW유지및지원)',
	'직접생산증명서(운영위탁&정보시스템유지관리)',
	'직접생산증명서(인터넷지원개발)',
	'직접생산증명서(정보인프라구축)',
	'직접생산증명서(패키지SW&정보시스템개발)'
]
const Menu3 = () => {
	const [patent, setPatent] = React.useState(false)
	const dispatch = useDispatch()
	const viewType = getViewSize()

	const style = {
		width: '100%',
		minHeight: '800px'
	}

	const callEndFunc = () => {
		setPatent(true)
	}

	const navigate = useNavigate()
	const itemData1 = [
		{
			key: '0',
			img: REQ1_2,
			title: '사업자 등록증'
		},
		{
			key: '1',
			img: REQ2_1,
			title: '소프트웨어사업자확인서'
		},
		{
			key: '2',
			img: REQ3,
			title: '중소기업확인서'
		},
		{
			key: '3',
			img: REQ12,
			title: '기업부설연구소인정서'
		},
		{
			key: '4',
			img: REQ5,
			title: '직접생산증명서(공간정보DB)'
		},
		{
			key: '5',
			img: REQ6,
			title: '직접생산증명서(빅데이터분석)'
		},
		{
			key: '6',
			img: REQ7,
			title: '직접생산증명서(SW유지및지원)'
		},
		{
			key: '7',
			img: REQ8,
			title: '직접생산증명서(운영위탁&정보시스템유지관리)'
		},
		{
			key: '8',
			img: REQ9,
			title: '직접생산증명서(인터넷지원개발)'
		},
		{
			key: '9',
			img: REQ10,
			title: '직접생산증명서(정보인프라구축)'
		},
		{
			key: '10',
			img: REQ11,
			title: '직접생산증명서(패키지SW&정보시스템개발)'
		}
	]
	const itemData2 = [
		{
			key: '1',
			img: RES1,
			title: '빅데이터 및 인공지능 기반 생산설비 관리 시스템'
		},
		{
			key: '2',
			img: RES2,
			title: '인공지능을 이용한 제품성능검증 시스템'
		},
		{
			key: '3',
			img: RES3,
			title: '머신러닝 학습데이터를 이용하는 반려동물 상태진단 장치'
		}
	]
	const itemData3 = [
		{
			key: '1',
			img: '',
			title: 'ISO뭐시기뭐시기'
		}
	]
	
	const onImageClick = (event: React.MouseEvent) => {
		const src = event.currentTarget.querySelector('img')?.src

		let width: string = ''

		switch (viewType) {
			case 'lg':
				width = '500px'
				break
			case 'md':
				width = '450px'
				break
			case 'sm':
				width = '350px'
				break
		}

		const popup = <img src={src} style={{ width: width, height: 'auto' }} />

		dispatch(setPopupShow(true, popup))
	}
	return (
		<Layout>
			<Helmet>
				<title>면허및특허 - 네오브릭스</title>
			</Helmet>
			{getViewSize()=='lg'?
				<>
					<div className='menu-header'>
						<div style={{fontSize:'60px', fontWeight:'600'}}>
							면허 및 특허
						</div>
						<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
							<span>네오브릭스 면허 및 특허</span>
							<div style={{float:'right',fontSize:'16px'}}>
								<div className='header-down-left' onClick={()=>navigate('/customer')}>
									<MailOutlineRoundedIcon style={{marginRight:'8px'}}/>
									고객문의
								</div>
								·
								<div className='header-down-right' onClick={()=>$FileDownLoad('/download/NEOBRIX.pdf', 'NEOBRIX_회사소개서', 'pdf')}>
									<PlagiarismOutlinedIcon style={{marginRight:'8px'}}/>
									회사소개서
								</div>
							</div>
						</div>
					</div>
					<Divider/>
					<div className='menu-flow'>
						<HomeIcon onClick={()=>{navigate('/')}}/>
						<p>&gt; 기업소개 &gt; </p><span>면허 및 특허</span>
					</div>
				</>:
				<Grid container>
					<Grid item sm={8} className='menu-header-mobile'>
						<div className='menu-flow-mobile'>
							<HomeIcon onClick={()=>{navigate('/')}}/>
							<span> · 기업소개 · 면허 및 특허</span>
						</div>
						<div className='menu-sub-mobile'>
							<p>면허 및 특허</p>
						</div>
					</Grid>
					<Grid item sm={4} className='menu-bg-mobile'>

					</Grid>
				</Grid>
			}
			<Divider/>
			<div id="patentLayout">
				<div className="menu_title_contain" style={style}>
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
						<div className="menu_title_p_fixed_warp">
							<section>
								<p className="menu_title_p1">
									면<span>허현황</span>
								</p>
								<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
							</section>
						</div>
					</motion.div>
					<div className="contain">
							<div className="imagelist_warp">
								<ImageList cols={3} gap={20}>
									{itemData1.map(item => (
										<motion.div
											initial={{ opacity: 0, y: 100 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: false }}
											transition={{
												ease: "easeInOut",
												duration: 1,
												y: { duration: 1 },
											}}
											key={item.key}
										>
										<ImageListItem style={{ border: '1px sold #ccc', cursor: 'pointer' }} onClick={onImageClick}>
											<FadeImg id="patentImgList" pc={`${item.img}`} delay={1500} isContent={true} />
											<ImageListItemBar title={item.title} position="bottom" />
										</ImageListItem>
										</motion.div>
									))}
								</ImageList>
							</div>
					</div>
				</div>
				<Divider/>
				<div className="menu_title_contain" style={style}>
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
						<div className="menu_title_p_fixed_warp">
							<section>
								<p className="menu_title_p1">
									특<span>허현황</span>
								</p>
								<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
							</section>
						</div>
					</motion.div>
					<div className="contain">
							<div className="imagelist_warp">
								<ImageList cols={3} gap={20}>
									{itemData2.map(item => (
										<motion.div
											initial={{ opacity: 0, y: 100 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: false }}
											transition={{
												ease: "easeInOut",
												duration: 1,
												y: { duration: 1 },
											}}
											key={item.key}
										>
										<ImageListItem style={{ border: '1px sold #ccc', cursor: 'pointer' }} onClick={onImageClick}>
											<FadeImg id="patentImgList" pc={`${item.img}`} delay={1500} isContent={true} />
											<ImageListItemBar title={item.title} position="bottom" />
										</ImageListItem>
										</motion.div>
									))}
								</ImageList>
							</div>
					</div>
				</div>
				<Divider/>
				<div className="menu_title_contain" style={style}>
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
						<div className="menu_title_p_fixed_warp">
							<section>
								<p className="menu_title_p1">
									인<span>증현황</span>
								</p>
								<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
							</section>
						</div>
					</motion.div>
					<div className="contain">
						<div className="imagelist_warp">
							<ImageList cols={3} gap={20}>
								{itemData3.map(item => (
									<motion.div
										initial={{ opacity: 0, y: 100 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: false }}
										transition={{
											ease: "easeInOut",
											duration: 1,
											y: { duration: 1 },
										}}
										key={item.key}
									>
										<ImageListItem style={{ border: '1px sold #ccc', cursor: 'pointer' }} onClick={onImageClick}>
											<FadeImg id="patentImgList" pc={`${item.img}`} delay={1500} isContent={true} />
											<ImageListItemBar title={item.title} position="bottom" />
										</ImageListItem>
									</motion.div>
								))}
							</ImageList>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu3
const TransitionCustom = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="down" ref={ref} {...props} />;
});