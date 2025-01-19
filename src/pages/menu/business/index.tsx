import { MENU } from '@common/domain'
import TabPanel from '@components/ui/panel/panel'
import Menu1 from './menu1'

const Main = () => {
	// debugger
	const a = window.location.href

	const value = Number(a.split('business/')[1])

	return (
		<>
			<TabPanel index={0} value={value}>
				<Menu1 />
			</TabPanel>
		</>
	)
}

export default Main
