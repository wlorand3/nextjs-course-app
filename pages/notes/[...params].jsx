import React from 'react'
import { useRouter } from 'next/router'

const ParamsPage = () => {

    const router = useRouter()
    const { params } = router.query; 
    console.log('params is: ', params);
    
    return (
        <h1> Note </h1> 
    )
}

export default ParamsPage