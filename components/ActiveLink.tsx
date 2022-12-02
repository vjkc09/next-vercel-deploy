import React, { CSSProperties, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

interface Props {
    text: string;
    href: string;
}

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink: FC<Props> = ({text, href}) => {   
    
    const {asPath} =  useRouter();       

  return (  
    <Link href={href} style={ asPath === href ? style : undefined}>
        {text}
    </Link>
  )
}
