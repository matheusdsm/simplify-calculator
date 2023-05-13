//imc-calculator; licensed under MIT license. brought by matheusdsm/justonedev.

import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	
  const [valor1, setValor1] = useState(0);
	
  const [valor2, setValor2] = useState(0);

  const [resultado, setResultado] = useState("");

  function imcSum(){
	  
	  let sum = (parseFloat(valor1) / (parseFloat(valor2) * parseFloat(valor2)));

	  let imc = sum;
	  
	  let result = "";
	  
	  if (imc <= 16.9) {
		  result = "Muito abaixo do peso :( \n - IMC: " + imc;
	  } 
	  else if ((imc <= 17) && (imc >= 18.4)) {
		  result = "Abaixo do peso... \n - IMC: " + imc;
	  }
	  else if ((imc <= 18.5) && (imc >= 24.9)) {
		  result = "Peso normal. \n - IMC: " +imc;	
	  } 
	  else if ((imc <= 25) && (imc >= 29.9)) {
		  result = "Acima do Peso ... :( \n - IMC: " +imc;
	  }
	  else if ((imc <= 30) && (imc >= 34.9)) {
		  result = "Obesidade grau I \n - IMC: " +imc;
	  }
	  else if ((imc <= 35) && (imc >= 40)) {
		  result = "Obesidade grau II \n - IMC: " +imc;
	  }
	  else if ((imc > 40)) {
		  result = "Obesidade grau III \n - IMC: " +imc;
	  }

	  setResultado(result);
  }
	
  return (
    <View style={styles.container}>
      
		  <Text style={styles.titulo}><i>IMC Calculator</i></Text>
		
		  <View style={styles.bloco}>
		  	<Text style={styles.label}> Peso KG (eg; 80): </Text>

			  <TextInput 
				  style={styles.input}
				  value={valor1}
				  onChangeText={(valor)=>setValor1(valor)}
				  inputMode='numeric'
				  keyboardType='numeric'
			  />
		  </View>
		  
		  <View style={styles.bloco}>
		  	<Text style={styles.label}> Altura M² (eg; 1,7): </Text>

			  <TextInput 
				  style={styles.input}
				  value={valor2}
				  onChangeText={(valor)=>setValor2(valor)}
				  inputMode='numeric'
				  keyboardType='numeric'
			  />
		  </View>
		  

		  <View style={styles.bloco}> 
		  	<TouchableOpacity style={styles.botao} onPress={imcSum}>
				  <Text style={styles.txtBotao}>Resultado: </Text>
			  </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco}>

		  	<Text style={styles.label}> Resultado: {resultado}</Text>
		  </View>

    </View>
	
  );
}

let defaultWidth = 480;

const styles = StyleSheet.create({
  botao:{
	backgroundColor: '#FCB07E',
	width: defaultWidth,
	paddingVertical: '1.2rem',
	paddingHorizontal: '1rem',
	marginTop: 20
  },
  txtBotao:{
	color: '#FFF',
	fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#E2E8C0',
    alignItems: 'center',
    justifyContent: 'center',
	opacity: 0.75,
	fontFamily: 'Arial'
  },
  titulo:{
	fontSize:30,
	color: '#331832',
	marginVertical: '1.2rem'
  },
  label:{
    fontSize: 30,
	width: defaultWidth,
	marginVertical: '1.1rem'
  },
  input:{
	borderWidth: 2,
	fontSize: 20,
	paddingVertical: '0.6rem',
	paddingHorizontal: '0.4rem'
  }
});