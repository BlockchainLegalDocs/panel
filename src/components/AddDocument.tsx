import { required } from '@/shared/utils/validations'
import { Button, DatePicker, Form, Input } from 'antd'

function AddDocument () {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
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

      <Form.Item
        label="Doc Content Hash"
        name="docHash"
        rules={[required()]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Employee Amount"
        name="empAmount"
        rules={[required()]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="End Time"
        name="endTime"
        rules={[required()]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add Document
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddDocument
