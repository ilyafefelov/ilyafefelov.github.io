import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBarFI from '../../components/AppBarFI'

import SecureRouter from '../Router/SecureRouter'

import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00695c',
      light: '#439889',
      dark: '#003d33',
      accent: '#00bcd4',
      accentOpacity: '#00bcd40f',
      contrastText: '#fff'
    },
    secondary: {
      main: '#e65100',
      light: '#ff833a',
      dark: '#ac1900',
      contrastText: '#000'
    },
    background: {
      main: '#00796B',
      grey: '#fafafa',
      darkgrey: '#929292'
    }
  },
  status: {
    danger: 'orange'
  }
})

const styles = () => ({
  loaderApp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#00796B'
  }
})

class App extends Component {
  componentWillMount () {
    // const { user, getCurrentUserPoint } = this.props
    // if (!user) {
    //   getCurrentUserPoint()
    // }
  }

  render () {
    // const { user, classes } = this.props

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
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          {/*<AppBarFI classes={classes} />*/}
          {/* <HeaderRouter /> */}
          {/* <SecureRouter wsHandler /> */}
          <SecureRouter />
        </CssBaseline>
      </MuiThemeProvider>
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
