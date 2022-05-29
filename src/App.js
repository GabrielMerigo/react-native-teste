import React from "react"; // Sempre quando tivermos JSX em nosso código nós precisamos ter essa variavel React
import { View, StyleSheet } from "react-native";

export default function App(){
    return (
        <View style={S.app}>
            {/* <MinMax />
            <MainComp></MainComp>
            <Comp1 fontSize={S.large} />
            <Comp2 />
            <Text style={GiantFont.font}>Teste</Text> */}
        </View>
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