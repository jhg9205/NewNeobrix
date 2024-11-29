import Layout from '@components/layouts/layout'
import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser";
import { alert } from '@utils/alert'
import {InputLabel, Button, TextField, MenuItem, Grid, Divider, TextareaAutosize} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {getViewSize} from "@utils/functions";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";
import {ALERT,VITE_EMAIL_PUB_KEY,VITE_EMAIL_PRI_KEY,VITE_EMAIL_SERVICE_ID,VITE_EMAIL_TEMP_ID} from "@common/const";
import {$GET} from "@utils/request";
const root = [
	{
		value: '',
		label: '선택'
	},
	{
		value: '기사/뉴스',
		label: '기사/뉴스'
	},
	{
		value: '학회/세미나',
		label: '학회/세미나'
	},
	{
		value: '이메일(eDM,뉴스레터 등)',
		label: '이메일(eDM,뉴스레터 등)'
	},
	{
		value: 'SNS(블로그,유튜브 등)',
		label: 'SNS(블로그,유튜브 등)'
	},
	{
		value: '포털 검색(구글,네이버 등)',
		label: '포털 검색(구글,네이버 등)'
	},
	{
		value: '온라인 광고',
		label: '온라인 광고'
	},
	{
		value: '영업대표 소개',
		label: '영업대표 소개'
	},
	{
		value: '지인 소개',
		label: '지인 소개'
	},
	{
		value: '기타',
		label: '기타'
	}
];
const question = [
	{
		value:"",
		label:"선택"
	},
	{
		value:"시스템구축·운영(SI)",
		label:"시스템구축·운영(SI)"
	},
	{
		value:"기업용 솔루션 도입",
		label:"기업용 솔루션 도입"
	},
	{
		value:"빅데이터·AI",
		label:"빅데이터·AI"
	},
	{
		value:"모바일 시스템",
		label:"모바일 시스템"
	},
	{
		value:"IT 컨설팅",
		label:"IT 컨설팅"
	},
	{
		value:"기타",
		label:"기타"
	}
]
const Menu1 = () => {
	const form = useRef<HTMLFormElement>(null);
	const navigate = useNavigate();
	const sendEmail = (e: React.FormEvent<HTMLFormElement>) =>{

		e.preventDefault();
		if(!form.current){
			console.log("환경 변수가 설정되지 않았더나 올바르지 않습니다.")
			return;
		}
		//해당 계정의 현재 월에 사용 가능한 횟수 조회
		$GET(("https://api.emailjs.com/api/v1.1/history?"+
			"user_id="+VITE_EMAIL_PUB_KEY+
			"&accessToken="+VITE_EMAIL_PRI_KEY),(res:any)=>{

			let today = new Date();
			const formTemp:any = form.current;

			const temp = res.data.rows.filter((data:any)=>data.updated_at.substring(0,7)==
				today.getFullYear()+"-"+('0' + (today.getMonth() + 1)).slice(-2))
			//월에 사용 횟수가 200 이상인 경우 API차단
			if(temp.length >= 200) {
				alert.icon({
					type: ALERT.WARNING,
					text: "현재 월에 메일 발신이 가능한 횟수를 초과했습니다. 별도 메일로 보내주세요."
				})
				//월에 사용 횟수가 200 이상인 경우 API발송
			}else{
				emailjs
					.sendForm(
						VITE_EMAIL_SERVICE_ID,
						VITE_EMAIL_TEMP_ID,
						formTemp,
						VITE_EMAIL_PUB_KEY
					)
					.then((result)=>{
							alert.icon({
								type:ALERT.SUCCESS,
								text:"메일이 성공적으로 보내졌습니다."
							})
						},
						(error)=>{
							alert.icon({
								type:ALERT.WARNING,
								text:"메일 전송을 실패하였습니다."
							})
						})
			}
		})
	}
	const style: {} = {
		width: '100%',
		minHeight: '800px',
		textAlign: 'center'
	}

	return (
		<Layout>
			<div id="listLayout">
				{getViewSize()=='lg'?
					<>
						<div className='menu-header'>
							<div style={{fontSize:'60px', fontWeight:'600'}}>
								문의하기
							</div>
							<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
								<span>문의 내용을 Neobrix에 보내주세요</span>
							</div>
						</div>
						<Divider/>
						<div className='menu-flow'>
							<HomeIcon onClick={()=>{navigate('/')}}/>
							<p>&gt; 문의하기 &gt; </p><span>문의하기</span>
						</div>
					</>:
					<Grid container>
						<Grid item sm={8} className='menu-header-mobile'>
							<div className='menu-flow-mobile'>
								<HomeIcon onClick={()=>{navigate('/')}}/>
								<span> · 문의하기 · 문의하기</span>
							</div>
							<div className='menu-sub-mobile'>
								<p>문의하기</p>
							</div>
						</Grid>
						<Grid item sm={4} className='menu-bg-mobile'>

						</Grid>
					</Grid>
				}
				<Divider/>
				<div className="menu_title_contain" style={style}>
					{/*컨텐츠 div*/}
					<div className="contain">
						<div className="contain-sub">
							<p className="contain-sub-title">NeoBrix에 궁금한 점이 있으시면 문의해주세요.</p>
							<p className="contain-sub-content">시스템 구축, 솔루션 도입, 컨설팅 문의 등 IT서비스 이용과 관련해 궁금하신 점이 있으신가요?</p>
							<p className="contain-sub-content">기술 협력, 사업 협력 등 파트너십을 제안하고 싶으신가요?</p>
							<p className="contain-sub-content">아래 항목에 문의 사항을 작성해주시면 담당자가 빠른 시일 내 연락 드리겠습니다.</p>
							<br/>
							<br/>
							<br/>
							<Divider style={{border:'1px solid #ababab',marginBottom:'15px'}}/>
							<form ref={form} onSubmit={sendEmail} className="email-form">
								<Grid container>
									<Grid item lg={2} md={6}>
										<InputLabel className="file-label">이름</InputLabel>
										<Divider/>
										<InputLabel className="file-label">이메일</InputLabel>
										<Divider/>
										<InputLabel className="file-label">연락처</InputLabel>
										<Divider/>
										<InputLabel className="file-label">회사명</InputLabel>
										<Divider/>
										<InputLabel className="file-label">부서명</InputLabel>
										<Divider/>
										<InputLabel className="file-label">직함</InputLabel>
										<Divider/>
										<InputLabel className="file-label">방문 경로</InputLabel>
										<Divider/>
										<InputLabel className="file-label">문의 항목</InputLabel>
										<Divider/>
										<InputLabel className="file-label">문의내용</InputLabel>
									</Grid>
									<Grid item lg={10} md={6}>
										<TextField
											required
											className="file-text-box"
											label="이름"
											placeholder="ex)홍길동"
											color="warning"
											type="text" name="name"/>
										<Divider/>
										<TextField
											required
											className="file-text-box"
											label="이메일"
											placeholder="ex)Neobrix@neobrix.co.kr"
											color="warning"
											type="email" name="email"/>
										<Divider/>
										<TextField
											required
											className="file-text-box"
											label="연락처"
											placeholder="ex)010-xxxx-xxxx"
											color="warning"
											type="text" name="telNo"/>
										<Divider/>
										<TextField
											className="file-text-box"
											label="회사명"
											placeholder="ex)네오브릭스"
											color="warning"
											type="text" name="affiliation"/>
										<Divider/>
										<TextField
											className="file-text-box"
											label="부서명"
											placeholder="ex)전략기획팀"
											color="warning"
											type="text" name="department"/>
										<Divider/>
										<TextField
											className="file-text-box"
											label="직함"
											placeholder="ex)책임,대표"
											color="warning"
											type="text" name="title"/>
										<Divider/>
										<TextField
											className="file-text-box"
											select
											label="방문경로"
											color="warning"
											defaultValue=""
											variant="outlined"
											type="text" name="visitRoot">
											{root.map((option)=>(
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
										<Divider/>
										<TextField
											className="file-text-box"
											select
											label="문의항목"
											color="warning"
											defaultValue=""
											variant="outlined"
											type="text" name="visitRoot">
											{question.map((option)=>(
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
										<Divider/>
										<TextareaAutosize
											required
											style={{
												width:'100%',
												height:'400px',
												fontSize:'15px'
											}}
											maxLength={4000}
											className="file-text-box"
											placeholder="문의내용을 상세하게 작성해주세요."
											name="content" color="warning"/>
										<Button
											id="recruitFile"
											variant="contained"
											sx={{
												width: '180px',
												height: '50px',
												borderRadius: '30px',
												margin:'30px auto',
												padding: '15px 24px 15px 32px',
												backgroundColor:'#ff8d00',
											}}
											type="submit"
											value="Send"
										>
										<span
											style={{
												fontWeight: '500',
												fontSize: '16px',
												lineHeight: '18px'
											}}
										>메일 보내기</span>
											<ArrowForwardIcon/>
										</Button>
									</Grid>
								</Grid>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
