import React,{useState} from "react";



const Accordion =({items})=>{
    const[activeIndex,setActiveIndex]=useState(null);
    const OnTitleClicked = (index)=>{
        setActiveIndex(index);
    };
    const rendereditems=items.map((item,index)=>{
        const active = index===activeIndex?'active':'';
        return(
            <div key={item.title}>
                <div className={`title ${active}`} onClick={()=>OnTitleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="ui styled accordion">
            {rendereditems}
            
        </div>
    )
    
    
}
export default Accordion;
