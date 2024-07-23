import { IwithHomeProp } from './types';

const withHome = (props: IwithHomeProp) => {
  const PageWithHome = () => {
    return (
      <div
        className='w-screen h-screen bg-red-500'
      >
        <props.children />
      </div>
    );
  };
  return PageWithHome;
};

export { withHome };
