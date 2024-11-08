import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BOOKS } from '../constants';
import { Book } from '../domain/model/Book';
import BookWheel from './BookWheel';
import StaggerBook from './StaggerBook';

const Root: React.FC = () => {
    const [selectedBooks, setSelectedBooks] = useState<Book[]>([])
    
    return (
        <View style={styles.container}>
            <StaggerBook books={selectedBooks} />
            <BookWheel books={BOOKS}  
                    onSelect={(index) => setSelectedBooks(books => [...books, BOOKS[index]])} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})
export default Root