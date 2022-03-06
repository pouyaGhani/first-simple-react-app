

const Card = (props)=>{
    
    return(
        <div  className={`rounded-md ${props.bgColor} py-3 px-2 ${props.shadow}`}>
            {props.children}
        </div>
    );
}

export default Card;