

function Transition({transName}:any){
  
    return <>
    <div className="flex justify-center relative mx-16 sm:mx-6 mt-16 sm:mt-10 ">
    <h2 className="font-bold text-xl after:content-[''] after:h-0.5  after:absolute after:top-1/2 after:right-0 after:translate-y-center  after:w-96 sm:after:w-14 after:bg-siteDark before:content-[''] before:h-0.5  before:absolute before:top-1/2 before:left-0 before:translate-y-center  before:w-96 sm:before:w-14 before:bg-siteDark ">{transName}</h2>

    </div>
    </>
}

export default Transition