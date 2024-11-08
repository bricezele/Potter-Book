import React, { PropsWithChildren, useMemo } from "react"
import { ViewStyle } from "react-native"
import Animated, {
    BaseAnimationBuilder,
    ComplexAnimationBuilder,
    EntryExitAnimationFunction,
    FadeInDown,
    FadeOutDown,
    LinearTransition,
    Keyframe
} from "react-native-reanimated"

type StaggerProps = {
    stagger?: number
    enterDirection?: -1 | 1
    exitDirection?: -1 | 1
    duration?: number
    style?: ViewStyle
    entering?: () =>
        | BaseAnimationBuilder
        | typeof BaseAnimationBuilder
        | EntryExitAnimationFunction
        | Keyframe
        | ComplexAnimationBuilder
    exiting?: () =>
        | BaseAnimationBuilder
        | typeof BaseAnimationBuilder
        | EntryExitAnimationFunction
        | Keyframe
        | ComplexAnimationBuilder
    initialEnteringDelay?: number
    initialExitingDelay?: number
}

export const Stagger: React.FC<PropsWithChildren<StaggerProps>> = ({
    children,
    stagger,
    enterDirection = 1,
    exitDirection = -1,
    duration = 400,
    style,
    entering = () => FadeInDown,
    exiting = () => FadeOutDown,
    initialEnteringDelay = 0,
    initialExitingDelay = 0
}) => {
    const s = useMemo(() => stagger ?? 50, [stagger])

    if (!children) return null

    return (
        <Animated.View style={style}>
            {React.Children.map(children, (child, index) => {
                const key = React.isValidElement(child) ? child.key : index
                return (
                    <Animated.View
                        key={key}
                        layout={LinearTransition}
                        entering={(entering() as ComplexAnimationBuilder)
                            .delay(
                                initialEnteringDelay +
                                (enterDirection === 1 ? index * s : (React.Children.count(children) - index) * s)
                            )
                            .duration(duration)}
                        exiting={(exiting() as ComplexAnimationBuilder)
                            .delay(
                                initialExitingDelay +
                                (exitDirection === 1 ? index * s : (React.Children.count(children) - index) * s)
                            )
                            .duration(duration)}
                    >
                        {child}
                    </Animated.View>
                )
            })}
        </Animated.View>
    )
}