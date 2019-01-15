import React from 'react'
import ThemeContext from 'Theme/ThemeContext'

const withTheme = ChildComponent => props => (
    <ThemeContext.Consumer>
        {theme => <ChildComponent {...props} {...theme} />}
    </ThemeContext.Consumer>
)

export default withTheme
