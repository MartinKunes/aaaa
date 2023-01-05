const hexTime = () => {
    const addZeros = (element) => {
        return (element < 10 ? '0' : '') + element;
    };
    
    let today = new Date();
    let hours = addZeros( today.getHours() );
    let minutes = addZeros( today.getMinutes() );
    let seconds = addZeros( today.getSeconds() );

    document.getElementById('title').innerHTML = `#${hours}${minutes}${seconds}`;
    document.getElementById('page').style.backgroundColor = `#${hours}${minutes}${seconds}`;

    setTimeout( () => {
        hexTime();
    }, 1000 );
};

hexTime();
