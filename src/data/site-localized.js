import { siteContent as baseSiteContent } from './site.js';

const localizedDetails = {
  zh: {
    products: [
      ['护肤', '肌肤舒适与屏障护理', '洁面、爽肤水、精华、面霜、面膜等日常保湿护理概念。'],
      ['护发', '日常发丝健康管理', '洗发水、护发素、发膜、精华油及造型辅助产品。'],
      ['头皮护理', '头皮状态护理', '头皮洗发水、头皮精华、安瓶及日常护理方案，采用化妆品合规表达。'],
      ['身体护理', '身体与个人护理', '沐浴露、身体乳、手部护理、足部护理及感官型日常护理产品。'],
      ['面部清洁', '清洁护理', '洁面泡沫、卸妆油、卸妆膏、清洁棉片及洗去型概念。'],
      ['指甲护理', '指甲与手部美护', '指甲护理、角质护理、手部护理及小规格个人护理产品。'],
      ['美妆工具', '美妆配件', '美容仪、涂抹工具、刷具及支持套组化销售的工具产品。'],
      ['美发工具', '梳刷与美发设备', 'YJBN源于梳刷与美发工具经验，可支持专业及日常渠道采购。'],
      ['沙龙专业产品', '专业渠道组合', '适用于沙龙、专业渠道和精选零售的发丝与头皮护理产品。'],
      ['OEM/ODM', '开发型产品组合', '定制概念、配方方向、包材选择及出口准备型产品规划。'],
    ],
    history: [
      ['2004', '最初创立', 'YJBN从韩国美发、梳刷、美发工具及专业美容产品经验起步。'],
      ['2009', '法人化运营', '公司以YJBN Co., Ltd.法人形式运营，强化业务基础与组织体系。'],
      ['2010年代', '护发与头皮护理扩展', 'YJBN持续积累护发、头皮状态护理与美妆商务领域的产品开发理解。'],
      ['2020年代', 'CELLREBORN旗舰品牌发展', 'CELLREBORN成长为以自然灵感与科学支持为核心的旗舰K-Beauty品牌。'],
      ['Today', '全球B2B美妆伙伴', 'YJBN支持品牌分销、产品采购、OEM/ODM/OBM、文件准备及市场开发。'],
    ],
    process: [
      ['产品概念规划', '明确目标市场、用户、品类、价格带、渠道、宣称方向和参考产品。'],
      ['配方与样品开发', '协调配方方向、质地、香型、使用期待和样品反馈。'],
      ['包装与设计支持', '支持容器选择、包装结构、视觉方向、标签审核和品牌呈现。'],
      ['品质文件整理', '准备成分信息、产品规格、测试参考和品质资料，便于买方审核。'],
      ['认证与出口文件支持', '根据适用市场协助准备NMPA、CPNP、EAC、NPRA、CDSCO、KC、ISO、Vegan等相关文件。'],
      ['生产与出货协调', '协调MOQ、交期、生产计划、检验、出口准备和出货沟通。'],
      ['长期合作发展', '支持复购、系列扩展、本地化上市资料以及品牌或分销业务发展。'],
    ],
  },
  ru: {
    products: [
      ['Уход за кожей', 'Комфорт кожи и поддержка барьера', 'Очищение, тонеры, сыворотки, кремы, маски и ежедневные концепции увлажняющего ухода.'],
      ['Уход за волосами', 'Ежедневное управление здоровьем волос', 'Шампуни, кондиционеры, маски, эссенции, масла и средства поддержки укладки.'],
      ['Уход за кожей головы', 'Поддержка состояния кожи головы', 'Шампуни, тоники, ампулы и уходовые рутины с корректной косметической формулировкой.'],
      ['Уход за телом', 'Body и personal care', 'Гели для душа, лосьоны, уход за руками и стопами, а также сенсорные продукты ежедневного ухода.'],
      ['Очищение лица', 'Очищающий уход', 'Пенки, масла, бальзамы, пэды и смываемые концепции для ежедневного очищения.'],
      ['Уход за ногтями', 'Красота ногтей и рук', 'Средства для ногтей, кутикулы, рук и компактные personal care форматы.'],
      ['Beauty tools', 'Аксессуары для ухода', 'Beauty-устройства, аппликаторы, кисти и инструменты для мерчандайзинга уходовых рутин.'],
      ['Hair tools', 'Щетки и приборы для волос', 'Опыт YJBN в щетках и hair tools помогает закупкам для профессионального и ежедневного использования.'],
      ['Салонные продукты', 'Профессиональные каналы', 'Продукты для волос и кожи головы для салонов, профессиональных каналов и специализированной розницы.'],
      ['OEM/ODM', 'Портфель разработки', 'Индивидуальные концепции, направления формул, варианты упаковки и экспортно-готовое планирование.'],
    ],
    history: [
      ['2004', 'Первоначальное основание', 'YJBN начала с корейской hair beauty экспертизы, щеток, инструментов для волос и профессиональных beauty-продуктов.'],
      ['2009', 'Регистрация компании', 'Компания была зарегистрирована как YJBN Co., Ltd., укрепив операционную основу бизнеса.'],
      ['2010-е', 'Рост в haircare и scalp care', 'YJBN расширила экспертизу в уходе за волосами, поддержке состояния кожи головы и beauty commerce.'],
      ['2020-е', 'Развитие флагманского бренда CELLREBORN', 'CELLREBORN стал флагманским K-Beauty брендом с позиционированием, вдохновленным природой и поддержанным наукой.'],
      ['Today', 'Глобальный B2B beauty-партнер', 'YJBN поддерживает дистрибуцию брендов, sourcing продуктов, OEM/ODM/OBM, документацию и развитие рынков.'],
    ],
    process: [
      ['Планирование концепции продукта', 'Определяем целевой рынок, пользователя, категорию, цену, канал, направление claims и benchmark-продукты.'],
      ['Формула и образцы', 'Координируем направление формулы, текстуру, аромат, ожидания по использованию и обратную связь по образцам.'],
      ['Упаковка и дизайн', 'Поддерживаем выбор тары, структуру упаковки, artwork, проверку этикетки и презентацию бренда.'],
      ['Документация качества', 'Систематизируем информацию об ингредиентах, спецификации, тестовые материалы и quality files для проверки.'],
      ['Сертификация и экспортные документы', 'Помогаем готовить документы для NMPA, CPNP, EAC, NPRA, CDSCO, KC, ISO, Vegan и других применимых требований.'],
      ['Производство и отгрузка', 'Координируем MOQ, сроки, производственный график, инспекцию, экспортную подготовку и коммуникацию по shipment.'],
      ['Долгосрочное партнерство', 'Поддерживаем повторные заказы, расширение линейки, локализованные launch-материалы и развитие бренда или дистрибуции.'],
    ],
  },
  vi: {
    products: [
      ['Chăm sóc da', 'Sự thoải mái của da và chăm sóc hàng rào bảo vệ', 'Sữa rửa mặt, toner, serum, kem, mặt nạ và concept dưỡng ẩm hằng ngày.'],
      ['Chăm sóc tóc', 'Quản lý sức khỏe tóc hằng ngày', 'Dầu gội, dầu xả, treatment, tinh chất, dầu dưỡng và sản phẩm hỗ trợ tạo kiểu.'],
      ['Chăm sóc da đầu', 'Chăm sóc tình trạng da đầu', 'Dầu gội da đầu, tonic, ampoule và routine chăm sóc với ngôn ngữ phù hợp ngành mỹ phẩm.'],
      ['Chăm sóc cơ thể', 'Body care và personal care', 'Sữa tắm, lotion, chăm sóc tay, chăm sóc chân và sản phẩm hằng ngày giàu trải nghiệm cảm quan.'],
      ['Làm sạch da mặt', 'Cleansing care', 'Sữa rửa mặt, dầu tẩy trang, balm, pad và concept rửa trôi cho nhu cầu làm sạch.'],
      ['Chăm sóc móng', 'Làm đẹp móng và tay', 'Sản phẩm chăm sóc móng, cuticle, tay và các định dạng personal care nhỏ gọn.'],
      ['Dụng cụ làm đẹp', 'Phụ kiện beauty', 'Thiết bị beauty, applicator, cọ và dụng cụ hỗ trợ bán hàng theo routine.'],
      ['Dụng cụ tóc', 'Lược, cọ và thiết bị tóc', 'Nền tảng của YJBN về lược và hair tools hỗ trợ sourcing cho kênh chuyên nghiệp và hằng ngày.'],
      ['Sản phẩm salon', 'Danh mục chuyên nghiệp', 'Sản phẩm tóc và da đầu phù hợp salon, kênh chuyên nghiệp và nhà bán lẻ chuyên biệt.'],
      ['OEM/ODM', 'Danh mục phát triển', 'Concept tùy chỉnh, định hướng công thức, lựa chọn bao bì và kế hoạch sản phẩm sẵn sàng xuất khẩu.'],
    ],
    history: [
      ['2004', 'Khởi đầu', 'YJBN bắt đầu từ kinh nghiệm hair beauty Hàn Quốc, lược, dụng cụ tóc và sản phẩm beauty chuyên nghiệp.'],
      ['2009', 'Thành lập pháp nhân', 'Công ty được vận hành với pháp nhân YJBN Co., Ltd., củng cố nền tảng kinh doanh và hệ thống vận hành.'],
      ['2010s', 'Mở rộng haircare và scalp care', 'YJBN phát triển hiểu biết về chăm sóc tóc, chăm sóc tình trạng da đầu và beauty commerce.'],
      ['2020s', 'Phát triển thương hiệu chủ lực CELLREBORN', 'CELLREBORN trở thành thương hiệu K-Beauty chủ lực, lấy cảm hứng từ thiên nhiên và được hỗ trợ bởi khoa học.'],
      ['Today', 'Đối tác beauty B2B toàn cầu', 'YJBN hỗ trợ phân phối thương hiệu, sourcing sản phẩm, OEM/ODM/OBM, hồ sơ và phát triển thị trường.'],
    ],
    process: [
      ['Lập kế hoạch concept sản phẩm', 'Làm rõ thị trường mục tiêu, người dùng, danh mục, mức giá, kênh, hướng claim và sản phẩm benchmark.'],
      ['Phát triển công thức và mẫu', 'Điều phối định hướng công thức, texture, mùi hương, kỳ vọng sử dụng và phản hồi mẫu.'],
      ['Hỗ trợ bao bì và thiết kế', 'Hỗ trợ lựa chọn bao bì, cấu trúc package, định hướng artwork, rà soát nhãn và trình bày thương hiệu.'],
      ['Tài liệu chất lượng', 'Sắp xếp thông tin thành phần, specification, tài liệu test tham khảo và hồ sơ chất lượng để buyer review.'],
      ['Hỗ trợ chứng nhận và xuất khẩu', 'Hỗ trợ chuẩn bị hồ sơ cho NMPA, CPNP, EAC, NPRA, CDSCO, KC, ISO, Vegan và các yêu cầu phù hợp từng thị trường.'],
      ['Điều phối sản xuất và shipment', 'Điều phối MOQ, lead time, lịch sản xuất, kiểm tra, chuẩn bị xuất khẩu và trao đổi về shipment.'],
      ['Hợp tác dài hạn', 'Hỗ trợ đơn hàng lặp lại, mở rộng line sản phẩm, tài liệu launch bản địa hóa và phát triển thương hiệu hoặc phân phối.'],
    ],
  },
};

function toCards(rows) {
  return rows.map(([kicker, title, description]) => ({ kicker, title, description }));
}

function toSteps(rows) {
  return rows.map(([title, description]) => ({ title, description }));
}

for (const [locale, details] of Object.entries(localizedDetails)) {
  const pages = baseSiteContent[locale]?.pages;
  if (!pages) continue;

  pages.products.sections[0].items = toCards(details.products);
  pages.about.sections[1].items = toCards(details.history);
  pages.oem.sections[0].items = toSteps(details.process);
}

export const siteContent = baseSiteContent;
