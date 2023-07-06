import { StyleSheet, View, Text } from "react-native"

// interface IAppBar {

// }

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.typo}>Black</Text>
            <Text style={styles.typo}>Knee</Text>
            <Text style={styles.typo}>Girl</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(9, 10, 14)",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 25,
        paddingRight: 50,
        paddingBottom: 50,
        paddingLeft: 50,
    },
    typo: {
        color: "rgb(110, 202, 245)",
        marginBottom: 10
    }
})

export default AppBar