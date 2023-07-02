import React from "react"
import { FlatList, View, StyleSheet} from "react-native"
import { repositories } from "../utils/data"
import RepoItem from "./RepoItem";

const ItemSeparator = () => <View style={styles.sep} />;

const RepoList = () => {
    const renderItem = ({item}) => <RepoItem {...item} />
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    sep: {
        height: 10
    }
})

export default RepoList