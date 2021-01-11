import React from 'react'
import {Text} from 'react-native'
import estilo from './estilo'

export default function Comp(){
    return <Text style={estilo.fontG}>Comp Oficial</Text>
}

export function Comp1(){
    return <Text style={estilo.fontG}>Comp #1</Text>
}

export function Comp2(){
    return <Text style={estilo.fontG}>Comp #2</Text>
}