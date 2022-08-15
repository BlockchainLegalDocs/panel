import { Button, Col, Row, Space, Typography } from 'antd'

const { Text } = Typography

function RegisterAsObserver () {
  return (
    <Row justify='center' align='middle' style={{ height: '100%' }}>
      <Col>
        <Space direction='vertical' size="large" align='center'>
          <Text type='warning' strong>
            You have to pay 1.0ETH to join as observer.
          </Text>

          <Button type='primary'>
            Accept and Register
          </Button>
        </Space>
        </Col>
    </Row>
  )
}

export default RegisterAsObserver
