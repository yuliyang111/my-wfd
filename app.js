// ==========================================
// 1. WFD 核心高频真题机经数据 (完美闭合无省略)
// ==========================================
const WFD_LIST = [
  { id: 1, english: "The celebrated theory is still the source of great controversy.", chinese: "这一著名的理论至今仍是巨大争议的根源。" },
  { id: 2, english: "A good architectural structure should be useful, durable and beautiful.", chinese: "一个好的建筑结构应该实用、耐用、美观。" },
  { id: 3, english: "A group meeting will be held tomorrow in the library conference room.", chinese: "明天将在图书馆会议室举行小组会议。" },
  { id: 4, english: "Educational level is found to be related to social and economic background.", chinese: "教育水平与社会和经济背景有关。" },
  { id: 5, english: "All of the assignments must be submitted in person to the faculty office.", chinese: "所有作业必须亲自提交至学院办公室/教职员办公室。" },
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
  { id: 18, english: "Plants are the living things that can grow on land or in water.", chinese: "植物是能在陆地上或水中生长的生物。" },
  { id: 19, english: "Please make sure you have correctly cited all the necessary materials.", chinese: "请确保你正确引用了所有必要的材料。" },
  { id: 20, english: "Remember, the prestigious election of stewardship has strict eligibility criteria.", chinese: "记住，这场有声望的管理层选举有严格的资格标准。" },
  { id: 21, english: "Students have the options to live in college residences or apartments.", chinese: "学生可以选择住在大学宿舍或公寓。" },
  { id: 22, english: "The application processes may take longer than expected.", chinese: "申请过程可能比预期的的时间更长。" },
  { id: 23, english: "Rising inflation may indicate an increase in the demand for consumer products.", chinese: "通货膨胀加剧可能表明对消费品的需求增加。" },
  {
    id: 24,
    english: "The massive accumulation of data was converted into a communicable argument.",
    chinese: "大量的数据累积被转化为一种可用于沟通的论证形式。",
    zhugan: "The massive accumulation of data was converted",
    xijie: "into a communicable argument."
  },
  { id: 25, english: "The most popular courses still have a few places left.", chinese: "最受欢迎的课程仍有一些空缺席位。" },
  { id: 26, english: "Parents' talk to children tends to be simplified.", chinese: "父母对孩子的谈话往往被简化。" },
  { id: 27, english: "Education and training provide important skills for the labor force.", chinese: "教育培训为劳动力提供了重要的技能。" },
  { id: 28, english: "Those who are considering a career in marketing should attend the talk.", chinese: "那些正在考虑从事市场营销的人应该参加这次演讲。" },
  { id: 29, english: "A good academic paper should present a clear argument.", chinese: "一篇好的学术论文应该呈现一个清晰的论点。" },
  { id: 30, english: "Collaboration between departments is a feature of successful companies.", chinese: "部门间的协作是成功公司的一个特点。" },
  { id: 31, english: "Geography is generally divided into two main branches, human and physical.", chinese: "地理学通常分为两个主要的分支：人文地理和自然地理。" },
  { id: 32, english: "Essays and assignments are spread out across the academic year.", chinese: "论文和作业分散在整个学年内。" },
  { id: 33, english: "The elective course introduces engineering students to construction practices and concepts.", chinese: "选修课程向工程学生介绍了建筑实操和建筑概念。" },
  { id: 34, english: "A professor took one year off to work on her book.", chinese: "一位教授休了一年的假，专注于撰写她的书籍。" },
  { id: 35, english: "Scientists were unsure when the early men first left Africa.", chinese: "科学家们不能确定早期人类是什么时候第一次离开非洲的。" },
  { id: 36, english: "The printers automatically print on both sides of each page.", chinese: "打印机自动打印每页的两面。" },
  { id: 37, english: "There is a widely believed perception that engineering is for boys.", chinese: "人们普遍认为，工程学适合男孩。" },
  { id: 38, english: "Distance learning allows you to develop a career around your commitments.", chinese: "远程学习让你能够围绕已有的事务或安排来发展职业。" },
  { id: 39, english: "Salt is produced from seawater or extracted from the ground.", chinese: "盐是从海水中产生的或从地下提取的。" },
  { id: 40, english: "The area has a variety of underwater habitats and species.", chinese: "该地区有各种各样的水下栖息地和物种。" },
  { id: 41, english: "Your ideas are discussed and debated in seminars and tutorials.", chinese: "你的想法在研讨会和辅导课中被讨论和辩论。" },
  { id: 42, english: "Classical mechanics is sometimes considered as a branch of applied mathematics.", chinese: "经典力学有时候被认为是应用数学的一个分支。" }
];

// ==========================================
// 2. 核心渲染与控制逻辑 (无缩水、高容错版)
// ==========================================
let currentIndex = 0;
let isDetailShown = false; 

// 强力渲染辅助函数：赋值的同时将灰色骨架屏的样式扒光
function safeRender(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) {
    el.innerText = text || '';
    // 强制清除所有的骨架屏或加载类名，防止灰色块遮挡
    el.classList.remove("loading", "skeleton", "gray-bar", "placeholder");
    el.style.background = "none";
    el.style.backgroundColor = "transparent";
  }
}

// 核心渲染主函数
function showQuestion(index) {
  const q = WFD_LIST[index];
  if (!q) return;

  // 1. 更新大标题上的题号
  const titleEl = document.querySelector('h2') || document.querySelector('.title') || document.getElementById("title");
  if (titleEl) {
    titleEl.innerHTML = `<span class="icon">🎯</span> WFD 155 (第 ${q.id} 题)`;
  }

  // 2. 智能切分主干和细节（如果数据没单独配，就取前 6 个单词作为主干兜底）
  let zgText = q.zhugan || (q.english ? q.english.split(' ').slice(0, 6).join(' ') + '...' : '');
  let xjText = q.xijie || (q.english ? '...' + q.english.split(' ').slice(6).join(' ') : '');

  // 兼容不同的 index.html 元素 ID 命名格式
  safeRender("zhugan-en", zgText);
  safeRender("zhugan-zh", q.chinese ? `（${q.chinese.slice(0, 12)}...）` : '');
  safeRender("zhugan-cn", q.chinese ? `（${q.chinese.slice(0, 12)}...）` : '');
  
  safeRender("xijie-en", xjText);
  safeRender("xj-zh", q.chinese ? `（...${q.chinese.slice(12)}）` : '');
  safeRender("xijie-zh", q.chinese ? `（...${q.chinese.slice(12)}）` : '');
  safeRender("xijie-cn", q.chinese ? `（...${q.chinese.slice(12)}）` : '');

  // 3. 安全渲染完整英中文
  safeRender("full-en", q.english);
  safeRender("english-text", q.english);
  safeRender("full-zh", q.chinese);
  safeRender("chinese-text", q.chinese);

  // 4. 自动清空用户文本框
  const inputEl = document.querySelector('textarea') || document.getElementById("user-input");
  if (inputEl) {
    inputEl.value = '';
  }

  // 5. 切换到新题时，重置控制隐藏/显示的面板状态
  isDetailShown = false;
  const detailsCont = document.getElementById("details-container") || document.getElementById("analysis-container");
  if (detailsCont) {
    detailsCont.style.display = "none";
  }
  
  const toggleBtn = document.getElementById("toggle-btn");
  if (toggleBtn) {
    toggleBtn.innerText = "显示后半句及解析";
  }
}

// 展开/收起解析的控制逻辑
function toggleDetail() {
  const detailsCont = document.getElementById("details-container") || document.getElementById("analysis-container");
  const btn = document.getElementById("toggle-btn");

  isDetailShown = !isDetailShown;

  if (isDetailShown) {
    if (detailsCont) detailsCont.style.display = "block";
    if (btn) btn.innerText = "隐藏后半句及解析";
  } else {
    if (detailsCont) detailsCont.style.display = "none";
    if (btn) btn.innerText = "显示后半句及解析";
  }
}

// 随机切题函数
function nextQuestion() {
  if (typeof WFD_LIST === 'undefined' || WFD_LIST.length === 0) return;
  // 采用随机切题算法
  currentIndex = Math.floor(Math.random() * WFD_LIST.length);
  showQuestion(currentIndex);
}

// ==========================================
// 3. 页面生命周期初始化与事件绑定
// ==========================================
window.onload = function() {
  if (typeof WFD_LIST !== 'undefined' && WFD_LIST.length > 0) {
    nextQuestion(); // 首次进入自动加载一题
  }

  // 绑定显示解析按钮
  const toggleBtn = document.getElementById("toggle-btn");
  if (toggleBtn) {
    toggleBtn.onclick = toggleDetail;
  }

  // 智能适配：无论是点击“提交抄写”、“提交验证”还是“下一题”，都触发随机切题
  const nextBtn = document.getElementById("next-btn") || document.getElementById("submit-btn") || document.querySelector('.btn-next') || document.querySelector('button');
  if (nextBtn) {
    nextBtn.onclick = nextQuestion;
  }
};
