import {Center, Link, SimpleGrid} from "@chakra-ui/react"
import { Link as ReachLink, useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"

const Conta = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn, userData, fetchData } = useContext(AppContext)

    useEffect(() => {
        fetchData && !isLoggedIn && navigate('/')
    }, [fetchData])


    const actualDate = new Date()

    if(userData && id !== userData.id) {
        navigate('/')
    }
  
    return userData &&
        (
            <>
                <Center>
                    <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                        <CardInfo mainContent={`Bem vindo, ${userData?.name}`}
                                  content={`${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()} ${actualDate.getHours() < 10 ? 0 : ''}${actualDate.getHours()}:${actualDate.getMinutes() < 10 ? 0 : ''}${actualDate.getMinutes()}`}/>
                        <CardInfo mainContent='Saldo' content={`R$ ${userData?.balance}`}/>
                    </SimpleGrid>
                </Center>
                <Center paddingTop={8}>
                    <Link as={ReachLink} to={`/conta/${userData.id}/info`}>Mais informações da Conta</Link>
                </Center>
            </>

        )

}


export default Conta
