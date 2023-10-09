import React, { FC, useState } from "react";
import {  View } from "react-native";
import PrimaryButton from "../../components/primary-button";
import HeaderComponent from "../../components/header";
import BottomSheet from "../../components/bottom-sheet";
import { styles } from "./index.styles";
import  CountDown  from "./components/count-down";
import  TimerPicker  from "./components/time-picker";

export const MeditationScreen: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisibleBottomSheet, setIsVisibleBottomSheet] = useState(false);
  const [duration, setDuration] = useState(0);
  const [showPicker, setShowPicker] = useState(false);
  const [key, setKey] = useState(0);
  const start = () => {
    setIsPlaying(true);
  };
  const done = () => {
    setIsPlaying(false);
    setIsVisibleBottomSheet(true);
  };
  const change = () => {
    setShowPicker(true);
  };
  const onBackdropPress = () => {
    setIsVisibleBottomSheet(false);
  };
  const finish = () => {
    setIsVisibleBottomSheet(false);
    setDuration(0);
    setKey(key + 1);
  };
  const resume = () => {
    setIsVisibleBottomSheet(false);
    setKey(key + 1);
    setIsPlaying(true);
  };
  const onConfirm = (pickedDuration: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    setDuration(
      pickedDuration.hours * 3600 +
        pickedDuration.minutes * 60 +
        pickedDuration.seconds
    );
    setShowPicker(false);
  };
  return (
    <View style={styles.container}>
      <HeaderComponent title={"Mediate"} />
      <CountDown
        isPlaying={isPlaying}
        keyIndex={key}
        duration={duration}
        onPress={change}
      />
      {!isPlaying ? (
        <PrimaryButton onPress={start} title="Start" disable={duration === 0} />
      ) : (
        <PrimaryButton onPress={done} title="Done" />
      )}
      <TimerPicker
        showPicker={showPicker}
        setShowPicker={setShowPicker}
        onConfirm={onConfirm}
        onCancel={() => {
          setShowPicker(false);
        }}
      />
      <BottomSheet
        isVisible={isVisibleBottomSheet}
        title={"Exit"}
        subTitle={"Are you sure you want to finish your meditate practice?"}
        onBackdropPress={onBackdropPress}
      >
        <View style={styles.buttons}>
          <PrimaryButton onPress={finish} title="Finish" />
          <PrimaryButton
            onPress={resume}
            title="Resume meditating"
            style={styles.button}
          />
        </View>
      </BottomSheet>
    </View>
  );
};