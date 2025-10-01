import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'


const Generatebtn = () => {

    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()
    const onclickHandler = () => {
        if (user) {
            navigate('/result')
        }
        else {
            setShowLogin(true)
        }
    }


    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='pb-16 text-center'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic. Try now</h1>
            <button onClick={onclickHandler} className='sm:text-lg text-white bg-black m-auto mt-8 px-12 py-3 inline-flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-500'>Generate Image
                <img src={assets.star_group} alt="" className='h-6' />
            </button>
        </motion.div>
    )
}

export default Generatebtn
