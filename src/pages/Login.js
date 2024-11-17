import React ,{ useState } from 'react'
import Header from '../compnent/Header'

function Login() {
    const [name, setName] = useState(" ");
    const [pass, setpass] = useState(" ");
    function getData(e) {
        let data = name
        let data1 = pass
        e.preventDefault();
        console.log(data);
        console.log(data1);
    }
    return (
        <div>

            <Header />
    
                <h2>Login page</h2>

            <div style={{ color: '', fontFamily: 'cursive' }}>
                <form action='' onSubmit={getData} />
                <div>
                    <label for='Name'>Enter Username :   </label>
                    <input type='text' onChange={(e) => setName(e.target.value)} />


                </div>
                <div>


                    <label for='pass'>Enter password : </label>
                    <input type ='text' onChange={(e) => setpass(e.target.value)} />

                </div>

                <button type='submit'>
                    submit
                </button>
            <form/>
    
                    </div>
                    </div>
    )
}
export default Login
