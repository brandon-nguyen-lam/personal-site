import dynamic from 'next/dynamic'
import Layout from '../components/layouts/article'
import { Container } from '@chakra-ui/react'

const DynamicCelebrityStatus = dynamic(
  () => import('../components/celebritystatus'),
  {
    ssr: false
  }
)

export default function CelebrityStatus() {
  return (
    <Layout>
      <Container bg="white" paddingTop="15px">
        <DynamicCelebrityStatus />
      </Container>
    </Layout>
  )
}
