import Button from "../button/Button"
import Popup from "../popup/Popup"


const TableRow = ({title,styling}) => {
  return (
    <tr className=" h-[36px] bg-[#E0E0E0] border-b-lightGray relative">
          <td className="font-medium text-[12px] leading-[20px] text-blue-500 pl-6">
            Gotham Asylummm
          </td>
          <td className="font-medium text-[12px] leading-[20px] text-blue-500">
            10th August, 202333
          </td>
          <td className="font-medium text-[12px] leading-[20px] text-blue-500  flex justify-between  items-center pr-10 h-[36px]">
            <Button styling={styling} title={title} />
            <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.99999 8.83333C2.46023 8.83333 2.83332 8.46024 2.83332 8C2.83332 7.53976 2.46023 7.16667 1.99999 7.16667C1.53975 7.16667 1.16666 7.53976 1.16666 8C1.16666 8.46024 1.53975 8.83333 1.99999 8.83333Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.99999 3C2.46023 3 2.83332 2.6269 2.83332 2.16667C2.83332 1.70643 2.46023 1.33333 1.99999 1.33333C1.53975 1.33333 1.16666 1.70643 1.16666 2.16667C1.16666 2.6269 1.53975 3 1.99999 3Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.99999 14.6667C2.46023 14.6667 2.83332 14.2936 2.83332 13.8333C2.83332 13.3731 2.46023 13 1.99999 13C1.53975 13 1.16666 13.3731 1.16666 13.8333C1.16666 14.2936 1.53975 14.6667 1.99999 14.6667Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </td>
          {/* <Popup /> */}
          
        </tr>
  )
}

export default TableRow
