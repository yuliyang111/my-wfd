// ==========================================
// 1. 基础数组：前 55 道题 (ID: 1 - 55)
// ==========================================
const baseData = [
  {
    id: "1",
    mainStem: "The celebrated theory is still the source",
    mainStemCn: "（这一著名的理论至今仍是根源）",
    details: "of great controversy.",
    detailsCn: "（巨大争议的。）",
    fullEnglish: "The celebrated theory is still the source of great controversy.",
    fullTranslation: "这一著名的理论至今仍是巨大争议的根源。",
    points: ["<span class='code-tag'>celebrated</span>（著名的）", "<span class='code-tag'>controversy</span>（争议）。注意结尾是 <b>-versy</b>。"]
  },
  {
    id: "2",
    mainStem: "A good architectural structure should be useful,",
    mainStemCn: "（一个好的建筑结构应该实用、）",
    details: "durable and beautiful.",
    detailsCn: "（耐用、美观。）",
    fullEnglish: "A good architectural structure should be useful, durable and beautiful.",
    fullTranslation: "一个好的建筑结构应该实用、耐用、美观。",
    points: ["<span class='code-tag'>architectural</span>（建筑的）", "<span class='code-tag'>durable</span>（耐用的）"]
  },
  {
    id: "3",
    mainStem: "A group meeting will be held tomorrow",
    mainStemCn: "（明天将举行小组会议）",
    details: "in the library conference room.",
    detailsCn: "（在图书馆会议室。）",
    fullEnglish: "A group meeting will be held tomorrow in the library conference room.",
    fullTranslation: "明天将在图书馆会议室举行小组会议。",
    points: ["<span class='code-tag'>conference</span>（会议）", "注意时态：<span class='code-tag'>will be held</span>"]
  },
  {
    id: "4",
    mainStem: "Educational level is found to be related to",
    mainStemCn: "（教育水平被发现与...有关）",
    details: "social and economic background.",
    detailsCn: "（社会和经济背景。）",
    fullEnglish: "Educational level is found to be related to social and economic background.",
    fullTranslation: "教育水平与社会和经济背景有关。",
    points: ["固定搭配：<span class='code-tag'>be related to</span>", "<span class='code-tag'>economic</span>（经济的）"]
  },
  {
    id: "5",
    mainStem: "All of the assignments must be submitted",
    mainStemCn: "（所有作业必须亲自提交到）",
    details: "in person to the faculty office.",
    detailsCn: "（学院办公室/教职员工办公室。）",
    fullEnglish: "All of the assignments must be submitted in person to the faculty office.",
    fullTranslation: "所有作业必须亲自提交到学院办公室/教职员工办公室。",
    points: ["<span class='code-tag'>assignments</span>（作业复数）", "<span class='code-tag'>submitted</span>双写 <b>t</b>", "<span class='code-tag'>faculty</span>（教职员工）"]
  },
  {
    id: "6",
    mainStem: "Our view is that educational reforms",
    mainStemCn: "（我们的看法是，教育改革）",
    details: "have been inadequately implemented.",
    detailsCn: "（执行得不够充分。）",
    fullEnglish: "Our view is that educational reforms have been inadequately implemented.",
    fullTranslation: "我们的看法是，教育改革执行得不够充分。",
    points: ["主语复数用 <span class='code-tag'>have been</span>", "<span class='code-tag'>inadequately</span>（不充分地）", "<span class='code-tag'>implemented</span>（实施）"]
  },
  {
    id: "7",
    mainStem: "An introduction is an essential element",
    mainStemCn: "（简介是...的基本要素）",
    details: "of presentation.",
    detailsCn: "（演讲的。）",
    fullEnglish: "An introduction is an essential element of presentation.",
    fullTranslation: "简介是演讲的基本要素。",
    points: ["注意句首是不定冠词 <span class='code-tag'>An</span>", "<span class='code-tag'>essential</span>（基本的）", "<span class='code-tag'>presentation</span>（演讲）"]
  },
  {
    id: "8",
    mainStem: "Before attending classes, you must register",
    mainStemCn: "（在参加课程之前，你必须...注册）",
    details: "online or by post.",
    detailsCn: "（在网上或邮寄。）",
    fullEnglish: "Before attending classes, you must register online or by post.",
    fullTranslation: "在参加课程之前，你必须在网上或邮寄注册。",
    points: ["<span class='code-tag'>attending</span>（参加）", "<span class='code-tag'>register</span>（注册）"]
  },
  {
    id: "9",
    mainStem: "Certain scientific principles must be learned",
    mainStemCn: "（某些科学原理必须通过...来学习）",
    details: "verbally or by logical deduction.",
    detailsCn: "（口头教学或逻辑推理。）",
    fullEnglish: "Certain scientific principles must be learned verbally or by logical deduction.",
    fullTranslation: "某些科学原理必须通过口头教学或逻辑推理来学习。",
    points: ["<span class='code-tag'>principles</span>（原理/原则）", "<span class='code-tag'>verbally</span>（口头地）", "<span class='code-tag'>deduction</span>（推导/扣除）"]
  },
  {
    id: "10",
    mainStem: "Consumer confidence has a direct influence",
    mainStemCn: "（消费者信心...有直接影响）",
    details: "on sales.",
    detailsCn: "（对销售。）",
    fullEnglish: "Consumer confidence has a direct influence on sales.",
    fullTranslation: "消费者信心对销售有直接影响。",
    points: ["<span class='code-tag'>confidence</span>（信心）", "介词搭配：<span class='code-tag'>influence <b>on</b></span>"]
  },
  {
    id: "11",
    mainStem: "Daily practice can build confidence",
    mainStemCn: "（每天的练习可以建立自信）",
    details: "and improve skills.",
    detailsCn: "（并提高技能。）",
    fullEnglish: "Daily practice can build confidence and improve skills.",
    fullTranslation: "每天的练习可以建立自信，提高技能。",
    points: ["<span class='code-tag'>practice</span>（练习）", "<span class='code-tag'>skills</span>（技能复数）"]
  },
  {
    id: "12",
    mainStem: "The economic status of the early Roman Republic",
    mainStemCn: "（早期罗马共和国的经济状况）",
    details: "will be examined.",
    detailsCn: "（将遭到考察。）",
    fullEnglish: "The economic status of the early Roman Republic will be examined.",
    fullTranslation: "我们将考察早期罗马共和国的经济状况。",
    points: ["<span class='code-tag'>Republic</span>（共和国大写）", "<span class='code-tag'>examined</span>（审查）"]
  },
  {
    id: "13",
    mainStem: "Human beings compete with other living things",
    mainStemCn: "（人类与其他生物竞争）",
    details: "for resources and space.",
    detailsCn: "（资源和空间。）",
    fullEnglish: "Human beings compete with other living things for resources and space.",
    fullTranslation: "人类与其他生物竞争资源和空间。",
    points: ["固定搭配：<span class='code-tag'>compete with ... for ...</span>", "<span class='code-tag'>resources</span>（资源复数）"]
  },
  {
    id: "14",
    mainStem: "He landed a job in a very",
    mainStemCn: "（他...找到了一份工作）",
    details: "prestigious law firm.",
    detailsCn: "（在一家非常著名的律师事务所。）",
    fullEnglish: "He landed a job in a very prestigious law firm.",
    fullTranslation: "他在一家非常著名的律师事务所找到了一份工作。",
    points: ["动词短语：<span class='code-tag'>landed a job</span>", "<span class='code-tag'>prestigious</span>（声誉高的/著名的）"]
  },
  {
    id: "15",
    mainStem: "Important details from the argument",
    mainStemCn: "（论证中的重要细节）",
    details: "are missing in the summary.",
    detailsCn: "（在摘要中缺失了。）",
    fullEnglish: "Important details from the argument are missing in the summary.",
    fullTranslation: "摘要中缺少了论证中的重要细节。",
    points: ["主语是 <span class='code-tag'>details</span>，谓语动词用 <span class='code-tag'>are</span>", "<span class='code-tag'>summary</span>（摘要）"]
  },
  {
    id: "16",
    mainStem: "It may not be possible to solve",
    mainStemCn: "（想要...也许是不可能的）",
    details: "the problem easily.",
    detailsCn: "（轻易解决这个问题。）",
    fullEnglish: "It may not be possible to solve the problem easily.",
    fullTranslation: "想要轻易解决这个问题也许是不可能的。",
    points: ["句型：<span class='code-tag'>It is possible to do sth</span>", "<span class='code-tag'>easily</span>（容易地）"]
  },
  {
    id: "17",
    mainStem: "Listening is the key skill needed",
    mainStemCn: "（听力是...所需的核心技能）",
    details: "to succeed in this course.",
    detailsCn: "（在这门课中取得成功。）",
    fullEnglish: "Listening is the key skill needed to succeed in this course.",
    fullTranslation: "听力是学好这门课的关键能力。",
    points: ["<span class='code-tag'>Listening</span>注意双写 <b>n</b> 后加 <b>ing</b>", "<span class='code-tag'>succeed</span>（成功动词形式）"]
  },
  {
    id: "18",
    mainStem: "Plants are the living things that can grow",
    mainStemCn: "（植物是...能生长的生物）",
    details: "on land or in water.",
    detailsCn: "（在陆地上或水中。）",
    fullEnglish: "Plants are the living things that can grow on land or in water.",
    fullTranslation: "植物是能在陆地或水中生长的生物。",
    points: ["定语从句先行词是复数，用 <span class='code-tag'>that can grow</span>", "介词搭配：<span class='code-tag'>on land</span> / <span class='code-tag'>in water</span>"]
  },
  {
    id: "19",
    mainStem: "Please make sure you have correctly cited",
    mainStemCn: "（请确保你已正确引用了）",
    details: "all the necessary materials.",
    detailsCn: "（所有必要的材料。）",
    fullEnglish: "Please make sure you have correctly cited all the necessary materials.",
    fullTranslation: "请确保你正确引用了所有必要的材料。",
    points: ["<span class='code-tag'>correctly</span>（正确地修饰动词）", "<span class='code-tag'>cited</span>（引用）", "<span class='code-tag'>necessary</span>（必要的，<b>c</b>单写，<b>s</b>双写）"]
  },
  {
    id: "20",
    mainStem: "Remember, the prestigious election of stewardship",
    mainStemCn: "（记住，有声望的管理层选举）",
    details: "has strict eligibility criteria.",
    detailsCn: "（有严格的资格标准。）",
    fullEnglish: "Remember, the prestigious election of stewardship has strict eligibility criteria.",
    fullTranslation: "记住，这场有声望的管理层选举有严格的资格标准。",
    points: ["<span class='code-tag'>stewardship</span>（管理职位/管家职务）", "<span class='code-tag'>eligibility</span>（合格/资格）", "<span class='code-tag'>criteria</span>（标准复数形式，单数是 criterion）"]
  },
  {
    id: "21",
    mainStem: "Students have the options to live",
    mainStemCn: "（学生可以选择住在）",
    details: "in college residences or apartments.",
    detailsCn: "（大学宿舍或公寓。）",
    fullEnglish: "Students have the options to live in college residences or apartments.",
    fullTranslation: "学生可以选择住在大学宿舍或公寓。",
    points: ["<span class='code-tag'>options</span>（选择复数）", "<span class='code-tag'>residences</span>（住宅/宿舍）", "<span class='code-tag'>apartments</span>（公寓）"]
  },
  {
    id: "22",
    mainStem: "The application processes may take",
    mainStemCn: "（申请过程可能需要）",
    details: "longer than expected.",
    detailsCn: "（比预期更长的时间。）",
    fullEnglish: "The application processes may take longer than expected.",
    fullTranslation: "申请过程可能比预期的时间更长。",
    points: ["<span class='code-tag'>processes</span>（过程复数）", "固定用法：<span class='code-tag'>longer than expected</span>"]
  },
  {
    id: "23",
    mainStem: "Rising inflation may indicate an increase",
    mainStemCn: "（通货膨胀加剧可能表明增加）",
    details: "in the demand for consumer products.",
    detailsCn: "（对消费品的需求。）",
    fullEnglish: "Rising inflation may indicate an increase in the demand for consumer products.",
    fullTranslation: "通货膨胀加剧可能表明对消费品的需求增加。",
    points: ["<span class='code-tag'>inflation</span>（通胀）", "介词对齐：<span class='code-tag'>increase in</span> / <span class='code-tag'>demand for</span>"]
  },
  {
    id: "24",
    mainStem: "The massive accumulation of data was converted",
    mainStemCn: "（大量的数据累积被转化）",
    details: "into a communicable argument.",
    detailsCn: "（成为一种可用于沟通的论证形式。）",
    fullEnglish: "The massive accumulation of data was converted into a communicable argument.",
    fullTranslation: "大量的数据累积被转化为一种可用于沟通的论证形式。",
    points: ["注意拼写：<span class='code-tag'>accumulation</span> / <span class='code-tag'>communicable</span> / <span class='code-tag'>argument</span>"]
  },
  {
    id: "25",
    mainStem: "The most popular courses still have",
    mainStemCn: "（最受欢迎的课程仍然有一些）",
    details: "a few places left.",
    detailsCn: "（空缺席位。）",
    fullEnglish: "The most popular courses still have a few places left.",
    fullTranslation: "最受欢迎的课程仍有一些空缺席位。",
    points: ["<span class='code-tag'>courses</span>（课程复数）", "后置定语：<span class='code-tag'>left</span> 表示剩下来的"]
  },
  {
    id: "26",
    mainStem: "Parents' talk to children tends",
    mainStemCn: "（父母对孩子的谈话往往）",
    details: "to be simplified.",
    detailsCn: "（被简化。）",
    fullEnglish: "Parents' talk to children tends to be simplified.",
    fullTranslation: "父母对孩子的谈话往往被简化。",
    points: ["注意所有格在 <b>s</b> 后面：<span class='code-tag'>Parents'</span>", "固定搭配：<span class='code-tag'>tend to do sth</span>"]
  },
  {
    id: "27",
    mainStem: "Education and training provide",
    mainStemCn: "（教育和培训提供了）",
    details: "important skills for the labor force.",
    detailsCn: "（劳动力所需的重要技能。）",
    fullEnglish: "Education and training provide important skills for the labor force.",
    fullTranslation: "教育和培训为劳动力提供了重要的技能。",
    points: ["两个主语并列，动词用原形 <span class='code-tag'>provide</span>", "<span class='code-tag'>labor force</span>（劳动力）"]
  },
  {
    id: "28",
    mainStem: "Those who are considering a career in marketing",
    mainStemCn: "（那些正在考虑从事市场营销的人）",
    details: "should attend the talk.",
    detailsCn: "（应该参加这次演讲。）",
    fullEnglish: "Those who are considering a career in marketing should attend the talk.",
    fullTranslation: "那些正在考虑从事市场营销的人应该参加这次演讲。",
    points: ["定语从句引导词用 <span class='code-tag'>Those who</span>", "<span class='code-tag'>career</span>（职业）", "<span class='code-tag'>marketing</span>（市场营销）"]
  },
  {
    id: "29",
    mainStem: "A good academic paper should",
    mainStemCn: "（一篇好的学术论文应该）",
    details: "present a clear argument.",
    detailsCn: "（呈现一个清晰的论点。）",
    fullEnglish: "A good academic paper should present a clear argument.",
    fullTranslation: "一篇好的学术论文应该呈现一个清晰的论点。",
    points: ["<span class='code-tag'>academic</span>（学术的）", "<span class='code-tag'>argument</span>（论点）"]
  },
  {
    id: "30",
    mainStem: "Collaboration between departments is",
    mainStemCn: "（部门之间的协作是...的一个特点）",
    details: "a feature of successful companies.",
    detailsCn: "（成功公司的。）",
    fullEnglish: "Collaboration between departments is a feature of successful companies.",
    fullTranslation: "部门之间的协作是成功公司的一个特点。",
    points: ["主语是单数 <span class='code-tag'>Collaboration</span>，系动词用 <span class='code-tag'>is</span>", "<span class='code-tag'>companies</span>（公司复数）"]
  },
  {
    id: "31",
    mainStem: "Geography is generally divided into two main branches,",
    mainStemCn: "（地理学通常分为两个主要分支：）",
    details: "human and physical.",
    detailsCn: "（人文地理和自然地理。）",
    fullEnglish: "Geography is generally divided into two main branches, human and physical.",
    fullTranslation: "地理学通常分为两个主要分支：人文地理和自然地理。",
    points: ["<span class='code-tag'>Geography</span>（地理学）", "固定结构：<span class='code-tag'>be divided into</span>"]
  },
  {
    id: "32",
    mainStem: "Essays and assignments are spread out",
    mainStemCn: "（论文和作业分散在）",
    details: "across the academic year.",
    detailsCn: "（整个学年。）",
    fullEnglish: "Essays and assignments are spread out across the academic year.",
    fullTranslation: "论文和作业分散在整个学年。",
    points: ["<span class='code-tag'>Essays</span>（论文复数）", "短语：<span class='code-tag'>spread out</span>（展开/分散）"]
  },
  {
    id: "33",
    mainStem: "The elective course introduces engineering students",
    mainStemCn: "（选修课程向工程学生介绍）",
    details: "to construction practices and concepts.",
    detailsCn: "（建筑实操和概念。）",
    fullEnglish: "The elective course introduces engineering students to construction practices and concepts.",
    fullTranslation: "选修课程向工程学生介绍了建筑实操和建筑概念。",
    points: ["短语：<span class='code-tag'>introduce sb to sth</span>", "<span class='code-tag'>construction</span>（建筑）", "<span class='code-tag'>concepts</span>（概念复数）"]
  },
  {
    id: "34",
    mainStem: "A professor took one year off",
    mainStemCn: "（一位教授休假了一年）",
    details: "to work on her book.",
    detailsCn: "（专注于撰写她的书籍。）",
    fullEnglish: "A professor took one year off to work on her book.",
    fullTranslation: "一位教授休假了一年，专注于撰写她的书籍。",
    points: ["短语：<span class='code-tag'>take time off</span>（休假）", "短语：<span class='code-tag'>work on</span>（致力于/从事）"]
  },
  {
    id: "35",
    mainStem: "Scientists were unsure when the early men",
    mainStemCn: "（科学家们不能确定早期人类是什么时候）",
    details: "first left Africa.",
    detailsCn: "（第一次离开非洲。）",
    fullEnglish: "Scientists were unsure when the early men first left Africa.",
    fullTranslation: "科学家们不能确定早期人类是什么时候第一次离开非洲的。",
    points: ["<span class='code-tag'>Scientists</span>（科学家复数）", "<span class='code-tag'>Africa</span>（非洲大写）"]
  },
  {
    id: "36",
    mainStem: "The printers automatically print",
    mainStemCn: "（打印机自动打印）",
    details: "on both sides of each page.",
    detailsCn: "（每页的两面。）",
    fullEnglish: "The printers automatically print on both sides of each page.",
    fullTranslation: "打印机自动打印每页的两面。",
    points: ["<span class='code-tag'>automatically</span>（自动地）", "固定说：<span class='code-tag'>on both sides of</span>"]
  },
  {
    id: "37",
    mainStem: "There is a widely believed perception that",
    mainStemCn: "（人们普遍认为的一种看法是）",
    details: "engineering is for boys.",
    detailsCn: "（工程学适合男孩。）",
    fullEnglish: "There is a widely believed perception that engineering is for boys.",
    fullTranslation: "人们普遍认为，工程学适合男孩。",
    points: ["<span class='code-tag'>perception</span>（观念/感觉）", "同位语从句引导词用 <span class='code-tag'>that</span>"]
  },
  {
    id: "38",
    mainStem: "Distance learning allows you to develop a career",
    mainStemCn: "（远程学习让你能够发展职业）",
    details: "around your commitments.",
    detailsCn: "（围绕你已有的事务或安排。）",
    fullEnglish: "Distance learning allows you to develop a career around your commitments.",
    fullTranslation: "远程学习让你能够围绕已有的事务或安排来发展职业。",
    points: ["短语：<span class='code-tag'>allow sb to do sth</span>", "<span class='code-tag'>commitments</span>（承诺/义务/托付的事物）"]
  },
  {
    id: "39",
    mainStem: "Salt is produced from seawater",
    mainStemCn: "（盐是从海水中产生的）",
    details: "or extracted from the ground.",
    detailsCn: "（或从地下提取的。）",
    fullEnglish: "Salt is produced from seawater or extracted from the ground.",
    fullTranslation: "盐是从海水中产生的或从地下提取的。",
    points: ["被动语态并列：<span class='code-tag'>produced ... or extracted</span>", "<span class='code-tag'>seawater</span>（海水是一个词）"]
  },
  {
    id: "40",
    mainStem: "The area has a variety of",
    mainStemCn: "（该地区有各种各样的）",
    details: "underwater habitats and species.",
    detailsCn: "（水下栖息地和物种。）",
    fullEnglish: "The area has a variety of underwater habitats and species.",
    fullTranslation: "该地区有各种各样的水下栖息地和物种。",
    points: ["<span class='code-tag'>habitats</span>（栖息地复数）", "<span class='code-tag'>species</span>（物种单复数同形）"]
  },
  {
    id: "41",
    mainStem: "Your ideas are discussed and debated",
    mainStemCn: "（你的想法被讨论和辩论）",
    details: "in seminars and tutorials.",
    detailsCn: "（在研讨会和辅导课中。）",
    fullEnglish: "Your ideas are discussed and debated in seminars and tutorials.",
    fullTranslation: "你的想法在研讨会和辅导课中被讨论和辩论。",
    points: ["主语是复数 <span class='code-tag'>ideas</span>", "<span class='code-tag'>seminars</span>（研讨会）", "<span class='code-tag'>tutorials</span>（辅导课）"]
  },
  {
    id: "42",
    mainStem: "Classical mechanics is sometimes considered as",
    mainStemCn: "（经典力学有时候被认为）",
    details: "a branch of applied mathematics.",
    detailsCn: "（应用数学的一个分支。）",
    fullEnglish: "Classical mechanics is sometimes considered as a branch of applied mathematics.",
    fullTranslation: "经典力学有时候被认为是应用数学的一个分支。",
    points: ["虽然以s结尾，但 <span class='code-tag'>mechanics</span>（力学）是单数概念，用 <span class='code-tag'>is</span>", "<span class='code-tag'>applied mathematics</span>（应用数学）"]
  },
  {
    id: "43",
    mainStem: "Marine environments have been destroyed through",
    mainStemCn: "（海洋环境遭到破坏通过）",
    details: "pollution and unsustainable development.",
    detailsCn: "（污染和不可持续的发展。）",
    fullEnglish: "Marine environments have been destroyed through pollution and unsustainable development.",
    fullTranslation: "由于污染和不可持续的发展，海洋环境遭到破坏。",
    points: ["<span class='code-tag'>environments</span>（环境复数）", "<span class='code-tag'>unsustainable</span>（不可持续的）"]
  },
  {
    id: "44",
    mainStem: "Designers need to keep up with",
    mainStemCn: "（设计师需要跟上）",
    details: "the social trends.",
    detailsCn: "（社会潮流。）",
    fullEnglish: "Designers need to keep up with the social trends.",
    fullTranslation: "设计师需要跟上社会潮流。",
    points: ["短语：<span class='code-tag'>keep up with</span>（跟上/赶上）", "<span class='code-tag'>trends</span>（趋势复数）"]
  },
  {
    id: "45",
    mainStem: "A new collection of articles",
    mainStemCn: "（一本新的文集）",
    details: "has just been published.",
    detailsCn: "（刚刚出版。）",
    fullEnglish: "A new collection of articles has just been published.",
    fullTranslation: "一本新的文集刚刚出版。",
    points: ["中心词是单数 <span class='code-tag'>collection</span>，故用现在完成时被动语态的单数：<span class='code-tag'>has just been published</span>"]
  },
  {
    id: "46",
    mainStem: "A good abstract highlights the key points",
    mainStemCn: "（一篇好的摘要能突出关键点）",
    details: "of your paper.",
    detailsCn: "（你论文的。）",
    fullEnglish: "A good abstract highlights the key points of your paper.",
    fullTranslation: "一篇好的摘要能突出你论文的重点。",
    points: ["<span class='code-tag'>abstract</span>（摘要）", "<span class='code-tag'>highlights</span>（单三动词形式，突出）"]
  },
  {
    id: "47",
    mainStem: "New media journalism is an exciting",
    mainStemCn: "（新媒体新闻业是一个令人兴奋的）",
    details: "area of study.",
    detailsCn: "（研究领域。）",
    fullEnglish: "New media journalism is an exciting area of study.",
    fullTranslation: "新媒体新闻业是一个令人工兴奋的研究领域。",
    points: ["<span class='code-tag'>journalism</span>（新闻业）", "<span class='code-tag'>exciting</span>（令人兴奋的）"]
  },
  {
    id: "48",
    mainStem: "Rising sea temperatures are a sign",
    mainStemCn: "（海水温度上升是一个迹象）",
    details: "of climate change.",
    detailsCn: "（气候变化的。）",
    fullEnglish: "Rising sea temperatures are a sign of climate change.",
    fullTranslation: "海水温度上升是气候变化的征兆。",
    points: ["主语是复数 <span class='code-tag'>temperatures</span>，用 <span class='code-tag'>are</span>", "<span class='code-tag'>climate change</span>（气候变化）"]
  },
  {
    id: "49",
    mainStem: "Students should take the training course",
    mainStemCn: "（学生应该参加培训课程）",
    details: "to use the gym.",
    detailsCn: "（为了使用体育馆。）",
    fullEnglish: "Students should take the training course to use the gym.",
    fullTranslation: "学生应该参加使用体育馆的培训课程。",
    points: ["<span class='code-tag'>training course</span>（培训课）", "<span class='code-tag'>gym</span>（健身房/体育馆）"]
  },
  {
    id: "50",
    mainStem: "More research is needed before any definitive",
    mainStemCn: "（在做出任何明确的...之前，还需要进行更多的研究）",
    details: "conclusion can be drawn.",
    detailsCn: "（结论。）",
    fullEnglish: "More research is needed before any definitive conclusion can be drawn.",
    fullTranslation: "在得出任何明确的结论之前，还需要进行更多的研究。",
    points: ["<span class='code-tag'>research</span> 属不可数名词", "<span class='code-tag'>definitive</span>（确定性的/最终的）", "搭配：<span class='code-tag'>draw a conclusion</span>（得出结论）"]
  },
  {
    id: "51",
    mainStem: "The north campus car park could be",
    mainStemCn: "（北校区的停车场可能）",
    details: "closed on Sunday.",
    detailsCn: "（在周日关闭。）",
    fullEnglish: "The north campus car park could be closed on Sunday.",
    fullTranslation: "北校区的停车场可能在周日关闭。",
    points: ["<span class='code-tag'>campus</span>（校园）", "星期大写：<span class='code-tag'>Sunday</span>"]
  },
  {
    id: "52",
    mainStem: "Participating in the class is the center",
    mainStemCn: "（课堂参与是...的核心）",
    details: "of the course.",
    detailsCn: "（课程的。）",
    fullEnglish: "Participating in the class is the center of the course.",
    fullTranslation: "课堂参与是课程的核心。",
    points: ["动名词作主语：<span class='code-tag'>Participating</span>", "<span class='code-tag'>center</span>"]
  },
  {
    id: "53",
    mainStem: "Much of this research is carried out",
    mainStemCn: "（这项研究的大部分是在...进行的）",
    details: "in the laboratory.",
    detailsCn: "（实验室里。）",
    fullEnglish: "Much of this research is carried out in the laboratory.",
    fullTranslation: "这项研究大部分是在实验室里进行的。",
    points: ["短语：<span class='code-tag'>carry out</span>（执行/实施）", "<span class='code-tag'>laboratory</span>（实验室全拼，易错点）"]
  },
  {
    id: "54",
    mainStem: "The college operates a system",
    mainStemCn: "（这所学院运行着一套系统）",
    details: "of continuous assessments.",
    detailsCn: "（持续评估的。）",
    fullEnglish: "The college operates a system of continuous assessments.",
    fullTranslation: "这所学院实行持续评估制度。",
    points: ["<span class='code-tag'>continuous</span>（连续的）", "<span class='code-tag'>assessments</span>（评估复数）"]
  },
  {
    id: "55",
    mainStem: "The rising temperature is changing",
    mainStemCn: "（气温上升正在改变）",
    details: "the wildlife population.",
    detailsCn: "（野生动物种群。）",
    fullEnglish: "The rising temperature is changing the wildlife population.",
    fullTranslation: "气温上升正在改变野生动物的数量。",
    points: ["<span class='code-tag'>temperature</span>", "<span class='code-tag'>wildlife</span>（野生动物，不可数）"]
  }
];

// ==========================================
// 2. 拓展数组A：中间 50 道题 (ID: 56 - 105)
// ==========================================
const extendDataA = [
  {
    id: "56",
    mainStem: "The director of the gallery was grateful",
    mainStemCn: "（美术馆馆长表示感谢）",
    details: "for the anonymous donation.",
    detailsCn: "（对匿名捐赠。）",
    fullEnglish: "The director of the gallery was grateful for the anonymous donation.",
    fullTranslation: "美术馆馆长对匿名捐赠表示感谢。",
    points: ["搭配：<span class='code-tag'>be grateful for</span>", "<span class='code-tag'>anonymous</span>（匿名的）", "<span class='code-tag'>donation</span>（捐赠）"]
  },
  {
    id: "57",
    mainStem: "We encourage students to complete their applications",
    mainStemCn: "（我们鼓励学生们完成他们的申请）",
    details: "before the deadline.",
    detailsCn: "（在截止日期之前。）",
    fullEnglish: "We encourage students to complete their applications before the deadline.",
    fullTranslation: "我们鼓励学生在截止日期前完成申请。",
    points: ["结构：<span class='code-tag'>encourage sb to do sth</span>", "<span class='code-tag'>applications</span>（申请复数）"]
  },
  {
    id: "58",
    mainStem: "Strangely, people are simultaneously impressed by",
    mainStemCn: "（奇怪的是，人们在感到深刻印象的同时）",
    details: "and skeptical about statistics.",
    detailsCn: "（又对统计数据保持怀疑。）",
    fullEnglish: "Strangely, people are simultaneously impressed by and skeptical about statistics.",
    fullTranslation: "奇怪的是，人们对“统计数据”既感到印象深刻又持怀疑态度。",
    points: ["<span class='code-tag'>simultaneously</span>（同时地）", "<span class='code-tag'>skeptical</span>（怀疑的）", "<span class='code-tag'>statistics</span>（统计数据）"]
  },
  {
    id: "59",
    mainStem: "Social psychology is concerned with the understanding",
    mainStemCn: "（社会心理学关注的是理解）",
    details: "of human behaviors.",
    detailsCn: "（人类行为。）",
    fullEnglish: "Social psychology is concerned with the understanding of human behaviors.",
    fullTranslation: "社会心理学关注的是对人类行为的理解。",
    points: ["短语：<span class='code-tag'>be concerned with</span>", "<span class='code-tag'>behaviors</span>（行为复数）"]
  },
  {
    id: "60",
    mainStem: "Having enough sleep has",
    mainStemCn: "（充足的睡眠有）",
    details: "many positive benefits.",
    detailsCn: "（许多积极的益处。）",
    fullEnglish: "Having enough sleep has many positive benefits.",
    fullTranslation: "充足的睡眠有许多积极的益处。",
    points: ["动名词短语作主语，谓语用单三 <span class='code-tag'>has</span>", "<span class='code-tag'>benefits</span>（益处复数）"]
  },
  {
    id: "61",
    mainStem: "The content is to define the combination",
    mainStemCn: "（其内容旨在阐述结合方式）",
    details: "of math and philosophy.",
    detailsCn: "（数学与哲学。）",
    fullEnglish: "The content is to define the combination of math and philosophy.",
    fullTranslation: "其内容旨在阐述数学与哲学的结合方式。",
    points: ["<span class='code-tag'>combination</span>（结合）", "<span class='code-tag'>philosophy</span>（哲学）"]
  },
  {
    id: "62",
    mainStem: "The rise in sea level indicates",
    mainStemCn: "（海平面的上升表明）",
    details: "climate change.",
    detailsCn: "（气候变化。）",
    fullEnglish: "The rise in sea level indicates climate change.",
    fullTranslation: "海平面的上升表明了气候在发生变化。",
    points: ["主语是单数 <span class='code-tag'>rise</span>，动词要用单三 <span class='code-tag'>indicates</span>"]
  },
  {
    id: "63",
    mainStem: "The university library cafe is on",
    mainStemCn: "（大学图书馆的咖啡厅在）",
    details: "the third floor.",
    detailsCn: "（三楼。）",
    fullEnglish: "The university library cafe is on the third floor.",
    fullTranslation: "大学图书馆的咖啡厅在三楼。",
    points: ["介词：<span class='code-tag'>on the third floor</span>", "<span class='code-tag'>cafe</span>（咖啡馆）"]
  },
  {
    id: "64",
    mainStem: "The university auditorium is around",
    mainStemCn: "（大学礼堂就在）",
    details: "the corner.",
    detailsCn: "（转角处。）",
    fullEnglish: "The university auditorium is around the corner.",
    fullTranslation: "大学礼堂就在转角处。",
    points: ["<span class='code-tag'>auditorium</span>（大礼堂）", "短语：<span class='code-tag'>around the corner</span>"]
  },
  {
    id: "65",
    mainStem: "The professor discussed the article yesterday",
    mainStemCn: "（这位教授昨天讲解了这篇文章）",
    details: "in this class.",
    detailsCn: "（在这堂课上。）",
    fullEnglish: "The professor discussed the article yesterday in this class.",
    fullTranslation: "这位教授昨天在这堂课上讲解了这篇文章。",
    points: ["包含时间状语 <span class='code-tag'>yesterday</span>，动词用过去式 <span class='code-tag'>discussed</span>"]
  },
  {
    id: "66",
    mainStem: "Affordable housing is an important issue",
    mainStemCn: "（经济适用房是一个重要问题）",
    details: "for all members of society.",
    detailsCn: "（对于社会所有成员来说。）",
    fullEnglish: "Affordable housing is an important issue for all members of society.",
    fullTranslation: "经济适用房对社会所有成员来说都是一个重要问题。",
    points: ["<span class='code-tag'>Affordable housing</span>（经济适用房）", "<span class='code-tag'>members</span>（成员复数）"]
  },
  {
    id: "67",
    mainStem: "All industries are a system of inputs,",
    mainStemCn: "（所有行业都是一个输入、）",
    details: "processes, outputs and feedback.",
    detailsCn: "（处理、输出和反馈的系统。）",
    fullEnglish: "All industries are a system of inputs, processes, outputs and feedback.",
    fullTranslation: "所有行业都是一个输入、处理、输出和反馈的系统。",
    points: ["主语复数 <span class='code-tag'>industries</span>", "<span class='code-tag'>inputs</span> / <span class='code-tag'>processes</span> / <span class='code-tag'>outputs</span> 全复数，<span class='code-tag'>feedback</span> 单数"]
  },
  {
    id: "68",
    mainStem: "All of your assignments are due",
    mainStemCn: "（你所有的作业都要在...前交）",
    details: "by tomorrow.",
    detailsCn: "（明天。）",
    fullEnglish: "All of your assignments are due by tomorrow.",
    fullTranslation: "你明天应该交所有的作业。",
    points: ["短语：<span class='code-tag'>be due by ...</span>", "<span class='code-tag'>assignments</span>（作业复数）"]
  },
  {
    id: "69",
    mainStem: "Most scientists believe that climate change",
    mainStemCn: "（大多数科学家认为气候变化）",
    details: "threatens the lives on earth.",
    detailsCn: "（威胁着地球上的生命。）",
    fullEnglish: "Most scientists believe that climate change threatens the lives on earth.",
    fullTranslation: "大多数科学家认为气候变化威胁着地球上的生命。",
    points: ["宾语从句主语单数，动词用单三 <span class='code-tag'>threatens</span>", "<span class='code-tag'>lives</span>（生命的复数）"]
  },
  {
    id: "70",
    mainStem: "Despite their differences, all forms of life share",
    mainStemCn: "（尽管存在差异，所有形式的生命都共有）",
    details: "certain characteristics.",
    detailsCn: "（某些共同的特征。）",
    fullEnglish: "Despite their differences, all forms of life share certain characteristics.",
    fullTranslation: "尽管存在差异，但所有形式的生命都有某些共同的特征。",
    points: ["介词：<span class='code-tag'>Despite</span>", "<span class='code-tag'>characteristics</span>（特征复数）"]
  },
  {
    id: "71",
    mainStem: "The academic strength of the early Roman Republic",
    mainStemCn: "（早期罗马共和国的学术实力）",
    details: "will be examined.",
    detailsCn: "（将受到考察。）",
    fullEnglish: "The academic strength of the early Roman Republic will be examined.",
    fullTranslation: "我们将考察早期罗马共和国的学术实力。",
    points: ["注意和第12题作对比，主语变为了 <span class='code-tag'>academic strength</span>"]
  },
  {
    id: "72",
    mainStem: "Organizational failure is considered from various perspectives",
    mainStemCn: "（组织层面的失败被从不同角度审视）",
    details: "in academic literature.",
    detailsCn: "（在学术文献中。）",
    fullEnglish: "Organizational failure is considered from various perspectives in academic literature.",
    fullTranslation: "在学术文献中，人们从不同的角度来思考组织层面的失败。",
    points: ["<span class='code-tag'>Organizational</span>", "<span class='code-tag'>perspectives</span>（视角复数）", "<span class='code-tag'>literature</span>（文献）"]
  },
  {
    id: "73",
    mainStem: "Our professor is hosting the business",
    mainStemCn: "（我们的教授正在主持商务）",
    details: "development conference.",
    detailsCn: "（发展会议。）",
    fullEnglish: "Our professor is hosting the business development conference.",
    fullTranslation: "我们的教授正在主持商业发展会议。",
    points: ["<span class='code-tag'>hosting</span>（主办）", "<span class='code-tag'>business development</span>"]
  },
  {
    id: "74",
    mainStem: "Preparation is important to avoid",
    mainStemCn: "（准备工作对于避免...是很重要的）",
    details: "mishaps in the lab.",
    detailsCn: "（实验室里的不幸事件/小事故。）",
    fullEnglish: "Preparation is important to avoid mishaps in the lab.",
    fullTranslation: "为了避免在实验室发生意外，准备工作是很重要的。",
    points: ["<span class='code-tag'>Preparation</span>", "<span class='code-tag'>mishaps</span>（小灾难/不幸变故复数）"]
  },
  {
    id: "75",
    mainStem: "Statistical results should be expressed in different ways",
    mainStemCn: "（统计结果应该用不同的方式表示）",
    details: "depending on the circumstances.",
    detailsCn: "（取决于具体情况。）",
    fullEnglish: "Statistical results should be expressed in different ways depending on the circumstances.",
    fullTranslation: "统计结果应根据情况以不同的方式表示。",
    points: ["<span class='code-tag'>Statistical</span>", "短语：<span class='code-tag'>depending on</span>", "<span class='code-tag'>circumstances</span>"]
  },
  {
    id: "76",
    mainStem: "Food that contains antibiotics provides",
    mainStemCn: "（含有抗生素的食物提供了）",
    details: "little or no nutritional value.",
    detailsCn: "（很少或根本没有营养价值。）",
    fullEnglish: "Food that contains antibiotics provides little or no nutritional value.",
    fullTranslation: "含有抗生素的食物几乎没有营养价值。",
    points: ["定语从句修饰不可数名词 Food，动词用单三 <span class='code-tag'>provides</span>", "<span class='code-tag'>antibiotics</span>（抗生素复数）"]
  },
  {
    id: "77",
    mainStem: "The business policy seminar includes an internship",
    mainStemCn: "（商业政策研讨会包括一个实习）",
    details: "with a local firm.",
    detailsCn: "（在当地公司。）",
    fullEnglish: "The business policy seminar includes an internship with a local firm.",
    fullTranslation: "商业政策研讨会包括了一份在当地公司的实习（工作）。",
    points: ["<span class='code-tag'>seminar</span>", "<span class='code-tag'>internship</span>（实习职位）"]
  },
  {
    id: "78",
    mainStem: "The key difference between courses is",
    mainStemCn: "（课程之间的主要区别在于）",
    details: "the kind of assessment.",
    detailsCn: "（评估的方式。）",
    fullEnglish: "The key difference between courses is the kind of assessment.",
    fullTranslation: "课程之间的主要区别在于评估方式的不同。",
    points: ["核心主语是单数 difference，用 <span class='code-tag'>is</span>", "<span class='code-tag'>assessment</span>（考核）"]
  },
  {
    id: "79",
    mainStem: "The railway makes long-distance travel",
    mainStemCn: "（铁路使长途旅行成为可能）",
    details: "possible for everyone.",
    detailsCn: "（对每个人来说。）",
    fullEnglish: "The railway makes long-distance travel possible for everyone.",
    fullTranslation: "铁路使每个人都能进行长途旅行。",
    points: ["<span class='code-tag'>railway</span>", "<span class='code-tag'>long-distance</span>（带连字符）"]
  },
  {
    id: "80",
    mainStem: "Traffic is the main cause of air pollution",
    mainStemCn: "（交通是空气污染的主要原因）",
    details: "in many cities.",
    detailsCn: "（在许多城市。）",
    fullEnglish: "Traffic is the main cause of air pollution in many cities.",
    fullTranslation: "在许多城市，交通是空气污染的主要原因。",
    points: ["<span class='code-tag'>Traffic</span>不可数", "<span class='code-tag'>pollution</span>（污染）"]
  },
  {
    id: "81",
    mainStem: "Check the website if you are looking",
    mainStemCn: "（如果你正在寻找...请查看网站）",
    details: "for discounted textbooks.",
    detailsCn: "（打折的教科书。）",
    fullEnglish: "Check the website if you are looking for discounted textbooks.",
    fullTranslation: "如果你想买打折的教科书，可以登陆网站。",
    points: ["<span class='code-tag'>discounted</span>（打折的）", "<span class='code-tag'>textbooks</span>（教科书复数）"]
  },
  {
    id: "82",
    mainStem: "Farming methods across the world have greatly",
    mainStemCn: "（世界各地的耕作方法已经大大地）",
    details: "developed recently.",
    detailsCn: "（发展在最近。）",
    fullEnglish: "Farming methods across the world have greatly developed recently.",
    fullTranslation: "最近世界各地的耕作方法都有了很大的发展。",
    points: ["主语复数 methods，助动词用 <span class='code-tag'>have</span>", "<span class='code-tag'>greatly</span>"]
  },
  {
    id: "83",
    mainStem: "Mature students usually adapt to university life",
    mainStemCn: "（大龄/成熟学生通常适应大学生活）",
    details: "extremely well.",
    detailsCn: "（极其好地。）",
    fullEnglish: "Mature students usually adapt to university life extremely well.",
    fullTranslation: "成熟的学生通常非常适应大学生活。",
    points: ["<span class='code-tag'>Mature</span>（成熟的）", "短语：<span class='code-tag'>adapt to</span>"]
  },
  {
    id: "84",
    mainStem: "The science library is currently located on",
    mainStemCn: "（理科图书馆目前位于）",
    details: "the ground floor of the library.",
    detailsCn: "（图书馆的一层。）",
    fullEnglish: "The science library is currently located on the ground floor of the library.",
    fullTranslation: "理科图书馆目前位于图书馆地面一层。",
    points: ["短语：<span class='code-tag'>be located on</span>", "<span class='code-tag'>ground floor</span>（地面一层）"]
  },
  {
    id: "85",
    mainStem: "Students are advised that the lecture today",
    mainStemCn: "（学生被告知今天的讲座）",
    details: "has been canceled.",
    detailsCn: "（已经被取消。）",
    fullEnglish: "Students are advised that the lecture today has been canceled.",
    fullTranslation: "学生们接到通知，今天的课被取消了。",
    points: ["被动结构：<span class='code-tag'>Students are advised that ...</span>", "<span class='code-tag'>canceled</span>"]
  },
  {
    id: "86",
    mainStem: "They developed a unique approach to",
    mainStemCn: "（他们开发了一种独特的方法来）",
    details: "training their employees.",
    detailsCn: "（培训他们的员工。）",
    fullEnglish: "They developed a unique approach to training their employees.",
    fullTranslation: "他们开发了一种独特的方法来培训他们的员工。",
    points: ["介词搭配：<span class='code-tag'>approach to doing sth</span> (to是介词，后接 <b>-ing</b>)", "<span class='code-tag'>employees</span>"]
  },
  {
    id: "87",
    mainStem: "Experts are now able to forecast weather",
    mainStemCn: "（专家们现在能够预测天气）",
    details: "over much longer periods.",
    detailsCn: "（在更长的时期内。）",
    fullEnglish: "Experts are now able to forecast weather over much longer periods.",
    fullTranslation: "专家们现在能够预测更长期的天气。",
    points: ["<span class='code-tag'>forecast</span>（预测）", "<span class='code-tag'>periods</span>（时期复数）"]
  },
  {
    id: "88",
    mainStem: "One of the election promises is to",
    mainStemCn: "（选举承诺之一是）",
    details: "decrease income taxes.",
    detailsCn: "（减少所得税。）",
    fullEnglish: "One of the election promises is to decrease income taxes.",
    fullTranslation: "选举的承诺之一是减少所得税。",
    points: ["主语核心词是 One，系动词用 <span class='code-tag'>is</span>", "<span class='code-tag'>income taxes</span>"]
  },
  {
    id: "89",
    mainStem: "Our courses help improve critical thinking",
    mainStemCn: "（我们的课程有助于提高批判性思维）",
    details: "and independent learning skills.",
    detailsCn: "（和独立学习的技能。）",
    fullEnglish: "Our courses help improve critical thinking and independent learning skills.",
    fullTranslation: "我们的课程有助于提高批判性思维和独立学习能力。",
    points: ["<span class='code-tag'>critical thinking</span>", "<span class='code-tag'>independent</span>（独立的）"]
  },
  {
    id: "90",
    mainStem: "Students are encouraged to monitor their studies",
    mainStemCn: "（学生被鼓励去监督他们自己的学习）",
    details: "by themselves.",
    detailsCn: "（靠他们自己。）",
    fullEnglish: "Students are encouraged to monitor their studies by themselves.",
    fullTranslation: "我们鼓励学生自我监督自己的学习。",
    points: ["被动语态：<span class='code-tag'>be encouraged to do</span>", "反身代词：<span class='code-tag'>by themselves</span>"]
  },
  {
    id: "91",
    mainStem: "The ability to work with fellow students",
    mainStemCn: "（与同学一起工作的能力）",
    details: "cannot be stressed enough.",
    detailsCn: "（怎么强调都不嫌过分。）",
    fullEnglish: "The ability to work with fellow students cannot be stressed enough.",
    fullTranslation: "与同学一起工作的能力是再怎么强调也不为过的。",
    points: ["<span class='code-tag'>fellow students</span>（同学）", "句型：<span class='code-tag'>cannot be stressed enough</span>"]
  },
  {
    id: "92",
    mainStem: "We have a lecture in the morning",
    mainStemCn: "（我们今天早上有一堂讲座）",
    details: "on Thursday.",
    detailsCn: "（在周四。）",
    fullEnglish: "We have a lecture in the morning on Thursday.",
    fullTranslation: "我们星期四上午有一节课。",
    points: ["星期大写：<span class='code-tag'>Thursday</span>"]
  },
  {
    id: "93",
    mainStem: "The department has a higher-than-normal proportion",
    mainStemCn: "（该系拥有高于正常水平的比例）",
    details: "of postgraduate students.",
    detailsCn: "（的研究生。）",
    fullEnglish: "The department has a higher-than-normal proportion of postgraduate students.",
    fullTranslation: "这个学院的研究生比例高于正常水平。",
    points: ["合成词带连字符：<span class='code-tag'>higher-than-normal</span>", "<span class='code-tag'>postgraduate</span>"]
  },
  {
    id: "94",
    mainStem: "The lecture tomorrow will discuss the educational policy",
    mainStemCn: "（明天的讲座将讨论教育政策）",
    details: "of the United States.",
    detailsCn: "（美国的。）",
    fullEnglish: "The lecture tomorrow will discuss the educational policy of the United States.",
    fullTranslation: "明天的讲座将讨论美国的教育政策。",
    points: ["专有名词大写：<span class='code-tag'>the United States</span>"]
  },
  {
    id: "95",
    mainStem: "Protective clothing must always be worn",
    mainStemCn: "（防护服必须一直被穿戴）",
    details: "in the laboratory.",
    detailsCn: "（在实验室里。）",
    fullEnglish: "Protective clothing must always be worn in the laboratory.",
    fullTranslation: "在实验室里必须一直穿着防护服。",
    points: ["<span class='code-tag'>Protective clothing</span>（防护服）", "<span class='code-tag'>worn</span>（wear 的过去分词）"]
  },
  {
    id: "96",
    mainStem: "Make sure you choose a course that provides",
    mainStemCn: "（确保你选择了一门能提供...的课程）",
    details: "great career opportunities.",
    detailsCn: "（好的职业机会。）",
    fullEnglish: "Make sure you choose a course that provides great career opportunities.",
    fullTranslation: "确保你选择的课程能提供很好的就业机会。",
    points: ["定语从句单三：<span class='code-tag'>provides</span>", "<span class='code-tag'>opportunities</span>"]
  },
  {
    id: "97",
    mainStem: "Social media is criticized for causing",
    mainStemCn: "（社交媒体因导致...而受到批评）",
    details: "internet addiction.",
    detailsCn: "网络成瘾。）",
    fullEnglish: "Social media is criticized for causing internet addiction.",
    fullTranslation: "人们批评社交媒体会导致网瘾。",
    points: ["短语：<span class='code-tag'>be criticized for doing sth</span>", "<span class='code-tag'>addiction</span>"]
  },
  {
    id: "98",
    mainStem: "Sugar is a compound including carbon,",
    mainStemCn: "（糖是一种化合物，包括碳、）",
    details: "oxygen, and hydrogen atoms.",
    detailsCn: "氧和氢原子。）",
    fullEnglish: "Sugar is a compound including carbon, oxygen, and hydrogen atoms.",
    fullTranslation: "糖是一种包括碳、氧和氢原子的化合物。",
    points: ["化学词汇：<span class='code-tag'>carbon</span> / <span class='code-tag'>oxygen</span> / <span class='code-tag'>hydrogen</span>", "<span class='code-tag'>atoms</span>"]
  },
  {
    id: "99",
    mainStem: "Food containing ample calories provides",
    mainStemCn: "（含有丰富热量的食物提供了）",
    details: "little or no nutritional value.",
    detailsCn: "很少或没有营养价值。）",
    fullEnglish: "Food containing ample calories provides little or no nutritional value.",
    fullTranslation: "含有过多热量的食物几乎没有提供营养价值。",
    points: ["注意和第76题对比。这里用分词短语作后置定语：<span class='code-tag'>containing ample calories</span>"]
  },
  {
    id: "100",
    mainStem: "Dealing with the growing population is a challenge",
    mainStemCn: "（应对不断增长的人口是一个挑战）",
    details: "for many governments.",
    detailsCn: "（对许多政府而言。）",
    fullEnglish: "Dealing with the growing population is a challenge for many governments.",
    fullTranslation: "处理人口增长对许多政府来说都是一项挑战。",
    points: ["短语动名词作主语：<span class='code-tag'>Dealing with</span>", "<span class='code-tag'>governments</span>"]
  },
  {
    id: "101",
    mainStem: "Photography can be very useful to",
    mainStemCn: "（摄影学可以是非常有用的对于）",
    details: "geographical research.",
    detailsCn: "（地理研究。）",
    fullEnglish: "Photography can be very useful to geographical research.",
    fullTranslation: "摄影对地理研究很有用。",
    points: ["<span class='code-tag'>Photography</span>", "<span class='code-tag'>geographical</span>（地理学的）"]
  },
  {
    id: "102",
    mainStem: "A mixture is defined as a compound of",
    mainStemCn: "（混合物被定义为...的化合物）",
    details: "chemically separate parts.",
    detailsCn: "（化学上分离的部分。）",
    fullEnglish: "A mixture is defined as a compound of chemically separate parts.",
    fullTranslation: "混合物被定义为化学上分离部分的组合。",
    points: ["固定短语：<span class='code-tag'>be defined as</span>", "<span class='code-tag'>separate</span>"]
  },
  {
    id: "103",
    mainStem: "New materials and techniques are changing the style",
    mainStemCn: "（新材料和新技术正在改变...的风格）",
    details: "of modern architecture.",
    detailsCn: "（现代建筑的。）",
    fullEnglish: "New materials and techniques are changing the style of modern architecture.",
    fullTranslation: "新材料和新技术正在改变现代建筑的风格。",
    points: ["复数主语并列，现在进行时：<span class='code-tag'>are changing</span>", "<span class='code-tag'>architecture</span>"]
  },
  {
    id: "104",
    mainStem: "Honey can be used as food",
    mainStemCn: "（蜂蜜可以用作食物）",
    details: "and a health product.",
    detailsCn: "（和健康保健品。）",
    fullEnglish: "Honey can be used as food and a health product.",
    fullTranslation: "蜂蜜既可以作为食品，也可以作为保健品。",
    points: ["短语：<span class='code-tag'>be used as</span>", "<span class='code-tag'>Honey</span>不可数"]
  },
  {
    id: "105",
    mainStem: "Farmers need to adapt to the changes",
    mainStemCn: "（农民们需要适应这些变化）",
    details: "in climate.",
    detailsCn: "（在气候中的。）",
    fullEnglish: "Farmers need to adapt to the changes in climate.",
    fullTranslation: "农民需要适应气候的变化。",
    points: ["短语：<span class='code-tag'>adapt to</span>", "<span class='code-tag'>changes</span>（变化复数）"]
  }
];

// ==========================================
// 3. 拓展数组B：剩余 50 道题 (ID: 106 - 155)
// ==========================================
const extendDataB = [
  {
    id: "106",
    mainStem: "Many university lectures can now be viewed",
    mainStemCn: "（许多大学讲座现在可以被观看）",
    details: "on the internet.",
    detailsCn: "（在互联网上。）",
    fullEnglish: "Many university lectures can now be viewed on the internet.",
    fullTranslation: "现在可以在网上观看许多大学的讲座。",
    points: ["介词固定搭配：<span class='code-tag'>on the internet</span>"]
  },
  {
    id: "107",
    mainStem: "An effective business manager is always open",
    mainStemCn: "（一位高效的商务经理总是持开放态度）",
    details: "to new ideas.",
    detailsCn: "（对于新想法。）",
    fullEnglish: "An effective business manager is always open to new ideas.",
    fullTranslation: "一个有能力的业务经理总是会接受新想法。",
    points: ["固定搭配：<span class='code-tag'>be open to sth</span>", "<span class='code-tag'>ideas</span>（想法复数）"]
  },
  {
    id: "108",
    mainStem: "Philosophy uses logic and reasons to analyze",
    mainStemCn: "（哲学利用逻辑和理由来分析）",
    details: "human experience.",
    detailsCn: "（人类经验。）",
    fullEnglish: "Philosophy uses logic and reasons to analyze human experience.",
    fullTranslation: "哲学用逻辑和理由来分析人类的经验。",
    points: ["<span class='code-tag'>Philosophy</span>单三形式 uses", "<span class='code-tag'>analyze</span>", "<span class='code-tag'>experience</span>"]
  },
  {
    id: "109",
    mainStem: "The digital camera has some advantages",
    mainStemCn: "（数码相机具有一些优势）",
    details: "over traditional film.",
    detailsCn: "（相比于传统胶片。）",
    fullEnglish: "The digital camera has some advantages over traditional film.",
    fullTranslation: "数码相机比传统胶卷有一些优势。",
    points: ["固定句型：<span class='code-tag'>have advantages over ...</span>"]
  },
  {
    id: "110",
    mainStem: "Air pollution is a serious problem",
    mainStemCn: "（空气污染是一个严重的问题）",
    details: "all over the world.",
    detailsCn: "（全世界。）",
    fullEnglish: "Air pollution is a serious problem all over the world.",
    fullTranslation: "空气污染在全世界都是个严重的问题。",
    points: ["短语：<span class='code-tag'>all over the world</span>"]
  },
  {
    id: "111",
    mainStem: "The commissioner will apportion the funds",
    mainStemCn: "（专员将分配这些资金）",
    details: "among all the authorities.",
    detailsCn: "（在所有的官方机构/当局之间。）",
    fullEnglish: "The commissioner will apportion the funds among all the authorities.",
    fullTranslation: "专员将把这笔资金分配给所有当局。",
    points: ["<span class='code-tag'>commissioner</span>（专员）", "<span class='code-tag'>apportion</span>（分配）", "<span class='code-tag'>authorities</span>（当局复数）"]
  },
  {
    id: "112",
    mainStem: "Many diseases that were once serious have now",
    mainStemCn: "（许多曾经严重的疾病现在已经）",
    details: "been eradicated.",
    detailsCn: "（被根除了。）",
    fullEnglish: "Many diseases that were once serious have now been eradicated.",
    fullTranslation: "许多曾经严重的疾病现在已被根除。",
    points: ["主语是复数 diseases，主句谓语用 <span class='code-tag'>have now been eradicated</span>"]
  },
  {
    id: "113",
    mainStem: "He wrote poetry and plays as well as",
    mainStemCn: "（除了...之外，他还写诗和剧本）",
    details: "scientific papers.",
    detailsCn: "（科学论文。）",
    fullEnglish: "He wrote poetry and plays as well as scientific papers.",
    fullTranslation: "他不仅写科学论文，还写诗歌和戏剧。",
    points: ["<span class='code-tag'>poetry</span>（不可数）", "<span class='code-tag'>plays</span>（剧本复数）", "短语：<span class='code-tag'>as well as</span>"]
  },
  {
    id: "114",
    mainStem: "Students are encouraged to think carefully about",
    mainStemCn: "（学生们被鼓励去仔细思考）",
    details: "their accommodation needs.",
    detailsCn: "（他们的住宿需求。）",
    fullEnglish: "Students are encouraged to think carefully about their accommodation needs.",
    fullTranslation: "我们鼓励学生仔细考虑他们的住宿需求。",
    points: ["<span class='code-tag'>carefully</span>", "<span class='code-tag'>accommodation</span>（住宿，<b>c</b>双写，<b>m</b>双写，重点词！）"]
  },
  {
    id: "115",
    mainStem: "Optional tutorials are offered in",
    mainStemCn: "（选修辅导课被提供在）",
    details: "the final week of the term.",
    detailsCn: "（本学期的最后一周。）",
    fullEnglish: "Optional tutorials are offered in the final week of the term.",
    fullTranslation: "选修辅导课在学期的最后一周提供。",
    points: ["<span class='code-tag'>Optional</span>（选修的）", "<span class='code-tag'>tutorials</span>（辅导课复数）"]
  },
  {
    id: "116",
    mainStem: "Banks charge interest on the money",
    mainStemCn: "（银行对这些钱收取利息）",
    details: "they lend to customers.",
    detailsCn: "（他们借给客户的。）",
    fullEnglish: "Banks charge interest on the money they lend to customers.",
    fullTranslation: "银行从借给客户的钱中收取利息。",
    points: ["搭配：<span class='code-tag'>charge interest on ...</span>", "<span class='code-tag'>lend</span>（借出）", "<span class='code-tag'>customers</span>（客户复数）"]
  },
  {
    id: "117",
    mainStem: "There is a pharmacy on campus near",
    mainStemCn: "（校园里有一家药房，靠近）",
    details: "the bookstore.",
    detailsCn: "（书店。）",
    fullEnglish: "There is a pharmacy on campus near the bookstore.",
    fullTranslation: "校园书店附近有个药房。",
    points: ["<span class='code-tag'>pharmacy</span>（药房）", "介词短语：<span class='code-tag'>on campus</span>"]
  },
  {
    id: "118",
    mainStem: "Students will focus on reporting news on changing",
    mainStemCn: "（学生将专注于报道关于正在改变的...的新闻）",
    details: "the media world.",
    detailsCn: "（媒体世界。）",
    fullEnglish: "Students will focus on reporting news on changing the media world.",
    fullTranslation: "学生将专注于报道改变媒体世界的新闻。",
    points: ["短语：<span class='code-tag'>focus on doing sth</span>", "<span class='code-tag'>reporting news</span>"]
  },
  {
    id: "119",
    mainStem: "The other book isn't thorough, but",
    mainStemCn: "（另外一本书不够详尽，但是）",
    details: "it's more insightful.",
    detailsCn: "（它更有见地。）",
    fullEnglish: "The other book isn't thorough, but it's more insightful.",
    fullTranslation: "另一本书不够详尽，但更有见地。",
    points: ["<span class='code-tag'>thorough</span>（详尽的）", "<span class='code-tag'>insightful</span>（有见解的）"]
  },
  {
    id: "120",
    mainStem: "Studies showed there is a positive correlation between",
    mainStemCn: "（研究表明...之间存在正相关关系）",
    details: "the two variables.",
    detailsCn: "（这两个变量。）",
    fullEnglish: "Studies showed there is a positive correlation between the two variables.",
    fullTranslation: "研究表明，这两个变量之间存在正相关关系。",
    points: ["<span class='code-tag'>correlation</span>（相关性）", "<span class='code-tag'>variables</span>（变量复数）"]
  },
  {
    id: "121",
    mainStem: "Building trust is not something that can be",
    mainStemCn: "（建立信任并不是一件可以...的事情）",
    details: "achieved overnight.",
    detailsCn: "（一夜之间实现的。）",
    fullEnglish: "Building trust is not something that can be achieved overnight.",
    fullTranslation: "建立信任不是一朝一夕就能实现的。",
    points: ["动名词主语：<span class='code-tag'>Building trust</span>", "<span class='code-tag'>overnight</span>（一夜之间）"]
  },
  {
    id: "122",
    mainStem: "The dance department stages elaborated performances",
    mainStemCn: "（舞蹈系组织精心设计的表演）",
    details: "each semester.",
    detailsCn: "（每个学期。）",
    fullEnglish: "The dance department stages elaborated performances each semester.",
    fullTranslation: "舞蹈系每学期都有精心设计的表演。",
    points: ["这里的 <span class='code-tag'>stages</span> 是动词“组织”", "<span class='code-tag'>elaborated</span>（精心设计的）", "<span class='code-tag'>performances</span>"]
  },
  {
    id: "123",
    mainStem: "New media have transcended traditional",
    mainStemCn: "（新媒体已经超越了传统的）",
    details: "national boundaries.",
    detailsCn: "（国家边界。）",
    fullEnglish: "New media have transcended traditional national boundaries.",
    fullTranslation: "新媒体超越了传统的国界。",
    points: ["<span class='code-tag'>media</span> 在这里作为复数名词，搭配 <span class='code-tag'>have</span>", "<span class='code-tag'>transcended</span>（超越）", "<span class='code-tag'>boundaries</span>（边界复数）"]
  },
  {
    id: "124",
    mainStem: "While some people regard it as reforming zeal,",
    mainStemCn: "（尽管有些人认为这是改革的热情，）",
    details: "others regard it as recklessness.",
    detailsCn: "（另一些人则认为这是鲁莽。）",
    fullEnglish: "While some people regard it as reforming zeal, others regard it as recklessness.",
    fullTranslation: "有人认为这是改革的热情，也有人认为这是鲁莽。",
    points: ["短语：<span class='code-tag'>regard sb/sth as ...</span>", "<span class='code-tag'>zeal</span>（热情）", "<span class='code-tag'>recklessness</span>（鲁莽）"]
  },
  {
    id: "125",
    mainStem: "There is a great deal of debate",
    mainStemCn: "（关于...有很多争论）",
    details: "on that topic.",
    detailsCn: "（那个话题。）",
    fullEnglish: "There is a great deal of debate on that topic.",
    fullTranslation: "关于那个话题有很多争议。",
    points: ["短语：<span class='code-tag'>a great deal of</span>（修饰不可数名词 debate）"]
  },
  {
    id: "126",
    mainStem: "The student shop sells a range",
    mainStemCn: "（学生商店出售一系列）",
    details: "of stationery.",
    detailsCn: "（文具。）",
    fullEnglish: "The student shop sells a range of stationery.",
    fullTranslation: "学生商店出售各种文具。",
    points: ["<span class='code-tag'>stationery</span>（文具，注意结尾是 <b>-ery</b>）"]
  },
  {
    id: "127",
    mainStem: "Currently the growth of the economy",
    mainStemCn: "（目前经济的增长是）",
    details: "is unpredictable.",
    detailsCn: "（不可预测的。）",
    fullEnglish: "Currently the growth of the economy is unpredictable.",
    fullTranslation: "目前的经济增长是不可预测的。",
    points: ["<span class='code-tag'>Currently</span>", "<span class='code-tag'>unpredictable</span>（不可预测的）"]
  },
  {
    id: "128",
    mainStem: "When the root system of a plant fails,",
    mainStemCn: "（当植物的根系衰竭时，）",
    details: "foliage suffers.",
    detailsCn: "（叶子就会受损。）",
    fullEnglish: "When the root system of a plant fails, foliage suffers.",
    fullTranslation: "当植物的根系衰竭时，叶子也会受损。",
    points: ["<span class='code-tag'>root system</span>（根系）", "<span class='code-tag'>foliage</span>（植物叶子）", "<span class='code-tag'>suffers</span>（单三）"]
  },
  {
    id: "129",
    mainStem: "The course includes a combination of pure",
    mainStemCn: "（这门课程包括纯数学的结合）",
    details: "and applied mathematics.",
    detailsCn: "（和应用数学。）",
    fullEnglish: "The course includes a combination of pure and applied mathematics.",
    fullTranslation: "这门课程包括纯数学和应用数学的结合。",
    points: ["<span class='code-tag'>pure mathematics</span>", "<span class='code-tag'>applied mathematics</span>"]
  },
  {
    id: "130",
    mainStem: "Students must wear protective clothing that is provided",
    mainStemCn: "（学生必须穿着提供的防护服）",
    details: "in the medical laboratory.",
    detailsCn: "（在医学实验室中。）",
    fullEnglish: "Students must wear protective clothing that is provided in the medical laboratory.",
    fullTranslation: "学生必须穿着医学实验室提供的防护服。",
    points: ["对比第95题，这里多了一个定语从句 <span class='code-tag'>that is provided</span>"]
  },
  {
    id: "131",
    mainStem: "Population has a sharp rise in the",
    mainStemCn: "（人口出现急剧上升在）",
    details: "recent twenty years.",
    detailsCn: "（最近二十年。）",
    fullEnglish: "Population has a sharp rise in the recent twenty years.",
    fullTranslation: "近二十年来人口急剧增加。",
    points: ["<span class='code-tag'>sharp rise</span>（急剧上升）", "<span class='code-tag'>twenty</span>"]
  },
  {
    id: "132",
    mainStem: "The museum is closed on the third Monday",
    mainStemCn: "（博物馆关闭在第三个星期一）",
    details: "of every month.",
    detailsCn: "（每个月的。）",
    fullEnglish: "The museum is closed on the third Monday of every month.",
    fullTranslation: "博物馆每个月的第三个星期一闭馆。",
    points: ["时间限定：<span class='code-tag'>on the third Monday of every month</span>"]
  },
  {
    id: "133",
    mainStem: "You must be able to work",
    mainStemCn: "（你必须能够工作）",
    details: "in a team.",
    detailsCn: "（在一个团队中。）",
    fullEnglish: "You must be able to work in a team.",
    fullTranslation: "你必须能够在团队中工作。",
    points: ["固定表述：<span class='code-tag'>work in a team</span>"]
  },
  {
    id: "134",
    mainStem: "You can use your laptops",
    mainStemCn: "（你们可以使用你们的笔记本电脑）",
    details: "in the lecture.",
    detailsCn: "（在讲座中。）",
    fullEnglish: "You can use your laptops in the lecture.",
    fullTranslation: "你们可以在课堂上使用笔记本电脑。",
    points: ["<span class='code-tag'>laptops</span>（笔记本电脑复数）"]
  },
  {
    id: "135",
    mainStem: "It is important to plan your study",
    mainStemCn: "（规划你的学习是很重要的）",
    details: "time carefully.",
    detailsCn: "（时间仔细地。）",
    fullEnglish: "It is important to plan your study time carefully.",
    fullTranslation: "认真规划学习时间是很重要的。",
    points: ["形式主语从句", "<span class='code-tag'>carefully</span>修饰动词 plan"]
  },
  {
    id: "136",
    mainStem: "There was a prize for the best",
    mainStemCn: "（有一个奖项针对最好的）",
    details: "student presentation.",
    detailsCn: "（学生演讲。）",
    fullEnglish: "There was a prize for the best student presentation.",
    fullTranslation: "有一个最佳学生演讲奖。",
    points: ["一般过去时：<span class='code-tag'>There was</span>", "<span class='code-tag'>presentation</span>"]
  },
  {
    id: "137",
    mainStem: "The library will be closed for staff training",
    mainStemCn: "（图书馆将因员工培训而关闭）",
    details: "tomorrow morning.",
    detailsCn: "（明天上午。）",
    fullEnglish: "The library will be closed for staff training tomorrow morning.",
    fullTranslation: "图书馆将于明天上午闭馆进行员工培训。",
    points: ["<span class='code-tag'>staff training</span>（员工培训）"]
  },
  {
    id: "138",
    mainStem: "When attending a job interview,",
    mainStemCn: "（当参加求职面试时，）",
    details: "punctuality is the key.",
    detailsCn: "（准时是关键。）",
    fullEnglish: "When attending a job interview, punctuality is the key.",
    fullTranslation: "参加面试时，准时是关键。",
    points: ["<span class='code-tag'>job interview</span>", "<span class='code-tag'>punctuality</span>（准时/守时，核心词）"]
  },
  {
    id: "139",
    mainStem: "The studies showed the Hong Kong people are",
    mainStemCn: "（研究显示香港人是）",
    details: "the most active in Asia.",
    detailsCn: "（亚洲最活跃的。）",
    fullEnglish: "The studies showed the Hong Kong people are the most active in Asia.",
    fullTranslation: "研究显示，香港人是亚洲最活跃的。",
    points: ["大写专有名词：<span class='code-tag'>Hong Kong</span> / <span class='code-tag'>Asia</span>"]
  },
  {
    id: "140",
    mainStem: "Mathematics provides a foundation for understanding",
    mainStemCn: "（数学为理解...提供了基础）",
    details: "and analyzing data.",
    detailsCn: "（和分析数据。）",
    fullEnglish: "Mathematics provides a foundation for understanding and analyzing data.",
    fullTranslation: "数学为理解和分析数据提供了基础。",
    points: ["<span class='code-tag'>Mathematics</span>按单数处理，用 <span class='code-tag'>provides</span>", "两个并列：<span class='code-tag'>understanding and analyzing</span>"]
  },
  {
    id: "141",
    mainStem: "The office hours will change",
    mainStemCn: "（办公时间将会改变）",
    details: "next term.",
    detailsCn: "（下学期。）",
    fullEnglish: "The office hours will change next term.",
    fullTranslation: "下学期办公时间将有所改变。",
    points: ["固定短语：<span class='code-tag'>office hours</span>"]
  },
  {
    id: "142",
    mainStem: "Football is played throughout all years",
    mainStemCn: "（足球被全年踢在）",
    details: "at the university.",
    detailsCn: "（大学里。）",
    fullEnglish: "Football is played throughout all years at the university.",
    fullTranslation: "这所大学一年四季都踢足球。",
    points: ["<span class='code-tag'>throughout</span>（贯穿/遍及）"]
  },
  {
    id: "143",
    mainStem: "We are looking for new ways",
    mainStemCn: "（我们正在寻找新的方法）",
    details: "to engage learners.",
    detailsCn: "（来吸引学习者。）",
    fullEnglish: "We are looking for new ways to engage learners.",
    fullTranslation: "我们正在寻找吸引学习者的新方法。",
    points: ["<span class='code-tag'>engage</span>（吸引/使参与）", "<span class='code-tag'>learners</span>"]
  },
  {
    id: "144",
    mainStem: "Take the first step by applying for a university",
    mainStemCn: "（迈出第一步，通过申请大学）",
    details: "scholarship now.",
    detailsCn: "（奖学金现在。）",
    fullEnglish: "Take the first step by applying for a university scholarship now.",
    fullTranslation: "现在就开始申请大学奖学金吧。",
    points: ["短语：<span class='code-tag'>apply for</span>", "<span class='code-tag'>scholarship</span>"]
  },
  {
    id: "145",
    mainStem: "There is probably life in the other planets",
    mainStemCn: "（其他行星上可能存在生命）",
    details: "in the universe.",
    detailsCn: "（在宇宙中。）",
    fullEnglish: "There is probably life in the other planets in the universe.",
    fullTranslation: "宇宙中的其他行星上可能有生命。",
    points: ["<span class='code-tag'>probably</span>", "<span class='code-tag'>planets</span>", "<span class='code-tag'>universe</span>"]
  },
  {
    id: "146",
    mainStem: "Without doubt, this theory has",
    mainStemCn: "（毫无疑问，这个理论有）",
    details: "a number of limitations.",
    detailsCn: "（一些局限性。）",
    fullEnglish: "Without doubt, this theory has a number of limitations.",
    fullTranslation: "毫无疑问，这个理论有一些局限性。",
    points: ["固定表达：<span class='code-tag'>Without doubt</span>", "<span class='code-tag'>limitations</span>"]
  },
  {
    id: "147",
    mainStem: "Unemployment rate has fallen to its lowest",
    mainStemCn: "（失业率已降至最低）",
    details: "level in years.",
    detailsCn: "（多年来的水平。）",
    fullEnglish: "Unemployment rate has fallen to its lowest level in years.",
    fullTranslation: "失业率已降至多年来的最低水平。",
    points: ["<span class='code-tag'>Unemployment rate</span>", "现在完成时：<span class='code-tag'>has fallen</span>"]
  },
  {
    id: "148",
    mainStem: "Library plays an important role",
    mainStemCn: "（图书馆发挥着重要作用）",
    details: "in students' lives.",
    detailsCn: "（在学生的生活中。）",
    fullEnglish: "Library plays an important role in students' lives.",
    fullTranslation: "图书馆在学生的生活中扮演着重要的角色。",
    points: ["短语：<span class='code-tag'>play an important role in</span>", "复数所有格：<span class='code-tag'>students' lives</span>"]
  },
  {
    id: "149",
    mainStem: "Chemical reactions occur when substances",
    mainStemCn: "（当物质...时，会发生化学反应）",
    details: "combine or change.",
    detailsCn: "（结合或改变。）",
    fullEnglish: "Chemical reactions occur when substances combine or change.",
    fullTranslation: "当物质结合或变化时就会发生化学反应。",
    points: ["主语复数 reactions 对应动词原形 <span class='code-tag'>occur</span>", "<span class='code-tag'>substances</span>"]
  },
  {
    id: "150",
    mainStem: "Course work gives students the chances",
    mainStemCn: "（课程作业给予学生机会）",
    details: "to thoroughly explore the subject.",
    detailsCn: "（来彻底探索这个学科。）",
    fullEnglish: "Course work gives students the chances to thoroughly explore the subject.",
    fullTranslation: "课程作业让学生有机会深入探索这门学科。",
    points: ["<span class='code-tag'>Course work</span>", "<span class='code-tag'>thoroughly</span>（彻底地）", "<span class='code-tag'>explore</span>"]
  },
  {
    id: "151",
    mainStem: "It is quite clear that our facial expressions",
    mainStemCn: "（非常明显的是，我们的面部表情）",
    details: "are different across the world.",
    detailsCn: "（在全世界是不同的。）",
    fullEnglish: "It is quite clear that our facial expressions are different across the world.",
    fullTranslation: "很明显，我们的面部表现在全球范围内存在差异。",
    points: ["<span class='code-tag'>facial expressions</span>用复数，所以用 are"]
  },
  {
    id: "152",
    mainStem: "All experimental procedures are outlined",
    mainStemCn: "（所有的实验步骤都已被概述）",
    details: "in the laboratory manual.",
    detailsCn: "（在实验室手册中。）",
    fullEnglish: "All experimental procedures are outlined in the laboratory manual.",
    fullTranslation: "所有实验步骤都已在实验室手册中列出。",
    points: ["<span class='code-tag'>experimental procedures</span>", "<span class='code-tag'>outlined</span>", "<span class='code-tag'>manual</span>"]
  },
  {
    id: "153",
    mainStem: "You need to make sure that all your essays",
    mainStemCn: "（你需要确保你所有的论文）",
    details: "are handed in on time.",
    detailsCn: "（都按时上交。）",
    fullEnglish: "You need to make sure that all your essays are handed in on time.",
    fullTranslation: "你必须确保你的所有论文都能按时交上。",
    points: ["短语：<span class='code-tag'>hand in</span>", "固定搭配：<span class='code-tag'>on time</span>"]
  },
  {
    id: "154",
    mainStem: "A university degree is required for entry",
    mainStemCn: "（进入...需要大学学位）",
    details: "into various professions.",
    detailsCn: "（各种职业。）",
    fullEnglish: "A university degree is required for entry into various professions.",
    fullTranslation: "要进入各类职业领域，通常需要拥有大学学历。",
    points: ["被动语态：<span class='code-tag'>is required for</span>", "<span class='code-tag'>professions</span>"]
  },
  {
    id: "155",
    mainStem: "You can find the complex form",
    mainStemCn: "（你可以找到那个复杂的表格）",
    details: "on the website.",
    detailsCn: "（在网站上。）",
    fullEnglish: "You can find the complex form on the website.",
    fullTranslation: "你可以在网站上找到那个复杂的表格。",
    points: ["注意和前面的题目作区分：<span class='code-tag'>complex form</span>"]
  }
];

// ==========================================
// 4. 动态拼接合并成最终的 wfdData 155 题完整数组
// ==========================================
const wfdData = [...baseData, ...extendDataA, ...extendDataB];


// ==========================================
// 5. 核心页面交互逻辑 (保持你原本的逻辑)
// ==========================================
let currentIndex = 0;
let isDetailShown = false;

function showQuestion(index) {
  const q = wfdData[index];
  document.getElementById("q-id").innerText = `题目 ID: ${q.id} / ${wfdData.length}`;
  document.getElementById("main-stem").innerText = q.mainStem;
  document.getElementById("main-stem-cn").innerText = q.mainStemCn;
  
  // 隐藏后半句及解析
  document.getElementById("details-container").style.display = "none";
  document.getElementById("analysis-container").style.display = "none";
  document.getElementById("toggle-btn").innerText = "显示后半句及解析";
  isDetailShown = false;
  
  // 填充后半句和解析的内容
  document.getElementById("details").innerText = q.details;
  document.getElementById("details-cn").innerText = q.detailsCn;
  document.getElementById("full-english").innerText = q.fullEnglish;
  document.getElementById("full-translation").innerText = q.fullTranslation;
  
  const pointsList = document.getElementById("points-list");
  pointsList.innerHTML = "";
  q.points.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = p;
    pointsList.appendChild(li);
  });
}

// 随机抽题
function nextQuestion() {
  currentIndex = Math.floor(Math.random() * wfdData.length);
  showQuestion(currentIndex);
}

// 切换半句/解析显示
function toggleDetail() {
  const detailsCont = document.getElementById("details-container");
  const analysisCont = document.getElementById("analysis-container");
  const btn = document.getElementById("toggle-btn");
  
  if (!isDetailShown) {
    detailsCont.style.display = "block";
    analysisCont.style.display = "block";
    btn.innerText = "隐藏后半句及解析";
    isDetailShown = true;
  } else {
    detailsCont.style.display = "none";
    analysisCont.style.display = "none";
    btn.innerText = "显示后半句及解析";
    isDetailShown = false;
  }
}

// 初始化绑定
window.onload = function() {
  nextQuestion();
  document.getElementById("toggle-btn").onclick = toggleDetail;
  document.getElementById("next-btn").onclick = nextQuestion;
};
