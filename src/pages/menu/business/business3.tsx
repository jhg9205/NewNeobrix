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
import smartphone from "@images/menu/smartphone.gif";
import mobileImg from "@images/menu/mobileImg.png";
import mobile1 from '@images/menu/mobile1.png'
import mobile2 from '@images/menu/mobile2.png'
import mobile3 from '@images/menu/mobile3.png'
import mobile4 from '@images/menu/mobile4.png'
import mobile5 from '@images/menu/mobile5.png'
import mobile6 from '@images/menu/mobile6.png'
import mobile7 from '@images/menu/mobile7.png'
import mobile8 from '@images/menu/mobile8.png'
import mobile9 from '@images/menu/mobile9.png'
import mobile10 from '@images/menu/mobile10.png'
import mobile11 from '@images/menu/mobile11.png'
import mobile12 from '@images/menu/mobile12.png'
import mobile13 from '@images/menu/mobile13.png'
import mobile14 from '@images/menu/mobile14.png'
import mobile15 from '@images/menu/mobile15.png'
import mobile16 from '@images/menu/mobile16.png'
import bigData2 from "@images/menu/bigData2.png";

const Business3 = () => {

    const style = {
        width: '100%',
        minHeight: '1000px'
    }
    const navigate = useNavigate();

    return (
        <Layout>
            <Helmet>
                <title>MOBILE - 네오브릭스</title>
            </Helmet>
            <div id="companyLayout">
                {getViewSize()=='lg'?
                    <>
                        <div className='menu-header'>
                            <div style={{fontSize:'60px', fontWeight:'600'}}>
                                MOBILE
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
                            <p>&gt; 사업영역 &gt; </p><span>MOBILE</span>
                        </div>
                    </>:
                    <Grid container>
                        <Grid item sm={8} className='menu-header-mobile'>
                            <div className='menu-flow-mobile'>
                                <HomeIcon onClick={()=>{navigate('/')}}/>
                                <span> · 사업영역 · MOBILE</span>
                            </div>
                            <div className='menu-sub-mobile'>
                                <p>MOBILE</p>
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
                        <Grid item lg={2} md={2}>
                            <BusinessBar index={'panel3'}/>
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
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>Neo BRIX의 Mobile플랫폼은 GIS(지리정보)와 결합하여</p>
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>스마트한 현장 업무환경을 위한 설팅부터 구축, 운영까지 제공합니다.</p>
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
                                <Grid item lg={4} style={{justifyItems:'center'}}>
                                    <FadeImg pc={smartphone} delay={1500} isContent={true} id={'application'}/>
                                </Grid>
                                <Grid item lg={8} style={{fontSize:'20px', lineHeight:'30px',marginTop:'50px'}}>
                                    <span>
                                        GIS(지리정보시스템)를 기반으로 한 NeoBRIX 모바일 플랫폼은 관리와 운영의 새로운 표준을 제시합니다. 플랫폼은 위치 기반 데이터 분석, 실시간 모니터링,
                                        자동화된 프로세스를 결합하여 정확성과 생산성을 극대화합니다. NeoBRIX의 서비스는 단순한 기술을 넘어 고객의 요구를 충족시키는 맞춤형 솔루션을 제안합니다.
                                        컨설팅을 통해 고객의 필요를 진단하고 최적화된 플랫폼을 설계, 구축하며 지속적인 운영 지원으로 효과를 극대화합니다.
                                        GIS 기술과 결합된 NeoBRIX의 모바일 플랫폼은 비즈니스의 성장과 효율성을 위한 탁월한 솔루션이 될 것입니다.
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
                                <img src={mobileImg} style={{width:'80%',marginTop:'100px', padding:'20px', border:'1px solid gray', borderRadius:'40px'}}/>
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
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'100px 0 20px 100px'}}>MOBILE 공사 현장 업무지원</p>
                                <Divider/>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'20px 0 0 100px'}}>
                                    · 드론 취득 영상정보와 축적된 공간정보(GIS)를 모바일 기기에 탑재하여 현장에서 후보지·보상·공사·판매·관리 업무 등 현장 지원
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · 업무 레이어 및 업무 데이터와 고해상도 드론영상, 설졔도면을 중첩하여 현장에서 활용
                                    
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · 지도 메모 기능 및 현장사진 촬영 등 현장 조사 및 업무 내역을 저장 / 관리
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
                                        <p style={{fontSize:'20px'}}>판매 - 현장점검</p>
                                        <img src={mobile1} style={{width:'90%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>주택정보 - 공사 진행현황 파악</p>
                                        <img src={mobile2} style={{width:'90%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>공사 업무지원 - 드론현장 3D</p>
                                        <img src={mobile3} style={{width:'80%',marginBottom:'100px'}}/>
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
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'0 0 20px 100px'}}>MOBILE 국유(공유)재산관리</p>
                                <Divider/>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'20px 0 0 100px'}}>
                                    · 국유(공유)재산 관리 표준시스템을 업무에 활용함으로써 업무 표준화 및 절차 간소화를 실현, 재산관리 효율성을 제고하고,
                                    위성사진 및 지적도 등의 필요정보와 다양한 조회기능을 제공하여, 현장 실태조사, DB점검 등에 따른 업무부담을 최소화
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · 국유(공유)재산 관리업무 전반을 시스템화 하여  공유재산 취득, 분할·합병, 실태조사, 대부계약, 대부료 부과·징수,
                                    무단점유 관리, 변상금 부과, 매각, 교환, 이력관리 등을 과학적으로 관리
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · 스마트폰을 활용, 공유 재산의 현장 실태조사 업무를 지원할 수 있는 모바일 현장지원시스템 구현
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
                                        <p style={{fontSize:'20px'}}>실태조사 대상 조회</p>
                                        <img src={mobile4} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>무단점유 지속</p>
                                        <img src={mobile5} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>무단점유 종결</p>
                                        <img src={mobile6} style={{width:'80%',marginBottom:'100px'}}/>
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
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'0 0 20px 100px'}}>MOBILE 인구주택 및 농림어업 총조사(Census조사)</p>
                                <Divider/>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'20px 0 0 100px'}}>
                                    · 인구주택 총 조사 및 농림어업 총 조사 시범예행조사 조사구 설정 및 표본 틀을 제공하고, 등록 센서스 공표 항목 확대에 따른
                                    모바일 기반에 행정자료 품질을 현장에서 개선을 지원
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
                                    <Grid item lg={1}></Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>요도+위성 중첩</p>
                                        <img src={mobile7} style={{width:'90%'}}/>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>요도+일반도 중첩</p>
                                        <img src={mobile8} style={{width:'90%'}}/>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>지도범례 설정</p>
                                        <img src={mobile9} style={{width:'90%'}}/>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>조사구 이동</p>
                                        <img src={mobile10} style={{width:'90%'}}/>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>조사구 할당 (관리)</p>
                                        <img src={mobile11} style={{width:'90%'}}/>
                                    </Grid>
                                    <Grid item lg={1}></Grid>
                                    <Grid item lg={1}></Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>mCAPI</p>
                                        <img src={mobile12} style={{width:'90%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>다양한 조사 Biz</p>
                                        <img src={mobile13} style={{width:'90%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>현장정보 취득</p>
                                        <img src={mobile14} style={{width:'90%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>전개도 편집</p>
                                        <img src={mobile15} style={{width:'90%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <p style={{fontSize:'20px'}}>진행상태 (관리)</p>
                                        <img src={mobile16} style={{width:'90%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={1}></Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Layout>
    )
}
export default Business3