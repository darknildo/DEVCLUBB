

const personOne =  { nome : "Dark" , idade : 33 , sexo : "masculino" , profissão: "Programador" , Nacionalidade : "Brasileiro"}
 
if(personOne.idade >= 18 && (personOne.Nacionalidade === "Brasileiro" || personOne.Nacionalidade === "Brasileira")){ 
    console.log("Vocë passou no processo")
}else { 
    console.log ("Vocë NAO passou no processo")
}