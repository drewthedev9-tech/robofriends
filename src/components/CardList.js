import React from 'react';
// Card has the robots on it need to import.
import Card from './Card';

// Name of component acting as calls is really a function
// robots prop been ru through from the CArd component.
const CardList = ({robots}) =>{
    // check loop in react app 2 video.
    //  i for thr index that the map loop will loop through.
    
    return(
        <div> 
            {/* returns the Cards array lopo from above */}
             {/* curly brackets bcause its javascript */}
            {robots.map((user,i) =>{
                // key is needed when looping through an array in REACT.
                return  (
                <Card 
                    key={i}
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                />
                );
            })}
        </div>
    );
}

export default CardList;

