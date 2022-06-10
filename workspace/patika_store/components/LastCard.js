import React from 'react';
import {style} from 'app/workspace/patika_store/components/Card.style';
import {Image, Text, View} from 'react-native';

const LastCard = ({data}) => {
  return (
    <View style={style.main}>
      <View style={style.card}>
        <View style={style.cardBody}>
          <Image source={{uri: data.imgURL}} style={style.img} />
        </View>
        <View style={style.cardFooter}>
          <Text style={style.description}>{data.title}</Text>
          {data.inStock ? (
            <Text style={style.price}>{data.price}</Text>
          ) : (
            <Text style={style.inStock}>STOKTA YOK</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default LastCard;
