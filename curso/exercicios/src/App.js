import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

// import X, {Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
//import Pai from './components/direta/Pai'
//import Pai from './components/indireta/Pai'
//import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
// import ParImpar from './components/ParImpra'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import FlexBoxV4 from './components/layout/FlexBoxV4'
import Mega from './components/mega/Mega'

export default () => (
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={17}/>

        {/*
        
        <FlexBoxV4/>
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <UsuarioLogado usuario={{nome: 'marcelo', email:'marcelo@gmail.com'}}/>
        <UsuarioLogado usuario={{nome: 'TESTE'}}/>
        <UsuarioLogado usuario={{nome: 'Teste', email:'Teste@gmail.com'}}/> */}



        {/* <Familia>
            <Membro nome="bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia> */}

        {/* 
            <Diferenciar/>
            <ParImpar num={2}/>
            <ContadorV2/>
            <Pai/>
            <Contador inicial={100} passo={5}/>
            <Contador/> */}


        {/* <Titulo principal="Cadastro" secundario="Tela de Cadastro"></Titulo>
            <Botao/> */}

        {/* <Aleatorio min="1" max="60"/>
            <Aleatorio min="1" max="60"/>
            <Aleatorio min="1" max="60"/>
            <Aleatorio min="1" max="60"/>
            <Aleatorio min="1" max="60"/> */}

        {/* <MinMax min="3" max="20"/>
            <MinMax min="5" max="30"/>
            
            <X/>
            <Comp1/>
            <Comp2/>

            <Primeiro/> */}
    </SafeAreaView>
)


const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 80,


    }
})