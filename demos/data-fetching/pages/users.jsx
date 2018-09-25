import axios from 'axios'
import Link from 'next/link'
import { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap'

export default class Users extends Component {
  static async getInitialProps() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const { data: users } = await axios.get(url)
    return { users }
  }
  render() {
    return (
      <Container className="py-4">
        <Row>
          {
            this.props.users.map(user =>
              <Col md="4" key={user.id} className="d-flex align-items-stretch">
                <Card className="mb-4 shadow-sm">
                  <CardImg
                    top
                    width="100%"
                    src={`https://placeholdit.imgix.net/~text?txtsize=33&txt=${user.name}&w=318&h=180`}/>
                  <CardBody>
                    <CardTitle>{ user.name }</CardTitle>
                    <CardText className="text-muted">{ user.company.catchPhrase }</CardText>
                    <Link
                      passHref
                      as={`/users/${user.username}`}
                      href={`/user?username=${user.username}`}>
                      <a>{ user.username }</a>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    )
  }
}
