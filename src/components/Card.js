
// Need react imported we are writing JSX.
 import React from 'react';

//  runs the parameters of props from React in the index.js File.
// destructuring and putting props in the card component/function.
const Card = ({name, email,id}) => {  
    // variable reffering to properties from index.js in the<div> tags
    
    return (
        // CSS for the cards in short hand tachyons.
        <div className ='tc bg-light-blue dib br3 pa3 ma3 grow shadow-10'>
        {/* robobash template strings `` and JS expression needs ()   */}
        {/* Robob bash is an API so to get the  random gen images may take a nit of lag */}
        {/* Proops.id is from the index.js file  */}
          <img  alt='robots' src= {`https://robohash.org/${id}?200x200`} />
           <div >
                {/* Javascript expression also this is JSX needs {} around params */}
               <h2>{name}</h2>
               <p>{email}</p>
           </div>
        </div>
    );
}

export default Card;