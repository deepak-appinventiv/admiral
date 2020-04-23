import React, { memo } from 'react'
import { View, StyleSheet, Text, Image } from "react-native";
import Utils from "../utils";
import { MovieModal } from "../modal";
import ProgressiveImage from "./progressiveImage";
import Rating from "./rating";
interface Props extends MovieModal{
    
}

export default memo(function Category(props: Props) {
    return (
        <View style={styles.container}>
            <ProgressiveImage src={`${Utils.Constant.posterBaseUrl}${props.poster_path}`} />
            <Text numberOfLines={1} style={styles.subTitle}>{props.original_title}</Text>
            <Rating 
                rating={2}
            />
            <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        width: Utils.Dimension.vw(180),
        height: Utils.Dimension.vw(270),
       
    },
    title:{
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 5
    },
    subTitle:{
        fontSize: 16,
        marginVertical: 5
        
    }
})

