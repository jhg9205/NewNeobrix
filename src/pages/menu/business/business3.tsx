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
import application from "@images/menu/application.gif";

const Business3 = () => {

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
                                    <FadeImg pc={application} delay={1500} isContent={true} id={'application'}/>
                                </Grid>
                                <Grid item lg={8} style={{fontSize:'20px', lineHeight:'30px',marginTop:'50px'}}>
                                    <span>
                                        급격한 기술 변화 및 혁신이 이루어지는 비즈니스 환경에서 기술 통합 및 협업은 단순한 옵션을 넣어 필수적인 요소입니다.
                                        복잡하고 다양한 IT시스템과 플랫폼, 고객 업무 및 프로세스에 대한 이해를 바탕으로 맞춤형 IT서비스를 제공합니다.
                                        IT 컨설팅 부터 시스템 통합-구축-운영 등 풍부한 구축 경험과 및 전문화된 조직을 바탕으로 고객의 비즈니스 환경 변화에 대응하고 성장 할 수 있도록 지원하는 것입니다.
                                    </span>
                                </Grid>
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