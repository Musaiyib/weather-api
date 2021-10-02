import React from 'react'
import './container.scss'
import Header from '../header/Header'
import Body from '../body/Body'

export default function Container() {
    return (
        <div className="container">
            <Header />
            <Body />
        </div>
    )
}
