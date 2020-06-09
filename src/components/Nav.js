import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { NavTitle, StyledLink } from '../styles/componentsStyles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#07031A',
		},
		secondary: {
			main: '#FFFFFF',
		},
	},
});

const useStyles = makeStyles(() => ({
	title: {
		flexGrow: 1,
		position: 'relative',
		top: '.2rem',
	},
	drawerPaper: {
		marginTop: '4rem',
		width: 190,
	},
	dropperPaper: {
		marginTop: '3.5rem',
		width: 190,
	},
}));

export default function Nav(props) {
	const { window } = props;
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const navItems = [
		{
			title: 'Home',
			titleHref: '/',
		},
		{
			title: 'View Workshops',
			titleHref: '/workshops',
		},
		{
			title: 'Contact',
			titleHref: '/',
		},
	];

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<>
			<List>
				{navItems.map((item) => (
					<ListItem button key={item.title} component={StyledLink} to={item.titleHref}>
						<ListItemText primary={item.title} />
					</ListItem>
				))}
			</List>
		</>
	);

	return (
		<ThemeProvider theme={theme}>
			<AppBar positon="static">
				<Toolbar color="primary">
					<StyledLink to="/">
						<AccountBalanceIcon />
					</StyledLink>
					<NavTitle button className={classes.title}>
						<StyledLink to="/">Zaatari Radio</StyledLink>
					</NavTitle>
					<Hidden smUp implementation="css">
						<IconButton aria-label="open drawer" color="secondary" onClick={handleDrawerToggle}>
							<MenuIcon />
						</IconButton>
					</Hidden>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="Home View Workshops Contact">
				<Hidden smUp implementation="css">
					<Drawer
						classes={{
							paper: classes.dropperPaper,
						}}
						container={container}
						variant="temporary"
						anchor="left"
						open={mobileOpen}
						onClose={handleDrawerToggle}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						anchor="left"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</ThemeProvider>
	);
}

Nav.propTypes = {
	window: PropTypes.shape({}).isRequired,
};
