function UserInfo ({handleClick}) {
    const username = "Nick";
    const profession = "Computer Science";
    const random =  Math.ceil(1 + Math.random() * 9);

    return(
        <div>
            <h2>User Information</h2>
            <p>Username: {username}</p>
            <p>Profession: {profession}</p>
            <button onClick={handleClick}>Show alert</button>
            <p>(Clicking the button shows an alert message)</p>
            <p>Your lucky number is {random}</p>
        </div>
    )
}

export default UserInfo