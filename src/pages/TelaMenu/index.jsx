
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import {Picker} from '@react-native-picker/picker';

export default function TelaMenu() {
    const [selectedValue, setSelectedValue] = useState("");
    const containerStyles = StyleSheet.create({
        container: {
        backgroundColor: "#53ac5f",
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 29,
        },
    });
    
    const tituloStyles = StyleSheet.create({
        titulo: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 200,
        marginLeft: 20,
        marginTop: 50,
        borderRadius: 350,
        fontStyle: "normal",
        },
    });
    
    const pickerStyles = StyleSheet.create({
        pickerContainer: {  
        fontSize:40,
        position: 'absolute',
        bottom: 610,
        left: 200,
        borderWidth: 3,
        borderColor: '#fff',
        fontWeight: 'bold',
        width: '70%',
        height: 50,
        padding: 0,
        textAlign:'center'
        },
    });
    
    const bottonStyles = StyleSheet.create({
        bottonSell: {
        fontSize: 30,
        backgroundColor: "#ff8000",
        fontWeight: "bold",
        flexDirection: "row",
        borderRadius:10,
        marginTop: 20,
        marginRight: 10, // ajuste a margem direita
        textAlign: "center",
        marginLeft: 190,
        marginEnd:10,
    },
        });
    
    const textoStyles = StyleSheet.create({
        texto:{
        borderRadius: 14,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 10,
        position: 'relative',
        marginEnd:0,
        top: -150,
        },
    });
    
    return (
    <View style={containerStyles.container}>
        <Text style={tituloStyles.titulo}>AGILITY SERVICE</Text>
        <View>
            <Text style={textoStyles.texto}>CAIXA  15  </Text>
            <Text style={textoStyles.texto}>TROCO</Text>
            <Text style={textoStyles.texto}>CIGARROS</Text>
            <Text style={textoStyles.texto}>WHISKY</Text>
            <Text style={textoStyles.texto}>PAUSA</Text>
            <Text style={textoStyles.texto}>PREÇO ERRADO</Text>
            <Text style={textoStyles.texto}>OUTROS ASSUNTOS</Text>
            <Text style={textoStyles.texto}>CANCELAMENTO</Text>
            <Text style={textoStyles.texto}>FISCAL</Text>
        </View>
            
        <View>
            <TouchableOpacity>
                <Text style={bottonStyles.bottonSell}>SOLICITAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={bottonStyles.bottonSell}>SOLICITAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={bottonStyles.bottonSell}>SOLICITAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={bottonStyles.bottonSell}>SOLICITAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={bottonStyles.bottonSell}>CHAMAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={bottonStyles.bottonSell}>CHAMAr</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={bottonStyles.bottonSell}>CHAMAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={bottonStyles.bottonSell}>FINALIZAR ATENDIMENTO</Text>
            </TouchableOpacity>
        </View> 

        <View style={pickerStyles.pickerContainer}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
                }
                style={{ color: "#fff" }}>
                <Picker.Item label="Selecione uma opção" value="" />
                <Picker.Item label="WILHAS JOSE" value="WILHAS JOSE" />
                <Picker.Item label="RODRIGO NUNES" value="RODRIGO NUNES" />
                <Picker.Item label="RAFAEL LIRA" value="RAFAEL FRACISCO LIRA" />
            </Picker>
        </View>
    </View>
    );
}

/*
      { 
            <View>
                <TouchableOpacity>
                    <Text style={styles.bottonSell}>SOLICITAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.bottonSell}>SOLICITAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.bottonSell}>SOLICITAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.bottonSell}>SOLICITAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.bottonSell}>CHAMAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.bottonSell}>CHAMAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.bottonSell}>CHAMAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.bottonSell}>FINALIZAR ATENDIMENTO</Text>
                </TouchableOpacity>
            </View> }
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#53ac5f',
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 29
        
    },

    button:{
        fontSize: 30,
        backgroundColor: '#ff8000',
        //fontWeight: 'bold', 
        //height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 30,

    },
    titulo:{
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 300,
        marginLeft: 20,
        marginTop:-100,
        borderRadius: 350,
        fontStyle: "normal"
    },
    texto:{
        borderRadius: 14,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 50,
        position: 'relative',
        marginEnd:0,
        top: -150,
    },
    bottonSell:{
        fontSize: 20,
        backgroundColor: '#ff8000',
        fontWeight: 'bold', 
        flexDirection: 'row',
        borderRadius: 35,
        marginTop: 100,
        marginLeft: 370,
        textAlign:"center",
        position: 'relative',
        marginEnd:50,
       top: -525,

    },
})//*/

