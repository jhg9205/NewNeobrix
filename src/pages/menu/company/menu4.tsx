import Layout from '@components/layouts/layout'
import { Location } from '@pages/main/location'
import React from 'react'
import {Divider, Grid} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";
import {getViewSize} from "@utils/functions";
import {Helmet} from "react-helmet-async";

const Menu4 = () => {
	const navigate = useNavigate()
	const style = {
		width: '100%',
		minHeight: '800px'
	}


	return (
		<Layout>
			<Helmet>
				<title>오시는길 - 네오브릭스</title>
			</Helmet>
			{getViewSize()=='lg'?
				<>
					<div className='menu-header'>
						<div style={{fontSize:'60px', fontWeight:'600'}}>
							오시는길
						</div>
						<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
							<span>네오브릭스 오시는 길</span>
						</div>
					</div>
					<Divider/>
					<div className='menu-flow'>
						<HomeIcon onClick={()=>{navigate('/')}}/>
						<p>&gt; 기업소개 &gt; </p><span>오시는길</span>
					</div>
				</>:
				<Grid container>
					<Grid item sm={8} className='menu-header-mobile'>
						<div className='menu-flow-mobile'>
							<HomeIcon onClick={()=>{navigate('/')}}/>
							<span> · 기업소개 · 오시는길</span>
						</div>
						<div className='menu-sub-mobile'>
							<p>오시는길</p>
						</div>
					</Grid>
					<Grid item sm={4} className='menu-bg-mobile'>

					</Grid>
				</Grid>
			}
			<Divider/>
			<div id="locationLayout">
				<div className="menu_title_contain" style={style}>
					<div className="contain">
						<Location isMenu={true} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu4
