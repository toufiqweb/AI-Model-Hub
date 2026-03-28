import React, { use } from 'react';
import Model from './Model';

const Models = ({modelPromise , carts , setCarts}) => {

    const models = use(modelPromise)
    // console.log(models);
    

    return (
        <div className='max-w-7xl mx-auto space-y-10 py-20 px-5'>

            <div className='text-center space-y-5'>
                <h2 className='text-3xl md:text-5xl font-bold'>Choose Your AI Model</h2>
                <p className='text-[16px] md:text-lg text-gray-400 '>One subscription gives you access to all frontier AI models</p>
            </div>
            
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-10 '>

                {
                    models.map(model => <Model key={model.id} model={model} carts={carts} setCarts={setCarts}/>)
                }

            </div>

            <p className='text-center text-black/50'>All models are available under one powerful subscription • Cancel anytime</p>
        </div>
    );
};

export default Models;