/*import React from 'react'
import { useState } from 'react'
import Header from '../compnent/Header'
function Review() {

	const [name, setName] = useState(" ");
	const [email, setemail] = useState(" ");
	const [city, setcity] = useState(" ");
	const [course, setcourse] = useState(" ");
	const [contact, setcontact] = useState(" ");

	function getData(e) {
		let data = name
		let data1 = email
		let data2 = city
		let data3 = contact
		let data4 = course
		e.preventDefault();
		console.log(data);
		console.log(data1);
		console.log(data2);
		console.log(data3);
		console.log(data4);
	}
	return (
		<>
			<Header />
			<div className='form'>
				<div style={{
					display: 'block',
					width: 700,

					padding: '0 3rem',
					margin: 50
				}}>
					<div style={{
						color: 'yellow',
						textAlign: 'center',
						fontWeight: 'bolder'
					}}>
						<h2>Register Now for a Course..!!</h2>
					</div>
					<div style={{ color: '', fontFamily: 'cursive' }}>
						<form action='' className='form' onSubmit={getData} >
							<div>
								<label for='name'>Enter Name :   </label>
								<input type='text' onChange={(e) => setName(e.target.value)} />


							</div>
							<div>


								<label for='email'>Enter Email Id : </label>
								<input value={email} type='email' onChange={(e) => setemail(e.target.value)} />

							</div>
							<div>


								<label for='contact'>Enter Contact No : </label>
								<input type='number' onChange={(e) => setcontact(e.target.value)} />

							</div>
							<div>


								<label for='city'>Enter City Name :  </label>
								<input type='text' onChange={(e) => setcity(e.target.value)} />

							</div>

							<div>


								<label for='course'>Enter Course Name : </label>
								<input type='text' onChange={(e) => setcourse(e.target.value)} />

							</div>




							<button type='submit'>
								submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
	async function getData(e) {
		let data ={name,contact,email,} 
		
		e.preventDefault();
		let result=await fetch("http://localhost:2500/",{
		  method:"POST",
		  headers:{
			"Content-Type":"application.json",
			"Accept":"application/json"
		  },
		
		  body:JSON.stringify(data)
	  })
		
	  }
	
}
export default Review
*/




import React, { useState } from 'react';
import Header from '../compnent/Header';
export default function  Review() {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [city , setcity]= useState("");
  const[course,setcourse]=useState("");
  const [contact, setcontact] = useState("");

  async function postData(e) {
    let data ={Name,contact,email,city,course} 
    
    e.preventDefault();
    let result=await fetch("http://localhost:2500/",{
      method:"POST",
      headers:{
        "Content-Type":"application.json",
        "Accept":"application/json"
      },
    
      body:JSON.stringify(data)
	})
	result =await result.json();
    alert("form submitted succesfully")
	}
  
  return (
	<>
		<Header />
		<div className='form'>
			<div style={{
				display: 'block',
				width: 700,

				padding: '0 3rem',
				margin: 50
			}}>
				<div style={{
					color: 'yellow',
					textAlign: 'center',
					fontWeight: 'bolder'
				}}>
					<h2>Register Now for a Course..!!</h2>
				</div>
				<div style={{ color: '', fontFamily: 'cursive' }}>
					<form action='' className='form' onSubmit={postData} >
						<div>
							<label for='Name'>Enter Name :   </label>
							<input type='text' onChange={(e) => setName(e.target.value)} />


						</div>
						<div>


							<label for='email'>Enter Email Id : </label>
							<input value={email} type='email' onChange={(e) => setemail(e.target.value)} />

						</div>
						<div>


							<label for='contact'>Enter Contact No : </label>
							<input type='number' onChange={(e) => setcontact(e.target.value)} />

						</div>
						<div>


							<label for='city'>Enter City Name :  </label>
							<input type='text' onChange={(e) => setcity(e.target.value)} />

						</div>

						<div>


							<label for='course'>Enter Course Name : </label>
							<input type='text' onChange={(e) => setcourse(e.target.value)} />

						</div>




						<button type='submit'>
							submit
						</button>
					</form>
				</div>
			</div>
		</div>
	</>
)
  
  

}
