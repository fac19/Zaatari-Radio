import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
// import SvgIcon from '@material-ui/core/SvgIcon';
// import Drawer from '@material-ui/core/Drawer';
import { NavTitle } from '../styles/componentsStyles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#4f8a8b',
		},
	},
});

const useStyles = makeStyles(() => ({
	title: {
		flexGrow: 1,
	},
}));

export default function Nav() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<AppBar positon="static">
				<Toolbar color="primary">
					<AccountBalanceIcon />
					<NavTitle className={classes.title}>Zaatari Radio</NavTitle>
					<IconButton aria-label="menu" color="contrast">
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}
