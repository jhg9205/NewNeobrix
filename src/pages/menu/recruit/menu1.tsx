import Layout from '@components/layouts/layout'
import { motion } from "framer-motion";
import talent2 from '@images/menu/talent2.png'
import talent3 from '@images/menu/talent3.png'
import React from 'react'
import {Button, Divider, Grid} from '@mui/material'
import { alert } from '@utils/alert'
import { ALERT } from '@common/const'
import { $FileDownLoad } from '@utils/request'
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import {getViewSize} from "@utils/functions";
import {Helmet} from "react-helmet-async";

const Menu1 = () => {
	const [check, setCheck] = React.useState(false)
	const navigate = useNavigate()
	const style: {} = {
		width: '100%',
		minHeight: '800px',
		textAlign: 'center'
	}
	const callEndFunc = () => {
		setCheck(true)
	}

	const handleClick = (event: React.MouseEvent) => {
		alert.confirm({
			type: ALERT.CONFIRM,
			text: '입사지원서를\n 저장 하시겠습니까?\n\n',
			confirmText: '확인',
			confirmCall: () => {
				$FileDownLoad('/download/NEOBRIX_RECRUIT.xlsx', 'NEOBRIX_RECRUIT', 'xlsx')
			}
		})
	}


	return (
		<Layout>
			<Helmet>
				<title>인재상 - 네오브릭스</title>
			</Helmet>
			{getViewSize()=='lg'?
				<>
					<div className='menu-header'>
						<div style={{fontSize:'60px', fontWeight:'600'}}>
							인재상
						</div>
						<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
							<span>네오브릭스가 추구하는 인재</span>
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
						<p>&gt; 인재채용 &gt; </p><span>인재상</span>
					</div>
				</>:
				<Grid container>
					<Grid item sm={8} className='menu-header-mobile'>
						<div className='menu-flow-mobile'>
							<HomeIcon onClick={()=>{navigate('/')}}/>
							<span> · 인재채용 · 인재상</span>
						</div>
						<div className='menu-sub-mobile'>
							<p>인재상</p>
						</div>
					</Grid>
					<Grid item sm={4} className='menu-bg-mobile'>

					</Grid>
				</Grid>
			}
			<Divider/>
			<div id="listLayout">
				<div className="menu_title_contain" style={style}>
					{/*컨텐츠 div*/}
					<div className="contain" style={{ display: 'grid', overflow: 'hidden' }}>
						<motion.div
							className='intro-text'
							initial={{ opacity: 0, y: 100}}
							whileInView={{ opacity: 1, y: 0}}
							viewport={{ once: false }}
							transition={{
								ease: "easeInOut",
								duration: 1,
								y: { duration: 1 },
							}}
						>
							<img src={talent2} alt="recruit" className="recruit-img" style={{margin:'0 auto'}}/>
						</motion.div>
						<motion.div
							className='intro-text'
							initial={{ opacity: 0, y: 100}}
							whileInView={{ opacity: 1, y: 0}}
							viewport={{ once: false }}
							transition={{
								ease: "easeInOut",
								duration: 1,
								y: { duration: 1 },
							}}
						>
						<img src={talent3} alt="recruit" className="recruit-img" style={{width:getViewSize()=='lg'?'80%':'100%',marginTop:'100px'}}/>
						</motion.div>
						<Button
							id="recruitFile"
							onClick={handleClick}
							variant="contained"
							sx={{
								width: '200px',
								height: '70px',
								borderRadius: '70px',
								margin: '100px auto',
								fontSize: '17px',
								fontWeight: 'bold',
								backgroundColor:'#f38225'}}
						>
							입사지원서 다운로드
						</Button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
