import type { PropsWithChildren } from 'react'
import React, { useEffect } from 'react'
import type { ViewProps } from 'react-native'
import { type ViewStyle } from 'react-native'
import type { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import Animated, {
    cancelAnimation,
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated'

type BlinkProps = ViewProps & {
    duration?: number
    repeatCount?: number
    play?: boolean
    style?: StyleProp<ViewStyle>
}

const Blink: React.FC<PropsWithChildren<BlinkProps>> = ({
    duration = 2000,
    repeatCount = -1,
    play = true,
    children,
    ...props
}) => {
    const opacity = useSharedValue(0)

    useEffect(() => {
        if (play) {
            opacity.value = withRepeat(
                withTiming(1, { duration: duration / 2, easing: Easing.ease }),
                repeatCount * 2,
                true,
            )
        } else {
            cancelAnimation(opacity)
            opacity.value = 1
        }

        return () => {
            cancelAnimation(opacity)
        }
    }, [play, duration, repeatCount])

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }))

    return (
        <Animated.View {...props} style={animatedStyle}>
            {children}
        </Animated.View>
    )
}

export default Blink
