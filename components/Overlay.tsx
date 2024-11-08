import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'
import { Modal, StyleSheet, TouchableOpacity, View, Text } from 'react-native'

type OverlayProps = {
    onClose: () => void
}
const Overlay: React.FC<PropsWithChildren<OverlayProps>> = ({
    children,
    onClose
}): JSX.Element => {
    return (
        <Modal transparent visible animationType="fade">
            <View  style={[styles.modalStyles, styles.container]}>
                <View style={styles.container}>
                        <View style={styles.closeButtonContainer}>
                            <TouchableOpacity style={styles.closeButton}
                                onPress={() => onClose()}>
                                <Text style={{ color: 'white', fontSize: 30 }}>X</Text>
                            </TouchableOpacity>
                        </View>
                    <View style={[styles.centered, styles.container]}>
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalStyles: {
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    container: {
        flex: 1,
    },
    closeButtonContainer: {
        marginTop: 50,
        marginLeft: 50,
        width: 30,
        height: 40,
    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 30,
        height: 30
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Overlay
