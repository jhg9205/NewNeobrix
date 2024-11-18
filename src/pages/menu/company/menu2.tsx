import Layout from '@components/layouts/layout'
import React from 'react'
import {Divider} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";


const Menu2 = () => {

	const navigate = useNavigate()
	return (
		<Layout>
			<div style={{padding:'150px 300px 0 300px'}} className='menu-header'>
				<div style={{fontSize:'60px', fontWeight:'600'}}>
					비전 및 이념
				</div>
				<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
					<span>네오브릭스 오시는 길</span>
				</div>
			</div>
			<Divider/>
			<div className='menu-flow'>
				<HomeIcon onClick={()=>{navigate('/')}}/>
				<p>&gt; 기업소개 &gt; </p><span>비전 및 이념</span>
			</div>
			<Divider/>
			<div id="organizationLayout">
				<div>
					<p>비전 및 이념</p>
				</div>
			</div>
		</Layout>
	)
}

export default Menu2
