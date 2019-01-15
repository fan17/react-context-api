import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from 'Theme/ThemeContext'

class Theme extends React.Component {
    constructor(props) {
        super(props)

        const themeOptions = ['red', 'green', 'blue']

        this.state = {
            option: themeOptions[0],
            availableOptions: themeOptions,
        }
    }

    changeOption(newOption) {
        this.setState({ option: newOption })
    }

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    option: this.state.option,
                    availableOptions: this.state.availableOptions,
                    change: newOption => this.changeOption(newOption),
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

Theme.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Theme
