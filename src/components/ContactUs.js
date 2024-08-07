
let ContactUs=()=>{
    return (
        <div>
            <h1 className="font-bold-3xl m-4">Contact</h1>
            <form className="">
                <input type="text" className=" border border-black p-2 m=2" placeholder="name"></input>
                <input type="text" className="border border-black p-2 m=2" placeholder="message"></input>
                <button className=" bg-red-300 rounded-lg">Submit</button>
            </form>
        </div>
    )
}
export default ContactUs;