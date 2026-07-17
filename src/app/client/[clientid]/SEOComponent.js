'use client'
import React from 'react'
import { NextSeo } from "next-seo";

function SEOComponent({data}) {
  return (
    <NextSeo
    title={data?.title}
    description={data?.blog_detail[0]?.description}
    openGraph={{
      url: `https://www.fhgroupoc.com/client/${data?.slug}`,
      title: data?.title,
      description: data?.blog_detail[0]?.description,
      images: [
        {
          url: data?.mainimg,
          alt: data?.slug,
          width: 800,
          height: 600,
        },
        {
            url: `https://www.fhgroupoc.com/client/${data?.slug}`,
            width: 900,
            height: 800,
            alt: data?.title,
            type: 'image/jpeg',
          },
          { url: data?.mainimg },
          { url: data?.mainimg },
      ],
      site_name: 'FH GROUP OC',
    }}
    twitter={{
      cardType: 'summary_large_image',
    }}
  />
  )
}

export default SEOComponent