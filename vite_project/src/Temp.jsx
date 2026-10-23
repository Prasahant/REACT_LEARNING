
function User() {
  const name="Prashant Kumar Rjhans"
  const age = "21"
  const role = "Software Engineer"

  return (
    <>
      <div style={{color:"red",border:"2px solid black"}}>
        <span>Hii, I am {name} and i am {age} year old and </span>
      </div>
      <span>i am {role}</span>
    </>
  )
}

export default User
