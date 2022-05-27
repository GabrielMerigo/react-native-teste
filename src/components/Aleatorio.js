import React from "react"
import { Text } from "react-native"

export function Randonly({ min, max }){
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return (
        <Text>{aleatorio}</Text>
    )
}