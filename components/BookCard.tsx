import React, { useEffect } from 'react'
import { Book } from '../domain/model/Book';
import { StyleSheet, Image, Pressable } from 'react-native';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { cardSize, CIRCLE_RADIUS, THETA } from '../constants';

type BookCardProps = {
  book: Book
  bookCardIndex: number
  index: SharedValue<number>
  onSelect: () => void
}

const BookCard: React.FC<BookCardProps> = ({ book, bookCardIndex, index, onSelect }) => {
  const mounted = useSharedValue(0)

  useEffect(() => {
    mounted.value = withTiming(1, { duration: 500 })
  }, [])

  const animatedStyles = useAnimatedStyle(() => { 
    return {
      transform: [
        {rotate: `${interpolate(mounted.value, [0, 1], [0, THETA * bookCardIndex])}rad`},
        {translateY: interpolate(index.value, [bookCardIndex - 1, bookCardIndex, bookCardIndex + 1], [0, -cardSize.height / 2, 0], Extrapolation.CLAMP)},
      ]
    }
  })

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Pressable style={styles.pressable} onPress={() => onSelect()}>
        <Image key={book.key} source={{uri: book.uri}} style={styles.bookImage} />
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: cardSize.width, 
    height: CIRCLE_RADIUS * 2,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,  
  },
  bookImage: {
    width: cardSize.width,
    height: cardSize.height,
    borderRadius: cardSize.borderRadius,
    resizeMode: "repeat",
    borderWidth: 4,
    borderColor: "white",
  },
  pressable: {
    flex: 1
}
});

export default BookCard