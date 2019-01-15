import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from 'Theme/ThemeContext'

class Layout extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ option }) => (
                    <div
                        style={{
                            background: option,
                            width: '100%',
                            minHeight: '100%',
                        }}
                    >
                        {this.props.children}{' '}
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
