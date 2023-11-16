import { 
  Center,
  Input,
  Box
} from '@chakra-ui/react'
import { login } from '../services/login';
import { Botton } from '../components/Botton';


export const Card = () => {
  return(
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <Botton 
          event={login}
        /> 
      </Center>
    </Box>
  )
}