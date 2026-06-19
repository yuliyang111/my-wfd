// ==========================================
// 1. 核心高频真题机经数据 (1 - 155)
// ==========================================
const WFD_LIST = [
  {
    id: 1,
    english: "The celebrated theory is still the source of great controversy.",
    chinese: "这一著名的理论至今仍是巨大争议的根源。"
  },
  {
    id: 2,
    english: "A good architectural structure should be useful, durable and beautiful.",
    chinese: "一个好的建筑结构应该实用、耐用、美观。"
  },
  {
    id: 3,
    english: "A group meeting will be held tomorrow in the library conference room.",
    chinese: "明天将在图书馆会议室举行小组会议。"
  },
  {
    id: 24,
    english: "The massive accumulation of data was converted into a communicable argument.",
    chinese: "大量的数据累积被转化为一种可用于沟通的论证形式。",
    zhugan: "The massive accumulation of data was converted",
    xijie: "into a communicable argument."
  },
  {
    id: 155,
    english: "You can find the complex form on the website.",
    chinese: "你可以在网站上找到那个复杂的表格。"
  }
  // 💡 提示：其他 155 道题目的完整数组你已经配置好了，可以直接保留或后续按这个格式继续追加
];

// ==========================================
// 2. 核心控制逻辑 (已做健壮性判空保护，绝不卡死)
// ==========================================
let currentIndex = 0;
let isDetailShown = false; 

function showQuestion(index) {
  const q = WFD_LIST[index];
  if (!q) return;

  // 1. 动态更新顶部的标题/题号
  const titleEl = document.querySelector('h2') || document.querySelector('.title') || document.getElementById("title");
  if (titleEl) {
    titleEl.innerHTML = `<span class="icon">🎯</span> WFD 155 (第 ${q.id} 题)`;
  }

  // 2. 安全渲染主干与细节（自动切分兜底）
  let zgText = q.zhugan || (q.english ? q.english.split(' ').slice(0, 6).join(' ') + '...' : '');
  let xjText = q.xijie || (q.english ? '...' + q.english.split(' ').slice(6).join(' ') : '');

  const zgEnEl = document.getElementById("zhugan-en");
  if (zgEnEl) zgEnEl.innerText = zgText;

  const zgZhEl = document.getElementById("zhugan-zh") || document.getElementById("zhugan-cn");
  if (zgZhEl) zgZhEl.innerText = q.chinese ? `（${q.chinese.slice(0, 10)}...）` : '';
  
  const xjEnEl = document.getElementById("xijie-en");
  if (xjEnEl) xjEnEl.innerText = xjText;

  const xjZhEl = document.getElementById("xijie-zh") || document.getElementById("xijie-cn");
  if (xjZhEl) xjZhEl.innerText = q.chinese ? `（...${q.chinese.slice(10)}）` : '';

  // 3. 安全渲染完整英文与中文
  const fullEnEl = document.getElementById("full-en") || document.getElementById("english-text");
  if (fullEnEl) fullEnEl.innerText = q.english || '';

  const fullZhEl = document.getElementById("full-zh") || document.getElementById("chinese-text");
  if (fullZhEl) fullZhEl.innerText = q.chinese || '';

  // 4. 清空输入框
  const inputEl = document.querySelector('textarea') || document.getElementById("user-input");
  if (inputEl) inputEl.value = '';

  // 切换新题时，默认隐藏解析
  isDetailShown = false;
  const detailsCont = document.getElementById("details-container") || document.getElementById("analysis-container");
  if (detailsCont) detailsCont.style.display = "none";
  
  const toggleBtn = document.getElementById("toggle-btn");
  if (toggleBtn) toggleBtn.innerText = "显示后半句及解析";
}

// 切换半句/解析显示
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

// 切换下一题
function nextQuestion() {
  if (typeof WFD_LIST === 'undefined' || WFD_LIST.length === 0) return;
  currentIndex = Math.floor(Math.random() * WFD_LIST.length);
  showQuestion(currentIndex);
}

// ==========================================
// 3. 页面初始化绑定
// ==========================================
window.onload = function() {
  if (typeof WFD_LIST !== 'undefined' && WFD_LIST.length > 0) {
    nextQuestion(); 
  }

  // 绑定“显示/隐藏解析”按钮
  const toggleBtn = document.getElementById("toggle-btn");
  if (toggleBtn) {
    toggleBtn.onclick = toggleDetail;
  }

  // 绑定你的按钮（兼容“下一题”或“提交抄写/提交验证”按钮触发下一题）
  const nextBtn = document.getElementById("next-btn") || document.getElementById("submit-btn") || document.querySelector('.btn-next') || document.querySelector('button');
  if (nextBtn) {
    nextBtn.onclick = nextQuestion;
  }
};
