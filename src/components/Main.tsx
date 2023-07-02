import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native"

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello World</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: "rgb(203, 215, 224)"
    }
})

export default Main