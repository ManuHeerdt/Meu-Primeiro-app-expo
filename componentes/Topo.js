import react from "react";
import { Image,StyleSheet, Dimensions } from "react-native";

import Texto from "./texto";
import topo from "../../assets/topo.png";

const widht = Dimensiond.get('screen').widht;

export default function Topo({titulo}){
    return <>
    <Image source={topo}/>
    <Texto style={estilos.titulo}> {titulo} </Texto>
    </>
}

const estilos = StyleSheet.create({

    topo:{
        width:"100%",
        height: 578 / 786 * widht,
    },
    titulo:{
        widht:"100",
        position: "absolute",
        textAlign:"center",
        fontFamily:16,
        lineHeight:26,
        color:'withe',
        fontWeight:"bold",
        padding:16,

    }
})