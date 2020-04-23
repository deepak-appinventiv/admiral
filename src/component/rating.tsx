import React, { memo } from 'react'
import { View, StyleSheet } from "react-native";
import StarRating from 'react-native-star-rating';
import Utils from "../utils";
interface Props {
    rating: number;
    buttonStyle?: any;
    containerStyle?: any;
    fullStarColor?: string;
    emptyStarColor?: string;
    selectedStar?: Function;
    
}

export default memo(function Rating(props: Props) {
    return (
        <View>
            <StarRating
                disabled={false}
                maxStars={5}
                rating={props.rating}
                starSize={20}
                fullStarColor={Utils.Constant.color.primaryColor}
                emptyStarColor={Utils.Constant.color.primaryColor}
                selectedStar={(rating) => {}}
                containerStyle={[styles.containerStyle, props.containerStyle]}
                buttonStyle={[styles.buttonStyle, props.buttonStyle]}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: "flex-start",
    },
    buttonStyle: {
        paddingLeft: 5,
        paddingRight: 5
    }
})
