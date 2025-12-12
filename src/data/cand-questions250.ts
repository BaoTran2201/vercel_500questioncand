export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  image?: string;
}

export const candQuestions250: Question[] = [
  
  {
    id: 1,
    question: "Trong Luật TTATGTĐB, “đường ưu tiên” được quy định như thế nào?",
    answers: [
      "Đường ưu tiên là đường chỉ dành cho một số loại phương tiện tham gia giao thông, được cắm biển báo hiệu đường ưu tiên.",
      "Đường ưu tiên là đường mà trên đó phương tiện tham gia giao thông đường bộ phải nhường đường cho các phương tiện đến từ hướng khác khi qua nơi giao nhau, có thể được cắm biển báo hiệu đường ưu tiên.",
      "Đường ưu tiên là đường mà trên đó phương tiện tham gia giao thông đường bộ được các phương tiện giao thông đường bộ đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên."
    ],
    correctAnswer: 2,
  },

  {
    id: 2,
    question: "Trong Luật TTATGTĐB, “làn đường” được quy định như thế nào?",
    answers: [
      "Là phần của đường bộ được sử dụng cho phương tiện giao thông đi lại.",
      "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ bề rộng cho xe chạy an toàn.",
      "Cả hai ý trên."
    ],
    correctAnswer: 1,
  },

  {
    id: 3,
    question: "Trong Luật TTATGTĐB, “người tham gia giao thông đường bộ”gồm những thành phần nào?",
    answers: [
      "Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.",
      "Người điều khiển, dẫn dắt vật nuôi trên đường bộ.",
      "Người đi bộ trên đường bộ.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 4,
    question: "Trong Luật TTATGTĐB, “người lái xe” được quy định như thế nào?",
    answers: [
      "Là người điều khiển xe cơ giới.",
      "Là người điều khiển xe thô sơ.",
      "Là người điều khiển xe máy chuyên dùng."
    ],
    correctAnswer: 0,
  },

  {
    id: 5,
    question: "Trong Luật TTATGTĐB, “người điều khiển giao thông đường bộ” gồm những thành phần nào?",
    answers: [
      "Người điều khiển phương tiện tham gia giao thông.",
      "Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ."
    ],
    correctAnswer: 1,
  },

  {
    id: 6,
    question: "Người tham gia giao thông ngoài việc phải chấp hành các quy định về trật tự, an toàn giao thông đường bộ và quy định khác của pháp luật có liên quan, còn có trách nhiệm gì?",
    answers: [
      "Giữ an toàn cho mình.",
      "Giữ an toàn cho người khác.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 7,
    question: "Mọi hành vi vi phạm pháp luật về trật tự, an toàn giao thông đường bộ phải được phát hiện, ngăn chặn kịp thời và phải bị xử lý nghiêm minh theo quy định của pháp luật là đúng hay sai?",
    answers: [
      "Sai.",
      "Đúng.",
      "Tùy trường hợp."
    ],
    correctAnswer: 1,
  },

  {
    id: 8,
    question: "Luật TTATGTĐB có nghiêm cấm người điều khiển phương tiện tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn không?",
    answers: [
      "Nghiêm cấm.",
      "Không nghiêm cấm.",
      "Cấm người điều khiển phương tiện giao thông mà trong máu có nồng độ cồn vượt quá 50 miligam/100 mililít máu hoặc vượt quá 0,25 miligam/1lít khí thở."
    ],
    correctAnswer: 0,
  },

  {
    id: 9,
    question: "Luật TTATGTĐB có nghiêm cấm người điều khiển phương tiện tham gia giao thông đường bộ mà trong cơ thể có chất ma túy không?",
    answers: [
      "Không nghiêm cấm.",
      "Nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp."
    ],
    correctAnswer: 1,
  },

  {
    id: 10,
    question: "Hành vi nào dưới đây bị nghiêm cấm trong Luật TTATGTĐB?",
    answers: [
      "Điều khiển phương tiện tham gia giao thông đường bộ lạng lách, đánh võng, rú ga liên tục.",
      "Đua xe, tổ chức đua xe, xúi giục, giúp sức, cổ vũ đua xe trái phép.",
      "Xúc phạm, đe dọa, cản trở, chống đối hoặc không chấp hành hiệu lệnh, hướng dẫn, yêu cầu kiểm tra, kiểm soát của người thi hành công vụ về bảo đảm trật tự, an toàn giao thông đường bộ.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 11,
    question: "Luật TTATGTĐB có nghiêm cấm người lái xe dùng tay cầm và sử dụng điện thoại khi điều khiển phương tiện tham gia giao thông đang di chuyển trên đường bộ không?",
    answers: [
      "Nghiêm cấm.",
      "Không nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp."
    ],
    correctAnswer: 0,
  },

  {
    id: 12,
    question: "Luật TTATGTĐB có nghiêm cấm hành vi giao xe mô tô, xe gắn máy cho người không đủ điều kiện theo quy định của pháp luật để điều khiển xe tham gia giao thông đường bộ không?",
    answers: [
      "Không nghiêm cấm.",
      "Nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp."
    ],
    correctAnswer: 1,
  },

  {
    id: 13,
    question: "Luật TTATGTĐB có nghiêm cấm hành vi cắt, hàn, tẩy xóa, đục sửa, đóng lại trái phép số khung, số động cơ của xe mô tô, xe gắn máy không?",
    answers: [
      "Không nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp.",
      "Nghiêm cấm."
    ],
    correctAnswer: 2,
  },

  {
    id: 14,
    question: "Luật TTATGTĐB có nghiêm cấm hành vi lắp đặt, sử dụng thiết bị âm thanh, ánh sáng trên xe cơ giới gây mất trật tự, an toàn giao thông đường bộ không?",
    answers: [
      "Nghiêm cấm.",
      "Không nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp."
    ],
    correctAnswer: 0,
  },

  {
    id: 15,
    question: "Luật TTATGTĐB có nghiêm cấm hành vi sản xuất, sử dụng, mua, bán trái phép biển số xe không?",
    answers: [
      "Không nghiêm cấm.",
      "Nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp."
    ],
    correctAnswer: 1,
  },

  {
    id: 16,
    question: "Trong Luật TTATGTĐB hành vi nào dưới đây bị nghiêm cấm?",
    answers: [
      "Sản xuất, sử dụng, mua, bán trái phép biển số xe.",
      "Điều khiển xe cơ giới gắn biển số xe không do cơ quan nhà nước có thẩm quyền cấp, gắn biển số xe không đúng vị trí.",
      "Bẻ cong, che lấp biển số; làm thay đổi chữ, số, màu sắc, hình dạng, kíchthước của biển số xe.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 17,
    question: "Luật TTATGTĐB có nghiêm cấm hành vi bẻ cong, che lấp biển số xe, làm thay đổi chữ, số của biển số xe không?",
    answers: [
      "Nghiêm cấm.",
      "Không nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp."
    ],
    correctAnswer: 0,
  },

  {
    id: 18,
    question: "Luật TTATGTĐB nghiêm cấm hành vi nào dưới đây?",
    answers: [
      "Lắp đặt, sử dụng thiết bị phát tín hiệu ưu tiên không đúng quy định của pháp luật.",
      "Sử dụng quyền của xe ưu tiên khi không thực hiện nhiệm vụ theo quy định của pháp luật.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 19,
    question: "Hành vi nào dưới đây của người lái xe bị nghiêm cấm khi bị phát hiện vi phạm pháp luật về TTATGTĐB?",
    answers: [
      "Không khai báo, khai báo gian dối.",
      "Cung cấp thông tin, tài liệu không đúng sự thật để trốn tránh trách nhiệm.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 20,
    question: "Luật TTATGTĐB nghiêm cấm các hành vi nào dưới đây?",
    answers: [
      "Bỏ trốn sau khi gây tai nạn giao thông đường bộ để trốn tránh trách nhiệm.",
      "Khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông đường bộ.",
      "Lợi dụng việc xảy ra tai nạn giao thông đường bộ để hành hung, đe dọa, xúi giục, gây sức ép, làm mất trật tự, cản trở việc xử lý tai nạn giao thông đường bộ.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 21,
    question: "Người tham gia giao thông đường bộ phải chấp hành những quy tắc nào dưới đây?",
    answers: [
      "Phải đi bên phải theo chiều đi của mình, đi đúng làn đường và phải chấp hành hệ thống báo hiệu đường bộ.",
      "Phải đi bên phải theo chiều đi của mình, đi đúng làn đường, phần đường quy định, chấp hành báo hiệu đường bộ và các quy tắc giao thông đường bộ khác.",
      "Phải đi bên phải theo chiều đi của mình và phải chấp hành hệ thống báo hiệu đường bộ."
    ],
    correctAnswer: 1,
  },

  {
    id: 22,
    question: "Khi hiệu lệnh của người điều khiển giao thông trái với tín hiệu đèn giao thông, biển báo hiệu đường bộ, người tham gia giao thông đường bộ phải chấp hành như thế nào?",
    answers: [
      "Hiệu lệnh của người điều khiển giao thông.",
      "Tín hiệu đèn giao thông.",
      "Biển báo hiệu đường bộ."
    ],
    correctAnswer: 0,
  },

  {
    id: 23,
    question: "Khi người điều khiển giao thông ra hiệu lệnh: “tay bên phải giơ thẳng đứng”, người tham gia giao thông đường bộ phải thực hiện như thế nào?",
    answers: [
      "Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi.",
      "Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông được đi thẳng; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi thẳng và rẽ phải.",
      "Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại."
    ],
    correctAnswer: 2,
  },

  {
    id: 24,
    question: "Khi người điều khiển giao thông ra hiệu lệnh: “hai tay hoặc một tay dang ngang”, người tham gia giao thông đường bộ phải thực hiện như thế nào?",
    answers: [
      "Người tham gia giao thông đường bộ ở phía trước và ở phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông đường bộ ở phía bên phải và bên trái người điều khiển giao thông được đi.",
      "Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông được rẽ trái; người tham gia giao thông ở phía bên phải và bên trái của người điều khiển giao thông được đi thẳng và rẽ phải."
    ],
    correctAnswer: 0,
  },

  {
    id: 25,
    question: "Khi người điều khiển giao thông ra hiệu lệnh: “tay phải giơ về phía trước”, người tham gia giao thông đường bộ phải thực hiện như thế nào?",
    answers: [
      "Người tham gia giao thông đường bộ ở phía sau và bên phải người điều khiển giao thông phải dừng lại; người đi bộ qua đường phải đi sau lưng người điều khiển giao thông.",
      "Người tham gia giao thông đường bộ ở phía bên trái người điều khiển giao thông được đi tất cả các hướng.",
      "Người tham gia giao thông đường bộ ở phía trước người điều khiển giao thông được rẽ phải.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 26,
    question: "Tại nơi đường giao nhau khi đèn điều khiển giao thông có tín hiệu màu vàng, người tham gia giao thông đường bộ phải thực hiện thế nào?",
    answers: [
      "Người điều khiển phương tiện nhanh chóng cho xe vượt qua vạch dừng để đi qua đường giao nhau.",
      "Trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ và cho xe vượt qua vạch dừng để đi qua đường giao nhau.",
      "Phải dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác."
    ],
    correctAnswer: 2,
  },

  {
    id: 27,
    question: "Luật TTATGTĐB quy định có bao nhiêu nhóm biển báo hiệu đường bộ?",
    answers: [
      "Ba nhóm: Biển báo cấm, biển báo nguy hiểm và biển hiệu lệnh.",
      "Bốn nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển phụ.",
      "Năm nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ."
    ],
    correctAnswer: 2,
  },

  {
    id: 28,
    question: "Tác dụng của biển báo cấm?",
    answers: [
      "Để biểu thị các điều cấm. Người tham gia giao thông đường bộ phải chấp hành những điều cấm mà biển đã báo.",
      "Để biểu thị các điều cấm. Người tham gia giao thông có thể không phải chấp hành những điều cấm mà biển đã báo."
    ],
    correctAnswer: 0,
  },

  {
    id: 29,
    question: "Tác dụng của biển báo nguy hiểm?",
    answers: [
      "Dùng để báo cho người tham gia giao thông đường bộ biết trước tính chất của sự nguy hiểm hoặc các điều cần chú ý phòng ngừa trên tuyến đường.",
      "Khi gặp biển báo nguy hiểm người tham gia giao thông đường bộ phải giảm tốc độ đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng xử lý những tình huống có thể xảy ra để phòng ngừa tai nạn.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 30,
    question: "Tác dụng của biển hiệu lệnh?",
    answers: [
      "Là biển báo cho người tham gia giao thông đường bộ biết hiệu lệnh phải thi hành.",
      "Là biển báo cho người tham gia giao thông đường bộ biết hiệu lệnh có thể phải thi hành."
    ],
    correctAnswer: 0,
  },

  {
    id: 31,
    question: "Trong Luật TTATGTĐB, “vạch kẻ đường” được quy định như thế nào?",
    answers: [
      "Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng đỗ trên đường.",
      "Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
      "Vạch kẻ đường là vạch dùng để phân chia dòng phương tiện hai hướng ngược chiều nhau trên các đường có hai hoặc ba làn xe chạy.",
      "Cả ba ý trên."
    ],
    correctAnswer: 1,
  },

  {
    id: 32,
    question: "Khi ở một vị trí vừa có biển báo hiệu đặt cố định vừa có biển báo hiệu tạm thời mà hai biển có ý nghĩa khác nhau, người tham gia giao thông đường bộ phải chấp hành hiệu lệnh của biển báo nào?",
    answers: [
      "Biển báo hiệu cố định.",
      "Biển báo hiệu tạm thời."
    ],
    correctAnswer: 1,
  },

  {
    id: 33,
    question: "Tại nơi có vạch kẻ đường hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường, người điều khiển phương tiện tham gia giao thông đường bộ phải thực hiện như thế nào?",
    answers: [
      "Giảm tốc độ và nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường đảm bảo an toàn.",
      "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường.",
      "Quan sát, tăng tốc độ và điều khiển phương tiện nhanh chóng đi qua."
    ],
    correctAnswer: 1,
  },

  {
    id: 34,
    question: "Trường hợp nào dưới đây người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn?",
    answers: [
      "Có biển báo cấm vượt.",
      "Có biển cấm dừng xe, đỗ xe.",
      "Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường.",
      "Có biển báo cấm quay đầu xe."
    ],
    correctAnswer: 2,
  },

  {
    id: 35,
    question: "Trường hợp nào dưới đây người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn?",
    answers: [
      "Gặp xe ưu tiên.",
      "Đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
      "Chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 36,
    question: "Trường hợp nào dưới đây người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn?",
    answers: [
      "Khu vực đang tổ chức kiểm soát giao thông đường bộ.",
      "Có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
      "Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 37,
    question: "Khi qua khu vực đông dân cư, chợ, khu vực đang thi công trên đường bộ người điều khiển phương tiện tham gia giao thông đường bộ phải làm gì?",
    answers: [
      "Phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn.",
      "Phải quan sát, giảm tốc độ và dừng lại để bảo đảm an toàn."
    ],
    correctAnswer: 0,
  },

  {
    id: 38,
    question: "Luật TTATGTĐB quy định phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi về bên phải theo chiều đi củamình có đúng không?",
    answers: [
      "Đúng.",
      "Sai."
    ],
    correctAnswer: 0,
  },

  {
    id: 39,
    question: "Người điều khiển xe thô sơ, xe cơ giới và xe máy chuyên dùngphải đi như thế nào trên đường một chiều có vạch kẻ phân làn đường?",
    answers: [
      "Xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
      "Xe thô sơ phải đi trên làn đường bên trái trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
      "Xe thô sơ đi trên làn đường phù hợp không gây cản trở giao thông, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải."
    ],
    correctAnswer: 0,
  },

  {
    id: 40,
    question: "Luật TTATGTĐB quy định vượt bên phải xe khác trong trường hợp nào?",
    answers: [
      "Khi xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái.",
      "Khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên tráiđược.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 41,
    question: "Luật TTATGTĐB quy định chỉ được vượt xe khi nào?",
    answers: [
      "Không có chướng ngại vật ở phía trước, không có xe chạy ngược chiềutrong đoạn đường định vượt.",
      "Xe chạy trước không có tín hiệu vượt xe khác, đã có tín hiệu rẽ phải vàtránh về bên phải.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 42,
    question: "Người lái xe có được vượt xe khác ở phần đường dành cho người đi bộ qua đường không?",
    answers: [
      "Có được vượt.",
      "Không được vượt."
    ],
    correctAnswer: 1,
  },

  {
    id: 43,
    question: "Trước khi chuyển hướng, người lái xe phải làm gì?",
    answers: [
      "Quan sát, bảo đảm khoảng cách an toàn với xe phía sau, giảm tốc độ và có tín hiệu báo hướng rẽ, chuyển dần sang làn gần nhất với hướng rẽ.",
      "Tín hiệu báo hướng rẽ phải sử dụng liên tục trong quá trình chuyểnhướng.",
      "Bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 44,
    question: "Khi chuyển hướng, người lái xe phải làm gì?",
    answers: [
      "Phải giảm tốc độ và có tín hiệu báo hướng rẽ.",
      "Phải nhường quyền đi trước cho người đi bộ, người đi xe đạp đang đi trênphần đường dành riêng cho họ.",
      "Phải nhường đường cho người đi bộ, xe thô sơ, xe đi ngược chiều và chỉchuyển hướng khi không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.",
      "Cả ba ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 45,
    question: "Người lái xe tham gia giao thông đường bộ phải bật đèn chiếu sáng phía trước khi nào?",
    answers: [
      "Khi có sương mù, khói, bụi, trời mưa, thời tiết xấu làm hạn chế tầm nhìn.",
      "Trong thời gian từ 18 giờ ngày hôm trước đến 06 giờ ngày hôm sau.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 46,
    question: "Người lái xe phải tắt đèn chiếu xa, bật đèn chiếu gần trong trường hợp nào dưới đây?",
    answers: [
      "Khi đi trên các đoạn đường qua khu đông dân cư có hệ thống chiếu sáng đang hoạt động.",
      "Khi gặp xe đi ngược chiều, trừ trường hợp dải phân cách có khả năng chống chói",
      "Khi gặp người đi bộ qua đường; khi chuyển hướng xe tại nơi đường giao nhau.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 47,
    question: "Trường hợp nào dưới đây người lái xe được phép sử dụng tín hiệu còi?",
    answers: [
      "Báo hiệu cho người tham gia giao thông đường bộ khi xuất hiện tình huống có thể mất an toàn giao thông.",
      "Báo hiệu chuẩn bị vượt xe.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 48,
    question: "Hành vi nào dưới đây của người điều khiển phương tiện tham gia giao thông đường bộ bị cấm?",
    answers: [
      "Sử dụng còi liên tục.",
      "Sử dụng còi có âm lượng không đúng quy định.",
      "Sử dụng còi trong thời gian từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh, trừ xe ưu tiên.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 49,
    question: "Tại nơi đường giao nhau giữa đường không ưu tiên với đường ưu tiên hoặc giữa đường nhánh với đường chính, người lái xe đi từ đường không ưu tiên hoặc đường nhánh phải nhường đường như thế nào?",
    answers: [
      "Phải nhường đường cho xe đi đến từ bên phải.",
      "Phải nhường đường cho xe đi đến từ bên trái.",
      "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới."
    ],
    correctAnswer: 2,
  },

  {
    id: 50,
    question: "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến,người điều khiển phương tiện tham gia giao thông đường bộ phải nhường đường như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Phải nhường đường cho xe đi đến từ bên phải.",
      "Phải nhường đường cho xe đi đến từ bên trái."
    ],
    correctAnswer: 0,
  },

  {
    id: 51,
    question: "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện tham gia giao thông đường bộ phải nhường đường như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Phải nhường đường cho xe đi đến từ bên phải.",
      "Phải nhường đường cho xe đi đến từ bên trái."
    ],
    correctAnswer: 1,
  },

  {
    id: 52,
    question: "Thứ tự xuống phà như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Xe thô sơ, người đi bộ xuống phà trước, xe cơ giới, xe máy chuyên dùngxuống phà sau.",
      "Xe cơ giới, xe máy chuyên dùng xuống phà trước, xe thô sơ, người đi bộ xuống phà sau;",
      "Xe cơ giới, xe thô sơ xuống phà trước, xe máy chuyên dùng, người đi bộxuống phà sau."
    ],
    correctAnswer: 1,
  },

  {
    id: 53,
    question: "Tại nơi đường bộ giao nhau cùng mức với đường sắt không có người gác, chắn đường bộ, chuông, đèn tín hiệu, người tham gia giao thông đường bộ phải thực hiện như thế nào?",
    answers: [
      "Phải dừng lại về bên phải đường của mình, trước vạch dừng xe và quan sát hai phía, khi không có phương tiện đường sắt tới mới được đi qua.",
      "Nếu thấy có phương tiện đường sắt đang đi tới thì phải dừng lại và giữkhoảng cách tối thiểu 5 mét tính từ ray gần nhất và chỉ khi phương tiện đường sắtđã đi qua mới được đi.",
      "Cả hai ý trên."
    ],
    correctAnswer: 0,
  },

  {
    id: 54,
    question: "Trường hợp nào dưới đây không được đi vào đường cao tốc?",
    answers: [
      "Người đi bộ, xe thô sơ, xe gắn máy, xe mô tô, xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn tốc độ tối thiểu quy định đối với đường cao tốc.",
      "Xe máy chuyên dùng có tốc độ thiết kế lớn hơn tốc độ tối thiểu quy địnhđối với đường cao tốc.",
      "Xe ô tô con, xe ô tô tải, xe ô tô khách."
    ],
    correctAnswer: 0,
  },

  {
    id: 55,
    question: "Luật TTATGTĐB có quy định người lái xe khi tham gia giao thông trong hầm đường bộ phải bật đèn chiếu gần không?",
    answers: [
      "Bắt buộc.",
      "Không bắt buộc.",
      "Tùy trường hợp cụ thể."
    ],
    correctAnswer: 0,
  },

  {
    id: 56,
    question: "Khi gặp xe ưu tiên phát tín hiệu, người tham gia giao thông đường bộ phải tuân theo quy tắc giao thông nào?",
    answers: [
      "Phải dừng lại nhường đường cho xe ưu tiên.",
      "Phải giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.",
      "Phải quan sát, đi sát lề đường bên phải."
    ],
    correctAnswer: 1,
  },

  {
    id: 57,
    question: "Người lái xe mô tô hai bánh, xe gắn máy được chở tối đa hai người trong những trường hợp nào?",
    answers: [
      "Chở người bệnh đi cấp cứu; trẻ em dưới 12 tuổi.",
      "Áp giải người có hành vi vi phạm pháp luật.",
      "Người già yếu hoặc người khuyết tật.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 58,
    question: "Người lái xe mô tô hai bánh khi tham gia giao thông đường bộ không được thực hiện hành vi nào dưới đây?",
    answers: [
      "Sử dụng ô, thiết bị âm thanh, trừ thiết bị trợ thính.",
      "Đi xe dàn hàng ngang; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Ngồi về một bên điều khiển xe; đứng, nằm trên xe điều khiển xe; thay người lái xe khi xe đang chạy.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 59,
    question: "Chiều cao xếp hàng trên xe mô tô, xe gắn máy được quy định cụthể như thế nào?",
    answers: [
      "Không được xếp hàng hóa quá chiều rộng giá đèo hàng về mỗi bên 0,5mét, vượt quá về phía sau giá đèo hàng 0,5 mét theo thiết kế của nhà sản xuất; chiều cao xếp hàng hóa tính từ mặt đường xe chạy không quá 02 mét..",
      "Không được xếp hàng hóa quá chiều rộng giá đèo hàng về mỗi bên 0,3 mét, vượt quá về phía sau giá đèo hàng 0,5 mét theo thiết kế của nhà sản xuất; chiều cao xếp hàng hóa tính từ mặt đường xe chạy không quá 02 mét."
    ],
    correctAnswer: 1,
  },

  {
    id: 60,
    question: "Xe cơ giới tham gia giao thông đường bộ phải đáp ứng các điều kiện gì?",
    answers: [
      "Được cấp chứng nhận đăng ký xe và gắn biển số xe theo quy định của pháp luật.",
      "Bảo đảm chất lượng an toàn kỹ thuật và bảo vệ môi trường theo quy địnhcủa pháp luật.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 61,
    question: "Xe cơ giới phải đáp ứng quy định nào thì được cơ quan nhà nước có thẩm quyền cấp đăng ký và biển số?",
    answers: [
      "Chứng nhận nguồn gốc xe.",
      "Chứng nhận quyền sở hữu hợp pháp.",
      "Chứng từ hoàn thành nghĩa vụ tài chính.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 62,
    question: "Cá nhân, tổ chức khi chuyển quyền sở hữu xe có phải làm thủtục thu hồi chứng nhận đăng ký xe, biển số xe không?",
    answers: [
      "Phải thực hiện.",
      "Không phải thực hiện."
    ],
    correctAnswer: 0,
  },

  {
    id: 63,
    question: "Trách nhiệm của cá nhân đứng tên trong giấy chứng nhận đăngký xe như thế nào khi chưa thực hiện thu hồi chứng nhận đăng ký xe, biển số xe khi đã chuyển nhượng, trao đổi, tặng, cho xe?",
    answers: [
      "Tiếp tục chịu trách nhiệm của chủ xe.",
      "Không chịu trách nhiệm."
    ],
    correctAnswer: 0,
  },

  {
    id: 64,
    question: "Cá nhân vi phạm pháp luật về trật tự, an toàn giao thông đường bộ mà chưa thực hiện xong yêu cầu của cơ quan nhà nước có thẩm quyền về giải quyết vụ việc vi phạm hành chính có được giải quyết việc đăng ký phương tiện vi phạm không?",
    answers: [
      "Chưa được giải quyết.",
      "Được giải quyết.",
      "Tùy trường hợp cụ thể."
    ],
    correctAnswer: 0,
  },

  {
    id: 65,
    question: "Người lái xe khi điều khiển phương tiện tham gia giao thông đường bộ phải mang theo các loại giấy tờ gì?",
    answers: [
      "Chứng nhận đăng ký xe hoặc bản sao Chứng nhận đăng ký xe có chứng thực kèm bản gốc giấy tờ xác nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài còn hiệu lực trong trường hợp xe đang được thế chấp tại tổ chức tín dụng, chi nhánh ngân hàng nước ngoài.",
      "Giấy phép lái xe phù hợp với loại xe đang điều khiển; chứng nhận bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
      "Chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường đối với xe cơ giới theo quy định của pháp luật.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 66,
    question: "Người có giấy phép lái xe hạng A được điều khiển loại xe nào?",
    answers: [
      "Xe mô tô hai bánh có dung tích xi-lanh trên 125 cm3 hoặc có công suất động cơ điện trên 11 kW và các loại xe quy định cho giấy phép lái xe hạng A1.",
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô ba bánh và các loại xe quy định cho giấy phép lái xe hạng A1."
    ],
    correctAnswer: 0,
  },

  {
    id: 67,
    question: "Người có giấy phép lái xe hạng B1 được điều khiển loại xe nào?",
    answers: [
      "Các loại xe ô tô quy định cho giấy phép lái xe hạng B có kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg.",
      "Xe mô tô ba bánh và các loại xe quy định cho giấy phép lái xe hạng A1."
    ],
    correctAnswer: 2,
  },

  {
    id: 68,
    question: "Giấy phép lái xe hạng nào dưới đây có thời hạn?",
    answers: [
      "Hạng A1. "," Hạng B1.",
      "Hạng B. "," Hạng A."
    ],
    correctAnswer: 2,
  },

  {
    id: 69,
    question: "Giấy phép lái xe không còn hiệu lực trong trường hợp nào?",
    answers: [
      "Giấy phép lái xe hết thời hạn sử dụng; giấy phép lái xe bị thu hồi theo quy định.",
      "Giấy phép lái bị trừ điểm.",
      "Giấy phép lái bị trừ điểm hết điểm và chưa phục hồi điểm giấy phép lái xe.",
      "Cả ba ý trên."
    ],
    correctAnswer: 0,
  },

  {
    id: 70,
    question: "Người có giấy phép lái xe bị trừ hết điểm có được phép điều khiển phương tiện tham gia giao thông đường bộ không?",
    answers: [
      "Không được phép.",
      "Được phép.",
      "Tùy trường hợp."
    ],
    correctAnswer: 0,
  },

  {
    id: 71,
    question: "Người có giấy phép lái xe đã bị trừ hết điểm phải làm gì để phục hồi điểm giấy phép lái xe?",
    answers: [
      "Trong thời gian 12 tháng kể từ ngày bị trừ hết điểm không vi phạm pháp luật TTATGTĐB được phục hồi đủ 12 điểm.",
      "Sau thời hạn ít nhất là 06 tháng kể từ ngày bị trừ hết điểm, người có giấy phép lái xe được tham gia kiểm tra nội dung kiến thức pháp luật về trật tự, an toàn giao thông đường bộ và có kết quả đạt yêu cầu thì được phục hồi đủ 12 điểm.",
      "Cả hai ý trên."
    ],
    correctAnswer: 1,
  },

  {
    id: 72,
    question: "Theo Luật TTATGTĐB, người đủ bao nhiêu tuổi trở lên được cấp giấy phép lái xe hạng A1, A, B1?",
    answers: [
      "16 tuổi. ",
       "18 tuổi. ",
        "20 tuổi."
    ],
    correctAnswer: 1,
  },

  {
    id: 73,
    question: "Người vi phạm trật tự, an toàn giao thông đường bộ chưa thực hiện xong yêu cầu của cơ quan nhà nước có thẩm quyền về giải quyết vụ việc vi phạm hành chính trong lĩnh vực trật tự, an toàn giao thông đường bộ có được cấp, đổi, cấp lại giấy phép lái xe không?",
    answers: [
      "Chưa được cấp, đổi, cấp lại giấy phép lái xe.",
      "Có được cấp, đổi, cấp lại giấy phép lái xe.",
      "Tùy trường hợp."
    ],
    correctAnswer: 0,
  },

  {
    id: 74,
    question: "Luật TTATGTĐB quy định trường hợp nào dưới đây bị thu hồi giấy phép lái xe?",
    answers: [
      "Người được cấp giấy phép lái xe không đủ điều kiện sức khỏe theo kết luận của cơ sở khám bệnh, chữa bệnh đối với từng hạng giấy phép lái xe.",
      "Giấy phép lái xe được cấp sai quy định.",
      "Giấy phép lái xe đã quá thời hạn tạm giữ người vi phạm không đến nhận mà không có lý do chính đáng.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 75,
    question: "Luật TTATGTĐB quy định người lái xe gây tai nạn giao thông đường bộ được rời khỏi hiện trường tai nạn trong trường hợp nào?",
    answers: [
      "Đi cấp cứu, đưa người bị nạn đi cấp cứu.",
      "Xét thấy bị đe dọa đến tính mạng, sức khỏe nhưng phải trình báo ngay cơ quan Công an, Uỷ ban nhân dân nơi gần nhất.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 76,
    question: "Người lái xe khi tham gia giao thông trong hầm đường bộ phảituân thủ quy tắc nào dưới đây?",
    answers: [
      "Phải bật đèn chiếu gần.",
      "Không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹthuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn, nhanh chóng báo cho cơ quan Cảnh sát giao thông thực hiện nhiệmvụ bảo đảm trật tự, an toàn giao thông trên tuyến hoặc cơ quan quản lý hầm đường bộ.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 77,
    question: "Tại nơi đường bộ giao nhau cùng mức với đường sắt, quyền ưu tiên thuộc về phương tiện nào?",
    answers: [
      "Xe nào bên phải không bị vướng thì được quyền đi trước.",
      "Xe nào ra tín hiệu xin đường trước thì xe được đi trước.",
      "Quyền ưu tiên thuộc về các phương tiện đường sắt."
    ],
    correctAnswer: 2,
  },

  {
    id: 78,
    question: "Hành vi người điều khiển xe mô tô trên đường mà trong máu hoặc hơi thở có nồng độ cồn chưa vượt quá 80 miligam/100 mililit máu hoặc chưa vượt quá 0,4 miligam/1 lít khí thở có bị trừ điểm giấy phép lái xe không?",
    answers: [
      "Không bị trừ điểm.",
      "Bị trừ điểm.",
      "Bị trừ điểm tùy trường hợp."
    ],
    correctAnswer: 1,
  },

  {
    id: 79,
    question: "Hành vi điều khiển xe gắn biển số không đúng với chứng nhận đăng ký xe hoặc gắn biển số không do cơ quan có thẩm quyền cấp có bị tịch thu biển số không?",
    answers: [
      "Bị tịch thu biển số.",
      "Không bị tịch thu biển số."
    ],
    correctAnswer: 0,
  },

  {
    id: 80,
    question: "Hành vi điều khiển xe mô tô, sử dụng còi không đúng tiêu chuẩn kỹ thuật, ngoài bị phạt tiền còn bị xử lý như thế nào?",
    answers: [
      "Bị trừ điểm giấy phép lái xe.",
      "Buộc thay thế thiết bị đủ tiêu chuẩn an toàn kỹ thuật hoặc khôi phục tính năng kỹ thuật của thiết bị theo quy định.",
      "Cả hai ý trên."
    ],
    correctAnswer: 1,
  },

  {
    id: 81,
    question: "Hành vi không chấp hành yêu cầu kiểm tra về chất ma túy của người thi hành công vụ có bị tước quyền sử dụng giấy phép lái xe không?",
    answers: [
      "Không bị tước.",
      "Bị tước.",
      "Bị tước tùy trường hợp."
    ],
    correctAnswer: 1,
  },

  {
    id: 82,
    question: "Hành vi không chấp hành yêu cầu kiểm tra về nồng độ cồn của người thi hành công vụ có bị tước quyền sử dụng giấy phép lái xe không?",
    answers: [
      "Không bị tước.",
      "Bị tước.",
      "Bị tước tùy trường hợp."
    ],
    correctAnswer: 1,
  },

  {
    id: 83,
    question: "Hành vi cắt, hàn, tẩy xoá, đục sửa, đóng lại trái phép số máy, số khung xe cơ giới có bị tịch thu xe không?",
    answers: [
      "Không bị tịch thu.",
      "Bị tịch thu."
    ],
    correctAnswer: 1,
  },

  {
    id: 84,
    question: "Hành vi người điều khiển xe mô tô trên đường mà trong máu hoặc hơi thở có nồng độ cồn nhưng chưa vượt quá 50 miligam/100 mililit máu hoặc chưa vượt quá 0,25 miligam/1 lít khí thở bị trừ bao nhiêu điểm giấy phép lái xe?",
    answers: [
      "Bị trừ 06 điểm.",
      "Bị trừ 04 điểm."
    ],
    correctAnswer: 1,
  },

  {
    id: 85,
    question: "Trong khu vực đông dân cư, tốc độ tối đa cho phép đối với xe môtô tham gia giao thông trên đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên là bao nhiêu?",
    answers: [
      "30 km/h. ",
      "50 km/h.",
      "40 km/h.",
      "60 km/h."
    ],
    correctAnswer: 3,
  },

  {
    id: 86,
    question: "Trong khu vực đông dân cư, tốc độ tối đa cho phép đối với xe môtô tham gia giao thông trên đường hai chiều; đường một chiều có một làn xe cơ giới là bao nhiêu?",
    answers: [
      "30 km/h. ",
      " 50 km/h.",
      "40 km/h. ",
      " 60 km/h."
    ],
    correctAnswer: 1,
  },

  {
    id: 87,
    question: "Ngoài khu vực đông dân cư, tốc độ tối đa cho phép đối với xe môtô tham gia giao thông trên đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên là bao nhiêu?",
    answers: [
      "50 km/h.",
      "60 km/h.",
      "70 km/h.",
      "80 km/h."
    ],
    correctAnswer: 2,
  },

  {
    id: 88,
    question: "Ngoài khu vực đông dân cư, tốc độ tối đa cho phép đối với xe môtô tham gia giao thông trên đường hai chiều; đường một chiều có một làn xe cơ giới là bao nhiêu?",
    answers: [
      "70 km/h.",
      "60 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    correctAnswer: 1,
  },

  {
    id: 89,
    question: "Khi tham gia giao thông trên đường bộ, mặt đường khô ráo,không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, người điều khiển xe cơ giới chạy với tốc độ 60 km/hphải giữ khoảng cách an toàn tối thiểu đối với xe chạy liền trước xe của mình là bao nhiêu?",
    answers: [
      "35 m. ",
      " 40 m. ",
      " 50 m.",
      "55 m."
    ],
    correctAnswer: 0,
  },

  {
    id: 90,
    question: "Hành vi giao xe hoặc để cho người không đủ điều kiện theo quy định của Luật TTATGTĐB điều khiển tham gia thông, có bị xử phạt không?",
    answers: [
      "Không bị xử phạt. ",
      " Bị xử phạt.",
      "Bị xử phạt tùy trường hợp."
    ],
    correctAnswer: 1,
  },

  {
    id: 91,
    question: "Biển nào báo hiệu đường dành cho xe thô sơ?",
    answers: [
      "Biển 1. ", "Biển 2. ", "Biển 3."
    ],
        image: "/images250/image250_91.png",
    correctAnswer: 0,
  },

  {
    id: 92,
    question: "Biển nào báo cấm tất cả các loại phương tiện đi lại cả hai hướng trừ các xe được ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
    answers: [
      "Biển 1. ", " Biển 2.", " Cả hai biển."
    ],
    image: "/images250/image250_92.png",
    correctAnswer: 0,
  },

  {
    id: 93,
    question: "Biển nào cấm đi ngược chiều?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Cả ba biển."
    ],
    image: "/images250/image250_93.png",
    correctAnswer: 1,
  },

  {
    id: 94,
    question: "Biển nào xe được phép quay đầu?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3. ", " Biển 1 và 2."
    ],
    image: "/images250/image250_94.png",
    correctAnswer: 3,
  },

  {
    id: 95,
    question: "Biển nào cấm quay đầu xe?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Cả hai biển."
    ],
    correctAnswer: 1,
    image: "/images250/image250_95.png",
  },

  {
    id: 96,
    question: "Ba biển này có ý nghĩa như thế nào?",
    answers: [
      "Cấm các loại xe ở biển phụ đi vào.",
      "Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ."
    ],
    image: "/images250/image250_96-97.png",
    correctAnswer: 0,
  },

  {
    id: 97,
    question: "Biển nào xe mô tô hai bánh được đi vào?",
    answers: [
      "Biển 1 và 2. ", " Biển 1 và 3. ", " Biển 2 và 3."
    ],
    image: "/images250/image250_96-97.png",
    correctAnswer: 1,
  },

  {
    id: 98,
    question: "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
    answers: [
      "Không biển nào. ", " Biển 2. ", " Biển 2 và 3."
    ],
    correctAnswer: 2,
        image: "/images250/image250_98-99.png",
  },

  {
    id: 99,
    question: "Biển nào báo hiệu cấm xe mô tô ba bánh đi vào?",
    answers: [
      "Biển 1. ", " Biển 1 và 2. ", " Biển 2 và 3."
    ],
    image: "/images250/image250_98-99.png",
    correctAnswer: 1,
  },

  {
    id: 100,
    question: "Biển nào cấm người đi bộ?",
    answers: [
      "Biển 1. ", " Biển 1 và 3. ", " Biển 2. ", " Biển 2 và 3."
    ],
    correctAnswer: 2,
    image: "/images250/question_100.jpeg",
  },

  {
    id: 101,
    question: "Trong các biển dưới đây, biển nào báo đường cấm xe ba bánh loạicó động cơ?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3. ", " Biển 2 và 3."
    ],
    image: "/images250/image250_101.png",
    correctAnswer: 3,
  },

  {
    id: 102,
    question: "Biển nào báo hiệu hết hạn chế tốc độ tối đa trong khu vực?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3."
    ],
    image: "/images250/image250_102.png",
    correctAnswer: 2,
  },

  {
    id: 103,
    question: "Biển nào báo hiệu hết tất cả các lệnh cấm?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3. ", " Cả ba biển."
    ],
    image: "/images250/image250_103.png",
    correctAnswer: 1,
  },

  {
    id: 104,
    question: "Biển này có ý nghĩa gì?",
    answers: [
      "Biển ghép tốc độ tối đa cho phép trên từng làn đường.",
      "Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường.",
      "Biển hết hạn chế tốc độ tối đa cho phép theo biển ghép."
    ],
    correctAnswer: 1,
    image: "/images250/image250_104.png",
  },

  {
    id: 105,
    question: "Khi gặp biển này, các loại phương tiện vận tải có phải dừng lại để làm thủ tục kiểm tra, kiểm soát theo quy định không?",
    answers: [
      "Không phải dừng. ", " Phải dừng."
    ],
    correctAnswer: 1,
    image: "/images250/image250_105.png",
  },

  {
    id: 106,
    question: "Biển nào báo hiệu chú ý chướng ngại vật?",
    answers: [
      "Biển 1. ", " Biển 2 và 3. ", " Cả ba biển."
    ],
    image: "/images250/image250_106.png",
    correctAnswer: 1,
  },

  {
    id: 107,
    question: "Biển nào báo hiệu đoạn đường hay xảy ra tai nạn?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 2 và 3."
    ],
    image: "/images250/image250_107.png",
    correctAnswer: 1,
  },

  {
    id: 108,
    question: "Biển nào báo hiệu đường hầm?",
    answers: [
      "Cả ba biển. ", " Biển 2 và 3. ", " Biển 2."
    ],
    correctAnswer: 2,
    image: "/images250/image250_108.png",
  },

  {
    id: 109,
    question: "Biển nào báo hiệu đường đôi?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3."
    ],
    image: "/images250/image250_109.png",
    correctAnswer: 1,
  },

  {
    id: 110,
    question: "Biển nào báo hiệu đường hai chiều?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3."
    ],
    image: "/images250/image250_110.png",
    correctAnswer: 0,
  },

  {
    id: 111,
    question: "Biển nào báo hiệu giao nhau với đường không ưu tiên?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3."
    ],
    image: "/images250/image250_111.png",
    correctAnswer: 1,
  },

  {
    id: 112,
    question: "Biển nào báo trước sắp đến nơi giao nhau cùng mức của cáctuyến đường cùng cấp?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3."
    ],
    image: "/images250/image250_111.png",
    correctAnswer: 0,
  },

  {
    id: 113,
    question: "Khi gặp biển nào, người lái xe phải giảm tốc độ, chú ý xe đingược chiều, xe đi ở chiều đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
    answers: [
      "Biển 1. ", " Biển 2 và 3. ", " Cả ba biển."
    ],
    correctAnswer: 2,
    image: "/images250/image250_113.png",
  },

  {
    id: 114,
    question: "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
    answers: [
      "Biển 1 và 2. ", " Biển 1. ", " Cả ba biển."
    ],
    image: "/images250/image250_114.png",
    correctAnswer: 0,
  },

  {
    id: 115,
    question: "Biển nào báo hiệu đường bộ giao nhau với đường sắt không có rào chắn?",
    answers: [
      "Biển 1 và 2. ", " Biển 2 và 3. ", " Biển 1 và 3."
    ],
    correctAnswer: 1,
    image: "/images250/image250_115.png",
  },

  {
    id: 116,
    question: "Biển nào báo hiệu sắp đến chỗ giao nhau với đường sắt có ràochắn?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3."
    ],
    image: "/images250/image250_116.png",
    correctAnswer: 0,
  },

  {
    id: 117,
    question: "Gặp biển nào người lái xe phải giảm tốc độ, nhường ưu tiên cho người đi bộ?",
    answers: [
      "Biển 1. ", " Biển 3. ", " Biển 2. ", " Biển 1 và 3"
    ],
    correctAnswer: 0,
    image: "/images250/image250_117.png",
  },

  {
    id: 118,
    question: "Biển nào báo hiệu đoạn đường hay xảy ra ùn tắc giao thông?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3."
    ],
    correctAnswer: 0,
    image: "/images250/image250_118.png",
  },

  {
    id: 119,
    question: "Biển nào cảnh báo chỗ ngoặt nguy hiểm liên tiếp?",
    answers: [
      "Biển 1 và 2. ", " Biển 2 và 3.",
      "Biển 3 và 4. ", " Biển 2 và 4."
    ],
    correctAnswer: 3,
    image: "/images250/image250_119.png",
  },

  {
    id: 120,
    question: "Biển nào cảnh báo đường ngầm có nguy cơ lũ quét?",
    answers: [
      "Biển 1. ", " Biển 2."
    ],
    correctAnswer: 0,
    image: "/images250/image250_120.png",
  },

  {
    id: 121,
    question: "Biển nào cảnh báo vách núi nguy hiểm?",
    answers: [
      "Biển 1 và 2. ", " Biển 2 và 4. ", " Biển 3 và 4. ", " Biển 1 và 3."
    ],
      image: "/images250/image250_121.png",
    correctAnswer: 3,
  },

  {
    id: 122,
    question: "Biển nào báo trước gần đến đoạn đường thường có trẻ em đi ngang qua hoặc tụ tập trên đường?",
    answers: [
      "Biển 1. ", " Biển 2."
    ],
    correctAnswer: 1,
    image: "/images250/image250_122.png",
  },

  {
    id: 123,
    question: "Biển này có ý nghĩa gì?",
    answers: [
      "Chiều dài của đoạn đường có đá lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
      "Chiều dài của đoạn đường có vách núi nguy hiểm.",
      "Khoảng cách từ điểm đặt biển đến đoạn đường có đá lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường."
    ],
    image: "/images250/image250_123.png",
    correctAnswer: 0,
  },

  {
    id: 124,
    question: "Biển này có ý nghĩa gì?",
    answers: [
      "Cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
      "Cảnh báo đường ngầm thường xuyên có nguy cơ lũ quét."
    ],
    image: "/images250/image250_124.png",
    correctAnswer: 0,
  },

  {
    id: 125,
    question: "Biển nào báo trước đoạn đường có gồ giảm tốc?",
    answers: [
      "Biển 1. ", " Biển 2."
    ],
    image: "/images250/image250_125.png",
    correctAnswer: 1,
  },

  {
    id: 126,
    question: "Biển nào báo trước sắp đến bến phà?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3."
    ],
    image: "/images250/image250_126.png",
    correctAnswer: 2,
    
  },

  {
    id: 127,
    question: "Biển này có ý nghĩa gì?",
    answers: [
      "Dốc xuống nguy hiểm.",
      "Dốc lên nguy hiểm.",
      "Báo trước chiều dài đoạn đường dốc xuống nguy hiểm.",
      "Báo trước chiều dài đoạn đường dốc lên nguy hiểm."
    ],
    image: "/images250/image250_127.png",
    correctAnswer: 2,
  },

  {
    id: 128,
    question: "Biển này có ý nghĩa gì?",
    answers: [
      "Để báo trước nơi giao nhau có bố trí đảo an toàn ở giữa nút giao.",
      "Các loại xe qua nút giao phải đi vòng xuyến quanh đảo an toàn theo chiều mũi tên.",
      "Cả hai ý trên."
    ],
    image: "/images250/image250_128.png",
    correctAnswer: 2,
  },

  {
    id: 129,
    question: "Biển nào đặt trước ngã ba, ngã tư và có hiệu lực phía sau mặtbiển?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3. ", " Biển 1 và 3."
    ],
    image: "/images250/image250_129.png",
    correctAnswer: 3,
  },

  {
    id: 130,
    question: "Biển nào báo hiệu bắt đầu đường dành cho các loại ô tô, xe máy đi lại?",
    answers: [
      "Biển 1. ", " Biển 2."
    ],
    correctAnswer: 0,
    image: "/images250/image250_130.png",
  },

  {
    id: 131,
    question: "Biển nào báo hiệu hướng đi phải theo?",
    answers: [
      "Biển 1. ", " Biển 2."
    ],
    image: "/images250/image250_131.png",
    correctAnswer: 0,
  },

  {
    id: 132,
    question: "Biển nào báo hiệu hết đoạn đường ưu tiên?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3."
    ],
    image: "/images250/image250_132.png",
    correctAnswer: 1,
  },

  {
    id: 133,
    question: "Biển nào báo hiệu hết hạn chế tốc độ tối đa cho phép theo biển ghép?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Cả hai biển."
    ],
    image: "/images250/image250_133.png",
    correctAnswer: 2,
  },

  {
    id: 134,
    question: "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
    answers: [
      "Biển 1. ", " Biển 2. ", " Biển 3. ", " Biển 4."
    ],
    image: "/images250/image250_134.png",
    correctAnswer: 3,
  },

  {
    id: 135,
    question: "Biển nào đặt trước các đường giao nhau, để chỉ dẫn lối đi đường tránh, đường vòng trong trường hợp đường chính bị tắc hoặc đường chính cấm một số loại xe đi qua?",
    answers: [
      "Biển 1.",
      "Biển 2."
    ],
    correctAnswer: 0,
    image: "/images250/question_135.jpeg",
  },

  {
    id: 136,
    question: "Biển này có ý nghĩa gì?",
    answers: [
      "Cấm dừng xe về hướng bên phải.",
      "Cấm dừng và đỗ xe theo hướng bên phải."
    ],
    image: "/images250/image250_136.png",
    correctAnswer: 1,
  },

  {
    id: 137,
    question: "Biển này có ý nghĩa gì?",
    answers: [
      "Báo khoảng cách đến nơicấm sử dụng còi.",
      "Chiều dài đoạn đường cấmsử dụng còi từ nơi đặt biển.",
      "Báo cấm dùng còi có độ vang xa 500m."
    ],
    image: "/images250/image250_137.png",
    correctAnswer: 1,
  },

  {
    id: 138,
    question: "Biển này có ý nghĩa gì?",
    answers: [
      "Cấm xe cơ giới (trừ xe ưu tiên theo Luật định) đi thẳng.",
      "Cấm xe ô tô và xe máy (trừ xe ưu tiên theo Luật định) đi về bên trái và bên phải.",
      "Hướng trái và phải không cấm xe cơ giới."
    ],
    image: "/images250/image250_138.png",
    correctAnswer: 1,
  },

  {
    id: 139,
    question: "Biển nào chỉ dẫn người lái xe đi được cả hai hướng?",
    answers: [
      "Biển 1. ", " Biển 2."
    ],
    image: "/images250/image250_139.png",
    correctAnswer: 1,
  },

  {
    id: 140,
    question: "Biển này có ý nghĩa gì?",
    answers: [
      "Chỉ dẫn chướng ngại vật phía trước để cảnh báo phía trước có sự cản trở lưu thông bình thường (nằm bên trong phần xe chạy hay ngay sát phần đường xe chạy) và chỉ dẫn hướng đi qua đó cần đặt biển.",
      "Chỉ dẫn hướng rẽ để nhắc người điều khiển phương tiện chuẩn bị đổi hướng đi khi sắp vào đường cong nguy hiểm, có bán kính cong nhỏ. PHẦN III. KỸ THUẬT LÁI XE"
    ],
    correctAnswer: 1,
    image: "/images250/question_140.jpeg",
  },

  {
    id: 141,
    question: "Tay ga xe mô tô hai bánh có tác dụng gì?",
    answers: [
      "Để điều khiển xe chạy về phía trước.",
      "Điều tiết công suất của động cơ qua đó điều khiển tốc độ của xe.",
      "Để điều khiển xe chạy lùi.",
      "Ý 1 và ý 2."
    ],
    correctAnswer: 3,
  },

  {
    id: 142,
    question: "Nêu tác dụng của gương chiếu hậu xe mô tô?",
    answers: [
      "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
      "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
      "Để quan sát an toàn phía sau bên trái, phía sau bên phải trước khi chuyển hướng.",
      "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyểnhướng."
    ],
    correctAnswer: 2,
  },

  {
    id: 143,
    question: "Nêu tác dụng của côn tay xe mô tô?",
    answers: [
      "Dùng để kết nối hoặc ngắt kết nối giữa động cơ với hộp số.",
      "Được sử dụng khi chuyển số và tránh gây chết máy.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 144,
    question: "Cách hạ chân chống chính của xe mô tô?",
    answers: [
      "Chân trái đưa lên phía trước, hai tay nắm vào tay nắm xe; kiểm tra an toàn xung quanh xe; dùng lực đẩy xe về phía trước; khi hai bánh xe chạm đất tay phải bóp phanh để xe không bị trượt.",
      "Dựa hông vào xe, chân trái đưa lên phía trước, hai tay nắm vào tay nắm xe; kiểm tra an toàn xung quanh xe; dùng lực đẩy xe về phía trước; khi hai bánh xe chạm đất tay phải bóp phanh để xe không bị trượt.",
      "Dựa xe vào hông, chân phải đưa lên phía trước, hai tay nắm vào tay nắm xe; kiểm tra an toàn xung quanh xe; dùng lực đẩy xe về phía trước; khi hai bánh xe chạm đất tay phải bóp phanh để xe không bị trượt."
    ],
    correctAnswer: 1,
  },

  {
    id: 145,
    question: "Cách dựng chân chống chính của xe mô tô?",
    answers: [
      "Tay trái nắm vào tay nắm xe và giữ xe thẳng đứng, tay phải nắm lấy thanh đỡ phía sau.",
      "Giữ thẳng tay lái, chân phải dựng chân chống, chuyển trọng tâm cơ thể sang chân phải, tay phải kéo thanh đỡ phía sau.",
      "Sau khi dựng chân chống, quay đầu xe về phía bên trái.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 146,
    question: "Thao tác dựng xe mô tô khi bị đổ sang trái?",
    answers: [
      "Đứng phía bên trái xe, giữ tay lái bằng hai tay sau đó xoay đầu xe sang phía bên phải.",
      "Bóp phanh trước để xe không bị trôi.",
      "Dùng chân trái làm trụ kết hợp đùi và hông để hỗ trợ nâng xe lên một nhịp.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 147,
    question: "Thao tác dựng xe mô tô khi bị đổ sang phải?",
    answers: [
      "Gạt chân chống phụ xe và đứng phía bên phải xe.",
      "Tay phải nắm vào tay nắm xe bên phải, bóp phanh trước để xe không bị trôi sau đó xoay tay lái sang bên trái.",
      "Tay trái nắm vào thanh đỡ phía sau của xe, chân phải làm trụ kết hợp đùi và hông để hỗ trợ nâng xe lên một nhịp.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 148,
    question: "Phương pháp kiểm tra lốp xe mô tô trước khi xuất phát?",
    answers: [
      "Xoay tròn lốp xe để kiểm tra độ mòn của lốp, áp suất hơi và vành xe có bị rạn nứt không.",
      "Xoay tròn lốp xe để kiểm tra và loại bỏ dị vật (nếu có); kiểm tra áp suất hơi, độ mòn của lốp và vành xe có bị rạn nứt, tròn đều không.",
      "Xoay tròn lốp xe để kiểm tra và loại bỏ dị vật; kiểm tra áp suất hơi và vành xe có bị rạn nứt không."
    ],
    correctAnswer: 1,
  },

  {
    id: 149,
    question: "Để đảm bảo an toàn trước khi xuất phát, người lái xe phải làm gì?",
    answers: [
      "Kiểm tra xe, kiểm tra mũ bảo hiểm, chỉnh gương chiếu hậu sao cho có thể quan sát được rõ nhất các phương tiện phía sau, thấy an toàn, bật tín hiệu báo và bắt đầu xuất phát.",
      "Chỉnh gương chiếu hậu, quan sát phía sau xem có phương tiện nào đi tới không và bắt đầu xuất phát."
    ],
    correctAnswer: 0,
  },

  {
    id: 150,
    question: "Phương pháp kiểm tra gương xe mô tô trước khi di chuyển?",
    answers: [
      "Kiểm tra chân gương đảm bảo chắc chắn không bị xoay trong quá trình di chuyển; gương chiếu hậu không bị vỡ, mờ; tầm quan sát phía sau rõ nhất.",
      "Kiểm tra hai chân gương đảm bảo chắc chắn không bị xoay trong quá trình di chuyển."
    ],
    correctAnswer: 0,
  },

  {
    id: 151,
    question: "Trước khi khởi hành xe mô tô, người lái xe cần kiểm tra những gì?",
    answers: [
      "Lốp, xăng, dầu máy, xích, phanh, gương, đèn, còi, tay ga, tay côn (nếu có).",
      "Lốp, xăng, dầu máy, xích, phanh, tay côn (nếu có), còi và tay ga.",
      "Lốp, xăng, dầu máy, xích, phanh, tay côn (nếu có), đèn, còi, tay ga, gương và cần gạt mưa."
    ],
    correctAnswer: 0,
  },

  {
    id: 152,
    question: "Để đảm bảo tư thế lái xe mô tô an toàn, người lái xe phải thực hiện như thế nào?",
    answers: [
      "Tầm nhìn bao quát, vai thả lỏng, bàn tay nắm tròn vào tay nắm xe, khuỷu tay hơi khép vào phía trong, ngồi chính giữa yên xe.",
      "Mắt nhìn xa về phía trước, vai thả lỏng, bàn tay nắm vào tay nắm xe và tay phanh, khuỷu tay hơi khép vào phía trong, ngồi chính giữa yên xe."
    ],
    correctAnswer: 0,
  },

  {
    id: 153,
    question: "Trước khi dừng xe, người lái xe phải thực hiện như thế nào?",
    answers: [
      "Xác định vị trí dừng xe, quan sát phía sau xem có phương tiện đi tới không rồi phanh cho xe dừng luôn.",
      "Xác định vị trí dừng xe, bật đèn tín hiệu, quan sát phía trước, phía sau khi thấy an toàn từ từ cho xe dừng lại."
    ],
    correctAnswer: 1,
  },

  {
    id: 154,
    question: "Khi điều khiển xe mô tô, người lái xe phải sử dụng phanh tay như thế nào là đúng?",
    answers: [
      "Không đặt sẵn ngón tay trên tay phanh.",
      "Khi muốn phanh, người lái xe giảm hết ga, sử dụng bốn ngón tay (trừ ngón tay cái) bóp phanh với một lực tăng dần đều để xe giảm tốc độ.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 155,
    question: "Khi điều khiển xe mô tô, người lái xe phải sử dụng phanh như thế nào để đạt hiệu quả cao nhất?",
    answers: [
      "Sử dụng phanh trước.",
      "Sử dụng phanh sau.",
      "Sử dụng đồng thời phanh trước và phanh sau."
    ],
    correctAnswer: 2,
  },

  {
    id: 156,
    question: "Trên đường đôi có xe container đi cùng chiều, người lái xe môtô phải xử lý như thế nào?",
    answers: [
      "Giữ khoảng cách an toàn, tránh đi vào vị trí điểm mù của xe container, không đi gần và tuyệt đối không đi song song bên cạnh với xe container (tránh hiện tượng bị hút vào gầm xe).",
      "Giữ khoảng cách an toàn, đi song song bên cạnh và tránh đi vào vị trí điểm mù của xe container."
    ],
    correctAnswer: 0,
  },

  {
    id: 157,
    question: "Khi điều khiển xe mô tô, gặp xe ô tô đi phía trước có tín hiệu rẽ phải, người lái xe xử lý như thế nào?",
    answers: [
      "Giảm tốc độ, giữ khoảng cách để xe phía trước rẽ phải xong mới tiếp tục di chuyển.",
      "Quan sát nếu thấy có khoảng trống thì nhanh chóng tăng tốc độ đi qua."
    ],
    correctAnswer: 0,
  },

  {
    id: 158,
    question: "Khi điều khiển xe mô tô hai bánh, bất ngờ gặp chướng ngại vật, người lái xe xử lý như thế nào?",
    answers: [
      "Giảm hết ga thật nhanh; sử dụng đồng thời hai phanh với lực phanh tăng dần đều (lưu ý bóp phanh bằng bốn ngón tay); khi xe dừng hẳn lại chống chân trái xuống đất.",
      "Sử dụng đồng thời cả hai phanh với lực phanh tăng dần đều; khi xe dừng hẳn lại chống hai chân xuống đất.",
      "Giảm hết ga thật nhanh; sử dụng phanh trước với lực phanh tăng dần đều (lưu ý bóp phanh bằng bốn ngón tay); khi xe dừng hẳn lại chống chân trái xuống đất."
    ],
    correctAnswer: 0,
  },

  {
    id: 159,
    question: "Để tránh đổ, ngã khi điều khiển xe mô tô hai bánh ở nơi đường xấu, nhỏ và hẹp, người lái xe xử lý như thế nào?",
    answers: [
      "Đi ở tốc độ thấp, quan sát liên tục khoảng cách từ 05 m đến 10 m phía trước để điều chỉnh sớm hướng di chuyển.",
      "Trong quá trình di chuyển không nên dùng phanh trước tránh làm khóa bánh dẫn hướng.",
      "Không được lắc người sang trái hoặc phải nhiều; trọng tâm cơ thể cần trùng với trọng tâm của xe.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 160,
    question: "Khi điều khiển xe mô tô trong điều kiện trời mưa, người lái xe xử lý như thế nào?",
    answers: [
      "Đi tốc độ phù hợp, quan sát, không phanh gấp, không nên tăng ga hayđánh lái đột ngột, bật đèn chiếu gần để đảm bảo quan sát.",
      "Đi đúng phần đường, làn đường quy định và giữ khoảng cách lớn hơn với các phương tiện giao thông khác so với điều kiện bình thường.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 161,
    question: "Khi điều khiển xe mô tô trong điều kiện đường trơn trượt, người lái xe xử lý như thế nào?",
    answers: [
      "Đi tốc độ phù hợp, giữ thẳng tay lái, không phanh gấp và đánh lái đột ngột.",
      "Tăng tốc độ, giữ thẳng tay lái, phanh gấp và đánh lái khi gặp chướng ngạivật phía trước.",
      "Cả hai ý trên."
    ],
    correctAnswer: 0,
  },

  {
    id: 162,
    question: "Khi điều khiển xe mô tô muốn rẽ phải, người lái xe phải xử lý như thế nào?",
    answers: [
      "Bật xi nhan báo rẽ phải, quan sát phía trước, phía sau bằng gương chiếu hậu (có thể quay đầu lại quan sát) thấy an toàn cho xe từ từ rẽ phải.",
      "Bật xi nhan báo rẽ phải, quan sát an toàn trước và sau, chuyển ngay hướngcần rẽ."
    ],
    correctAnswer: 0,
  },

  {
    id: 163,
    question: "Khi điều khiển xe mô tô rẽ trái, người lái xe phải xử lý như thế nào?",
    answers: [
      "Bật xi nhan báo rẽ trái, quan sát phía trước, phía sau bằng gương chiếu hậu (có thể quay đầu lại quan sát) thấy an toàn cho xe từ từ rẽ trái.",
      "Bật xi nhan báo rẽ trái, quan sát an toàn trước và sau, chuyển ngay hướngcần rẽ."
    ],
    correctAnswer: 0,
  },

  {
    id: 164,
    question: "Để đảm bảo an toàn khi điều khiển xe mô tô tay ga xuống dốc, người lái xe cần thực hiện như thế nào?",
    answers: [
      "Giữ ga ở mức độ phù hợp, kết hợp sử dụng phanh trước và phanh sau đểgiảm tốc độ.",
      "Nhả hết tay ga, tắt động cơ, kết hợp sử dụng phanh trước và phanh sau đểgiảm tốc độ.",
      "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt động cơ."
    ],
    correctAnswer: 0,
  },

  {
    id: 165,
    question: "Khi điều khiển xe mô tô vào đoạn đường vòng, người lái xe xử lý như thế nào?",
    answers: [
      "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốcđể nhanh chóng qua đường vòng và giảm tốc độ qua đường vòng.",
      "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; giảm tốc độ tới mức cần thiết, về số thấp (đối với xe số) và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng."
    ],
    correctAnswer: 1,
  },

  {
    id: 166,
    question: "Khi điều khiển xe mô tô bị che khuất tầm nhìn, người lái xe xử lý như thế nào?",
    answers: [
      "Giảm tốc độ, quan sát, cảm nhận sự nguy hiểm có thể xảy ra sau vật che khuất, xác định sự an toàn, từ từ điều khiển phương tiện qua khu vực bị che khuất.",
      "Tự tin rằng không có người, xe phía sau vật che khuất và giữ tốc độ, đibình thường."
    ],
    correctAnswer: 0,
  },

  {
    id: 167,
    question: "Tại những khu vực giao thông phức tạp, có mật độ phương tiện đông, người lái xe xử lý như thế nào?",
    answers: [
      "Tăng tốc độ nhanh chóng đi qua nơi giao nhau.",
      "Giảm tốc độ, quan sát rộng, nhanh từ các hướng, sử dụng kết hợp các phương pháp phanh xe và đưa ra cách xử lý phù hợp.",
      "Chú ý quan sát, bấm còi liên tục và tăng tốc độ nhanh chóng đi qua nơi giao nhau."
    ],
    correctAnswer: 1,
  },

  {
    id: 168,
    question: "Điều khiển xe mô tô vào ban đêm, người lái xe xử lý như thế nào?",
    answers: [
      "Phải chú ý đến điều kiện giao thông, chướng ngại vật, các phương tiện giao thông khác đang lưu thông trên đường, nhất là các phương tiện đi ngược chiều và điều khiển xe với tốc độ cao hơn so với ban ngày.",
      "Sử dụng đèn chiếu sáng phù hợp, luôn giữ tỉnh táo mọi thời điểm, chuyển hướng nhìn thường xuyên hơn, chú ý chướng ngại vật nhất là các phương tiện đi ngược chiều và điều khiển xe với tốc độ thấp hơn so với ban ngày."
    ],
    correctAnswer: 1,
  },

  {
    id: 169,
    question: "Khi điều khiển xe mô tô, thấy xe đi trước bật tín hiệu báo rẽ trái, người lái xe xử lý như thế nào?",
    answers: [
      "Giảm tốc độ, nhường đường cho xe rẽ trái.",
      "Tăng tốc độ để vượt qua xe có tín hiệu báo rẽ."
    ],
    correctAnswer: 0,
  },

  {
    id: 170,
    question: "Khi điều khiển xe mô tô lên dốc cao, người lái xe xử lý như thế nào?",
    answers: [
      "Điều chỉnh ga cho xe đi từ từ lên dốc; đến gần đỉnh dốc phải tăng ga để xe nhanh chóng qua dốc; về số thấp; đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
      "Về số thấp từ chân dốc (đối với xe số); điều chỉnh ga cho xe đi từ từ lên dốc; đến gần đỉnh dốc phải đi chậm, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
      "Cả hai ý trên."
    ],
    correctAnswer: 1,
  },

  {
    id: 171,
    question: "Khi điều khiển xe mô tô xuống dốc nguy hiểm, người lái xe xử lý như thế nào?",
    answers: [
      "Tăng lên số cao, điều chỉnh ga ở mức độ phù hợp, kết hợp với phanh chânđể khống chế tốc độ.",
      "Về số thấp (đối với xe số), điều chỉnh ga ở mức độ phù hợp, kết hợp cảhai phanh để kiểm soát tốc độ.",
      "Về số 0, kết hợp với phanh chân để khống chế tốc độ."
    ],
    correctAnswer: 1,
  },

  {
    id: 172,
    question: "Khi điều khiển xe mô tô gặp xe lăn của người khuyết tật qua đường, người lái xe phải xử lý như thế nào?",
    answers: [
      "Giảm tốc độ đến mức không nguy hiểm (có thể dừng lại) nhường đường cho xe lăn của người khuyết tật đi qua.",
      "Tăng tốc độ, cho xe nhanh chóng vượt qua phía trước xe lăn của người khuyết tật."
    ],
    correctAnswer: 0,
  },

  {
    id: 173,
    question: "Khi đang điều khiển xe mô tô, nếu có nhu cầu sử dụng điện thoại, người lái xe xử lý như thế nào?",
    answers: [
      "Giảm tốc độ, để đảm bảo an toàn với xe phía trước và sử dụng điện thoại liên lạc.",
      "Giảm tốc độ, dừng xe ở nơi cho phép sau đó sử dụng điện thoại.",
      "Tăng tốc độ để cách ra xe phía sau và sử dụng điện thoại để liên lạc."
    ],
    correctAnswer: 1,
  },

  {
    id: 174,
    question: "Việc bảo dưỡng thường xuyên đối với xe mô tô có tác dụng gì?",
    answers: [
      "Bảo dưỡng thường xuyên làm cho xe mô tô luôn có tính năng kỹ thuật tốt, giảm cường độ hao mòn các chi tiết.",
      "Ngăn ngừa, phát hiện kịp thời các hư hỏng và sai lệch kỹ thuật để khắc phục, giữ gìn hình thức bên ngoài.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 175,
    question: "Phương pháp kiểm tra mức dầu bôi trơn động cơ?",
    answers: [
      "Kiểm tra que thăm dầu trên lốc máy; quan sát vệt dầu trên que thăm, mức dầu này phải nằm ở mức tối đa được thể hiện trên que thăm.",
      "Rút que thăm dầu trên lốc máy, quan sát vệt dầu trên que thăm, vệt dầu này phải nằm ở mức tối thiểu được thể hiện trên que thăm.",
      "Rút que thăm dầu trên lốc máy, lau sạch que thăm sau đó cắm vào lốc máy và rút ra quan sát vệt dầu trên que thăm, mức dầu này phải nằm giữa mức tối thiểu và tối đa được thể hiện trên que thăm."
    ],
    correctAnswer: 2,
  },

  {
    id: 176,
    question: "Hãy nêu công dụng của động cơ đốt trong?",
    answers: [
      "Khi làm việc, nhiệt năng được biến đổi thành cơ năng và truyền đến bánh xe chủ động tạo ra chuyển động tịnh tiến cho mô tô.",
      "Khi làm việc, cơ năng được biến đổi thành điện năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho mô tô.",
      "Cả hai ý trên."
    ],
    correctAnswer: 0,
  },

  {
    id: 177,
    question: "Điện xe mô tô gồm những hệ thống nào?",
    answers: [
      "Hệ thống đánh lửa, hệ thống khởi động, hệ thống tín hiệu và chiếu sáng, hệ thống đo lường.",
      "Hệ thống đánh lửa, hệ thống khởi động, hệ thống tín hiệu và hệ thốngchiếu sáng, hệ thống đo lường, hệ thống điều khiển.",
      "Hệ thống đánh lửa, hệ thống khởi động, hệ thống tín hiệu và hệ thốngchiếu sáng, hệ thống đo lường, hệ thống làm mát."
    ],
    correctAnswer: 0,
  },

  {
    id: 178,
    question: "Hãy nêu công dụng của hệ thống phanh?",
    answers: [
      "Dùng để giảm tốc độ, dừng chuyển động của xe.",
      "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe chuyển động ổn định theo hướng xác định."
    ],
    correctAnswer: 0,
  },

  {
    id: 179,
    question: "Hãy nêu công dụng hệ thống lái của xe mô tô?",
    answers: [
      "Dùng để thay đổi mô men từ động cơ tới bánh xe chủ động khi xe mô tô chuyển động theo hướng xác định.",
      "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe chuyển động theo hướng xác định."
    ],
    correctAnswer: 1,
  },

  {
    id: 180,
    question: "Hãy nêu công dụng hộp số của xe mô tô?",
    answers: [
      "Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình xe mô tô chuyển động, chuyển số êm dịu dễ điều khiển.",
      "Truyền công suất từ động cơ đến bánh xe chủ động, thay đổi tỷ số truyền và mô men xoắn, xe mô tô dừng lại tại chỗ mà không cần tắt máy."
    ],
    correctAnswer: 1,
  },

  {
    id: 181,
    question: "Đèn phanh xe mô tô có tác dụng gì?",
    answers: [
      "Cảnh báo cho các xe phía sau biết xe đang giảm tốc độ để chủ động tránh hoặc giảm tốc để tránh va chạm.",
      "Định vị vào ban đêm với các xe từ phía sau tới để tránh va chạm.",
      "Cả hai ý trên."
    ],
    correctAnswer: 0,
  },

  {
    id: 182,
    question: "Thế nào là động cơ 2 kỳ?",
    answers: [
      "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, píttông thực hiện hai hành trình, trong đó có một lần sinh công.",
      "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, píttông thực hiện bốn hành trình, trong đó có một lần sinh công."
    ],
    correctAnswer: 0,
  },

  {
    id: 183,
    question: "Thế nào là động cơ 4 kỳ?",
    answers: [
      "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, píttông thực hiện hai hành trình, trong đó có một lần sinh công.",
      "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, píttông thực hiện bốn hành trình, trong đó có một lần sinh công."
    ],
    correctAnswer: 1,
  },

  {
    id: 184,
    question: "Công dụng của hệ thống bôi trơn đối với động cơ xe mô tô?",
    answers: [
      "Cung cấp một lượng dầu bôi trơn đủ và sạch dưới áp suất nhất định đi bôi trơn cho các chi tiết của động cơ để giảm ma sát, giảm mài mòn, làm kín, làm sạch, làm mát và chống gỉ.",
      "Cung cấp một lượng nhiên liệu đầy đủ và sạch để cho động cơ xe mô tôhoạt động.",
      "Cả hai ý trên."
    ],
    correctAnswer: 0,
  },

  {
    id: 185,
    question: "Khi điều khiển xe mô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe xử lý như thế nào?",
    answers: [
      "Giảm tốc độ, dừng lại trước vạch dừng, quan sát cả hai phía, nếu không có tàu đi tới, tăng ga nhẹ vượt qua đường sắt.",
      "Nếu thấy có tàu đi tới thì dừng lại trước vạch dừng, chỉ khi tàu đi qua mới được đi.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 186,
    question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Xe ô tô tải, xe ô tô con, xe mô tô.",
      "Xe ô tô con, xe ô tô tải, xe mô tô.",
      "Xe mô tô, xe ô tô con, xe ô tô tải.",
      "Xe ô tô con, xe mô tô, xe ô tô tải."
    ],
    image: "/images250/image186.png",
    correctAnswer: 2,
  },

  {
    id: 187,
    question: "Trong trường hợp này xe nào được quyền đi trước?",
    answers: [
      "Xe mô tô. ",
      " Xe ô tô con."
    ],
    image: "/images250/image187.png",
    correctAnswer: 1,
  },

  {
    id: 188,
    question: "Theo tín hiệu đèn, xe nào được phép đi?",
    answers: [
      "Xe ô tô con và xe ô tô khách.",
      " Xe mô tô."
    ],
    image: "/images250/image188.png",
    correctAnswer: 0,
  },

  {
    id: 189,
    question: "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
    answers: [
      "Xe ô tô khách, xe mô tô. ",
      "Xe ô tô con, xe ô tô tải.",
      "Xe ô tô tải, xe mô tô."
    ],
    correctAnswer: 0,
    image: "/images250/question_189.jpeg",
  },

  {
    id: 190,
    question: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    answers: [
      "Xe ô tô khách, xe ô tô tải, xe mô tô.",
      "Xe ô tô tải, xe ô tô con, xe mô tô.",
      "Xe ô tô khách, xe ô tô con, xe mô tô."
    ],
     image: "/images250/image250_190.png",
    correctAnswer: 0,
  },

  {
    id: 191,
    question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Xe ô tô khách, xe ô tô tải, xe mô tô, xe ô tô con.",
      "Xe ô tô con, xe ô tô khách, xe ô tô tải, xe mô tô.",
      "Xe mô tô, xe ô tô tải, xe ô tô khách, xe ô tô con.",
      "Xe mô tô, xe ô tô tải, xe ô tô con, xe ô tô khách."
    ],
      image: "/images250/image250_191.png",
    correctAnswer: 2,
  },

  {
    id: 192,
    question: "Theo hướng mũi tên, những hướng nào xe gắn máy đi được?",
    answers: [
      "Cả 3 hướng.",
      " Hướng 1 và 3. ",
      " Hướng 1."
    ],
    correctAnswer: 0,
    image: "/images250/question_192.jpeg",
  },

  {
    id: 193,
    question: "Xe nào được quyền đi trước trong trường hợp này?",
    answers: [
      "Xe ô tô con. ",
      "Xe xích lô."
    ],
    image: "/images250/image250_193.png",
    correctAnswer: 1,
  },

  {
    id: 194,
    question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Xe ô tô (A), xe mô tô, xe ô tô (B), xe đạp.",
      "Xe ô tô (B), xe đạp, xe mô tô, xe ô tô (A).",
      "Xe ô tô (A), xe ô tô (B), xe mô tô + xe đạp.",
      "Xe mô tô + xe đạp, xe ô tô (A), xe ô tô (B)."
    ],
    correctAnswer: 3,
  },

  {
    id: 195,
    question: "Theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    answers: [
      "Xe ô tô khách. ",
      " Xe ô tô con.",
      "Xe mô tô.",
      " Xe ô tô con và xe mô tô."
    ],
    correctAnswer: 0,
    image: "/images250/question_195.jpeg",
  },

  {
    id: 196,
    question: "Theo hiệu lệnh của người điều khiển giao thông, các xe đi như thế nào là đúng?",
    answers: [
      "Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
      "Cho phép các xe ở mọi hướng được rẽ phải.",
      "Tất cả các xe phải đứng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi."
    ],
      image: "/images250/image250_196.png",
    correctAnswer: 2,
  },

  {
    id: 197,
    question: "Theo hiệu lệnh của người điều khiển giao thông, xe nào được phép đi?",
    answers: [
      "Xe mô tô, xe ô tô con. ",
      " Xe mô tô, xe ô tô tải.",
      "Xe ô tô con, xe ô tô tải. ",
      " Cả ba xe."
    ],
    image: "/images250/image250_197.png",
    correctAnswer: 1,
  },

  {
    id: 198,
    question: "Theo tín hiệu đèn, xe nào chấp hành đúng quy tắc giao thông?",
    answers: [
      "Xe ô tô khách, xe mô tô. 3. Xe ô tô con, xe ô tô tải.",
      "Xe ô tô tải, xe mô tô. 4. Tất cả các loại xe trên."
    ],
    correctAnswer: 1,
    image: "/images250/question_198.jpeg",
  },

  {
    id: 199,
    question: "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
    answers: [
      "Cả ba hướng. ",
      "Hướng 1 và 3.",
      "Hướng 1 và 2. ",
      "Hướng 2 và 3."
    ],
    image: "/images250/image250_199.png",
    correctAnswer: 1,
  },

  {
    id: 200,
    question: "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
    answers: [
      "Xe ô tô khách, xe mô tô. ",
      " Xe ô tô con, xe ô tô tải.",
      "Xe ô tô tải, xe mô tô."
    ],
      image: "/images250/image250_200.png",
    correctAnswer: 1,
  },

  {
    id: 201,
    question: "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    answers: [
      "Xe ô tô con, xe ô tô tải, xe ô tô khách.",
      "Xe ô tô tải, xe ô tô khách, xe mô tô.",
      "Xe ô tô khách, xe mô tô, xe ô tô con.",
      "Cả 4 xe."
    ],
    correctAnswer: 1,
    image: "/images250/question_201.jpeg",
  },

  {
    id: 202,
    question: "Các xe đi theo hướng mũi tên, xe nào chấp hành quy tắc giao thông?",
    answers: [
      "Xe ô tô tải, xe mô tô. ",
      " Xe ô tô tải, xe ô tô con.",
      "Xe ô tô khách, xe mô tô.",
      " Xe mô tô, xe ô tô con."
    ],
      image: "/images250/image250_202.png",
    correctAnswer: 2,
  },

  {
    id: 203,
    question: "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
    answers: [
      "Xe ô tô khách, xe mô tô. ",
      "Xe ô tô con, xe ô tô tải.",
      "Xe ô tô tải, xe mô tô."
    ],
      image: "/images250/image250_203.png",
    correctAnswer: 0,
  },

  {
    id: 204,
    question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Xe ô tô tải, xe mô tô, xe ô tô khách, xe ô tô con.",
      "Xe ô tô tải, xe ô tô khách, xe ô tô con, xe mô tô.",
      "Xe ô tô khách, xe ô tô tải, xe ô tô con, xe mô tô.",
      "Xe mô tô, xe ô tô khách, xe ô tô con, xe ô tô tải."
    ],
    correctAnswer: 0,
    image: "/images250/question_204.jpeg",
  },

  {
    id: 205,
    question: "Trong trường hợp này, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    answers: [
      "Xe công an đi làm nhiệm vụ, xe quân sự đi làm nhiệm vụ, xe ô tô + xe mô tô.",
      "Xe quân sự đi làm nhiệm vụ, xe công an đi làm nhiệm vụ, xe ô tô + xe mô tô.",
      "Xe ô tô + xe mô tô, xe quân sự đi làm nhiệm vụ, xe công an đi làm nhiệm vụ."
    ],
      image: "/images250/image250_205.png",
    correctAnswer: 1,
  },

  {
    id: 206,
    question: "Xe của anh (chị) có được phép vượt xe mô tô phía trước không?",
    answers: [
      "Được vượt. ",
      " Không được vượt."
    ],
      image: "/images250/image250_206.png",  
    correctAnswer: 0,
  },

  {
    id: 207,
    question: "Trong hình dưới đây, những xe nào vi phạm quy tắc giao thông?",
    answers: [
      "Xe ô tô khách (1), xe mô tô (3).",
      "Xe ô tô con (4), xe mô tô (3).",
      "Xe ô tô tải (2), xe mô tô (5).",
      "Xe ô tô tải (2), xe ô tô khách (1)."
    ],
    correctAnswer: 1,
    image: "/images250/question_207.jpeg",
  },

  {
    id: 208,
    question: "Xe ô tô tải kéo xe mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
    answers: [
      "Đúng.",
      " Không đúng."
    ],
    image: "/images250/image250_208.png",
    correctAnswer: 1,
  },

  {
    id: 209,
    question: "Xe nào đỗ vi phạm quy tắc giao thông?",
    answers: [
      "Xe mô tô. ",
      " Cả ba xe.",
      "Xe ô tô tải.",
      " Xe mô tô và xe ô tô tải."
    ],
    image: "/images250/image250_209.png",
    correctAnswer: 1,
  },

  {
    id: 210,
    question: "Xe nào đỗ vi phạm quy tắc giao thông?",
    answers: [
      "Cả hai xe. ",
      " Xe ô tô tải.",
      "Xe mô tô.",
      "Không xe nào vi phạm."
    ],
    correctAnswer: 0,
    image: "/images250/question_210.jpeg",
  },

  {
    id: 211,
    question: "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
    answers: [
      "Xe ô tô tải. 3. Cả 3 xe.",
      "Xe ô tô con và xe mô tô. 4. Xe ô tô con và xe ô tô tải."
    ],
      image: "/images250/image250_211.png",
    correctAnswer: 0,
  },

  {
    id: 212,
    question: "Xe nào vi phạm quy tắc giao thông?",
    answers: [
      "Xe ô tô con. ",
      " Xe mô tô.",
      " Không xe nào vi phạm."
    ],
    image: "/images250/image250_212.png",
    correctAnswer: 1,
  },

  {
    id: 213,
    question: "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
    answers: [
      "Cả hai xe. ",
      "Xe ô tô con.",
      "Xe mô tô. ",
      "Không xe nào vi phạm."
    ],
    correctAnswer: 1,
    image: "/images250/question_213.jpeg",
  },

  {
    id: 214,
    question: "Xe container đang rẽ phải, các phương tiện phía sau đi như thế nào để đảm bảo an toàn?",
    answers: [
      "Vượt về phía bên phải để đi tiếp.",
      "Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi.",
      "Vượt về phía bên trái để đi tiếp."
    ],
    image: "/images250/image250_214.png",
    correctAnswer: 1,
  },

  {
    id: 215,
    question: "Trong trường hợp này, xe ô tô có được phép vượt xe mô tô không?",
    answers: [
      "Được phép. ",
      "Không được phép."
    ],
    image: "/images250/image250_215.png",
    correctAnswer: 0,
  },

  {
    id: 216,
    question: "Văn hóa giao thông được hiểu như thế nào là đúng?",
    answers: [
      "Văn hóa giao thông là sự hoàn thiện hệ thống pháp luật điều chỉnh các mối quan hệ trong hoạt động giao thông vận tải.",
      "Văn hóa giao thông là ý thức chấp hành các quy định pháp luật về trật tự, an toàn giao thông.",
      "Có thái độ ứng xử đúng mực khi tham gia giao thông và trong thực thi pháp luật bảo đảm trật tự, an toàn giao thông.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 217,
    question: "Văn hóa giao thông của người lái xe Công an nhân dân gồm những tiêu chí gì?",
    answers: [
      "Gương mẫu trong chấp hành pháp luật về giao thông đường bộ, trong giao tiếp ứng xử đúng mực, thân thiện. Chủ động đảm bảo chất lượng an toàn phương tiện để sẵn sàng phục vụ cho các tình huống chiến đấu, công tác.",
      "Có tinh thần ham học hỏi, nâng cao trình độ chuyên môn nghiệp vụ, ứng phó linh hoạt, kịp thời các tình huống xảy ra để đạt hiệu quả tốt nhất.",
      "Luôn sẵn sàng khắc phục khó khăn, gian khổ, nguy hiểm để hoàn thành nhiệm vụ.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 218,
    question: "Người lái xe phục vụ chiến đấu trong Công an nhân dân cầnphải đáp ứng những yêu cầu cơ bản nào?",
    answers: [
      "Có sức khỏe, đạo đức, năng lực công tác, kỹ năng điều khiển phương tiện bảo đảm an toàn khi tham gia giao thông.",
      "Sẵn sàng tham gia chiến đấu; chủ động, tự giác thực hiện nhiệm vụ; linh hoạt, khẩn trương xử lý tình huống phức tạp.",
      "Sử dụng được đa dạng các loại xe.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 219,
    question: "Trách nhiệm của người lái xe khi thực hiện nhiệm vụ dẫn đoàn là gì?",
    answers: [
      "Sử dụng triệt để các quyền ưu tiên theo quy định khi tình huống khẩn cấp xảy ra; đảm bảo tuyệt đối bí mật về thời gian, địa điểm, các biện pháp chiến thuật, nghiệp vụ, thông tin liên lạc; nhanh chóng, kịp thời thực hiện theo chươngtrình kế hoạch hoặc chỉ đạo của cấp trên; đảm bảo tuyệt đối an toàn, vận hành thông suốt, phối hợp nhịp nhàng giữa các lực lượng.",
      "Kịp thời thực hiện theo chương trình kế hoạch hoặc chỉ đạo của cấp trên; đảm bảo tuyệt đối bí mật về thời gian, địa điểm, các biện pháp chiến thuật, nghiệp vụ; nhanh chóng, đảm bảo tuyệt đối an toàn, vận hành thông suốt, phối hợp nhịp nhàng giữa các lực lượng.",
      "Sử dụng triệt để các quyền ưu tiên; đảm bảo tuyệt đối bí mật về thời gian, địa điểm; nhanh chóng, kịp thời thực hiện theo chương trình kế hoạch; đảm bảo tuyệt đối an toàn, vận hành thông suốt, phối hợp nhịp nhàng giữa các lực lượng."
    ],
    correctAnswer: 0,
  },

  {
    id: 220,
    question: "Yêu cầu đối với người lái xe khi thực hiện nhiệm vụ cảnh vệ, dẫn đoàn, lễ tân ngoại giao là gì?",
    answers: [
      "Có hiểu biết về giao thông, được đào tạo chuyên sâu nắm vững quy trình dẫn đoàn, công tác cảnh vệ, kinh nghiệm xử lý tình huống khi thực hiện nhiệm vụ.",
      "Có bản lĩnh chính trị vững vàng, được đào tạo chuyên sâu nắm vững quy trình dẫn đoàn, công tác cảnh vệ, có kiến thức nghi lễ Nhà nước, nghi thức ngoại giao, am hiểu ngoại ngữ, kỹ năng lái xe và kinh nghiệm xử lý tình huống khi thực hiện nhiệm vụ.",
      "Nắm vững quy trình dẫn đoàn, công tác cảnh vệ, có kiến thức nghi lễ Nhà nước, nghi thức ngoại giao, am hiểu ngoại ngữ, kỹ năng lái xe và kinh nghiệm xử lý tình huống khi thực hiện nhiệm vụ."
    ],
    correctAnswer: 1,
  },

  {
    id: 221,
    question: "Theo thống kê, phân tích của các cơ quan chức năng, nguyên nhân nào chiếm đa số các vụ tai nạn giao thông đường bộ?",
    answers: [
      "Phương tiện giao thông không bảo đảm tiêu chuẩn an toàn kỹ thuật.",
      "Sự cố của đường bộ.",
      "Lỗi của người tham gia giao thông."
    ],
    correctAnswer: 2,
  },

  {
    id: 222,
    question: "Mục đích tuyên truyền, phổ biến, giáo dục pháp luật về TTATGTĐB là gì?",
    answers: [
      "Đưa các chủ trương, chính sách của Đảng, pháp luật của Nhà nước đếnvới các tầng lớp Nhân dân.",
      "Đưa các chủ trương, chính sách của Đảng, pháp luật của Nhà nước đến vớiđội ngũ cán bộ, viên chức, công chức.",
      "Đưa các chủ trương, chính sách của Đảng, pháp luật của Nhà nước đến với đội ngũ lái xe."
    ],
    correctAnswer: 0,
  },

  {
    id: 223,
    question: "“Tiêu chí văn hoá giao thông đường bộ” do Bộ Văn hoá, Thể thao và Du lịch ban hành quy định tiêu chí cụ thể cho những đối tượng nào dưới đây?",
    answers: [
      "Cơ quan quản lý Nhà nước về giao thông; lực lượng làm nhiệm vụ bảo đảm trật tự, an toàn giao thông.",
      "Người tham gia giao thông; chủ phương tiện tham gia giao thông.",
      "Cư dân sinh sống bên đường giao thông.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 224,
    question: "“Tiêu chí Văn hóa giao thông đường bộ” do Bộ Văn hóa, Thể thao và Du lịch quy định những tiêu chí chung nào?",
    answers: [
      "Tự giác chấp hành pháp luật về giao thông; thực hiện nghiêm nhiệm vụ, tác phong chuẩn mực, văn minh; tôn trọng, nhường nhịn, giúp đỡ mọi người khi tham gia giao thông.",
      "Có trách nhiệm với bản thân và cộng đồng khi tham gia giao thông; có ý thức văn hóa xây dựng môi trường giao thông thân thiện, an toàn.",
      "Tuân thủ pháp luật khi xử lý và bị xử lý các hành vi vi phạm trật tự, an toàn giao thông; thực hiện nghiêm nhiệm vụ, tác phong chuẩn mực, văn minh; tạo dựng kết cấu hạ tầng giao thông chuẩn mực an toàn.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 225,
    question: "Tiêu chí văn hóa giao thông đối với lực lượng chức năng làm nhiệm vụ bảo đảm trật tự, an toàn giao thông là gì?",
    answers: [
      "Nhanh nhạy, linh hoạt trong giải quyết các tình huống ùn tắc, tai nạn giao thông và các tình huống khác phát sinh trong khi thi hành công vụ.",
      "Ứng xử văn minh, không sách nhiễu, tiêu cực khi thi hành công vụ.",
      "Hướng dẫn, giúp đỡ người tham gia giao thông, đặc biệt là người tàn tật, người cao tuổi, trẻ em và phụ nữ.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 226,
    question: "Để góp phần xây dựng văn hóa giao thông, người lái xe không được thực hiện hành vi nào sau đây?",
    answers: [
      "Bấm còi, rú ga liên tục.",
      "Tích cực sử dụng phương tiện giao thông công cộng.",
      "Tham gia giải tỏa vi phạm hành lang giao thông.",
      "Tất cả các ý trên."
    ],
    correctAnswer: 0,
  },

  {
    id: 227,
    question: "Người có Giấy phép lái xe do ngành Công an cấp khi không phục vụ trong ngành Công an phải thực hiện quy định nào dưới đây?",
    answers: [
      "Tiếp tục sử dụng Giấy phép lái xe do ngành Công an cấp.",
      "Phải đến cơ quan quản lý Giấy phép lái xe thuộc ngành giao thông vận tải, quân đội để làm thủ tục đổi Giấy phép lái xe."
    ],
    correctAnswer: 1,
  },

  {
    id: 228,
    question: "Người tham gia giao thông phải đảm bảo những tiêu chí văn hóa giao thông nào dưới đây?",
    answers: [
      "Không vi phạm và tiếp tay cho các hành vi vi phạm pháp luật về giao thông đường bộ.",
      "Chấp hành nghiêm túc hệ thống báo hiệu đường bộ, đi đúng phần đường, làn đường quy định; đã uống rượu, bia thì không điều khiển phương tiện tham gia giao thông; không điều khiển xe chạy quá tốc độ quy định.",
      "Có thái độ hợp tác, hành vi ứng xử văn minh, lịch sự khi xảy ra tai nạn giao thông.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 229,
    question: "Để xây dựng văn hóa giao thông, người tham gia giao thông cần có ý thức tự giác thực hiện những nội dung gì?",
    answers: [
      "Tăng cường hiểu biết pháp luật về giao thông đường bộ; chủ động rènluyện, tạo thói quen tự giác, ứng xử có văn hóa trong chấp hành pháp luật về giao thông đường bộ.",
      "Tôn trọng, nhường nhịn, chia sẻ, giúp đỡ người tham gia giao thông khác, nhất là trong ùn tắc giao thông, khi va chạm, gặp tai nạn giao thông; giúp đỡ người khuyết tật, trẻ em và người cao tuổi; có ý thức trách nhiệm với bản thân và cộng đồng khi tham gia giao thông; biết bảo vệ, bênh vực cái đúng và phê phán cái sai, vui vẻ nhận lỗi khi vi phạm.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 230,
    question: "Khi điều khiển phương tiện tham gia giao thông, gặp người đi xe đạp bị ngã, anh (chị) sẽ xử lý như thế nào?",
    answers: [
      "Không dừng lại và tiếp tục hành trình.",
      "Dừng phương tiện, xem xét tình trạng sức khỏe người đi xe đạp, nếu bị thương thì gọi xe cứu thương và thông báo cho người nhà. Nếu người đi xe đạp không có vấn đề gì về sức khỏe thì đỡ người, dắt xe đạp vào lề đường và tiếp tục hành trình."
    ],
    correctAnswer: 1,
  },

  {
    id: 231,
    question: "Khi đang lái xe, anh (chị) nhìn thấy xe đi phía trước chở vật liệu xây dựng nhưng bạt phủ đã bị bung, rách gây ô nhiễm môi trường và nguy hiểm cho người, phương tiện tham gia giao thông, anh (chị) sẽ xử lý như thế nào?",
    answers: [
      "Tìm cách để ra tín hiệu thông báo cho người lái xe chở vật liệu xây dựng biết, khắc phục theo đúng quy định của pháp luật.",
      "Tăng tốc vượt qua xe chở vật liệu xây dựng để tiếp tục hành trình của mình.",
      "Ghi nhận và thông báo cho lực lượng Cảnh sát giao thông biết để xử lý.",
      "Ý 1 và ý 3."
    ],
    correctAnswer: 3,
  },

  {
    id: 232,
    question: "Khi lái xe trên đường, phát hiện cửa sau bên phụ xe phía trước đóng không chặt, anh (chị) sẽ xử lý như thế nào?",
    answers: [
      "Bấm còi liên tục và cho xe vượt bên trái xe đó, sau đó tiếp tục hành trình.",
      "Tìm cách ra tín hiệu thông báo để người lái xe phía trước biết vấn đề mất an toàn."
    ],
    correctAnswer: 1,
  },

  {
    id: 233,
    question: "Kết thúc buổi liên hoan mà tất cả mọi người đều đã uống bia, rượu, có người trong nhóm lái xe rủ anh (chị) đi cùng, anh (chị) sẽ xử lý thế nào?",
    answers: [
      "Từ chối không đi và khuyên người bạn nên gửi xe lại do đã uống bia, rượu.",
      "Kiên quyết không đi cùng vì sợ tai nạn.",
      "Đồng ý đi cùng với điều kiện anh (chị) lái xe."
    ],
    correctAnswer: 0,
  },

  {
    id: 234,
    question: "Khi lái xe tham gia giao thông, bị một xe mô tô bất ngờ tạt đầu xe, anh (chị) sẽ làm gì?",
    answers: [
      "Đuổi theo để chèn ép xe mô tô vừa tạt đầu xe mình.",
      "Bình tĩnh xử lý tình huống đảm bảo an toàn và tiếp tục di chuyển.",
      "Đuổi theo để tranh luận đúng, sai với người điều khiển xe mô tô."
    ],
    correctAnswer: 1,
  },

  {
    id: 235,
    question: "Khi lái xe tham gia giao thông vào ban đêm, gặp xe đi ngược chiều bật đèn chiếu xa, anh (chị) nên làm gì?",
    answers: [
      "Sử dụng đèn chiếu xa để chiếu lại.",
      "Giảm tốc độ và đảm bảo đèn ở phương tiện mình ở chế độ đèn chiếu gần.",
      "Bấm còi hoặc nháy đèn pha để cảnh báo.",
      "Ý 2 và ý 3."
    ],
    correctAnswer: 1,
  },

  {
    id: 236,
    question: "Khi lái xe, gặp tình huống người dẫn gia súc vượt qua đường, anh (chị) nên làm gì?",
    answers: [
      "Bấm còi liên tục để thúc giục nhanh chóng thông qua.",
      "Gấp rút tăng tốc lách lên để đi trước khi gia súc đi qua.",
      "Giảm tốc độ, không bấm còi, chờ gia súc đi qua sau đó mới di chuyển tiếp."
    ],
    correctAnswer: 2,
  },

  {
    id: 237,
    question: "Khi điều khiển xe mô tô trên đoạn đường xảy ra ùn tắc, anh (chị) xử lý như thế nào?",
    answers: [
      "Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường.",
      "Lấn sang trái đường để vượt lên xe khác.",
      "Đi đúng phần đường, làn đường, tuân thủ hướng dẫn của người điều khiển giao thông, tín hiệu đèn giao thông, biển báo hiệu đường bộ."
    ],
    correctAnswer: 2,
  },

  {
    id: 238,
    question: "Khi thấy người vi phạm pháp luật về TTATGTĐB có hành vi lăng mạ, chửi bới và đe dọa dùng vũ lực với đồng chí Cảnh sát giao thông, anh (chị)xử lý như thế nào?",
    answers: [
      "Vận động người tham gia giao thông cùng phối hợp và hỗ trợ đồng chí Cảnh sát giao thông, yêu cầu đối tượng chấp hành đúng pháp luật và không được có hành vi lăng mạ, chửi bới và đe dọa dùng vũ lực đối với người thi hành công vụ.",
      "Sử dụng thiết bị ghi âm, ghi hình ghi nhận lại tình hình vụ việc để cung cấp cho lực lượng chức năng xử lý.",
      "Cả hai ý trên."
    ],
    correctAnswer: 2,
  },

  {
    id: 239,
    question: "Khi người tham gia giao thông không chấp hành tín hiệu đèn giao thông gây ra những hậu quả nào?",
    answers: [
      "Nguy cơ xảy ra tai nạn giao thông.",
      "Nguy cơ dẫn đến tình trạng giao thông hỗn loạn, ùn tắc giao thông.",
      "Để lại những ấn tượng không đẹp về tình trạng giao thông ở nước ta với bạn bè quốc tế.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 240,
    question: "Khi người thân của anh (chị) phơi thóc, rơm rạ, nông sản trên đường bộ, anh (chị) nên làm như thế nào?",
    answers: [
      "Để người thân phơi thóc, rơm rạ, nông sản trên đường bộ do chỉ phơi ítngày và vẫn còn đường để cho xe đi lại.",
      "Giải thích và vận động người thân không được phơi thóc, rơm rạ, nông sản trên đường bộ."
    ],
    correctAnswer: 1,
  },

  {
    id: 241,
    question: "Khi tham gia giao thông phát hiện trên đường phố bị đổ nhiều đống phế thải trái quy định gây mất an toàn giao thông, anh (chị) sẽ xử lý thế nào?",
    answers: [
      "Thông tin kịp thời cho cơ quan chức năng để khắc phục, xử lý.",
      "Không quan tâm, vì cho rằng sẽ có người khác báo cơ quan chức năng."
    ],
    correctAnswer: 0,
  },

  {
    id: 242,
    question: "Anh (chị) nên làm như thế nào khi người thân mua xe nhưng chưa làm thủ tục chuyển quyền sở hữu xe theo quy định?",
    answers: [
      "Giải thích, hướng dẫn người thân đi làm thủ tục chuyển quyền sở hữu xe theo quy định.",
      "Không có ý kiến gì để người thân tránh bị xử lý vi phạm qua phương tiện, thiết bị kỹ thuật nghiệp vụ."
    ],
    correctAnswer: 0,
  },

  {
    id: 243,
    question: "Anh (chị) cho biết ý kiến của mình về hành vi đè lên vạch kênh hoá dòng xe để chuyển hướng phương tiện khi tham gia giao thông đường bộ ?",
    answers: [
      "Trường hợp có công việc cần thiết hoặc phương tiện lưu thông đông đúc, đi đè lên vạch kênh hoá dòng xe sẽ giúp rút ngắn thời gian di chuyển và giảm ùntắc giao thông.",
      "Đè lên vạch kênh hoá khi tham gia giao thông là vi phạm pháp luật về trật tự an toàn giao thông đường bộ, bị xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ."
    ],
    correctAnswer: 1,
  },

  {
    id: 244,
    question: "Khi điều khiển phương tiện tham gia giao thông đường bộ, Cảnh sát giao thông ra hiệu lệnh dừng phương tiện để kiểm tra việc chấp hành các quy định pháp luật về trật tự, an toàn giao thông đường bộ, anh (chị) xử lý như thế nào?",
    answers: [
      "Không chấp hành hiệu lệnh dừng phương tiện, vì cho rằng bản thân không vi phạm pháp luật về trật tự giao thông đường bộ.",
      "Chấp hành hiệu lệnh dừng phương tiện và yêu cầu kiểm tra, kiểm soát.",
      "Dừng phương tiện theo hiệu lệnh nhưng không tắt máy, xuống xe, cự cãi."
    ],
    correctAnswer: 1,
  },

  {
    id: 245,
    question: "Sau mưa lớn, một đoạn đường bị sụt, lún gây cản trở, mất an toàn giao thông đường bộ, là một người dân sống gần đó, anh (chị) sẽ xử lý như thế nào?",
    answers: [
      "Thực hiện biện pháp cảnh báo an toàn ngay cho người tham gia giao thông đường bộ biết; báo ngay cho cơ quan Công an nơi gần nhất hoặc cơ quan quản lý đường bộ để có phương án khắc phục kịp thời.",
      "Cảnh báo cho người thân trong gia đình hoặc hàng xóm sống gần đó biết để cùng tránh đoạn đường này khi lưu thông."
    ],
    correctAnswer: 0,
  },

  {
    id: 246,
    question: "Trong các loại bình chữa cháy dưới đây, loại bình nào phù hợp nhất để trang bị và sử dụng trong phòng cháy, chữa cháy đối với phương tiện giao thông cơ giới đường bộ?",
    answers: [
      "Bình chữa cháy dùng chất chữa cháy gốc nước (bình nước chữa cháy) và bình chữa cháy dùng bột chữa cháy loại ABC (bình bột chữa cháy).",
      "Bình chữa cháy dùng bột chữa cháy loại ABC (bình bột chữa cháy) và bình chữa cháy dùng cacbon đioxit (bình C02 chữa cháy).",
      "Bình chữa cháy dùng cacbon đioxit (bình C02 chữa cháy) và bình chữa cháy dùng chất chữa cháy sạch (bình khí/ lỏng sạch chữa cháy)."
    ],
    correctAnswer: 0,
  },

  {
    id: 247,
    question: "Theo Anh (chị) để hệ thống điện trên phương tiện giao thông cơ giới đường bộ được đảm bảo an toàn không phát sinh tia lửa gây cháy, cần chú ý những gì?",
    answers: [
      "Dây dẫn điện, đầu giắc nối phải đảm bảo chất lượng không bị lão hóa không hở.",
      "Không lắp thêm các thiết bị điện có công suất lớn, trích nối vào bất cứ nguồn điện nào (từ bình ắc quy, dây đề, dây đèn...).",
      "Sử dụng các linh kiện (IC, cầu chì, diot nạp, bình ắc quy) đúng chủng loại, đúng công suất, chất lượng tốt.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 248,
    question: "Anh (chị) hãy cho biết các biện pháp phòng cháy đối với phương tiện giao thông cơ giới đường bộ?",
    answers: [
      "Không lắp đặt thêm thiết bị điện, phụ kiện không đúng theo thiết kế của nhà sản xuất; tuân thủ quy trình vận hành bảo trì bảo dưỡng định kỳ; cần thường xuyên kiểm tra phương tiện, khi phát hiện thấy dấu hiệu khác lạ cần khắc phục ngay.",
      "Không mua xăng, dầu ở các điểm bán tự phát, không rõ nguồn gốc; không sử dụng các biện pháp “tiết kiệm nhiên liệu” khi chưa được kiểm chứng về mức độ an toàn có thể gây hỏng xe hoặc dẫn đến nguy cơ xảy ra cháy cao.",
      "Không để các chất dễ cháy, dễ bắt lửa dưới yên xe, trong cốp xe, khi để xe trong nhà, ở nơi trông giữ xe phải tắt khóa điện, đóng chặt nắp bình nhiên liệu, để xa nguồn lửa, nguồn nhiệt.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 249,
    question: "Anh (chị) cho biết những lưu ý khi tiến hành sơ cứu nạn nhân bị tai nạn giao thông?",
    answers: [
      "Không lấy, bỏ bất cứ một dị vật nào ở da đầu và xương sọ, không dùng tay nâng đầu lên cao làm gập cổ người bị nạn.",
      "Không di chuyển người bị nạn khỏi hiện trường khi chưa cố định xương, cầm máu, không di chuyển người bị nạn bằng xe đạp, xe gắn máy.",
      "Không đưa bất cứ một vật lạ, nước vào miệng người bị nạn và cần phải chuyển nạn nhân tới bệnh viện càng sớm càng tốt.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },

  {
    id: 250,
    question: "Khi gặp nạn nhân bị bỏng trong vụ tai nạn giao thông, anh (chị) cần làm gì?",
    answers: [
      "Gọi số 115 để thông báo về tình trạng tai nạn và yêu cầu hỗ trợ y tế ngaylập tức. Quan sát hiện trường để giúp nạn nhân, đồng thời tránh gây tổn thươngcho mình.",
      "Nhanh chóng loại bỏ nguyên nhân gây bỏng bằng cách tách nạn nhân khỏi vật gây cháy, cởi bỏ quần áo nếu bén lửa, ngâm vùng da bị bỏng vào nước sạch hoặc đắp khăn mát, lưu ý không dùng khăn hoặc nước quá lạnh.",
      "Nếu nạn nhân còn tỉnh, cần cho uống bù nước. Trong thời tiết lạnh, cần giữ ấm cho cơ thể nạn nhân, sau đó nhanh chóng đưa đến cơ sở y tế gần nhất.",
      "Cả ba ý trên."
    ],
    correctAnswer: 3,
  },


];
