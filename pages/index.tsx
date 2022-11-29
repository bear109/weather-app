import Layout from 'components/Layout';
import WeatherBox from 'components/WeatherBox';
import { FaSearch } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="mx-auto opacity-75 bg-2">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center justify-center w-1/3 border-b-2">
          <FaSearch color="white" size={25} />
          <input
            className="w-full py-2 pr-3 ml-5 text-white bg-transparent placeholder:text-slate-100 focus:outline-none"
            placeholder="지역을 입력하세요. (ex.강남구, 송파구)"
            type="text"
          />
        </div>

        <div>
          <WeatherBox />
          <WeatherBox />
          <WeatherBox />
          <WeatherBox />
        </div>
      </div>
    </div>
  );
}
