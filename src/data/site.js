import { en } from './en.js';
import { ko } from './ko.js';
import { zh } from './zh.js';
import { ru } from './ru.js';
import { vi } from './vi.js';

const images = {
  hero: { src: '/YJBN/public/images/hero-background.png', alt: 'YJBN premium Korean beauty portfolio' },
  about: { src: '/YJBN/public/images/about-company-background.png', alt: 'YJBN company and product planning' },
  brands: { src: '/YJBN/public/images/brands-background.png', alt: 'YJBN brand ecosystem' },
  products: { src: '/YJBN/public/images/products-background.png', alt: 'YJBN cosmetics and personal care portfolio' },
  rd: { src: '/YJBN/public/images/research-quality-background.png', alt: 'YJBN R&D quality documentation' },
  global: { src: '/YJBN/public/images/global-business-background.png', alt: 'YJBN global business' },
  oem: { src: '/YJBN/public/images/oem-contact-background.png', alt: 'YJBN OEM ODM OBM cooperation' },
};

const brandMedia = [
  { src: '/YJBN/public/images/brands/cellreborn-visual.svg', alt: 'CELLREBORN flagship brand visual' },
  { src: '/YJBN/public/images/brands/hairbest-visual.svg', alt: 'Hairbest professional hair beauty visual' },
  { src: '/YJBN/public/images/brands/beautylabs-visual.svg', alt: 'BeautyLabs development platform visual' },
];

const languages = [
  { label: 'EN', locale: 'en', hreflang: 'en' },
  { label: 'KO', locale: 'ko', hreflang: 'ko' },
  { label: '中文', locale: 'zh', hreflang: 'zh-CN' },
  { label: 'RU', locale: 'ru', hreflang: 'ru' },
  { label: 'VI', locale: 'vi', hreflang: 'vi' },
];

const sharedForms = {
  en: {
    options: ['Global distribution', 'OEM/ODM/OBM', 'Brand partnership', 'Product sourcing', 'Certification/documentation inquiry', 'General contact'],
    messagePlaceholder: 'Please share target market, category, expected quantity, schedule, and documentation needs.',
  },
  ko: {
    options: ['글로벌 유통', 'OEM/ODM/OBM', '브랜드 파트너십', '제품 소싱', '인증/문서 문의', '일반 문의'],
    messagePlaceholder: '대상 국가, 채널, 관심 카테고리, 예상 수량, 일정, 필요 문서를 알려주세요.',
  },
  zh: {
    options: ['全球分销', 'OEM/ODM/OBM', '品牌合作', '产品采购', '认证/文件咨询', '一般咨询'],
    messagePlaceholder: '请提供目标市场、渠道、品类、预计数量、时间计划和所需文件。',
  },
  ru: {
    options: ['Глобальная дистрибуция', 'OEM/ODM/OBM', 'Брендовое партнерство', 'Поиск продуктов', 'Сертификация/документы', 'Общий запрос'],
    messagePlaceholder: 'Укажите рынок, канал, категорию, ориентировочный объем, сроки и необходимые документы.',
  },
  vi: {
    options: ['Phân phối toàn cầu', 'OEM/ODM/OBM', 'Hợp tác thương hiệu', 'Tìm nguồn sản phẩm', 'Chứng nhận/hồ sơ', 'Liên hệ chung'],
    messagePlaceholder: 'Vui lòng chia sẻ thị trường, kênh bán, danh mục, số lượng dự kiến, thời gian và hồ sơ cần chuẩn bị.',
  },
};

const copy = {
  en: {
    nav: ['About', 'Brands', 'Products', 'R&D / Quality', 'Global', 'OEM/ODM/OBM', 'Contact'],
    homeTitle: 'A Korean beauty partner for global B2B growth',
    homeDescription: 'YJBN is a total beauty company connecting Korean skincare, haircare, scalp care, body care, beauty tools, product development, certification-ready documentation, and global distribution opportunities.',
    ctas: ['Explore Our Brands', 'OEM/ODM/OBM Inquiry', 'Become a Global Partner'],
    meta: ['YJBN Co., Ltd. | Global K-Beauty Connector', 'About YJBN | Global K-Beauty Connector', 'YJBN Brands | CELLREBORN, Hairbest, BeautyLabs', 'YJBN Products | Total Beauty and Personal Care', 'YJBN R&D, Patents, Certifications and Quality', 'YJBN Global Business | Korean Beauty for Overseas Buyers', 'YJBN OEM / ODM / OBM | Korean Beauty Development Partner', 'Contact YJBN | Global B2B Inquiry'],
    aboutHero: ['From Korean hair beauty roots to a total beauty company', 'YJBN was originally established in 2004 and incorporated in 2009. Today, the company connects Korean beauty expertise, product planning, brand operation, manufacturing, documentation, and global distribution.'],
    brandHero: ['A CELLREBORN-led ecosystem for global beauty partners', 'YJBN operates CELLREBORN as its flagship brand while managing Hairbest and BeautyLabs for professional hair beauty, beauty commerce, cosmetic development, and B2B cooperation.'],
    productHero: ['A total beauty portfolio for international B2B channels', 'YJBN is not limited to haircare. The company supports skincare, haircare, scalp care, body care, cleansing, nail care, beauty tools, hair tools, salon goods, and OEM/ODM portfolios.'],
    rdHero: ['Trust-building R&D and documentation for global beauty business', 'YJBN presents R&D, CGE-V1 COMPLEX, patented compositions, certification experience, test documentation, and quality support as business trust assets while avoiding medical claims.'],
    globalHero: ['A bridge between Korean beauty innovation and global markets', 'YJBN works with overseas buyers, distributors, brand partners, retailers, salon channels, and B2B platforms to support Korean beauty sourcing, documentation, localization, and market development.'],
    oemHero: ['Flexible Korean beauty development from concept to shipment', 'YJBN supports product concept planning, sourcing, formula and sample development, packaging, design, quality documentation, certification and export documents, production, and shipment coordination.'],
    contactHero: ['Start a practical conversation with YJBN', 'Contact YJBN for global distribution, OEM/ODM/OBM, brand partnership, product sourcing, certification or documentation questions, and general business inquiries.'],
    categories: [
      ['Skincare', 'Skin comfort and barrier care', 'Cleansers, toners, serums, creams, masks, and routine concepts for daily moisturizing care.'],
      ['Haircare', 'Daily hair health management', 'Shampoo, treatment, conditioner, essence, oil, and styling support for healthy-looking hair.'],
      ['Scalp Care', 'Scalp condition care', 'Scalp shampoo, tonic, ampoule, and care routines positioned with cosmetics-compliant wording.'],
      ['Body Care', 'Body and personal care', 'Body wash, lotion, hand care, foot care, and sensorial daily care products.'],
      ['Facial Cleansing', 'Cleansing care', 'Foam cleanser, cleansing oil, cleansing balm, pads, and wash-off concepts.'],
      ['Nail Care', 'Nail and hand beauty', 'Nail care, cuticle care, hand care, and small-format personal care options.'],
      ['Beauty Tools', 'Beauty accessories', 'Beauty devices, applicators, brushes, and tools that support routine-based merchandising.'],
      ['Hair Tools', 'Brushes and hair devices', 'YJBN roots in brushes and hair tools support professional and daily-use product sourcing.'],
      ['Salon', 'Professional salon products', 'Hair and scalp products suitable for salons, professional channels, and specialist retailers.'],
      ['OEM/ODM', 'Development portfolio', 'Custom concepts, formula directions, package options, and export-ready product planning.'],
    ],
    history: [
      ['2004', 'Original establishment', 'YJBN began with Korean hair beauty, brushes, hair tools, and professional beauty product expertise.'],
      ['2009', 'Incorporation', 'The company incorporated as YJBN Co., Ltd., strengthening its business foundation and operational structure.'],
      ['2010s', 'Haircare and scalp care growth', 'YJBN expanded its knowledge in haircare, scalp condition care, and beauty commerce.'],
      ['2020s', 'CELLREBORN flagship development', 'CELLREBORN became the flagship brand carrying nature-inspired and science-supported K-Beauty positioning.'],
      ['Today', 'Global B2B beauty partner', 'YJBN supports brand distribution, product sourcing, OEM/ODM/OBM, documentation, and market development.'],
    ],
    process: [
      ['Product concept planning', 'Clarify target market, user, category, price, channel, claim direction, and benchmark products.'],
      ['Formula and sample development', 'Coordinate formulation direction, texture, fragrance, performance expectations, and sample feedback.'],
      ['Packaging and design support', 'Support container options, package structure, artwork direction, label review, and brand presentation.'],
      ['Quality documentation', 'Organize ingredient information, product specifications, test references, and quality materials for review.'],
      ['Certification and export support', 'Prepare market-specific documentation for NMPA, CPNP, EAC, NPRA, CDSCO, KC, ISO, Vegan, and other requirements where applicable.'],
      ['Production and shipment coordination', 'Coordinate MOQ, lead time, production schedule, inspection, export preparation, and shipment communication.'],
      ['Long-term partnership', 'Support repeat orders, line extensions, localized launch materials, and brand or distribution development.'],
    ],
  },
  ko: {
    nav: ['회사소개', '브랜드', '제품', 'R&D / 품질', '글로벌', 'OEM/ODM/OBM', '문의'],
    homeTitle: '글로벌 B2B 성장을 위한 한국 뷰티 파트너',
    homeDescription: 'YJBN은 스킨케어, 헤어케어, 두피 컨디션 케어, 바디케어, 뷰티 툴, 제품 개발, 인증 대응 문서, 글로벌 유통 기회를 연결하는 토탈 뷰티 기업입니다.',
    ctas: ['브랜드 보기', 'OEM/ODM/OBM 문의', '글로벌 파트너 문의'],
    meta: ['YJBN | 글로벌 K-뷰티 커넥터', 'YJBN 소개 | 글로벌 K-뷰티 커넥터', 'YJBN 브랜드 | CELLREBORN, Hairbest, BeautyLabs', 'YJBN 제품 | 토탈 뷰티와 퍼스널 케어', 'YJBN R&D, 특허, 인증, 품질', 'YJBN 글로벌 비즈니스 | 해외 바이어를 위한 K-뷰티', 'YJBN OEM / ODM / OBM | 한국 뷰티 개발 파트너', 'YJBN 문의 | 글로벌 B2B 인콰이어리'],
    aboutHero: ['한국 헤어뷰티 기반에서 토탈 뷰티 기업으로', 'YJBN은 2004년 처음 설립되어 2009년 법인화되었습니다. 현재는 한국 뷰티 전문성, 제품 기획, 브랜드 운영, 제조, 문서 대응, 글로벌 유통을 연결합니다.'],
    brandHero: ['CELLREBORN 중심의 글로벌 뷰티 브랜드 생태계', 'YJBN은 CELLREBORN을 플래그십 브랜드로 운영하며 Hairbest와 BeautyLabs를 통해 전문 헤어뷰티, 뷰티 커머스, 화장품 개발, B2B 협력을 지원합니다.'],
    productHero: ['글로벌 B2B 채널을 위한 토탈 뷰티 포트폴리오', 'YJBN은 헤어케어에만 머무르지 않습니다. 스킨케어, 헤어케어, 두피 케어, 바디케어, 클렌징, 네일 케어, 뷰티 툴, 헤어 툴, 살롱 제품, OEM/ODM 포트폴리오를 지원합니다.'],
    rdHero: ['글로벌 뷰티 비즈니스를 위한 R&D와 문서 신뢰', 'YJBN은 R&D, CGE-V1 COMPLEX, 특허 조성물, 인증 경험, 시험 문서, 품질 지원을 의학적 주장 없이 비즈니스 신뢰 자산으로 제시합니다.'],
    globalHero: ['한국 뷰티 혁신과 글로벌 시장을 잇는 파트너', 'YJBN은 해외 바이어, 총판, 브랜드 파트너, 리테일러, 살롱 채널, B2B 플랫폼과 협력하며 한국 뷰티 소싱, 문서 대응, 현지화, 장기 시장 개발을 지원합니다.'],
    oemHero: ['콘셉트부터 선적까지 이어지는 한국 뷰티 개발 협력', 'YJBN은 제품 콘셉트 기획, 소싱, 제형과 샘플 개발, 패키징, 디자인 지원, 품질 문서, 인증 및 수출 문서 지원, 생산과 선적 조율을 지원합니다.'],
    contactHero: ['YJBN과 실무적인 협의를 시작하세요', '글로벌 유통, OEM/ODM/OBM, 브랜드 파트너십, 제품 소싱, 인증 및 문서 문의, 일반 비즈니스 문의를 남겨주세요.'],
    categories: [
      ['Skincare', '피부 편안함과 장벽 케어', '클렌저, 토너, 세럼, 크림, 마스크, 데일리 보습 케어 루틴.'],
      ['Haircare', '데일리 헤어 건강 관리', '샴푸, 트리트먼트, 컨디셔너, 에센스, 오일, 스타일링 지원 제품.'],
      ['Scalp Care', '두피 컨디션 케어', '두피 샴푸, 토닉, 앰플, 화장품 표현 기준에 맞춘 케어 루틴.'],
      ['Body Care', '바디와 퍼스널 케어', '바디워시, 바디로션, 핸드케어, 풋케어, 감각적인 데일리 케어.'],
      ['Facial Cleansing', '클렌징 케어', '폼클렌저, 클렌징 오일, 밤, 패드, 워시오프 콘셉트.'],
      ['Nail Care', '네일과 핸드 뷰티', '네일 케어, 큐티클 케어, 핸드케어, 소용량 퍼스널 케어.'],
      ['Beauty Tools', '뷰티 액세서리', '뷰티 디바이스, 애플리케이터, 브러시, 루틴형 머천다이징 툴.'],
      ['Hair Tools', '브러시와 헤어 기기', '브러시와 헤어 툴 기반 경험을 살린 전문 및 데일리 제품 소싱.'],
      ['Salon', '전문 살롱 제품', '살롱, 전문 채널, 스페셜티 리테일에 적합한 헤어와 두피 제품.'],
      ['OEM/ODM', '개발 포트폴리오', '맞춤 콘셉트, 제형 방향, 패키지 옵션, 수출 대응 제품 기획.'],
    ],
    history: [
      ['2004', '최초 설립', '한국 헤어뷰티, 브러시, 헤어 툴, 전문 뷰티 제품 경험을 기반으로 시작했습니다.'],
      ['2009', '법인화', '와이제이비엔 주식회사로 법인화하며 사업 기반과 운영 체계를 강화했습니다.'],
      ['2010s', '헤어케어와 두피 케어 확장', '헤어케어, 두피 컨디션 케어, 뷰티 커머스 영역에서 제품 개발 이해도를 넓혔습니다.'],
      ['2020s', 'CELLREBORN 플래그십 전개', 'CELLREBORN은 자연 영감과 과학 기반 스토리를 담은 대표 K-뷰티 브랜드로 성장했습니다.'],
      ['Today', '글로벌 B2B 뷰티 파트너', '브랜드 유통, 제품 소싱, OEM/ODM/OBM, 문서 대응, 시장 개발을 지원합니다.'],
    ],
    process: [
      ['제품 콘셉트 기획', '대상 시장, 사용자, 카테고리, 가격, 채널, 표현 방향, 벤치마크 제품을 정리합니다.'],
      ['제형과 샘플 개발', '제형 방향, 텍스처, 향, 기대 사용감, 샘플 피드백을 조율합니다.'],
      ['패키징과 디자인 지원', '용기 옵션, 패키지 구조, 아트워크 방향, 라벨 검토, 브랜드 프레젠테이션을 지원합니다.'],
      ['품질 문서', '성분 정보, 제품 규격, 시험 레퍼런스, 품질 자료를 검토용으로 정리합니다.'],
      ['인증과 수출 문서 지원', 'NMPA, CPNP, EAC, NPRA, CDSCO, KC, ISO, Vegan 등 적용 가능한 요구사항에 맞춰 문서 준비를 지원합니다.'],
      ['생산과 선적 조율', 'MOQ, 리드타임, 생산 일정, 검사, 수출 준비, 선적 커뮤니케이션을 조율합니다.'],
      ['장기 파트너십', '반복 주문, 라인 확장, 현지 론칭 자료, 브랜드 또는 유통 개발을 지원합니다.'],
    ],
  },
  zh: {
    nav: ['关于 YJBN', '品牌', '产品', '研发 / 品质', '全球业务', 'OEM/ODM/OBM', '联系'],
    homeTitle: '面向全球 B2B 增长的韩国美妆合作伙伴',
    homeDescription: 'YJBN 是一家韩国综合美妆与个人护理公司，覆盖护肤、护发、头皮状态护理、身体护理、美妆工具、产品开发、认证文件准备和全球分销合作。',
    ctas: ['了解品牌', 'OEM/ODM/OBM 咨询', '成为全球合作伙伴'],
    meta: ['YJBN | 全球 K-Beauty 连接者', '关于 YJBN | 全球 K-Beauty 连接者', 'YJBN 品牌 | CELLREBORN, Hairbest, BeautyLabs', 'YJBN 产品 | 综合美妆与个人护理', 'YJBN 研发、专利、认证与品质', 'YJBN 全球业务 | 面向海外买家的韩国美妆', 'YJBN OEM / ODM / OBM | 韩国美妆开发伙伴', '联系 YJBN | 全球 B2B 咨询'],
    aboutHero: ['从韩国头发美妆基础发展为综合美妆公司', 'YJBN 最早成立于 2004 年，并于 2009 年法人化。今天，YJBN 连接韩国美妆经验、产品企划、品牌运营、制造、文件准备和全球分销。'],
    brandHero: ['以 CELLREBORN 为旗舰的全球美妆品牌生态', 'YJBN 运营旗舰品牌 CELLREBORN，并通过 Hairbest 与 BeautyLabs 支持专业头发美妆、美妆商务、化妆品开发和 B2B 合作。'],
    productHero: ['适用于国际 B2B 渠道的综合美妆组合', 'YJBN 不只做护发。产品方向覆盖护肤、护发、头皮护理、身体护理、洁面、指甲护理、美妆工具、发用工具、专业沙龙产品和 OEM/ODM 组合。'],
    rdHero: ['为全球美妆业务建立信任的研发与文件支持', 'YJBN 将研发、CGE-V1 COMPLEX、专利组合、认证经验、测试文件和品质支持作为商业信任资产，并避免医疗化表达。'],
    globalHero: ['连接韩国美妆创新与全球市场', 'YJBN 与海外买家、分销商、品牌伙伴、零售商、沙龙渠道和 B2B 平台合作，支持韩国美妆采购、文件准备、本地化和长期市场开发。'],
    oemHero: ['从概念到出货的韩国美妆开发合作', 'YJBN 支持产品概念企划、采购、配方与样品开发、包装和设计、品质文件、认证及出口文件、生产和出货协调。'],
    contactHero: ['与 YJBN 开始务实的商务沟通', '欢迎就全球分销、OEM/ODM/OBM、品牌合作、产品采购、认证或文件问题以及一般商务事项联系 YJBN。'],
  },
  ru: {
    nav: ['О YJBN', 'Бренды', 'Продукты', 'R&D / Качество', 'Глобальный бизнес', 'OEM/ODM/OBM', 'Контакты'],
    homeTitle: 'Корейский beauty-партнер для международного B2B-роста',
    homeDescription: 'YJBN это комплексная компания в сфере красоты и personal care: skincare, haircare, уход за состоянием кожи головы, body care, beauty tools, разработка продуктов, документы и глобальная дистрибуция.',
    ctas: ['Посмотреть бренды', 'Запрос OEM/ODM/OBM', 'Стать партнером'],
    meta: ['YJBN | Глобальный K-Beauty коннектор', 'О YJBN | Глобальный K-Beauty коннектор', 'Бренды YJBN | CELLREBORN, Hairbest, BeautyLabs', 'Продукты YJBN | Total Beauty и Personal Care', 'YJBN R&D, Патенты, Сертификации и Качество', 'YJBN Global Business | Korean Beauty for Russia/CIS Buyers', 'YJBN OEM / ODM / OBM | Korean Beauty Development Partner', 'Контакты YJBN | Глобальный B2B запрос'],
    aboutHero: ['От корейской hair beauty экспертизы к total beauty компании', 'YJBN была основана в 2004 году и зарегистрирована как компания в 2009 году. Сегодня YJBN соединяет product planning, brand operation, manufacturing, documentation и global distribution.'],
    brandHero: ['Экосистема брендов во главе с CELLREBORN', 'YJBN управляет CELLREBORN как флагманским брендом, а Hairbest и BeautyLabs поддерживают professional hair beauty, commerce, cosmetic development и B2B cooperation.'],
    productHero: ['Total beauty портфель для международных B2B-каналов', 'YJBN не ограничивается haircare. Компания поддерживает skincare, haircare, scalp care, body care, cleansing, nail care, beauty tools, hair tools, salon goods и OEM/ODM portfolios.'],
    rdHero: ['R&D и документы как основа доверия для глобального beauty-бизнеса', 'YJBN представляет R&D, CGE-V1 COMPLEX, patented compositions, certification experience, test documentation и quality support как B2B trust assets без medical claims.'],
    globalHero: ['Мост между корейскими beauty-инновациями и международными рынками', 'YJBN работает с overseas buyers, distributors, brand partners, retailers, salon channels и B2B platforms, поддерживая sourcing, documentation, localization и market development.'],
    oemHero: ['Корейская beauty-разработка от концепта до отгрузки', 'YJBN поддерживает concept planning, sourcing, formula and sample development, packaging, design support, quality documentation, certification/export files, production и shipment coordination.'],
    contactHero: ['Начните предметный разговор с YJBN', 'Свяжитесь с YJBN по вопросам global distribution, OEM/ODM/OBM, brand partnership, product sourcing, certification/documentation и general business inquiries.'],
  },
  vi: {
    nav: ['Về YJBN', 'Thương hiệu', 'Sản phẩm', 'R&D / Chất lượng', 'Toàn cầu', 'OEM/ODM/OBM', 'Liên hệ'],
    homeTitle: 'Đối tác làm đẹp Hàn Quốc cho tăng trưởng B2B toàn cầu',
    homeDescription: 'YJBN là công ty làm đẹp và chăm sóc cá nhân toàn diện, kết nối skincare, haircare, chăm sóc tình trạng da đầu, body care, beauty tools, phát triển sản phẩm, hồ sơ chứng nhận và phân phối toàn cầu.',
    ctas: ['Khám phá thương hiệu', 'Tư vấn OEM/ODM/OBM', 'Trở thành đối tác'],
    meta: ['YJBN | Cầu nối K-Beauty toàn cầu', 'Về YJBN | Cầu nối K-Beauty toàn cầu', 'Thương hiệu YJBN | CELLREBORN, Hairbest, BeautyLabs', 'Sản phẩm YJBN | Total Beauty và Personal Care', 'YJBN R&D, Bằng sáng chế, Chứng nhận và Chất lượng', 'YJBN Global Business | Korean Beauty cho nhà mua hàng Việt Nam', 'YJBN OEM / ODM / OBM | Đối tác phát triển Korean Beauty', 'Liên hệ YJBN | Global B2B Inquiry'],
    aboutHero: ['Từ nền tảng hair beauty Hàn Quốc đến công ty total beauty', 'YJBN ban đầu được thành lập năm 2004 và trở thành pháp nhân năm 2009. Hiện nay công ty kết nối product planning, brand operation, manufacturing, documentation và global distribution.'],
    brandHero: ['Hệ sinh thái thương hiệu dẫn dắt bởi CELLREBORN', 'YJBN vận hành CELLREBORN như thương hiệu chủ lực, đồng thời quản lý Hairbest và BeautyLabs để hỗ trợ professional hair beauty, commerce, cosmetic development và B2B cooperation.'],
    productHero: ['Danh mục total beauty cho kênh B2B quốc tế', 'YJBN không chỉ là haircare. Công ty hỗ trợ skincare, haircare, scalp care, body care, cleansing, nail care, beauty tools, hair tools, salon goods và OEM/ODM portfolios.'],
    rdHero: ['R&D và hồ sơ tạo niềm tin cho beauty business toàn cầu', 'YJBN trình bày R&D, CGE-V1 COMPLEX, patented compositions, certification experience, test documentation và quality support như tài sản niềm tin B2B, không dùng claim y khoa.'],
    globalHero: ['Cầu nối giữa đổi mới K-Beauty và thị trường toàn cầu', 'YJBN làm việc với overseas buyers, distributors, brand partners, retailers, salon channels và B2B platforms để hỗ trợ Korean beauty sourcing, documentation, localization và market development.'],
    oemHero: ['Phát triển Korean beauty từ concept đến shipment', 'YJBN hỗ trợ product concept planning, sourcing, formula and sample development, packaging, design support, quality documentation, certification/export files, production và shipment coordination.'],
    contactHero: ['Bắt đầu trao đổi thực tế với YJBN', 'Liên hệ YJBN về global distribution, OEM/ODM/OBM, brand partnership, product sourcing, certification/documentation hoặc general business inquiries.'],
  },
};

for (const locale of ['zh', 'ru', 'vi']) {
  copy[locale].categories = copy.en.categories;
  copy[locale].history = copy.en.history;
  copy[locale].process = copy.en.process;
}

const sources = { en, ko, zh, ru, vi };
const pageKeys = ['home', 'about', 'brands', 'products', 'rdQuality', 'globalBusiness', 'oem', 'contact'];

function item([kicker, title, description], page) {
  return { kicker, title, description, page };
}

function products(items) {
  return items.map(([kicker, title, description]) => ({ kicker, title, description }));
}

function withBrandMedia(brands) {
  return brands.map((brand, index) => ({
    ...brand,
    media: brand.media || brandMedia[index],
  }));
}

function certifications(locale) {
  const names = {
    en: ['China', 'Europe', 'Eurasia', 'Malaysia / India', 'Korea / Quality', 'Values'],
    ko: ['China', 'Europe', 'Eurasia', 'Malaysia / India', 'Korea / Quality', 'Values'],
    zh: ['China', 'Europe', 'Eurasia', 'Malaysia / India', 'Korea / Quality', 'Values'],
    ru: ['China', 'Europe', 'Eurasia', 'Malaysia / India', 'Korea / Quality', 'Values'],
    vi: ['China', 'Europe', 'Eurasia', 'Malaysia / India', 'Korea / Quality', 'Values'],
  }[locale];

  return [
    { kicker: names[0], title: 'NMPA', items: ['Product information', 'Ingredient references', 'Label and claim review support'] },
    { kicker: names[1], title: 'CPNP', items: ['Responsible-person file coordination', 'Safety and formula information', 'Claims and labeling review'] },
    { kicker: names[2], title: 'EAC', items: ['Export document coordination', 'Product specification materials', 'Partner review support'] },
    { kicker: names[3], title: 'NPRA / CDSCO', items: ['Market-specific file preparation', 'Ingredient and product data', 'Buyer documentation support'] },
    { kicker: names[4], title: 'KC / ISO 9001', items: ['Korea KC references where applicable', 'ISO 9001 quality awareness', 'Test reports and quality documents'] },
    { kicker: names[5], title: 'Vegan / Test Docs', items: ['Vegan certification references where available', 'Ingredient story review', 'Market-friendly product explanation'] },
  ];
}

function pageHero([title, description], media, actions, eyebrow) {
  return { eyebrow, title, description, media, actions };
}

function build(locale) {
  const base = sources[locale];
  const t = copy[locale];
  const form = { ...base.form, ...sharedForms[locale] };
  const navigation = t.nav.map((label, index) => ({ label, page: pageKeys[index + 1] }));
  const actions = [
    { label: t.ctas[0], page: 'brands', variant: 'primary' },
    { label: t.ctas[1], page: 'oem', variant: 'secondary' },
    { label: t.ctas[2], page: 'contact', variant: 'secondary' },
  ];
  const gateway = navigation.slice(0, 6).map((nav, index) =>
    item([
      ['Company', 'Brands', 'Portfolio', 'Trust', 'Expansion', 'Cooperation'][index],
      nav.label,
      [
        base.sections.about.description,
        base.sections.brands.description,
        base.sections.products.description,
        base.sections.rd.description,
        base.sections.global.description,
        base.sections.oem.description,
      ][index],
    ], nav.page),
  );
  const productItems = products(t.categories);
  const processItems = t.process.map(([title, description]) => ({ title, description }));
  const historyItems = t.history.map(([kicker, title, description]) => ({ kicker, title, description }));
  const commonCta = {
    type: 'cta',
    eyebrow: 'Start with YJBN',
    title: t.ctas[2],
    description: form.messagePlaceholder,
    actions: [
      { label: t.ctas[2], page: 'contact', variant: 'primary' },
      { label: t.ctas[1], page: 'oem', variant: 'secondary' },
    ],
  };

  return {
    ...base,
    locale,
    languages,
    navigation,
    form,
    company: {
      ...base.company,
      tagline: locale === 'en' ? 'Global K-Beauty Connector' : base.company.tagline,
      footerDescription: base.company.footerDescription,
    },
    pages: {
      home: {
        metaTitle: t.meta[0],
        hero: { eyebrow: 'YJBN is a Global K-Beauty Connector', title: t.homeTitle, description: t.homeDescription, media: images.hero, actions },
        stats: [
          { value: 'Since 2004', label: base.stats[0]?.label || 'Korean beauty expertise' },
          { value: 'CELLREBORN', label: 'Flagship K-Beauty brand inspired by nature and supported by science' },
          { value: 'B2B Ready', label: 'Distribution, sourcing, documentation, OEM, ODM, and OBM cooperation' },
        ],
        sections: [
          { type: 'cards', eyebrow: 'Corporate Gateway', title: base.sections.hero.title, description: base.sections.hero.description, items: gateway },
          { type: 'brands', tone: 'muted-section', eyebrow: base.sections.brands.eyebrow, title: base.sections.brands.title, description: base.sections.brands.description, items: withBrandMedia(base.brands) },
          { type: 'cards', eyebrow: 'Buyer Confidence', title: base.sections.rd.title, description: base.sections.rd.description, items: base.rdItems },
          commonCta,
        ],
      },
      about: {
        metaTitle: t.meta[1],
        hero: pageHero(t.aboutHero, images.about, [{ label: navigation[1].label, page: 'brands', variant: 'primary' }, { label: navigation[4].label, page: 'globalBusiness', variant: 'secondary' }], base.sections.about.eyebrow),
        sections: [
          { type: 'split', eyebrow: 'Identity', title: base.sections.about.title, description: base.sections.about.description, media: images.about, points: base.sections.about.points },
          { type: 'timeline', tone: 'muted-section', eyebrow: 'History', title: 'Since 2004', description: t.aboutHero[1], items: historyItems },
          { type: 'cards', eyebrow: 'Connector Role', title: base.sections.global.title, description: base.sections.global.description, items: gateway.slice(0, 4) },
          commonCta,
        ],
      },
      brands: {
        metaTitle: t.meta[2],
        hero: pageHero(t.brandHero, images.brands, [{ label: navigation[2].label, page: 'products', variant: 'primary' }, { label: form.options[2], page: 'contact', variant: 'secondary' }], base.sections.brands.eyebrow),
        sections: [
          { type: 'brands', eyebrow: base.sections.brands.eyebrow, title: base.sections.brands.title, description: base.sections.brands.description, items: withBrandMedia(base.brands) },
          { type: 'cards', tone: 'muted-section', eyebrow: 'Business Fit', title: base.sections.oem.title, description: base.sections.oem.description, items: base.partnershipSteps },
          commonCta,
        ],
      },
      products: {
        metaTitle: t.meta[3],
        hero: pageHero(t.productHero, images.products, [{ label: t.ctas[1], page: 'oem', variant: 'primary' }, { label: form.options[3], page: 'contact', variant: 'secondary' }], base.sections.products.eyebrow),
        sections: [
          { type: 'products', eyebrow: 'Product Categories', title: base.sections.products.title, description: base.sections.products.description, items: productItems },
          { type: 'cards', tone: 'muted-section', eyebrow: 'Buyer Review', title: base.sections.products.title, description: base.sections.products.description, items: base.productCategories },
          commonCta,
        ],
      },
      rdQuality: {
        metaTitle: t.meta[4],
        hero: pageHero(t.rdHero, images.rd, [{ label: form.options[4], page: 'contact', variant: 'primary' }, { label: navigation[5].label, page: 'oem', variant: 'secondary' }], base.sections.rd.eyebrow),
        sections: [
          { type: 'split', eyebrow: 'R&D Positioning', title: base.sections.rd.title, description: base.sections.rd.description, media: images.rd, points: base.rdItems.map((entry) => `${entry.title}: ${entry.description}`) },
          { type: 'certifications', tone: 'muted-section', eyebrow: 'Certification Awareness', title: 'Global export-readiness support', description: t.rdHero[1], groups: certifications(locale) },
          { type: 'cards', eyebrow: 'Quality Support', title: base.sections.rd.title, description: base.sections.rd.description, items: base.rdItems },
          commonCta,
        ],
      },
      globalBusiness: {
        metaTitle: t.meta[5],
        hero: pageHero(t.globalHero, images.global, [{ label: t.ctas[2], page: 'contact', variant: 'primary' }, { label: navigation[1].label, page: 'brands', variant: 'secondary' }], base.sections.global.eyebrow),
        sections: [
          { type: 'markets', eyebrow: 'Partner Types', title: base.sections.global.title, description: base.sections.global.description, items: base.globalMarkets.map((market) => ({ kicker: market, title: market, description: base.sections.global.description })) },
          { type: 'split', tone: 'muted-section', eyebrow: 'Market Support', title: base.sections.global.title, description: base.sections.global.description, media: images.global, points: [t.globalHero[1], form.messagePlaceholder, base.sections.global.description] },
          commonCta,
        ],
      },
      oem: {
        metaTitle: t.meta[6],
        hero: pageHero(t.oemHero, images.oem, [{ label: t.ctas[1], page: 'contact', variant: 'primary' }, { label: navigation[2].label, page: 'products', variant: 'secondary' }], base.sections.oem.eyebrow),
        sections: [
          { type: 'process', eyebrow: 'Cooperation Process', title: base.sections.oem.title, description: base.sections.oem.description, items: processItems },
          { type: 'cards', tone: 'muted-section', eyebrow: 'Cooperation Models', title: base.sections.oem.title, description: base.sections.oem.description, items: base.partnershipSteps },
          { type: 'split', eyebrow: 'Why YJBN', title: base.sections.about.title, description: base.sections.about.description, media: images.oem, points: base.sections.about.points },
          commonCta,
        ],
      },
      contact: {
        metaTitle: t.meta[7],
        hero: pageHero(t.contactHero, images.oem, [{ label: form.submit, page: 'contact', variant: 'primary' }, { label: navigation[4].label, page: 'globalBusiness', variant: 'secondary' }], base.sections.contact.eyebrow),
        sections: [
          { type: 'contact', eyebrow: 'Business Inquiry', title: base.sections.contact.title, description: base.sections.contact.description, categories: form.options },
          { type: 'cards', tone: 'muted-section', eyebrow: 'Helpful Details', title: base.sections.contact.title, description: base.sections.contact.description, items: gateway.slice(0, 4) },
        ],
      },
    },
  };
}

export const siteContent = Object.fromEntries(Object.keys(sources).map((locale) => [locale, build(locale)]));
