/*import React , {UseEffect,UseState, useEffect} from 'react'

export default function Services() 
{ 
  const [data, setUser] = UseState([]);
  useEffect{[]=>{ getData();},}
  async  function getData()
  {
    let result = await fetch("");
    result = await result.json();
    setData(result)
  }


  return (
    <>

    <div>
      <h1>user list</h1>

      <table className='table'>
        <tr>
          <th> userId </th>
          <th> id </th>
          <th> title </th>
          <th> body </th>
        </tr>
        <tbody>
          {
            data.map((item) =>
              <>
                <tr>
                  <td> {item.userId} </td>
                  <td> {item.id} </td>
                  <td> {item.title} </td>
                  <td> {item.body} </td>
                </tr>


              </>
            )

          }
        </tbody>

      </table>



    </div>
    </>
  )

}*/

import React ,{useEffect,useState} from 'react';
import Header from '../compnent/Header'

export default function Services(){
  const[data,setData]=useState([]);
  useEffect(()=>{
    getData();
  },[])
  async function getData(){
    let result=await fetch("http://localhost:2500/")
    result=await result.json()
    setData(result)
 }
  return (<>
  <Header/>
    <div style={{color : 'purple',textAlign:'center',fontFamily:'-moz-initial'}}>
      <h1>Information of Members</h1></div>
        <table className='table'>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>City</th>
            <th>Course</th>
            
            
           </tr> 
           <tbody>
            {
              data.map((item)=>
              <>
              <tr>
                <td>{item.Name}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>{item.course}</td>
                
                </tr>
                </>
              )
            }
           </tbody>
        </table>
    
    </>
  )

}