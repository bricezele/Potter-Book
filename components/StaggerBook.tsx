import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { Book } from "../domain/model/Book";
import { Stagger } from "./Stagger";
import { FadeOutDown, ZoomInEasyDown } from "react-native-reanimated";

type StaggerBookProps = {
    books: Book[]
}

const StaggerBook: React.FC<StaggerBookProps> = ({books}) => {
    return (
        <>
            {books.length > 0 ? (
                <Stagger
                    stagger={50}
                    duration={300}
                    exitDirection={-1}
                    entering={() => ZoomInEasyDown.springify()}
                    exiting={() => FadeOutDown.springify()}
                    style={styles.stagger}
                >
                    {books.map((item, index) => (
                        <View key={index} style={styles.itemStagger}>
                            <Image source={{uri: item.uri}} style={styles.image} />
                            <Text>{item.title}</Text>
                        </View>
                    ))}
                </Stagger>
            ): (
                <Text style={styles.text}>Aucun livre sélectionné</Text>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    stagger: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-evenly'
    },
    itemStagger: {
        width: 100,
        height: 120,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 10
    },
    image: {
        width: 100, 
        height: 100,
        borderRadius: 16,
    },
    text: {
        textAlign: 'center',
    }
})

export default StaggerBook