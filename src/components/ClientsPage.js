import React from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import client7 from '../assets/client7.png'

const ClientsPage = () => {
  return (
    <>
        <div className='px-4 mx-auto container mt-16'>
            <div className='sm:flex justify-between items-center'>
                <h1 className='text-xl text-primary text-center sm:text-start'>
                    Let's turn ideas into digital reality. Whether you're starting fresh or leveling up, we're here to guide and collaborate. Start the conversation today.
                </h1>
               <div className='flex justify-center mt-6'>
                <button className='bg-secondary py-2 px-12 rounded-lg text-white'>Contact</button>      
               </div>
                
            </div>
            <div className='mt-20 mb-10'>
                <h1 className='text-secondary text-xl font-bold text-center'>Celebrating collaborations with innovators and businesses from around the world.</h1>
            </div>
        </div> 

        <div class="relative flex overflow-x-hidden">
            <div class="flex py-12 animate-marquee whitespace-nowrap">
                <span class="text-4xl mx-4"><img src={client1} /></span>
                <span class="text-4xl mx-4"><img src={client2} /></span>
                <span class="text-4xl mx-4"><img src={client3} /></span>
                <span class="text-4xl mx-4"><img src={client4} /></span>
                <span class="text-4xl mx-4"><img src={client5} /></span>
                <span class="text-4xl mx-4"><img src={client6} /></span>
                <span class="text-4xl mx-4"><img src={client7} /></span>
            </div>

            <div class="flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span class="text-4xl mx-4"><img src={client1} /></span>
                <span class="text-4xl mx-4"><img src={client2} /></span>
                <span class="text-4xl mx-4"><img src={client3} /></span>
                <span class="text-4xl mx-4"><img src={client4} /></span>
                <span class="text-4xl mx-4"><img src={client5} /></span>
                <span class="text-4xl mx-4"><img src={client6} /></span>
                <span class="text-4xl mx-4"><img src={client7} /></span>
            </div>
        </div>
        
    </>
  )
}

export default ClientsPage