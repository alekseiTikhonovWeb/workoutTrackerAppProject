import {useState} from 'react'

export default function ExerciseList(){
    const[text,setText] = useState('');
    const[exerciseList, setExerciseList] = useState([]);


    return(
        <>
            <div>There are {exerciseList.length} exercises</div>
            <input type='text' value={text} onChange={(e)=> setText(e.target.value)} />
            <button onClick={() => {
                                    if(text !== ''){
                                        setExerciseList([...exerciseList,{id: Date.now(), name: text}]);
                                        setText('');
                                    }
                                }} >Add Exercise</button>
            <li>{exerciseList.map(e => <li key={e.id}>{e.name}</li>)}</li>
        </>
    )
}