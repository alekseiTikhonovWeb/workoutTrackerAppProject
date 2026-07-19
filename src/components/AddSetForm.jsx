import {useState} from 'react'

export default function AddSetForm({ onAdd }){
    const[name,setName] = useState('');
    const[weight,setWeight] = useState(0);
    const[reps,setReps] = useState(0);

    return(
        <>
            <label>
                Exercise:
                <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
            </label>
            
            <label>
                Weight:
                <input type='text' value={weight} onChange={(e)=> setWeight(e.target.value)} />
            </label>
            
            <label>Reps:
            <input type='text' value={reps} onChange={(e)=> setReps(e.target.value)} />
            </label>
 

            <button onClick={() => {
                                    if(name !== '' && weight !== 0 && reps !== 0){
                                        onAdd({ id: Date.now(), exercise: name, weight: weight, reps: reps });
                                        setName('');
                                        setReps(0);
                                        setWeight(0);
                                    }
                                }} >Add Exercise</button>
        </>
    )
}