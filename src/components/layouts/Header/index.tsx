import Arrow from 'src/components/Icons/Arrow';
import Storage from 'src/utils/storage';

const Header = () => {
  const userInfo = Storage.getUserInfo();

  return (
    <div className="grid grid-cols-6 h-[60px] items-center">
      <div />
      <div className="flex gap-2 justify-center col-span-4">
        <div className="text-base font-semibold">
          {userInfo ? 'Đang theo dõi' : 'Trang chủ'}
        </div>
        {userInfo && (
          <div className="flex border border-solid w-6 h-6 border-[#f3f5f726] px-[5px] rounded-full">
            <Arrow className="w-6 h-6" />
          </div>
        )}
      </div>
      <div />
    </div>
  );
};

export default Header;
