import { Button } from "@chakra-ui/react"

interface IBotton {
    event: () => void
}

export const Botton = ({event}: IBotton) => {
    return (
        <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Button
        </Button>
    )
}