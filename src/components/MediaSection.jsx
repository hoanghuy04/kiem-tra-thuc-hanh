import { Card } from 'antd';

// MediaSection Component
const MediaSection = () => {
  const sections = [
    {
      title: "PHÂN HIỆU QUẢNG NGÃI",
      image: "https://iuh.edu.vn/Resource/Upload2/Image/banner/content/QN03.jpg",
    },
    {
      title: "CƠ SỞ THANH HÓA",
      image: "https://iuh.edu.vn/Resource/Upload2/Image/banner/content/TH03.jpg",
    },
    {
      title: "VIDEO VÀ HÌNH ẢNH",
      image: "https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/03/GIAOLUUVANHOA-BANNER.JPG",
    },
  ];

  return (
    <div className="mx-auto mt-6">
      <div className="flex justify-between items-center mb-4">
        <div></div> {/* Empty div for spacing */}
        <a href="/media" className="text-blue-900 hover:underline text-sm">
          Xem tất cả
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div className=" border border-gray-300 shadow-lg rounded-lg" 
          key={index}>
            <Card
            cover={
              <img
                alt={section.title}
                src={section.image}
                className="object-cover h-48 w-full"
              />
            }
            className="border-none shadow-md"
          >
            <Card.Meta
              title={
                <div className="bg-blue-900 text-white text-center py-2 font-bold text-sm">
                  {section.title}
                </div>
              }
            />
          </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSection;