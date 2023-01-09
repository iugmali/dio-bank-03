import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"

const Conta = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn, userData } = useContext(AppContext)
    !isLoggedIn && navigate('/')

    const actualDate = new Date()

    if(userData && id !== userData.id) {
        navigate('/')
    }
  
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    !userData ?
                    (  
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : 
                    (
                        <>
                            <CardInfo mainContent={`Bem vindo, ${userData?.name}`} content={`${actualDate.getDate()}/${actualDate.getMonth()+1}/${actualDate.getFullYear()} ${actualDate.getHours() < 10 ? 0 : ''}${actualDate.getHours()}:${actualDate.getMinutes() < 10 ? 0 : ''}${actualDate.getMinutes()}`} />
                            <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                        </>
                    )
                }
            </SimpleGrid>    
        </Center>
    )
}

export default Conta
