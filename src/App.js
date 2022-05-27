import React from "react"; // Sempre quando tivermos JSX em nosso código nós precisamos ter essa variavel React
import { View, StyleSheet } from "react-native";


import MainComp, { Comp1, Comp2 } from './components/Multi'

export default function App(){
    return (
        <View style={S.App}>
            <MainComp></MainComp>
            <Comp1 />
            <Comp2 />
        </View>
    )
}

const S = StyleSheet.create({
    App: {
        backgroundColor: 'gray',
        flexGrow: 1,
    }
})