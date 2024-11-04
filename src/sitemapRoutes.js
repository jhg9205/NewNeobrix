import { Routes, Route, Outlet } from 'react-router-dom'

const Router = () => {
    return (
            <Routes>
                <Route path='/'  />

                <Route path='/company' />
                <Route path='/company/organization'  />
                <Route path='/company/certificate'  />
                <Route path='/company/patent' />
                <Route path='/company/location' />

                <Route path='/business' />
                <Route path='/business/history'/>

                <Route path='/research' />
                <Route path='/research/history'  />
                <Route path='/research/list' />
                <Route path='/research/detail/:menu/:index' />

                <Route path='/prcenter' />
                <Route path='/prcenter/faq'/>
                <Route path='/prcenter/pr'/>
                <Route path='/prcenter/detail/:menu/:index'  />

                <Route path='/recruit' />
                <Route path='/recruit/ment' />
                <Route path='/recruit/welfare'  />
                <Route path='/recruit/detail/:menu/:index' />

                <Route path='/customer'/>
                <Route path='/customer/util'  />
                <Route path='/customer/detail/:menu/:index' />


                <Route path='/*' />
            </Routes>
    )
}

export default Router
