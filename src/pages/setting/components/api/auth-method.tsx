import React from 'react'
import { Form, Input, Radio, Space } from 'antd'
import type { FormRule } from 'antd'

interface AuthMethodProps {
  rules: FormRule[]
  disabled: boolean
}

const AuthMethod = ({ rules, disabled }: AuthMethodProps) => {
  const name = (...key: string[]) => ['api', 'auth_method', ...key]

  const form = Form.useFormInstance()
  const typeValue = Form.useWatch(name('type'), form) as AuthMethod['type']

  return (
    <>
      <Form.Item
        name={name('type')}
        label="token 所在的位置"
        tooltip="请求体只能是 json 类型"
        rules={rules}
      >
        <Radio.Group disabled={disabled}>
          <Radio value="HEADER">请求头</Radio>
          <Radio value="BODY">请求体</Radio>
        </Radio.Group>
      </Form.Item>

      {typeValue === 'HEADER' ? (
        <Space>
          <Form.Item
            name={name('key')}
            label="key"
            tooltip="默认 Authorization"
          >
            <Input placeholder="Authorization" disabled={disabled} />
          </Form.Item>

          <Form.Item
            name={name('prefix')}
            label="前缀"
            tooltip="token 前的前缀，不可省略空格，如果不需要可不填此项"
          >
            <Input placeholder="token 前缀" disabled={disabled} />
          </Form.Item>
        </Space>
      ) : (
        <Form.Item name={name('key')} label="key" rules={rules}>
          <Input disabled={disabled} />
        </Form.Item>
      )}
    </>
  )
}

export default AuthMethod
