import { Carousel, Card } from 'antd';

// CarouselSection Component
const CarouselSection = () => {
  const sections = [
    {
      title: "1",
      image: "https://iuh.edu.vn/Resource/Upload2/Image/2025/02/BANNER%20FB_WEB-01%20(1).jpg",
    },
    {
      title: "2",
      image: "https://iuh.edu.vn/Resource/Upload2/Image/2025/04/BANNER%2030_4_WEB1.jpg",
    },
    {
      title: "3",
      image: "https://iuh.edu.vn/Resource/Upload2/Image/2025/04/BANNER%2030_4_WEB1.jpg",
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
      <Carousel autoplay dots={{ className: "custom-dots" }}>
        {sections.map((section, index) => (
          <div key={index} className="px-2">
            <Card
              cover={
                <img
                  alt={section.title}
                  src={section.image}
                  className="object-cover h-80 w-full"
                />
              }
              className="border-none shadow-md"
            >
            </Card>
          </div>
        ))}
      </Carousel>
      <style jsx>{`
        .custom-dots :global(.ant-carousel .slick-dots li button) {
          background: #d1d5db; /* Gray color for inactive dots */
          opacity: 0.5;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .custom-dots :global(.ant-carousel .slick-dots li.slick-active button) {
          background: #1e40af; /* Blue color for active dot */
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default CarouselSection;