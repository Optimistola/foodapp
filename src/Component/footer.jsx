import { FiFacebook, FiTwitter, FiInstagram, FiGithub, FiYoutube} from 'react-icons/fi'
function Footer(){
    return(
        <footer className="bg-black">
       <div className="md:flex justify-center content-center items-center mt-20 ">
        <div className=' ml-5 md:ml-10 mr-10'>
        <h2 className='text-bold  text-2xl mt-20'><span className='text-red-600'>Sti</span>ll Need Our Support ?</h2>
        <p className="">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
        </div>
        <div className="flex  md:ml-20 mt-20 px-3 py-2 content center ">
            <input type='text' placeholder="Enter your Email" className="px-3 py-2 shadow appearance-none w-full text-gray-700 border-none leading-tight focus:outline-none focus:shadow-outline"/>
            <button className="bg-red-600  text-white px-3 py-2">Subscribe</button>
        </div>
    </div>
    <hr className="bg-red-600 mb-5"/>
    <div className="md:flex justify-center content-center gap-10  ml-5 md:ml-20 md:mr-10">
    <div className=" flex-1  mb-5">
        <h3 className=" text-lg font-bold mb-5">About us</h3>
        <p className="">Corporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
    </div>
    <div className="flex-1 mb-5 mt-5">
        <h3 className="text-lg font-bold mb-5">Useful link</h3>
        <ul>
            <li className='mb-5'>About</li>
            <li className='mb-5'>News</li>
            <li className='mb-5'>Partners</li>
            <li className='mb-5'>Team</li>
            <li className='mb-5'>Menu</li>
            <li className='mb-5'>contact</li>

        </ul>
    </div>
    <div className="flex-1 mb-5 mt-5">
        <h3 className="text-lg font-bold mb-5">Help</h3>
         <ul>
            <li className='mb-5'>FAQ</li>
            <li className='mb-5'>Terms & Condition</li>
            <li className='mb-5'>Reporting</li>
            <li className='mb-5'>Documentation</li>
         </ul>
    </div>
    <div className="flex-1 mt-5 mb-5 ">
        <h3 className="text-lg font-bold">Recent post</h3>
    </div>
    </div>
    <div className=" flex flex-col-reverse text-center md:flex-row bg-red-600 text-white py-5  justify-around gap-10 	">
        <div>
        <p>Copyright © 2023 | FoodApp by Optimist. All Rights Reserved.</p>
            </div>
        <div className='flex items-center justify-center gap-5'>
           <a href="https//:facebook.com"><FiFacebook/></a>
           <FiTwitter/>
           <FiInstagram/>
           <FiGithub/>
           <FiYoutube/>
        </div>
    </div>
    </footer>
    )
}
export default Footer;
