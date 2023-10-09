import React, { FC, memo } from "react";
import { TimerPickerModal } from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  showPicker: boolean;
  setShowPicker: (value: boolean) => void;
  onConfirm: (value: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => void;
  onCancel: () => void;
};
 const TimerPicker: FC<Props> = ({
  showPicker,
  setShowPicker,
  onConfirm,
  onCancel,
}) => {
  return (
    <TimerPickerModal
      visible={showPicker}
      setIsVisible={setShowPicker}
      onConfirm={onConfirm}
      modalTitle="Duration"
      onCancel={onCancel}
      closeOnOverlayPress
      LinearGradient={LinearGradient}
      styles={{
        theme: "light",
      }}
      modalProps={{
        overlayOpacity: 0.2,
      }}
    />
  );
};
export default memo(TimerPicker);
