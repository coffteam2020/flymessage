import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import TrackPlayer from 'react-native-track-player';
import { containerStyle } from "../../../themes/styles";
import { useObserver } from "mobx-react";
import * as Animatable from 'react-native-animatable';
import { useStores } from "../../../store/useStore";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272829", //272829
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: 'center',
    paddingHorizontal: 20,
    height: 70
  },
  text: {
    color: "white",
    textAlign: 'center'
  }
});

interface MiniPlayerProps {
  onPress: () => void;
}

export default ({ onPress }: MiniPlayerProps) => {
  const {userStore} =  useStores();
  return useObserver(()=>(
    <TouchableWithoutFeedback {...{ onPress }}>
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center',  }}>
          <Animatable.View animation="pulse" iterationCount="infinite" style={{ backgroundColor: '#665AAA', borderRadius: 15, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
            <Feather name="music" color="white" size={24} />
          </Animatable.View>
          <Text style={[styles.text, containerStyle.textNormalBold, {alignItems: 'center', paddingLeft: 10}]}>{userStore.currentSong ? userStore?.currentSong?.title : 'Not playing'}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Feather name="play-circle" color="white" size={24} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  ));
};
