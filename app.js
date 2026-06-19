// ==========================================
// 1. WFD 核心高频真题机经数据 (1 - 155 全量完整版)
// ==========================================
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
  { id: 11, english: "Daily practice can build confidence and improve skills.", chinese: "每天的练习可以建立自信，提高技能。", zhugan: "Daily practice can build", xijie: "confidence and improve skills." },
  { id: 12, english: "The economic status of the early Roman Republic will be examined.", chinese: "我们将考察早期罗马共和国的经济状况。", zhugan: "The economic status of the", xijie: "early Roman Republic will be examined." },
  { id: 13, english: "Human beings compete with other living things for resources and space.", chinese: "人类与其他生物竞争资源和空间。", zhugan: "Human beings compete with other", xijie: "living things for resources and space." },
  { id: 14, english: "He landed a job in a very prestigious law firm.", chinese: "他在一家非常著名的律师事务所找到了一份工作。", zhugan: "He landed a job in", xijie: "a very prestigious law firm." },
  { id: 15, english: "Important details from the argument are missing in the summary.", chinese: "摘要中缺少了论证中的重要细节。", zhugan: "Important details from the argument", xijie: "are missing in the summary." },
  { id: 16, english: "It may not be possible to solve the problem easily.", chinese: "想要轻易解决这个问题也许是不可能的。", zhugan: "It may not be possible", xijie: "to solve the problem easily." },
  { id: 17, english: "Listening is the key skill needed to succeed in this course.", chinese: "听力是学好这门课的关键能力。", zhugan: "Listening is the key skill", xijie: "needed to succeed in this course." },
  { id: 18, english: "Plants are the living things that can grow on land or in water.", chinese: "植物是能在陆地上或水中生长的生物。", zhugan: "Plants are the living things", xijie: "that can grow on land or in water." },
  { id: 19, english: "Please make sure you have correctly cited all the necessary materials.", chinese: "请确保你正确引用了所有必要的材料。", zhugan: "Please make sure you have", xijie: "correctly cited all the necessary materials." },
  { id: 20, english: "Remember, the prestigious election of stewardship has strict eligibility criteria.", chinese: "记住，这场有声望的管理层选举有严格的资格标准。", zhugan: "Remember, the prestigious election of", xijie: "stewardship has strict eligibility criteria." },
  { id: 21, english: "Students have the options to live in college residences or apartments.", chinese: "学生可以选择住在大学宿舍或公寓。", zhugan: "Students have the options to", xijie: "live in college residences or apartments." },
  { id: 22, english: "The application processes may take longer than expected.", chinese: "申请过程可能比预期的的时间更长。", zhugan: "The application processes may", xijie: "take longer than expected." },
  { id: 23, english: "Rising inflation may indicate an increase in the demand for consumer products.", chinese: "通货膨胀加剧可能表明对消费品的需求增加。", zhugan: "Rising inflation may indicate an", xijie: "increase in the demand for consumer products." },
  { id: 24, english: "The massive accumulation of data was converted into a communicable argument.", chinese: "大量的数据累积被转化为一种可用于沟通的论证形式。", zhugan: "The massive accumulation of data", xijie: "was converted into a communicable argument." },
  { id: 25, english: "The most popular courses still have a few places left.", chinese: "最受欢迎的课程仍有一些空缺席位。", zhugan: "The most popular courses still", xijie: "have a few places left." },
  { id: 26, english: "Parents' talk to children tends to be simplified.", chinese: "父母对孩子的谈话往往被简化。", zhugan: "Parents' talk to children", xijie: "tends to be simplified." },
  { id: 27, english: "Education and training provide important skills for the labor force.", chinese: "教育培训为劳动力提供了重要的技能。", zhugan: "Education and training provide", xijie: "important skills for the labor force." },
  { id: 28, english: "Those who are considering a career in marketing should attend the talk.", chinese: "那些正在考虑从事市场营销的人应该参加这次演讲。", zhugan: "Those who are considering a", xijie: "career in marketing should attend the talk." },
  { id: 29, english: "A good academic paper should present a clear argument.", chinese: "一篇好的学术论文应该呈现一个清晰的论点。", zhugan: "A good academic paper should", xijie: "present a clear argument." },
  { id: 30, english: "Collaboration between departments is a feature of successful companies.", chinese: "部门间的协作是成功公司的一个特点。", zhugan: "Collaboration between departments is", xijie: "a feature of successful companies." },
  { id: 31, english: "Geography is generally divided into two main branches, human and physical.", chinese: "地理学通常分为两个主要的分支：人文地理和自然地理。", zhugan: "Geography is generally divided into", xijie: "two main branches, human and physical." },
  { id: 32, english: "Essays and assignments are spread out across the academic year.", chinese: "论文和作业分散在整个学年内。", zhugan: "Essays and assignments are", xijie: "spread out across the academic year." },
  { id: 33, english: "The elective course introduces engineering students to construction practices and concepts.", chinese: "选修课程向工程学生介绍了建筑实操和建筑概念。", zhugan: "The elective course introduces engineering", xijie: "students to construction practices and concepts." },
  { id: 34, english: "A professor took one year off to work on her book.", chinese: "一位教授休了一年的假，专注于撰写她的书籍。", zhugan: "A professor took one year", xijie: "off to work on her book." },
  { id: 35, english: "Scientists were unsure when the early men first left Africa.", chinese: "科学家们不能确定早期人类是什么时候第一次离开非洲的。", zhugan: "Scientists were unsure when the", xijie: "early men first left Africa." },
  { id: 36, english: "The printers automatically print on both sides of each page.", chinese: "打印机自动打印每页的两面。", zhugan: "The printers automatically print on", xijie: "both sides of each page." },
  { id: 37, english: "There is a widely believed perception that engineering is for boys.", chinese: "人们普遍认为，工程学适合男孩。", zhugan: "There is a widely believed", xijie: "perception that engineering is for boys." },
  { id: 38, english: "Distance learning allows you to develop a career around your commitments.", chinese: "远程学习让你能够围绕已有的事务或安排来发展职业。", zhugan: "Distance learning allows you to", xijie: "develop a career around your commitments." },
  { id: 39, english: "Salt is produced from seawater or extracted from the ground.", chinese: "盐是从海水中产生的或从地下提取的。", zhugan: "Salt is produced from seawater", xijie: "or extracted from the ground." },
  { id: 40, english: "The area has a variety of underwater habitats and species.", chinese: "该地区有各种各样的水下栖息地和物种。", zhugan: "The area has a variety", xijie: "of underwater habitats and species." },
  { id: 41, english: "Your ideas are discussed and debated in seminars and tutorials.", chinese: "你的想法在研讨会和辅导课中被讨论和辩论。", zhugan: "Your ideas are discussed and", xijie: "debated in seminars and tutorials." },
  { id: 42, english: "Classical mechanics is sometimes considered as a branch of applied mathematics.", chinese: "经典力学有时候被认为是应用数学的一个分支。", zhugan: "Classical mechanics is sometimes considered", xijie: "as a branch of applied mathematics." },
  { id: 43, english: "The assessment of this course will be based on four essays.", chinese: "这门课的评估将基于四篇论文。", zhugan: "The assessment of this course", xijie: "will be based on four essays." },
  { id: 44, english: "The history of the movement was recorded by several writers.", chinese: "这场运动的历史被几位作家记录了下来。", zhugan: "The history of the movement", xijie: "was recorded by several writers." },
  { id: 45, english: "We standardise the data by using a range of techniques.", chinese: "我们通过使用一系列技术来规范化数据。", zhugan: "We standardise the data by", xijie: "using a range of techniques." },
  { id: 46, english: "The university dynamic campus life can help students make lifelong friends.", chinese: "大学活力的校园生活可以帮助学生结交终生朋友。", zhugan: "The university dynamic campus life", xijie: "can help students make lifelong friends." },
  { id: 47, english: "You will be simulated to develop under the guidance of your tutor.", chinese: "你将在导师的指导下被激发潜力去获得发展。", zhugan: "You will be simulated to", xijie: "develop under the guidance of your tutor." },
  { id: 48, english: "He determined the company's public relations policy.", chinese: "他决定了公司的公共关系政策。", zhugan: "He determined the company's", xijie: "public relations policy." },
  { id: 49, english: "The mock trial aims to increase the interest in the law law students.", chinese: "模拟审判旨在提高法学学生对法律的兴趣。", zhugan: "The mock trial aims to", xijie: "increase the interest in the law law students." },
  { id: 50, english: "She has published three books and widely articles.", chinese: "她已经出版了三本书和广泛的文章。", zhugan: "She has published three books", xijie: "and widely articles." },
  { id: 51, english: "It is an unmissable opportunity for anyone who wants to pursue a career in media.", chinese: "对于任何想在媒体领域发展的人来说，这是一个不容错过的机会。", zhugan: "It is an unmissable opportunity for", xijie: "anyone who wants to pursue a career in media." },
  { id: 52, english: "A balanced diet and regular exercise are necessary for good health.", chinese: "均衡的饮食和规律的运动对身体健康是必要的。", zhugan: "A balanced diet and regular", xijie: "exercise are necessary for good health." },
  { id: 53, english: "The key to success in this course is consistent study and hard work.", chinese: "这门课成功的关键在于一贯的学习和努力。", zhugan: "The key to success in this", xijie: "course is consistent study and hard work." },
  { id: 54, english: "Many students opt for accommodation close to the university campus.", chinese: "许多学生选择靠近大学校园的住宿。", zhugan: "Many students opt for accommodation", xijie: "close to the university campus." },
  { id: 55, english: "The lecture will cover the fundamental principles of quantum physics.", chinese: "这堂课将涵盖量子物理的基本原理。", zhugan: "The lecture will cover the", xijie: "fundamental principles of quantum physics." },
  { id: 56, english: "The standard project formatting details can be found online.", chinese: "标准项目格式的详细信息可以在网上找到。", zhugan: "The standard project formatting details", xijie: "can be found online." },
  { id: 57, english: "You need to submit your final dissertation before the end of the month.", chinese: "你需要在月底之前提交你的最终毕业论文。", zhugan: "You need to submit your", xijie: "final dissertation before the end of the month." },
  { id: 58, english: "There are many interesting activities available on campus during weekends.", chinese: "周末校园里有许多有趣的活动可供参加。", zhugan: "There are many interesting activities", xijie: "available on campus during weekends." },
  { id: 59, english: "Understanding history helps us make better decisions for the future.", chinese: "理解历史可以帮助我们为未来做出更好的决定。", zhugan: "Understanding history helps us make", xijie: "better decisions for the future." },
  { id: 60, english: "Technological advancements have significantly impacted global communications.", chinese: "技术进步已经显著影响了全球通信。", zhugan: "Technological advancements have significantly", xijie: "impacted global communications." },
  { id: 61, english: "The local library has an extensive collection of rare historical manuscripts.", chinese: "当地图书馆收藏了大量珍贵的前朝历史手稿。", zhugan: "The local library has an", xijie: "extensive collection of rare historical manuscripts." },
  { id: 62, english: "Critical thinking is an essential skill for any university degree.", chinese: "批判性思维是任何大学学位必不可少的能力。", zhugan: "Critical thinking is an essential", xijie: "skill for any university degree." },
  { id: 63, english: "The government has announced a new policy regarding renewable energy.", chinese: "政府宣布了一项关于可再生能源的新政策。", zhugan: "The government has announced a", xijie: "new policy regarding renewable energy." },
  { id: 64, english: "Please review the safety instructions before operating the laboratory equipment.", chinese: "在操作实验室设备前，请仔细阅读安全说明。", zhugan: "Please review the safety instructions", xijie: "before operating the laboratory equipment." },
  { id: 65, english: "Online learning tools have made education more accessible globally.", chinese: "在线学习工具使得教育在全球范围内更容易获取。", zhugan: "Online learning tools have made", xijie: "education more accessible globally." },
  { id: 66, english: "Statistical analysis was used to interpret the experimental results.", chinese: "统计分析被用来解释实验结果。", zhugan: "Statistical analysis was used to", xijie: "interpret the experimental results." },
  { id: 67, english: "The economic crisis led to severe budget cuts across all departments.", chinese: "经济危机导致所有部门面临严重的预算削减。", zhugan: "The economic crisis led to", xijie: "severe budget cuts across all departments." },
  { id: 68, english: "The marketing department is launching a new advertising campaign next week.", chinese: "市场部下周将启动一项新的广告活动。", zhugan: "The marketing department is launching", xijie: "a new advertising campaign next week." },
  { id: 69, english: "Students must achieve a passing grade in all core modules.", chinese: "学生必须在所有核心模块中达到及格成绩。", zhugan: "Students must achieve a passing", xijie: "grade in all core modules." },
  { id: 70, english: "The research paper explores the long-term effects of climate change.", chinese: "该研究论文探讨了气候变化的长期影响。", zhugan: "The research paper explores the", xijie: "long-term effects of climate change." },
  { id: 71, english: "Effective communication is vital for teamwork and project success.", chinese: "有效的沟通对于团队合作和项目的成功至关重要。", zhugan: "Effective communication is vital for", xijie: "teamwork and project success." },
  { id: 72, english: "The newly renovated science block features state-of-the-art facilities.", chinese: "新装修的科学大楼配备了最先进的的设施。", zhugan: "The newly renovated science block", xijie: "features state-of-the-art facilities." },
  { id: 73, english: "All students are encouraged to participate in extracurricular activities.", chinese: "鼓励所有学生参加课外活动。", zhugan: "All students are encouraged to", xijie: "participate in extracurricular activities." },
  { id: 74, english: "The company focuses on sustainable development and eco-friendly products.", chinese: "该公司专注于可持续发展和环保产品。", zhugan: "The company focuses on sustainable", xijie: "development and eco-friendly products." },
  { id: 75, english: "Financial support may be available for eligible international students.", chinese: "符合条件的国际学生可能会获得财政支持。", zhugan: "Financial support may be available", xijie: "for eligible international students." },
  { id: 76, english: "The presentation slides will be uploaded to the portal after class.", chinese: "演讲幻灯片将在下课后上传到门户网站。", zhugan: "The presentation slides will be", xijie: "uploaded to the portal after class." },
  { id: 77, english: "Medical advancements have contributed to a higher average life expectancy.", chinese: "医疗进步促进了更高的平均预期寿命。", zhugan: "Medical advancements have contributed to", xijie: "a higher average life expectancy." },
  { id: 78, english: "Attending workshops can broaden your perspective on the subject matter.", chinese: "参加研讨会可以拓宽你对该主题的看法。", zhugan: "Attending workshops can broaden your", xijie: "perspective on the subject matter." },
  { id: 79, english: "The introduction of new technology streamlined the manufacturing process.", chinese: "新技术的引进简化了制造流程。", zhugan: "The introduction of new technology", xijie: "streamlined the manufacturing process." },
  { id: 80, english: "An internal review revealed several flaws in the old system.", chinese: "内部审查揭示了旧系统中的几个缺陷。", zhugan: "An internal review revealed several", xijie: "flaws in the old system." },
  { id: 81, english: "The final exam will cover everything discussed since the first week.", chinese: "期末考试将涵盖自第一周以来讨论的所有内容。", zhugan: "The final exam will cover", xijie: "everything discussed since the first week." },
  { id: 82, english: "The seminar has been rescheduled to a larger auditorium.", chinese: "研讨会已改期到一个更大的礼堂举行。", zhugan: "The seminar has been rescheduled", xijie: "to a larger auditorium." },
  { id: 83, english: "Proper documentation is required to validate your research findings.", chinese: "需要妥善的文献记录来验证你的研究结果。", zhugan: "Proper documentation is required to", xijie: "validate your research findings." },
  { id: 84, english: "The student union advocates for the rights and welfare of students.", chinese: "学生会倡导学生的权利和福利。", zhugan: "The student union advocates for", xijie: "the rights and welfare of students." },
  { id: 85, english: "The history of art reflects the cultural evolution of societies.", chinese: "艺术史反映了社会的文化演变。", zhugan: "The history of art reflects", xijie: "the cultural evolution of societies." },
  { id: 86, english: "A clear understanding of the rules is essential for compliance.", chinese: "清晰理解规则对于合规性至关重要。", zhugan: "A clear understanding of the", xijie: "rules is essential for compliance." },
  { id: 87, english: "Renewable energy sources are becoming more cost-effective over time.", chinese: "随着时间的推移，可再生能源变得更具成本效益。", zhugan: "Renewable energy sources are becoming", xijie: "more cost-effective over time." },
  { id: 88, english: "The law of supply and demand determines market prices.", chinese: "供求规律决定市场价格。", zhugan: "The law of supply and", xijie: "demand determines market prices." },
  { id: 89, english: "Students are expected to respect the university code of conduct.", chinese: "期望学生遵守大学行为准则。", zhugan: "Students are expected to respect", xijie: "the university code of conduct." },
  { id: 90, english: "The laboratory reports must be detailed, accurate and neatly formatted.", chinese: "实验室报告必须详细、准确且格式整洁。", zhugan: "The laboratory reports must be", xijie: "detailed, accurate and neatly formatted." },
  { id: 91, english: "Artificial intelligence is reshaping the future of many modern industries.", chinese: "人工智能正在重塑许多现代行业的未来。", zhugan: "Artificial intelligence is reshaping the", xijie: "future of many modern industries." },
  { id: 92, english: "You can borrow up to five books from the library at once.", chinese: "你一次最多可以从图书馆借五本书。", zhugan: "You can borrow up to", xijie: "five books from the library at once." },
  { id: 93, english: "The data shows a strong correlation between poverty and low literacy rates.", chinese: "数据表明贫困与低识字率之间存在强相关性。", zhugan: "The data shows a strong correlation", xijie: "between poverty and low literacy rates." },
  { id: 94, english: "The professor provided constructive feedback on my initial draft.", chinese: "教授对我的一稿提供了建设性的反馈。", zhugan: "The professor provided constructive feedback", xijie: "on my initial draft." },
  { id: 95, english: "Time management is crucial when preparing for final examinations.", chinese: "在准备期末考试时，时间管理是至关重要的。", zhugan: "Time management is crucial when", xijie: "preparing for final examinations." },
  { id: 96, english: "The business plan requires a thorough analysis of competitors.", chinese: "该商业计划需要对竞争对手进行深入分析。", zhugan: "The business plan requires a", xijie: "thorough analysis of competitors." },
  { id: 97, english: "Environmental protection policies need to be strictly enforced globally.", chinese: "环境保护政策需要在全球范围内严格执行。", zhugan: "Environmental protection policies need to", xijie: "be strictly enforced globally." },
  { id: 98, english: "The university provides excellent career counseling services for seniors.", chinese: "大学为大四学生提供卓越的职业咨询服务。", zhugan: "The university provides excellent career", xijie: "counseling services for seniors." },
  { id: 99, english: "A strong thesis statement guides the direction of your essay.", chinese: "一个强有力的论文陈述能指引你文章的方向。", zhugan: "A strong thesis statement guides", xijie: "the direction of your essay." },
  { id: 100, english: "Public health campaigns aim to raise awareness of disease prevention.", chinese: "公共卫生运动旨在提高人们对疾病预防的意识。", zhugan: "Public health campaigns aim to", xijie: "raise awareness of disease prevention." },
  { id: 101, english: "The chemistry experiment required precise measurements of all solutions.", chinese: "化学实验需要对所有溶液进行精确的测量。", zhugan: "The chemistry experiment required precise", xijie: "measurements of all solutions." },
  { id: 102, english: "Innovation is the main driving force behind economic growth.", chinese: "创新是经济增长背后的主要驱动力。", zhugan: "Innovation is the main driving", xijie: "force behind economic growth." },
  { id: 103, english: "Team coordination is necessary to complete the group assignment on time.", chinese: "团队协作对于按时完成小组作业是必要的。", zhugan: "Team coordination is necessary to", xijie: "complete the group assignment on time." },
  { id: 104, english: "The results of the study were published in a peer-reviewed journal.", chinese: "该研究结果发表在一家同行评审期刊上。", zhugan: "The results of the study", xijie: "were published in a peer-reviewed journal." },
  { id: 105, english: "Learning a secondary language opens up new career opportunities.", chinese: "学习第二语言可以开辟新的职业机会。", zhugan: "Learning a secondary language opens", xijie: "up new career opportunities." },
  { id: 106, english: "The layout of the new office promotes collaboration among employees.", chinese: "新办公室的布局促进了员工之间的协作。", zhugan: "The layout of the new", xijie: "office promotes collaboration among employees." },
  { id: 107, english: "Online security is a critical concern for modern financial institutions.", chinese: "网络安全是现代金融机构的一个关键关注点。", zhugan: "Online security is a critical", xijie: "concern for modern financial institutions." },
  { id: 108, english: "The curriculum covers both theoretical concepts and practical applications.", chinese: "课程既涵盖理论概念，也涵盖实际应用。", zhugan: "The curriculum covers both theoretical", xijie: "concepts and practical applications." },
  { id: 109, english: "Customer feedback is essential for continuous product improvement.", chinese: "客户反馈对于产品的持续改进至关重要。", zhugan: "Customer feedback is essential for", xijie: "continuous product improvement." },
  { id: 110, english: "Urban planning plays a major role in creating sustainable cities.", chinese: "城市规划在创建可持续城市中起着主要作用。", zhugan: "Urban planning plays a major", xijie: "role in creating sustainable cities." },
  { id: 111, english: "The archeological find provided fresh insights into ancient civilizations.", chinese: "这一考古发现为古代文明提供了新的见解。", zhugan: "The archeological find provided fresh", xijie: "insights into ancient civilizations." },
  { id: 112, english: "Good leadership involves listening to all viewpoints before deciding.", chinese: "好的领导力包括在做出决定前倾听所有观点。", zhugan: "Good leadership involves listening to", xijie: "all viewpoints before deciding." },
  { id: 113, english: "The digital divide remains a significant barrier to education in remote areas.", chinese: "数字鸿沟仍然是偏远地区教育的一大障碍。", zhugan: "The digital divide remains a", xijie: "significant barrier to education in remote areas." },
  { id: 114, english: "Water conservation is an urgent priority for the agricultural sector.", chinese: "节约用水是农业部门的一项紧急优先任务。", zhugan: "Water conservation is an urgent", xijie: "priority for the agricultural sector." },
  { id: 115, english: "The conference brought together experts from various scientific fields.", chinese: "会议聚集了来自各个科学领域的专家。", zhugan: "The conference brought together experts", xijie: "from various scientific fields." },
  { id: 116, english: "A clear corporate strategy is necessary to navigate market changes.", chinese: "清晰的公司战略对于应对市场变化是必要的。", zhugan: "A clear corporate strategy is", xijie: "necessary to navigate market changes." },
  { id: 117, english: "Sociological studies analyze the impact of media on teenagers.", chinese: "社会学研究分析了媒体对青少年的影响。", zhugan: "Sociological studies analyze the impact", xijie: "of media on teenagers." },
  { id: 118, english: "The financial reports must be verified by an independent auditor.", chinese: "财务报告必须由独立审计师核实。", zhugan: "The financial reports must be", xijie: "verified by an independent auditor." },
  { id: 119, english: "The architecture of the building combines classic and modern styles.", chinese: "这座建筑的结构结合了经典与现代风格。", zhugan: "The architecture of the building", xijie: "combines classic and modern styles." },
  { id: 120, english: "Effective project management minimizes risks and controls expenses.", chinese: "有效的项目管理能最大限度降低风险并控制费用。", zhugan: "Effective project management minimizes", xijie: "risks and controls expenses." },
  { id: 121, english: "The scholarship program supports talented students from low-income families.", chinese: "该奖学金项目资助来自低收入家庭的优秀学生。", zhugan: "The scholarship program supports talented", xijie: "students from low-income families." },
  { id: 122, english: "Investing in education yields high long-term returns for society.", chinese: "投资教育能为社会带来高额的长期回报。", zhugan: "Investing in education yields high", xijie: "long-term returns for society." },
  { id: 123, english: "The legal system protects the intellectual property of creators.", chinese: "法律制度保护创造者的知识产权。", zhugan: "The legal system protects the", xijie: "intellectual property of creators." },
  { id: 124, english: "Social media algorithms influence the information users consume.", chinese: "社交媒体算法会影响用户消费的信息。", zhugan: "Social media algorithms influence the", xijie: "information users consume." },
  { id: 125, english: "The global economy is highly vulnerable to geopolitical tensions.", chinese: "全球经济高度容易受到地缘政治局势紧张的影响。", zhugan: "The global economy is highly", xijie: "vulnerable to geopolitical tensions." },
  { id: 126, english: "The university library offers training sessions on database research.", chinese: "大学图书馆提供关于数据库研究的培训课程。", zhugan: "The university library offers training", xijie: "sessions on database research." },
  { id: 127, english: "Proper waste disposal is vital to prevent environmental contamination.", chinese: "妥善的废物处理对于防止环境污染至关重要。", zhugan: "Proper waste disposal is vital", xijie: "to prevent environmental contamination." },
  { id: 128, english: "The research methodology must be clearly explained in your paper.", chinese: "研究方法必须在你的论文中清晰解释。", zhugan: "The research methodology must be", xijie: "clearly explained in your paper." },
  { id: 129, english: "A diverse workforce brings multiple perspectives to a business.", chinese: "多样化的员工队伍能给企业带来多元化的视角。", zhugan: "A diverse workforce brings multiple", xijie: "perspectives to a business." },
  { id: 130, english: "The transition to a green economy creates new employment opportunities.", chinese: "向绿色经济的过渡创造了新的就业机会。", zhugan: "The transition to a green", xijie: "economy creates new employment opportunities." },
  { id: 131, english: "Regular health check-ups help in the early detection of chronic illness.", chinese: "定期健康体检有助于早期发现慢性疾病。", zhugan: "Regular health check-ups help in", xijie: "the early detection of chronic illness." },
  { id: 132, english: "The history syllabus has been updated to include contemporary global events.", chinese: "历史课程大纲已更新，纳入了当代全球事件。", zhugan: "The history syllabus has been", xijie: "updated to include contemporary global events." },
  { id: 133, english: "The company provides comprehensive training for all new hires.", chinese: "公司为所有新员工提供全面的培训。", zhugan: "The company provides comprehensive training", xijie: "for all new hires." },
  { id: 134, english: "Consumer spending drives economic growth in most developed nations.", chinese: "在大多数发达国家，消费者支出驱动着经济增长。", zhugan: "Consumer spending drives economic growth", xijie: "in most developed nations." },
  { id: 135, english: "The scientific team published their breakthrough findings last Tuesday.", chinese: "科学团队在上周二发表了他们的突破性发现。", zhugan: "The scientific team published their", xijie: "breakthrough findings last Tuesday." },
  { id: 136, english: "The lecture hall is equipped with advanced audio-visual devices.", chinese: "阶梯教室配备了先进的视听设备。", zhugan: "The lecture hall is equipped", xijie: "with advanced audio-visual devices." },
  { id: 137, english: "A clear analytical framework is essential for interpreting data sets.", chinese: "清晰的分析框架对于解释数据集是必不可少的。", zhugan: "A clear analytical framework is", xijie: "essential for interpreting data sets." },
  { id: 138, english: "The government plans to invest heavily in public transport infrastructure.", chinese: "政府计划大力投资公共交通基础设施。", zhugan: "The government plans to invest", xijie: "heavily in public transport infrastructure." },
  { id: 139, english: "Understanding cultural norms is critical for successful international marketing.", chinese: "理解文化规范对于成功的国际营销至关重要。", zhugan: "Understanding cultural norms is critical", xijie: "for successful international marketing." },
  { id: 140, english: "The university offers language support courses for non-native English speakers.", chinese: "大学为非英语母语人士提供语言支持课程。", zhugan: "The university offers language support", xijie: "courses for non-native English speakers." },
  { id: 141, english: "The research group focuses on molecular biology advancements.", chinese: "该研究小组专注于分子生物学的进展。", zhugan: "The research group focuses on", xijie: "molecular biology advancements." },
  { id: 142, english: "Economic models are used to forecast future market trends.", chinese: "经济模型被用来预测未来的市场趋势。", zhugan: "Economic models are used to", xijie: "forecast future market trends." },
  { id: 143, english: "The university has strict guidelines regarding academic integrity and plagiarism.", chinese: "大学对学术诚信和剽窃有严格的准则。", zhugan: "The university has strict guidelines", xijie: "regarding academic integrity and plagiarism." },
  { id: 144, english: "Sustainable agricultural practices help maintain soil fertility over time.", chinese: "可持续农业实践有助于随着时间的推移保持土壤肥力。", zhugan: "Sustainable agricultural practices help maintain", xijie: "soil fertility over time." },
  { id: 145, english: "The new software streamlines the payroll management process completely.", chinese: "新软件彻底简化了工资管理流程。", zhugan: "The new software streamlines the", xijie: "payroll management process completely." },
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

// ==========================================
// 2. 状态管理与核心阶梯刷题逻辑
// ==========================================
let currentQuestionIndex = 0;
let currentStage = 1; // 1: 照抄阶段; 2: 盲测阶段

// 安全节点处理工具（防止因 HTML 偶发缺失导致系统崩溃）
function updateNodeText(id, text) {
  const node = document.getElementById(id);
  if (node) node.innerText = text || '';
}

function setNodeDisplay(id, displayStyle) {
  const node = document.getElementById(id);
  if (node) node.style.display = displayStyle;
}

// 核心渲染函数：完全契合你的 HTML 命名结构
function renderQuestion() {
  const q = WFD_LIST[currentQuestionIndex];
  if (!q) return;

  // 1. 更新顶部系统大标题
  const titleNode = document.getElementById("title-text");
  if (titleNode) titleNode.innerHTML = `🎯 WFD 阶梯式全屏背诵系统 (第 ${q.id} 题)`;

  // 2. 控制阶梯显示内容
  if (currentStage === 1) {
    // 阶段一：全开放展示，引导用户照抄
    updateNodeText("step-indicator", "阶段一：请照抄一遍上方完整英文句");
    setNodeDisplay("hint-section", "block");
    setNodeDisplay("row-translation", "block");

    // 填充数据节点
    updateNodeText("main-stem", q.zhugan || q.english);
    updateNodeText("main-stem-cn", q.chinese ? ` (主干翻译)` : '');
    updateNodeText("details", q.xijie || '...');
    updateNodeText("details-cn", '');
    updateNodeText("full-english", q.english);
    updateNodeText("full-translation", q.chinese);

    // 隐藏对账区与考点，展示提交按钮，隐藏下一题
    setNodeDisplay("check-result-zone", "none");
    setNodeDisplay("review-section", "none");
    setNodeDisplay("next-btn", "none");
    setNodeDisplay("submit-btn", "inline-block");
  } else {
    // 阶段二：斩断所有英文提示，只保留中文进行全屏默写盲测
    updateNodeText("step-indicator", "阶段二：英文提示已切断！请凭借记忆，看着下方中文进行全屏盲测默写");
    setNodeDisplay("hint-section", "none"); // 隐藏主干、细节、完整英文
    setNodeDisplay("row-translation", "block"); // 只展示完整中文
    
    // 隐藏对账区与考点，让用户能干净地重新输入
    setNodeDisplay("check-result-zone", "none");
    setNodeDisplay("review-section", "none");
    setNodeDisplay("next-btn", "none");
    setNodeDisplay("submit-btn", "inline-block");
  }

  // 清理反馈与文本输入框
  const feedbackNode = document.getElementById("feedback");
  if (feedbackNode) {
    feedbackNode.innerText = '';
    feedbackNode.className = "feedback-msg";
  }
  
  const userInput = document.getElementById("user-input");
  if (userInput) userInput.value = '';
}

// 自动化生成考点剧透（提取大于 4 字符的词汇或词尾变化）
function generateTestPoints(text) {
  const pointsList = document.getElementById("test-points");
  if (!pointsList) return;
  pointsList.innerHTML = '';

  const cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const words = cleanText.split(/\s+/);
  
  // 智能抓取常考点：含有 ed、ing、s/es 或者是长难词的作为考点剧透
  const targets = words.filter((w, i) => w.length > 4 && (w.endsWith('s') || w.endsWith('ed') || w.endsWith('ing') || i % 3 === 0));
  const uniqueTargets = [...new Set(targets)].slice(0, 4);

  if (uniqueTargets.length === 0) {
    uniqueTargets.push(words[0]);
  }

  uniqueTargets.forEach(word => {
    const li = document.createElement("li");
    li.innerHTML = `注意核心词汇的拼写与单复数/时态：<b>${word}</b>`;
    pointsList.appendChild(li);
  });
}

// 处理提交验证逻辑
function handleSubmit() {
  const q = WFD_LIST[currentQuestionIndex];
  if (!q) return;

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

  // 极度鲁棒性校验：忽略末尾标点符号、连字符和大小写进行精准对账
  const formatText = (t) => t.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ");
  const isCorrect = formatText(userText) === formatText(targetText);

  if (currentStage === 1) {
    // 阶段一提交处理
    if (isCorrect) {
      feedbackNode.innerText = "🎉 照抄通过！点击继续进入阶段二盲测！";
      feedbackNode.className = "feedback-msg msg-success";
      
      // 1.5秒后自动切换至盲测
      setTimeout(() => {
        currentStage = 2;
        renderQuestion();
      }, 1500);
    } else {
      feedbackNode.innerText = "❌ 照抄中有字母写错或遗漏了哦，请仔细核对下方绿色标答！";
      feedbackNode.className = "feedback-msg msg-error";
      
      // 展示对账单
      updateNodeText("res-user", userText);
      updateNodeText("res-target", targetText);
      setNodeDisplay("check-result-zone", "block");
    }
  } else {
    // 阶段二（盲测）提交处理
    updateNodeText("res-user", userText);
    updateNodeText("res-target", targetText);
    setNodeDisplay("check-result-zone", "block");

    // 生成考点分析剧透
    generateTestPoints(targetText);
    setNodeDisplay("review-section", "block");

    if (isCorrect) {
      feedbackNode.innerText = "🏆 奇迹！盲测满分通关！完美拿下该高频题！";
      feedbackNode.className = "feedback-msg msg-success";
    } else {
      feedbackNode.innerText = "💡 盲测结束！请比对下方对账单红绿信息进行查漏补缺。";
      feedbackNode.className = "feedback-msg msg-error";
    }

    // 盲测结束后，放出下一题按钮，隐藏提交
    setNodeDisplay("submit-btn", "none");
    setNodeDisplay("next-btn", "inline-block");
  }
}

// 切换至下一题（随机切题）
function handleNextQuestion() {
  currentStage = 1; // 回滚至阶段一
  currentQuestionIndex = Math.floor(Math.random() * WFD_LIST.length); // 随机抽取 155 题中的一题
  renderQuestion();
}

// ==========================================
// 3. 页面生命周期初始化与事件绑定 (完美融合跳过逻辑)
// ==========================================
window.onload = function() {
  if (WFD_LIST.length > 0) {
    // 页面初次载入，随机选一题开始阶梯刷题
    currentQuestionIndex = Math.floor(Math.random() * WFD_LIST.length);
    renderQuestion();
  }

  // 绑定提交验证按钮
  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) submitBtn.onclick = handleSubmit;

  // 绑定下一题箭头按钮（通关/盲测结束后点击的那个）
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) nextBtn.onclick = handleNextQuestion;

  // 🌟 绑定跳过按钮逻辑：一键洗牌直接切新题
  const skipBtn = document.getElementById("skip-btn");
  if (skipBtn) {
    skipBtn.onclick = function() {
      // 隐蔽面板和考点
      setNodeDisplay("check-result-zone", "none");
      setNodeDisplay("review-section", "none");
      // 切新题并归位到阶段一
      handleNextQuestion();
    };
  }
};
