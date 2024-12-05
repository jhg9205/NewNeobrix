import { motion } from "framer-motion";
import Layout from '@components/layouts/layout'
import logo from '@images/common/logoN-head.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import data from '@data/prcenter.json'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {Divider, Grid} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import {VITE_APP_IMGS} from "@common/const";
import {getViewSize} from "@utils/functions";
import {Helmet} from "react-helmet-async";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import {$FileDownLoad} from "@utils/request";

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}
const Menu1 = () => {
	const navigate = useNavigate();
	const style: {} = {
		padding:getViewSize()=='lg'?'100px 250px':'100px 0',
		textAlign: 'center',
		display:'flex',
		height:'100%'
	}


	return (
		<Layout>
			<Helmet>
				<title>회사소식 - 네오브릭스</title>
			</Helmet>
			{getViewSize()=='lg'?
				<>
					<div className='menu-header'>
						<div style={{fontSize:'60px', fontWeight:'600'}}>
							회사소식
						</div>
						<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
							<span>네오브릭스의 소식을 알려드립니다.</span>
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
						<p>&gt; 홍보 &gt; </p><span>회사소식</span>
					</div>
				</>:
				<Grid container>
					<Grid item sm={8} className='menu-header-mobile'>
						<div className='menu-flow-mobile'>
							<HomeIcon onClick={()=>{navigate('/')}}/>
							<span> · 홍보 · 회사소식</span>
						</div>
						<div className='menu-sub-mobile'>
							<p>회사소식</p>
						</div>
					</Grid>
					<Grid item sm={4} className='menu-bg-mobile'>

					</Grid>
				</Grid>
			}
			<Divider/>
			<div>
				<div className="menu_title_contain" style={style}>
					<Grid container>
					{data.news.map((data,index)=>(
						<Grid key={index} item lg={4} style={{margin:getViewSize()=='lg'?'0':'0 auto'}}>
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
								<NewsCard data={data}/>
							</motion.div>
						</Grid>
					))}
					</Grid>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
const NewsCard = (props:{data:any}) => {

	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const ExpandMore = styled((props: ExpandMoreProps) => {
		const { expand, ...other } = props;
		return <IconButton {...other} />;
	})(({ theme }) => ({
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
		variants: [
			{
				props: ({ expand }) => !expand,
				style: {
					transform: 'rotate(0deg)',
				},
			},
			{
				props: ({ expand }) => !!expand,
				style: {
					transform: 'rotate(180deg)',
				},
			},
		],
	}));
	return (
		<Card className='news-card' sx={{
			maxWidth: 500,
			width:getViewSize()=='lg'?400:360,
			margin:getViewSize()=='lg'?'0 30px 30px 0':'20px auto',
			border:'1px solid rgba(237, 237, 237, 0.63)',
			borderRadius:'20px',
			cursor:'pointer'
		}}>
			<CardHeader
				avatar={
					<img src={logo} style={{width:'40px'}}/>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={props.data.title}
				subheader={props.data.subHeader}
			/>
			<CardMedia
				component="img"
				height="300"
				image={VITE_APP_IMGS+props.data.img}
				alt={props.data.alt}
				style={{border:'1px solid rgba(237, 237, 237, 0.63)'}}
			/>
			<CardContent style={{display:'flex'}}>
				{props.data.body1.map((text:{content:String},index:number)=>(
					<div style={{
						backgroundColor:'#e3e3e3',
						borderRadius:'20px',
						padding:'5px 10px',
						margin:'0 10px 0 0'
					}} key={index}>{text.content}</div>
				))}
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					{props.data.body2.map((text:{content:String},index:number)=>(
						<Typography key={index} sx={{ marginBottom: 2 }}>{text.content}</Typography>
					))}
				</CardContent>
			</Collapse>
		</Card>
	)
}