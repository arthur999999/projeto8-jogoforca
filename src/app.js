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
                countLevel = 1
                setKeyUserd([...alfabeto, 'button'])
                setCorrects([...corrects, ...selectWordReal])
                setWordClass('red')
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
            case 'e' :
                setCorrects([...corrects, 'e', 'é', 'ê'])
                break;
            case 'é' :
                setCorrects([...corrects, 'e', 'é', 'ê'])
                break;
            case 'ê' :
                setCorrects([...corrects, 'e', 'é', 'ê'])
                break;
            case 'c' :
                setCorrects([...corrects, 'c', 'ç'])
                break;
            case 'ç' :
                setCorrects([...corrects, 'c', 'ç'])
                break;
                
            default:
                setCorrects([...corrects, m])
        }
        
        
        let includeCount = 1
        for(let j = 0; j < selectWordReal.length; j++){
            if(corrects.includes(selectWordReal[j])){
                includeCount++
            }
        }
        if(includeCount === selectWordReal.length) {
            setWordClass('green')
            setKeyUserd([...alfabeto, 'button'])
        }
        
    }

    const [keyUsed, setKeyUserd] = React.useState ([...alfabeto, 'button', 'word'])
    const [guessWhat, setGuessWhat] = React.useState ('')

    function newWord () {
        setSelecdWord(palavras[1])
        setCorrects([])
        setKeyUserd(['newWord'])
        setSource("./assets/forca0.png")
        countLevel = 1
        setWordClass('')
    }

    function guessGuess () {
        if(selectWord === guessWhat.toLowerCase()){
            setCorrects([...corrects, ...selectWordReal])
            setKeyUserd([...alfabeto, 'button'])
            setWordClass('green')
        }else{
            setKeyUserd([...alfabeto, 'button'])
            setCorrects([...corrects, ...selectWordReal])
            setSource("./assets/forca6.png")
            setWordClass('red')
        }
    }


    function compareKey (m) {
        setKeyUserd([...keyUsed, m])
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
            case 'E' :
                if(selectWordReal.includes('e')){
                    correctCar('e')
                }
                else if(selectWordReal.includes('é')){
                    correctCar('é')
                }
                else if(selectWordReal.includes('ê')){
                    correctCar('ê')
                }
                 else {
                    nextLevel()
                }
                break;
            case 'C' :
                if(selectWordReal.includes('c')){
                    correctCar('c')
                }
                else if(selectWordReal.includes('ç')){
                    correctCar('ç')
                }
                 else {
                    nextLevel()
                }
                break;
            
            default :
                selectWordReal.includes(m.toLowerCase())? correctCar(m.toLowerCase()) : nextLevel()
        }
        
    }

    const [wordClass, setWordClass] = React.useState('disabled')
    

    
   

    return (
        <>
        
        <div className="box1">
        <button className="button" data-identifier="choose-word" onClick={()=> newWord() } disabled={keyUsed.includes('newWord')? "disabled" : ""} >Escolher Palavra</button>
        <div className="word">
            {selectWordReal.map((caracter, index)=> <div key={index} className={wordClass} data-identifier="word" >{corrects.includes(caracter)? caracter : '_'} </div>)}
        </div>
            <div className="forca">
                <img data-identifier="game-image" src={source} alt="" />
            </div>
        </div>
        <div className="box2">
            <div className="keys">
                {alfabeto.map((m, index) => <button key={index}  onClick={()=> compareKey (m)  }  className="key" data-identifier="letter"  disabled={keyUsed.includes(m)? "disabled" : ""}  >{m}</button>  )}
            </div>
            <div className="input">
                <p>Já sei a palavra!</p>
                <input type="text" data-identifier="type-guess"  value={guessWhat} onChange={ e => setGuessWhat(e.target.value)}></input>
                <button onClick={()=>guessGuess()} data-identifier="guess-button" disabled={keyUsed.includes('button')? "disabled" : ""} >Chutar!</button>
            </div>
        </div>
        </>
    )
}