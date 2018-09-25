import axios from 'axios'
import { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap'

export default class User extends Component {
  static async getInitialProps({ query }) {
    const url = `https://jsonplaceholder.typicode.com/users?username=${query.username}`
    const { data: [ user ] } = await axios.get(url)
    return { user }
  }
  render() {
    const { user } = this.props
    return (
      <Container className="py-5">
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Row noGutters>
                <Col lg="4" style={{
                  width: '400px',
                  height: '400px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderTopLeftRadius: '0.25rem',
                  borderBottomLeftRadius: '0.25rem',
                  backgroundImage: `url("https://placeholdit.imgix.net/~text?txtsize=33&txt=${user.name}&w=400&h=400")`
                }}>
                </Col>
                <Col className="d-flex align-items-center">
                  <CardBody className="px-5">
                    <CardTitle tag="h1">{ user.name } ({ user.username })</CardTitle>
                    <CardSubtitle tag="h3" className="text-muted">
                      { user.company.catchPhrase }
                    </CardSubtitle>
                    <CardText className="py-4">{ user.phone }</CardText>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
