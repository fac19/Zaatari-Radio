import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { ThemeProvider, makeStyles, useTheme } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { NavTitle } from '../styles/componentsStyles';

const useStyles = makeStyles(() => ({
	title: {
		flexGrow: 1,
	},
	drawer: {
		width: 300,
		flexShrink: 0,
	},
	drawerPaper: {
		marginTop: '4rem',
		width: 190,
	},
	dropper: {
		marginTop: '4rem',
	},
}));

export default function Nav(props) {
	const { window } = props;
	const theme = useTheme();
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<>
			<List>
				{['Home', 'View Workshops', 'Contact'].map((text) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</>
	);

	return (
		<ThemeProvider theme={theme}>
			<AppBar positon="static">
				<Toolbar color="primary">
					<AccountBalanceIcon />
					<NavTitle className={classes.title}>Zaatari Radio</NavTitle>
					<Hidden smUp implementation="css">
						<IconButton aria-label="open drawer" color="contrast" onClick={handleDrawerToggle}>
							<MenuIcon />
						</IconButton>
					</Hidden>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="Home View Workshops Contact">
				<Hidden smUp implementation="css">
					<Drawer className={classes.dropper} container={container} variant="temporary" anchor="top" open={mobileOpen} onClose={handleDrawerToggle}>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						anchor="right"
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
	window: PropTypes.number().isRequired,
};
