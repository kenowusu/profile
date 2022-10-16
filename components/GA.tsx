import Script from 'next/script'

export const GA = ()=>{

    return(
        <>
            <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-5Q14BVCS9F"/>
            <Script>
              {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments)}
                          gtag('js', new Date());
              
                          gtag('config', 'G-5Q14BVCS9F');
              `}
            </Script>
        </>

    )
}