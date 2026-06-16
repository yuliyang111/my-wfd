const wfdData = [
    {
      id: "155",
      mainStem: "The massive accumulation of data was converted",
      mainStemCn: "（大量的数据累积被转化）",
      details: "into a communicable argument.",
      detailsCn: "（成为一种可用于沟通的论证形式。）",
      fullEnglish: "The massive accumulation of data was converted into a communicable argument.",
      fullTranslation: "大量的数据累积被转化为一种可用于沟通的论证形式。",
      points: [
        "<span class='code-tag'>accumulation</span> （累积）。注意中间是双写 <b>cc</b>。",
        "<span class='code-tag'>communicable</span> （可传达的/可沟通的）。注意中间的元音和 <b>-cable</b> 后缀。",
        "<span class='code-tag'>argument</span> （论证/争论）。拼写超级易错点！<b>argu</b> 后面直接加 <b>ment</b>，中间**没有**字母 e！"
      ]
    },
    {
      id: "156",
      mainStem: "Rising inflation may indicate",
      mainStemCn: "（通货膨胀加剧可能表明）",
      details: "an increase in the demand for consumer products.",
      detailsCn: "（对消费品的需求增加。）",
      fullEnglish: "Rising inflation may indicate an increase in the demand for consumer products.",
      fullTranslation: "通货膨胀加剧可能表明对消费品的需求增加。",
      points: [
        "<span class='code-tag'>inflation</span> （通货膨胀）",
        "<span class='code-tag'>indicate</span> （表明/暗示）",
        "注意介词搭配：<span class='code-tag'>an increase <b>in</b>...</span> 和 <span class='code-tag'>the demand <b>for</b>...</span> 。"
      ]
    },
    {
      id: "157",
      mainStem: "The celebrated theory is still the source",
      mainStemCn: "（这一著名的理论至今仍是根源）",
      details: "of great controversy.",
      detailsCn: "（巨大争议的。）",
      fullEnglish: "The celebrated theory is still the source of great controversy.",
      fullTranslation: "这一著名的理论至今仍是巨大争议的根源。",
      points: [
        "<span class='code-tag'>celebrated</span> （著名的）。注意结尾有 <b>-ed</b>。",
        "<span class='code-tag'>controversy</span> （争议）。核心难词，注意是以 <b>-versy</b> 结尾。"
      ]
    }
  ];
  
  let currentData = null;
  let currentStep = 1; // 1: 抄写, 2: 盲默, 3: 校验结果, 4: 纠错死磕
  
  function initSentence() {
    const randomIndex = Math.floor(Math.random() * wfdData.length);
    currentData = wfdData[randomIndex];
    
    document.getElementById('title-text').innerText = `🎯 WFD ${currentData.id}`;
    document.getElementById('main-stem').innerText = currentData.mainStem;
    document.getElementById('main-stem-cn').innerText = currentData.mainStemCn;
    document.getElementById('details').innerText = currentData.details;
    document.getElementById('details-cn').innerText = currentData.detailsCn;
    document.getElementById('full-english').innerText = currentData.fullEnglish;
    document.getElementById('full-translation').innerText = currentData.fullTranslation;
    
    const pointsUl = document.getElementById('test-points');
    pointsUl.innerHTML = '';
    currentData.points.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      pointsUl.appendChild(li);
    });
  
    document.getElementById('next-btn').style.display = 'none';
    enterStep1();
  }
  
  // 阶段一：看主干/细节写全句（完全可见，作为抄写）
  function enterStep1() {
    currentStep = 1;
    document.getElementById('hint-section').style.with = 'block';
    document.getElementById('hint-section').style.display = 'block';       
    document.getElementById('row-translation').style.display = 'block';   
    document.getElementById('review-section').style.display = 'none';     
    document.getElementById('check-result-zone').style.display = 'none'; 
    
    document.getElementById('step-indicator').innerText = "✍️ 阶段一：请对照上方完整英文，完整抄写一遍（培养肌肉记忆）";
    document.getElementById('submit-btn').innerText = "提交抄写";
    
    const inputEl = document.getElementById('user-input');
    inputEl.value = '';
    inputEl.disabled = false;
    clearFeedback();
  }
  
  // 阶段二：看中文默写全句（完全隐藏主干、细节、完整英文）
  function enterStep2() {
    currentStep = 2;
    document.getElementById('hint-section').style.display = 'none';       // 强力隐藏
    document.getElementById('row-translation').style.display = 'block';   // 唯一保留中文
    document.getElementById('review-section').style.display = 'none';     
    document.getElementById('check-result-zone').style.display = 'none'; 
    
    document.getElementById('step-indicator').innerText = "🧠 阶段二：提示已隐藏！请完全根据完整中文，在下方默写全句";
    document.getElementById('submit-btn').innerText = "提交默写并校验";
    
    const inputEl = document.getElementById('user-input');
    inputEl.value = '';
    inputEl.disabled = false;
    showFeedback("✔️ 抄写通关成功！现在请关闭线索，闭眼盲默一遍。", "success");
  }
  
  // 阶段三：校验结果（渲染结果比对，展开考点）
  function enterStep3() {
    currentStep = 3;
    document.getElementById('hint-section').style.display = 'block';   
    document.getElementById('review-section').style.display = 'block'; 
    
    document.getElementById('step-indicator').innerText = "🔍 阶段三：默写完成，请核对下方对账单";
    document.getElementById('user-input').disabled = true; 
    document.getElementById('submit-btn').innerText = "知道了，去下一句";
  }
  
  // 阶段四：纠错练习（校验结果出错，重新提供输入框和提示的完整中文直到默写全对）
  function enterStep4() {
    currentStep = 4;
    document.getElementById('hint-section').style.display = 'none';       // 重新隐去英文
    document.getElementById('row-translation').style.display = 'block';   // 仅保留中文
    document.getElementById('review-section').style.display = 'none';     
    document.getElementById('check-result-zone').style.display = 'none'; 
    
    document.getElementById('step-indicator').innerText = "🔥 阶段四：死磕纠错！请重新看着中文默写，直到完全拼对，才能放行下一句";
    document.getElementById('submit-btn').innerText = "重新提交验证";
    
    const inputEl = document.getElementById('user-input');
    inputEl.value = '';
    inputEl.disabled = false;
  }
  
  // 交互判断逻辑
  function handleSubmit() {
    const userTyped = document.getElementById('user-input').value.trim();
    const targetText = currentData.fullEnglish.trim();
    const isCorrect = userTyped.toLowerCase() === targetText.toLowerCase();
  
    if (currentStep === 1) {
      if (isCorrect) {
        enterStep2();
      } else {
        showFeedback("❌ 抄写好像有错漏哦（请核对大小写、错字与标点），请重新输入！", "error");
      }
    } 
    else if (currentStep === 2) {
      document.getElementById('res-user').innerText = userTyped || "[内容未输入]";
      document.getElementById('res-target').innerText = targetText;
      document.getElementById('check-result-zone').style.display = 'block';
      
      if (isCorrect) {
        showFeedback("🎉 太绝了！一字不差，盲默完美通过！", "success");
        enterStep3();
        document.getElementById('next-btn').style.display = 'inline-block'; // 彻底全对才允许看下一题
      } else {
        showFeedback("⚠️ 发现默写拼写存在误差，请看下方对账单并核对考点。", "error");
        enterStep3();
        document.getElementById('submit-btn').innerText = "进入纠错死磕";
      }
    } 
    else if (currentStep === 3) {
      if (document.getElementById('submit-btn').innerText === "进入纠错死磕") {
        enterStep4();
      } else {
        initSentence(); // 完美全对，直接切题
      }
    } 
    else if (currentStep === 4) {
      if (isCorrect) {
        showFeedback("🎉 强！纠错完全正确，本题完美闭环！", "success");
        
        document.getElementById('hint-section').style.display = 'block';
        document.getElementById('review-section').style.display = 'block';
        document.getElementById('res-user').innerText = userTyped;
        document.getElementById('check-result-zone').style.display = 'block';
        
        currentStep = 3;
        document.getElementById('user-input').disabled = true;
        document.getElementById('submit-btn').innerText = "通关！去下一句";
        document.getElementById('next-btn').style.display = 'inline-block';
      } else {
        showFeedback("❌ 依旧存在细节拼写错误，请凝神聚气，重新看中文纠错！", "error");
      }
    }
  }
  
  function showFeedback(text, type) {
    const fb = document.getElementById('feedback');
    fb.innerText = text;
    fb.className = type === "success" ? "feedback-msg msg-success" : "feedback-msg msg-error";
  }
  function clearFeedback() {
    document.getElementById('feedback').innerText = '';
  }
  
  document.getElementById('submit-btn').addEventListener('click', handleSubmit);
  document.getElementById('next-btn').addEventListener('click', initSentence);
  document.addEventListener('DOMContentLoaded', initSentence);