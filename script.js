// Elements
const authPage=document.getElementById("authPage");
const appPage=document.getElementById("appPage");
const loginForm=document.getElementById("loginForm");
const logoutBtn=document.getElementById("logoutBtn");

const homeScreen=document.getElementById("homeScreen");
const advisoryScreen=document.getElementById("advisoryScreen");
const qaScreen=document.getElementById("qaScreen");
const profileScreen=document.getElementById("profileScreen");
const contactScreen=document.getElementById("contactScreen");

const homeBtn=document.getElementById("homeBtn");
const advisoryBtn=document.getElementById("advisoryBtn");
const qaBtn=document.getElementById("qaBtn");
const profileBtn=document.getElementById("profileBtn");
const contactBtn=document.getElementById("contactBtn");
const goToQA=document.getElementById("goToQA");
const backHome=document.getElementById("backHome");

// Login
loginForm.addEventListener("submit",e=>{
  e.preventDefault();
  authPage.classList.add("hidden");
  appPage.classList.remove("hidden");
  showScreen("home");
});

// Logout
logoutBtn.addEventListener("click",e=>{
  e.preventDefault();
  appPage.classList.add("hidden");
  authPage.classList.remove("hidden");
});

// Screen switching
function showScreen(screen){
  [homeScreen,advisoryScreen,qaScreen,profileScreen,contactScreen].forEach(s=>s.classList.add("hidden"));
  if(screen==="home") homeScreen.classList.remove("hidden");
  if(screen==="advisory") advisoryScreen.classList.remove("hidden");
  if(screen==="qa") qaScreen.classList.remove("hidden");
  if(screen==="profile") profileScreen.classList.remove("hidden");
  if(screen==="contact") contactScreen.classList.remove("hidden");
}

homeBtn.addEventListener("click",()=>showScreen("home"));
advisoryBtn.addEventListener("click",()=>showScreen("advisory"));
qaBtn.addEventListener("click",()=>showScreen("qa"));
profileBtn.addEventListener("click",()=>showScreen("profile"));
contactBtn.addEventListener("click",()=>showScreen("contact"));
goToQA.addEventListener("click",()=>showScreen("qa"));
backHome?.addEventListener("click",()=>showScreen("home"));

// Chat AI simulation
const chatMessages=document.getElementById("chatMessages");
const chatInput=document.getElementById("chatInput");
const sendBtn=document.getElementById("sendBtn");
sendBtn.addEventListener("click",()=>{
  const msg=chatInput.value.trim();
  if(msg==="") return;

  const userMsg=document.createElement("div");
  userMsg.classList.add("msg","user"); userMsg.textContent=msg;
  chatMessages.appendChild(userMsg);

  const botMsg=document.createElement("div");
  botMsg.classList.add("msg","bot");
  botMsg.textContent="AI Advisory → "+generateAIResponse(msg);
  chatMessages.appendChild(botMsg);

  chatInput.value="";
  chatMessages.scrollTop=chatMessages.scrollHeight;
});

// Simple AI response
function generateAIResponse(input){
  input=input.toLowerCase();
  if(input.includes("wheat")) return "Use Urea & DAP in balanced proportion.";
  if(input.includes("cotton")) return "Spray neem oil solution weekly to prevent pests.";
  if(input.includes("soil")) return "Soil is fertile with good moisture. Consider crop rotation.";
  if(input.includes("weather")) return "Forecast: Sunny, temp 28°C, humidity 65%.";
  return "Our AI suggests: Monitor crops daily and follow best practices.";
}

// Profile save
document.getElementById("saveProfile").addEventListener("click",()=>{
  alert("Profile saved successfully! ✅");
});

// Contact form
document.getElementById("sendContact").addEventListener("click",()=>{
  const name=document.getElementById("contactName").value.trim();
  const email=document.getElementById("contactEmail").value.trim();
  const message=document.getElementById("contactMessage").value.trim();
  if(!name||!email||!message){ alert("Please fill all fields."); return;}
  alert("Message sent successfully! ✅");
  document.getElementById("contactName").value="";
  document.getElementById("contactEmail").value="";
  document.getElementById("contactMessage").value="";
});

// Q&A dynamic
const qaList=document.getElementById("qaList");
const submitQuestion=document.getElementById("submitQuestion");
const newQuestion=document.getElementById("newQuestion");

submitQuestion.addEventListener("click",()=>{
  const q=newQuestion.value.trim();
  if(!q){ alert("Please type a question"); return;}
  const card=document.createElement("div"); card.classList.add("qa-card");
  card.innerHTML=`<p><strong>Q:</strong> ${q}</p><p><strong>A:</strong> AI Advisory will answer soon.</p>`;
  qaList.appendChild(card);
  newQuestion.value="";
});
