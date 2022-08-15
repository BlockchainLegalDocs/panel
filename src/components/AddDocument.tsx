/* eslint-disable @typescript-eslint/no-floating-promises */
import { ethDocuments } from '@/shared/services/ethereum/api'
import useEthereum from '@/shared/services/ethereum/useEthereum'
import { required } from '@/shared/utils/validations'
import { Button, DatePicker, Form, Input } from 'antd'

function AddDocument () {
  const { isConnected, connect, currentAccount } = useEthereum()
  const onFinish = async (values: any) => {
    console.log('Success:', values)
    if (!isConnected) await connect()
    console.log({
      docLink: values.docLink,
      hash: values.docHash,
      value: 0.000005,
      time: 100
    })
    ethDocuments.addDoc({
      docLink: values.docLink,
      hash: values.docHash,
      value: BigInt('5000000000000000'),
      time: 100,
      address: currentAccount as string,
      price: 5000000000000000
    }).then(() => {
      alert('DONE')
    })
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
