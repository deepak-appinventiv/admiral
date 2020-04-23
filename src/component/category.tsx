import React, { memo } from 'react'
import { View, StyleSheet, Text } from "react-native";
import Utils from "../utils";
import LinearGradient from 'react-native-linear-gradient';
interface Props {
    title: string;
    color: Array<any>
}


export default memo(function CategoryCard(props: Props) {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={props.color} style={styles.container}>
            <Text style={styles.subTitle}>
                {props.title}
            </Text>
        </LinearGradient>
    )
})

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        backgroundColor: 'red',
        justifyContent: 'center',
        width: Utils.Dimension.vw(100),
        height: Utils.Dimension.vw(100),
    },
    subTitle:{
        fontSize: 16,
        color: Utils.Constant.color.white
    }
})

