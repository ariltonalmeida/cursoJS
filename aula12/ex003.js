var agora = new Date()
var diaSem = agora.getDay()


switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia Inválido!')
        break
}