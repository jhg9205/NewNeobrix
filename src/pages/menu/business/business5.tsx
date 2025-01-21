import Layout from "@components/layouts/layout";
import {Helmet} from "react-helmet-async";
import {getViewSize} from "@utils/functions";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {$FileDownLoad} from "@utils/request";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import {Divider, Grid} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessBar from "@pages/menu/business/businessBar";
import React from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import FadeImg from "@components/ui/effect/fadeImg";
import energyGif from "@images/menu/energyGif.gif";
import environment1 from "@images/menu/environment1.png";
import environment2 from "@images/menu/environment2.png";
import environment3 from "@images/menu/environment3.png";
import environment4 from "@images/menu/environment4.png";
import environment5 from "@images/menu/environment5.png";
import environment6 from "@images/menu/environment6.png";
import environment7 from "@images/menu/environment7.png";
import environment8 from "@images/menu/environment8.png";

const Business5 = () => {

    const style = {
        width: '100%',
        minHeight: '1000px'
    }
    const navigate = useNavigate();

    return (
        <Layout>
            <Helmet>
                <title>ENVIRONMENT - 네오브릭스</title>
            </Helmet>
            <div id="companyLayout">
                {getViewSize()=='lg'?
                    <>
                        <div className='menu-header'>
                            <div style={{fontSize:'60px', fontWeight:'600'}}>
                                ENVIRONMENT
                            </div>
                            <div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
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
                            <p>&gt; 사업영역 &gt; </p><span>ENVIRONMENT</span>
                        </div>
                    </>:
                    <Grid container>
                        <Grid item xs={8} className='menu-header-mobile'>
                            <div className='menu-flow-mobile'>
                                <HomeIcon onClick={()=>{navigate('/')}}/>
                                <span> · 사업영역 · ENVIRONMENT</span>
                            </div>
                            <div className='menu-sub-mobile'>
                                <p>ENVIRONMENT</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} className='menu-bg-mobile'>

                        </Grid>
                    </Grid>
                }
                <Divider/>
                <div className="menu_title_contain" style={style}>
                    {/*컨텐츠 div*/}
                    <Grid container>
                        <Grid item lg={2} md={2}>
                            {getViewSize() == 'lg'?<BusinessBar index={'panel5'}/>:<></>}
                        </Grid>
                        <Grid item lg={8} md={10}>
                                <motion.div
                                    className='intro-text'
                                    initial={{ opacity: 0, y: 50}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    viewport={{ once: false }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 0.5,
                                        y: { duration: 0.5 },
                                    }}
                                >
                                    <div className='intro-dream' style={{margin:'100px auto 50px auto'}}>
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>Neo BRIX는 기후변화에 대응할 수 있는</p>
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>새로운 환경 IT기술 패러다임을 제시합니다.</p>
                                    </div>
                                </motion.div>
                            <motion.div
                                className='intro-text'
                                initial={{ opacity: 0, y: 50}}
                                whileInView={{ opacity: 1, y: 0}}
                                viewport={{ once: false }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.5,
                                    y: { duration: 0.5 },
                                }}
                            >
                            <Grid container>
                                <Grid item lg={4} style={getViewSize()=='lg'?{justifyItems:'center'}:{justifyItems:'center',width:'100%'}}>
                                    <FadeImg pc={energyGif} delay={1500} isContent={true} id={'application'}/>
                                </Grid>
                                <Grid item lg={8} style={getViewSize()=='lg'?{fontSize:'20px', lineHeight:'30px',marginTop:'50px'}:{fontSize:'20px', lineHeight:'30px',margin:'50px 50px 0 50px'}}>
                                    <motion.div
                                        className='intro-text'
                                        initial={{ opacity: 0, y: 50}}
                                        whileInView={{ opacity: 1, y: 0}}
                                        viewport={{ once: false }}
                                        transition={{
                                            ease: "easeInOut",
                                            duration: 0.5,
                                            y: { duration: 0.5 },
                                        }}
                                    >
                                        <p style={{fontSize:'40px', fontWeight:'bold', textAlign:'left', padding:'0 0 50px 0'}}>수질/오염원</p>
                                    </motion.div>
                                    <motion.div
                                        className='intro-text'
                                        initial={{ opacity: 0, y: 50}}
                                        whileInView={{ opacity: 1, y: 0}}
                                        viewport={{ once: false }}
                                        transition={{
                                            ease: "easeInOut",
                                            duration: 0.5,
                                            y: { duration: 0.5 },
                                        }}
                                    >
                                        <img src={environment1} style={{width:'100%',marginBottom:'50px'}}/>
                                    </motion.div>
                                    <motion.div
                                        className='intro-text'
                                        initial={{ opacity: 0, y: 50}}
                                        whileInView={{ opacity: 1, y: 0}}
                                        viewport={{ once: false }}
                                        transition={{
                                            ease: "easeInOut",
                                            duration: 0.5,
                                            y: { duration: 0.5 },
                                        }}
                                    >
                                        <p style={{fontSize:'40px', fontWeight:'bold', textAlign:'left', padding:'0 0 50px 0'}}>온실가스/대기</p>
                                    </motion.div>
                                    <motion.div
                                        className='intro-text'
                                        initial={{ opacity: 0, y: 50}}
                                        whileInView={{ opacity: 1, y: 0}}
                                        viewport={{ once: false }}
                                        transition={{
                                            ease: "easeInOut",
                                            duration: 0.5,
                                            y: { duration: 0.5 },
                                        }}
                                    >
                                        <p>NeoBRIX의 IOT, 빅데이터, AI 디지털 기술을 활용하여 대기오염 영향도 분석체계를 제공합니다.</p>
                                        <Grid container style={getViewSize()=='lg'?{}:{justifyContent:'center'}}>
                                            <Grid item lg={3} md={12} xs={12} style={getViewSize()=='lg'?{}:{width:'80%',justifyContent:'center'}}>
                                                <img src={environment2} style={getViewSize()=='lg'?{width:'90%',marginBottom:'100px'}:{width:'90%',marginBottom:'50px'}}/>
                                            </Grid>
                                            <Grid item lg={9} md={12} xs={12}>
                                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 0'}}>
                                                    · 2013년 부터 기상여건 악화(풍속▲, 강수량▲, 습도▲), 국외 유입 증가, 국내 산업시설 증가 등으로 미세먼지 개선 필요성 증대
                                                </p>
                                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 0'}}>
                                                    · 국내 고농도 미세먼지 발생빈도 증가 및 대기질 악화에 따라 국민 대기오염 정보 수요 중대
                                                </p>
                                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 0'}}>
                                                    · 다양해진 정보유통 경로를 통한 대기오염정보 활용 증대
                                                </p>
                                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 0'}}>
                                                    · 급변하는 IT 환경(빅데이터, AI, 클라우드 등) 변화와 다양한 정책 변화 수용
                                                </p>
                                            </Grid>
                                        </Grid>
                                    </motion.div>
                                </Grid>
                            </Grid>
                            </motion.div>
                            <motion.div
                                className='intro-text'
                                initial={{ opacity: 0, y: 50}}
                                whileInView={{ opacity: 1, y: 0}}
                                viewport={{ once: false }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.5,
                                    y: { duration: 0.5 },
                                }}
                            >
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'50px 0 20px 100px'}}>비점오염원 관리시스템</p>
                                <Divider/>
                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 50px 0 50px'}}>
                                    · 비점 오염물질 측정 데이터 통합 관리 및 비점오염 저감시설 운용 체계 구축
                                </p>
                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 50px 0 50px'}}>
                                    · 측정망 데이터,측정소별 통계 값 연계데이터 그래프 제공 및 데이터패턴, 상관관계 분석을 통한 유효데이터 선별
                                </p>
                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'10px 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 50px 0 50px'}}>
                                    · 비점오염원관리 연관 시스템 간 기능 통합 및 기능개선을 통해 안정성 제공, 업무 효율성 제고
                                </p>
                            </motion.div>
                            <motion.div
                                className='intro-text'
                                initial={{ opacity: 0, y: 50}}
                                whileInView={{ opacity: 1, y: 0}}
                                viewport={{ once: false }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.5,
                                    y: { duration: 0.5 },
                                }}
                            >
                                <Grid container style={{marginTop:'50px'}}>
                                    <Grid item lg={1.5}></Grid>
                                    <Grid item lg={3}>
                                        <p style={getViewSize()=='lg'?{fontSize:'20px'}:{fontSize:'18px'}}>관리시스템 통합</p>
                                        <img src={environment3} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={getViewSize()=='lg'?{fontSize:'20px'}:{fontSize:'18px'}}>자가점검 지원시스템</p>
                                        <img src={environment4} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={getViewSize()=='lg'?{fontSize:'20px'}:{fontSize:'18px'}}>생태하천복원 관리시스템</p>
                                        <img src={environment5} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={1.5}></Grid>
                                </Grid>
                            </motion.div>
                            <motion.div
                                className='intro-text'
                                initial={{ opacity: 0, y: 50}}
                                whileInView={{ opacity: 1, y: 0}}
                                viewport={{ once: false }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.5,
                                    y: { duration: 0.5 },
                                }}
                            >
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'0 0 20px 100px'}}>하수도 정보시스템</p>
                                <Divider/>
                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'20px 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 50px 0 50px'}}>
                                    · 시스템의 편의성과 활용성을 강화하여 서비스 만족도 및 공공데이터 품질을 제고한 국가 하수도 정보시스템 기능개선
                                </p>
                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 50px 0 50px'}}>
                                    · 선정 지역의 하수처리구역도 및 외부 연계 대상 공간 DB 구축, 구축한 공간데이터를 기반으로 국가하수도 정보시스템 지도서비스 구축
                                </p>
                                <p style={getViewSize()=='lg'?{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}:{color:'#242525',fontSize:'18px', fontWeight:'400', textAlign:'left', padding:'10px 50px 0 50px'}}>
                                    · 다양한 주제도 및 컨텐츠, 통계 기능을 제공하여 업무 중심의 편리성 제공
                                </p>
                            </motion.div>
                            <motion.div
                                className='intro-text'
                                initial={{ opacity: 0, y: 50}}
                                whileInView={{ opacity: 1, y: 0}}
                                viewport={{ once: false }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.5,
                                    y: { duration: 0.5 },
                                }}
                            >
                                <Grid container style={{marginTop:'50px'}}>
                                    <Grid item lg={1.5}></Grid>
                                    <Grid item lg={3}>
                                        <p style={getViewSize()=='lg'?{fontSize:'20px'}:{fontSize:'18px'}}>시설 및 수질정보 조회 기능</p>
                                        <img src={environment6} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={getViewSize()=='lg'?{fontSize:'20px'}:{fontSize:'18px'}}>정보현행화</p>
                                        <img src={environment7} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={getViewSize()=='lg'?{fontSize:'20px'}:{fontSize:'18px'}}>행정지원시스템</p>
                                        <img src={environment8} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={1.5}></Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Layout>
    )
}
export default Business5