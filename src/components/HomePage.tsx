import img1 from 'figma:asset/c1795d0d09c2a8cc6259513dd01de8c6a0cb1581.png';
import img2 from 'figma:asset/3c297f8207c39ea276bf245ce385e7da1123d727.png';
import img3 from 'figma:asset/a68d43fefde3d0451d02136eeae33f3a51cb2b17.png';
import img4 from 'figma:asset/8.jpg';
import img5 from 'figma:asset/5.jpg';
import img6 from 'figma:asset/3.jpg';
import logoMain from '../assets/logo/logo_vi_v3.png';


const galleryImages = [
  { id: 1, src: img1, alt: 'Trung tâm dạy nghề lái xe' },
  { id: 2, src: img2, alt: 'Thực hành lái xe tải'},
  { id: 3, src: img3, alt: 'Khóa học thực hành lái xe' },
  { id: 4, src: img4, alt: 'Lớp học lý thuyết trực tuyến' },
  { id: 5, src: img5, alt: 'Thực hành lái xe tải' },
  { id: 6, src: img6, alt: 'Sân tập lái xe' },
];

export function HomePage() {
  return (
    <div className="space-y-8">
      {/* Introduction Section */}
      <section className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-green-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mx-auto mb-4">
              <img src={logoMain} alt="Logo" className="h-14 w-auto" />
            </div>
            <h2 className="text-green-800 mb-3">Quá trình hình thành và phát triển</h2>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>Thứ Tư, ngày 15/03/2023</span>
              <span>•</span>
              <span>Lượt xem: 52,034</span>
            </div>
          </div>
          
          {/* Opening Statement */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 mb-6 border border-green-200">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-green-700">Chặng đường hơn 55 năm xây dựng và phát triển</strong> của Trường Cao đẳng An ninh nhân dân I đã khẳng định những đóng góp to lớn của các thế hệ cán bộ, giáo viên, công nhân viên và học viên nhà trường đối với sự nghiệp đào tạo của lực lượng Công an nhân dân, góp phần bảo vệ vững chắc an ninh quốc gia, bảo đảm trật tự an toàn xã hội.
            </p>
          </div>

          {/* Historical Stages */}
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-green-800 mb-4">1. Các giai đoạn hình thành và phát triển</h3>
              
              <div className="space-y-6">
                {/* 1965-1968 */}
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-green-700 mb-2">📍 Từ 1965 - 1968: Giai đoạn tiền thân</h4>
                  <p className="text-gray-800 leading-relaxed">
                    Triển khai Nghị quyết hội nghị xây dựng lực lượng lần thứ hai, trong năm 1965, đồng chí Bộ trưởng Trần Quốc Hoàn đã ký quyết định thành lập một số trường sơ cấp Công an, trong đó có các trường sơ cấp Công an I, II, IV. Đây là giai đoạn tiền thân của trường Cao đẳng An ninh nhân dân I ngày nay.
                  </p>
                </div>

                {/* 1968-1971 */}
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-green-700 mb-2">📍 Từ 1968 - 1971: Thành lập Trường Đào tạo cán bộ Công an</h4>
                  <p className="text-gray-800 leading-relaxed mb-3">
                    Trường Đào tạo cán bộ Công an được thành lập, đánh dấu một mốc lịch sử quan trọng trong công tác đào tạo về lý luận nghiệp vụ An ninh ở bậc trung học của lực lượng An ninh nhân dân.
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-800 leading-relaxed">
                      <strong className="text-green-700">Ngày 15 tháng 5 năm 1968</strong>, đồng chí Bộ trưởng Trần Quốc Hoàn đã ký <strong>Quyết định số 515/CA-QĐ</strong> về việc sáp nhập Trường Công an II ở Bắc Thái và Trường công an IV ở Hà Bắc thành Trường Đào tạo cán bộ Công an (nay là Trường Cao đẳng An ninh nhân dân I).
                    </p>
                    <p className="text-gray-700 mt-2 italic">
                      → Ngày 15/5/1968 là ngày ra đời của trường Đào tạo cán bộ công an, đồng thời được xác định là <strong className="text-green-700">Ngày thành lập Trường Cao đẳng An ninh nhân dân I</strong> ngày nay.
                    </p>
                  </div>
                </div>

                {/* 1971-1974 */}
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-green-700 mb-2">📍 Từ 1971 - 1974: Đào tạo cán bộ an ninh miền Nam</h4>
                  <p className="text-gray-800 leading-relaxed">
                    Giai đoạn mở đầu quá trình phát triển Nhà trường đến cuối năm 1971 được giao thêm trọng trách đào tạo cán bộ an ninh miền Nam phục vụ sự nghiệp giải phóng Miền Nam, thống nhất Tổ quốc.
                  </p>
                </div>

                {/* 1974-1983 */}
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-green-700 mb-2">📍 Từ 1974 - 1983: Đào tạo Trung học An ninh</h4>
                  <p className="text-gray-800 leading-relaxed">
                    Bảo vệ An ninh quốc gia và bảo đảm trật tự an toàn xã hội, phục vụ sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.
                  </p>
                </div>

                {/* 1984-1989 */}
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-green-700 mb-2">📍 Từ 1984 - 1989: Thành lập Trường Cao đẳng An ninh nhân dân I</h4>
                  <p className="text-gray-800 leading-relaxed">
                    Với nhiệm vụ đào tạo bồi dưỡng cán bộ An ninh có trình độ đại học, góp phần xây dựng lực lượng Công an nhân dân trong sạch, vững mạnh.
                  </p>
                </div>

                {/* 1989-2012 */}
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-green-700 mb-2">📍 Từ 1989 - 2012: Sáp nhập và đổi mới</h4>
                  <p className="text-gray-800 leading-relaxed">
                    Ngừng tuyển sinh Cao đẳng, sáp nhập các trường Trung học An ninh nhân dân III, Trung học An ninh nhân dân IV vào Trường Trung học An ninh nhân dân I. Tập trung đào tạo bậc Trung cấp An ninh, thực hiện đề án tăng cường, đổi mới công tác giáo dục đào tạo trong lực lượng Công an nhân dân của Bộ Công an, xây dựng Nhà trường chính quy, tinh nhuệ, từng bước hiện đại, đáp ứng yêu cầu nhiệm vụ trong thời kỳ đổi mới.
                  </p>
                </div>

                {/* 2013-2020 */}
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-green-700 mb-2">📍 Từ 2013 - 2020: Tiếp tục đào tạo Cao đẳng</h4>
                  <p className="text-gray-800 leading-relaxed">
                    Đồng thời đào tạo Trung cấp theo quy chế đào tạo của Bộ Giáo dục và Đào tạo, Bộ LĐTBXH và quy định của Bộ Công an, góp phần bảo vệ An ninh quốc gia, đẩy mạnh công nghiệp hóa - hiện đại hóa và hội nhập quốc tế.
                  </p>
                </div>

                {/* 2020-present */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-5 border-2 border-green-300">
                  <h4 className="text-green-700 mb-3">📍 Từ 4/2020 đến nay: Sáp nhập Trường Cao đẳng An ninh nhân dân II</h4>
                  <p className="text-gray-800 leading-relaxed mb-3">
                    Thực hiện <strong>Nghị quyết số 22-NQ/TW, ngày 15/3/2018</strong> của Ban Chấp hành Trung ương, khóa XII về "Tiếp tục đổi mới, sắp xếp tổ chức bộ máy Bộ Công an tinh gọn, hoạt động hiệu lực, hiệu quả".
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-3 border border-green-200">
                    <p className="text-gray-800 leading-relaxed">
                      <strong className="text-green-700">Ngày 10/3/2020</strong>, Bộ trưởng Bộ Lao động - Thương binh và Xã hội đã ký ban hành <strong>Quyết định số 268/QĐ-LĐTBXH</strong> về việc sáp nhập Trường Cao đẳng An ninh nhân dân II vào Trường Cao đẳng An ninh nhân dân I.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Trụ sở chính:</p>
                      <p className="text-gray-800">Xã Tiên Dược, huyện Sóc Sơn, Hà Nội</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Địa điểm phía Nam:</p>
                      <p className="text-gray-800">Phường Tam Phước, TP Biên Hòa, Đồng Nai</p>
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-3">
                    <strong className="text-green-700">Ngày 22/4/2020</strong>, Bộ trưởng Bộ Công an ký <strong>quyết định số 3197/QĐ-BCA</strong> quy định chức năng, nhiệm vụ, quyền hạn và tổ chức bộ máy của Trường Cao đẳng An ninh nhân dân I. Nhà trường do Hiệu trưởng phụ trách và 04 Phó Hiệu trưởng giúp việc. Tổ chức bộ máy Nhà trường gồm <strong>17 đơn vị</strong> (08 Khoa, 06 Phòng và 03 Trung tâm).
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    <strong className="text-green-700">Ngày 25/11/2024</strong>, Bộ trưởng Bộ Công an ký <strong>Quyết định số 7672/QĐ-BCA</strong> quy định về tổ chức bộ máy của Trường Cao đẳng An ninh nhân dân I. Theo đó, tổ chức bộ máy của Nhà trường gồm <strong>16 đơn vị</strong> (08 khoa, 07 phòng và 01 Trung tâm).
                  </p>
                </div>
              </div>
            </div>

            {/* Awards Section */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-green-800 mb-4">2. Những phần thưởng cao quý mà Nhà trường được trao tặng</h3>
              
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border border-amber-200 mb-4">
                <p className="text-gray-800 leading-relaxed mb-4">
                  Với những thành tích đã đạt được trong <strong className="text-green-700">55 năm qua</strong>, Nhà trường đã được Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam và Nhà nước Campuchia trao tặng những phần thưởng cao quý:
                </p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-amber-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🏅</span>
                    </div>
                    <div>
                      <p className="text-gray-800">Huân chương Bảo vệ Tổ quốc hạng Nhì</p>
                      <p className="text-sm text-gray-600">(1983)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-amber-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🏅</span>
                    </div>
                    <div>
                      <p className="text-gray-800">Huân chương Quân công hạng Ba</p>
                      <p className="text-sm text-gray-600">(1998)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-amber-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🏅</span>
                    </div>
                    <div>
                      <p className="text-gray-800">Huân chương Quân công hạng Nhì</p>
                      <p className="text-sm text-gray-600">(2003, 2016)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-amber-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🏅</span>
                    </div>
                    <div>
                      <p className="text-gray-800">Huân chương Quân công hạng Nhất</p>
                      <p className="text-sm text-gray-600">(2006, 2013)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-amber-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🏅</span>
                    </div>
                    <div>
                      <p className="text-gray-800">Huân chương Bảo vệ Tổ quốc hạng Nhất</p>
                      <p className="text-sm text-gray-600">(2018)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-amber-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🏅</span>
                    </div>
                    <div>
                      <p className="text-gray-800">Huân chương Độc lập hạng Nhất</p>
                      <p className="text-sm text-gray-600">(2011)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-blue-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🤝</span>
                    </div>
                    <div>
                      <p className="text-gray-800">Huân chương Hữu nghị SêyNaChâySất</p>
                      <p className="text-sm text-gray-600">(2010)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-blue-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🤝</span>
                    </div>
                    <div>
                      <p className="text-gray-800">Huân chương Hữu nghị Thappadin</p>
                      <p className="text-sm text-gray-600">(2016)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-blue-300 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🤝</span>
                    </div>
                    <div>
                      <p className="text-gray-800">Huân chương Hữu nghị Sahametrey</p>
                      <p className="text-sm text-gray-600">(2019)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legacy and International Cooperation */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200">
              <h4 className="text-blue-800 mb-3">🌍 Hợp tác quốc tế</h4>
              <p className="text-gray-800 leading-relaxed mb-4">
                Các thế hệ cán bộ, giảng viên, công nhân viên và học viên Nhà trường hôm nay có quyền tự hào về những thành quả Nhà trường đã đóng góp vào chiến thắng vĩ đại của dân tộc, vào sự nghiệp bảo vệ An ninh quốc gia và bảo đảm trật tự an toàn xã hội và ngày nay là sự nghiệp đẩy mạnh Công nghiệp hoá - Hiện đại hoá đất nước, hội nhập quốc tế.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Thông qua hoạt động hợp tác quốc tế về giáo dục và đào tạo giữa Nhà trường với các đơn vị chức năng thuộc Bộ Công an Cộng hòa Dân chủ nhân dân Lào và Bộ Nội vụ Vương quốc Campuchia đã góp phần xây dựng và vun đắp mối quan hệ truyền thống của ba nước láng giềng có chung đường biên giới trên bộ, trên biển.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 border-2 border-green-400 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-green-800 mb-3">Tầm nhìn tương lai</h4>
                  <p className="text-gray-800 leading-relaxed">
                    Dưới sự lãnh đạo trực tiếp của Đảng ủy và Ban Giám hiệu Nhà trường, phát huy tinh thần <strong className="text-green-700">"Tự lực, tự cường, sáng tạo"</strong> của cán bộ, chiến sỹ, học viên, với truyền thống vẻ vang <strong className="text-green-700">55 năm qua</strong>, Trường Cao đẳng An ninh nhân dân I sẽ viết tiếp những trang sử mới trong sự nghiệp đào tạo cán bộ của lực lượng Công an nhân dân, góp phần xây dựng lực lượng Công an nhân dân thực sự <strong className="text-green-700">trong sạch, vững mạnh, chính quy, tinh nhuệ, hiện đại</strong>, đáp ứng yêu cầu nhiệm vụ trong tình hình mới như <strong className="text-green-700">Nghị quyết 12-NQ/TW ngày 16/3/2022</strong> của Bộ Chính trị đã đề ra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-green-100">
        <div className="mb-8 text-center">
          <h2 className="text-green-800 mb-2">Một số hình ảnh đào tạo lái xe</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-green-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800">Chế độ Học Tập</h3>
              <p className="text-sm text-gray-600">Xem tất cả câu hỏi và đáp án đúng</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Ôn tập 500 câu hỏi Luật Giao thông Đường bộ với đáp án được làm nổi bật để ghi nhớ hiệu quả.
          </p>
          <div className="flex items-center space-x-2 text-green-600">
            <span className="text-sm">500 câu hỏi</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm">Có đáp án</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-green-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800">Chế độ Kiểm Tra</h3>
              <p className="text-sm text-gray-600">Làm bài kiểm tra và xem kết quả</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Thực hành làm bài thi thử với 500 câu hỏi, nhận kết quả chi tiết và xem lại các câu trả lời.
          </p>
          <div className="flex items-center space-x-2 text-blue-600">
            <span className="text-sm">Bài thi thử</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm">Kết quả chi tiết</span>
          </div>
        </div>
      </section>
    </div>
  );
}