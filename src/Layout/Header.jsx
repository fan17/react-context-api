import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
    render() {
        return (
            <header>
                {this.props.availableOptions.map(themeOption => (
                    <div key={themeOption}>
                        {themeOption === this.props.option ? (
                            themeOption
                        ) : (
                            <button
                                type="button"
                                onClick={() => this.props.change(themeOption)}
                            >{`choose ${themeOption}`}</button>
                        )}
                    </div>
                ))}
            </header>
        )
    }
}

Header.propTypes = {
    availableOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    option: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
}

export default Header
