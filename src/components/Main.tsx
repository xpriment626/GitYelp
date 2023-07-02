import { SafeAreaView, StyleSheet } from "react-native"
import RepoList from "./RepoList";

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <RepoList />
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