import './styleCard.css'

const card = (title, subTitle, disc) => {
    return <div class='card-wrapper'>
        
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{disc}</p>
    </div>;
};



export default card;
