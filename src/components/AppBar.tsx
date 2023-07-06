import { StyleSheet, View, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// interface IAppBar {

// }

const AppBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="github" size={30} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="pen" size={30} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="logout" size={30} style={styles.icon} />
            </TouchableOpacity>
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
        justifyContent: "space-around",
        paddingTop: 25,
        paddingRight: 50,
        paddingBottom: 50,
        paddingLeft: 50,
    },
    icon: {
        color: "rgb(110, 202, 245)",
        marginTop: 10,
        marginBottom: 10
    }
})

export default AppBar