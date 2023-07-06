import { IRepoItem } from "../utils/types";
import { View, Text, Image, StyleSheet } from "react-native"

const RepoItem = (props: IRepoItem) => {
    return (
        <View style={styles.container}>
            <View style={styles.hero}>
                <Image 
                    source={{uri: props.ownerAvatarUrl}}
                    style={styles.img}
                />
                <View style={styles.content}>
                    <Text>{props.fullName}</Text>
                    <Text>{props.description}</Text>
                    <Text>{props.language}</Text>
                </View>
            </View>
            <View style={styles.stats}>
                <Text>{props.stargazersCount}</Text>
                <Text>{props.forksCount}</Text>
                <Text>{props.reviewCount}</Text>
                <Text>{props.ratingAverage}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
        margin: 10
    },
    container: {
        backgroundColor: "blue",
        margin: 10
    },
    hero: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 15
    },
    stats: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20
    },
    content: {
        flex: 0.75
    }
})

export default RepoItem