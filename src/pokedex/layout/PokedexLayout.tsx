import { Stack } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar';

interface LayoutProps {
    children: React.ReactNode;
}

const PokedexLayout : React.FC<LayoutProps> = ({children} : LayoutProps) => {

    return (
        <>
            <NavBar/>

            <Stack sx={{
                backgroundImage: "url('/src/assets/pokeBackground.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                alignItems: 'center',
                pt: 15,
                pb: 2.4,
                px: 6,
                display:'flex',
                minHeight: '100vh',
                alignContent: 'start'
            }}>

                {children}

            </Stack>
        </>
    )
}

export default PokedexLayout
