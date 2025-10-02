import react from "react";
import { StyleProp } from "react-native";


export default function Texto( children,syale){
    let estilo = estilos.texto;

    if(styale?.fontWeight == 'bold'){
        estilo.estilos.textoNegrito
    }
    return <Texto styale = {[style,estilo]}> {children}</Texto>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily:'MontserraRegular',
        fontWeight: 'normal',
    },
    textoNegrito:{
        fontFamily:'MontserraBold',
        fontWeight:'normal',

    } 
})