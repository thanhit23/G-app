import Image from 'next/image';

interface UserSuggestionProps {
  username: string;
  displayName: string;
  bio?: string;
  avatar: string;
  followers: number;
  verified?: boolean;
}

const UserSuggestion = ({
  username,
  displayName,
  bio,
  avatar,
  followers,
  verified,
}: UserSuggestionProps) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-800">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 flex-shrink-0">
          <Image
            src={avatar}
            alt={username}
            fill
            className="rounded-full object-cover"
            unoptimized
          />
        </div>

        <div>
          <div className="flex items-center gap-1">
            <h4 className="font-medium">{username}</h4>
            {verified && <span className="text-xs">⚪</span>}
          </div>
          <p className="text-sm text-gray-400">{displayName}</p>
          {bio && <p className="text-sm text-gray-400 mt-0.5">{bio}</p>}
          <div className="flex items-center gap-1 mt-1">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=follower"
              alt="follower"
              width={14}
              height={14}
              className="rounded-full"
              unoptimized
            />
            <span className="text-xs text-gray-400">
              {followers.toLocaleString()} Followers
            </span>
          </div>
        </div>
      </div>

      <button className="bg-white text-black font-bold rounded-lg px-5 py-1.5 text-sm hover:bg-gray-200">
        Follow
      </button>
    </div>
  );
};

export default UserSuggestion;
