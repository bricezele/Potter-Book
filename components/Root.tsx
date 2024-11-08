import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { BOOK_PRICE, BOOKS, PROMO } from '../constants';
import { Book } from '../domain/model/Book';
import BookWheel from './BookWheel';
import StaggerBook from './StaggerBook';
import Blink from './Blink';
import Overlay from './Overlay';
import Animated, { FadeInUp } from 'react-native-reanimated';
import {countBookOccurence, extractBestSets, bookPrice} from '../utils/promo';

const Root: React.FC = () => {
    const [selectedBooks, setSelectedBooks] = useState<Book[]>([])
    const [showResult, setShowResult] = useState(false)
    const selectedBooksIndex = useMemo(() => selectedBooks.map(book => book.key), [selectedBooks])
    const {bestSet, bookOccurences, price} = useMemo(() => bookPrice(selectedBooksIndex), [selectedBooksIndex])
    console.log('bestSet', bestSet)
    
    return (
        <View style={{flex: 1}}>
            {showResult && (
                <Overlay onClose={() => setShowResult(false)}>
                    <View style={styles.result}>
                        <Animated.View entering={FadeInUp.delay(300)} style={{flex: 1}}>
                            <Text style={styles.title}>Occurence de livre par titre</Text>
                            {Object.keys(bookOccurences).map((key, index) => (
                                <Text key={index} style={styles.description}>{BOOKS[key - 1].title}: {bookOccurences[key]}</Text>
                            ))}
                        </Animated.View>
                        <Animated.View entering={FadeInUp.delay(400)} style={{flex: 1}}>
                            <Text style={styles.title}>Meilleurs sets de livre pour la promo</Text>
                            {bestSet.map((set, index) => (
                                <Text key={index} style={styles.description}>[{set.map(key => BOOKS[key - 1].title).join(', ')}]</Text>
                            ))}
                        </Animated.View>
                        <Animated.View entering={FadeInUp.delay(500)} style={{flex: 1}}>
                            <Text style={styles.title}>Calcul en détail du prix</Text>
                            {bestSet.map((set, index) => (
                                <>
                                    <Text key={index} style={styles.description}>Set {index + 1} : ({set.map(() => BOOK_PRICE ).join(' + ')}) * {PROMO[set.length]}</Text>
                                    <Text style={[styles.title]}>{index < bestSet.length - 1 ? '+' : '=' }</Text>
                                </>
                            ))}
                            <Text style={styles.title}>{price}</Text>
                        </Animated.View>
                    </View>
                </Overlay>
            )}
            <View style={styles.container}>
                <StaggerBook books={selectedBooks} />
                <BookWheel books={BOOKS}  
                        onSelect={(index) => setSelectedBooks(books => [...books, BOOKS[index]])} 
                />
                <View style={styles.textContainer}>
                    {selectedBooks.length === 0 ? (
                        <Blink duration={1500}>
                                <Text style={styles.text}>Glisser et cliquer pour sélectionner</Text>
                        </Blink>
                    ) : (
                        <Button title="Calculer le prix total" onPress={() => {
                            setShowResult(true)
                        }} />
                    )
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        height: 100,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        bottom: 0,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black"
    },
    result: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    description: {
        fontSize: 15,
        color: "white"
    }
})
export default Root