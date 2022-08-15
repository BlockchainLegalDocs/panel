import { ADD_DOCUMENT, REGISTER_OBSERVER } from '@/routes'
import { ReactChild } from '@/shared/types'
import { UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout as AntLayout, Menu } from 'antd'
import { Link, useMatch } from 'react-router-dom'

import styles from './style.module.scss'

const { Content, Sider } = AntLayout

interface Props {
  children?: ReactChild
}

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: (<Link to={ADD_DOCUMENT}>Add Document</Link>)
  },
  {
    key: '2',
    icon: <UserOutlined />,
    label: (<Link to={REGISTER_OBSERVER}>Register Observer</Link>)
  }
]

function Layout ({ children }: Props) {
  return (
    <AntLayout className={styles.Layout}>
      <Content style={{ padding: '0 50px' }}>
        <AntLayout style={{ padding: '24px 0' }}>
          <Sider width={200}>
            <Menu
              mode="inline"
              style={{ height: '100%' }}
              items={items}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
        </AntLayout>
      </Content>
    </AntLayout>
  )
}

export default Layout
