import React from 'react'
import Header from'../compnent/Header'
import {Card} from 'react-bootstrap'
export default function Course() {
  return (
    <>
      
        <Header/>
        <div className='back'>
        <h1> 
          
          "Learn a Variety of Dance Styles"
        </h1>
        </div>
        <div className='cardstyle'>

    <Card style={{ width: '28rem' ,margin :'0 2rem',padding: '2%'}}>
      <Card.Img variant="top" src="image/ballet.jpg"/>
      <img style={{margin : '0 2rem'}}></img>
    
        <Card.Title><h2>Ballet</h2></Card.Title>
        
    
    </Card>
    
    <Card style={{ width: '31rem',margin:'0 1rem',padding: '2%' }}>
      <Card.Img variant="top" src="image/dance2.jpg"/>
      <img style={{margin : '0 2rem'}}></img>
      
        <Card.Title><h2>Bharatnatyam</h2></Card.Title>
        
    </Card>
    <Card style={{ width: '29rem',margin:'0 1rem',padding: '2%' }}>
      <Card.Img variant="top" src="image/hiphop.jpg"/>
      <img style={{margin : '0 -2rem'}}></img>
      
        <Card.Title><h2>Hip-Hop</h2></Card.Title>
        
      
    </Card>
    </div>
    <div className='card2'>
    <Card style={{ width: '35rem',marginRight:'0 2rem',padding: '1%' }}>
      <Card.Img variant="top" src="image/lavni.jpg"/>
      <img style={{margin : '0 1rem'}}></img>
      
        <Card.Title><h2>Lavni</h2></Card.Title>
        
    
    </Card>
    <Card style={{ width: '35rem',margin:'0 3rem',padding: '1%' }}>
      <Card.Img variant="top" src="image/salsa.jpg"/>
      <img style={{margin : '0 10rem',padding : '1px 80px'}}></img>
    
        <Card.Title><h2>Salsa Dance</h2></Card.Title>
        
    
    </Card>
    <Card style={{ width: '35rem',margin:'0 -1rem', padding: '1%' }}>
      <Card.Img variant="top" src="image/dance3.jpg"/>
      <img style={{margin : '0 9rem'}}></img>
  
        <Card.Title><h2>Contemporary</h2></Card.Title>
    </Card>
    </div>
    <div className='card2'>
    <Card style={{ width: '35rem',marginRight:'0 2rem',padding: '1%' }}>
      <Card.Img variant="top" src="image/kpop.jpg"/>
      <img style={{margin : '0 1rem'}}></img>
      
        <Card.Title><h2>K-pop</h2></Card.Title>
        
    
    </Card>
    <Card style={{ width: '34rem',margin:'0 3rem',padding: '1%' }}>
      <Card.Img variant="top" src="image/tap.jpg"/>
      <img style={{margin : '0 10rem',padding : '1px 80px'}}></img>
    
        <Card.Title><h2>Tap Dance</h2></Card.Title>
        
    
    </Card>
    <Card style={{ width: '39rem',margin:'0 -1rem', padding: '1%' }}>
      <Card.Img variant="top" src="image/wprkout.jpg"/>
      <img style={{margin : '0 9rem'}}></img>
  
        <Card.Title><h2>Dance workout</h2></Card.Title>
    </Card>
    </div>
  
    </> )
}
