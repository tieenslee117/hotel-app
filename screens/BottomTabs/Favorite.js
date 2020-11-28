import React from "react";
import { View, Text } from "react-native";
import ListFavorite from "../../components/ListFavorite";
import ListHotel from "../../components/ListHotel";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../Detail";
import { BaseColor, DefaultFont } from "../../configs/theme";
import { normalizeName } from "../../helpers/normalize-helpers";
import { Button } from "react-native-elements";
import { ListRoom } from "../../components/ListRoom";
const Stack = createStackNavigator();

const images = [
  "https://imgur.com/QkiYaRE.jpg",
  "https://imgur.com/eXWQqGI.jpg",
  "https://imgur.com/ToW2oDY.jpg",
  "https://imgur.com/gcs07ZJ.jpg",
  "https://imgur.com/oO63hqH.jpg",
  "https://imgur.com/QValB0e.jpg",
  "https://imgur.com/quTQw9J.jpg",
  "https://imgur.com/qwNibWw.jpg",
  "https://imgur.com/pcS8WEF.jpg",
  "https://imgur.com/g9p4LUl.jpg",
  "https://imgur.com/IjMj6g7.jpg",
  "https://imgur.com/7uO2hxm.jpg",
  "https://imgur.com/1MxMxeN.jpg",
  "https://imgur.com/grgLc4I.jpg",
  "https://imgur.com/bZGoIjf.jpg",
  "https://imgur.com/wRigAWe.jpg",
  "https://imgur.com/kfMZUnU.jpg",
  "https://imgur.com/698auhd.jpg",
  "https://imgur.com/1WVtQbC.jpg",
];

const fakeData = [
  {
    id: "37439",
    name: "Khách sạn 7S Cozy Boutique Đà Lạt (7S Cozy Boutique Da Lat Hotel)",
    address: "52 Lương Thế Vinh, Phường 3, Thành Phố Đà Lạt, Lâm Đồng",
    logo:
      "https://www.googleapis.com/download/storage/v1/b/hotel_image/o/logo%2F4%2F4916423.jpg?generation=1563771361425642&alt=media",
    star_number: 3,
    checkin_time: "14:00",
    checkout_time: "12:00",
    overall_score: 80,
    description:
      "<p>Cozy Boutique DaLat Hotel đảm bảo sẽ làm du khách hài lòng cho dù đang đi công tác hay nghỉ dưỡng tại Đà Lạt. Nằm cách sân bay chỉ 21 km, thật dễ dàng để đi đến chỗ nghỉ 3 sao này từ sân bay. Chỗ nghỉ có vị trí rất thuận tiện, du khách có thể thoải mái tham quan, khám phá các điểm du lịch nổi tiếng.</p>\\n\\n<p>Chỗ nghỉ này được trang bị nhiều tiện nghi đa dạng, hứa hẹn sẽ làm hài lòng ngay cả những khách hàng khó tính nhất.&nbsp;Khách sạn mang lại nhiều tiện nghi để kỳ nghỉ của bạn tại Đà Lạt&nbsp;thêm phần hấp dẫn, thú vị.&nbsp;Địa điểm ăn uống xung quanh như Nhà hàng&nbsp;Nhà Tôi, K cafe, Daily&nbsp;Cafe, Rain club, Nhà hàng Nướng Mọ Tề, Big C, Chợ Đà Lạt,...</p>\\n\\n<p>Các tiện nghi và dịch vụ do Cozy Boutique DaLat Hotel cung cấp đảm bảo sẽ mang lại cho du khách một kỳ nghỉ vừa ý nhất. Khi dừng chân tại điểm đến tuyệt vời này, du khách có thể tận hưởng các tiện nghi như:</p>\\n\\n<ul>\\n\\t<li>Wifi miễn phí cho mọi phòng.</li>\\n\\t<li>Dọn phòng hằng ngày.</li>\\n\\t<li>Xe lăn vào được.</li>\\n\\t<li>Quầy lễ tân 24 giờ.&nbsp;</li>\\n\\t<li>Wifi công cộng.</li>\\n</ul>\\n\\n<p>Du khách có thể nghỉ ngơi trong không gian thân thiện của 34 phòng nghỉ, bỏ lại mọi âu lo, mỏi mệt với các tiện nghi trong hầu hết các phòng như tivi màn hình phẳng, bộ ga giường, lối vào riêng, dép, khăn các loại. Chỗ nghỉ cũng có nhiều phương tiện vui chơi giải trí để cho bạn không bao giờ cảm thấy nhàm chán. Nếu bạn đang tìm kiếm chỗ nghỉ tiện nghi và thoải mái tại Đà Lạt, Cozy Boutique DaLat Hotel sẽ là ngôi nhà thứ hai của bạn.</p>\\n\\n<p>Giờ check-in là 14:00 và check-out là 12:00 ngày kế tiếp.</p>\\n",
    avg_price: "742,500",
    longitude: 108.44226837158203,
    latitude: 11.932027816772461,
    review_count: 46,
    suggest: [
      {
        price: "742500.0",
        provider: "2",
        url: "3000020009820",
      },
    ],
    image_list: [],
    final_score: "10",
    cleanliness_score: 8.720000267028809,
    meal_score: 8,
    location_score: 7.949999809265137,
    service_score: 8.390000343322754,
    sleep_quality_score: 8.479999542236328,
    tours: 1,
    night_club: -1,
    relax_spa: 0,
    relax_sauna: 0,
    room_service_24_hour: -1,
    poolside_bar: -1,
    restaurants: 1,
    shops: 0,
    bar: 0,
  },
  {
    id: "1025",
    name: "Lotte Hotel Hanoi",
    address: "54 Liễu Giai, Quận Ba Đình, Hà Nội",
    logo:
      "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2F1GDSYM1909_%2Ftmp%2Fplaytemp2255092188038235168%2FmultipartBody1433133386320799658asTemporaryFile?generation=1585037619004713&alt=media",
    star_number: 5,
    checkin_time: "14:00",
    checkout_time: "12:00",
    overall_score: 95,
    description:
      "<p><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Tọa lạc tạị vị trí chiến lược ở thành phố Hà Nội, <strong>Lotte Hotel Hanoi</strong> cung cấp chỗ ở hiện đại và sang trọng với truy cập WiFi miễn phí trong toàn bộ khuôn viên. Nơi đây có các tiện nghi như hồ bơi ngoài trời, hồ bơi trong nhà, trung tâm thể dục, phòng xông hơi khô và chỗ đỗ xe miễn phí ngay trong khuôn viên.</span></span></p>\\n\\n<p><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Khách sạn không hút thuốc này chỉ cách Trung tâm Triển lãm Giảng Võ 1,2 km, và Bảo tàng Dân tộc học Việt Nam cách đó 1,8 km. Chùa Một Cột nổi tiếng cách nơi nghỉ này 2,2 km, trong khi Sân bay Quốc tế Nội Bài nằm trong tầm bán kính 20 km lái xe từ khách sạn.</span></span></p>\\n\\n<p><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Cung cấp tầm nhìn hướng ra quang cảnh thành phố, các phòng và suite máy lạnh tại đây được trang bị tủ quần áo, két an toàn, truyền hình cáp/ vệ tinh và khu vực tiếp khách kèm ghế sofa. Ngoài ra còn được trang bị minibar và tiện nghi pha trà/cà phê. Phòng tắm riêng đi kèm với bồn tắm, vòi sen riêng, áo choàng tắm và máy sấy tóc.</span></span></p>\\n\\n<p><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Tại <strong>Lotte Hotel Hanoi</strong>, có đội</span></span><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>&nbsp;ngũ nhân viên thân thiện tại quầy lễ tân 24 giờ có thể hỗ trợ khách các dịch vụ: </span></span></p>\\n\\n<ul>\\n\\t<li><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Dịch vụ giặt ủi.</span></span></li>\\n\\t<li><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Dịch vụ cho thuê xe hơi và sắp xếp tour du lịch. </span></span></li>\\n\\t<li><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Dịch vụ đưa đón sân bay và tiện nghi phục vụ doanh nhân được cung cấp kèm phụ phí.</span></span></li>\\n\\t<li><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Hồ bơi trong nhà và ngoài trời.</span></span></li>\\n\\t<li><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Dịch vụ đổi ngoại tệ.</span></span></li>\\n</ul>\\n\\n<p><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Nhà hàng của khách sạn phục vụ vô số món ăn địa phương và phương Tây ngon miệng. Quý khách có thể thưởng thức thức uống sau bữa ăn tại quán bar, trong khi tiện nghi nướng thịt ngoài trời được cung cấp theo yêu cầu. Các tùy chọn dịch vụ phòng cũng được cung cấp để khách được thuận tiện.</span></span></p>\\n\\n<p><span style=font-size:14px;><span style=font-family:Arial,Helvetica,sans-serif;>Quận Ba Đình là lựa chọn tuyệt vời cho du khách thích&nbsp;cà phê,&nbsp;khám phá phố cổ&nbsp;và&nbsp;lịch sử.<br />\\n<br />\\nGiờ check-in là 14:00 và check-out là 12:00 ngày kế tiếp.</span></span></p>\\n",
    avg_price: "2,503,792",
    longitude: 105.81271362304688,
    latitude: 21.03206443786621,
    review_count: 2513,
    suggest: [
      {
        price: "2570400.0",
        provider: "5",
        url: "https://www.booking.com/hotel/vn/lotte-hanoi.vi.html",
      },
      {
        price: "2225389.2",
        provider: "4",
        url: "8829295",
      },
      {
        price: "2402198.0",
        provider: "3",
        url: "/vi-vn/lotte-hotel-hanoi/hotel/hanoi-vn.html",
      },
      {
        price: "2817180.8",
        provider: "2",
        url: "1000000471110",
      },
    ],
    image_list: [
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/824aae2f.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/4ee7e7b0.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/8ea72de9.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/624f984a.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/5b7be048.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/ff2951fe.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/a9a1b9ba.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/a4f1350e.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/ff03b67e.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/9000000/8830000/8829300/8829295/3206a3e2.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
    ],
    final_score: "10",
    cleanliness_score: 9.630000114440918,
    meal_score: 8.640000343322754,
    location_score: 8.979999542236328,
    service_score: 9.430000305175781,
    sleep_quality_score: 9.630000114440918,
    tours: 1,
    night_club: 1,
    relax_spa: 1,
    relax_sauna: 1,
    room_service_24_hour: 1,
    poolside_bar: -1,
    restaurants: 1,
    shops: 0,
    bar: 1,
  },
  {
    id: "1903",
    name: "Khách sạn Spring Flower (Spring Flower Hotel)",
    address: "45 Hàng Bồ, Quận Hoàn Kiếm, Hà Nội",
    logo:
      "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FDESEW9BOMW_%2Ftmp%2Fplaytemp4451784278522770582%2FmultipartBody8307930986921425277asTemporaryFile?generation=1586619172274093&alt=media",
    star_number: 3,
    checkin_time: "14:00",
    checkout_time: "12:00",
    overall_score: 85,
    description:
      "<p><strong>Spring Flower Hotel</strong> tọa lạc tại khu vực Quận Hoàn Kiếm, cách Chợ Đồng Xuân khoảng 400 m, cách Hồ Hoàn Kiếm 700 m, cách Lăng Chủ tịch Hồ Chí Minh 1,5km, cách Ga Hà Nội khoảng 1,4 km và cách Sân bay Quốc tế Nội Bài cách khoảng&nbsp;20,8 km.</p>\\n\\n<p>Du khách có thể thưởng thức bữa sáng tại nhà hàng trong khuôn viên khách sạn. Một số địa điểm ẩm thực quanh khách sạn được đánh giá cao như: Nhà hàng Mediterraneo,&nbsp;Nhà Hàng Hà Nội Tân Tân,&nbsp;Nhà hàng Hanoi Garden, Nhà hàng Long Đình,&nbsp;Nhà hàng Hanoi Garden,..</p>\\n\\n<p>Được thiết kế theo phong cách hiện đại, Khách sạn<strong>&nbsp;</strong>cung cấp những tiện ích và dịch vụ đa dạng:</p>\\n\\n<ul>\\n\\t<li>Wifi miễn phí toàn bộ khách sạn.</li>\\n\\t<li>Lễ tân 24h.</li>\\n\\t<li>Dịch vụ thu đổi ngoại tệ.</li>\\n\\t<li>Dịch vụ bán vé, tour.</li>\\n\\t<li>Dịch vụ đưa đón.</li>\\n\\t<li>Trung tâm Spa &amp; chăm sóc sức khoẻ.</li>\\n\\t<li>Dịch vụ giặt là.</li>\\n</ul>\\n\\n<p><strong>Spring Flower Hotel&nbsp;</strong>là sự lựa chọn hoàn hảo với khách du lịch muốn tham quan và khám phá Thủ đô. Từ đây, du khách có thể dễ dàng tiếp cận được nét đẹp sống động của Hà Nội&nbsp;ở mọi góc cạnh. Với vị trí thuận lợi, khách sạn dễ dàng tiếp cận những điểm tham quan du lịch nổi tiếng.&nbsp;Các cặp đôi, gia đình&nbsp;đặc biệt thích khách sạn này.</p>\\n\\n<p>Khách sạn có 30 khu phòng.&nbsp;Các phòng nghỉ được trang bị máy lạnh, TV truyền hình cáp màn hình phẳng và minibar. Phòng tắm riêng có tiện nghi vòi sen, đồ vệ sinh cá nhân và máy sấy tóc để tạo sự thoải mái cho khách.</p>\\n\\n<p>Giờ check-in là 14:00 và check-out là 12:00 ngày kế tiếp.</p>\\n",
    avg_price: "1,456,132",
    longitude: 105.84942626953125,
    latitude: 21.03386878967285,
    review_count: 1261,
    suggest: [
      {
        price: "1908979.6",
        provider: "4",
        url: "8514459",
      },
      {
        price: "808420.0",
        provider: "3",
        url: "/vi-vn/spring-flower-hotel/hotel/hanoi-vn.html",
      },
      {
        price: "878800.0",
        provider: "5",
        url: "https://www.booking.com/hotel/vn/spring-flower.vi.html",
      },
      {
        price: "2228329.2",
        provider: "2",
        url: "1000000464779",
      },
    ],
    image_list: [
      "https://cf.bstatic.com/images/hotel/max400/218/218283276.jpg",
      "#",
      "https://cf.bstatic.com/images/hotel/max400/209/209609193.jpg",
      "https://cf.bstatic.com/images/hotel/max400/218/218283256.jpg",
      "https://cf.bstatic.com/xdata/images/landmark/max1024/182040.webp?k=c6fce6a27b142f8e8e5790c4a096a538c875adbacea9dfdd8163c02fe854e14b&o=",
      "https://cf.bstatic.com/images/hotel/max400/209/209763698.jpg",
      "https://cf.bstatic.com/images/hotel/max400/209/209764230.jpg",
      "https://cf.bstatic.com/images/hotel/max400/218/218283269.jpg",
      "https://cf.bstatic.com/images/hotel/max400/237/23775520.jpg",
      "https://cf.bstatic.com/images/hotel/max400/209/209764052.jpg",
    ],
    final_score: "10",
    cleanliness_score: 8.5,
    meal_score: 8.289999961853027,
    location_score: 9.100000381469727,
    service_score: 8.899999618530273,
    sleep_quality_score: 8.5,
    tours: 1,
    night_club: -1,
    relax_spa: 1,
    relax_sauna: 0,
    room_service_24_hour: 1,
    poolside_bar: -1,
    restaurants: 1,
    shops: 0,
    bar: 1,
  },
  {
    id: "33359",
    name: "Granda West Lake Apartment",
    address: "Số 3 ngõ 100, Đường Võ Chí Công, Quận Tây Hồ, Hà Nội",
    logo:
      "https://www.googleapis.com/download/storage/v1/b/hotel_image/o/logo%2F4%2F5638299.jpg?generation=1563770013984552&alt=media",
    star_number: 4,
    checkin_time: "13:00",
    checkout_time: "12:00",
    overall_score: 85,
    description:
      "<p>Phù hợp cho cả những chuyến công tác và du lịch nghỉ mát, <b>Granda West Lake Apartment</b> nằm ở một vị trí lý tưởng tại Quận Cầu Giấy, một trong những địa điểm ruột của người dân bản địa. Từ đây, thật dễ dàng để trải nghiệm mọi khía cạnh của thành phố sống động này.&nbsp; Chỉ cách Bảo tàng dân tộc học Việt Nam 3,2 km,&nbsp;Chùa Một Cột và Đền Quán Thánh đều nằm trong bán kính 4,4 km từ khách sạn căn hộ này. Sân bay gần nhất là sân bay quốc tế Nội Bài, cách Granda West Lake Apartment 21 km.</p>\\n\\n<p>Xung quanh Khách sạn có nhiều điểm ăn uống được ưa thích tại&nbsp;địa phương như:&nbsp;Phở Vũ, bún cá, phở Lý Quốc Sư...&nbsp;Quý khách cũng có thể lựa chọn thưởng thức đồ uống và coffee gần Khách sạn với những view chụp ảnh sống ảo.</p>\\n\\n<p>Khách sạn cung cấp nhiều dịch vụ đa dạng như:</p>\\n\\n<ul>\\n\\t<li>Lễ tân 24h.</li>\\n\\t<li>Dịch vụ dọn phòng hàng ngày.</li>\\n\\t<li>Dịch vụ thu đổi ngoại tệ.</li>\\n\\t<li>Giữ hành lý.</li>\\n</ul>\\n\\n<p>Mọi phòng nghỉ đều được trang bị nhiều tiện nghi đa dạng. Đặc biệt, nhiều phòng còn có những tiện nghi như tivi màn hình phẳng, thảm, đồ dùng lau dọn vệ sinh, giá treo quần áo, nước uống chào đón miễn phí, sẽ làm hài lòng du khách khó tính nhất. Chỗ nghỉ cũng có nhiều phương tiện vui chơi giải trí để cho bạn không bao giờ cảm thấy nhàm chán. Granda West Lake Apartment là điểm dừng chân lý tưởng cho du khách tìm kiếm một chỗ nghỉ có sức hút riêng biệt, thoải mái và thuận tiện tại Hà Nội.</p>\\n\\n<p>Giờ check-in là 14:00 và check-out là 12:00 ngày kế tiếp.</p>\\n",
    avg_price: "515,257",
    longitude: 105.81053161621094,
    latitude: 21.073741912841797,
    review_count: 20,
    suggest: [
      {
        price: "515257.16",
        provider: "2",
        url: "3000020012804",
      },
    ],
    image_list: [],
    final_score: "10",
    cleanliness_score: 9.239999771118164,
    meal_score: 7.820000171661377,
    location_score: 8.479999542236328,
    service_score: 8.329999923706055,
    sleep_quality_score: 8.859999656677246,
    tours: 0,
    night_club: -1,
    relax_spa: 0,
    relax_sauna: 0,
    room_service_24_hour: -1,
    poolside_bar: -1,
    restaurants: 0,
    shops: 0,
    bar: 0,
  },
  {
    id: "35191",
    name: "Grand Sunrise Boutique Hotel",
    address: "10 Lê Lộ Mỹ An, Quận Ngũ Hành Sơn, Đà Nẵng",
    logo:
      "https://www.googleapis.com/download/storage/v1/b/hotel_image/o/logo%2F4%2F5796951.jpg?generation=1563770619239607&alt=media",
    star_number: 4,
    checkin_time: "14:00",
    checkout_time: "12:00",
    overall_score: 88.0,
    description:
      "<p>Là điểm nghỉ dưỡng tinh tế ở Đà Nẵng Khách sạn Grand Sunrise Boutique thuộc hệ thống khách sạn mang thương hiệu Grand Sunrise. Tọa lạc tại 10 Lê Lộ, Ngũ Hành Sơn, Đà Nẵng - giữa khu An Thượng - khu phố Tây của thành phố từ khách sạn rất dể dàng đến thắm quan các địa điểm du lịch nơi đây như:&nbsp;cầu Trần Thị Lý, cầu Rồng, Biển Mỹ Khê, bảo tàng Chăm. Từ Sận bay Đà Nẵng di chuyển đến khách sạn với quãng đường 5 km.</p>\\n\\n<p>Ngoài nhà hàng, quầy Bar&nbsp;của khách sạn quanh đó còn rất nhiều quán ăn nổi tiếng:&nbsp;Paradise Restauran,Chilling Bar, chợ Hàn...</p>\\n\\n<p>Khách sạn&nbsp;cung cấp những dịch vụ đa dạng nổi bật trong số đó là:</p>\\n\\n<ul>\\n\\t<li>Wifi miễn phí.</li>\\n\\t<li>Lễ tân 24/7.</li>\\n\\t<li>Dịch vụ giặt là.</li>\\n\\t<li>Phòng tập gym</li>\\n\\t<li>Phòng massage &amp; spa</li>\\n\\t<li>Hồ bơi trên sân thượng.</li>\\n</ul>\\n\\n<p>Khách sạn có 80 phòng. Thiết kế nội thất mang tinh thần mới mẻ, hiện đại. Tất cả phòng nghỉ của Grand Sunrise Boutique đều là một tiểu thiên đường của những mảng màu sắc, dấu ấn hiện đại&nbsp;và chốn nghỉ dưỡng đúng nghĩa với đầy đủ tiện nghi phòng. Các cặp đôi, gia đình đều thích khách sạn này.</p>\\n",
    avg_price: "600,356",
    longitude: 108.24472045898438,
    latitude: 16.05449676513672,
    review_count: 21,
    suggest: [
      {
        price: "600355.7",
        provider: "3",
        url: "/vi-vn/grand-sunrise-boutique-hotel_2/hotel/da-nang-vn.html",
      },
    ],
    image_list: [
      "https://pix6.agoda.net/geo/poi/142798/2_142798_02.jpg?s=1024x768",
      "https://pix6.agoda.net/hotelImages/5796951/-1/1eaec6278729fbb668c8b68efaa53b7d.jpg?s=1024x768",
      "https://pix6.agoda.net/hotelImages/5796951/-1/31fcdadd7b13fba2c24b984d102083fc.jpg?s=1024x768",
      "https://pix6.agoda.net/hotelImages/5796951/-1/04fa63da2ef586a87bed8b5f09e66d8a.jpg?s=1024x768",
      "https://pix6.agoda.net/hotelImages/5796951/-1/45f39fe93da77be1b3c9c9113b9ebbb7.jpg?s=1024x768",
      "https://pix6.agoda.net/hotelImages/5796951/-1/8ad0c1878ac11fec8bdd1c901e9ca2a9.jpg?s=1024x768",
      "https://pix6.agoda.net/hotelImages/5796951/-1/94975232966156ada63696cd51c4d762.jpg?s=1024x768",
      "https://pix6.agoda.net/hotelImages/5796951/-1/4617ee74702b57860a628469fad3ca88.jpg?s=1024x768",
      "https://pix6.agoda.net/hotelImages/5796951/-1/b88171e42df9e474d0c269b5e48a3aaa.jpg?s=1024x768",
      "https://pix6.agoda.net/hotelImages/5796951/-1/734e1bba58183201ef00d4e397eec5db.jpg?s=1024x768",
    ],
    final_score: "10",
    cleanliness_score: 9.300000190734863,
    meal_score: -1.0,
    location_score: 8.600000381469727,
    service_score: 9.699999809265137,
    sleep_quality_score: -1.0,
    tours: 1,
    night_club: -1,
    relax_spa: 1,
    relax_sauna: 1,
    room_service_24_hour: -1,
    poolside_bar: -1,
    restaurants: 1,
    shops: -1,
    bar: 1,
  },
  {
    id: "8145",
    name: "Kingdom Hotel",
    address: "234 Hồ Nghinh, Phước Mỹ, Quận Sơn Trà, Đà Nẵng",
    logo:
      "https://www.googleapis.com/download/storage/v1/b/hotel_image/o/logo%2F4%2F1157924.jpg?generation=1563770636156341&alt=media",
    star_number: 2,
    checkin_time: "14:00",
    checkout_time: "12:00",
    overall_score: 81.0,
    description:
      "<p style=text-align: justify;>Tọa lạc tại vị trí lý tưởng ở khu Bãi biển Mỹ Khê của thành phố Đà Nẵng, Kingdom&nbsp;Hotel nằm cách Cầu tàu Tình yêu 2 km, Cầu Sông Hàn 2,3 km và Bảo tàng Chăm 2,7 km.&nbsp;Kingdom Danang Hotel nằm trong bán kính 3,5 km từ Trung tâm thương mại Indochina Riverside và 6 km từ Công viên Châu Á. Sân bay gần nhất là sân bay quốc tế Đà Nẵng, cách đó 6 km.</p>\\n\\n<p style=text-align: justify;>Xung quanh khách sạn có các địa điểm ăn uống như Mì Quảng bà Mua, cơm gà bà Buội, tiệm ăn Chợ Lớn, chợ hải sản địa phương,...</p>\\n\\n<p style=text-align: justify;>Khách sạn&nbsp;tiêu chuẩn 2* được xây dựng với thiết kế và nội thất hiện đại, đẹp mắt, lịch lãm cùng các dịch vụ:</p>\\n\\n<ul>\\n\\t<li style=text-align: justify;>Dọn phòng hàng ngày.</li>\\n\\t<li style=text-align: justify;>Bán tour.</li>\\n\\t<li style=text-align: justify;>Lễ tân 24h.</li>\\n\\t<li style=text-align: justify;>Cho thuê xe máy và ô tô</li>\\n\\t<li style=text-align: justify;>Minibar tiện nghi trong phòng</li>\\n\\t<li style=text-align: justify;>Thang máy</li>\\n</ul>\\n\\n<p style=text-align: justify;>Các phòng nghỉ&nbsp;được trang trí thẩm mỹ với các tiện nghi như tivi màn hình phẳng, điều hòa nhiệt độ, máy sấy tóc và tủ treo quần áo. Phòng tắm riêng có vòi hoa sen đi kèm đồ dùng vệ sinh cá nhân miễn phí.</p>\\n\\n<p style=text-align: justify;>Giờ check-in của khách sạn là 14:00 và giờ check-out là 12:00 ngày kế tiếp.</p>\\n",
    avg_price: "253,302",
    longitude: 108.24325561523438,
    latitude: 16.066274642944336,
    review_count: 60,
    suggest: [
      {
        price: "235498.0",
        provider: "4",
        url: "22263435",
      },
      {
        price: "271106.34",
        provider: "2",
        url: "3000010022630",
      },
    ],
    image_list: [
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/88860f09.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/36bc22b8.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/ce1547ee.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/b81cf0ec.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/25a3f42f.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/fb88c169.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/966ae98b.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/5be12953.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/0a087212.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
      "https://images.trvl-media.com/hotels/23000000/22270000/22263500/22263435/4cf4306d.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium",
    ],
    final_score: "10",
    cleanliness_score: 8.550000190734863,
    meal_score: 7.710000038146973,
    location_score: 8.420000076293945,
    service_score: 8.300000190734863,
    sleep_quality_score: 8.270000457763672,
    tours: 1,
    night_club: -1,
    relax_spa: 0,
    relax_sauna: 0,
    room_service_24_hour: -1,
    poolside_bar: -1,
    restaurants: 0,
    shops: 0,
    bar: 0,
  },
  {
    id: "35214",
    name: "Khách sạn Vitalis Riverside (Vitalis Riverside Hotel)",
    address: "105 Trần Hưng Đạo, Quận Sơn Trà, Đà Nẵng",
    logo:
      "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FXJLRJZ4YOX_%2Ftmp%2Fplaytemp1520709976633082362%2FmultipartBody6219180720588988404asTemporaryFile?generation=1587527862498108&alt=media",
    star_number: 2,
    checkin_time: "13:00",
    checkout_time: "11:00",
    overall_score: 84.0,
    description:
      "<p><span style=font-family:Arial,Helvetica,sans-serif;><span style=color: rgb(56, 56, 56); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;>Tọa lạc tại vị trí tuyệt đẹp ở khu Sông Hàn thuộc thành phố Đà Nẵng, Vitalis Riverside Hotel nằm cách Bãi biển Mỹ Khê 2 km, Cầu Sông Hàn 1,4 km và Cầu tàu Tình yêu 2 km, </span>nằm trong bán kính 2,4 km từ Trung tâm thương mại Indochina Riverside và 3,4 km từ Bảo tàng Chăm. Sân bay gần nhất là sân bay quốc tế Đà Nẵng, cách Vitalis Riverside Hotel 7 km. </span></p>\\n\\n<p><span style=font-family:Arial,Helvetica,sans-serif;>Du khách dễ dàng khám phá những địa điểm ăn uống nổi tiếng của thành phố.</span>Một số địa điểm ẩm thực quanh khách sạn được đánh giá cao như: Nhà hàng Cá Tầm, Lotteria, Quán Đồng Quê...</p>\\n\\n<p><span style=font-family:Arial,Helvetica,sans-serif;>Mong muốn mang đến trải nghiệm hoàn hảo cho du khách, Vitalis Riverside cung cấp các tiện nghi và dịch vụ đa dạng:<br />\\n&nbsp;• Wifi miễn phí toàn bộ khách sạn.<br />\\n&nbsp;• Dịch vụ giặt là.<br />\\n&nbsp;• Chỗ đậu xe miễn phí.<br />\\n&nbsp;• Dịch vụ phòng, lễ tân 24h</span></p>\\n\\n<p><span style=font-family:Arial,Helvetica,sans-serif;>17 phòng trên 7 tầng đem lại cho du khách không gian ấm cúng, gần gũi như một ngôi nhà thứ hai. Một số phòng được trang bị các tiện nghi như tủ áo, sàn gỗ/ván, dép, tivi màn hình phẳng, ghế sofa. Chỗ nghỉ có nhiều hoạt động vui chơi giải trí hấp dẫn như tắm nắng, góp phần làm nên một kỳ nghỉ khó quên. Khách sạn Vitalis Riverside là điểm đến cung cấp chỗ nghỉ chất lượng cao tại Đà Nẵng dành cho chuyến du lịch gia đình, cặp đôi hay nhóm bạn mong muốn trải nghiệm du lịch cùng nhau.</span></p>\\n\\n<p><span style=font-family:Arial,Helvetica,sans-serif;>Giờ check-in là 13:00 và check-out là 11:00 ngày kế tiếp.</span></p>\\n",
    avg_price: "337,686",
    longitude: 108.22899627685547,
    latitude: 16.080387115478516,
    review_count: 510,
    suggest: [
      {
        price: "299250.0",
        provider: "5",
        url: "https://www.booking.com/hotel/vn/vitalis-riverside.vi.html",
      },
      {
        price: "376122.0",
        provider: "2",
        url: "4000000958431",
      },
    ],
    image_list: [
      "https://cf.bstatic.com/images/hotel/max400/151/151001997.jpg",
      "https://cf.bstatic.com/images/hotel/max400/151/151002003.jpg",
      "https://cf.bstatic.com/images/hotel/max400/151/151002024.jpg",
      "https://cf.bstatic.com/images/hotel/max400/151/151002124.jpg",
      "https://cf.bstatic.com/images/hotel/max400/145/145842744.jpg",
      "https://cf.bstatic.com/images/hotel/max400/151/151001700.jpg",
      "https://cf.bstatic.com/images/hotel/max400/151/151001697.jpg",
      "https://cf.bstatic.com/images/hotel/max400/151/151001971.jpg",
      "https://cf.bstatic.com/images/hotel/max400/151/151001682.jpg",
      "https://cf.bstatic.com/images/hotel/max400/151/151011989.jpg",
    ],
    final_score: "10",
    cleanliness_score: 9.329999923706055,
    meal_score: 0.0,
    location_score: 8.670000076293945,
    service_score: 8.199999809265137,
    sleep_quality_score: 8.600000381469727,
    tours: 1,
    night_club: -1,
    relax_spa: 0,
    relax_sauna: 0,
    room_service_24_hour: 1,
    poolside_bar: -1,
    restaurants: 0,
    shops: 0,
    bar: 0,
  },
];

function Main({ navigation }) {
  return (
    <View>
      <ListFavorite list={fakeData} navigation={navigation} />
    </View>
  );
}
export default function Favorite() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: "transparent",
        },
        headerTintColor: BaseColor.whiteColor,
        headerTitleStyle: {
          fontWeight: "200",
          fontSize: 22,
          // color: "#000",
        },
      }}
    >
      <Stack.Screen
        name="Favorite"
        component={Main}
        options={{
          headerTitle: "Yêu thích",
          headerBackTitle: "Trờ lại",

          headerTintColor: BaseColor.orangeColor,
          headerTitleStyle: {
            fontWeight: "200",
            fontSize: 22,
            // color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTransparent: true,
          headerTitle: " ",
          headerBackTitle: " ",

          headerTintColor: BaseColor.orangeColor,
          headerTitleStyle: {
            fontWeight: "200",
            fontSize: 22,
            // color: "#000",
          },
        }}
      />
    </Stack.Navigator>
  );
}
