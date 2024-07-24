import { IoSearchOutline } from 'react-icons/io5';
import { InputType } from './types';

export const Input = ({ placeholder }: InputType) => {
  return (
    <div
      className="w-full h-[40px] border-2 border-darkGray rounded-lg flex justify-between px-2 gap-2 items-center md:bg-lightGray"
    >
      <IoSearchOutline className='text-darkGray' size={20} />
      <input
        className="w-full text-black"
        placeholder={placeholder}
      />
    </div>
  );
};
