import { Button, Col, Row, Space, Typography } from 'antd'

const { Title } = Typography

function Document () {
  return (
    <Row gutter={16}>
      <Col>
        <Space direction='vertical'>
          <Title level={3}>For Employers</Title>
          <Button>
            Cancel
          </Button>
          <Button>
            Request Voting
          </Button>
        </Space>
      </Col>
      <Col>
        <Space direction='vertical'>
          <Title level={3}>For Employees</Title>
          <Button type='primary'>
            Sign
          </Button>
          <Button>
            Request Voting
          </Button>
          <Button>
            Cancel
          </Button>
        </Space>
      </Col>
      <Col>
        <Space direction='vertical'>
          <Title level={3}>For Observers</Title>
          <Button>
            Vote for Employee
          </Button>
          <Button>
            Vote for Employer
          </Button>
        </Space>
      </Col>
    </Row>
  )
}

export default Document
