import React, { Component } from 'react'
import './App.css'
import Theme from 'Theme/Theme'
import Layout from 'Layout/Layout'
import HeaderUsingContext from 'Layout/HeaderUsingContext'
import HeaderUsingHoc from 'Layout/HeaderUsingHoc'

class App extends Component {
    render() {
        return (
            <Theme>
                <Layout>
                    <HeaderUsingContext />
                    <HeaderUsingHoc />
                </Layout>
            </Theme>
        )
    }
}

export default App
