"use client"
import { NextPage } from 'next'
import './page.css'
import { useEffect, useState } from 'react';

interface CatergoryCardProps {

}
interface CategoryArr {
    name: string,
    icon: string

}
const handleClick = (id: number) => {
    console.log(id, 'CLICKED')
}
const CatergoryCard: NextPage<CatergoryCardProps> = ({ }) => {
    const categoryArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    useEffect(() => {
        handleApi()
    }, [])
    const [categoryData, setCategoryData] = useState([])
    async function handleApi() {
        let res = await fetch('http://localhost:3001/used-cars')
        let data = await res.json()
        setCategoryData(data)
        console.log(data, "data*****")
    }
    return <div className='catgeorycardDiv col'>
        <div className='categoryCardContainer'>
            {categoryData.map((data: CategoryArr, index) => {
                return (
                    <div className='categoryCard' key={index} onClick={() => handleClick(index)}>
                        <div className='categoryCardImg'>
                            <img className="d-block w-100" src={data.icon} alt="First slide" />
                        </div>
                        <div className='header'>{data.name}</div>
                    </div>
                )
            })}
        </div>
    </div>
}

export default CatergoryCard