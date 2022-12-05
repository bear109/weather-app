import Forecast from './Forecast';
import Icon from './Icon';
import Location from './Location';
import Temperature from './Temperature';

export default function Layout() {
  return (
    <div className="container pt-24 pl-32">
      <div className="flex justify-between w-full mt-10 ml-5 ">
        <div className="">
          <Location></Location>
          <Icon></Icon>
        </div>
        <Temperature></Temperature>
      </div>
      <div>
        <Forecast></Forecast>
        <Forecast></Forecast>
        <Forecast></Forecast>
        <Forecast></Forecast>
        <Forecast></Forecast>
      </div>
    </div>
  );
}
