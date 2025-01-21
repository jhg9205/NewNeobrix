import Layout from "@components/layouts/layout";
import {Helmet} from "react-helmet-async";
import {getViewSize} from "@utils/functions";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {$FileDownLoad} from "@utils/request";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import {Button, Divider, Grid} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessBar from "@pages/menu/business/businessBar";
import {motion} from "framer-motion";
import bigData from '@images/menu/bigData.png'
import bigData2 from '@images/menu/bigData2.png'
import React from "react";
import {useNavigate} from "react-router-dom";
import FadeImg from "@components/ui/effect/fadeImg";
import analytics from "@images/menu/analytics.gif";

const Business2 = () => {

    const style = {
        width: '100%',
        minHeight: '1000px'
    }
    const navigate = useNavigate();

    return (
        <Layout>
            <Helmet>
                <title>DATA MINING - 네오브릭스</title>
            </Helmet>
            <div id="companyLayout">
                {getViewSize()=='lg'?
                    <>
                        <div className='menu-header'>
                            <div style={{fontSize:'60px', fontWeight:'600'}}>
                                DATA MINING
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
                            <p>&gt; 사업영역 &gt; </p><span>DATA MINING</span>
                        </div>
                    </>:
                    <Grid container>
                        <Grid item xs={8} className='menu-header-mobile'>
                            <div className='menu-flow-mobile'>
                                <HomeIcon onClick={()=>{navigate('/')}}/>
                                <span> · 사업영역 · DATA MINING</span>
                            </div>
                            <div className='menu-sub-mobile'>
                                <p>DATA MINING</p>
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
                            {getViewSize() == 'lg'?<BusinessBar index={'panel2'}/>:<></>}
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
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>Neo BRIX의 Big Data 및 AI 플랫폼은</p>
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>고객이 필요로 하는 Data Mining 서비스를 제공합니다.</p>
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
                                    <FadeImg pc={analytics} delay={1500} isContent={true} id={'application'}/>
                                </Grid>
                                <Grid item lg={8} style={getViewSize()=='lg'?{fontSize:'20px', lineHeight:'30px',marginTop:'50px'}:{fontSize:'20px', lineHeight:'30px',margin:'50px 50px 0 50px'}}>
                                    <span>
                                        데이터가 핵심 자산으로 자리 잡은 시대에서 NeoBRIX는 AI 플랫폼을 통하여 첨단 머신러닝 알고리즘과 예측 분석 도구를 기반으로
                                        고객이 데이터를 활용해 더 스마트한 의사 결정을 내릴 수 있도록 지원합니다. 이 플랫폼은 대규모 데이터를 실시간으로 처리하고,
                                        자동화된 분석을 통해 패턴을 식별하며, 맞춤형 인사이트를 제공합니다.
                                        데이터 마이닝 서비스와 통합된 Neo BRIX의 AI 플랫폼은 비즈니스 혁신을 가속화하고, 경쟁력을 강화하는 데 필수적인 파트너입니다.
                                    </span>
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
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'100px 0 50px 100px'}}>Big Data Architecture / Analytics Consulting</p>
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
                                <img src={bigData} style={{width:'90%'}}/>
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
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'100px 0 50px 100px'}}>AI분석 플랫폼 Architecture수립, 구축, 컨설팅</p>
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
                                <img src={bigData2} style={{width:'90%',marginBottom:'100px'}}/>
                            </motion.div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Layout>
    )
}
export default Business2