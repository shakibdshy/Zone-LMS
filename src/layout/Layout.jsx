import { Container } from '@mantine/core'
import React from 'react'
import Header from '../components/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container fluid>
                <main>
                    {children}
                </main>
            </Container>
        </>
    )
}

export default Layout