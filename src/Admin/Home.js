import { Link } from "react-router-dom";
import { getItem, IsAdmin } from "../utils/localStorage";
import HomePage from "../Components/Home";
function Home() {
  const IsAdminVipin = getItem(IsAdmin);

  if (!IsAdminVipin) {
    return <HomePage />;
  }
  return (
    <div>
      <div className=" gap-5 flex mx-auto justify-center items-center  text-xl">
        <Link
          className="bg-green-600 px-2 py-1 rounded hover:bg-green-700"
          to="/admin/users"
        >
          Users
        </Link>
        <Link
          className="bg-pink-600 px-2 py-1 rounded hover:bg-pink-700"
          to="/admin/notes"
        >
          Notes
        </Link>
        <Link
          className="bg-orange-600 px-2 py-1 rounded hover:bg-orange-700"
          to="/admin/papers"
        >
          Papers
        </Link>
        <Link
          className="bg-violet-600 px-2 py-1 rounded hover:bg-violet-700"
          to="/admin/labs"
        >
          Labs
        </Link>
      </div>
      <div>
        <h1 className=" text-center md:mt-20 text-3xl text-gray-300 my-7">Admin Page for Vipin Notes </h1>
      </div>
    </div>
  );
}

export default Home;
