import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { BOOKS } from '../constants';
import { Book } from '../domain/model/Book';
import BookWheel from './BookWheel';
import StaggerBook from './StaggerBook';
import Blink from './Blink';

const Root: React.FC = () => {
    const [selectedBooks, setSelectedBooks] = useState<Book[]>([])
    
    return (
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

                    }} />
                )
                }
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
    }
})
export default Root