import { imgInvalid } from './images'

function Invalid() {
    return(
        <div className="mt-[10px]">
            <div>
                <img src={imgInvalid} />
                <p className='font-serif font-medium mt-[10px]'>Oops! Invalide Location :/</p>
            </div>
            <div className='flex justify-between mt-[50px] pb-[50px]'>
                <div className='flex items-center'>
                    <i className='fa-solid fa-water mr-[5px]'></i>
                    <p>Humidity</p>
                </div>
                <div className='flex items-center'>
                    <i className='fa-solid fa-wind'></i>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>

    )
}

export default Invalid