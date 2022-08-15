import React from 'react';

function Crew(props) {
   const {link, name, surname, image} = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer">
         <img src={image} style={{ maxWidth: "2rem" }}/> {name} {surname}
      </a>
   );
}

export default Crew;