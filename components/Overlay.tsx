import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'
import { Modal, StyleSheet, TouchableOpacity, View, Text } from 'react-native'

type OverlayProps = {
    show?: boolean
}

const Overlay: React.FC<PropsWithChildren<OverlayProps>> = ({
    children,
    show = false
}): JSX.Element => {
    const [showOverlay, setShowOverlay] = useState(show)

    return (
        <Modal transparent visible={showOverlay} animationType="fade">
            <View  style={[styles.modalStyles, styles.container]}>
                <View style={styles.container}>
                        <View style={styles.closeButtonContainer}>
                            <TouchableOpacity style={styles.closeButton}
                                onPress={() => setShowOverlay(show => !show)}>
                                <Text style={{ color: 'white', fontSize: 20 }}>X</Text>
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
        paddingLeft: 20
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
