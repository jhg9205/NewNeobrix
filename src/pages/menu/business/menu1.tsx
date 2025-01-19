import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-business.png'
import subTileMobile from '@images/menu/bg-business-m.png'
import React from 'react'
import { BusinessDetail } from '@pages/menu/business/businessDetail'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import {Helmet} from "react-helmet-async";
import {getViewSize} from "@utils/functions";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {$FileDownLoad} from "@utils/request";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import {Divider, Grid} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";
import BusinessBar from "@pages/menu/business/businessBar";

const Menu1 = () => {
	const style = {
		width: '100%',
		minHeight: '1000px'
	}
	const navigate = useNavigate();



	return (
		<Layout>
			<Helmet>
				<title>사업영역 - 네오브릭스</title>
			</Helmet>
			<div id="companyLayout">
				{getViewSize()=='lg'?
					<>
						<div className='menu-header'>
							<div style={{fontSize:'60px', fontWeight:'600'}}>
								사업영역
							</div>
							<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
								<span>네오브릭스 사업영역</span>
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
							<p>&gt; 사업영역 &gt; </p><span>사업영역</span>
						</div>
					</>:
					<Grid container>
						<Grid item sm={8} className='menu-header-mobile'>
							<div className='menu-flow-mobile'>
								<HomeIcon onClick={()=>{navigate('/')}}/>
								<span> · 사업영역 · 사업영역</span>
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
					<Grid container>
						<Grid item lg={2}>
							<BusinessBar/>
						</Grid>
						<Grid item lg={10}>

						</Grid>
					</Grid>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
