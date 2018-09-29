import React, { Component } from 'react'
// import './App.css'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
// import AppBarFI from '../../components/AppBarFI'
import SecureRouter from '../Router/SecureRouter'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles'

import WebFontLoader from '../../Utiles/WebFontLoader'

WebFontLoader()

const theme = createMuiTheme({
  typography: {
    fontFamily: WebFontLoader(),
    fontSize: 20,
    fontWeight: 600
  },
  palette: {
    primary: {
      main2: '#00695c',
      main: '#C4E23B',
      light: '#01FF70',
      dark: '#003d33',
      accent: '#C4E23B',
      accentOpacity: '#00bcd40f',
      contrastText: '#fff'
    },
    secondary: {
      main: '#e65100',
      light: '#C492B1',
      dark: '#ac1900',
      contrastText: '#000'
    },
    background: {
      main: '#00796B',
      grey: '#fafafa',
      darkgrey: '#264653',
      blue: '#1B9AAA'
    }
  },
  status: {
    danger: 'orange'
  }
})

const styles = (theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily
  },
  loaderApp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#00796B'
  },
  appConfig: {
    // fontFamily: "'Roboto', sans-serif"
  }
}
)

class App extends Component {
  componentWillMount () {
    // const { user, getCurrentUserPoint } = this.props
    // if (!user) {
    //   getCurrentUserPoint()
    // }
  }

  render () {
    const { classes } = this.props

    // if (!user) {
    //   return <div className={classes.loaderApp}>
    //     {/*<Loader />*/}
    //   </div>
    // }

    // if (!user.id) {
    //   return (
    //     <MuiThemeProvider theme={theme}>
    //       <CssBaseline>
    //         <UnsecureRouter />
    //       </CssBaseline>
    //     </MuiThemeProvider>
    //   )
    // }
    // const { classes } = this.props
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            {/* <AppBarFI classes={classes} /> */}
            {/* <HeaderRouter /> */}
            {/* <SecureRouter wsHandler /> */}
            <SecureRouter classNames={classes.appConfig} />
          </CssBaseline>
        </MuiThemeProvider></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    reloadLoader: state.reloadLoader
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // getCurrentUserPoint: () => dispatch(getCurrentUser())
  }
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App))
