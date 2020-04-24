import React, { memo } from 'react'
import { View, StyleSheet } from "react-native";
import FastImage from 'react-native-fast-image';
import Utils from "../utils";
interface Props {
    src: string;
    containerStyle?: object;
}

export default memo(function ProgressiveImage(props: Props) {
    return (
        <FastImage
            style={[styles.imageContainer, props.containerStyle]}
            source={{
                uri: props.src,
                headers: { Authorization: 'someAuthToken' },
                priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
        />
    )
})

const styles = StyleSheet.create({
    imageContainer:{
        width: Utils.Dimension.vw(180), 
        height: Utils.Dimension.vw(180),
        borderRadius: 20,
    }
})
