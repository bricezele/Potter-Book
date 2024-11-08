import React from "react"
import { View,Text,StyleSheet, Pressable } from "react-native"
import { Book } from "../domain/model/Book"
import Animated, { runOnJS, useAnimatedStyle, useDerivedValue, useSharedValue, withDecay, withSpring } from "react-native-reanimated"
import { BOOK_COUNT, cardSize, CHANGE_FACTOR, CIRCLE_CIRCUMFERENCE, CIRCLE_RADIUS, height, THETA, TWO_PI } from "../constants"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import BookCard from "./BookCard"

type BookWheelProps = {
    books: Book[]
    onChange: (index: number) => void
    onSelect: (index: number) => void
}

const BookWheel: React.FC<BookWheelProps> = ({ books, onChange, onSelect }) => {
    const distance = useSharedValue(0)
    const angle = useDerivedValue(() => {
        return distance.value / CIRCLE_CIRCUMFERENCE
    })
    const interpolatedIndex = useDerivedValue(() => {
        const x = Math.abs((angle.value % TWO_PI) / THETA)
        return angle.value < 0 ? x : BOOK_COUNT - x
    })
    const activeIndex = useDerivedValue(() => {
        return Math.round(interpolatedIndex.value)
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
          transform: [
            {
              rotate: `${angle.value}rad`,
            },
          ],
        }
      })

    const pan = Gesture.Pan()
        .onChange((event) => {
            distance.value += event.changeX + CHANGE_FACTOR
        })
        .onFinalize((event) => {
            distance.value = withDecay({
                velocity: event.velocityX,
                velocityFactor: CHANGE_FACTOR
            }, () => {
                const v = BOOK_COUNT - activeIndex.value
                const newAngleFloat = -interpolatedIndex.value * THETA
                const newAngle = -activeIndex.value * THETA
                distance.value = newAngleFloat * CIRCLE_CIRCUMFERENCE
                distance.value = withSpring(newAngle * CIRCLE_CIRCUMFERENCE)
                runOnJS(onChange)(activeIndex.value)
            })
        })
    return (
        <GestureDetector gesture={pan}>
            <Animated.View style={[styles.container, animatedStyle]}>
                {books.map((book, index) => (
                    <BookCard key={index} book={book} bookCardIndex={index} onSelect={()=> onSelect(index)} index={interpolatedIndex} />
                ))}
            </Animated.View>
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    container: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        top: height - cardSize.height * 2
    },
})

export default BookWheel