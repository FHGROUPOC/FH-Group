'use client'
import { NextSeo } from 'next-seo'
import React from 'react'

function HomeSEO() {
  return (

    <NextSeo


    title={'FH GROUP - ONE STEP SOLUTION'}
    description={'FH Group: Your One-Step Solution Provider – Where Ideas Ignite, Solutions Excel!'}
    openGraph={{
      url: `https://www.fhgroupoc.com/`,
      title: 'FH GROUP - ONE STEP SOLUTION',
      description: 'FH Group: Your One-Step Solution Provider – Where Ideas Ignite, Solutions Excel!',
      images: [
        {
          url: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg",
          alt: 'FH GROUP - ONE STEP SOLUTION',
          width: 800,
          height: 600,
          type: 'image/svg',
        },
        {
          url: 'https://res.cloudinary.com/dgtk4rthy/image/upload/v1735053003/FHGROUPOC/LOGOS/lbpiwgnsx1ugmhdmdyca.svg',
          width: 900,
          height: 800,
          alt: 'FH GROUP - ONE STEP SOLUTION',
          type: 'image/svg',
        },

      ],
      site_name: 'FH GROUP - ONE STEP SOLUTION',
    }}
    twitter={{
      cardType: 'summary_large_image',
    }}
  />
  )
}

export default HomeSEO