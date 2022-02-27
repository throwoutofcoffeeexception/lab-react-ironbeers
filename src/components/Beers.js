import React from 'react';

function Beers(props) {
  return (
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
    <div className="list-group">
      { 
        props.name.map( (element, index) => {
          return (
            <div>
            <div><img src={element.image_url}></img></div>
            <div><a key={index} className="list-group-item list-group-item-action" href='/beers/' + {element.id}</div>>{element.name}</a></div>
            <div>{element.tagline}</div>
            <div>Created by: {element.contributed_by}</div>

            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default Beers;