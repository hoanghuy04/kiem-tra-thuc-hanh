import React from 'react'
import { Layout, Menu, Button, Space, Image } from 'antd';
import { MailOutlined, HomeOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
export default function Footer() {
    return (
      <Layout.Footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
          {/* Left: Logo and University Info */}
          <div>
            <div className="text-red-600 font-bold text-2xl mb-2">
              ĐẠI HỌC CÔNG NGHIỆP TP.HCM
            </div>
            <p className="text-sm">
              Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh<br />
              Điện thoại: 028 3894 0390 - 100<br />
              Tuyển sinh: 028 3895 1932 - 028 3895 5858 - 028 3895 1917<br />
              Email: dhcn@iuh.edu.vn
            </p>
          </div>
  
          {/* Center: Statistics */}
          <div>
            <p className="text-sm">
              Số lượt truy cập: <span className="font-bold">288,835,366</span><br />
              Hôm nay: <span className="font-bold">21,720</span><br />
              Đang xem: <span className="font-bold">80</span>
            </p>
            <div className="mt-4 flex gap-2">
              <span>Chia sẻ:</span>
              <Button
                type="link"
                icon={<FacebookOutlined />}
                href="https://facebook.com"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              />
              <Button
                type="link"
                icon={<TwitterOutlined />}
                href="https://twitter.com"
                target="_blank"
                className="text-blue-400 hover:text-blue-600"
              />
              <Button
                type="link"
                icon={<LinkedinOutlined />}
                href="https://linkedin.com"
                target="_blank"
                className="text-blue-700 hover:text-blue-900"
              />
            </div>
          </div>
  
          {/* Right: Placeholder for Additional Info */}
          <div className="text-sm">
            <p>Hoạt động phục vụ cộng đồng</p>
            <p>Sinh viên tình nguyện</p>
            <p>CLB/Đội/Nhóm sinh viên</p>
            <p>Kết nối doanh nghiệp</p>
            <p>Dịch vụ sinh viên</p>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm mt-6">
          © Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh.<br />
          Mọi hành động sử dụng nội dung đăng tải trên Website IUH cần có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.
        </div>
      </Layout.Footer>
    );
  };