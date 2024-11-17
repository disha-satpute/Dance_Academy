import React from 'react'
import Header from'../compnent/Header'
import{Card}from 'react-bootstrap'
export default function Contact() {
  return (
    <>
    
      <Header/>
      <div className='conback'>
      
          <div className='cardstyle1'>
        <card style={{width:'20rem' ,margin :'1px 10px',padding: '300%', backgroundColor:'skyblue',color : 'red'}}>
          <Card.Img varient="top" src="image/email.jpg"/>
          <img src="image/email.jpg" style={{ margin: '12%' }} alt=""></img>
          <Card.Body>
          <Card.Title>Email :</Card.Title>
          <Card.Text>
            <text style={{color : 'purple',display : 'block',margin : '1rem -5rem',borderColor : 'red'}}>
          <h4>moderndance190@gmail.com</h4>
          <h4>MDA2014@gmail.com</h4></text>
          </Card.Text>
          </Card.Body>
        </card>
        
          
        <card style={{width:'20rem' ,margin :'1px 30px',padding: '300%', backgroundColor:'skyblue',color : 'red'}}>
          <Card.Img varient="top" src="image/con3.jpg"/>
          <img src="image/con3.jpg" style={{ margin: '10px 1px' }} alt=""></img>
          <Card.Body>
          <Card.Title>Location :</Card.Title>
          <Card.Text><text style={{color : 'purple'}}>
          <h4> sai vhilla , Modern chowk,</h4>
          <h4>Shivajinagar , Pune</h4></text>
          </Card.Text>
          </Card.Body>
          </card>
          <card style={{width:'20rem' ,margin :'1px 7px',padding: '300%', backgroundColor:'skyblue',color : 'red'}}>
          <Card.Img varient="top" src="image/contact1.jpg"/>
          <img src="image/contact1.jpg" style={{ margin: '10px 30px' }} alt=""></img>
          <Card.Body>
          <Card.Title>Contact :</Card.Title>
          <Card.Text>
          <text style={{display : 'flex', margin : '0px 10px',padding : '0px 10px',color :'purple'}}>
          <h4 >Mr.Rahul Gupta</h4>
</text>  <h5>contact no :</h5>
          <div style={{color:'green'}}><h4>8668200015</h4></div>
          <text style={{display : 'flex', margin : '0px 5px',padding : '0px 9px',color :'purple'}}>
          <h4>Mrs.Divya Gupta</h4></text>
         <h5>contact no :</h5>
         <div style={{color:'green'}}><h4>9850236356</h4></div>
  
          </Card.Text>
          </Card.Body>
          </card>
          
        </div>


        

        </div>
      
      </>
    
  
  )
}