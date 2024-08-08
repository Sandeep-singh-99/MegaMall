import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React, { useEffect } from 'react';
import AdminIntro from './AdminIntro';
import AdminProduct from './AdminProduct';

function AdminPanel() {
  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe');
    if (rememberMe !== 'true') {
      window.location.href = "/admin-login";
    }
  }, []);

  return (
    <>
      <nav className='bg-[#162a38] py-5 flex justify-center'>
        <h1 className='text-white text-3xl font-semibold'>Admin Panel</h1>
      </nav>
      <div className='px-10'>
        <Tabs defaultActiveKey='1'>
          <TabPane key="1" tab="Admin Intro">
            <AdminIntro />
          </TabPane>

          <TabPane key="2" tab="Upload Products">
            {/* Upload Products Content */}
            <AdminProduct/>
          </TabPane>

          <TabPane key="3" tab="View Products">
            {/* View Products Content */}
          </TabPane>

          <TabPane key="4" tab="Category List">
            {/* Category List Content */}
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default AdminPanel;
