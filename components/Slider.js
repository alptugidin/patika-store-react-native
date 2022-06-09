import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import {style} from 'app/components/Slider.style';
import bannerData from '../news_source/news_banner_data.json';
const Slider = () => {
  return (
    <View style={style.main}>
      <ScrollView
        style={style.sliderMain}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {bannerData.map((e, item) => (
          <Image
            key={item}
            source={{uri: e.imageUrl}}
            style={style.sliderImg}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Slider;
