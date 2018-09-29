import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/es/Typography/Typography'
import Paper from '@material-ui/core/es/Paper/Paper'
import { withTheme } from '@material-ui/core/styles'

let cardWidth = 400
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
    background: theme.palette.secondary.light
  },
  rightHalf: {
    background: theme.palette.primary.accent
  },
  card: {
    flexDirection: 'column',
    display: 'flex'
  },
  cardCentered: {
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 'calc(50vw - ' + cardWidth / 2 + 'px)',
    width: cardWidth,
    height: 100,
    border: '1px dotted dimgrey'
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
  title: {
    color: theme.palette.background.blue
  },
  // card: {
  //   // height: '100%',
  //   display: 'flex',
  //   flexDirection: 'column'
  // },
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
    const cardTitleText = 'full_iron'
    const cardBodyText = 'Under Construction'

    const { theme } = this.props
    console.log(theme)

    return (
      <React.Fragment>

        <div className={classnames(classes.main)}>
          <div className={classnames(classes.half, classes.leftHalf)} />
          <Paper rounded={'true'} className={classnames(classes.card, classes.cardCentered)}
            elevation={1}>
            <Typography className={classes.title} variant={'title'}> {cardTitleText} </Typography>
            <Typography color='textSecondary' variant={'body1'}> {cardBodyText} </Typography>
          </Paper>
          <div className={classnames(classes.half, classes.rightHalf)} />
        </div>

      </React.Fragment>
    )
  }
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withTheme()(withStyles(styles)(HomePage))
