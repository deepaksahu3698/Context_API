import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import  {BUttonContext} from "../Context/Button"
import { useContext } from "react";


const Buttonchange_function =()=>{

  const  {login,togglelogin}=useContext(BUttonContext)
//   console.log(login)
return(
    <>
    <Button colorScheme='blue' onClick={togglelogin}>{login}</Button>
    </>
)

}
export default Buttonchange_function