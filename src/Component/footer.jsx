function Footer(){
    return(
        <footer className="bg-black">
       <div className="md:flex justify-center content-center items-center mt-20 ">
        <div className=' ml-10 mr-10'>
        <h2 className='text-bold  text-2xl mt-20'><span className='text-red-600'>Sti</span>ll Need Our Support ?</h2>
        <p className="text-lg">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
        </div>
        <div className="flex  md:ml-20 mt-20 px-3 py-2 content center ">
            <input type='text' placeholder="Enter your Email" className="px-3 py-2 shadow appearance-none w-full text-gray-700 border-none leading-tight focus:outline-none focus:shadow-outline"/>
            <button className="bg-red-600  text-white px-3 py-2">Subscribe</button>
        </div>
    </div>
    <hr className="bg-red-600 mb-5"/>
    <div className="md:flex justify-center content-center gap-10 ml-20 mr-10">
    <div className=" flex-1  mb-5">
        <h3 className=" text-lg font-bold">About us</h3>
        <p className="">Corporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
    </div>
    <div className="flex-1 mb-5 mt-5">
        <h3 className="text-lg font-bold">Useful link</h3>
        <ul>
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>contact</li>

        </ul>
    </div>
    <div className="flex-1 mb-5 mt-5">
        <h3 className="text-lg font-bold">Help</h3>
         <ul>
            <li>FAQ</li>
            <li>Terms & Condition</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
         </ul>
    </div>
    <div className="flex-1 mb-5 mt-5 ">
        <h3 className="text-lg font-bold">Recent post</h3>
    </div>
    </div>
    </footer>
    )
}
export default Footer;