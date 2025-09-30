import react from "react";
import {FlatList, StyleSheet, View} from "react-native";

export default function Cesta(itens){
    <Flatlis>
        data={itens.lista}
        renderItem={item}
        keyExtractor={({nome})=> nome}
          ListHeaderComponet={()=> {
            return <>
            
            </>
          }
          
          }
    </Flatlis>
}

const estilos = StyaleSheet.create({
    titulo:{
        color:"#464646",
        fontWeigth:"bold",
        merginTop:32,
        merginBotton:8,
        fontSize:20,
        lineHeigth:32,


    },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    }
})

