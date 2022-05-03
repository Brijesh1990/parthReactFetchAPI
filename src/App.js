import React from "react";
import {useState} from 'react';

function Test()
{
  const [data ,setData]=useState(null)

  // Fetch Function   
    fetch("./data.json").then(
      function(res){
      return res.json()
    }).then(function(data){
    // store Data in State Data Variable
      setData(data)
    }).catch(
      function(err){
        console.log(err, ' error')
      }
    )
  
    return (
      <div className="App mt-5 shadow-lg">
        <h1 align="center">fetch json data</h1>
      
        <hr/>
        
        <h1 align="right"><button type="button" className="btn btn-sm btn-success mr-5">Add Employee <span className="bi bi-person"></span></button></h1>
      
        {
          // use data State Variable For Get Data Use JavaScript Map Mathod
         data? data.map(
            function(data)
            {
                    return (<div className="card1 mt-2"> 

                     
                    <div className="row">
                  
                   <div className="col-md-2">  
                    
                    <b>{data.id}</b>
                    </div>
                    <div className="col-md-2">  
                    <b>{data.username}</b>
                    </div>
                    <div className="col-md-2">  
                    <b>{data.gender}</b>
                    </div>
                    <div className="col-md-2">  
                    <b>{data.salary}</b>
                    </div>

                    <div className="col-md-2">  
                    <b><button type="button" className="btn btn-sm btn-danger"><span className="bi bi-trash"></span></button></b>
                    &nbsp;&nbsp;

                    <b><button type="button" className="btn btn-sm btn-success"><span className="bi bi-pencil-fill"></span></button></b>
                    </div>

                    </div>

                </div>
                
             
                )

            }
          ):""

         
        }


      </div>
    );
}

export default Test