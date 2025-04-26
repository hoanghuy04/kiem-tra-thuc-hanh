import { Card, Menu } from 'antd';
import { CalendarOutlined, RightOutlined } from '@ant-design/icons';
import anh2 from '../assets/anh2.jpg';
import anh3 from '../assets/anh3.jpg';

// Sidebar Component with Hover Submenu
const Sidebar = () => {
  const menuItems = [
    {
      key: '1',
      label: 'CƠ CẤU TỔ CHỨC',
      children: [
        { key: '1-1', label: <a href="/to-chuc-1" className="text-blue-900 hover:underline">Tổ chức 1</a> },
        { key: '1-2', label: <a href="/to-chuc-2" className="text-blue-900 hover:underline">Tổ chức 2</a> },
      ],
    },
    {
      key: '2',
      label: 'LÃNH BẠO',
      children: [
        { key: '2-1', label: <a href="/lanh-bao-1" className="text-blue-900 hover:underline">Lãnh đạo 1</a> },
        { key: '2-2', label: <a href="/lanh-bao-2" className="text-blue-900 hover:underline">Lãnh đạo 2</a> },
      ],
    },
    {
      key: '3',
      label: 'CÁC PHÒNG BAN',
      children: [
        { key: '3-1', label: <a href="/phong-ban-1" className="text-blue-900 hover:underline">Phòng ban 1</a> },
        { key: '3-2', label: <a href="/phong-ban-2" className="text-blue-900 hover:underline">Phòng ban 2</a> },
      ],
    },
    {
      key: '4',
      label: 'CÁC KHOA',
      children: [
        { key: '4-1', label: <a href="/khoa-1" className="text-blue-900 hover:underline">Khoa 1</a> },
        { key: '4-2', label: <a href="/khoa-2" className="text-blue-900 hover:underline">Khoa 2</a> },
      ],
    },
    {
      key: '5',
      label: 'CÁC VIỆN',
      children: [
        { key: '5-1', label: <a href="/vien-1" className="text-blue-900 hover:underline">Viện 1</a> },
        { key: '5-2', label: <a href="/vien-2" className="text-blue-900 hover:underline">Viện 2</a> },
      ],
    },
    {
      key: '6',
      label: 'CÁC TRUNG TÂM',
      children: [
        { key: '6-1', label: <a href="/trung-tam-1" className="text-blue-900 hover:underline">Trung tâm 1</a> },
        { key: '6-2', label: <a href="/trung-tam-2" className="text-blue-900 hover:underline">Trung tâm 2</a> },
      ],
    },
    {
      key: '7',
      label: 'CÁC PHÂN HIỆU',
      children: [
        { key: '7-1', label: <a href="/phan-hieu-1" className="text-blue-900 hover:underline">Phân hiệu 1</a> },
        { key: '7-2', label: <a href="/phan-hieu-2" className="text-blue-900 hover:underline">Phân hiệu 2</a> },
      ],
    },
    {
      key: '8',
      label: 'ĐOÀN THỂ',
      children: [
        { key: '8-1', label: <a href="/doan-the-1" className="text-blue-900 hover:underline">Đoàn thể 1</a> },
        { key: '8-2', label: <a href="/doan-the-2" className="text-blue-900 hover:underline">Đoàn thể 2</a> },
      ],
    },
  ];

  return (
    <div className="bg-white h-full p-4 border rounded-lg shadow-md">
      <div className="text-blue-900 font-bold text-lg mb-4">
        CƠ CẤU TỔ CHỨC
      </div>
      <Menu
        mode="vertical"
        items={menuItems}
        expandIcon={<RightOutlined />}
        className="border-none"
        itemClassName="text-blue-900 hover:bg-blue-100 hover:text-blue-900 font-medium text-sm py-2"
        subMenuClassName="bg-white shadow-md"
      />
    </div>
  );
};

// MainContent Component
const MainContent = () => {
  const announcements = [
    {
      title: "Thông báo kỳ nghỉ lễ Quốc khánh 2/9 dành cho sinh viên năm 2025 (24-04-2025)",
      link: "#",
      isNew: true,
    },
    {
      title: "Thông báo tuyển chọn chương sinh tốt nghiệp đại học chính quy đại học (21-04-2025)",
      link: "#",
      isNew: true,
    },
  ];

  const admissions = [
    {
      title: "Thông báo tuyển sinh đại học chính quy đợt liên trình từ trình độ cao đẳng lên trình... (28-03-2025)",
      link: "#",
    },
    {
      title: "Thông báo về kỳ thi xét tuyển sinh đại học văn bằng đại học, đợt 1 năm 2025 (20-03-2025)",
      link: "#",
    },
  ];

  const events = [
    {
      image: "https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/04/AVEVA-BANER.JPG",
      title: "AVEA trao tài trợ học phí trị giá 180.000 USD tại Đại học Công nghiệp... (25-04-2025)",
      link: "#",
      isNew: true,
    },
    {
      image: "https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/04/AVEVA-BANER.JPG",
      title: "Sôi nổi hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc tế... (24-03-2025)",
      link: "#",
    },
    {
      image: "https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/04/AVEVA-BANER.JPG",
      title: "Đại học Công nghiệp TP. HCM tham gia dự án GreenEdu Seeds của Erasmus (19-03-2025)",
      link: "#",
    },
  ];

  return (
    <div className="p-4 border shadow-md rounded-lg w-full">
      {/* Announcements */}
      <div className="mb-8">
        <div className="text-blue-900 font-bold text-xl mb-4">THÔNG BÁO</div>
        <ul className="space-y-2">
          {announcements.map((item, index) => (
            <li key={index} className="flex items-center">
              <CalendarOutlined className="text-red-600 mr-2" />
              <a href={item.link} className="text-blue-900 hover:underline text-sm">
                {item.title}
              </a>
              {item.isNew && (
                <span className="ml-2 text-red-600 font-bold text-xs">[new]</span>
              )}
            </li>
          ))}
        </ul>
        <a href="/announcements" className="text-blue-900 hover:underline text-sm mt-2 inline-block">
          Xem tất cả
        </a>
      </div>

      {/* Admissions */}
      <div className="mb-8">
        <div className="text-blue-900 font-bold text-xl mb-4">TUYỂN SINH</div>
        <ul className="space-y-2">
          {admissions.map((item, index) => (
            <li key={index} className="flex items-center">
              <CalendarOutlined className="text-red-600 mr-2" />
              <a href={item.link} className="text-blue-900 hover:underline text-sm">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <a href="/admissions" className="text-blue-900 hover:underline text-sm mt-2 inline-block">
          Xem tất cả
        </a>
      </div>

      {/* Events */}
      <div>
        <div className="text-blue-900 font-bold text-xl mb-4">HỢP TÁC QUỐC TẾ</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              cover={<img alt={event.title} src={event.image} className="object-cover h-40" />}
              className="shadow-md border-none"
            >
              <Card.Meta
                title={
                  <div className="flex items-center">
                    <CalendarOutlined className="text-red-600 mr-2" />
                    <a href={event.link} className="text-blue-900 hover:underline text-sm">
                      {event.title}
                    </a>
                    {event.isNew && (
                      <span className="ml-2 text-red-600 font-bold text-xs">[new]</span>
                    )}
                  </div>
                }
              />
            </Card>
          ))}
        </div>
        <a href="/events" className="text-blue-900 hover:underline text-sm mt-4 inline-block">
          Xem tất cả
        </a>
      </div>
    </div>
  );
};

// OrganizationSection Component
const OrganizationSection = () => {
  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <MainContent />
      </div>
    </div>
  );
};

export default OrganizationSection;