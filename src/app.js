import "./reset.css"
import "./style.css"
import palavras from "./palavras"
import React from 'react'




let countLevel= 1



export default function App () {

    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z']
   

    palavras.sort(randomizer)

    
    

    function randomizer() { 
        return Math.random() - 0.5; 
    }


    const [selectWord, setSelecdWord] = React.useState(palavras[0])

    const selectWordReal = []
    

    for(let i=0; i < selectWord.length; i++){
        selectWordReal.push(selectWord[i]) 

    }
    const [source, setSource] = React.useState("./assets/forca0.png")

    console.log(selectWordReal)
    
    function nextLevel () {
        switch (countLevel){
            case 1 : 
                setSource("./assets/forca1.png")
                countLevel ++
                break;
            
            case 2 :
                setSource("./assets/forca2.png")
                countLevel ++
                break;
            case 3 :
                setSource("./assets/forca3.png")
                countLevel ++
                break;
            case 4 :
                setSource("./assets/forca4.png")
                countLevel ++
                break;
            case 5 :
                setSource("./assets/forca5.png")
                countLevel ++
                break;
            case 6 :
                setSource("./assets/forca6.png")
                countLevel ++
                break;
            default: 
                
        }
        
    }

    const [corrects, setCorrects] = React.useState ([])

    function correctCar(m) {
        switch (m){
            case 'o' :
                setCorrects([...corrects, 'o', 'ó', 'ô'])
                break;
            case 'ó' :
                setCorrects([...corrects, 'o', 'ó', 'ô'])
                break;
            case 'ô' :
                setCorrects([...corrects, 'o', 'ó', 'ô'])
                break;
            case 'a' :
                setCorrects([...corrects, 'a', 'á', 'ã'])
                break;
            case 'á' :
                setCorrects([...corrects, 'a', 'á', 'ã'])
                break;
            case 'ã' :
                setCorrects([...corrects, 'a', 'á', 'ã'])
                break;
            case 'i' :
                setCorrects([...corrects, 'i', 'í'])
                break;
            case 'í' :
                setCorrects([...corrects, 'i', 'í'])
                break;
            case 'u' :
                setCorrects([...corrects, 'u', 'ú'])
                break;
            case 'ú' :
                setCorrects([...corrects, 'u', 'ú'])
                break;
                
            default:
                setCorrects([...corrects, m])
        }
        
        console.log(corrects)
    }

    function newWord () {
        setSelecdWord(palavras[1])
        setCorrects([])
    }

    function compareKey (m) {
        switch (m) {
            case 'O' :
                if(selectWordReal.includes('o')){
                    correctCar('o')
                }
                else if(selectWordReal.includes('ó')){
                    correctCar('ó')
                }
                else if(selectWordReal.includes('ô')){
                    correctCar('ô')
                }
                 else {
                    nextLevel()
                }
                break;
            case 'A' :
                if(selectWordReal.includes('a')){
                    correctCar('a')
                }
                else if(selectWordReal.includes('á')){
                    correctCar('á')
                }
                else if(selectWordReal.includes('ã')){
                    correctCar('ã')
                }
                 else {
                    nextLevel()
                }
                break;
            case 'I' :
                if(selectWordReal.includes('i')){
                    correctCar('i')
                }
                else if(selectWordReal.includes('í')){
                    correctCar('í')
                }
                 else {
                    nextLevel()
                }
                break;
            case 'U' :
                if(selectWordReal.includes('u')){
                    correctCar('u')
                }
                else if(selectWordReal.includes('ú')){
                    correctCar('ú')
                }
                 else {
                    nextLevel()
                }
                break;
            
            default :
                selectWordReal.includes(m.toLowerCase())? correctCar(m.toLowerCase()) : nextLevel()
        }
        
    }
   

    return (
        <>
        
        <div className="box1">
        <div className="button" onClick={()=> newWord() }  >Escolher Palavra</div>
        <div className="word">
            {selectWordReal.map((caracter, index)=> <div key={index} className="caracter">{corrects.includes(caracter)? caracter : '_'}</div>)}
        </div>
            <div className="forca">
                <img src={source} alt="" />
            </div>
        </div>
        <div className="box2">
            <div className="keys">
                {alfabeto.map((m, index) => <div key={index} onClick={()=> compareKey (m) }   className="key">{m}</div> )}
            </div>
        </div>
        </>
    )
}