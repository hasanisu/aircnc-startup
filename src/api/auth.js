export const setAuthToken =(name, email, image )=>{
    const currentUser={
        name,
        image,
        email,
        
        
    }
    
        fetch(`http://localhost:7000/user/${email}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            
            //save token  to in local storage 
            localStorage.setItem('aircnc-token', data.token)
        
        })
    }
