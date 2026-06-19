// =========================================================================
// 1. WFD 核心高频真题机经完整数据 (共 155 题，无任何省略)
// =========================================================================
const WFD_LIST = [
  { id: 1, english: "The celebrated theory is still the source of great controversy.", chinese: "这一著名的理论至今仍是巨大争议的根源。", zhugan: "The celebrated theory is still", xijie: "the source of great controversy." },
  { id: 2, english: "A good architectural structure should be useful, durable and beautiful.", chinese: "一个好的建筑结构应该实用、耐用、美观。", zhugan: "A good architectural structure should", xijie: "be useful, durable and beautiful." },
  { id: 3, english: "A group meeting will be held tomorrow in the library conference room.", chinese: "明天将在图书馆会议室举行小组会议。", zhugan: "A group meeting will be", xijie: "held tomorrow in the library conference room." },
  { id: 4, english: "Educational level is found to be related to social and economic background.", chinese: "教育水平与社会和经济背景有关。", zhugan: "Educational level is found to", xijie: "be related to social and economic background." },
  { id: 5, english: "All of the assignments must be submitted in person to the faculty office.", chinese: "所有作业必须亲自提交至学院办公室/教职员办公室。", zhugan: "All of the assignments must", xijie: "be submitted in person to the faculty office." },
  { id: 6, english: "Our view is that educational reforms have been inadequately implemented.", chinese: "我们的看法是，教育改革执行得不够充分。", zhugan: "Our view is that educational", xijie: "reforms have been inadequately implemented." },
  { id: 7, english: "An introduction is an essential element of presentation.", chinese: "简介是演讲的基本要素。", zhugan: "An introduction is an", xijie: "essential element of presentation." },
  { id: 8, english: "Before attending classes, you must register online or by post.", chinese: "在参加课程之前，你必须在网上或邮寄注册。", zhugan: "Before attending classes, you", xijie: "must register online or by post." },
  { id: 9, english: "Certain scientific principles must be learned verbally or by logical deduction.", chinese: "某些科学原理必须要通过口头教学或逻辑推理来学习。", zhugan: "Certain scientific principles must", xijie: "be learned verbally or by logical deduction." },
  { id: 10, english: "Consumer confidence has a direct influence on sales.", chinese: "消费者信心对销售有直接影响。", zhugan: "Consumer confidence has a", xijie: "direct influence on sales." },
  { id: 11, english: "The key to success in this course is regular attendance.", chinese: "这门功课成功的关键是定期出席。", zhugan: "The key to success in", xijie: "this course is regular attendance." },
  { id: 12, english: "Most of these features were part of the previous system.", chinese: "这些特征中的大多数是以前系统的一部分。", zhugan: "Most of these features were", xijie: "part of the previous system." },
  { id: 13, english: "Economic choice is the necessary decision-making in financial management.", chinese: "经济选择是财务管理中必不可少的决策。", zhugan: "Economic choice is the necessary", xijie: "decision-making in financial management." },
  { id: 14, english: "The technology has transformed the way we communicate with each other.", chinese: "技术已经改变了我们彼此交流的方式。", zhugan: "The technology has transformed the", xijie: "way we communicate with each other." },
  { id: 15, english: "There is an accounting assignment for finance students.", chinese: "有一项针对金融专业学生的会计作业。", zhugan: "There is an accounting assignment", xijie: "for finance students." },
  { id: 16, english: "We have food science and technology seminar on Tuesday.", chinese: "我们在周二有食品科学与技术研讨会。", zhugan: "We have food science and", xijie: "technology seminar on Tuesday." },
  { id: 17, english: "The summary of the findings was published in a medical journal.", chinese: "研究结果的摘要发表在一家医学杂志上。", zhugan: "The summary of the findings", xijie: "was published in a medical journal." },
  { id: 18, english: "Please specify the chemical compounds used in the lab experiment.", chinese: "请具体说明实验室实验中使用的化学化合物。", zhugan: "Please specify the chemical compounds", xijie: "used in the lab experiment." },
  { id: 19, english: "A non-profit organization is looking for temporary staff.", chinese: "一个非营利组织正在寻找临时工作人员。", zhugan: "A non-profit organization is looking", xijie: "for temporary staff." },
  { id: 20, english: "The original database was compiled by a research team.", chinese: "原始数据库是由一个研究小组编译的。", zhugan: "The original database was compiled", xijie: "by a research team." },
  { id: 21, english: "Students must wear protective clothing in the laboratory.", chinese: "学生在实验室必须穿戴防护服。", zhugan: "Students must wear protective clothing", xijie: "in the laboratory." },
  { id: 22, english: "You should click the link to download the application form.", chinese: "你应该点击链接下载申请表。", zhugan: "You should click the link", xijie: "to download the application form." },
  { id: 23, english: "The library has resources for advanced academic research.", chinese: "该图书馆拥有用于高级学术研究的资源。", zhugan: "The library has resources for", xijie: "advanced academic research." },
  { id: 24, english: "The current system does not allow online submission of reports.", chinese: "目前的系统不允许在线提交报告。", zhugan: "The current system does not", xijie: "allow online submission of reports." },
  { id: 25, english: "Participants are required to complete a brief questionnaire.", chinese: "参与者需要填写一份简短的问卷。", zhugan: "Participants are required to complete", xijie: "a brief questionnaire." },
  { id: 26, english: "The financial market became volatile after the political announcement.", chinese: "政治声明发表后，金融市场变得动荡不安。", zhugan: "The financial market became volatile", xijie: "after the political announcement." },
  { id: 27, english: "Our dynamic environment requires flexible and innovative solutions.", chinese: "我们动态的环境需要灵活且创新的解决方案。", zhugan: "Our dynamic environment requires flexible", xijie: "and innovative solutions." },
  { id: 28, english: "A precise evaluation is necessary to determine the project value.", chinese: "需要准确的评估来确定项目的价值。", zhugan: "A precise evaluation is necessary", xijie: "to determine the project value." },
  { id: 29, english: "The software application helps users to manage their schedules.", chinese: "该软件应用程序可以帮助用户管理他们的日程安排。", zhugan: "The software application helps users", xijie: "to manage their schedules." },
  { id: 30, english: "Academic achievement is highly dependent on continuous effort.", chinese: "学术成就高度依赖于持续的努力。", zhugan: "Academic achievement is highly dependent", xijie: "on continuous effort." },
  { id: 31, english: "The professor requested additional funding for the field trip.", chinese: "教授申请了额外的实地考察资金。", zhugan: "The professor requested additional funding", xijie: "for the field trip." },
  { id: 32, english: "Global warming affects weather patterns across different continents.", chinese: "全球变暖影响不同大陆的天气模式。", zhugan: "Global warming affects weather patterns", xijie: "across different continents." },
  { id: 33, english: "Students can register for the workshop via the website portal.", chinese: "学生可以通过网站门户注册参加研讨会。", zhugan: "Students can register for the", xijie: "workshop via the website portal." },
  { id: 34, english: "Modern technology plays a critical role in data processing.", chinese: "现代技术在数据处理中起着关键作用。", zhugan: "Modern technology plays a critical", xijie: "role in data processing." },
  { id: 35, english: "Medical researchers made a breakthrough in cancer treatment options.", chinese: "医学研究人员在癌症治疗方案上取得了突破。", zhugan: "Medical researchers made a breakthrough", xijie: "in cancer treatment options." },
  { id: 36, english: "All applicants must provide a copy of their certificates.", chinese: "所有申请人必须提供其证书的副本。", zhugan: "All applicants must provide a", xijie: "copy of their certificates." },
  { id: 37, english: "The university offers various sports activities for international students.", chinese: "大学为留学生提供各种体育活动。", zhugan: "The university offers various sports", xijie: "activities for international students." },
  { id: 38, english: "The corporate policy strictly prohibits disclosure of confidential information.", chinese: "公司政策严格禁止透露机密信息。", zhugan: "The corporate policy strictly prohibits", xijie: "disclosure of confidential information." },
  { id: 39, english: "Digital marketing strategies are evolving rapidly in this decade.", chinese: "数字营销策略在十年来发展迅速。", zhugan: "Digital marketing strategies are evolving", xijie: "rapidly in this decade." },
  { id: 40, english: "The evaluation committee will review your proposal next week.", chinese: "评估委员会将在下周审查您的提案。", zhugan: "The evaluation committee will review", xijie: "your proposal next week." },
  { id: 41, english: "Public transport systems help to reduce urban traffic congestion.", chinese: "公共交通系统有助于缓解城市交通拥堵。", zhugan: "Public transport systems help to", xijie: "reduce urban traffic congestion." },
  { id: 42, english: "Renewable energy sources are vital for sustainable development.", chinese: "可再生能源对可持续发展至关重要。", zhugan: "Renewable energy sources are vital", xijie: "for sustainable development." },
  { id: 43, english: "The primary focus of this study is customer satisfaction.", chinese: "本研究的主要重点是客户满意度。", zhugan: "The primary focus of this", xijie: "study is customer satisfaction." },
  { id: 44, english: "Effective leadership requires clear communication and deep empathy.", chinese: "有效的领导力需要清晰的沟通和深刻的同理心。", zhugan: "Effective leadership requires clear communication", xijie: "and deep empathy." },
  { id: 45, english: "The historical archive contains rare documents from the war.", chinese: "历史档案馆包含战争期间的珍贵文献。", zhugan: "The historical archive contains rare", xijie: "documents from the war." },
  { id: 46, english: "Online courses offer flexibility for full-time working professionals.", chinese: "在线课程为全职工作专业人员提供了灵活性。", zhugan: "Online courses offer flexibility for", xijie: "full-time working professionals." },
  { id: 47, english: "The scientific team published their results in a prominent magazine.", chinese: "该科学团队在一家著名杂志上发表了他们的成果。", zhugan: "The scientific team published their", xijie: "results in a prominent magazine." },
  { id: 48, english: "Environmental factors play a major role in plant growth.", chinese: "环境因素在植物生长中起主要作用。", zhugan: "Environmental factors play a major", xijie: "role in plant growth." },
  { id: 49, english: "Economic growth relies heavily on international trading networks.", chinese: "经济增长严重依赖国际贸易网络。", zhugan: "Economic growth relies heavily on", xijie: "international trading networks." },
  { id: 50, english: "Artificial intelligence is changing the landscape of modern education.", chinese: "人工智能正在改变现代教育的格局。", zhugan: "Artificial intelligence is changing the", xijie: "landscape of modern education." },
  { id: 51, english: "The library will be closed during the national holiday.", chinese: "图书馆将在国定假日期间关闭。", zhugan: "The library will be closed", xijie: "during the national holiday." },
  { id: 52, english: "Good nutrition is essential for maintaining a healthy lifestyle.", chinese: "良好的营养对于维持健康的生活方式至关重要。", zhugan: "Good nutrition is essential for", xijie: "maintaining a healthy lifestyle." },
  { id: 53, english: "The new framework aims to improve communication between teams.", chinese: "新框架旨在改善团队之间的沟通。", zhugan: "The new framework aims to", xijie: "improve communication between teams." },
  { id: 54, english: "An extensive search failed to find the missing documents.", chinese: "广泛的搜索未能找到丢失的文件。", zhugan: "An extensive search failed to", xijie: "find the missing documents." },
  { id: 55, english: "The statistical analysis showed a significant difference between groups.", chinese: "统计分析显示组别之间存在显著差异。", zhugan: "The statistical analysis showed a", xijie: "significant difference between groups." },
  { id: 56, english: "Most universities provide career counseling services for new graduates.", chinese: "大多数大学为应届毕业生提供职业咨询服务。", zhugan: "Most universities provide career counseling", xijie: "services for new graduates." },
  { id: 57, english: "The local government implemented strict regulations on waste disposal.", chinese: "地方政府对废物处置实施了严格的规定。", zhugan: "The local government implemented strict", xijie: "regulations on waste disposal." },
  { id: 58, english: "A clear understanding of basic math is required for accounting.", chinese: "会计需要对基础数学有清晰的理解。", zhugan: "A clear understanding of basic", xijie: "math is required for accounting." },
  { id: 59, english: "The exhibition showcases innovative designs from young fashion architects.", chinese: "该展览展示了年轻时尚建筑师的创新设计。", zhugan: "The exhibition showcases innovative designs", xijie: "from young fashion architects." },
  { id: 60, english: "The laboratory report must be submitted before Friday afternoon.", chinese: "实验室报告必须在周五下午之前提交。", zhugan: "The laboratory report must be", xijie: "submitted before Friday afternoon." },
  { id: 61, english: "Technology integration in classrooms can enhance student engagement outcomes.", chinese: "教室中的技术整合可以提高学生的参与成果。", zhugan: "Technology integration in classrooms can", xijie: "enhance student engagement outcomes." },
  { id: 62, english: "Cultural diversity enriches the overall experience of university life.", chinese: "文化多样性丰富了大学生活的整体体验。", zhugan: "Cultural diversity enriches the overall", xijie: "experience of university life." },
  { id: 63, english: "The research methodology requires both qualitative and quantitative data.", chinese: "该研究方法需要定性和定量数据。", zhugan: "The research methodology requires both", xijie: "qualitative and quantitative data." },
  { id: 64, english: "The department offers scholarships based on brilliant academic performance.", chinese: "该部门根据出色的学术表现提供奖学金。", zhugan: "The department offers scholarships based", xijie: "on brilliant academic performance." },
  { id: 65, english: "The sudden weather shift forced the cancellation of the match.", chinese: "天气的突然变化迫使比赛取消。", zhugan: "The sudden weather shift forced", xijie: "the cancellation of the match." },
  { id: 66, english: "Please ensure you have read the safety guidelines carefully.", chinese: "请确保您已仔细阅读安全指南。", zhugan: "Please ensure you have read", xijie: "the safety guidelines carefully." },
  { id: 67, english: "The main argument is supported by credible historical references.", chinese: "主要论点得到了可靠历史文献的支持。", zhugan: "The main argument is supported", xijie: "by credible historical references." },
  { id: 68, english: "Online security measures are continuously updated to prevent fraud.", chinese: "在线安全措施会不断更新以防欺诈。", zhugan: "Online security measures are continuously", xijie: "updated to prevent fraud." },
  { id: 69, english: "The university hospital provides medical services to all residents.", chinese: "大学医院为所有居民提供医疗服务。", zhugan: "The university hospital provides medical", xijie: "services to all residents." },
  { id: 70, english: "Critical thinking is an essential skill for academic success.", chinese: "批判性思维是学术成功的必备技能。", zhugan: "Critical thinking is an essential", xijie: "skill for academic success." },
  { id: 71, english: "The presentation will outline the major findings of our research.", chinese: "演示文稿将概述我们研究的主要发现。", zhugan: "The presentation will outline the", xijie: "major findings of our research." },
  { id: 72, english: "Most international students adapt well to the new environment.", chinese: "大多数国际学生都能很好地适应新环境。", zhugan: "Most international students adapt well", xijie: "to the new environment." },
  { id: 73, english: "The industrial revolution triggered massive economic and social changes.", chinese: "工业革命引发了巨大的经济和社会变革。", zhugan: "The industrial revolution triggered massive", xijie: "economic and social changes." },
  { id: 74, english: "The budget proposal must be approved by the board.", chinese: "预算提案必须获得董事会的批准。", zhugan: "The budget proposal must be", xijie: "approved by the board." },
  { id: 75, english: "The chemistry lab is equipped with state of the art tools.", chinese: "化学实验室配备了先进的工具。", zhugan: "The chemistry lab is equipped with", xijie: "state of the art tools." },
  { id: 76, english: "The company announced a new strategy to increase sales figures.", chinese: "该公司宣布了一项增加销售额的新战略。", zhugan: "The company announced a new strategy", xijie: "to increase sales figures." },
  { id: 77, english: "Students are encouraged to participate in community volunteer programs.", chinese: "鼓励学生参加社区志愿者项目。", zhugan: "Students are encouraged to participate", xijie: "in community volunteer programs." },
  { id: 78, english: "Urbanization has led to a significant loss of green spaces.", chinese: "城市化导致绿地面积大幅减少。", zhugan: "Urbanization has led to a", xijie: "significant loss of green spaces." },
  { id: 79, english: "The economic forecast suggests a slow recovery for next year.", chinese: "经济预测表明明年经济复苏缓慢。", zhugan: "The economic forecast suggests a", xijie: "slow recovery for next year." },
  { id: 80, english: "Proper time management can significantly reduce study related stress levels.", chinese: "得当的时间管理可以显著减轻与学习相关的压力水平。", zhugan: "Proper time management can significantly", xijie: "reduce study related stress levels." },
  { id: 81, english: "The marketing campaign targets young adults and working professionals.", chinese: "该营销活动针对年轻人群和在职专业人员。", zhugan: "The marketing campaign targets young", xijie: "adults and working professionals." },
  { id: 82, english: "An effective argument requires logical reasoning and clear evidence backing.", chinese: "有效的论证需要逻辑推理和清晰的证据支持。", zhugan: "An effective argument requires logical reasoning", xijie: "and clear evidence backing." },
  { id: 83, english: "The annual conference brings together experts from various domains.", chinese: "年度会议聚集了来自各个领域的专家。", zhugan: "The annual conference brings together", xijie: "experts from various domains." },
  { id: 84, english: "The law firm specializes in intellectual property rights protection.", chinese: "该法律事务所专门从事知识产权保护。", zhugan: "The law firm specializes in intellectual", xijie: "property rights protection." },
  { id: 85, english: "The seminar provided useful insights into modern teaching methodologies.", chinese: "该研讨会提供了对现代教学方法的有用见解。", zhugan: "The seminar provided useful insights into", xijie: "modern teaching methodologies." },
  { id: 86, english: "Scientific research must adhere to strict ethical standards always.", chinese: "科学研究必须始终遵守严格的伦理标准。", zhugan: "Scientific research must adhere to", xijie: "strict ethical standards always." },
  { id: 87, english: "The financial advisor recommended diversifying the investment portfolio options.", chinese: "金融顾问建议将投资组合选项多样化。", zhugan: "The financial advisor recommended diversifying the", xijie: "investment portfolio options." },
  { id: 88, english: "The project team met all the deadlines successfully last semester.", chinese: "项目团队在上学期成功完成了所有截止日期。", zhugan: "The project team met all the", xijie: "deadlines successfully last semester." },
  { id: 89, english: "The newly designed campus building is highly energy efficient.", chinese: "新设计的校园建筑具有很高的能源效率。", zhugan: "The newly designed campus building is", xijie: "highly energy efficient." },
  { id: 90, english: "Social media platforms have changed how news is consumed daily.", chinese: "社交媒体平台改变了每天消费新闻的方式。", zhugan: "Social media platforms have changed how", xijie: "news is consumed daily." },
  { id: 91, english: "The engineering students designed a prototype for a solar vehicle.", chinese: "工程专业的学生设计了一辆太阳能汽车的原型。", zhugan: "The engineering students designed a prototype", xijie: "for a solar vehicle." },
  { id: 92, english: "Environmental pollution remains a critical global issue facing humanity today.", chinese: "环境污染仍是当今人类面临的严峻全球问题。", zhugan: "Environmental pollution remains a critical global", xijie: "issue facing humanity today." },
  { id: 93, english: "The historical museum offers free admission on every first Sunday.", chinese: "历史博物馆在每个月的第一个周日提供免费入场。", zhugan: "The historical museum offers free admission", xijie: "on every first Sunday." },
  { id: 94, english: "Effective resource allocation is key to successful project management execution.", chinese: "有效的资源分配是成功项目管理执行的关键。", zhugan: "Effective resource allocation is key to", xijie: "successful project management execution." },
  { id: 95, english: "The study examines the relationship between sleep and academic performance.", chinese: "该研究探讨了睡眠与学术表现之间的关系。", zhugan: "The study examines the relationship between", xijie: "sleep and academic performance." },
  { id: 96, english: "The newly appointed CEO plans to restructure company operations completely.", chinese: "新任命的首席执行官计划完全重组公司的业务。", zhugan: "The newly appointed CEO plans to", xijie: "restructure company operations completely." },
  { id: 97, english: "Tourism has a significant impact on local economic stability growth.", chinese: "旅游业对当地经济的稳定增长有显著影响。", zhugan: "Tourism has a significant impact on", xijie: "local economic stability growth." },
  { id: 98, english: "The conference presentation was well received by the audience community.", chinese: "会议演讲受到了观众群体的良好评价。", zhugan: "The conference presentation was well received", xijie: "by the audience community." },
  { id: 99, english: "The research paper explores alternative energy solutions for remote islands.", chinese: "该研究论文探讨了偏远岛屿的替代能源解决方案。", zhugan: "The research paper explores alternative energy", xijie: "solutions for remote islands." },
  { id: 100, english: "Students must obtain permission before using the laboratory equipment.", chinese: "学生在使用实验室设备前必须获得许可。", zhugan: "Students must obtain permission before", xijie: "using the laboratory equipment." },
  { id: 101, english: "The global economy is showing signs of gradual recovery recently.", chinese: "全球经济近期正显示出逐渐复苏的迹象。", zhugan: "The global economy is showing signs", xijie: "of gradual recovery recently." },
  { id: 102, english: "The university provides free internet access across the entire campus.", chinese: "学校在整个校园内提供免费的互联网接入。", zhugan: "The university provides free internet access", xijie: "across the entire campus." },
  { id: 103, english: "Online databases provide a wealth of information for research papers.", chinese: "在线数据库为研究论文提供了大量的信息。", zhugan: "Online databases provide a wealth of", xijie: "information for research papers." },
  { id: 104, english: "The professor emphasized the importance of primary source material references.", chinese: "教授强调了主要一手资料文献参考的重要性。", zhugan: "The professor emphasized the importance of", xijie: "primary source material references." },
  { id: 105, english: "A systematic review of policies is needed to ensure compliance.", chinese: "需要对政策进行系统审查以确保合规性。", zhugan: "A systematic review of policies is", xijie: "needed to ensure compliance." },
  { id: 106, english: "The marketing strategy focus should be on building brand loyalty.", chinese: "营销策略的重点应该放在建立品牌忠诚度上。", zhugan: "The marketing strategy focus should be", xijie: "on building brand loyalty." },
  { id: 107, english: "The chemical reaction produced a stable compound after heating process.", chinese: "加热过程后，化学反应产生了一种稳定的化合物。", zhugan: "The chemical reaction produced a stable", xijie: "compound after heating process." },
  { id: 108, english: "The committee will announce the scholarship winners by next month.", chinese: "委员会将在下个月前宣布奖学金获得者名单。", zhugan: "The committee will announce the scholarship", xijie: "winners by next month." },
  { id: 109, english: "Good customer service is critical for building long term relationships.", chinese: "良好的客户服务对于建立长期关系至关重要。", zhugan: "Good customer service is critical for", xijie: "building long term relationships." },
  { id: 110, english: "The engineering department designed an innovative water filtration system tool.", chinese: "工程部设计了一种创新的水过滤系统工具。", zhugan: "The engineering department designed an innovative", xijie: "water filtration system tool." },
  { id: 111, english: "The economic crisis led to high unemployment rates nationwide significantly.", chinese: "经济危机导致全国失业率显著上升。", zhugan: "The economic crisis led to high", xijie: "unemployment rates nationwide significantly." },
  { id: 112, english: "Sustainable development requires balancing economic growth and environmental care.", chinese: "可持续发展需要平衡经济增长和环境关怀。", zhugan: "Sustainable development requires balancing economic", xijie: "growth and environmental care." },
  { id: 113, english: "The software update resolved several security vulnerabilities reported recently.", chinese: "该软件更新解决了最近报告的几个安全漏洞。", zhugan: "The software update resolved several security", xijie: "vulnerabilities reported recently." },
  { id: 114, english: "The course covers basic principles of macroeconomics and financial markets.", chinese: "该课程涵盖了宏观经济学和金融市场的基本原理。", zhugan: "The course covers basic principles of", xijie: "macroeconomics and financial markets." },
  { id: 115, english: "All students must submit their course selection forms before deadline.", chinese: "所有学生必须在截止日期前提交选课表。", zhugan: "All students must submit their course", xijie: "selection forms before deadline." },
  { id: 116, english: "The company plans to expand its business into international markets.", chinese: "该公司计划将其业务扩展到国际市场。", zhugan: "The company plans to expand its", xijie: "business into international markets." },
  { id: 117, english: "The research team discovered a new plant species in rainforest.", chinese: "研究小组在热带雨林中发现了一种新的植物物种。", zhugan: "The research team discovered a new", xijie: "plant species in rainforest." },
  { id: 118, english: "The lecture will discuss the impact of technology on society.", chinese: "讲座将讨论技术对社会的影响。", zhugan: "The lecture will discuss the impact", xijie: "of technology on society." },
  { id: 119, english: "An executive summary should be concise and cover all points.", chinese: "执行摘要应当简明扼要并涵盖所有要点。", zhugan: "An executive summary should be concise", xijie: "and cover all points." },
  { id: 120, english: "The design studio provides hands on experience for art students.", chinese: "设计工作室为艺术系学生提供实践经验。", zhugan: "The design studio provides hands on", xijie: "experience for art students." },
  { id: 121, english: "The new housing policy aims to assist low income families.", chinese: "新的住房政策旨在帮助低收入家庭。", zhugan: "The new housing policy aims to", xijie: "assist low income families." },
  { id: 122, english: "The biology lab requires proper sterilization of all diagnostic tools.", chinese: "生物实验室要求对所有诊断工具进行适当的消毒。", zhugan: "The biology lab requires proper sterilization", xijie: "of all diagnostic tools." },
  { id: 123, english: "Public awareness campaigns can help reduce energy consumption habits dramatically.", chinese: "公众意识宣传活动可以显著帮助减少能源消耗习惯。", zhugan: "Public awareness campaigns can help reduce", xijie: "energy consumption habits dramatically." },
  { id: 124, english: "The financial report shows a steady increase in quarterly profits.", chinese: "财务报告显示季度利润稳步增长。", zhugan: "The financial report shows a steady", xijie: "increase in quarterly profits." },
  { id: 125, english: "The historical novel provides vivid details about the medieval era.", chinese: "这部历史小说提供了关于中世纪时期的生动细节。", zhugan: "The historical novel provides vivid details", xijie: "about the medieval era." },
  { id: 126, english: "The professor offered constructive feedback on my research draft paper.", chinese: "教授对我的研究草案论文提出了建设性的反馈意見。", zhugan: "The professor offered constructive feedback on", xijie: "my research draft paper." },
  { id: 127, english: "The student union organized a charity event for local communities.", chinese: "学生会为当地社区组织了一场慈善活动。", zhugan: "The student union organized a charity", xijie: "event for local communities." },
  { id: 128, english: "A detailed map is available at the campus visitor center.", chinese: "校园访客中心提供详细的地图。", zhugan: "A detailed map is available at", xijie: "the campus visitor center." },
  { id: 129, english: "The medical team monitored the patient's condition around the clock.", chinese: "医疗团队全天候监视病人的状况。", zhugan: "The medical team monitored the patient's", xijie: "condition around the clock." },
  { id: 130, english: "The business plan outlines clear milestones for the upcoming year.", chinese: "业务计划概述了新一年的明确里程碑。", zhugan: "The business plan outlines clear milestones", xijie: "for the upcoming year." },
  { id: 131, english: "The archaeological excavation revealed ancient artifacts buried underground deep.", chinese: "考古发掘发现了埋在地下深处的古代文物。", zhugan: "The archaeological excavation revealed ancient", xijie: "artifacts buried underground deep." },
  { id: 132, english: "Proper ventilation is necessary to maintain clean indoor air quality.", chinese: "适当的通风对于保持清洁的室内空气质量至关重要。", zhugan: "Proper ventilation is necessary to maintain", xijie: "clean indoor air quality." },
  { id: 133, english: "The university selection criteria depend strongly on academic merit records.", chinese: "大学的录取标准强烈取决于学术优秀记录。", zhugan: "The university selection criteria depend strongly", xijie: "on academic merit records." },
  { id: 134, english: "The online tutorial provides step by step guidance for installation.", chinese: "在线教程为安装提供了逐步指导。", zhugan: "The online tutorial provides step by step", xijie: "guidance for installation." },
  { id: 135, english: "Regular physical exercise contributes to better mental health wellness outcomes.", chinese: "规律的体育锻炼有助于获得更好的心理健康结果。", zhugan: "Regular physical exercise contributes to better", xijie: "mental health wellness outcomes." },
  { id: 136, english: "The company faces intense competition from emerging global tech startups.", chinese: "该公司下面临着来自新兴全球科技创业公司的激烈竞争。", zhugan: "The company faces intense competition from", xijie: "emerging global tech startups." },
  { id: 137, english: "The new transit system connecting cities will open next month.", chinese: "连接城市的新交通系统将于下个月开放。", zhugan: "The new transit system connecting cities", xijie: "will open next month." },
  { id: 138, english: "An objective perspective is essential for conducting scientific data evaluation.", chinese: "客观的视角对于进行科学数据评估至关重要。", zhugan: "An objective perspective is essential for", xijie: "conducting scientific data evaluation." },
  { id: 139, english: "The chemistry professor explained the molecular structure of water bonds.", chinese: "化学教授解释了水分子的分子结构。", zhugan: "The chemistry professor explained the molecular", xijie: "structure of water bonds." },
  { id: 140, english: "The art gallery features contemporary works from local talented creators.", chinese: "美术馆展出了当地才华横溢的创作者的当代作品。", zhugan: "The art gallery features contemporary works", xijie: "from local talented creators." },
  { id: 141, english: "The research grant supports studies on marine ecosystem preservation strategies.", chinese: "该研究资助支持对海洋生态系统保护策略的研究。", zhugan: "The research grant supports studies on", xijie: "marine ecosystem preservation strategies." },
  { id: 142, english: "The customer feedback survey helps to improve product design choices.", chinese: "客户反馈调查有助于改进产品设计选择。", zhugan: "The customer feedback survey helps to", xijie: "improve product design choices." },
  { id: 143, english: "The local library offers literacy programs for children and adults.", chinese: "当地图书馆为儿童和成人提供读写能力计划。", zhugan: "The local library offers literacy programs", xijie: "for children and adults." },
  { id: 144, english: "Digital transformation is a top priority for modern business enterprises.", chinese: "数字化转型是现代企业公司的重中之重。", zhugan: "Digital transformation is a top priority", xijie: "for modern business enterprises." },
  { id: 145, english: "The experimental results confirmed the initial hypothesis made by team.", chinese: "实验结果证实了团队最初提出的假设。", zhugan: "The experimental results confirmed the initial", xijie: "hypothesis made by team." },
  { id: 146, english: "A comprehensive review of literature is required for the proposal.", chinese: "该提议需要对文献进行全面的审查。", zhugan: "A comprehensive review of literature", xijie: "is required for the proposal." },
  { id: 147, english: "The expansion of the tech industry created a high demand for developers.", chinese: "技术行业的扩张创造了对开发人员的高需求。", zhugan: "The expansion of the tech", xijie: "industry created a high demand for developers." },
  { id: 148, english: "Statistical evidence supports the theory of global temperature rise.", chinese: "统计证据支持全球气温上升的理论。", zhugan: "Statistical evidence supports the theory", xijie: "of global temperature rise." },
  { id: 149, english: "The business school offers an executive MBA program on weekends.", chinese: "商学院在周末提供高级管理人员工商管理硕士（EMBA）项目。", zhugan: "The business school offers an", xijie: "executive MBA program on weekends." },
  { id: 150, english: "The mentor provided invaluable guidance throughout my internship period.", chinese: "在我的整个实习期间，导师提供了宝贵的指导。", zhugan: "The mentor provided invaluable guidance", xijie: "throughout my internship period." },
  { id: 151, english: "Effective legal frameworks are necessary to protect consumer privacy.", chinese: "有效的法律框架对于保护消费者隐私是必要的。", zhugan: "Effective legal frameworks are necessary", xijie: "to protect consumer privacy." },
  { id: 152, english: "The student registration process can be completed via the mobile application.", chinese: "学生注册流程可以通过移动应用程序完成。", zhugan: "The student registration process can", xijie: "be completed via the mobile application." },
  { id: 153, english: "The biology department received a substantial grant for cancer research.", chinese: "生物系获得了用于癌症研究的大笔资助。", zhugan: "The biology department received a", xijie: "substantial grant for cancer research." },
  { id: 154, english: "A systematic approach is required to resolve complex technical errors.", chinese: "需要系统的方法来解决复杂的系统/技术错误。", zhugan: "A systematic approach is required", xijie: "to resolve complex technical errors." },
  { id: 155, english: "You can find the complex form on the website.", chinese: "你可以在网站上找到那个复杂的表格。", zhugan: "You can find the complex", xijie: "form on the website." }
];

// =========================================================================
// 2. 状态管理与线性导航核心逻辑
// =========================================================================
let currentQuestionIndex = -1; // -1 表示尚未选定题目（未激活状态）
let currentStage = 1;          // 1: 照抄阶段; 2: 盲测阶段

function updateNodeText(id, text) {
  const node = document.getElementById(id);
  if (node) node.innerText = text || '';
}

function setNodeDisplay(id, displayStyle) {
  const node = document.getElementById(id);
  if (node) node.style.display = displayStyle;
}

// 核心渲染：支持激活答题面板切换
function renderQuestion() {
  if (currentQuestionIndex < 0 || currentQuestionIndex >= WFD_LIST.length) {
    // 未激活或索引越界，展示欢迎选择器
    setNodeDisplay("welcome-section", "block");
    setNodeDisplay("main-content-zone", "none");
    const titleNode = document.getElementById("title-text");
    if (titleNode) titleNode.innerHTML = `🎯 WFD 阶梯式全屏背诵系统`;
    return;
  }

  // 隐藏欢迎，展示核心练习区
  setNodeDisplay("welcome-section", "none");
  setNodeDisplay("main-content-zone", "block");

  const q = WFD_LIST[currentQuestionIndex];

  // 1. 更新大标题
  const titleNode = document.getElementById("title-text");
  if (titleNode) titleNode.innerHTML = `🎯 WFD 阶梯式全屏背诵系统 (第 ${q.id} 题)`;

  // 2. 控制两阶段显示
  if (currentStage === 1) {
    updateNodeText("step-indicator", "阶段一：请照抄一遍上方完整英文句");
    setNodeDisplay("hint-section", "block");
    
    updateNodeText("main-stem", q.zhugan || q.english);
    updateNodeText("main-stem-cn", q.chinese ? ` (主干翻译)` : '');
    updateNodeText("details", q.xijie || '...');
    updateNodeText("full-english", q.english);
    updateNodeText("full-translation", q.chinese);

    setNodeDisplay("check-result-zone", "none");
    setNodeDisplay("review-section", "none");
  } else {
    updateNodeText("step-indicator", "阶段二：英文提示已切断！请凭借记忆，看着下方中文进行全屏盲测默写");
    setNodeDisplay("hint-section", "none"); 
    updateNodeText("full-translation", q.chinese);

    setNodeDisplay("check-result-zone", "none");
    setNodeDisplay("review-section", "none");
  }

  // 清空文本反馈区
  const feedbackNode = document.getElementById("feedback");
  if (feedbackNode) {
    feedbackNode.innerText = '';
    feedbackNode.className = "feedback-msg";
  }
  const userInput = document.getElementById("user-input");
  if (userInput) userInput.value = '';
}

// 剧透点分析
function generateTestPoints(text) {
  const pointsList = document.getElementById("test-points");
  if (!pointsList) return;
  pointsList.innerHTML = '';

  const cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const words = cleanText.split(/\s+/);
  const targets = words.filter((w, i) => w.length > 4 && (w.endsWith('s') || w.endsWith('ed') || w.endsWith('ing') || i % 3 === 0));
  const uniqueTargets = [...new Set(targets)].slice(0, 4);

  if (uniqueTargets.length === 0) uniqueTargets.push(words[0]);

  uniqueTargets.forEach(word => {
    const li = document.createElement("li");
    li.innerHTML = `注意核心词汇的拼写与单复数/时态：<b>${word}</b>`;
    pointsList.appendChild(li);
  });
}

// 提交逻辑
function handleSubmit() {
  if (currentQuestionIndex < 0) return;
  const q = WFD_LIST[currentQuestionIndex];

  const userInputField = document.getElementById("user-input");
  const userText = userInputField ? userInputField.value.trim() : "";
  const targetText = q.english.trim();
  const feedbackNode = document.getElementById("feedback");

  if (!userText) {
    if (feedbackNode) {
      feedbackNode.innerText = "⚠️ 请先输入句子再提交验证！";
      feedbackNode.className = "feedback-msg msg-error";
    }
    return;
  }

  const formatText = (t) => t.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ");
  const isCorrect = formatText(userText) === formatText(targetText);

  if (currentStage === 1) {
    if (isCorrect) {
      feedbackNode.innerText = "🎉 照抄通过！即将自动进入阶段二盲测！";
      feedbackNode.className = "feedback-msg msg-success";
      setTimeout(() => {
        currentStage = 2;
        renderQuestion();
      }, 1500);
    } else {
      feedbackNode.innerText = "❌ 照抄错误，请仔细核对标答拼写！";
      feedbackNode.className = "feedback-msg msg-error";
      updateNodeText("res-user", userText);
      updateNodeText("res-target", targetText);
      setNodeDisplay("check-result-zone", "block");
    }
  } else {
    updateNodeText("res-user", userText);
    updateNodeText("res-target", targetText);
    setNodeDisplay("check-result-zone", "block");
    generateTestPoints(targetText);
    setNodeDisplay("review-section", "block");

    if (isCorrect) {
      feedbackNode.innerText = "🏆 奇迹！盲测满分通关！完美拿下该高频题！";
      feedbackNode.className = "feedback-msg msg-success";
    } else {
      feedbackNode.innerText = "💡 盲测结束！请比对账单进行查漏补缺。";
      feedbackNode.className = "feedback-msg msg-error";
    }
  }
}

// 线性导航控制（上一题、下一题）
function changeQuestion(direction) {
  if (currentQuestionIndex === -1) {
    currentQuestionIndex = direction === 'next' ? 0 : WFD_LIST.length - 1;
  } else {
    if (direction === 'next') {
      currentQuestionIndex = (currentQuestionIndex + 1) % WFD_LIST.length;
    } else {
      currentQuestionIndex = (currentQuestionIndex - 1 + WFD_LIST.length) % WFD_LIST.length;
    }
  }
  currentStage = 1; // 换题一律初始化为阶段一
  renderQuestion();
}

// 精准按题号跳转输入
function handleJumpToQuestion() {
  const jumpInput = document.getElementById("jump-id-input");
  if (!jumpInput) return;
  
  const targetId = parseInt(jumpInput.value.trim(), 10);
  
  if (isNaN(targetId) || targetId < 1 || targetId > 155) {
    alert("⚠️ 请输入正确的题号范围（1 到 155 之间）");
    return;
  }
  
  const targetIndex = WFD_LIST.findIndex(q => q.id === targetId);
  
  if (targetIndex !== -1) {
    currentStage = 1;
    currentQuestionIndex = targetIndex;
    renderQuestion();
    jumpInput.value = ''; // 清空选择框
  } else {
    alert("❌ 未找到对应的题目数据！");
  }
}

// =========================================================================
// 3. 事件绑定初始化
// =========================================================================
window.onload = function() {
  // 初始不触发任何题目，保持未选题的欢迎画面
  renderQuestion();

  // 线性导航绑定
  document.getElementById("prev-btn").onclick = () => changeQuestion('prev');
  document.getElementById("next-btn").onclick = () => changeQuestion('next');

  // 验证按钮绑定
  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) submitBtn.onclick = handleSubmit;

  // 选题跳转绑定
  const jumpBtn = document.getElementById("jump-btn");
  if (jumpBtn) jumpBtn.onclick = handleJumpToQuestion;
  
  const jumpInput = document.getElementById("jump-id-input");
  if (jumpInput) {
    jumpInput.onkeydown = function(event) {
      if (event.key === "Enter") {
        handleJumpToQuestion();
      }
    };
  }
};
