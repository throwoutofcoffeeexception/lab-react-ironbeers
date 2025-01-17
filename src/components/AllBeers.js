import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./AllBeers.css";

function AllBeers() {

  const [selectedBeers, setSelectedBeers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        console.log(result.data);
        setSelectedBeers(result.data);
      })
      .catch( (ex) => {
        console.log(ex)
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${filter}`)
      .then((result) => {
        console.log(result.data);
        setSelectedBeers(result.data);
      })
      .catch( (ex) => {
        console.log(ex)
      });
  }, [filter]);

  return (
    <>
    <div class="form-group">
      <input type="text" class="form-control" id="filter" placeholder="filter" onChange={(e) => setFilter(e.target.value)}></input>
    </div>
    <div className="list-group">
      {
        selectedBeers.map( (element, index) => {
          return (
            <>
              <NavLink key={index} className="list-group-item list-group-item-action" to={`/Beer/${element._id}`}>
                <div><img src={element.image_url}></img></div>
                  <div></div> 
                <div className="name">{element.name}</div>
                <div className="tagline">{element.tagline}</div>
                <div className="createdBy">created by: {element.contributed_by}</div>
                </NavLink>
                <hr/>
            </>
          )
        })
      }
      </div>
    </>
  );
}

export default AllBeers;