import { StyleProvider } from '@ant-design/cssinjs';
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
const hamza = () => {
  alert('hamza')
}
const onChange = (value) => {
  console.log(value);
};
const DatePicker = () => <div className='cascader'><Cascader bordered={true}  options={options} size='large' dropdownRender={hamza} onChange={onChange} placeholder="City, airport, hotel or address" /></div>;
export default DatePicker;