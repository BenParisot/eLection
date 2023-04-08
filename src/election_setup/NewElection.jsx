
const NewElection = () => {
    return (
        <>
            <h1>New election set-up</h1>
            <form>
                <label>election name</label>
                <input type="textfield"></input>
                <label>date of election</label>
                <input type="date"></input>
                <button type="submit">Next</button >
            </form>
        </>
    )
}

export default NewElection;