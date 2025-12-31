const Card = ({ userData, runDelete }) => {
  if (userData.length === 0) {
    return <p className="text-gray-400 text-center mt-10">No users found.</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      {userData.map((user, idx) => {
        return (
          <div
            key={idx}
            className="bg-[#121010] border border-[#2a2a2a] rounded-xl p-4 flex justify-between items-center"
          >
            <div className="flex flex-col gap-2">
              <p className="text-white font-semibold">{user.userName}</p>
              <p className="text-gray-400 text-sm">
                {user.userRole} · {user.userCompany} · {user.userCity}
              </p>
            </div>

            <button
              className="text-sm text-red-400 hover:text-red-500 transition cursor-pointer"
              onClick={() => runDelete(idx)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
