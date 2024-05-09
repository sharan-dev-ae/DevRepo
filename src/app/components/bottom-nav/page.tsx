"use client"
import { NextPage } from 'next'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
interface Props { }

const BottomNav: NextPage<Props> = ({ }) => {
    const test = () => {
        console.log("test")
        router.push('/')
    }
    const router = useRouter()
    useEffect(() => {
        console.log('HELLOO',router)
    }, [])
    return (
        <div className="fixed-bottom text-center mb-4 bg-secondary" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '200px', position: 'relative' }}> <button style={{ position: 'relative', bottom: '15px' }} className="btn btn-primary rounded-circle" onClick={test}>
                +
            </button></div>

        </div>)
}

export default BottomNav