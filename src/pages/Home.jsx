import { Layout, Menu, Button, Space, Image, Card, List, Typography } from 'antd';
import { MailOutlined, HomeOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined, DownOutlined, CalendarOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';
// TopBar Component
const TopBar = () => {
  return (
    <div className="bg-blue-950 text-white py-1 px-4 flex justify-end items-center text-sm">
      <Space>
        <Button type="text" icon={<HomeOutlined />} className="text-white hover:text-gray-300">
          E-OFFICE
        </Button>
        <Button type="text" icon={<MailOutlined />} className="text-white hover:text-gray-300">
          EMAIL
        </Button>
        <span className="text-white">THƯ VIỆN - THÔNG TIN</span>
        <span className="text-white">KẾT NỐI LIÊN HỆ</span>
        <Image src="https://flagcdn.com/16x12/vn.png" alt="Vietnam Flag" width={16} preview={false} />
        <Image src="https://flagcdn.com/16x12/gb.png" alt="UK Flag" width={16} preview={false} />
      </Space>
    </div>
  );
};

// Header Component (Reused with adjustments for logo and university name)
const Header = () => {
  const menuItems = [
    {
      key: '1',
      label: 'GIỚI THIỆU',
      children: [
        { key: '1-1', label: <a to="/about">Về chúng tôi</a> },
        { key: '1-2', label: <a to="/history">Lịch sử</a> },
        { key: '1-3', label: <a to="/mission">Sứ mệnh</a> },
      ],
    },
    {
      key: '2',
      label: 'ĐÀO TẠO',
      children: [
        { key: '2-1', label: <a to="/programs">Chương trình học</a> },
        { key: '2-2', label: <a to="/courses">Khóa học</a> },
        { key: '2-3', label: <a to="/schedule">Lịch học</a> },
      ],
    },
    {
      key: '3',
      label: 'TUYỂN SINH',
      children: [
        { key: '3-1', label: <a to="/admissions">Thông tin tuyển sinh</a> },
        { key: '3-2', label: <a to="/apply">Đăng ký</a> },
        { key: '3-3', label: <a to="/requirements">Yêu cầu đầu vào</a> },
      ],
    },
    { key: '4', label: <a to="/research">NGHIÊN CỨU</a> },
    { key: '5', label: <a to="/students">SINH VIÊN</a> },
    { key: '6', label: <a to="/lecturers">GIẢNG VIÊN</a> },
    { key: '7', label: <a to="/certificates">VĂN BẰNG</a> },
  ];

  return (
    <header className="bg-gray-200 py-4 px-4 flex flex-col">
      {/* Logo and University Name */}
      <div className="flex items-center mb-4">
        <Image
          src={logo}
          alt="IUH Logo"
          width={60}
          preview={false}
        />
        <div className="ml-4">
          <div className="text-blue-900 font-bold text-xl">
            BỘ CÔNG THƯƠNG
          </div>
          <div className="text-blue-900 font-bold text-2xl">
            ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
          </div>
          <div className="text-blue-900 text-sm">
            Đổi mới tư duy, làm thêm trí thức - đón sóng
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems}
        className="bg-blue-950"
      />

      {/* Search Bar */}
      <div className="flex justify-end mt-2">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        />
      </div>
    </header>
  );
};

// Banner Component
const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-start px-8"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1200x300?text=Cityscape')",
      }}
    >
      <div className="flex items-center">
        <div className="text-white">
          <div className="text-blue-400 text-2xl font-bold">
            Tuyển sinh
          </div>
          <div className="text-3xl font-bold">
            MÙA ĐOAN THỨ TẾO
          </div>
          <div className="text-4xl font-bold">
            ĐẠI HỌC CÔNG NGHIỆP THÀNH PHỐ HỒ CHÍ MINH
          </div>
        </div>
        <div className="ml-8">
          <Image
            src="https://via.placeholder.com/100x100?text=QR"
            alt="QR Code"
            width={100}
            preview={false}
          />
          <div className="text-center text-white mt-2">
            <a
              href="https://iuh.edu.vn"
              className="text-red-600 font-bold underline"
            >
              HTTPS://IUH.EDU.VN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



// Main Content Component
const MainContent = () => {
  const announcements = [
    {
      title: "Thông báo kỳ nghỉ lễ Quốc khánh 2/9 dành cho sinh viên năm 2025 (24-04-2025)",
      a: "#",
    },
    {
      title: "Lịch thi học kỳ 2 năm học 2024-2025 của sinh viên chính quy đại học (22-04-2025)",
      a: "#",
    },
  ];

  const admissions = [
    {
      title: "Thông báo tuyển sinh đại học chính quy đợt 2 năm học 2025 (28-03-2025)",
      a: "#",
    },
    {
      title: "Thông báo về kỳ thi xét tuyển sinh đại học văn bằng đại học, đợt 1 năm 2025 (20-03-2025)",
      a: "#",
    },
  ];

  const events = [
    {
      image: "https://via.placeholder.com/300x150?text=Event1",
      title: "AVEA trao tài trợ học phí trị giá 180.000 USD tại Đại học Công nghiệp... (25-04-2025)",
      a: "#",
    },
    {
      image: "https://via.placeholder.com/300x150?text=Event2",
      title: "Sôi nổi hoạt động Đoàn Thanh niên, Hội Sinh viên quốc tế tại Đại học Công nghiệp... (23-04-2025)",
      a: "#",
    },
    {
      image: "https://via.placeholder.com/300x150?text=Event3",
      title: "Đại học Công nghiệp TP. HCM tham gia dự án GreenEdu Seeds của Erasmus (19-03-2025)",
      a: "#",
    },
  ];

  return (
    <div className="p-4">
      {/* Announcements */}
      <div className="mb-6">
        <div className="text-blue-900 font-bold text-lg mb-2">THÔNG BÁO</div>
        <List
          dataSource={announcements}
          renderItem={(item) => (
            <List.Item>
              <a to={item.a} className="text-blue-900 hover:underline">
                <CalendarOutlined className="text-red-600 mr-2" />
                {item.title}
              </a>
            </List.Item>
          )}
        />
        <a to="/announcements" className="text-blue-900 hover:underline text-sm">
          Xem tất cả
        </a>
      </div>

      {/* Admissions */}
      <div className="mb-6">
        <div className="text-blue-900 font-bold text-lg mb-2">TUYỂN SINH</div>
        <List
          dataSource={admissions}
          renderItem={(item) => (
            <List.Item>
              <a to={item.a} className="text-blue-900 hover:underline">
                <CalendarOutlined className="text-red-600 mr-2" />
                {item.title}
              </a>
            </List.Item>
          )}
        />
        <a to="/admissions" className="text-blue-900 hover:underline text-sm">
          Xem tất cả
        </a>
      </div>

      {/* Events */}
      <div>
        <div className="text-blue-900 font-bold text-lg mb-2">HỌP TÁC QUỐC TẾ</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event, index) => (
            <Card
              key={index}
              cover={<img alt={event.title} src={event.image} />}
              className="shadow-md"
            >
              <Card.Meta
                title={
                  <a to={event.a} className="text-blue-900 hover:underline">
                    <CalendarOutlined className="text-red-600 mr-2" />
                    {event.title}
                  </a>
                }
              />
            </Card>
          ))}
        </div>
        <a to="/events" className="text-blue-900 hover:underline text-sm block mt-2">
          Xem tất cả
        </a>
      </div>
    </div>
  );
};

// Footer Component (Reused from previous response)
const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-700 text-sm mt-10 border-t">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* LIÊN HỆ */}
          <div>
            <h3 className="font-bold mb-2">LIÊN HỆ</h3>
            <p>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
            <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 1, Quận Gò Vấp, TP. HCM</p>
            <p>Điện thoại: 028 38940 390 - 100</p>
            <p>Tuyển sinh: 028 3985 1932 - 028 3985 5858 - 028 3985 1917</p>
            <p>Email: dhcn@iuh.edu.vn</p>
          </div>
  
          {/* HOẠT ĐỘNG KHÁC */}
          <div>
            <h3 className="font-bold mb-2">HOẠT ĐỘNG KHÁC</h3>
            <ul className="space-y-1">
              <li>Hoạt động phục vụ cộng đồng</li>
              <li>Sinh viên tình nguyện</li>
              <li>CLB/Đội/Nhóm sinh viên</li>
              <li>Kết nối doanh nghiệp</li>
            </ul>
          </div>
  
          {/* THÔNG TIN MỞ RỘNG */}
          <div>
            <h3 className="font-bold mb-2">THÔNG TIN MỞ RỘNG</h3>
            <ul className="space-y-1">
              <li>Báo chí viết về IUH</li>
              <li>Khám phá IUH</li>
              <li>Kỹ năng mềm</li>
              <li>Bộ sưu tập</li>
              <li>Dịch vụ sinh viên</li>
            </ul>
          </div>
  
          {/* VĂN BẢN TIỆN ÍCH */}
          <div>
            <h3 className="font-bold mb-2">VĂN BẢN TIỆN ÍCH</h3>
            <ul className="space-y-1">
              <li>Quy chế - Quy định - Quy trình</li>
              <li>Ba công khai</li>
              <li>Biểu mẫu đào tạo</li>
              <li>Quản lý khoa học</li>
              <li>Phản hồi</li>
            </ul>
          </div>
  
        </div>
  
        {/* Bottom Section */}
        <div className="border-t py-4 text-center text-xs text-gray-500">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span>Số lượt truy cập: 288,835,366</span>
            <span>Hôm nay: 21,720</span>
            <span>Đang xem: 80</span>
          </div>
  
          {/* Social icons */}
          <div className="flex justify-center gap-4 mb-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Facebook
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              Twitter
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              FaLinkedinIn
            </a>
          </div>
  
          <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
          <p className="text-[10px]">Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.</p>
        </div>
      </footer>
    );
  }

// Home Component
const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Banner />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {/* <div className="col-span-1">
          <Sidebar />
        </div> */}
        {/* <div className="col-span-3">
          <MainContent />
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;