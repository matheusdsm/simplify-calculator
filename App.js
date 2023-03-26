import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome, setNome] = useState("");

  const [nomeTxt, setNomeTxt] = useState("");
	
  const [valor1, setValor1] = useState(0);

  const [valor2, setValor2] = useState(0);

  const [resultado, setResultado] = useState(0);
  

  function somar(){

	  let result = parseFloat(valor1) + parseFloat(valor2);

	  setResultado(result);
  }
	
  function subtrair(){
	  
	  let result = parseFloat(valor1) - parseFloat(valor2);
	  
	  setResultado(result);
  }

  function multiplicar(){
	  
	  let result = parseFloat(valor1) * parseFloat(valor2);
	  
	  setResultado(result);
  }
	
  function dividir(){
	  let result = parseFloat(valor1) / parseFloat(valor2);
	  
	  setResultado(result);
  }	
	

  function lerNome(){

	  setNome('Bem vindo ' + nomeTxt + ' :)');
  }
  return (
    <View style={styles.container}>
      
		  <Text style={styles.titulo}><i>Simplify Calculator</i></Text>

		  <View style={styles.bloco}>
			  <Text style={styles.label}> Nome: </Text>

			  <TextInput 
				  style={styles.input}
				  value={nomeTxt}
				  onChangeText={(texto)=>setNomeTxt(texto)}
			  />
			  <TouchableOpacity style={styles.botao} onPress={lerNome}>
				  <Text style={styles.txtBotao}>Enviar</Text>
			  </TouchableOpacity>

			  <Text style={styles.titulo}>{nome}</Text>
		  </View>
		
		  <View style={styles.bloco}>
		  	<Text style={styles.label}> Valor 1: </Text>

			  <TextInput 
				  style={styles.input}
				  value={valor1}
				  onChangeText={(valor)=>setValor1(valor)}
				  inputMode='numeric'
				  keyboardType='numeric'
			  />
		  </View>

		  <View style={styles.bloco}>
		  	<Text style={styles.label}> Valor 2: </Text>

			  <TextInput 
				  style={styles.input}
				  value={valor2}
				  onChangeText={(valor)=>setValor2(valor)}
				  inputMode='numeric'
				  keyboardType='numeric'
			  />
		  </View>

		  <View style={styles.bloco}> 
		  	<TouchableOpacity style={styles.botao} onPress={somar}>
				  <Text style={styles.txtBotao}>Somar</Text>
			  </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco}> 
		  	<TouchableOpacity style={styles.botao} onPress={subtrair}>
				  <Text style={styles.txtBotao}>Subtrair</Text>
			  </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco}> 
		  	<TouchableOpacity style={styles.botao} onPress={multiplicar}>
				  <Text style={styles.txtBotao}>Multiplicar</Text>
			  </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco}> 
		  	<TouchableOpacity style={styles.botao} onPress={dividir}>
				  <Text style={styles.txtBotao}>Dividir</Text>
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
	backgroundColor: '#5DB7DE',
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
    backgroundColor: '#FBF8F3',
    alignItems: 'center',
    justifyContent: 'center',
	opacity: 0.75
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
