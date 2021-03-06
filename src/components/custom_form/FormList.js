import { inputConf } from "./control/Input";
import { selectConf } from "./control/Select";
import { radioConf } from "./control/Radio";
import { checkBoxConf } from "./control/CheckBox";
import { cascaderConf } from "./control/Cascader";
import { textConf } from "./control/Text";
import { titleConf } from "./control/Title";
import { hrConf } from "./control/Hr";
import { pConf } from "./control/P";
import { uploadsConf } from './control/Uploads';
import { datePickerConf } from './control/DatePicker'
import { addressConf } from './control/Address';
import { iconConf } from './control/Icon';
import { dragConf } from './control/drag';

const formList = {
  title: titleConf,
  hr: hrConf,
  p: pConf,
  input: inputConf,
  select: selectConf,
  radio: radioConf,
  checkbox: checkBoxConf,
  datepicker: datePickerConf,
  cascader: cascaderConf,
  address: addressConf,
  uploads: uploadsConf,
  text: textConf,
  icon: iconConf,
  drag: dragConf
};
let list_arr = [];
for (let i in formList) {
  list_arr.push({
    ele: i,
    obj: formList[i]
  });
}
export default list_arr;
