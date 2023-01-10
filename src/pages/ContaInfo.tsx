import {Center, Link, SimpleGrid} from "@chakra-ui/react"
import {Link as ReachLink, useNavigate, useParams} from "react-router-dom"
import {useContext, useEffect} from "react";
import {AppContext} from "../components/AppContext";
import CardInfo from "../components/CardInfo";

const ContaInfo = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn, userData, fetchData } = useContext(AppContext)

    useEffect(() => {
        fetchData && !isLoggedIn && navigate('/')
    }, [fetchData])

    if(userData && id !== userData.id) {
        navigate('/')
    }

    return userData &&
        (
            <>
                <Center>
                    <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                        <CardInfo mainContent={`Nome:`} content={`${userData?.name}`} />
                        <CardInfo mainContent={`E-mail:`} content={`${userData?.email}`} />
                    </SimpleGrid>
                </Center>
                <Center paddingTop={8}>
                    <Link as={ReachLink} to={`/conta/${userData.id}`}>Voltar à Conta</Link>
                </Center>
            </>
        )
}

export default ContaInfo
