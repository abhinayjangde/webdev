import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useState, useEffect } from "react";


const query = gql`
  query getAllTOdos{
    getTodos {
      id
      title
      completed
  } 
}`
function App() {

  const { data, loading } = useQuery(query)


  if (loading) {
    return <div>loading...</div>
  }

  return (
    <>
      <h1>data from graphql</h1>
      {
        data && data.map((item) => {
          return <div key={item.id} >
            <p>{item.title}</p>
          </div>
        })
      }
    </>
  )
}

export default App
