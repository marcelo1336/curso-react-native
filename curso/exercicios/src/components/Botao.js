import React from 'react'
import {Button} from 'react-native'

export default props => {

    function executar(){
        console.warn('Exec')
    }

    return (
        <>
        <Button
            title="Executar"
            onPress={executar}
        />
        <Button
            title="Executar 2"
            onPress={function(){console.warn('Exec2')}}
        />
        <Button
            title="Executar 3"
            onPress={() => console.warn('Exec3')}
        />

        </>
    )
}