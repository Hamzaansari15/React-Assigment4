import { Cascader } from 'antd';
const options = [
  {
    value: 'Current Location',
    label: 'Current Location',
  },
  {
    value: 'Los Angelas, CA',
    label: 'Los Angelas, CA',
  },
  {
    value: 'Union Station, los Angelas',
    label: 'Union Station, los Angelas',
  },
];
const onChange = (value) => {
  console.log(value);
};
const DatePicker = () => <div className='cascader'><Cascader style={{width: '22em'}} options={options} onChange={onChange} placeholder="City, airport, hotel or address" /></div>;
export default DatePicker;