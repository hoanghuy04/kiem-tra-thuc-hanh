import React from 'react';
import { Row, Col } from 'antd';

const Header  = () => {
  return (
    <div className="bg-[#b8d8e3] py-4">
      <div className="container mx-auto px-4 md:px-0">
        <Row align="middle" justify="center">
          <Col xs={24} md={8} className="flex justify-center md:justify-start">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pfOsCqoDYqu6T4Qx88q6xeZXY7buhG.png" 
              alt="IUH Logo" 
              className="h-16 object-contain"
              onError={(e) => {
                e.currentTarget.src = "https://iuh.edu.vn/images/logo.png";
              }}
            />
          </Col>
          <Col xs={24} md={16} className="text-center md:text-right mt-4 md:mt-0">
            <div className="text-[#2a2a72] font-bold">
              <div className="text-xl">BỘ CÔNG THƯƠNG</div>
              <div className="text-2xl md:text-3xl">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</div>
              <div className="text-red-500 text-sm md:text-base italic">Đổi mới tư duy, làm giàu thêm trí thức - đời sống</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
