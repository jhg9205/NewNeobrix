import { Routes, Route, Outlet } from 'react-router-dom'

import '@css/contents.css'
import '@css/common.css'
import '@css/common.scss'
import '@css/main.scss'
import '@css/menu.scss'

import { PATH } from '@common/domain'
import Main from '@pages/main'
import Error from '@pages/error'

import PrivateRoute from './private'
import Intro from '@pages/menu/company/menu1'
import Vision from '@pages/menu/company/menu2'
import Research from '@pages/menu/company/menu3'
import Location from '@pages/menu/company/menu4'

import Business from '@pages/menu/business/menu1'
import Business1 from '@pages/menu/business/business1'
import Business2 from '@pages/menu/business/business2'
import Business3 from '@pages/menu/business/business3'
import Business4 from '@pages/menu/business/business4'
import Business5 from '@pages/menu/business/business5'

import History2 from '@pages/menu/research/menu2'
import List from '@pages/menu/research/menu3'
import ResearchDetail from '@pages/menu/research/detail'

import News from '@pages/menu/prcenter/menu1'
import Ci from '@pages/menu/prcenter/menu2'
import Faq from '@pages/menu/prcenter/menu3'
import PrCenterDetail from '@pages/menu/prcenter/detail'

import Talent from '@pages/menu/recruit/menu1'
import Hr from '@pages/menu/recruit/menu3'
import Welfare from '@pages/menu/recruit/menu4'
import Recruit from '@pages/menu/recruit/menu2'
import RecruitDetail from '@pages/menu/recruit/detail'

import AS from '@pages/menu/customer/menu1'
import Util from '@pages/menu/customer/menu2'
import CustomerDetail from '@pages/menu/customer/detail'

const Router = () => {
	return (
		<>
			<Routes>
				{/* <Route path={PATH.LOGIN} element={<Login />} /> */}
				<Route path={PATH.MAIN} element={<Main />} />

				<Route path={PATH.COMPANY00} element={<Intro />} />
				<Route path={PATH.COMPANY01} element={<Vision />} />
				<Route path={PATH.COMPANY02} element={<Research />} />
				<Route path={PATH.COMPANY03} element={<Location />} />

				<Route path={PATH.BUSINESS00} element={<Business />} />
				<Route path={PATH.BUSINESS01} element={<Business1 />} />
				<Route path={PATH.BUSINESS02} element={<Business2 />} />
				<Route path={PATH.BUSINESS03} element={<Business3 />} />
				<Route path={PATH.BUSINESS04} element={<Business4 />} />
				<Route path={PATH.BUSINESS05} element={<Business5 />} />

				<Route path={PATH.RESEARCH00} element={<Research />} />
				<Route path={PATH.RESEARCH01} element={<History2 />} />
				<Route path={PATH.RESEARCH02} element={<List />} />
				<Route path={PATH.RESEARCH03} element={<ResearchDetail />} />

				<Route path={PATH.PRCENTER00} element={<News />} />
				<Route path={PATH.PRCENTER01} element={<Ci />} />
				<Route path={PATH.PRCENTER02} element={<Faq />} />
				<Route path={PATH.PRCENTER03} element={<PrCenterDetail />} />

				<Route path={PATH.RECRUIT00} element={<Talent />} />
				<Route path={PATH.RECRUIT01} element={<Hr />} />
				<Route path={PATH.RECRUIT04} element={<Welfare />} />
				<Route path={PATH.RECRUIT02} element={<Recruit />} />
				<Route path={PATH.RECRUIT03} element={<RecruitDetail />} />

				<Route path={PATH.CUSTOMER00} element={<AS />} />
				<Route path={PATH.CUSTOMER01} element={<Util />} />
				<Route path={PATH.CUSTOMER02} element={<CustomerDetail />} />

				<Route element={<PrivateRoute authentication={true} />}>
					{/* <Route path={PATH.MAP} element={<Map />} />
					<Route path={PATH.INTRO} element={<Menu />}>
						<Route path={PATH.INTRO1} element={<Menu1 />} />
						<Route path={PATH.INTRO2} element={<Menu2 />} />
					</Route>
					<Route path={PATH.STATISTIC} element={<Menu />} /> */}
				</Route>

				<Route path={PATH.ERROR} element={<Error />} />
			</Routes>
		</>
	)
}

export default Router
