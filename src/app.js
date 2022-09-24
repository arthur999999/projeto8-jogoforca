import "./reset.css"
import "./style.css"
import palavras from "./palavras"
import React from 'react'




let countLevel= 1



export default function App () {

    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z']
    console.log(palavras)

    palavras.sort(randomizer)

    console.log(palavras)
    const underlineList = []

    function randomizer() { 
        return Math.random() - 0.5; 
    }


    const [selectWord, setSelecdWord] = React.useState(palavras[0])

    const selectWordReal = []
    

    for(let i=0; i < selectWord.length; i++){
        selectWordReal.push(selectWord[i]) 
        
    }
    const [hideenWord, setHiddenWord] = React.useState('_')
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
        setCorrects([...corrects, m])
    }

   

    return (
        <>
        
        <div className="box1">
        <div className="button" onClick={()=> setSelecdWord(palavras[1])}  >Escolher Palavra</div>
        <div className="word">
            {selectWordReal.map((caracter, index)=> <div key={index} className="caracter">{corrects.includes(caracter)? caracter : '_'}</div>)}
        </div>
            <div className="forca">
                <img src={source} alt="" />
            </div>
        </div>
        <div className="box2">
            <div className="keys">
                {alfabeto.map((m, index) => <div key={index} onClick={()=> selectWordReal.includes(m.toLowerCase())? correctCar(m.toLowerCase()) : nextLevel()}   className="key">{m}</div> )}
            </div>
        </div>
        </>
    )
}