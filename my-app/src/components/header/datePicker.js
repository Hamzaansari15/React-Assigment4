import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];
const onChange = (value) => {
  console.log(value);
};
const DatePicker = () => <Cascader options={options} onChange={onChange} placeholder="City, airport, hotel or address" />;
export default DatePicker;