import TableRow from "@/app/(shared)/tableRow/tableRow"
import Button from "../../(shared)/button/Button"
import dataArr from "@/app/(data)/Data"
import Popup from "@/app/(shared)/popup/Popup"

const Transformation = () => {

  const mappedArr=dataArr.map(data=>(<TableRow key={data.id} title={data.text} styling={data.styling} />))

  return (
  
    <section className=" flex flex-col h-screen">
        <section className=" flex p-8 border-b-[2px] border-[#E6E7EC]">
            <div className=" ml-auto flex gap-2 ">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" rx="4" transform="matrix(-1 0 0 1 38 0)" fill="#32D583"/>
<path d="M21.9858 15.5653C21.9176 14.8778 21.625 14.3437 21.108 13.9631C20.5909 13.5824 19.8892 13.392 19.0028 13.392C18.4006 13.392 17.892 13.4773 17.4773 13.6477C17.0625 13.8125 16.7443 14.0426 16.5227 14.3381C16.3068 14.6335 16.1989 14.9688 16.1989 15.3438C16.1875 15.6562 16.2528 15.929 16.3949 16.1619C16.5426 16.3949 16.7443 16.5966 17 16.767C17.2557 16.9318 17.5511 17.0767 17.8864 17.2017C18.2216 17.321 18.5795 17.4233 18.9602 17.5085L20.5284 17.8835C21.2898 18.054 21.9886 18.2812 22.625 18.5653C23.2614 18.8494 23.8125 19.1989 24.2784 19.6136C24.7443 20.0284 25.1051 20.517 25.3608 21.0795C25.6222 21.642 25.7557 22.2869 25.7614 23.0142C25.7557 24.0824 25.483 25.0085 24.9432 25.7926C24.4091 26.571 23.6364 27.1761 22.625 27.608C21.6193 28.0341 20.4063 28.2472 18.9858 28.2472C17.5767 28.2472 16.3494 28.0312 15.304 27.5994C14.2642 27.1676 13.4517 26.5284 12.8665 25.6818C12.2869 24.8295 11.983 23.7756 11.9545 22.5199H15.5256C15.5653 23.1051 15.733 23.5937 16.0284 23.9858C16.3295 24.3722 16.7301 24.6648 17.2301 24.8636C17.7358 25.0568 18.3068 25.1534 18.9432 25.1534C19.5682 25.1534 20.1108 25.0625 20.571 24.8807C21.0369 24.6989 21.3977 24.446 21.6534 24.1222C21.9091 23.7983 22.0369 23.4261 22.0369 23.0057C22.0369 22.6136 21.9205 22.2841 21.6875 22.017C21.4602 21.75 21.125 21.5227 20.6818 21.3352C20.2443 21.1477 19.7074 20.9773 19.071 20.8239L17.1705 20.3466C15.6989 19.9886 14.5369 19.429 13.6847 18.6676C12.8324 17.9062 12.4091 16.8807 12.4148 15.5909C12.4091 14.5341 12.6903 13.6108 13.2585 12.821C13.8324 12.0312 14.6193 11.4148 15.6193 10.9716C16.6193 10.5284 17.7557 10.3068 19.0284 10.3068C20.3239 10.3068 21.4545 10.5284 22.4205 10.9716C23.392 11.4148 24.1477 12.0312 24.6875 12.821C25.2273 13.6108 25.5057 14.5256 25.5227 15.5653H21.9858Z" fill="white"/>
</svg>
<div className="">
    <h6 className=" text-dark text-sm font-semibold leading-[20px]">Sigflow</h6>
    <p className=" text-sm text-textGray leading-[20px]">Adeoluwa Siyanbade</p>
</div>

            </div>
        </section>
        <section className=" flex justify-between p-8">
            <h2 className=" font-semibold text-[20px] leading-[28px] text-dark">Transformation</h2>
            <div className=' space-x-2'>
              <Button title='Create a new Transformation' styling='w-[224px] text-sm text-white font-bold h-[36px] rounded-[8px] bg-brandColor' />
              <Button title='Filters' styling='w-[71px] text-sm text-white font-bold h-[36px] rounded-[8px] bg-brandColor' />
            </div>
        </section>
        <section className=" flex px-8">
          <input type="search" id="search" name="search" placeholder="Search transformation" className=" w-[320px] h-[36px]  border-[1px] rounded-md px-4 ml-auto" />
        </section>
        <section className="p-8 flex-1 border-[1px] rounded-[8px] border-[#E6E7EC] flex flex-col mx-8 mt-8">
        <table className=" w-full ">
        <thead>
          <tr className=" h-[36px]">
            <th className=" font-medium text-[12px] leading-[20px] text-textGray text-left pl-6">Name</th>
            <th className=" font-medium text-[12px] leading-[20px] text-textGray text-left">Creation Date</th>
            <th className=" font-medium text-[12px] leading-[20px] text-textGray text-left pr-6">Status</th>
        </tr>
        </thead>
        <tbody>
        {mappedArr}
        </tbody>
        </table>
        <div className=" flex gap-2 mt-auto">
          <div className="hover:cursor-pointer w-[36px] h-[30px] text-[12px] leading-[24px] rounded-[4.8px] bg-brandColor text-white flex justify-center items-center">5</div>
          <div className="hover:cursor-pointer w-[36px] h-[30px] text-[12px] leading-[24px] rounded-[4.8px] text-textGray flex justify-center items-center bg-[#F5F5F5]">10</div>
          <div className= "hover:cursor-pointer w-[36px] h-[30px] text-[12px] leading-[24px] rounded-[4.8px] text-textGray flex justify-center items-center bg-[#F5F5F5]">15</div>
        </div>
        </section>
        {/* <Popup /> */}
        
    </section>
  )
}

export default Transformation
