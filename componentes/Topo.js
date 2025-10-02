import react from "react";
import { Image,StyleSheet, Dimensions } from "react-native";

import Texto from "./texto";

export default function Topo({titulo}){
    return <>
    <Texto style={estilos.titulo}> {titulo} </Texto>
    </>
}