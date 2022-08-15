import { required } from '@/shared/utils/validations'
import { Button, Col, Form, Input, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

function GoToDocument () {
  const navigate = useNavigate()

  const onFinish = (values: { docLink: string }) => {
    navigate(encodeURIComponent(values.docLink))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Row justify='center' align='middle' style={{ height: '100%' }}>
      <Col>
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Doc Link"
          name="docLink"
          rules={[required()]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Go To Document
          </Button>
        </Form.Item>
      </Form>
      </Col>
    </Row>
  )
}

export default GoToDocument
