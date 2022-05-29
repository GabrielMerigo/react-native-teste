import React from "react"; // Sempre quando tivermos JSX em nosso código nós precisamos ter essa variavel React
import { StyleSheet, SafeAreaView } from "react-native";
import FlatList from './components/FlatList'

export default function App(){
    return (
        <SafeAreaView style={S.app}>
            <FlatList />
        </SafeAreaView>
    )
}

const S = StyleSheet.create({
    app: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const GiantFont = StyleSheet.create({
    font: {
        fontSize: 24
    }
})