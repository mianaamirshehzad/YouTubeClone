import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text, ScrollView, FlatList, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";


export default function YouTubePlayer() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      // Alert.alert("video has finished playing!");
      console.log(`video has finished playing!`);
    }
  }, []);

  const videos = [
    {
      url: "iee2TATGMyI",
      id: 1,
      title: "Limmy's Show - Do you Own that",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
      url: "-q5sv95BPYw",
      id: 2,
      title: "Modern React Redux To-Do",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
      url: "KqSI_blF4tA",
      id: 3,
      title: "Indian Idol Season 13",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
      url: "O_A7eoYoJRY",
      id: 4,
      title: "Tehzeeb Hafi | New Mushaira",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
      url: "IlZfZLC8wnM",
      id: 5,
      title: "Stage Drama Clips",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
  ]
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View >
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={item.url}
          onChangeState={onStateChange}
          key={item.id} />
          <Text style={styles.videoTitle} >
            {item.title}
          </Text>
          <Text style={styles.videoDes} >
            {item.description}
          </Text>
      </View>
    )
  }


  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  videoTitle: {
    fontSize: 18,
    color: 'black',
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  videoDes: {
    fontSize: 14,
    color: 'black',
    paddingBottom: 10,
    paddingLeft: 10
  }
})
