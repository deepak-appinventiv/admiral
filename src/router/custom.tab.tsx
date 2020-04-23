import React, { Component } from 'react';
// import { View, SafeAreaView, TouchableOpacity, StyleSheet, Animated, Dimensions, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'
// Icon.loadFont()
// import Svg, { Path } from 'react-native-svg'
// import * as shape from 'd3-shape'
// const height = 70;
// const { width } = Dimensions.get('window')
// var AnimatedSvg = Animated.createAnimatedComponent(Svg);
// const tabWidth = width / 5;
// //@ts-ignore
// const right = shape.line()
//     .x((d: any) => d.x)
//     .y((d: any) => d.y)
//     ([
//         { x: width + tabWidth, y: 0 },
//         { x: width * 2.5, y: 0 },
//         { x: width * 2.5, y: height },
//         { x: 0, y: height },
//         { x: 0, y: 0 },
//     ])
// //@ts-ignore
// const left = shape.line()
//     .x((d: any) => d.x)
//     .y((d: any) => d.y)
//     ([
//         { x: 0, y: 0 },
//         { x: width, y: 0 }
//     ])

//     //@ts-ignore
// const tab = shape.line()
//     .x((d: any) => d.x)
//     .y((d: any) => d.y)
//     .curve(shape.curveBasis)
//     ([
//         { x: width, y: 0 },
//         { x: width + 5, y: 0 },
//         { x: width + 10, y: 10 },
//         { x: width + 15, y: height },
//         { x: width + tabWidth - 15, y: height },
//         { x: width + tabWidth - 10, y: 10 },
//         { x: width + tabWidth - 5, y: 0 },
//         { x: width + tabWidth, y: 0 },
//     ])

// const d = `${left} ${tab} ${right}`



// class StaticTabBar extends Component<any> {
//     values = []
//     constructor(props: any) {
//         super(props);
//         this.values = this.props.state.routeNames.map((tab: any, index: number) => new Animated.Value(index === 0 ? 1 : 0))
//     }

//     render() {
//         const { value, state, descriptors, navigation } = this.props
//         const tabWidth = width / this.props.state.routeNames.length
//         return (
//             <View style={styles.container} >
//                 {
//                     this.props.state.routes.map((route: any, key: any) => {
//                         const { options } = descriptors[route.key];
//                         const isFocused = state.index === key;

//                         const onPress = (index: any) => {
//                             const { value } = this.props;
//                             const tabWidth = width / this.props.state.routeNames.length

//                             Animated.sequence([
//                                 ...this.values.map(value =>
//                                     Animated.timing(value, {
//                                         toValue: 0,
//                                         duration: 100,
//                                         useNativeDriver: true
//                                     })),
//                                 Animated.parallel([
//                                     Animated.spring(this.values[index], {
//                                         toValue: 1,
//                                         useNativeDriver: true
//                                     }),
//                                     Animated.spring(value, {
//                                         toValue: -width + tabWidth * index,
//                                         useNativeDriver: true
//                                     })
//                                 ])
//                             ]).start()
//                             const event = navigation.emit({
//                                 type: 'tabPress',
//                                 target: route.key,
//                             });

//                             if (!isFocused && !event.defaultPrevented) {
//                                 navigation.navigate(route.name);

//                             }
//                         };

//                         const onLongPress = () => {
//                             navigation.emit({
//                                 type: 'tabLongPress',
//                                 target: route.key,
//                             });
//                         };

//                         const activeValue = this.values[key];
//                         const opacity = value.interpolate({
//                             inputRange: [-width + tabWidth * (key - 1), -width + tabWidth * key, -width + tabWidth * (key + 1)],
//                             outputRange: [1, 0, 1],
//                             extrapolate: "clamp"
//                         })
//                         //@ts-ignore
//                         const translateY = activeValue.interpolate({
//                             inputRange: [0, 1],
//                             outputRange: [height, 0]
//                         })
//                         return (
//                             <React.Fragment {...{ key }}>
//                                 <TouchableOpacity
//                                     accessibilityRole="button"
//                                     accessibilityStates={isFocused ? ['selected'] : []}
//                                     accessibilityLabel={options.tabBarAccessibilityLabel}
//                                     testID={options.tabBarTestID}
//                                     onPress={() => onPress(key)}
//                                     onLongPress={onLongPress}
//                                     style={styles.tab}
//                                     activeOpacity={1}
//                                 >
//                                     <Animated.View style={{ opacity }} >
//                                         <Text>{route.name}</Text>
//                                     </Animated.View>
//                                 </TouchableOpacity>
//                                 <Animated.View style={{
//                                     position: 'absolute',
//                                     width: tabWidth,
//                                     left: tabWidth * key,
//                                     height: height,
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                     alignSelf: 'center',
//                                     top: -8,
//                                     transform: [{ translateY }],
//                                 }}>
//                                     <View style={styles.circle}>
//                                         <Text>{route.name}</Text>
//                                     </View>
//                                 </Animated.View>
//                             </React.Fragment>
//                         )
//                     })
//                 }
//             </View >
//         );
//     }
// }

// export default class TabBar extends Component {
//     value = new Animated.Value(-width)
//     render() {
//         const { value: translateX } = this;
//         return (
//             <View style={styles.main}>
//                 <View {...{ width, height }}>
//                     <AnimatedSvg width={width * 2.5} {...{ height }} style={{ transform: [{ translateX }], backgroundColor:'yellow' }}>
//                         <Path {...{ d }} fill='white' />
//                     </AnimatedSvg>
//                     <SafeAreaView style={styles.safeArea}/>
//                     <View style={[StyleSheet.absoluteFillObject]}>
//                         <StaticTabBar value={translateX} {...this.props} />
//                     </View>
//                 </View>

//             </View>
//         );
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         // backgroundColor:'red'
//     },
//     tab: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: height
//     },
//     circle: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     safeArea: {
//         backgroundColor: 'red',
//     },
//     main:{
//         backgroundColor:'red',
//         justifyContent: 'flex-end',
//     }
// })

