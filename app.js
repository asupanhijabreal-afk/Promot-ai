const CATEGORIES=[{"name": "Business & Management", "examples": "strategi bisnis, SOP, analisis, keputusan"}, {"name": "Entrepreneurship", "examples": "ide bisnis, validasi, business plan"}, {"name": "Management", "examples": "KPI, evaluasi, planning, meeting"}, {"name": "Marketing", "examples": "campaign, positioning, marketing strategy"}, {"name": "Social Media", "examples": "Instagram, TikTok, Facebook, X, LinkedIn"}, {"name": "Copywriting", "examples": "iklan, headline, landing page, sales copy"}, {"name": "SEO", "examples": "keyword, content brief, on-page SEO"}, {"name": "Content Writing", "examples": "artikel, blog, newsletter"}, {"name": "YouTube", "examples": "script, title, description, content planning"}, {"name": "Video Production", "examples": "storyboard, shot list, editing plan"}, {"name": "Podcast", "examples": "episode planning, script, show notes"}, {"name": "Graphic Design", "examples": "konsep desain, branding, creative brief"}, {"name": "AI Image", "examples": "prompt gambar, konsep visual, art direction"}, {"name": "AI Video", "examples": "video concept, scene prompt, storyboard"}, {"name": "Music & Audio", "examples": "lyrics, podcast, sound design"}, {"name": "Software Development", "examples": "coding, debugging, architecture"}, {"name": "Web Development", "examples": "HTML, CSS, JS, React, Laravel"}, {"name": "App Development", "examples": "Android, iOS, cross-platform"}, {"name": "AI Development", "examples": "AI apps, agents, RAG, automation"}, {"name": "Automation", "examples": "workflow, n8n, Make, Zapier"}, {"name": "IT & Tech Support", "examples": "troubleshooting, documentation"}, {"name": "Cybersecurity", "examples": "security awareness, defensive analysis"}, {"name": "Data Analysis", "examples": "data cleaning, analysis, reporting"}, {"name": "Data Science", "examples": "statistics, modeling, experimentation"}, {"name": "Research", "examples": "research questions, literature review"}, {"name": "Education", "examples": "lesson plans, teaching materials"}, {"name": "Teachers", "examples": "worksheets, quizzes, assessments"}, {"name": "Students", "examples": "study plans, summaries, practice questions"}, {"name": "Writing & Publishing", "examples": "books, ebooks, manuscripts"}, {"name": "Freelancing", "examples": "proposals, client communication, pricing"}, {"name": "Career & Jobs", "examples": "CV, cover letter, interview preparation"}, {"name": "HR & Recruitment", "examples": "job descriptions, interview questions"}, {"name": "Finance", "examples": "budgeting, financial analysis, reports"}, {"name": "E-Commerce", "examples": "product listings, customer service"}, {"name": "Retail", "examples": "inventory, promotions, customer communication"}, {"name": "Manufacturing", "examples": "SOP, quality documentation, planning"}, {"name": "Logistics", "examples": "planning, documentation, operations"}, {"name": "Construction", "examples": "project documentation, planning"}, {"name": "Real Estate", "examples": "property descriptions, market research"}, {"name": "Travel & Tourism", "examples": "itinerary, tourism content, hospitality"}, {"name": "Food & Restaurant", "examples": "menus, marketing, operations"}, {"name": "Hotel & Hospitality", "examples": "guest communication, SOP, marketing"}, {"name": "Agriculture", "examples": "crop planning, documentation, marketing"}, {"name": "Science", "examples": "research assistance, explanations"}, {"name": "Legal & Compliance", "examples": "document drafting assistance, issue spotting"}, {"name": "Government & Administration", "examples": "correspondence, reports, administration"}, {"name": "Journalism & Media", "examples": "interview questions, article structure"}, {"name": "Customer Service", "examples": "replies, FAQ, complaint handling"}, {"name": "Productivity & Personal Work", "examples": "planning, organization, task management"}, {"name": "Personal Development", "examples": "goals, habits, learning plans"}];
const INTENTS={"Business & Management": ["business strategy", "SOP", "business analysis", "decision support", "process improvement", "risk analysis", "operating plan", "report"], "Entrepreneurship": ["business idea", "market validation", "business model", "business plan", "MVP", "pricing", "go-to-market", "competitor research"], "Management": ["KPI", "OKR", "performance review", "weekly planning", "meeting agenda", "project tracking", "team workflow", "management report"], "Marketing": ["campaign", "positioning", "customer research", "offer", "funnel", "content strategy", "launch plan", "marketing analysis"], "Social Media": ["content calendar", "post", "caption", "short video", "thread", "engagement strategy", "community response", "platform strategy"], "Copywriting": ["headline", "ad copy", "landing page", "sales page", "CTA", "email sequence", "product copy", "A/B variants"], "SEO": ["keyword research", "search intent", "content brief", "on-page SEO", "internal linking", "SEO article", "metadata", "content cluster"], "Content Writing": ["article", "blog", "newsletter", "guide", "case study", "listicle", "editorial", "content calendar"], "YouTube": ["video idea", "script", "title", "description", "thumbnail concept", "hook", "retention structure", "content plan"], "Video Production": ["concept", "script breakdown", "storyboard", "shot list", "B-roll plan", "editing plan", "production schedule", "creative brief"], "Podcast": ["episode idea", "episode outline", "narration script", "interview questions", "show notes", "title", "description", "promotion plan"], "Graphic Design": ["brand concept", "logo brief", "poster", "social creative", "layout", "design system", "creative direction", "visual brief"], "AI Image": ["image prompt", "character", "product render", "poster", "thumbnail", "photorealistic scene", "illustration", "art direction"], "AI Video": ["video prompt", "scene sequence", "camera movement", "storyboard", "commercial", "cinematic scene", "short-form video", "animation concept"], "Music & Audio": ["audio concept", "podcast audio", "sound design", "lyrics", "voice direction", "music brief", "mixing plan", "audio cleanup"], "Software Development": ["feature implementation", "debugging", "refactoring", "architecture", "API", "database", "testing", "documentation"], "Web Development": ["landing page", "website", "HTML/CSS/JS", "React", "Laravel", "responsive UI", "SEO implementation", "web debugging"], "App Development": ["Android app", "iOS app", "cross-platform app", "UI flow", "API integration", "database", "authentication", "app debugging"], "AI Development": ["AI app", "agent", "RAG", "LLM workflow", "prompt system", "evaluation", "AI architecture", "tool calling"], "Automation": ["workflow", "n8n", "Make", "Zapier", "API automation", "data sync", "notifications", "scheduled process"], "IT & Tech Support": ["troubleshooting", "setup guide", "error diagnosis", "documentation", "system configuration", "performance", "backup", "user guide"], "Cybersecurity": ["security awareness", "defensive analysis", "hardening", "risk assessment", "incident response", "security checklist", "secure configuration", "audit"], "Data Analysis": ["data cleaning", "exploratory analysis", "dashboard", "report", "trend analysis", "segmentation", "KPI analysis", "data visualization"], "Data Science": ["statistical model", "prediction", "classification", "experiment", "feature engineering", "model evaluation", "forecasting", "research analysis"], "Research": ["research question", "literature review", "methodology", "source synthesis", "research outline", "hypothesis", "survey design", "evidence table"], "Education": ["lesson plan", "teaching module", "learning activity", "rubric", "assessment", "course outline", "explanation", "learning project"], "Teachers": ["worksheet", "quiz", "assessment", "rubric", "lesson activity", "answer key", "differentiation", "classroom plan"], "Students": ["study plan", "summary", "flashcards", "practice questions", "concept explanation", "exam preparation", "essay outline", "learning schedule"], "Writing & Publishing": ["book outline", "ebook", "chapter", "manuscript", "editing", "proofreading", "back-cover copy", "publishing checklist"], "Freelancing": ["proposal", "client reply", "scope of work", "pricing", "portfolio copy", "negotiation", "project brief", "invoice wording"], "Career & Jobs": ["CV", "cover letter", "interview prep", "job application", "career plan", "professional bio", "portfolio", "skill gap analysis"], "HR & Recruitment": ["job description", "interview questions", "scorecard", "candidate communication", "onboarding", "performance framework", "HR policy", "recruitment workflow"], "Finance": ["budget", "cash flow", "financial analysis", "expense report", "scenario analysis", "forecast", "financial dashboard", "financial plan"], "E-Commerce": ["product listing", "product description", "customer reply", "store FAQ", "promotion", "bundle offer", "review response", "catalog copy"], "Retail": ["inventory plan", "promotion", "store communication", "sales report", "merchandising", "customer service", "staff SOP", "retail campaign"], "Manufacturing": ["SOP", "quality checklist", "production plan", "work instruction", "inspection report", "root-cause analysis", "maintenance plan", "process improvement"], "Logistics": ["route plan", "delivery workflow", "inventory movement", "shipping documentation", "operations report", "warehouse SOP", "tracking process", "logistics analysis"], "Construction": ["project plan", "site report", "work schedule", "method statement", "material list", "safety documentation", "progress report", "project communication"], "Real Estate": ["property description", "listing", "market research", "buyer communication", "rental copy", "property comparison", "investment analysis", "sales script"], "Travel & Tourism": ["itinerary", "destination content", "tour package", "guest communication", "travel guide", "activity plan", "hospitality copy", "travel checklist"], "Food & Restaurant": ["menu", "recipe content", "restaurant marketing", "customer reply", "SOP", "promotion", "food description", "operations plan"], "Hotel & Hospitality": ["guest reply", "SOP", "service recovery", "hotel marketing", "room description", "FAQ", "staff communication", "operations plan"], "Agriculture": ["crop plan", "farm SOP", "cultivation schedule", "input planning", "yield tracking", "agri marketing", "farm documentation", "risk plan"], "Science": ["concept explanation", "research design", "scientific summary", "data interpretation", "experiment plan", "technical writing", "hypothesis", "evidence synthesis"], "Legal & Compliance": ["document draft", "compliance checklist", "issue spotting", "policy summary", "contract structure", "risk register", "formal correspondence", "regulatory research"], "Government & Administration": ["official letter", "report", "memo", "SOP", "meeting minutes", "public communication", "administrative workflow", "document template"], "Journalism & Media": ["interview questions", "article structure", "fact-check plan", "news brief", "feature outline", "headline", "source matrix", "media script"], "Customer Service": ["reply", "FAQ", "complaint handling", "refund response", "escalation", "support script", "knowledge base", "service workflow"], "Productivity & Personal Work": ["daily plan", "project plan", "task breakdown", "prioritization", "workflow", "meeting preparation", "organization", "time plan"], "Personal Development": ["goal plan", "habit plan", "learning plan", "reflection", "skill roadmap", "weekly review", "routine", "personal project"]};

const $=id=>document.getElementById(id);
const cat=$("category"), intent=$("intent"), out=$("output");

function fillCategories(){
  cat.innerHTML=CATEGORIES.map((c,i)=>`<option value="${i}">${i+1}. ${c.name}</option>`).join("");
  fillIntents();
}
function fillIntents(){
  const name=CATEGORIES[cat.value].name;
  intent.innerHTML=(INTENTS[name]||[]).map(x=>`<option>${x}</option>`).join("");
}
cat.addEventListener("change",fillIntents);

function val(id){return $(id).value.trim()}
function checked(id){return $(id).checked}

function generate(){
  const c=CATEGORIES[cat.value], task=val("intent")||"pekerjaan yang paling relevan";
  const role=val("role")||`spesialis senior bidang ${c.name}`;
  const audience=val("audience")||"audiens yang relevan dengan tujuan";
  const goal=val("goal")||"[ISI TUJUAN UTAMA DI SINI]";
  const data=val("data")||"[Jika ada, masukkan data/bahan/sumber di sini]";
  const constraints=val("constraints")||"[Masukkan batasan, deadline, budget, platform, aturan, atau kebutuhan khusus]";
  const clarify=checked("clarify")?"Jika informasi penting belum tersedia atau ambigu, tanyakan hanya pertanyaan klarifikasi yang benar-benar memengaruhi hasil. Jangan menebak data kritis.":"Jangan mengajukan pertanyaan jika masih dapat bekerja secara wajar; gunakan asumsi yang jelas.";
  const assumptions=checked("assumptions")?"Nyatakan asumsi yang digunakan dan pisahkan fakta, input pengguna, estimasi, serta rekomendasi.":"Gunakan input yang tersedia tanpa bagian asumsi khusus.";
  const quality=checked("quality")?"Sebelum memberikan hasil final, lakukan quality check internal terhadap kelengkapan, konsistensi, akurasi, format, dan kesesuaian dengan tujuan.":"Pastikan jawaban tetap konsisten dan relevan.";
  return `Anda adalah ${role}.

KONTEKS TUGAS
Kategori: ${c.name}
Jenis pekerjaan: ${task}
Target/audiens: ${audience}
Bahasa output: ${val("language")}
Gaya: ${val("style")}
Format output: ${val("format")}
Panjang: ${val("length")}

TUJUAN UTAMA
${goal}

DATA / BAHAN YANG TERSEDIA
${data}

BATASAN / ATURAN
${constraints}

INSTRUKSI KERJA
1. Pahami tujuan utama dan konteks sebelum menyusun jawaban.
2. Pecah masalah menjadi komponen yang diperlukan untuk menghasilkan output yang konkret dan dapat digunakan.
3. Gunakan praktik terbaik yang relevan dengan bidang ${c.name} dan jenis pekerjaan "${task}".
4. Jangan mengarang fakta, angka, sumber, kutipan, hasil penelitian, kemampuan teknis, atau informasi yang tidak tersedia.
5. Jika sumber/data diperlukan, jelaskan bagian mana yang membutuhkan verifikasi atau input tambahan.
6. Berikan hasil yang spesifik, operasional, dan siap dipakai—hindari nasihat generik.
7. Jika terdapat beberapa opsi yang sah, tampilkan opsi secara terstruktur beserta trade-off yang relevan tanpa mengaburkan perbedaan.
8. Ikuti bahasa, gaya, format, dan panjang yang diminta.
9. ${
"${task}" === "debugging" ? "Saat menangani kode/error, identifikasi penyebab, tunjukkan perbaikan, lalu berikan versi kode lengkap yang dapat diuji." :
"${task}" === "SOP" ? "Susun prosedur berurutan dengan input, langkah, kontrol kualitas, keselamatan/kepatuhan yang relevan, dan hasil akhir." :
"Gunakan struktur terbaik untuk menghasilkan deliverable yang benar-benar dapat digunakan."
}
10. ${clarify}
11. ${assumptions}
12. ${quality}

OUTPUT YANG DIHARAPKAN
- Mulai dengan hasil utama, bukan pengantar panjang.
- Gunakan heading dan struktur yang mudah dipindai.
- Sertakan contoh/template/checklist bila membantu.
- Tandai bagian yang perlu diisi pengguna dengan [PLACEHOLDER].
- Pada akhir jawaban, sertakan "FINAL CHECK" singkat yang menunjukkan bahwa hasil telah diperiksa terhadap tujuan, batasan, dan format.

MULAI SEKARANG berdasarkan informasi di atas.`;
}
$("generate").addEventListener("click",()=>out.value=generate());
$("copy").addEventListener("click",async()=>{if(!out.value)out.value=generate();await navigator.clipboard.writeText(out.value);$("copy").textContent="✅ Copied";setTimeout(()=>$("copy").textContent="📋 Copy",1200)});
$("download").addEventListener("click",()=>{const text=out.value||generate();const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type:"text/plain;charset=utf-8"}));a.download="generated-ai-prompt.txt";a.click();URL.revokeObjectURL(a.href)});
$("reset").addEventListener("click",()=>{document.querySelectorAll("input,textarea").forEach(x=>x.value="");$("role").value="";$("audience").value="";$("goal").value="";$("data").value="";$("constraints").value="";$("output").value="";fillCategories()});
fillCategories();
