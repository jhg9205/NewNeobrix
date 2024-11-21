import Layout from '@components/layouts/layout'
import React from 'react'
import {Divider, Grid} from '@mui/material'
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import logoBlack from "@images/common/logoN-black2.png";
import {alert} from "@utils/alert";
import {ALERT} from "@common/const";
import {$FileDownLoad} from "@utils/request";
import {getViewSize} from "@utils/functions";

const Menu2 = () => {
	const navigate = useNavigate();
	const style: {} = {
		width: '100%',
		minHeight: '600px',
		textAlign: 'left',
		padding:getViewSize()=='lg'?'50px':'0'
	}

	const handleClick = (event: React.MouseEvent, cName:String) => {

		let file = cName == 'download-div'?'/download/NEOBRIX.pdf':
			cName == 'ci-download1'?'/download/ci.png':
				'/download/ci.ai'
		let name = cName == 'download-div'?'NEOBRIX_회사소개서':'NEOBRIX_logo'
		let type = cName == 'download-div'?'pdf':
			cName == 'ci-download1'?'png':
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

	return (
		<Layout>
			<div id="companyLayout">
				{getViewSize()=='lg'?
					<>
						<div className='menu-header'>
							<div style={{fontSize:'60px', fontWeight:'600'}}>
								CI
							</div>
							<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
								<span>네오브릭스 CI</span>
							</div>
						</div>
						<Divider/>
						<div className='menu-flow'>
							<HomeIcon onClick={()=>{navigate('/')}}/>
							<p>&gt; 홍보 &gt; </p><span>CI</span>
						</div>
					</>:
					<Grid container>
						<Grid item sm={8} className='menu-header-mobile'>
							<div className='menu-flow-mobile'>
								<HomeIcon onClick={()=>{navigate('/')}}/>
								<span> · 홍보 · CI</span>
							</div>
							<div className='menu-sub-mobile'>
								<p>CI</p>
							</div>
						</Grid>
						<Grid item sm={4} className='menu-bg-mobile'>

						</Grid>
					</Grid>
				}
				<Divider/>
				<div className="menu_title_contain" style={style}>
					{/*컨텐츠 div*/}
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
									<Grid item lg={6}>
										<div className='ci-main'>
											<p>Corporate</p>
											<p>Identity</p>
										</div>
										<div className='ci-sub'>
											<p>NeoBrix의 심볼마크의 검정 컬러는 믿음을 상징합니다.</p>
											<p>로고에 NeoBrix의 N이 녹아들어 있으며 위 아래 도형을 연결해주는 역할로서</p>
											<p>B2B, B2C를 연결해주는 Bridge를 의미합니다.</p>
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
									<Grid item lg={6} style={{alignContent:'center'}}>
										<div className='ci-logoBox'>
											<img src={logoBlack}/>
										</div>
									</Grid>
								</Grid>
							</div>
						</motion.div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu2
