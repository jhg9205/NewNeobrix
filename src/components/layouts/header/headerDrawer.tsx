import * as React from 'react'
import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import BusinessIcon from '@mui/icons-material/Business'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SummarizeIcon from '@mui/icons-material/Summarize'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import EditRoadIcon from '@mui/icons-material/EditRoad'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf'
import BiotechIcon from '@mui/icons-material/Biotech'
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import BadgeIcon from '@mui/icons-material/Badge'
import HelpIcon from '@mui/icons-material/Help'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {Link, useNavigate} from 'react-router-dom'
import { PATH } from '@common/domain'

const HeaderDrawer = ({ toggleDrawer }: any) => {
	const navigate = useNavigate()
	const [intro, setIntro] = React.useState(false)
	const [business, setBusiness] = React.useState(false)
	const [research, setResearch] = React.useState(false)
	const [pr, setPr] = React.useState(false)
	const [employ, setEmploy] = React.useState(false)
	const [help, setHelp] = React.useState(false)
	const companyLink = [PATH.COMPANY00, PATH.COMPANY01, PATH.COMPANY02, PATH.COMPANY03]
	const businessLink = [PATH.BUSINESS00, PATH.BUSINESS01]
	const prCenterLink = [PATH.PRCENTER00, PATH.PRCENTER01, PATH.PRCENTER02]
	const recruitLink = [PATH.RECRUIT00, PATH.RECRUIT01, PATH.RECRUIT04, PATH.RECRUIT02]
	const customerLink = [PATH.CUSTOMER00]
	return (
		<Box sx={{ width: 200 }} role="presentation" onKeyDown={toggleDrawer(false)}>
			<List
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Menu
					</ListSubheader>
				}
			>
				<Divider />
				<ListItemButton onClick={() => setIntro(!intro)}>
					<ListItemIcon>
						<BusinessIcon />
					</ListItemIcon>
					<ListItemText primary="기업소개" />
					{intro ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={intro} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['인사말', '비전 및 이념', '면허 및 특허', '찾아오시는 길'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={companyLink[index]}>
									<ListItemIcon>
										{index === 0 ? (
											<RecordVoiceOverIcon />
										) : index === 1 ? (
											<PeopleAltIcon />
										) : index === 2 ? (
											<SummarizeIcon />
										) : index === 3 ? (
											<EmojiEventsIcon />
										) : (
											<EditRoadIcon />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
				<ListItemButton onClick={() => setBusiness(!business)}>
					<ListItemIcon>
						<EnergySavingsLeafIcon />
					</ListItemIcon>
					<ListItemText primary="사업영역" />
					{business ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={business} timeout="auto" unmountOnExit>

				</Collapse>
				<Divider />
				<ListItemButton onClick={() => setResearch(!research)}>
					<ListItemIcon>
						<EnergySavingsLeafIcon />
					</ListItemIcon>
					<ListItemText primary="인재채용" />
					{research ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={research} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['인재상','인사제도','복리후생','채용전형'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={recruitLink[index]}>
									<ListItemIcon>{index === 0 ? <BiotechIcon /> : index === 1 ? <EmojiEventsIcon /> : <SummarizeIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Collapse>
				<ListItemButton onClick={() => setPr(!pr)}>
					<ListItemIcon>
						<InterpreterModeIcon />
					</ListItemIcon>
					<ListItemText primary="홍보" />
					{pr ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={pr} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['회사소식', 'CI', 'FAQ'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={prCenterLink[index]}>
									<ListItemIcon>
										{index === 0 ? <NewspaperIcon /> : index === 1 ? <QuestionAnswerIcon /> : <SummarizeIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
				<ListItemButton onClick={() => setHelp(!help)}>
					<ListItemIcon>
						<InterpreterModeIcon />
					</ListItemIcon>
					<ListItemText primary="문의하기" />
					{help ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={help} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['문의하기'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={customerLink[index]}>
									<ListItemIcon>
										{index === 0 ? <NewspaperIcon /> : index === 1 ? <QuestionAnswerIcon /> : <SummarizeIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
			</List>
		</Box>
	)
}
export default HeaderDrawer
