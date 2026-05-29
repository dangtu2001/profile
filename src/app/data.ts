export interface ProjectDetails {
  title: string;
  role: string;
  period: string;
  description: string;
  bulletPoints: string[];
  techs: string[];
  links?: { label: string; url: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  techs: string[];
}

export interface TranslationDictionary {
  navAbout: string;
  navExperience: string;
  navSkills: string;
  navProjects: string;
  navContact: string;
  heroGreeting: string;
  heroName: string;
  heroSub: string;
  heroSubtitle: string;
  cvDownload: string;
  aboutTitle: string;
  aboutText: string;
  eduTitle: string;
  eduSchool: string;
  eduMajor: string;
  eduPeriod: string;
  expTitle: string;
  skillsTitle: string;
  skillsSubtitle: string;
  projTitle: string;
  projSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;
  contactMessage: string;
  contactSend: string;
  contactSending: string;
  contactSuccess: string;
  videoLinkBtn: string;
  camDemoTitle: string;
  camDemoDesc: string;
  camStatus: string;
  camActive: string;
  camLatency: string;
  camPTZControl: string;
  camPTZTooltip: string;
  dbSliderTitle: string;
  dbSliderDesc: string;
  dbSliderRecords: string;
  dbSliderBefore: string;
  dbSliderAfter: string;
  dbSliderOptimization: string;
  dbSliderQueryTime: string;
  dbSliderStatus: string;
  dbSliderFast: string;
  dbSliderSlow: string;
}

export const translations: Record<"en" | "vi", TranslationDictionary> = {
  en: {
    navAbout: "About Me",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Interactive Projects",
    navContact: "Contact",
    heroGreeting: "Hi, I am",
    heroName: "Nguyen Dang Tu",
    heroSub: "Web Developer",
    heroSubtitle: "Specializing in real-time video streaming, high-throughput microservices, and AI-integrated camera platforms",
    cvDownload: "Download PDF Resume",
    aboutTitle: "About Me",
    aboutText: "I am an Web Developer with 3 years of experience in intelligent camera systems, video streaming, and microservice architectures. Skilled in building scalable backend services, integrating camera and VMS systems, and optimizing large-scale databases. Experienced with NodeJS, MongoDB, Kafka, Redis, Docker, and FFmpeg-based streaming solutions.",
    eduTitle: "Education",
    eduSchool: "Ho Chi Minh City University of Technology (HCMUT)",
    eduMajor: "Bachelor of Computer Science",
    eduPeriod: "Aug 2019 - Nov 2023",
    expTitle: "Professional Experience",
    skillsTitle: "Core Proficiencies",
    skillsSubtitle: "Hover on a skill to discover its application in my architectural work",
    projTitle: "Interactive Technical Showcases",
    projSubtitle: "Explore interactive functional simulations representing my professional work on deep technical integrations.",
    contactTitle: "Get in Touch",
    contactSubtitle: "Interested in discussing microservice optimization, streaming systems, or open positions? Feel free to reach out!",
    contactName: "Name",
    contactEmail: "Email Address",
    contactPhone: "Phone Number",
    contactLocation: "Location",
    contactMessage: "Your Message",
    contactSend: "Send Message",
    contactSending: "Sending...",
    contactSuccess: "Message sent successfully!",
    videoLinkBtn: "Watch AICam Product Video",
    camDemoTitle: "Interactive AI Traffic Stream & PTZ Controller",
    camDemoDesc: "This simulator represents my work on the VNPT IT AICam Platform. Interacting with the joystick triggers live adjustments. An active AI pipeline identifies speed and vehicle classes.",
    camStatus: "STREAM STATUS",
    camActive: "ACTIVE / ONLINE",
    camLatency: "LATENCY",
    camPTZControl: "PTZ JOYSTICK CONTROL",
    camPTZTooltip: "Click & Drag Joystick to Pan/Tilt",
    dbSliderTitle: "MongoDB Query Index Optimization Visualizer",
    dbSliderDesc: "Adjust the slider to simulate query response speeds over massive datasets. See how my indexing strategies reduced latency from seconds to milliseconds.",
    dbSliderRecords: "Dataset Records",
    dbSliderBefore: "Unoptimized Query Time (No Index)",
    dbSliderAfter: "Optimized Query Time (With Custom Compound Index)",
    dbSliderOptimization: "PERFORMANCE BOOST",
    dbSliderQueryTime: "Query Response Time",
    dbSliderStatus: "STATUS",
    dbSliderFast: "Optimized (Sub-millisecond index scan)",
    dbSliderSlow: "Inefficient (Full table collection scan)",
  },
  vi: {
    navAbout: "Giới Thiệu",
    navExperience: "Kinh Nghiệm",
    navSkills: "Kỹ Năng",
    navProjects: "Dự Án Tương Tác",
    navContact: "Liên Hệ",
    heroGreeting: "Xin chào, tôi là",
    heroName: "Nguyễn Đăng Tú",
    heroSub: "Web Developer",
    heroSubtitle: "Chuyên sâu về truyền dẫn video thời gian thực, hệ thống microservices lưu lượng lớn và nền tảng AI Camera.",
    cvDownload: "Tải PDF CV",
    aboutTitle: "Giới Thiệu",
    aboutText: "Tôi là một Web Developer với 3 năm kinh nghiệm trong hệ thống camera thông minh, truyền phát video và kiến trúc microservices. Có kỹ năng xây dựng các dịch vụ backend có khả năng mở rộng, tích hợp hệ thống camera và VMS, tối ưu hóa cơ sở dữ liệu lớn. Có kinh nghiệm với NodeJS, MongoDB, Kafka, Redis, Docker và các giải pháp truyền phát dựa trên FFmpeg.",
    eduTitle: "Học Vấn",
    eduSchool: "Trường Đại học Bách Khoa TP.HCM (HCMUT)",
    eduMajor: "Cử nhân Khoa học Máy tính",
    eduPeriod: "Tháng 8/2019 - Tháng 11/2023",
    expTitle: "Kinh Nghiệm Thực Chiến",
    skillsTitle: "Năng Lực Cốt Lõi",
    skillsSubtitle: "Rê chuột vào kỹ năng để xem ứng dụng thực tế trong công việc của tôi",
    projTitle: "Mô Phỏng Kỹ Thuật Tương Tác",
    projSubtitle: "Khám phá các mô phỏng trực quan tương tác thực tế dựa trên các sản phẩm kỹ thuật cao tôi đã thiết kế.",
    contactTitle: "Kết Nối Với Tôi",
    contactSubtitle: "Bạn muốn trao đổi về tối ưu microservices, truyền tải video, hoặc có cơ hội hợp tác? Hãy gửi tin nhắn ngay nhé!",
    contactName: "Họ và Tên",
    contactEmail: "Địa chỉ Email",
    contactPhone: "Số Điện Thoại",
    contactLocation: "Địa điểm",
    contactMessage: "Lời nhắn của bạn",
    contactSend: "Gửi Tin Nhắn",
    contactSending: "Đang gửi...",
    contactSuccess: "Gửi tin nhắn thành công!",
    videoLinkBtn: "Xem Video Ra Mắt AICam",
    camDemoTitle: "Trình Mô Phỏng Camera AI & Điều Khiển PTZ",
    camDemoDesc: "Mô phỏng dựa trên nền tảng AICam tôi phát triển tại VNPT IT. Di chuyển nút điều hướng (joystick) để tinh chỉnh góc quay. Luồng AI tự động phát hiện tốc độ và loại phương tiện.",
    camStatus: "TRẠNG THÁI LUỒNG",
    camActive: "ĐANG HOẠT ĐỘNG",
    camLatency: "ĐỘ TRỄ",
    camPTZControl: "BỘ ĐIỀU HƯỚNG PTZ (JOYSTICK)",
    camPTZTooltip: "Nhấp & Kéo Joystick để xoay camera",
    dbSliderTitle: "Trực Quan Hóa Tối Ưu Hóa Index MongoDB",
    dbSliderDesc: "Kéo thanh trượt để giả lập tốc độ truy vấn trên tập dữ liệu khổng lồ. Xem cách chiến lược lập chỉ mục (index) của tôi giảm độ trễ từ hàng giây xuống mili-giây.",
    dbSliderRecords: "Số Lượng Bản Ghi",
    dbSliderBefore: "Thời gian truy vấn chưa tối ưu (Không Index)",
    dbSliderAfter: "Thời gian truy vấn đã tối ưu (Compound Index)",
    dbSliderOptimization: "HIỆU SUẤT TĂNG TRƯỞNG",
    dbSliderQueryTime: "Thời gian phản hồi truy vấn",
    dbSliderStatus: "TRẠNG THÁI",
    dbSliderFast: "Tối ưu (Quét chỉ mục siêu tốc)",
    dbSliderSlow: "Quá tải (Quét toàn bộ cơ sở dữ liệu - Colscan)",
  }
};

export const skillsData = {
  languages: {
    label: "Languages",
    labelVi: "Ngôn Ngữ",
    items: [
      { 
        name: "JavaScript", 
        desc: "Core language utilized across fullstack development from Next.js to Node.js backend pipelines.",
        descVi: "Ngôn ngữ cốt lõi được sử dụng xuyên suốt quá trình phát triển fullstack từ Next.js đến các đường ống xử lý backend Node.js."
      },
      { 
        name: "TypeScript", 
        desc: "Enforced type-safety and robust interfaces across complex gRPC microservices and enterprise codebases.",
        descVi: "Tăng cường an toàn kiểu (type-safety) và xây dựng giao diện lập trình mạnh mẽ trên các microservices gRPC và mã nguồn doanh nghiệp."
      }
    ]
  },
  frontend: {
    label: "Front-end",
    labelVi: "Front-end",
    items: [
      { 
        name: "ReactJS", 
        desc: "Engineered responsive, highly stateful interfaces and custom user hooks for reactive layouts.",
        descVi: "Thiết kế các giao diện phản hồi nhanh, quản lý trạng thái phức tạp và xây dựng các hook tùy biến cho bố cục web động."
      },
      { 
        name: "NextJS", 
        desc: "Implemented Server-Side Rendering (SSR) and dynamic generation for performance and optimal SEO rankings.",
        descVi: "Triển khai Server-Side Rendering (SSR) và tối ưu hóa kết xuất trang động giúp nâng cao hiệu năng và thứ hạng SEO."
      },
      { 
        name: "Bootstrap", 
        desc: "Structured rapid, clean grids and responsive styling wrappers across legacy and modern platforms.",
        descVi: "Xây dựng nhanh chóng các hệ thống lưới sạch sẽ và các lớp bọc định dạng responsive trên các nền tảng cũ và hiện đại."
      },
      { 
        name: "ASP.NET MVC", 
        desc: "Maintained robust, structured enterprise web applications using standard MVC design patterns.",
        descVi: "Bảo trì các ứng dụng web doanh nghiệp cấu trúc chặt chẽ và mạnh mẽ sử dụng mô hình thiết kế MVC tiêu chuẩn."
      }
    ]
  },
  backend: {
    label: "Back-end",
    labelVi: "Back-end",
    items: [
      { 
        name: "NodeJS", 
        desc: "Built performant, non-blocking asynchronous event loop servers handling high concurrency loads.",
        descVi: "Xây dựng các máy chủ vòng lặp sự kiện bất đồng bộ không chặn (non-blocking) hiệu năng cao, xử lý lưu lượng đồng thời lớn."
      },
      { 
        name: "ExpressJS", 
        desc: "Engineered light, robust RESTful APIs with organized route handling and security middlewares.",
        descVi: "Phát triển các RESTful APIs gọn nhẹ, mạnh mẽ với cơ chế định tuyến khoa học và các middleware bảo mật."
      },
      { 
        name: "MoleculerJS", 
        desc: "Designed decentralized microservice architectures with self-healing, load-balancing brokers.",
        descVi: "Thiết kế kiến trúc microservices phi tập trung với khả năng tự phục hồi và các broker cân bằng tải tự động."
      },
      { 
        name: "gRPC", 
        desc: "Implemented high-speed, binary-serialized microservice inter-communications utilizing Protocol Buffers.",
        descVi: "Thiết kế truyền thông microservices tốc độ cao thông qua nhị phân hóa (protobuf) giúp tối ưu hóa giao dịch mạng nội bộ."
      }
    ]
  },
  databases: {
    label: "Databases & Messaging",
    labelVi: "Cơ Sở Dữ Liệu & Tin Nhắn",
    items: [
      { 
        name: "MongoDB", 
        desc: "Designed complex data models, aggregations, and custom indexes to manage 100M+ high-throughput records.",
        descVi: "Thiết kế mô hình dữ liệu phức tạp, truy vấn tổng hợp (aggregations) và chỉ mục tối ưu để quản lý hơn 100 triệu bản ghi lưu lượng lớn."
      },
      { 
        name: "Redis", 
        desc: "Deployed distributed in-memory cache layers to accelerate hot query responses and session management.",
        descVi: "Triển khai các lớp bộ nhớ đệm phân tán (in-memory cache) để tăng tốc phản hồi truy vấn thường xuyên và quản lý phiên làm việc."
      },
      { 
        name: "Kafka", 
        desc: "Established event-driven message brokers to decouple data pipelines and camera trigger events.",
        descVi: "Xây dựng hệ thống môi giới thông điệp hướng sự kiện (event-driven) để tách biệt các đường ống dữ liệu và sự kiện kích hoạt camera."
      }
    ]
  },
  devops: {
    label: "DevOps & Cloud",
    labelVi: "DevOps & Điện Toán Đám Mây",
    items: [
      { 
        name: "Docker", 
        desc: "Containerized fullstack services ensuring unified dev-to-prod build pipelines and isolated runtime environments.",
        descVi: "Đóng gói container các dịch vụ fullstack đảm bảo quy trình build đồng bộ từ môi trường phát triển lên sản xuất và cô lập runtime."
      },
      { 
        name: "MinIO", 
        desc: "Configured local private high-performance S3-compatible object storage for massive video recording storage.",
        descVi: "Cấu hình kho lưu trữ đối tượng tương thích S3 hiệu năng cao tại chỗ để lưu trữ các khối dữ liệu video camera khổng lồ."
      },
      { 
        name: "Wasabi", 
        desc: "Integrated cost-effective, high-speed offsite cloud S3 storage for durable surveillance footage archives.",
        descVi: "Tích hợp kho lưu trữ đám mây Wasabi S3 tốc độ cao, tối ưu chi phí để lưu trữ bền vững các tệp video giám sát lâu dài."
      }
    ]
  },
  video: {
    label: "Video & Streaming Systems",
    labelVi: "Hệ Thống Video & Truyền Dẫn",
    items: [
      { 
        name: "FFmpeg", 
        desc: "Transcoded, scaled, and muxed real-time surveillance streams into web-friendly formats.",
        descVi: "Chuyển mã (transcode), co giãn tỷ lệ và ghép luồng (mux) video giám sát thời gian thực thành các định dạng tương thích tốt trên web."
      },
      { 
        name: "RTSP", 
        desc: "Ingested high-definition raw network camera feeds directly from field ONVIF devices.",
        descVi: "Thu nhận và xử lý luồng video thô độ phân giải cao trực tiếp từ các thiết bị camera mạng ONVIF thực tế."
      },
      { 
        name: "HLS", 
        desc: "Segmented video feeds into HTTP Live Streaming packets for reliable browser video delivery.",
        descVi: "Phân đoạn luồng video thành các gói HTTP Live Streaming (HLS) để truyền tải video mượt mà, tin cậy trên trình duyệt."
      },
      { 
        name: "WebRTC", 
        desc: "Implemented ultra-low-latency real-time video playback for live security operations (<500ms).",
        descVi: "Triển khai trình phát video thời gian thực độ trễ cực thấp (<500ms) phục vụ cho các tác vụ vận hành giám sát trực tiếp."
      },
      { 
        name: "ONVIF PTZ", 
        desc: "Programmed programmatic PTZ controls to remotely pan, tilt, and zoom hardware camera lenses.",
        descVi: "Lập trình điều khiển xoay, nghiêng và thu phóng (PTZ) từ xa của ống kính camera phần cứng thông qua giao thức ONVIF."
      },
      { 
        name: "Go2RTC", 
        desc: "Deployed multi-stream RTSP/WebRTC gateways to aggregate cameras and distribute streams efficiently.",
        descVi: "Triển khai cổng kết nối đa luồng RTSP/WebRTC để hội tụ các camera và phân phối luồng stream hiệu quả."
      }
    ]
  },
  ai: {
    label: "AI Productivity",
    labelVi: "Công Cụ Năng Suất AI",
    items: [
      { 
        name: "ChatGPT", 
        desc: "Utilized for advanced algorithm brainstorming, deep debugging, and microservice documentation.",
        descVi: "Sử dụng để lên ý tưởng thuật toán phức tạp, sửa lỗi sâu (deep debugging) và viết tài liệu hướng dẫn microservices."
      },
      { 
        name: "GitHub Copilot", 
        desc: "Integrated into daily workflows to write boilerplate, write unit tests, and double development speeds.",
        descVi: "Tích hợp vào quy trình phát triển hàng ngày để viết code mẫu, viết unit tests và nhân đôi tốc độ phát triển."
      },
      { 
        name: "Gemini", 
        desc: "Leveraged to analyze complex API docs, troubleshoot low-level system calls, and structure workflow models.",
        descVi: "Vận dụng để phân tích các tài liệu API phức tạp, xử lý sự cố hệ thống cấp thấp và chuẩn hóa mô hình quy trình công việc."
      }
    ]
  }
};

export const experiences: Record<"en" | "vi", ExperienceItem[]> = {
  en: [
    {
      company: "VNPT IT",
      role: "Web Developer",
      period: "Feb 2023 - Present",
      location: "Ho Chi Minh City, Vietnam",
      description: "Core engineer responsible for maintaining, scaling, and adding high-tech features to the national-scale AICam Traffic & Intelligent surveillance platform.",
      techs: ["gRPC", "NodeJS", "MoleculerJS", "MongoDB", "WebRTC", "FFmpeg", "ONVIF PTZ", "Docker", "MinIO", "Wasabi"],
      bulletPoints: [
        "Maintained and enhanced the AICam platform with core features, camera integrations, and deep system optimizations.",
        "Integrated advanced AI APIs to process real-time traffic monitoring, speed detection, and license plate recognition.",
        "Designed and implemented high-performance microservices using gRPC for high-speed, binary-serialized internal network transactions.",
        "Optimized MongoDB performance by designing compound indices and rewriting aggregation queries for databases holding 100M+ surveillance event logs, reducing queries from 8+ seconds to under 12ms.",
        "Engineered reliable, highly scalable video storage architectures using S3 object storage APIs (MinIO locally, Wasabi cloud) for saving high-volume camera recording blocks.",
        "Integrated complex camera operations, including ONVIF PTZ controls, HLS/WebRTC streaming gateways (Go2RTC), and real-time FFmpeg transcoding nodes.",
        "Supported Dockerized build pipelines and automated deployment scripts across multiple private customer server environments."
      ]
    },
    {
      company: "Medigo Software",
      role: "Frontend Developer Intern",
      period: "May 2022 - Aug 2022",
      location: "Ho Chi Minh City, Vietnam",
      description: "Frontend developer intern tasked with enhancing the Medigo healthcare application user interface and product features.",
      techs: ["ReactJS", "NextJS", "JavaScript", "Server-Side Rendering (SSR)"],
      bulletPoints: [
        "Developed custom healthcare product evaluation modules allowing users to review and rate pharmacies and pharmaceutical goods.",
        "Built responsive interfaces to add, edit, and organize healthcare products inside the vendor inventory panels.",
        "Engineered dynamic suggested products widgets utilizing Next.js Server-Side Rendering (SSR) to accelerate page loading speeds and optimize SEO ranking indexes.",
        "Collaborated with backend engineers to integrate APIs, format JSON schemas, and ensure pixel-perfect responsive layouts."
      ]
    }
  ],
  vi: [
    {
      company: "Công ty công nghệ thông tin VNPT",
      role: "Web Developer",
      period: "Tháng 2/2023 - Hiện tại",
      location: "TP. Hồ Chí Minh, Việt Nam",
      description: "Kỹ sư cốt lõi chịu trách nhiệm duy trì, mở rộng và phát triển các tính năng công nghệ cao cho nền tảng Giám sát thông minh & Camera Trí Tuệ Nhân Tạo (AICam Traffic) quy mô quốc gia.",
      techs: ["gRPC", "NodeJS", "MoleculerJS", "MongoDB", "WebRTC", "FFmpeg", "ONVIF PTZ", "Docker", "MinIO", "Wasabi"],
      bulletPoints: [
        "Bảo trì và nâng cấp nền tảng AICam với các tính năng cốt lõi, tích hợp dòng camera mới và tối ưu hóa hệ thống.",
        "Tích hợp các API AI tiên tiến để phục vụ giám sát giao thông thời gian thực, phát hiện vi phạm tốc độ và nhận dạng biển số xe.",
        "Thiết kế và triển khai hệ thống microservices hiệu năng cao sử dụng gRPC để tối ưu tốc độ giao dịch nội bộ thông qua nhị phân hóa (protobuf).",
        "Tối ưu hóa hiệu năng MongoDB bằng cách thiết kế các chỉ mục phức hợp (compound indexes) và viết lại các truy vấn tổng hợp (aggregation) cho cơ sở dữ liệu lưu trữ hơn 100 triệu bản ghi nhật ký sự kiện, giảm thời gian truy vấn từ 8+ giây xuống dưới 12 mili-giây.",
        "Thiết kế và vận hành kiến trúc lưu trữ video tin cậy, khả năng mở rộng cao sử dụng S3 object storage APIs (MinIO nội bộ, Wasabi cloud) để lưu trữ các khối video camera tải lượng lớn.",
        "Lập trình tích hợp các tác vụ camera phức tạp, bao gồm điều khiển xoay/thu phóng ONVIF PTZ, luồng phát HLS/WebRTC độ trễ cực thấp (<500ms) qua cổng Go2RTC và các tiến trình transcode FFmpeg thời gian thực.",
        "Vận hành quy trình build Docker hóa và các kịch bản triển khai tự động hóa trên hạ tầng máy chủ của các khách hàng lớn."
      ]
    },
    {
      company: "Medigo Software",
      role: "Thực Tập Sinh Lập Trình Frontend",
      period: "Tháng 5/2022 - Tháng 8/2022",
      location: "TP. Hồ Chí Minh, Việt Nam",
      description: "Thực tập sinh Frontend chịu trách nhiệm nâng cấp giao diện người dùng và các chức năng tương tác trên ứng dụng y tế thông minh Medigo.",
      techs: ["ReactJS", "NextJS", "JavaScript", "Server-Side Rendering (SSR)"],
      bulletPoints: [
        "Phát triển module đánh giá sản phẩm chăm sóc sức khỏe, cho phép người dùng bình luận và chấm điểm các hiệu thuốc và dược phẩm.",
        "Xây dựng giao diện phản hồi nhanh (responsive) để thêm, sửa và quản lý danh mục sản phẩm y tế trong trang quản trị của nhà thuốc.",
        "Triển khai widget đề xuất sản phẩm liên quan sử dụng cơ chế Server-Side Rendering (SSR) của Next.js để tăng tốc độ tải trang và tối ưu hóa thứ hạng SEO.",
        "Phối hợp chặt chẽ với các kỹ sư backend để tích hợp APIs, chuẩn hóa cấu trúc dữ liệu JSON và đảm bảo chất lượng pixel-perfect cho giao diện."
      ]
    }
  ]
};
