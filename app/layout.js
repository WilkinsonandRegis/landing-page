import { Quicksand  } from 'next/font/google'
import './globals.css'

const inter = Quicksand({ subsets: ['latin'] });
const myApi = process.env.NEXT_PUBLIC_VERCEL_MAPS_API_KEY;

export const metadata = {
    title: "Wilkinson & Regis | Real Estate Agency",
    description: "Sell your house or apartment with ease.",
    keywords: ["Real Estate", "Property Sales", "House Selling", "Apartment Complexes", "Realty Services", "Property Listings", "Home Marketing", "Real Estate Transactions", "Residential Sales", "Commercial Property", "Listing Agent", "Property Valuation", "Selling Process", "Market Analysis", "Client Representation", "Negotiation", "Closing Services", "Investment Properties", "Housing Market", "Real Estate Consultation"],
    authors: [{name: "Chris WIlkinson"}, {name: "Vin Wilkinson"}, {name: "Jose Henandez"}],
    creator: "Fabian Ajokubi",
    openGraph: {
        title: "Wilkinson & Regis | Real Estate Agency",
        description: "Sell your house or apartment with ease.",
        url: "wilkinsonregis.com",
        locale: "en_US",
        images: [
            {
                url: "https://sanydelw.sirv.com/Images/r-architecture-wDDfbanbhl8-unsplash.jpg",
                width: "4500",
                height: "3000",
                alt: "Photo of a house"
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wilkinson & Regis | Real Estate Agency',
        description: 'Sell your house or apartment with ease.',
        images: ['https://sanydelw.sirv.com/Images/r-architecture-wDDfbanbhl8-unsplash.jpg'],
    },
    icons: {
        icon: 'icons/android-chrome-192x192.png',
        shortcut: 'icons/android-chrome-512x512.png',
        apple: 'icons/apple-touch-icon.png',
        other: {
            rel: 'icons/favicon-16x16.png',
            url: 'icons/favicon-32x32.png',
        },
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <script
                    type="text/javascript"
                    defer
                    src={`https://maps.googleapis.com/maps/api/js?key=${myApi}&libraries=places`}
                ></script>

            </body>
        </html>
    );
}