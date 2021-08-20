import { React, useEffect, useState} from 'react';

//useEffect is basically a listener that listens for changes
//and then runs a function when it detects a change

export default function ComponentWithUseEffect() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    //useEffect used on it's own is going to execute the code
    //if anything has changed, no specific thing it's listening for
    // useEffect(() => {
    //     console.log("Something changed");
    // })

    //otherwise you can pass an array of variables into useEffect
    //as a second parameter to specify what it should only be listening for
    //changes in
    useEffect(() => {
        console.log("Count changed");
    }, [count])

    useEffect(() => {
        console.log("Count2 changed!")
    }, [count2])

    useEffect(() => {
        console.log("Either count changed!")
    }, [count, count2])

    return <div>
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <button onClick={() => setCount(count +1)}>Add</button>
        <button onClick={() => setCount2(count2 + 2)}>Add 2</button>
    </div>
}