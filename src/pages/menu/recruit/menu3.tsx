import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-recruit.png'
import subTileMobile from '@images/menu/bg-recruit-m.png'
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
	const [check, setCheck] = React.useState(false)
	const menulist = MenuListbar(PATH.RECRUIT03)

	const data = [
		{ title: '장기근속포상', content: '장기근속 직원에게 포상휴가와 휴가비를 지원합니다.' },
		{ title: '경조사 유급휴가', content: '직원의 경조사(신혼여행, 장례식 등)에 휴가를 부여합니다.' },
		{ title: '(야근시)석식비, 교통비 제공', content: '부득이하게 야근을 할 경우 석식과 교통비를 지원합니다.' },
		{ title: '사무실 다과 제공', content: '직원을 위한 간식을 제공합니다.' },
		{
			title: '도서비 지원',
			content: '개발이나 자기계발에 필요한 도서 구입 시 도서비를 지원해 업무에 도움이 되도록 노력하고 있습니다.'
		},
		{ title: '자격증 수당 제공', content: '신규 자격증(기사, 산업기사) 취득시 축하금을 제공합니다.' },
		{ title: '파견 상주비 지원', content: '3개월 이상 지방 파견시 숙소 보증금, 숙소 월세, 공과금 및 파견지원비를 지급합니다.' },
		{ title: '지인추천제', content: '신규입사자로 지인을 추천할 경우 1년 만근 시 소정의 포상금을 지급합니다.' },
		{ title: '자율출퇴근제', content: '8~10시 출근 시간에 따른 퇴근으로 워라벨을 보장합니다.' },
		{ title: '실손보험 가입', content: '직원 단체보험 "실손 의료보험"을 제공합니다.' }
	]
	const img = [recruit0, recruit1, recruit2, recruit3, recruit4, recruit5, recruit6, recruit7,recruit8,recruit9]

	const style: {} = {
		width: '100%',
		minHeight: '800px',
		textAlign: 'center'
	}
	const callEndFunc = () => {
		setCheck(true)
	}
	const navigate = useNavigate();
	const subTitleTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						복<span>리후생</span>
					</p>
					<p className="menu_title_p2">네오브릭스의 복리후생을 소개합니다.</p>
				</section>
			</div>
		</Transition>
	)
	

	return (
		<Layout>
			<div className='menu-header'>
				<div style={{fontSize:'60px', fontWeight:'600'}}>
					인사제도
				</div>
				<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
					<span>네오브릭스의 인사제도 및 복리후생</span>
				</div>
			</div>
			<Divider/>
			<div className='menu-flow'>
				<HomeIcon onClick={()=>{navigate('/')}}/>
				<p>&gt; 인재채용 &gt; </p><span>인사제도</span>
			</div>
			<Divider/>
			<div id="listLayout">
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
							<img src={recruitMain2} className='recruit-main-img'/>
						</Grid>
						<Grid item lg={8.5}>
							<p className='role-main-text'>보상제도</p>
							<p className='role-sub-text'>기본급</p>
							<p className='role-text'>연봉제 형태로 매년 평가에 의해 조정된 연봉을 12등분하여 매월 지급</p>
							<p className='role-sub-text'>성과급/인센티브</p>
							<p className='role-text'>개인/팀별 성과를 공정하게 평가하여 일정 목표 달성 시 별도로 지급</p>
							<p className='role-sub-text'>퇴직금</p>
							<p className='role-text'>퇴직연금제도를 통하여 전 직원의 퇴직금을 효율적으로 운영관리</p>
						</Grid>
					</Grid>
				</div>
				<Divider/>
				<div className="menu_title_contain" style={style}>
					<p className='menu-header2'>복리후생</p>
					{/*컨텐츠 div*/}
					<Grid container style={{ padding: '50px 0', width: '70%', margin: '0 auto' }} id="welfare">
						{data.map((cont, index) => (
							<Grid item lg={6} md={6} sm={12} key={index} style={{ padding: '30px' }}>
								<Card variant="outlined" style={{ height: '100%' }}>
									<div className="welfare-img">
										<img src={img[index]} alt="복리후생" style={{ verticalAlign: 'middle' }} />
									</div>
									<div style={{ textAlign: 'left' }}>
										<p style={{ fontSize: '20px', fontWeight: 'bold' }} className="welfare-title">
											{cont.title}
										</p>
										<p className="welfare-content">{cont.content}</p>
									</div>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</Layout>
	)
}

export default Menu3
