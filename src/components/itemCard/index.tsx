import { ItemCardType } from './types';

export const ItemCard = ({ active, title, src, alt = '', onClick }: ItemCardType) => {
  return (
    <div
      className={`w-[104px] h-[146px] flex flex-col justify-start items-center gap-6 ${active && 'border-b-2 border-primary'} cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`w-[82px] h-[82px] rounded-full ${active && 'border-2 border-primary'} flex justify-center items-center`}
      >
        <img
          className="w-[74px] h-[74px] rounded-full object-cover"
          src={src}
          alt={alt}
        />
      </div>
      <p
        className="m-0 font-semibold text-base color-black"
      >
        {title}
      </p>
    </div>
  );
};
