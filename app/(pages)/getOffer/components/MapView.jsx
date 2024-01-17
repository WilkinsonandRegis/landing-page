import { GoogleMapsEmbed } from '@next/third-parties/google';
import { useMemo } from 'react';

export default function MapView({coordinates, myApi}) {
    const showMap = useMemo(() => <GoogleMapsEmbed
                apiKey={myApi}
                height={"350px"}
                width="100%"
                mode="place"
                center={coordinates}
                zoom={18}
                q={coordinates}
            />
        , [coordinates, myApi]);
    
    return (
        <>
            {coordinates && <section className='w-screen flex-1 overflow-x-hidden'>
                {showMap}
            </section>}
        </>

    )
}
