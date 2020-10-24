import React, {useState, useEffect} from 'react'

import './Home.css'

const Home = () =>{
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('/allpost',{
      headers:{
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      }
    })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
        setData(result.posts)
      })
  },[])
    return(
      <div>
          <div className="home">
            {
              data.map(item=>{
                return(
                  <div className="card home-card">
                    <h5>Stephin Reji</h5>
                    <div className="card-image">
                      <img 
                        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                    <i className="material-icons">favorite</i>
                      <h6>Title</h6>
                      <p>This is an amazing post</p>
                      <input 
                        type="text"
                        placeholder="Add a comment"
                      />
                    </div>
                  </div>
                )
              })
            }
            
          </div>
      </div>  
    )
}

export default Home