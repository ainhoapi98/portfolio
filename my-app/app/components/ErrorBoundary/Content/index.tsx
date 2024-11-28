// Messages
import {Container, Content, Link, TitleContainer} from './styled'

const ErrorContent = ({uuid}: { uuid: string | null }) => (
    <Container>
        <TitleContainer>
            <span>oops...something went wrong!</span>
        </TitleContainer>
        <Content>
            <span>An unexpected error occurred. Error ID: {uuid}.</span>
        </Content>
        <Content>
            <Link>Send crash report</Link>
        </Content>
    </Container>
)


export default ErrorContent
