import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import { Track } from "./Model";

interface TrackProps {
  track: Track;
  artist: string;
  index: number;
}

export default ({ track, artist, index }: TrackProps) => (
  <View style={styles.row}>
    <View style={styles.cell}>
      <Text style={styles.index}>{index}</Text>
    </View>
    <View style={[styles.cell, { flex: 1 }]}>
      <Text style={styles.name}>{track.title}</Text>
      {track.artist && <Text numberOfLines={2} style={styles.name}>{track.artist}</Text>}
    </View>
    <View style={styles.cell}>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "black",
  },
  cell: {
    padding: 16,
    justifyContent: "center",
  },
  index: {
    color: "#b2b3b4",
  },
  artist: {
    color: "#b2b3b4",
  },
  name: {
    color: "white",
  },
});
