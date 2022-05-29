import React from "react"; // Sempre quando tivermos JSX em nosso código nós precisamos ter essa variavel React
import { View, StyleSheet, SafeAreaView } from "react-native";
import MinMax from './components/MinMax'

export default function App(){
    return (
        <SafeAreaView style={S.app}>
            <MinMax />
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