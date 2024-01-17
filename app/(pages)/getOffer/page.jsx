import React from 'react';
import NavSection from '@/app/sections/NavSection';
import PageScreens from './PageScreens';

export default function getOfferPage() {
    return (
        <main className='h-screen w-screen flex flex-col'>
            <NavSection type={0} />
            <PageScreens/>
        </main>
    )
}
