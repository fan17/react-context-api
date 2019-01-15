import React from 'react'
import ThemeContext from 'Theme/ThemeContext'
import Header from 'Layout/Header'

export default class HeaderUsingContext extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => <Header {...theme} />}
            </ThemeContext.Consumer>
        )
    }
}
