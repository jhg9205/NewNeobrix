import Layout from '@components/layouts/layout'
import { Location } from '@pages/main/location'
import React from 'react'
import {Divider} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";

const Menu4 = () => {
	const navigate = useNavigate()
	const style = {
		width: '100%',
		minHeight: '800px'
	}


	return (
		<Layout>
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
