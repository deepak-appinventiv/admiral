import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { vh, vw } from '../utils/dimension';
import LinearGradient from 'react-native-linear-gradient';
import Utils from '../utils';
interface HeaderProps {

}

export function Header(props: HeaderProps) {
    return (
        <View style={styles.container} >
            <View style={{ height: vh(130) }}>

                <View style={styles.headerview1}>
                    <>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#ffd900', '#ffd000', '#ffbe00', '#ffaa00', '#ffa200']} style={styles.linear}>
                        </LinearGradient>
                        <View style={{ height: vh(50), marginTop: vh(20), flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingRight: vw(30), paddingLeft: vw(40), alignItems: 'center', }} >
                            <TouchableOpacity>
                                <Image style={{ height: vw(20), width: vw(20), }} source={Utils.Images.menuIcon} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={Utils.Images.profileImage} style={{ height: vw(40), width: vw(40), borderRadius: vw(20), backgroundColor: 'gray' }} />
                            </TouchableOpacity>
                        </View>
                    </>
                </View>

                <View style={styles.searchContainer}>
                    <Image
                        source={Utils.Images.searchcon}
                        style={styles.searchImage}
                        resizeMode="contain"
                    />
                    <TextInput style={styles.searchInput} placeholder="Search movie title..." />
                </View>

                {/* all good  */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { },
    headerview1: {
        width: '110%',
        //height: vh(118),
        borderBottomLeftRadius: vw(150),
        borderBottomRightRadius: vw(120),
        position: 'absolute',
        left: vw(-25),
    },
    searchContainer: {
        height: vh(38),
        backgroundColor: 'lightgray',
        borderRadius: vh(100),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: vh(16),
        position: 'absolute',
        left: vw(25),
        bottom: vh(10),
        right: vw(25),
        shadowColor: 'lightgray',
        shadowOpacity: 0.7,
        shadowOffset: { height: vh(2), width: vh(1.5) },
    },
    searchImage: {
        height: vh(15),
        width: vh(15)
    },
    searchInput: {
        flex: 1,
        marginHorizontal: vh(10),
        height: '100%',
        color: 'black',
        fontSize: vh(13),
    },
    linear: {
        width: '120%', height: vh(102),
        borderBottomLeftRadius: vw(105),
        borderBottomRightRadius: vw(100),
        position: 'absolute',
        left: vw(-38),
    },
})