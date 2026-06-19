// =========================================================================
// 1. WFD 核心高频真题机经完整数据：图片版 155 题
// =========================================================================

const RAW_WFD_LIST = [
  { id: 1, english: "The celebrated theory is still the source of great controversy.", chinese: "这一著名的理论至今仍是巨大争议的根源。" },
  { id: 2, english: "A good architectural structure should be useful, durable and beautiful.", chinese: "一个好的建筑结构应该实用、耐用、美观。" },
  { id: 3, english: "A group meeting will be held tomorrow in the library conference room.", chinese: "明天将在图书馆会议室举行小组会议。" },
  { id: 4, english: "Educational level is found to be related to social and economic background.", chinese: "教育水平与社会和经济背景有关。" },
  { id: 5, english: "All of the assignments must be submitted in person to the faculty office.", chinese: "所有作业必须亲自提交到学院办公室/教职员工办公室。" },
  { id: 6, english: "Our view is that educational reforms have been inadequately implemented.", chinese: "我们的看法是，教育改革执行得不够充分。" },
  { id: 7, english: "An introduction is an essential element of presentation.", chinese: "简介是演讲的基本要素。" },
  { id: 8, english: "Before attending classes, you must register online or by post.", chinese: "在参加课程之前，你必须在网上或邮寄注册。" },
  { id: 9, english: "Certain scientific principles must be learned verbally or by logical deduction.", chinese: "某些科学原理必须要通过口头教学或逻辑推理来学习。" },
  { id: 10, english: "Consumer confidence has a direct influence on sales.", chinese: "消费者信心对销售有直接影响。" },
  { id: 11, english: "Daily practice can build confidence and improve skills.", chinese: "每天的练习可以建立自信，提高技能。" },
  { id: 12, english: "The economic status of the early Roman Republic will be examined.", chinese: "我们将考察早期罗马共和国的经济状况。" },
  { id: 13, english: "Human beings compete with other living things for resources and space.", chinese: "人类与其他生物竞争资源和空间。" },
  { id: 14, english: "He landed a job in a very prestigious law firm.", chinese: "他在一家非常著名的律师事务所找到了一份工作。" },
  { id: 15, english: "Important details from the argument are missing in the summary.", chinese: "摘要中缺少了论证中的重要细节。" },
  { id: 16, english: "It may not be possible to solve the problem easily.", chinese: "想要轻易解决这个问题也许是不可能的。" },
  { id: 17, english: "Listening is the key skill needed to succeed in this course.", chinese: "听力是学好这门课的关键能力。" },
  { id: 18, english: "Plants are the living things that can grow on land or in water.", chinese: "植物是能在陆地或水中生长的生物。" },
  { id: 19, english: "Please make sure you have correctly cited all the necessary materials.", chinese: "请确保你正确引用了所有必要的材料。" },
  { id: 20, english: "Remember, the prestigious election of stewardship has strict eligibility criteria.", chinese: "记住，这场有声望的管理层选举有严格的资格标准。" },
  { id: 21, english: "Students have the options to live in college residences or apartments.", chinese: "学生可以选择住在大学宿舍或公寓。" },
  { id: 22, english: "The application processes may take longer than expected.", chinese: "申请过程可能比预期的时间更长。" },
  { id: 23, english: "Rising inflation may indicate an increase in the demand for consumer products.", chinese: "通货膨胀加剧可能表明对消费品的需求增加。" },
  { id: 24, english: "The massive accumulation of data was converted into a communicable argument.", chinese: "大量的数据积累被转化为一种可用于沟通的论证形式。" },
  { id: 25, english: "The most popular courses still have a few places left.", chinese: "最受欢迎的课程仍有一些空缺席位。" },
  { id: 26, english: "Parents' talk to children tends to be simplified.", chinese: "父母对孩子的谈话往往被简化。" },
  { id: 27, english: "Education and training provide important skills for the labor force.", chinese: "教育培训为劳动力提供了重要的技能。" },
  { id: 28, english: "Those who are considering a career in marketing should attend the talk.", chinese: "那些正在考虑从事市场营销的人应该参加这次演讲。" },
  { id: 29, english: "A good academic paper should present a clear argument.", chinese: "一篇好的学术论文应该呈现一个清晰的论点。" },
  { id: 30, english: "Collaboration between departments is a feature of successful companies.", chinese: "部门间的协作是成功公司的一个特点。" },
  { id: 31, english: "Geography is generally divided into two main branches, human and physical.", chinese: "地理学通常分为两个主要的分支：人文地理和自然地理。" },
  { id: 32, english: "Essays and assignments are spread out across the academic year.", chinese: "论文和作业分散在整个学年内。" },
  { id: 33, english: "The elective course introduces engineering students to construction practices and concepts.", chinese: "选修课程向工程学生介绍了建筑实践和建筑概念。" },
  { id: 34, english: "A professor took one year off to work on her book.", chinese: "一位教授休了一年的假，专注于撰写她的书籍。" },
  { id: 35, english: "Scientists were unsure when the early men first left Africa.", chinese: "科学家们不能确定早期人类是什么时候第一次离开非洲的。" },
  { id: 36, english: "The printers automatically print on both sides of each page.", chinese: "打印机自动打印每页的两面。" },
  { id: 37, english: "There is a widely believed perception that engineering is for boys.", chinese: "人们普遍认为，工程学适合男孩。" },
  { id: 38, english: "Distance learning allows you to develop a career around your commitments.", chinese: "远程学习让你能够围绕已有的事务或安排来发展职业。" },
  { id: 39, english: "Salt is produced from seawater or extracted from the ground.", chinese: "盐是从海水中产生的或从地下提取的。" },
  { id: 40, english: "The area has a variety of underwater habitats and species.", chinese: "该地区有各种各样的水下栖息地和物种。" },
  { id: 41, english: "Your ideas are discussed and debated in seminars and tutorials.", chinese: "你的想法在研讨会和辅导课中被讨论和辩论。" },
  { id: 42, english: "Classical mechanics is sometimes considered as a branch of applied mathematics.", chinese: "经典力学有时候被认为是应用数学的一个分支。" },
  { id: 43, english: "Marine environments have been destroyed through pollution and unsustainable development.", chinese: "由于污染和不可持续的发展，海洋环境遭到破坏。" },
  { id: 44, english: "Designers need to keep up with the social trends.", chinese: "设计师需要跟上社会潮流。" },
  { id: 45, english: "A new collection of articles has just been published.", chinese: "一本新的文集刚刚出版。" },
  { id: 46, english: "A good abstract highlights the key points of your paper.", chinese: "一篇好的摘要能突出你的论文的重点。" },
  { id: 47, english: "New media journalism is an exciting area of study.", chinese: "新媒体新闻是一个令人兴奋的研究领域。" },
  { id: 48, english: "Rising sea temperatures are a sign of climate change.", chinese: "海水温度上升是气候变化的征兆。" },
  { id: 49, english: "Students should take the training course to use the gym.", chinese: "学生应该参加使用体育馆的培训课程。" },
  { id: 50, english: "More research is needed before any definitive conclusion can be drawn.", chinese: "在得出任何明确的结论之前，还需要进行更多的研究。" },
  { id: 51, english: "The north campus car park could be closed on Sunday.", chinese: "北校区的停车场可能在周日关闭。" },
  { id: 52, english: "Participating in the class is the center of the course.", chinese: "课堂参与是课程的核心。" },
  { id: 53, english: "Much of this research is carried out in the laboratory.", chinese: "这项研究大部分是在实验室里进行的。" },
  { id: 54, english: "The college operates a system of continuous assessments.", chinese: "这所学院实行持续评估制度。" },
  { id: 55, english: "The rising temperature is changing the wildlife population.", chinese: "气温上升正在改变野生动物的数量。" },
  { id: 56, english: "The director of the gallery was grateful for the anonymous donation.", chinese: "美术馆馆长对匿名捐赠表示感谢。" },
  { id: 57, english: "We encourage students to complete their applications before the deadline.", chinese: "我们鼓励学生在截止日期前完成申请。" },
  { id: 58, english: "Strangely, people are simultaneously impressed by and skeptical about statistics.", chinese: "奇怪的是，人们对“统计数据”既感到印象深刻又持怀疑态度。" },
  { id: 59, english: "Social psychology is concerned with the understanding of human behaviors.", chinese: "社会心理学关注的是对人类行为的理解。" },
  { id: 60, english: "Having enough sleep has many positive benefits.", chinese: "充足的睡眠有许多积极的益处。" },
  { id: 61, english: "The content is to define the combination of math and philosophy.", chinese: "其内容旨在阐述数学与哲学的结合方式。" },
  { id: 62, english: "The rise in sea level indicates climate change.", chinese: "海平面的上升表明了气候在发生变化。" },
  { id: 63, english: "The university library cafe is on the third floor.", chinese: "大学图书馆的咖啡厅在三楼。" },
  { id: 64, english: "The university auditorium is around the corner.", chinese: "大学礼堂就在转角处。" },
  { id: 65, english: "The professor discussed the article yesterday in this class.", chinese: "这位教授昨天在这堂课上讲解了这篇文章。" },
  { id: 66, english: "Affordable housing is an important issue for all members of society.", chinese: "经济适用房对社会所有成员来说都是一个重要问题。" },
  { id: 67, english: "All industries are a system of inputs, processes, outputs and feedback.", chinese: "所有行业都是一个输入、处理、输出和反馈的系统。" },
  { id: 68, english: "All of your assignments are due by tomorrow.", chinese: "你明天应该交所有的作业。" },
  { id: 69, english: "Most scientists believe that climate change threatens the lives on earth.", chinese: "大多数科学家认为气候变化威胁地球上的生命。" },
  { id: 70, english: "Despite their differences, all forms of life share certain characteristics.", chinese: "尽管存在差异，但所有形式的生命都有某些共同的特征。" },
  { id: 71, english: "The academic strength of the early Roman Republic will be examined.", chinese: "我们将考察早期罗马共和国的学术实力。" },
  { id: 72, english: "Organizational failure is considered from various perspectives in academic literature.", chinese: "在学术文献中，人们从不同的角度来思考组织层面的失败。" },
  { id: 73, english: "Our professor is hosting the business development conference.", chinese: "我们的教授正在主持商业发展会议。" },
  { id: 74, english: "Preparation is important to avoid mishaps in the lab.", chinese: "为了避免在实验室发生意外，准备工作是很重要的。" },
  { id: 75, english: "Statistical results should be expressed in different ways depending on the circumstances.", chinese: "统计结果应根据情况以不同的方式表示。" },
  { id: 76, english: "Food that contains antibiotics provides little or no nutritional value.", chinese: "含有抗生素的食物几乎没有营养价值。" },
  { id: 77, english: "The business policy seminar includes an internship with a local firm.", chinese: "商业政策研讨会包括了一份在当地公司的实习工作。" },
  { id: 78, english: "The key difference between courses is the kind of assessment.", chinese: "课程之间的主要区别在于评估方式的不同。" },
  { id: 79, english: "The railway makes long-distance travel possible for everyone.", chinese: "铁路使每个人都能进行长途旅行。" },
  { id: 80, english: "Traffic is the main cause of air pollution in many cities.", chinese: "在许多城市，交通是空气污染的主要原因。" },
  { id: 81, english: "Check the website if you are looking for discounted textbooks.", chinese: "如果你想买打折的教科书，可以登陆网站。" },
  { id: 82, english: "Farming methods across the world have greatly developed recently.", chinese: "最近世界各地的耕作方法都有了很大的发展。" },
  { id: 83, english: "Mature students usually adapt to university life extremely well.", chinese: "成熟的学生通常非常适应大学生活。" },
  { id: 84, english: "The science library is currently located on the ground floor of the library.", chinese: "理科图书馆目前位于图书馆地面一层。" },
  { id: 85, english: "Students are advised that the lecture today has been canceled.", chinese: "学生们接到通知，今天的课被取消了。" },
  { id: 86, english: "They developed a unique approach to training their employees.", chinese: "他们开发了一种独特的方法来培训他们的员工。" },
  { id: 87, english: "Experts are now able to forecast weather over much longer periods.", chinese: "专家们现在能够预测更长期的天气。" },
  { id: 88, english: "One of the election promises is to decrease income taxes.", chinese: "选举的承诺之一是减少所得税。" },
  { id: 89, english: "Our courses help improve critical thinking and independent learning skills.", chinese: "我们的课程有助于提高批判性思维和独立学习能力。" },
  { id: 90, english: "Students are encouraged to monitor their studies by themselves.", chinese: "我们鼓励学生自觉监督自己的学习。" },
  { id: 91, english: "The ability to work with fellow students cannot be stressed enough.", chinese: "与同学一起工作的能力是再怎么强调也不为过的。" },
  { id: 92, english: "We have a lecture in the morning on Thursday.", chinese: "我们星期四上午有一节课。" },
  { id: 93, english: "The department has a higher-than-normal proportion of postgraduate students.", chinese: "这个学院的研究生比例高于正常水平。" },
  { id: 94, english: "The lecture tomorrow will discuss the educational policy of the United States.", chinese: "明天的讲座将讨论美国的教育政策。" },
  { id: 95, english: "Protective clothing must always be worn in the laboratory.", chinese: "在实验室里必须一直穿着防护服。" },
  { id: 96, english: "Make sure you choose a course that provides great career opportunities.", chinese: "确保你选择的课程能提供很好的就业机会。" },
  { id: 97, english: "Social media is criticized for causing internet addiction.", chinese: "人们批评社交媒体会导致网瘾。" },
  { id: 98, english: "Sugar is a compound including carbon, oxygen, and hydrogen atoms.", chinese: "糖是一种包括碳、氧和氢原子的化合物。" },
  { id: 99, english: "Food containing ample calories provides little or no nutritional value.", chinese: "含有过多热量的食物几乎没有提供营养价值。" },
  { id: 100, english: "Dealing with the growing population is a challenge for many governments.", chinese: "处理人口增长对许多政府来说都是一项挑战。" },
  { id: 101, english: "Photography can be very useful to geographical research.", chinese: "摄影对地理研究很有用。" },
  { id: 102, english: "A mixture is defined as a compound of chemically separate parts.", chinese: "混合物被定义为化学上分离部分的组合。" },
  { id: 103, english: "New materials and techniques are changing the style of modern architecture.", chinese: "新材料和新技术正在改变现代建筑的风格。" },
  { id: 104, english: "Honey can be used as food and a health product.", chinese: "蜂蜜既可以作为食品，也可以作为保健品。" },
  { id: 105, english: "Farmers need to adapt to the changes in climate.", chinese: "农民需要适应气候的变化。" },
  { id: 106, english: "Many university lectures can now be viewed on the internet.", chinese: "现在可以在网上观看许多大学的讲座。" },
  { id: 107, english: "An effective business manager is always open to new ideas.", chinese: "一个有能力的业务经理总是会接受新想法。" },
  { id: 108, english: "Philosophy uses logic and reasons to analyze human experience.", chinese: "哲学用逻辑和理由来分析人类的经验。" },
  { id: 109, english: "The digital camera has some advantages over traditional film.", chinese: "数码相机比传统胶卷有一些优势。" },
  { id: 110, english: "Air pollution is a serious problem all over the world.", chinese: "空气污染在全世界都是个严重的问题。" },
  { id: 111, english: "The commissioner will apportion the funds among all the authorities.", chinese: "专员将把这笔资金分配给所有当局。" },
  { id: 112, english: "Many diseases that were once serious have now been eradicated.", chinese: "许多曾经严重的疾病现在已被根除。" },
  { id: 113, english: "He wrote poetry and plays as well as scientific papers.", chinese: "他不仅写科学论文，还写诗歌和戏剧。" },
  { id: 114, english: "Students are encouraged to think carefully about their accommodation needs.", chinese: "我们鼓励学生仔细考虑他们的住宿需求。" },
  { id: 115, english: "Optional tutorials are offered in the final week of the term.", chinese: "选修辅导课在学期的最后一周提供。" },
  { id: 116, english: "Banks charge interest on the money they lend to customers.", chinese: "银行从借给客户的钱中收取利息。" },
  { id: 117, english: "There is a pharmacy on campus near the bookstore.", chinese: "校园里书店附近有个药房。" },
  { id: 118, english: "Students will focus on reporting news on changing the media world.", chinese: "学生将专注于报道改变媒体世界的新闻。" },
  { id: 119, english: "The other book isn't thorough, but it's more insightful.", chinese: "另一本书不够详尽，但更有见地。" },
  { id: 120, english: "Studies showed there is a positive correlation between the two variables.", chinese: "研究表明，这两个变量之间存在正相关关系。" },
  { id: 121, english: "Building trust is not something that can be achieved overnight.", chinese: "建立信任不是一朝一夕就能实现的。" },
  { id: 122, english: "The dance department stages elaborated performances each semester.", chinese: "舞蹈系每学期都有精心设计的表演。" },
  { id: 123, english: "New media have transcended traditional national boundaries.", chinese: "新媒体超越了传统的国界。" },
  { id: 124, english: "While some people regard it as reforming zeal, others regard it as recklessness.", chinese: "有人认为这是改革的热情，也有人认为这是鲁莽。" },
  { id: 125, english: "There is a great deal of debate on that topic.", chinese: "关于那个话题有很多争论。" },
  { id: 126, english: "The student shop sells a range of stationery.", chinese: "学生商店出售各种文具。" },
  { id: 127, english: "Currently the growth of the economy is unpredictable.", chinese: "目前的经济增长是不可预测的。" },
  { id: 128, english: "When the root system of a plant fails, foliage suffers.", chinese: "当植物的根系衰竭时，叶子也会受损。" },
  { id: 129, english: "The course includes a combination of pure and applied mathematics.", chinese: "这门课程包括纯数学和应用数学的结合。" },
  { id: 130, english: "Students must wear protective clothing that is provided in the medical laboratory.", chinese: "学生必须穿着医学实验室提供的防护服。" },
  { id: 131, english: "Population has a sharp rise in the recent twenty years.", chinese: "近二十年来人口急剧增加。" },
  { id: 132, english: "The museum is closed on the third Monday of every month.", chinese: "博物馆每个月的第三个星期一闭馆。" },
  { id: 133, english: "You must be able to work in a team.", chinese: "你必须能够在团队中工作。" },
  { id: 134, english: "You can use your laptops in the lecture.", chinese: "你们可以在课堂上使用笔记本电脑。" },
  { id: 135, english: "It is important to plan your study time carefully.", chinese: "认真规划学习时间是很重要的。" },
  { id: 136, english: "There was a prize for the best student presentation.", chinese: "有一个最佳学生演讲奖。" },
  { id: 137, english: "The library will be closed for staff training tomorrow morning.", chinese: "图书馆将于明天上午闭馆进行员工培训。" },
  { id: 138, english: "When attending a job interview, punctuality is the key.", chinese: "参加面试时，准时是关键。" },
  { id: 139, english: "The studies showed the Hong Kong people are the most active in Asia.", chinese: "研究显示，香港人是亚洲最活跃的。" },
  { id: 140, english: "Mathematics provides a foundation for understanding and analyzing data.", chinese: "数学为理解和分析数据提供了基础。" },
  { id: 141, english: "The office hours will change next term.", chinese: "下学期办公时间将有所改变。" },
  { id: 142, english: "Football is played throughout all years at the university.", chinese: "这所大学一年四季都踢足球。" },
  { id: 143, english: "We are looking for new ways to engage learners.", chinese: "我们正在寻找吸引学习者的新方法。" },
  { id: 144, english: "Take the first step by applying for a university scholarship now.", chinese: "现在就开始申请大学奖学金吧。" },
  { id: 145, english: "There is probably life in the other planets in the universe.", chinese: "宇宙中的其他行星上可能有生命。" },
  { id: 146, english: "Without doubt, this theory has a number of limitations.", chinese: "毫无疑问，这个理论有一些局限性。" },
  { id: 147, english: "Unemployment rate has fallen to its lowest level in years.", chinese: "失业率已降至多年来的最低水平。" },
  { id: 148, english: "Library plays an important role in students' lives.", chinese: "图书馆在学生的生活中扮演着重要的角色。" },
  { id: 149, english: "Chemical reactions occur when substances combine or change.", chinese: "当物质结合或变化时就会发生化学反应。" },
  { id: 150, english: "Course work gives students the chances to thoroughly explore the subject.", chinese: "课程作业让学生有机会深入探索这门学科。" },
  { id: 151, english: "It is quite clear that our facial expressions are different across the world.", chinese: "很明显，我们的面部表情在全球范围内存在差异。" },
  { id: 152, english: "All experimental procedures are outlined in the laboratory manual.", chinese: "所有实验步骤都已在实验手册中列出。" },
  { id: 153, english: "You need to make sure that all your essays are handed in on time.", chinese: "你必须确保你的所有论文都能按时交上。" },
  { id: 154, english: "A university degree is required for entry into various professions.", chinese: "要进入各类职业领域，通常需要拥有大学学历。" },
  { id: 155, english: "You can find the complex form on the website.", chinese: "你可以在网站上找到那个复杂的表格。" }
];

// 自动生成 zhugan / xijie，避免手动切分错误
function splitSentenceForWFD(sentence) {
  const words = sentence.split(/\s+/);
  const splitIndex = Math.min(5, Math.max(1, Math.floor(words.length / 2)));
  return {
    zhugan: words.slice(0, splitIndex).join(" "),
    xijie: words.slice(splitIndex).join(" ")
  };
}

const WFD_LIST = RAW_WFD_LIST.map(item => {
  const parts = splitSentenceForWFD(item.english);
  return {
    ...item,
    zhugan: parts.zhugan,
    xijie: parts.xijie
  };
});

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

  const formatText = (t) => t.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
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
  
  if (isNaN(targetId) || targetId < 1 || targetId > WFD_LIST.length) {
    alert(`⚠️ 请输入正确的题号范围（1 到 ${WFD_LIST.length} 之间）`);
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
  const prevBtn = document.getElementById("prev-btn");
  if (prevBtn) prevBtn.onclick = () => changeQuestion('prev');

  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) nextBtn.onclick = () => changeQuestion('next');

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
