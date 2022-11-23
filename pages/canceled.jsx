import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gif from "../assets/canceled.gif"
 const canceled = () => {
  return (
    <>
<div className="canceled__container">
    <Image src={gif} width={340} height={340} alt=""/>
    <Link href="/" >
        <button type="button" className="back">
            Go Back 🤗 
        </button>
    </Link>
</div>
    </>
  )
}

export default canceled