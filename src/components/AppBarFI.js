import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = theme => ({
  appBarFI: {
    position: 'relative'
  },
  iconFI: {
    marginRight: theme.spacing.unit * 2
  }
}
)

class AppBarFI extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { classes } = this.props

    return (
      <AppBar position='static' className={classes.appBarFI}>
        <Toolbar>
          <CameraIcon className={classes.iconFI} />
          <Typography variant='title' color='inherit' noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

AppBarFI.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppBarFI)
