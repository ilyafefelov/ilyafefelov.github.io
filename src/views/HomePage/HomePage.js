import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  main: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'row'
  },
  half: {
    width: '50%'
  },
  leftHalf: {
    background: 'pink'
  },
  rightHalf: {
    background: 'cyan'
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
})

class HomePage extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    const { classes } = this.props

    return (
      <React.Fragment>


        <div className={classnames(classes.main)}>
          <div className={classnames(classes.half, classes.leftHalf)} />
          <div className={classnames(classes.half, classes.rightHalf)} />
        </div>

      </React.Fragment>
    )
  }
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage)
