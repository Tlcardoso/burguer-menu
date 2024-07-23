import { HeroTypes } from './types';

export const Hero = ({ src, alt = 'Hero' }: HeroTypes) => {
  return (
    <div
      className="relative h-[150px] z-0"
    >
      <img
        src={src}
        alt={alt}
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
};
