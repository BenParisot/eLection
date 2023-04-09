
const CandidateScorer = () => {
    return (
        <>
            <h1>Rate this candidate on the issues that matter to you:</h1>
            <label for="issue-id">Issue 1</label>
            <input type="range" id="id" name="name" min="1" max="5"></input>
            <label for="issue-id">Issue 2</label>
            <input type="range" id="id" name="name" min="1" max="5"></input>
            <label for="issue-id">Issue 3</label>
            <input type="range" id="id" name="name" min="1" max="5"></input>
            <label for="issue-id">Issue 4</label>
            <input type="range" id="id" name="name" min="1" max="5"></input>
            <button>Save</button>
        </>
    )
}

export default CandidateScorer;