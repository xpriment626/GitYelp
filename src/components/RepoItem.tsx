import { IRepoItem } from "../utils/types";
import { View, Text } from "react-native"

const RepoItem = (props: IRepoItem) => {
    return (
        <View>
            <Text>{props.fullName}</Text>
            <Text>{props.description}</Text>
            <Text>{props.language}</Text>
            <Text>{props.stargazersCount}</Text>
            <Text>{props.forksCount}</Text>
            <Text>{props.reviewCount}</Text>
            <Text>{props.ratingAverage}</Text>
        </View>
    )
}

export default RepoItem