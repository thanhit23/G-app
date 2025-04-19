import { Filter, More, Search } from 'src/components/Icons';

import UserSuggestion from './UserSuggestion';

const SearchPage = () => {
  const suggestions = [
    {
      id: 1,
      username: 'zuy20n',
      displayName: '주근리',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zuy20n',
      followers: 3749,
    },
    {
      id: 2,
      username: 'dicaphe.dn',
      displayName: 'Đi Cà Phê',
      bio: 'Hôm nay đi cà phê cùng mình 🧡',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dicaphe',
      followers: 11300,
    },
    {
      id: 3,
      username: 'igtrvy',
      displayName: 'Trúc Vy ⚪',
      bio: 'Toptop: Vicei ⚪\nToptop mèo của tui: Vyhousecat\n2003, 1m55, 41kg...',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=igtrvy',
      followers: 1803,
      verified: true,
    },
    {
      id: 4,
      username: 'dorisstudio.vn',
      displayName: 'DORIS STUDIO',
      bio: '🏬 Mua sắm trực tiếp tại:\n•42 thống nhất, P.bình thọ, TP. Thủ Đức (kiot 5)',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=doris',
      followers: 5718,
    },
  ];

  return (
    <div className="flex justify-center min-h-screen px-10 bg-black-1">
      <div className="container max-w-[700px]">
        <div className="flex flex-col min-h-screen text-white">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"></div>
              <h1 className="text-sm-1.5 font-semibold">Search</h1>
              <button className="text-white">
                <More />
              </button>
            </div>
          </div>

          <div className="pt-4 px-6 pb-[10px] rounded-3xl bg-black-quartz-1 border border-solid border-grey-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="text-grey-1 h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="bg-black text-white w-full py-2.5 pl-11 pr-10 rounded-full focus:outline-none"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <button className="text-grey-1">
                  <Filter />
                </button>
              </div>
            </div>
            <h2 className="text-grey-3 text-sm-1.5 mt-4 mb-2 font-semibold">
              Follow suggestions.
            </h2>
            <div className="divide-y divide-gray-800">
              {suggestions.map((user) => (
                <UserSuggestion
                  key={user.id}
                  username={user.username}
                  displayName={user.displayName}
                  bio={user.bio}
                  avatar={user.avatar}
                  followers={user.followers}
                  verified={user.verified}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
