import { PickersDay } from "@mui/x-date-pickers";

import { isHoliday } from "../constants/holidays";

import type { PickersDayProps } from "@mui/x-date-pickers";

function RenderDayColored({
  day,
  ...pickersDayProps
}: PickersDayProps<unknown>) {
  if (!pickersDayProps.selected) {
    const _day = day as Date;
    if (_day.getDay() === 0 || isHoliday(_day)) {
      // 日曜・祝日の場合
      return (
        <PickersDay day={day} {...pickersDayProps} sx={{ color: "#fc1313" }} />
      );
    } else if (_day.getDay() === 6) {
      // 土曜の場合
      return (
        <PickersDay day={day} {...pickersDayProps} sx={{ color: "#0038ff" }} />
      );
    }
  }
  return <PickersDay day={day} {...pickersDayProps} />;
}

export default RenderDayColored;
