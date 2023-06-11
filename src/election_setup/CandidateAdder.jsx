import React from 'react';

const CandidateAdder = () => {
    return (
        <>
            <h1>Add candidates</h1>
            <form>
                <label>candidate name</label>
                <input type="radio"></input>
                <p>candidate party</p>
                <input type="radio" id="democrat" name="candidate-party" value="democrat"></input>
                <label for="democrat">Democrat</label>
                <input type="radio" id="republican" name="candidate-party" value="republican"></input>
                <label for="republican">Republican</label>
                <input type="radio" id="independent" name="candidate-party" value="independent"></input>
                <label for="independent">Independent</label>
                <input type="radio" id="other" name="candidate-party" value="other"></input>
                <label for="other">Other</label>
                <label>candidate name</label>
                <input type="name"></input>
                <button type="submit">Next</button >
            </form>
        </>
    )
}

export default CandidateAdder;