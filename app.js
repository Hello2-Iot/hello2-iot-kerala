// Hello2-IoT Web Application Logic - Comprehensive 10 Projects Database with Full Bilingual Support & Interactive Physics
// Tutors: Alfina A & Salma A R

const TRANSLATIONS = {
  ml: {
    nav_home: "ഹോം",
    nav_projects: "പ്രോജക്ട് ലാബ്",
    nav_wokwi: "Wokwi ലാബ്",
    nav_videos: "മലയാളം വീഡിയോകൾ",
    nav_kits: "കിറ്റ് & പ്ലാൻ",
    nav_workshops: "ലൈവ് ബാച്ചുകൾ",
    nav_faq: "FAQ",
    nav_games: "Games Zone",
    nav_assessment: "Assessment",
    nav_portal: "Portal Login",
    nav_games: "ഗെയിംസ് സോൺ",
    nav_assessment: "അസസ്സ്മെന്റ്",
    nav_portal: "പോർട്ടൽ ലോഗിൻ",
    nav_buy_kit: "കിറ്റ് വാങ്ങുക (₹399)",
    top_promo: "✨ സ്പെഷ്യൽ ഓഫർ: കേരളത്തിലെ എല്ലാ 14 ജില്ലകളിലേക്കും സൗജന്യ ഹോം ഡെലിവറി! സ്റ്റാർട്ടർ കിറ്റ് വെറും ₹399 മാത്രം!",
    hero_badge: "കേരളത്തിലെ കൊച്ചു ശാസ്ത്രജ്ഞർക്കായി ഒരുക്കിയ ആദ്യ പ്ലാറ്റ്‌ഫോം",
    hero_title_1: "വെറും മൊബൈൽ ഗെയിമിംഗ് മാറ്റി സ്വന്തമായി",
    hero_title_2: "റോബോട്ടുകൾ ഉണ്ടാക്കാം!",
    hero_sub: "കേരളത്തിലെ 2 മുതൽ 6 ക്ലാസ്സ് വരെയുള്ള കുട്ടികൾക്കായി. വീട്ടിലേക്ക് എത്തുന്ന ആർഡ്യുയിനോ സെൻസർ കിറ്റും, മലയാളത്തിലുള്ള എളുപ്പമുള്ള പ്രൊജക്റ്റ് നോട്ടുകളും വീഡിയോകളും വെറും ₹39/മാസത്തിൽ.",
    hero_box_plan: "ഹാർഡ്‌വെയർ സ്റ്റാർട്ടർ ബോക്സ്",
    hero_sub_plan: "മൈക്രോ-സബ്‌സ്‌ക്രിപ്‌ഷൻ",
    hero_btn_projects: "പ്രോജക്റ്റുകൾ കാണുക",
    hero_btn_wokwi: "Wokwi പ്രാക്ടിക്കൽ ലാബ്",
    hero_btn_order: "സ്റ്റാർട്ടർ കിറ്റ് ഓർഡർ ചെയ്യുക (₹399)",
    trust_solderless: "100% സോൾഡറിംഗ് രഹിതം",
    trust_delivery: "കേരളത്തിൽ സൗജന്യ ഡെലിവറി",
    trust_bilingual: "മലയാളം + ഇംഗ്ലീഷ്",
    trust_cert: "ഇന്നൊവേഷൻ സർട്ടിഫിക്കറ്റ്",
    stat_projects: "10+ പ്രൊജക്റ്റുകൾ",
    stat_pricing: "₹39 / മാസം",
    stat_districts: "14 ജില്ലകൾ",
    stat_safe: "100% സുരക്ഷിതം 5V USB",
    roadmap_tag: "ഘട്ടം ഘട്ടമായുള്ള സിലബസ്",
    roadmap_title: "ക്ലാസ്സ് 2 മുതൽ 6 വരെയുള്ള സിലബസ് റോഡ്മാപ്പ്",
    roadmap_sub: "കുട്ടികളുടെ പ്രായത്തിനനുസരിച്ച് ലളിതമായി ഘട്ടം ഘട്ടമായി പഠിക്കാം",
    workshops_tag: "വീക്കെൻഡ് ലൈവ് വർക്ക്‌ഷോപ്പുകൾ • ട്യൂട്ടർമാർ: അൽഫീന എ, സൽമ എ ആർ",
    workshops_title: "ലൈവ് മലയാളം മെന്റർഷിപ്പ് ബാച്ചുകൾ",
    workshops_sub: "കുട്ടികൾക്ക് സംശയങ്ങൾ നേരിട്ട് ചോദിക്കാം! പ്രൊജക്ടുകൾ ചെയ്തിട്ട് ലൈവായി പരീക്ഷിക്കാനുള്ള വീക്കെൻഡ് ലൈവ് ക്ലാസുകൾ നയിക്കുന്നത് അൽഫീന എ, സൽമ എ ആർ എന്നിവരാണ്.",
    cert_section_tag: "ഔദ്യോഗിക അംഗീകാരം & സർട്ടിഫിക്കറ്റ്",
    cert_section_title: "കോഴ്സ് പൂർത്തിയാക്കിയാൽ ലഭിക്കുന്ന ഒഫീഷ്യൽ സർട്ടിഫിക്കറ്റ്",
    cert_section_sub: "ലൈവ് ബാച്ചുകളിലും പ്രൊജക്റ്റുകളിലും പങ്കെടുത്ത് 10 പ്രൊജക്റ്റുകൾ വിജയകരമായി പൂർത്തിയാക്കുന്ന എല്ലാ കൊച്ചു ശാസ്ത്രജ്ഞർക്കും വെരിഫൈഡ് സർട്ടിഫിക്കറ്റ് ലഭിക്കുന്നു.",
    faq_title: "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ (FAQ)",
    order_title: "ഓർഡർ കൺഫർമേഷൻ",
    order_sub: "കേരളത്തിലെ 14 ജില്ലകളിലേക്കും സൗജന്യ ഹോം ഡെലിവറി & WhatsApp സപ്പോർട്ട്",
    btn_download_cert: "സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യുക (Download PNG)",
    btn_print_cert: "പ്രിന്റ് / സേവ് PDF (Print or Save PDF)",
    btn_share_cert: "വാട്സ്ആപ്പിൽ ഷെയർ ചെയ്യുക (Share on WhatsApp)",
    cert_cust_title: "സർട്ടിഫിക്കറ്റ് തയ്യാറാക്കാം (Customizer)",
    cert_verify_title: "സർട്ടിഫിക്കറ്റ് വെരിഫിക്കേഷൻ (Verify Certificate ID)",
    tutor_names: "ട്യൂട്ടർമാർ: അൽഫീന എ, സൽമ എ ആർ"
  },
  en: {
    nav_home: "Home",
    nav_projects: "Project Lab",
    nav_wokwi: "Wokwi Lab",
    nav_videos: "Video Academy",
    nav_kits: "Kits & Plans",
    nav_workshops: "Live Batches",
    nav_faq: "FAQ",
    nav_games: "Games Zone",
    nav_assessment: "Assessment",
    nav_portal: "Portal Login",
    nav_games: "ഗെയിംസ് സോൺ",
    nav_assessment: "അസസ്സ്മെന്റ്",
    nav_portal: "പോർട്ടൽ ലോഗിൻ",
    nav_buy_kit: "Buy Starter Kit (₹399)",
    top_promo: "✨ Special Offer: Free Home Delivery Across All 14 Districts of Kerala! Starter Kit just ₹399!",
    hero_badge: "Kerala's #1 STEM & Robotics Innovation Platform for Kids",
    hero_title_1: "Replace Screen Addiction with Real-World",
    hero_title_2: "Robotics & IoT Gadgets!",
    hero_sub: "Engineered for Class 2 to 6 students across Kerala. Hands-on Arduino hardware starter kit delivered to your doorstep, with simple Malayalam video classes and live mentor support for just ₹39/month.",
    hero_box_plan: "HARDWARE STARTER BOX",
    hero_sub_plan: "MICRO-SUBSCRIPTION",
    hero_btn_projects: "Explore Projects",
    hero_btn_wokwi: "Wokwi Practical Lab",
    hero_btn_order: "Order Starter Box (₹399)",
    trust_solderless: "100% Solderless",
    trust_delivery: "Free Delivery in Kerala",
    trust_bilingual: "Malayalam + English",
    trust_cert: "Innovation Certificate",
    stat_projects: "10+ Projects",
    stat_pricing: "₹39 / Month",
    stat_districts: "14 Districts",
    stat_safe: "100% Safe 5V USB",
    roadmap_tag: "STRUCTURED CURRICULUM",
    roadmap_title: "Class 2 to Class 6 Syllabus Roadmap",
    roadmap_sub: "Structured step-by-step learning progression tailored to each grade level",
    workshops_tag: "WEEKEND LIVE WORKSHOPS • TUTORS: ALFINA A & SALMA A R",
    workshops_title: "Live Mentorship Workshops",
    workshops_sub: "Direct live doubt clearance! Interactive weekend hands-on workshops mentored by Tutors Alfina A and Salma A R.",
    cert_section_tag: "OFFICIAL CREDENTIAL & RECOGNITION",
    cert_section_title: "Official Certificate of Completion & Innovation",
    cert_section_sub: "Every junior innovator who completes the 10 hands-on STEM projects and live workshops receives a verified credential.",
    faq_title: "Frequently Asked Questions (FAQ)",
    order_title: "Quick Checkout & Order Confirmation",
    order_sub: "Free Express Home Delivery Across All 14 Districts of Kerala & WhatsApp Support",
    btn_download_cert: "Download Certificate (PNG Image)",
    btn_print_cert: "Print / Save as PDF",
    btn_share_cert: "Share Certificate on WhatsApp",
    cert_cust_title: "Certificate Studio Customizer",
    cert_verify_title: "Verify Certificate Credential ID",
    tutor_names: "Tutors: Alfina A & Salma A R"
  }
};

const PROJECTS_DATA = {
  1: {
    id: 1,
    title_ml: "പ്രോജക്റ്റ് 1: മാജിക് ഓട്ടോ-നൈറ്റ് ലാമ്പ്",
    title_en: "Project 1: Magic Auto-Night Lamp",
    grade_ml: "ക്ലാസ്സ് 2 - 3 (Junior Starter)",
    grade_en: "Grades 2 - 3 (Junior Starter)",
    icon: "sun",
    desc_ml: "മുറിയിൽ ഇരുട്ടാകുമ്പോൾ തനിയെ കത്തുന്ന മാജിക് ലൈറ്റ് ഉണ്ടാക്കാം!",
    desc_en: "Build an automatic magical night light that turns on when room goes dark!",
    story_ml: "നമ്മുടെ കൊച്ചു മിന്നാമിനുങ്ങിനെ പരിചയപ്പെടാം! പകൽ വെളിച്ചത്തിൽ അവൻ ഉറങ്ങും, ഇരുട്ടായാൽ തിളങ്ങും. നമുക്കും ഒരു മാജിക് ലൈറ്റ് ഉണ്ടാക്കിയാലോ!",
    story_en: "Meet our little glowing firefly! In daylight he sleeps, but when night falls he glows bright. Let's build our own magic lamp!",
    simType: "light",
    sliderConfig: {
      min: 50,
      max: 950,
      step: 10,
      default: 220,
      leftLabel_ml: "🌑 ഇരുട്ട് (50 Lux)",
      leftLabel_en: "🌑 Dark (50 Lux)",
      rightLabel_ml: "വെളിച്ചം (950 Lux) ☀️",
      rightLabel_en: "Daylight (950 Lux) ☀️",
      hint_ml: "സ്ലൈഡർ നീക്കി മുറിയിലെ വെളിച്ചം കൂട്ടി കുറച്ചു നോക്കൂ!",
      hint_en: "Drag slider to change room light from dark to bright!"
    },
    circuitPins: [
      { from: "Arduino 5V", to: "LDR Pin 1", color: "#ef4444", role_en: "+5V DC Power", role_ml: "പവർ സപ്ലൈ (+5V)" },
      { from: "Arduino GND", to: "10K Resistor & LED (-)", color: "#3b82f6", role_en: "0V Ground Return", role_ml: "ഗ്രൗണ്ട് (0V)" },
      { from: "Arduino A0", to: "LDR Signal Junction", color: "#10b981", role_en: "Analog Light Sensor Input", role_ml: "അനലോഗ് ലൈറ്റ് റീഡിംഗ്" },
      { from: "Arduino D13", to: "LED Anode (+)", color: "#eab308", role_en: "Digital Lamp Output", role_ml: "ഡിജിറ്റൽ ലാമ്പ് ഔട്ട്പുട്ട്" }
    ],
    circuitNote_ml: "സുരക്ഷിതമായ 5V USB പവർ • സോൾഡറിംഗ് ആവശ്യമില്ല • ട്യൂട്ടർമാർ: അൽഫീന എ, സൽമ എ ആർ",
    circuitNote_en: "Safe 5V USB Breadboard Circuit • Zero Soldering • Tutors: Alfina A & Salma A R",
    components: [
      { name_ml: "Arduino Uno / Nano Board", name_en: "Arduino Uno / Nano Board", qty: "Qty: 1", icon: "cpu" },
      { name_ml: "LDR (Light Sensor)", name_en: "LDR Light Sensor", qty: "Qty: 1", icon: "sun" },
      { name_ml: "Bright LED (Yellow/White)", name_en: "Bright LED (Yellow/White)", qty: "Qty: 1", icon: "lightbulb" },
      { name_ml: "10K Ohm Resistor", name_en: "10K Ohm Resistor", qty: "Qty: 1", icon: "activity" },
      { name_ml: "Mini Breadboard & Wires", name_en: "Mini Breadboard & Wires", qty: "Qty: 4 Wires", icon: "git-commit" }
    ],
    wires: [
      { from: "ard-5v", to: "ldr-vcc", color: "#ef4444" },
      { from: "ard-gnd", to: "ldr-gnd", color: "#3b82f6" },
      { from: "ard-a0", to: "ldr-out", color: "#10b981" },
      { from: "ard-d13", to: "led-anode", color: "#eab308" },
      { from: "ard-gnd2", to: "led-cathode", color: "#3b82f6" }
    ],
    code: `// Project 1: Magic Auto-Night Lamp (LDR + LED)
// Tutors: Alfina A & Salma A R
const int LDR_PIN = A0;
const int LED_PIN = 13;
const int THRESHOLD = 500;

void setup() {
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
  Serial.println("[System] Magic Night Lamp Initialized!");
}

void loop() {
  int lightVal = analogRead(LDR_PIN);
  Serial.print("LDR Value: ");
  Serial.print(lightVal);

  if (lightVal < THRESHOLD) {
    digitalWrite(LED_PIN, HIGH);
    Serial.println(" -> Dark detected! Lamp ON 💡");
  } else {
    digitalWrite(LED_PIN, LOW);
    Serial.println(" -> Daylight detected! Lamp OFF ☀️");
  }
  delay(1000);
}`
  },

  2: {
    id: 2,
    title_ml: "പ്രോജക്റ്റ് 2: അൾട്രാസോണിക് ഒബ്സ്റ്റാക്കിൾ റഡാർ",
    title_en: "Project 2: Ultrasonic Sonar Obstacle Radar",
    grade_ml: "ക്ലാസ്സ് 4 - 5 (Robo Explorers)",
    grade_en: "Grades 4 - 5 (Robo Explorers)",
    icon: "radio",
    desc_ml: "മുന്നിൽ എന്തെങ്കിലും തടസ്സം വന്നാൽ കണ്ടെത്തി ബസർ മുഴക്കുന്ന സ്മാർട്ട് റഡാർ!",
    desc_en: "Smart radar that detects obstacles ahead and triggers a safety alarm!",
    story_ml: "വവ്വാലുകൾ ഇരുട്ടിൽ പറക്കുന്നത് എങ്ങനെയാണെന്ന് അറിയാമോ? ശബ്ദതരംഗങ്ങൾ ഉപയോഗിച്ച്! അതേ ടെക്നോളജി നമ്മൾ സോണാർ സെൻസറിലൂടെ ചെയ്യുന്നു.",
    story_en: "How do bats fly in the dark? By using ultrasonic sound echoes! We replicate that using the HC-SR04 sonar sensor.",
    simType: "distance",
    sliderConfig: {
      min: 2,
      max: 100,
      step: 1,
      default: 18,
      leftLabel_ml: "⚡ അടുത്ത് (2 cm)",
      leftLabel_en: "⚡ Close (2 cm)",
      rightLabel_ml: "അകലെ (100 cm) 📡",
      rightLabel_en: "Far (100 cm) 📡",
      hint_ml: "സ്ലൈഡർ നീക്കി തടസ്സത്തെ സോണാർ സെൻസറിലേക്ക് അടുപ്പിച്ചു നോക്കൂ!",
      hint_en: "Move slider to bring an obstacle near the sonar sensor!"
    },
    circuitPins: [
      { from: "Arduino 5V", to: "HC-SR04 VCC", color: "#ef4444", role_en: "+5V DC Power", role_ml: "പവർ സപ്ലൈ (+5V)" },
      { from: "Arduino GND", to: "HC-SR04 GND & Buzzer (-)", color: "#3b82f6", role_en: "0V Ground Return", role_ml: "ഗ്രൗണ്ട് (0V)" },
      { from: "Arduino D11", to: "HC-SR04 TRIG", color: "#06b6d4", role_en: "Ultrasonic Sound Pulse Out", role_ml: "ശബ്ദതരംഗ ട്രിഗർ" },
      { from: "Arduino D12", to: "HC-SR04 ECHO", color: "#a855f7", role_en: "Echo Sound Receiver In", role_ml: "എക്കോ റിസീവർ ഇൻപുട്ട്" },
      { from: "Arduino D8", to: "Piezo Buzzer (+)", color: "#eab308", role_en: "Audio Warning Alarm", role_ml: "ബസർ അലാറം ഔട്ട്പുട്ട്" }
    ],
    circuitNote_ml: "വവ്വാലുകളുടെ പ്രതിധ്വനി സാങ്കേതികവിദ്യ സോണാർ സെൻസറിലൂടെ കുട്ടികൾ പഠിക്കുന്നു. ട്യൂട്ടർമാർ: അൽഫീന എ, സൽമ എ ആർ.",
    circuitNote_en: "Kids learn bat echolocation physics using HC-SR04 ultrasonic sound waves. Tutors: Alfina A & Salma A R.",
    components: [
      { name_ml: "Arduino Uno Board", name_en: "Arduino Uno Board", qty: "Qty: 1", icon: "cpu" },
      { name_ml: "HC-SR04 Ultrasonic Sensor", name_en: "HC-SR04 Sonar Sensor", qty: "Qty: 1", icon: "radio" },
      { name_ml: "Piezo Alarm Buzzer", name_en: "Piezo Alarm Buzzer", qty: "Qty: 1", icon: "volume-2" },
      { name_ml: "Jumper Cables", name_en: "Jumper Cables", qty: "Qty: 6 Wires", icon: "git-commit" }
    ],
    wires: [
      { from: "ard-5v", to: "sonar-vcc", color: "#ef4444" },
      { from: "ard-gnd", to: "sonar-gnd", color: "#3b82f6" },
      { from: "ard-d11", to: "sonar-trig", color: "#06b6d4" },
      { from: "ard-d12", to: "sonar-echo", color: "#a855f7" },
      { from: "ard-d8", to: "piezo-pos", color: "#eab308" },
      { from: "ard-gnd2", to: "piezo-neg", color: "#3b82f6" }
    ],
    code: `// Project 2: Ultrasonic Sonar Obstacle Radar
// Tutors: Alfina A & Salma A R
const int TRIG_PIN = 11;
const int ECHO_PIN = 12;
const int BUZZER_PIN = 8;

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  Serial.println("[Radar] Ultrasonic Sonar Online! Tutors: Alfina A & Salma A R");
}

void loop() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH);
  int distanceCm = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distanceCm);
  Serial.println(" cm");

  if (distanceCm < 20 && distanceCm > 0) {
    digitalWrite(BUZZER_PIN, HIGH);
    Serial.println("⚠️ Warning! Obstacle close!");
  } else {
    digitalWrite(BUZZER_PIN, LOW);
  }
  delay(800);
}`
  },

  3: {
    id: 3,
    title_ml: "പ്രോജക്റ്റ് 3: സംസാരിക്കുന്ന ചെടി സെൻസർ",
    title_en: "Project 3: Talking Houseplant Moisture Alert",
    grade_ml: "ക്ലാസ്സ് 2 - 4 (Junior Eco-Tech)",
    grade_en: "Grades 2 - 4 (Junior Eco-Tech)",
    icon: "droplet",
    desc_ml: "ചെടിച്ചട്ടിയിലെ മണ്ണിൽ വെള്ളം കുറയുമ്പോൾ നമ്മളോട് വെള്ളം ചോദിക്കുന്ന സ്മാർട്ട് ഗാഡ്ജറ്റ്!",
    desc_en: "Smart gadget that speaks when soil gets dry to remind kids to water plants!",
    story_ml: "വീട്ടിലെ ചെടികൾക്ക് ദാഹിക്കുമ്പോൾ അവർക്ക് സംസാരിക്കാൻ പറ്റുമോ? നമ്മുടെ സോയിൽ പ്രോബ് വെച്ചാൽ അവർ ഇനി സംസാരിക്കും!",
    story_en: "Houseplants get thirsty too! With our kid-safe soil moisture probe, they can talk to you!",
    simType: "moisture",
    sliderConfig: {
      min: 0,
      max: 100,
      step: 1,
      default: 65,
      leftLabel_ml: "🌵 വരണ്ട മണ്ണ് (0%)",
      leftLabel_en: "🌵 Dry Soil (0%)",
      rightLabel_ml: "നനഞ്ഞ മണ്ണ് (100%) 💧",
      rightLabel_en: "Wet Soil (100%) 💧",
      hint_ml: "സ്ലൈഡർ ഇടത്തേക്ക് നീക്കി മണ്ണ് ഉണക്കി ചെടിയുടെ പ്രതികരണം കാണൂ!",
      hint_en: "Slide left to dry the soil and trigger the thirsty plant alert!"
    },
    circuitPins: [
      { from: "Arduino 5V", to: "Soil Sensor VCC", color: "#ef4444", role_en: "+5V Power Supply", role_ml: "പവർ സപ്ലൈ (+5V)" },
      { from: "Arduino GND", to: "Soil Sensor GND & LED (-)", color: "#3b82f6", role_en: "Ground Return", role_ml: "ഗ്രൗണ്ട് (0V)" },
      { from: "Arduino A0", to: "Soil Sensor Signal Pin", color: "#10b981", role_en: "Analog Moisture Level", role_ml: "അനലോഗ് ഈർപ്പ നില" },
      { from: "Arduino D13", to: "Alert LED Anode (+)", color: "#eab308", role_en: "Thirsty Warning LED", role_ml: "ദാഹ മുന്നറിയിപ്പ് ലൈറ്റ്" }
    ],
    circuitNote_ml: "ചെടിച്ചട്ടിയിലെ ഈർപ്പനില പരിശോധിച്ച് ചെടികളെ സംസാരിപ്പിക്കുന്ന ഇക്കോ പ്രോജക്റ്റ്.",
    circuitNote_en: "Eco-tech project: reads moisture voltage to make houseplants talk to kids.",
    components: [
      { name_ml: "Arduino Uno", name_en: "Arduino Uno", qty: "Qty: 1", icon: "cpu" },
      { name_ml: "Soil Moisture Probe", name_en: "Soil Moisture Probe", qty: "Qty: 1", icon: "droplet" },
      { name_ml: "Piezo Sounder", name_en: "Piezo Sounder", qty: "Qty: 1", icon: "bell" },
      { name_ml: "Green & Red LEDs", name_en: "Green & Red LEDs", qty: "Qty: 2", icon: "lightbulb" }
    ],
    wires: [
      { from: "ard-5v", to: "ldr-vcc", color: "#ef4444" },
      { from: "ard-gnd", to: "ldr-gnd", color: "#3b82f6" },
      { from: "ard-a0", to: "ldr-out", color: "#10b981" },
      { from: "ard-d13", to: "led-anode", color: "#eab308" }
    ],
    code: `// Project 3: Talking Houseplant Moisture Alert
// Tutors: Alfina A & Salma A R
const int SOIL_PIN = A0;
const int ALERT_LED = 13;

void setup() {
  Serial.begin(9600);
  pinMode(ALERT_LED, OUTPUT);
  Serial.println("[Smart Plant] Soil moisture probe active!");
}

void loop() {
  int moisture = analogRead(SOIL_PIN);
  Serial.print("Soil Moisture Level: ");
  Serial.println(moisture);

  if (moisture < 350) {
    digitalWrite(ALERT_LED, HIGH);
    Serial.println("🌱 'Please water me! I am thirsty!'");
  } else {
    digitalWrite(ALERT_LED, LOW);
    Serial.println("🌿 'I am happy and hydrated!'");
  }
  delay(1200);
}`
  },

  4: {
    id: 4,
    title_ml: "പ്രോജക്റ്റ് 4: റോബോട്ടിക് സെർവോ ഫ്ലാപ്പർ & ഹാൻഡ്",
    title_en: "Project 4: Robotic Servo Flapper & Mechanical Arm",
    grade_ml: "ക്ലാസ്സ് 4 - 5 (Robo Explorers)",
    grade_en: "Grades 4 - 5 (Robo Explorers)",
    icon: "hand",
    desc_ml: "മൈക്രോ സെർവോ മോട്ടോർ ഉപയോഗിച്ച് ചലിക്കുന്ന റോബോട്ട് കൈയും വിരലുകളും!",
    desc_en: "Precise 180-degree robotic servo finger that waves and flaps on command!",
    story_ml: "മനുഷ്യന്റെ കൈകൾ വളയുന്നതുപോലെ കൃത്യമായി 180 ഡിഗ്രിയിൽ തിരിയാൻ റോബോട്ടുകൾക്ക് സെർവോ മോട്ടോറുകളാണ് ഉപയോഗിക്കുന്നത്.",
    story_en: "Learn how robotic prosthetic hands mimic biological joints with micro servo motors.",
    simType: "servo",
    sliderConfig: {
      min: 0,
      max: 180,
      step: 1,
      default: 90,
      leftLabel_ml: "0° (തുറന്ന കൈ)",
      leftLabel_en: "0° (Open Palm)",
      rightLabel_ml: "180° (പിടിത്തം) 🦾",
      rightLabel_en: "180° (Full Grip) 🦾",
      hint_ml: "സ്ലൈഡർ നീക്കി റോബോട്ടിക് സെർവോ കൈ 0° മുതൽ 180° വരെ തിരിക്കൂ!",
      hint_en: "Drag slider to steer the robotic servo finger from 0° to 180°!"
    },
    circuitPins: [
      { from: "Arduino 5V", to: "SG90 Servo Red (+)", color: "#ef4444", role_en: "+5V Motor Power", role_ml: "മോട്ടോർ പവർ (+5V)" },
      { from: "Arduino GND", to: "SG90 Servo Brown (-)", color: "#3b82f6", role_en: "0V Ground Return", role_ml: "ഗ്രൗണ്ട് (0V)" },
      { from: "Arduino D11 (PWM)", to: "SG90 Servo Orange (SIG)", color: "#eab308", role_en: "PWM Precision Angle Signal", role_ml: "PWM ആംഗിൾ സിഗ്നൽ" }
    ],
    circuitNote_ml: "റോബോട്ടിക് കൈകൾ ഉണ്ടാക്കാൻ 180 ഡിഗ്രി കൃത്യതയുള്ള SG90 മൈക്രോ സെർവോ.",
    circuitNote_en: "Learn robotics kinematics with 180-degree PWM position control.",
    components: [
      { name_ml: "Arduino Uno", name_en: "Arduino Uno", qty: "Qty: 1", icon: "cpu" },
      { name_ml: "SG90 9g Micro Servo Motor", name_en: "SG90 Micro Servo Motor", qty: "Qty: 1", icon: "activity" },
      { name_ml: "Cardboard Mechanical Finger", name_en: "Cardboard Mechanical Finger", qty: "Qty: 1", icon: "hand" },
      { name_ml: "Jumper Cables", name_en: "Jumper Cables", qty: "Qty: 3 Wires", icon: "git-commit" }
    ],
    wires: [
      { from: "ard-5v", to: "sonar-vcc", color: "#ef4444" },
      { from: "ard-gnd", to: "sonar-gnd", color: "#3b82f6" },
      { from: "ard-d11", to: "sonar-trig", color: "#eab308" }
    ],
    code: `// Project 4: Robotic Servo Flapper & Mechanical Arm
// Tutors: Alfina A & Salma A R
#include <Servo.h>

Servo roboHand;
const int SERVO_PIN = 11;

void setup() {
  Serial.begin(9600);
  roboHand.attach(SERVO_PIN);
  Serial.println("[Servo] Robotic Arm Calibrated (0 to 180 deg).");
}

void loop() {
  Serial.println("-> Flapping to 0 deg (Open Hand)");
  roboHand.write(0);
  delay(1000);

  Serial.println("-> Flapping to 90 deg (Half Grip)");
  roboHand.write(90);
  delay(1000);

  Serial.println("-> Flapping to 180 deg (Closed Fist)");
  roboHand.write(180);
  delay(1000);
}`
  },

  5: {
    id: 5,
    title_ml: "പ്രോജക്റ്റ് 5: സ്മാർട്ട് ഡോർ സെക്യൂരിറ്റി അലാറം",
    title_en: "Project 5: Smart Door Security & Intruder Alarm",
    grade_ml: "ക്ലാസ്സ് 4 - 6 (Junior Innovators)",
    grade_en: "Grades 4 - 6 (Junior Innovators)",
    icon: "shield-alert",
    desc_ml: "ആരെങ്കിലും മുറിയുടെ വാതിൽ തുറക്കുമ്പോൾ മുന്നറിയിപ്പ് നൽകുന്ന സെക്യൂരിറ്റി സിസ്റ്റം!",
    desc_en: "Smart tripwire system that sounds an alert the moment your room door is opened!",
    story_ml: "നിങ്ങളുടെ പഠനമുറിയിൽ അനുവാദമില്ലാതെ ആരും വരാതിരിക്കാൻ ഒരു സ്വന്തം സെക്യൂരിറ്റി ഗാർഡിനെ ഉണ്ടാക്കാം!",
    story_en: "Protect your study room with an automatic infrared/sonar intrusion alarm!",
    simType: "door",
    sliderConfig: {
      min: 0,
      max: 100,
      step: 1,
      default: 10,
      leftLabel_ml: "🚪 അടഞ്ഞു (0 cm)",
      leftLabel_en: "🚪 Closed (0 cm)",
      rightLabel_ml: "തുറന്നു (100 cm) 🚨",
      rightLabel_en: "Wide Open (100 cm) 🚨",
      hint_ml: "സ്ലൈഡർ വലത്തേക്ക് നീക്കി വാതിൽ തുറന്ന് അലാറം പരിശോധിക്കൂ!",
      hint_en: "Slide right to open the door and trigger the intruder siren!"
    },
    circuitPins: [
      { from: "Arduino 5V", to: "Door Sensor Module VCC", color: "#ef4444", role_en: "+5V DC Power", role_ml: "പവർ സപ്ലൈ (+5V)" },
      { from: "Arduino GND", to: "Sensor GND & Siren (-)", color: "#3b82f6", role_en: "0V Ground Return", role_ml: "ഗ്രൗണ്ട് (0V)" },
      { from: "Arduino D11", to: "Door Sensor Signal Out", color: "#06b6d4", role_en: "Intruder Trigger Input", role_ml: "വാതിൽ തുറക്കൽ സെൻസർ" },
      { from: "Arduino D8", to: "Piezo Siren Buzzer (+)", color: "#eab308", role_en: "High-Decibel Siren Output", role_ml: "സൈറൺ അലാറം ഔട്ട്പുട്ട്" },
      { from: "Arduino D13", to: "Red Strobe LED (+)", color: "#ef4444", role_en: "Emergency Visual Strobe", role_ml: "റെഡ് വാണിംഗ് ലൈറ്റ്" }
    ],
    circuitNote_ml: "പഠനമുറി സുരക്ഷിതമാക്കാൻ കുട്ടികൾക്ക് സ്വന്തമായി നിർമ്മിക്കാവുന്ന സെക്യൂരിറ്റി ഗാർഡ്.",
    circuitNote_en: "Study-room intruder security system built by young junior innovators.",
    components: [
      { name_ml: "Arduino Uno", name_en: "Arduino Uno", qty: "Qty: 1", icon: "cpu" },
      { name_ml: "Ultrasonic / Door Sensor", name_en: "Sonar Door Sensor", qty: "Qty: 1", icon: "radio" },
      { name_ml: "Piezo Siren Buzzer", name_en: "Piezo Siren Buzzer", qty: "Qty: 1", icon: "bell" },
      { name_ml: "Red Flashing LED", name_en: "Red Flashing LED", qty: "Qty: 1", icon: "lightbulb" }
    ],
    wires: [
      { from: "ard-5v", to: "sonar-vcc", color: "#ef4444" },
      { from: "ard-gnd", to: "sonar-gnd", color: "#3b82f6" },
      { from: "ard-d11", to: "sonar-trig", color: "#06b6d4" },
      { from: "ard-d8", to: "piezo-pos", color: "#eab308" }
    ],
    code: `// Project 5: Smart Door Security & Intruder Alarm
// Tutors: Alfina A & Salma A R
const int SENSOR_PIN = 11;
const int SIREN_PIN = 8;
const int RED_LED = 13;

void setup() {
  Serial.begin(9600);
  pinMode(SIREN_PIN, OUTPUT);
  pinMode(RED_LED, OUTPUT);
  Serial.println("[Security System] Armed & Guarding Door.");
}

void loop() {
  int intruderDetected = digitalRead(SENSOR_PIN);
  if (intruderDetected == HIGH) {
    digitalWrite(SIREN_PIN, HIGH);
    digitalWrite(RED_LED, HIGH);
    Serial.println("🚨 INTRUDER ALERT! Door opened without PIN!");
  } else {
    digitalWrite(SIREN_PIN, LOW);
    digitalWrite(RED_LED, LOW);
  }
  delay(1000);
}`
  },

  6: {
    id: 6,
    title_ml: "പ്രോജക്റ്റ് 6: കളർ & മ്യൂസിക് പിയാനോ",
    title_en: "Project 6: Musical Color & Light Piano",
    grade_ml: "ക്ലാസ്സ് 2 - 4 (Junior Starters)",
    grade_en: "Grades 2 - 4 (Junior Starters)",
    icon: "music",
    desc_ml: "വിരലമർത്തുമ്പോൾ പാട്ടുപാടുന്ന ബസറും മിന്നുന്ന കളർ ലൈറ്റുകളും!",
    desc_en: "Interactive electronic synthesizer with push keys that play Do-Re-Mi musical notes!",
    story_ml: "സംഗീതവും ശാസ്ത്രവും ഒന്നിക്കുന്ന ഒരിടം! ശബ്ദത്തിന്റെ ഫ്രീക്വൻസികൾ മാറ്റി സംഗീതം ഉണ്ടാക്കാൻ പഠിക്കാം.",
    story_en: "Discover the physics of sound frequencies by generating musical pitch with piezoelectric crystals.",
    simType: "piano",
    sliderConfig: {
      min: 1,
      max: 7,
      step: 1,
      default: 1,
      leftLabel_ml: "കീ 1 (Do • 262Hz)",
      leftLabel_en: "Key 1 (Do • 262Hz)",
      rightLabel_ml: "കീ 7 (Si • 494Hz) 🎵",
      rightLabel_en: "Key 7 (Si • 494Hz) 🎵",
      hint_ml: "1 മുതൽ 7 വരെ സ്ലൈഡ് ചെയ്ത് സംഗീത സ്വരങ്ങളും കളർ ലൈറ്റും പരീക്ഷിക്കൂ!",
      hint_en: "Slide across 1 to 7 to strike piano keys and light up RGB notes!"
    },
    circuitPins: [
      { from: "Arduino 5V", to: "Key Push Button Bus", color: "#ef4444", role_en: "+5V Logic Supply", role_ml: "കീ പവർ ബസ് (+5V)" },
      { from: "Arduino GND", to: "Speaker & RGB Cathode (-)", color: "#3b82f6", role_en: "0V Ground Return", role_ml: "ഗ്രൗണ്ട് (0V)" },
      { from: "Arduino D8", to: "Piezo Speaker (+)", color: "#eab308", role_en: "Tone Frequencies Out (262-494Hz)", role_ml: "സംഗീത സ്വരം ഔട്ട്പുട്ട്" },
      { from: "Arduino D2, D3, D4", to: "Tactile Key Pins", color: "#10b981", role_en: "Note Triggers (Do-Re-Mi)", role_ml: "കീ പ്രസ്സ് ഇൻപുട്ടുകൾ" },
      { from: "Arduino D9, D10", to: "RGB LEDs Anodes", color: "#a855f7", role_en: "Visual Color Glow Sync", role_ml: "കളർ ലൈറ്റ് സിൻക്" }
    ],
    circuitNote_ml: "സംഗീതവും കോഡിംഗും ഒന്നിക്കുന്ന പിയാനോ സിന്തസൈസർ. ട്യൂട്ടർമാർ: അൽഫീന എ, സൽമ എ ആർ.",
    circuitNote_en: "Combines music physics and C++ frequency math in a hands-on keyboard. Tutors: Alfina A & Salma A R.",
    components: [
      { name_ml: "Arduino Uno", name_en: "Arduino Uno", qty: "Qty: 1", icon: "cpu" },
      { name_ml: "Tactile Push Buttons", name_en: "Tactile Push Buttons", qty: "Qty: 3", icon: "square" },
      { name_ml: "Piezo Speaker", name_en: "Piezo Speaker", qty: "Qty: 1", icon: "volume-2" },
      { name_ml: "RGB Color LEDs", name_en: "RGB Color LEDs", qty: "Qty: 3", icon: "sparkles" }
    ],
    wires: [
      { from: "ard-5v", to: "ldr-vcc", color: "#ef4444" },
      { from: "ard-d8", to: "piezo-pos", color: "#eab308" },
      { from: "ard-gnd", to: "piezo-neg", color: "#3b82f6" },
      { from: "ard-d13", to: "led-anode", color: "#10b981" }
    ],
    code: `// Project 6: Musical Color & Light Piano
// Tutors: Alfina A & Salma A R
const int BUZZER = 8;
const int NOTE_C = 262; // Do
const int NOTE_E = 330; // Mi
const int NOTE_G = 392; // Sol

void setup() {
  Serial.begin(9600);
  pinMode(BUZZER, OUTPUT);
  Serial.println("[Piano] 3-Key Synthesizer Ready!");
}

void loop() {
  tone(BUZZER, NOTE_C, 300);
  delay(500);
  tone(BUZZER, NOTE_E, 300);
  delay(500);
  tone(BUZZER, NOTE_G, 300);
  delay(800);
}`
  },

  7: {
    id: 7,
    title_ml: "പ്രോജക്റ്റ് 7: ലേസർ ട്രിപ്പ്-വയർ അലാറം",
    title_en: "Project 7: Laser Tripwire Security System",
    grade_ml: "ക്ലാസ്സ് 4 - 6 (Robo Explorers)",
    grade_en: "Grades 4 - 6 (Robo Explorers)",
    icon: "crosshair",
    desc_ml: "സിനിമകളിൽ കാണുന്നതുപോലെ അദൃശ്യ ലേസർ രശ്മി മുറിഞ്ഞാൽ ശബ്ദമുയരുന്ന ലേസർ സിസ്റ്റം!",
    desc_en: "Movie-style optical security grid that sounds an alarm if the beam is interrupted!",
    story_ml: "മ്യൂസിയങ്ങളിലും ബാങ്കുകളിലും നിധി കാക്കാൻ ഉപയോഗിക്കുന്ന ലേസർ ഗ്രിഡ് ടെക്നോളജി നമ്മൾ ലളിതമായി ഉണ്ടാക്കുന്നു.",
    story_en: "Replicate high-security bank vault tripwires using precision optical sensors.",
    simType: "laser",
    sliderConfig: {
      min: 0,
      max: 100,
      step: 1,
      default: 85,
      leftLabel_ml: "⚡ രശ്മി മുറിഞ്ഞു (0%)",
      leftLabel_en: "⚡ Beam Cut (0%)",
      rightLabel_ml: "ലേസർ കൃത്യം (100%) 🎯",
      rightLabel_en: "Laser Aligned (100%) 🎯",
      hint_ml: "സ്ലൈഡർ ഇടത്തേക്ക് നീക്കി ലേസർ രശ്മി മുറിച്ച് അലാറം കേൾക്കൂ!",
      hint_en: "Slide left to break the laser beam and test the security alarm!"
    },
    circuitPins: [
      { from: "Arduino 5V", to: "Laser Photocell VCC", color: "#ef4444", role_en: "+5V Power Supply", role_ml: "പവർ സപ്ലൈ (+5V)" },
      { from: "Arduino GND", to: "Photocell GND & Siren (-)", color: "#3b82f6", role_en: "0V Ground Return", role_ml: "ഗ്രൗണ്ട് (0V)" },
      { from: "Arduino A0", to: "Optical Receiver Output", color: "#10b981", role_en: "Laser Beam Intensity Input", role_ml: "ലേസർ രശ്മി ഇൻപുട്ട്" },
      { from: "Arduino D8", to: "Perimeter Siren (+)", color: "#eab308", role_en: "Vault Security Siren", role_ml: "പെരിമീറ്റർ സൈറൺ" }
    ],
    circuitNote_ml: "ബാങ്ക് ലോക്കറുകളിൽ ഉപയോഗിക്കുന്ന ഒപ്റ്റിക്കൽ സെക്യൂരിറ്റി ഗ്രിഡ് സിസ്റ്റം.",
    circuitNote_en: "Replicates high-security bank vault tripwires using precision optical sensing.",
    components: [
      { name_ml: "Arduino Uno", name_en: "Arduino Uno", qty: "Qty: 1", icon: "cpu" },
      { name_ml: "Optical Light Receiver", name_en: "Optical Light Receiver", qty: "Qty: 1", icon: "sun" },
      { name_ml: "Siren Alarm", name_en: "Siren Alarm", qty: "Qty: 1", icon: "bell" },
      { name_ml: "Mirror & Mounts", name_en: "Mirror & Mounts", qty: "Qty: 1 Set", icon: "shield" }
    ],
    wires: [
      { from: "ard-5v", to: "ldr-vcc", color: "#ef4444" },
      { from: "ard-a0", to: "ldr-out", color: "#10b981" },
      { from: "ard-gnd", to: "ldr-gnd", color: "#3b82f6" },
      { from: "ard-d8", to: "piezo-pos", color: "#eab308" }
    ],
    code: `// Project 7: Laser Tripwire Security System
// Tutors: Alfina A & Salma A R
const int SENSOR_PIN = A0;
const int SIREN = 8;

void setup() {
  Serial.begin(9600);
  pinMode(SIREN, OUTPUT);
}

void loop() {
  int beamValue = analogRead(SENSOR_PIN);
  if (beamValue < 700) {
    digitalWrite(SIREN, HIGH);
    Serial.println("⚡ BEAM BROKEN! Perimeter breach detected!");
  } else {
    digitalWrite(SIREN, LOW);
  }
  delay(600);
}`
  },

  8: {
    id: 8,
    title_ml: "പ്രോജക്റ്റ് 8: സ്മാർട്ട് റെയിൻ ഡിറ്റക്ടർ & ഓട്ടോ-റൂഫ്",
    title_en: "Project 8: Smart Rain Detector & Auto-Canopy",
    grade_ml: "ക്ലാസ്സ് 3 - 5 (Junior Eco-Tech)",
    grade_en: "Grades 3 - 5 (Junior Eco-Tech)",
    icon: "cloud-rain",
    desc_ml: "മഴ പെയ്യുമ്പോൾ തനിയെ തുണികൾ നനയാതെ മൂടി സംരക്ഷിക്കുന്ന സ്മാർട്ട് റൂഫ്!",
    desc_en: "Automatic rain sensor that drives a servo motor to close a roof canopy when it rains!",
    story_ml: "കേരളത്തിൽ പെട്ടെന്ന് മഴ പെയ്യുമ്പോൾ വീടിന്റെ മുറ്റത്തിട്ട തുണികൾ നനയാതിരിക്കാൻ കൊച്ചു ശാസ്ത്രജ്ഞരുടെ സൂപ്പർ ഐഡിയ!",
    story_en: "A real Kerala monsoon innovation: never let sudden showers soak your laundry again!",
    simType: "rain",
    sliderConfig: {
      min: 0,
      max: 100,
      step: 1,
      default: 15,
      leftLabel_ml: "☀️ തെളിഞ്ഞ വെയിൽ (0%)",
      leftLabel_en: "☀️ Sunny Day (0%)",
      rightLabel_ml: "കനത്ത മഴ (100%) 🌧️",
      rightLabel_en: "Heavy Rain (100%) 🌧️",
      hint_ml: "സ്ലൈഡർ വലത്തേക്ക് നീക്കി മഴ പെയ്യിച്ച് ഓട്ടോ-റൂഫ് അടച്ചു നോക്കൂ!",
      hint_en: "Slide right to simulate rain and watch the motorized canopy close!"
    },
    circuitPins: [
      { from: "Arduino 5V", to: "Rain Board & Servo Red", color: "#ef4444", role_en: "+5V Sensor & Motor Supply", role_ml: "പവർ സപ്ലൈ (+5V)" },
      { from: "Arduino GND", to: "Rain Board & Servo Brown", color: "#3b82f6", role_en: "0V Ground Return", role_ml: "ഗ്രൗണ്ട് (0V)" },
      { from: "Arduino A0", to: "Raindrop Sensor Analog", color: "#10b981", role_en: "Rain Water Conduction Level", role_ml: "മഴവെള്ള അളവ് റീഡിംഗ്" },
      { from: "Arduino D11 (PWM)", to: "Roof Servo Orange Pin", color: "#eab308", role_en: "Motorized Canopy Actuator", role_ml: "ഓട്ടോ-റൂഫ് സെർവോ മോട്ടോർ" }
    ],
    circuitNote_ml: "കേരളത്തിലെ മഴക്കാലത്ത് വീടിന്റെ മുറ്റത്തെ തുണികൾ നനയാതിരിക്കാൻ കൊച്ചു ശാസ്ത്രജ്ഞരുടെ കണ്ടുപിടുത്തം.",
    circuitNote_en: "A real Kerala monsoon innovation: never let sudden showers soak laundry again!",
    components: [
      { name_ml: "Arduino Uno", name_en: "Arduino Uno", qty: "Qty: 1", icon: "cpu" },
      { name_ml: "Raindrop Sensor Board", name_en: "Raindrop Sensor Plate", qty: "Qty: 1", icon: "cloud-rain" },
      { name_ml: "SG90 Servo Motor (Roof)", name_en: "SG90 Servo Motor", qty: "Qty: 1", icon: "activity" },
      { name_ml: "Alert Buzzer", name_en: "Alert Buzzer", qty: "Qty: 1", icon: "bell" }
    ],
    wires: [
      { from: "ard-5v", to: "ldr-vcc", color: "#ef4444" },
      { from: "ard-a0", to: "ldr-out", color: "#10b981" },
      { from: "ard-gnd", to: "ldr-gnd", color: "#3b82f6" },
      { from: "ard-d11", to: "sonar-trig", color: "#eab308" }
    ],
    code: `// Project 8: Smart Rain Detector & Auto-Canopy
// Tutors: Alfina A & Salma A R
#include <Servo.h>

Servo roofServo;
const int RAIN_PIN = A0;

void setup() {
  Serial.begin(9600);
  roofServo.attach(11);
}

void loop() {
  int rainVal = analogRead(RAIN_PIN);
  if (rainVal < 600) {
    roofServo.write(180); // Close Canopy
    Serial.println("🌧️ Rain Detected! Closing roof!");
  } else {
    roofServo.write(0); // Open Canopy
  }
  delay(1000);
}`
  },

  9: {
    id: 9,
    title_ml: "പ്രോജക്റ്റ് 9: സ്മാർട്ട് ഫയർ & ഹീറ്റ് അലർട്ട്",
    title_en: "Project 9: Smart Fire & Thermal Safety Alert",
    grade_ml: "ക്ലാസ്സ് 4 - 6 (Junior Innovators)",
    grade_en: "Grades 4 - 6 (Junior Innovators)",
    icon: "flame",
    desc_ml: "തീപ്പിടുത്തമോ അമിത ചൂടോ ഉണ്ടായാൽ ഉടനടി ബസറും ലൈറ്റും തെളിയിക്കുന്ന സുരക്ഷാ ഉപകരണം!",
    desc_en: "Life-saving thermal and optical fire sensor that warns families before smoke spreads!",
    story_ml: "വീടുകളിലും അടുക്കളകളിലും അപകടങ്ങൾ ഒഴിവാക്കാൻ കൊച്ചുകുട്ടികൾ ഉണ്ടാക്കുന്ന ലൈഫ്-സേവിംഗ് പ്രൊജക്റ്റ്.",
    story_en: "Understand industrial safety systems by wiring a real optical infrared flame receiver.",
    simType: "fire",
    sliderConfig: {
      min: 20,
      max: 120,
      step: 1,
      default: 30,
      leftLabel_ml: "❄️ 20°C (സാധാരണ)",
      leftLabel_en: "❄️ 20°C (Normal)",
      rightLabel_ml: "120°C (തീപിടുത്തം) 🔥",
      rightLabel_en: "120°C (Fire Hazard) 🔥",
      hint_ml: "സ്ലൈഡർ വലത്തേക്ക് നീക്കി ചൂട് കൂട്ടി ഫയർ അലാറം ടെസ്റ്റ് ചെയ്യൂ!",
      hint_en: "Slide right to elevate temperature and trigger the thermal siren!"
    },
    circuitPins: [
      { from: "Arduino 5V", to: "Flame Sensor VCC", color: "#ef4444", role_en: "+5V DC Module Power", role_ml: "പവർ സപ്ലൈ (+5V)" },
      { from: "Arduino GND", to: "Sensor GND & Siren (-)", color: "#3b82f6", role_en: "0V Ground Return", role_ml: "ഗ്രൗണ്ട് (0V)" },
      { from: "Arduino D12", to: "Flame Infrared Sensor DO", color: "#eab308", role_en: "Optical Flame Detection In", role_ml: "തീപ്പിടുത്ത സെൻസർ ഡിജിറ്റൽ" },
      { from: "Arduino D8", to: "High-Pitch Siren (+)", color: "#ef4444", role_en: "Emergency Sound Evacuation", role_ml: "എമർജൻസി സൈറൺ" },
      { from: "Arduino D13", to: "Emergency Strobe LED (+)", color: "#ef4444", role_en: "Flashing Visual Hazard Light", role_ml: "അപായ ഫ്ലാഷ് ലൈറ്റ്" }
    ],
    circuitNote_ml: "വീടുകളിലും അടുക്കളകളിലും അപകടങ്ങൾ ഒഴിവാക്കാൻ കൊച്ചുകുട്ടികൾ ഉണ്ടാക്കുന്ന സുരക്ഷാ ഉപകരണം.",
    circuitNote_en: "Life-saving thermal and optical fire sensor that warns families before smoke spreads.",
    components: [
      { name_ml: "Arduino Uno", name_en: "Arduino Uno", qty: "Qty: 1", icon: "cpu" },
      { name_ml: "Optical Flame Sensor Module", name_en: "Flame Sensor Module", qty: "Qty: 1", icon: "flame" },
      { name_ml: "High Pitch Siren Buzzer", name_en: "High Pitch Buzzer", qty: "Qty: 1", icon: "volume-2" },
      { name_ml: "Emergency Red LED", name_en: "Emergency Red LED", qty: "Qty: 1", icon: "lightbulb" }
    ],
    wires: [
      { from: "ard-5v", to: "ldr-vcc", color: "#ef4444" },
      { from: "ard-gnd", to: "ldr-gnd", color: "#3b82f6" },
      { from: "ard-d12", to: "sonar-echo", color: "#eab308" },
      { from: "ard-d8", to: "piezo-pos", color: "#ef4444" }
    ],
    code: `// Project 9: Smart Fire & Thermal Safety Alert
// Tutors: Alfina A & Salma A R
const int FLAME_PIN = 12;
const int SIREN_PIN = 8;
const int RED_LED = 13;

void setup() {
  Serial.begin(9600);
  pinMode(FLAME_PIN, INPUT);
  pinMode(SIREN_PIN, OUTPUT);
  pinMode(RED_LED, OUTPUT);
}

void loop() {
  int fireDetected = digitalRead(FLAME_PIN);
  if (fireDetected == LOW) {
    digitalWrite(SIREN_PIN, HIGH);
    digitalWrite(RED_LED, HIGH);
    Serial.println("🔥 EMERGENCY! Flame detected!");
  } else {
    digitalWrite(SIREN_PIN, LOW);
    digitalWrite(RED_LED, LOW);
  }
  delay(800);
}`
  },

  10: {
    id: 10,
    title_ml: "പ്രോജക്റ്റ് 10: IoT സ്മാർട്ട് കാർ (Student Showcase)",
    title_en: "Project 10: IoT Autonomous Smart Car (Student Showcase)",
    grade_ml: "ക്ലാസ്സ് 5 - 6 (Junior Innovators)",
    grade_en: "Grades 5 - 6 (Junior Innovators)",
    icon: "car",
    desc_ml: "ഫ്രണ്ട് പേജിലുള്ള കേരളത്തിലെ കൊച്ചു മിടുക്കികൾ നിർമ്മിച്ച വൈഫൈ റോബോട്ടിക് സ്മാർട്ട് കാർ! (ട്യൂട്ടർമാർ: അൽഫീന എ, സൽമ എ ആർ)",
    desc_en: "The Wi-Fi robotic smart car built by young innovators on our front page! (Tutors: Alfina A, Salma A R)",
    story_ml: "ഫ്രണ്ട് പേജിലുള്ള വിദ്യാർത്ഥിനികൾ അൽഫീന എ, സൽമ എ ആർ എന്നിവരുടെ ശിക്ഷണത്തിൽ ഉണ്ടാക്കിയ അഭിമാന പ്രൊജക്റ്റാണിത്! റാസ്പ്ബെറി പൈ, ആർഡ്യുയിനോ, മോട്ടോർ ഡ്രൈവർ, സോണാർ എന്നിവ ഇതിലുണ്ട്.",
    story_en: "The flagship project featured on our homepage, guided by Tutors Alfina A & Salma A R: built with microcontrollers, dual DC motors, WiFi telemetry, and autonomous sonar obstacle avoidance!",
    simType: "car",
    sliderConfig: {
      min: 0,
      max: 100,
      step: 1,
      default: 45,
      leftLabel_ml: "🛑 നിർത്തിയിരിക്കുന്നു (0 cm/s)",
      leftLabel_en: "🛑 Parked (0 cm/s)",
      rightLabel_ml: "പൂർണ്ണ വേഗത (100 cm/s) 🚗",
      rightLabel_en: "Full Speed (100 cm/s) 🚗",
      hint_ml: "സ്ലൈഡർ നീക്കി സ്മാർട്ട് കാറിന്റെ വേഗത കൂട്ടി കുറച്ചു നോക്കൂ! (ട്യൂട്ടർമാർ: അൽഫീന എ, സൽമ എ ആർ)",
      hint_en: "Slide to throttle the dual-motor IoT car! Guided by Tutors Alfina A & Salma A R."
    },
    circuitPins: [
      { from: "Arduino 5V & GND", to: "L298N Motor Driver Logic", color: "#ef4444", role_en: "Logic DC Power & Ground", role_ml: "മോട്ടോർ ഡ്രൈവർ പവർ" },
      { from: "Arduino D5, D6", to: "Motor Left IN1 / IN2", color: "#06b6d4", role_en: "Left Wheel H-Bridge Drive", role_ml: "ഇടത് ചക്രം മോട്ടോർ" },
      { from: "Arduino D9, D10", to: "Motor Right IN3 / IN4", color: "#a855f7", role_en: "Right Wheel H-Bridge Drive", role_ml: "വലത് ചക്രം മോട്ടോർ" },
      { from: "Arduino D11, D12", to: "HC-SR04 Sonar (Trig/Echo)", color: "#10b981", role_en: "Forward Collision Eyes", role_ml: "മുന്നിലെ തടസ്സം തിരിച്ചറിയൽ" },
      { from: "Arduino D2, D3", to: "Wi-Fi Telemetry Module", color: "#eab308", role_en: "Wireless Live Dashboard", role_ml: "വൈഫൈ ലൈവ് കണക്ഷൻ" }
    ],
    circuitNote_ml: "ഫ്രണ്ട് പേജിലുള്ള വിദ്യാർത്ഥിനികൾ അൽഫീന എ, സൽമ എ ആർ എന്നിവരുടെ ശിക്ഷണത്തിൽ നിർമ്മിച്ച അഭിമാന പ്രൊജക്റ്റ്!",
    circuitNote_en: "Featured student flagship: dual DC drive, ultrasonic avoidance, guided by Alfina A & Salma A R!",
    components: [
      { name_ml: "Robotics Chassis + 2 Motors", name_en: "Robotics Chassis + 2 Motors", qty: "Qty: 1 Set", icon: "truck" },
      { name_ml: "L298N Dual Motor Driver", name_en: "L298N Dual Motor Driver", qty: "Qty: 1", icon: "activity" },
      { name_ml: "HC-SR04 Sonar Obstacle Eye", name_en: "HC-SR04 Sonar Eye", qty: "Qty: 1", icon: "radio" },
      { name_ml: "Wi-Fi IoT Module & Battery", name_en: "Wi-Fi IoT Module & 5V Pack", qty: "Qty: 1", icon: "wifi" }
    ],
    wires: [
      { from: "ard-5v", to: "sonar-vcc", color: "#ef4444" },
      { from: "ard-gnd", to: "sonar-gnd", color: "#3b82f6" },
      { from: "ard-d11", to: "sonar-trig", color: "#06b6d4" },
      { from: "ard-d12", to: "sonar-echo", color: "#a855f7" }
    ],
    code: `// Project 10: IoT Autonomous Smart Car
// Tutors: Alfina A & Salma A R - Kerala Junior Innovators
const int MOTOR_LEFT_A = 5;
const int MOTOR_LEFT_B = 6;
const int MOTOR_RIGHT_A = 9;
const int MOTOR_RIGHT_B = 10;
const int TRIG_PIN = 11;
const int ECHO_PIN = 12;

void setup() {
  Serial.begin(9600);
  pinMode(MOTOR_LEFT_A, OUTPUT);
  pinMode(MOTOR_LEFT_B, OUTPUT);
  pinMode(MOTOR_RIGHT_A, OUTPUT);
  pinMode(MOTOR_RIGHT_B, OUTPUT);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.println("[IoT Car] Wi-Fi Telemetry Connected! Tutors: Alfina A & Salma A R");
}

void loop() {
  Serial.println("[Telemetry] Battery: 98% | Speed: 45 cm/s | Wi-Fi: Strong");
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long dist = pulseIn(ECHO_PIN, HIGH) * 0.034 / 2;

  if (dist > 25 || dist == 0) {
    Serial.println("🚗 Path Clear! Cruising Forward.");
    digitalWrite(MOTOR_LEFT_A, HIGH);
    digitalWrite(MOTOR_RIGHT_A, HIGH);
  } else {
    Serial.println("⚠️ Obstacle at " + String(dist) + "cm! Steering Right.");
    digitalWrite(MOTOR_LEFT_A, HIGH);
    digitalWrite(MOTOR_RIGHT_A, LOW);
  }
  delay(800);
}`
  }
};

// Notes for Piano Synthesizer
const PIANO_NOTES = [
  { name: "C (Do)", freq: 262, color: "#ef4444" },
  { name: "D (Re)", freq: 294, color: "#f97316" },
  { name: "E (Mi)", freq: 330, color: "#facc15" },
  { name: "F (Fa)", freq: 349, color: "#10b981" },
  { name: "G (Sol)", freq: 392, color: "#06b6d4" },
  { name: "A (La)", freq: 440, color: "#6366f1" },
  { name: "B (Si)", freq: 494, color: "#a855f7" }
];

// Application State
const state = {
  currentLang: 'ml', // 'ml' or 'en'
  currentTab: 'home',
  selectedProject: 1,
  selectedWireColor: '#ef4444',
  connectedWires: [],
  selectedPin: null,
  isSimRunning: false,
  simInterval: null,
  simTime: 0,
  sensorSliderVal: 220,
  videoPlaying: false,
  videoStep: 1,
  audioMuted: false
};

// DOM Cache
let elements = {};

function initApp() {
  cacheElements();
  attachEventListeners();
  renderProject(1);
  setupWokwiPreset(1);
  updateLanguageUI();
}

function cacheElements() {
  elements = {
    tabs: document.querySelectorAll('.nav-tab'),
    sections: document.querySelectorAll('.content-section'),
    langBtns: document.querySelectorAll('.lang-btn'),
    orderModal: document.getElementById('orderModal'),
    projectPresetSelect: document.getElementById('projectPresetSelect'),
    wireCountBadge: document.getElementById('wireCountBadge'),
    wireStatusText: document.getElementById('wireStatusText'),
    codeEditorArea: document.getElementById('codeEditorArea'),
    serialLogBox: document.getElementById('serialLogBox'),
    btnUploadRun: document.getElementById('btnUploadRun'),
    btnStopRun: document.getElementById('btnStopRun'),
    btnClearWires: document.getElementById('btnClearWires'),
    btnAutoWire: document.getElementById('btnAutoWire'),
    wireSvg: document.getElementById('wireSvg'),
    lightSlider: document.getElementById('lightSlider'),
    lightValDisplay: document.getElementById('lightValDisplay'),
    lightStatusBadge: document.getElementById('lightStatusBadge'),
    virtualBulb: document.getElementById('virtualBulb'),
    videoPlayBtn: document.getElementById('videoPlayBtn'),
    videoCenterPlay: document.getElementById('videoCenterPlay'),
    videoProgressBar: document.getElementById('videoProgressBar'),
    videoTimeDisplay: document.getElementById('videoTimeDisplay'),
    audioVoiceToggle: document.getElementById('audioVoiceToggle')
  };
}

// Tab Navigation
function switchTab(tabName) {
  state.currentTab = tabName;
  const tabs = (elements && elements.tabs && elements.tabs.length) ? elements.tabs : document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    if (tab.getAttribute('data-tab') === tabName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const sections = (elements && elements.sections && elements.sections.length) ? elements.sections : document.querySelectorAll('.content-section');
  sections.forEach(sec => {
    if (sec.id === `section-${tabName}`) {
      sec.classList.remove('hidden');
    } else {
      sec.classList.add('hidden');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) lucide.createIcons();
}
window.switchTab = switchTab;

// Circuit Connection Renderer for Project Lab
function renderCircuitDiagram(p, isEn) {
  const container = document.getElementById('projectCircuitContent');
  if (!container) return;

  const pinsHtml = (p.circuitPins || []).map(cp => `
    <div class="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-white/[0.05] hover:border-indigo-500/40 transition">
      <div class="flex items-center space-x-2.5">
        <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" style="background-color: ${cp.color}; box-shadow: 0 0 8px ${cp.color}80;"></span>
        <span class="font-bold text-amber-300 font-code text-xs">${cp.from}</span>
        <span class="text-slate-500">➔</span>
        <span class="font-semibold text-slate-200 text-xs">${cp.to}</span>
      </div>
      <div class="text-[11px] text-cyan-300 font-sans hidden sm:block">
        ${isEn ? cp.role_en : cp.role_ml}
      </div>
    </div>
  `).join('');

  const noteText = isEn ? (p.circuitNote_en || "") : (p.circuitNote_ml || "");

  container.innerHTML = `
    <div class="flex items-center justify-between pb-2 border-b border-white/[0.08]">
      <div class="flex items-center space-x-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="font-bold text-white text-xs">${isEn ? 'Breadboard Wiring Map' : 'ബ്രെഡ്ബോർഡ് വയറിംഗ് മാപ്പ്'}</span>
      </div>
      <span class="text-[11px] text-slate-400 font-sans font-medium">${isEn ? 'Tutors: Alfina A & Salma A R' : 'ട്യൂട്ടർമാർ: അൽഫീന എ, സൽമ എ ആർ'}</span>
    </div>
    <div class="space-y-1.5 pt-1">
      ${pinsHtml}
    </div>
    ${noteText ? `
      <div class="pt-2 text-[11px] text-slate-400 font-sans italic flex items-center space-x-1.5 border-t border-white/[0.05]">
        <i data-lucide="info" class="w-3.5 h-3.5 text-cyan-400 flex-shrink-0"></i>
        <span>${noteText}</span>
      </div>
    ` : ''}
  `;

  if (window.lucide) lucide.createIcons();
}

// Project Lab Switcher (P1 to P10)
function renderProject(projectId) {
  const p = PROJECTS_DATA[projectId] || PROJECTS_DATA[1];
  state.selectedProject = projectId;
  const isEn = state.currentLang === 'en';

  // Update pill styles
  document.querySelectorAll('.p-pill').forEach(btn => {
    const pId = parseInt(btn.getAttribute('data-project'));
    if (pId === projectId) {
      btn.className = "p-pill px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-md shadow-indigo-500/30 border border-indigo-400 whitespace-nowrap transform scale-105 transition";
    } else {
      btn.className = "p-pill px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60 whitespace-nowrap transition";
    }
  });

  const pTitle = document.getElementById('projectTitle');
  const pDesc = document.getElementById('projectDesc');
  const pGrade = document.getElementById('projectGrade');
  const pStory = document.getElementById('projectStory');
  const pCompGrid = document.getElementById('projectComponentsGrid');

  if (pTitle) pTitle.textContent = isEn ? p.title_en : p.title_ml;
  if (pDesc) pDesc.textContent = isEn ? p.desc_en : p.desc_ml;
  if (pGrade) pGrade.textContent = isEn ? p.grade_en : p.grade_ml;
  if (pStory) pStory.textContent = isEn ? p.story_en : p.story_ml;

  if (pCompGrid) {
    pCompGrid.innerHTML = p.components.map(c => `
      <div class="glass-panel rounded-xl p-3 flex items-center space-x-3 border border-white/[0.06]">
        <div class="w-10 h-10 rounded-lg bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
          <i data-lucide="${c.icon}" class="w-5 h-5"></i>
        </div>
        <div>
          <div class="text-[11px] text-slate-400 font-medium">${c.qty}</div>
          <div class="text-xs font-semibold text-slate-200">${isEn ? c.name_en : c.name_ml}</div>
        </div>
      </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
  }

  // Render Circuit Diagram for this project
  renderCircuitDiagram(p, isEn);

  // Configure the slider range & labels for this project
  const cfg = p.sliderConfig || {
    min: 0,
    max: 100,
    step: 1,
    default: 50,
    leftLabel_ml: "കുറവ്",
    leftLabel_en: "Low",
    rightLabel_ml: "കൂടുതൽ",
    rightLabel_en: "High",
    hint_ml: "സ്ലൈഡർ നീക്കി പരീക്ഷിക്കൂ!",
    hint_en: "Adjust slider to test!"
  };

  const slider = elements.lightSlider || document.getElementById('lightSlider');
  if (slider) {
    slider.min = cfg.min;
    slider.max = cfg.max;
    slider.step = cfg.step || 1;
    slider.value = cfg.default;
    state.sensorSliderVal = cfg.default;
  }

  const leftLabelEl = document.getElementById('simSliderLeftLabel');
  const rightLabelEl = document.getElementById('simSliderRightLabel');
  const hintEl = document.getElementById('simSliderHint');

  if (leftLabelEl) leftLabelEl.textContent = isEn ? cfg.leftLabel_en : cfg.leftLabel_ml;
  if (rightLabelEl) rightLabelEl.textContent = isEn ? cfg.rightLabel_en : cfg.rightLabel_ml;
  if (hintEl) hintEl.textContent = isEn ? cfg.hint_en : cfg.hint_ml;

  // Update simulator UI labels & display for this project
  updateSimulationPhysics(state.sensorSliderVal);

  // Sync Wokwi dropdown
  if (elements.projectPresetSelect) {
    elements.projectPresetSelect.value = projectId;
  }
}

// REALTIME MULTI-PROJECT SENSOR SIMULATOR (P1 to P10!)
function updateSimulationPhysics(val) {
  state.sensorSliderVal = val;
  const p = PROJECTS_DATA[state.selectedProject] || PROJECTS_DATA[1];
  const isEn = state.currentLang === 'en';
  const bulbContainer = elements.virtualBulb || document.getElementById('virtualBulb');
  const statusBadge = elements.lightStatusBadge || document.getElementById('lightStatusBadge');
  const valDisplay = elements.lightValDisplay || document.getElementById('lightValDisplay');

  if (!bulbContainer || !statusBadge) return;

  // Reset any specific style background overrides
  bulbContainer.style.backgroundColor = '';

  switch (p.id) {
    case 1: { // Magic Auto-Night Lamp
      if (valDisplay) valDisplay.textContent = `${val} Lux`;
      const isDark = val < 500;
      if (isDark) {
        bulbContainer.innerHTML = `<i data-lucide="lightbulb" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 transition-all duration-300 drop-shadow-[0_0_35px_rgba(250,204,21,0.95)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span> <span>${isEn ? 'Pin D13 LED = HIGH (ON 💡)' : 'Pin D13 LED = HIGH (കത്തുന്നു 💡)'}</span>`;
      } else {
        bulbContainer.innerHTML = `<i data-lucide="lightbulb" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-slate-800 opacity-30 flex items-center justify-center text-slate-500 transition-all duration-300";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-400 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-slate-500"></span> <span>${isEn ? 'Pin D13 LED = LOW (OFF 🌑)' : 'Pin D13 LED = LOW (ഓഫ് 🌑)'}</span>`;
      }
      break;
    }

    case 2: { // Ultrasonic Sonar Obstacle Radar
      if (valDisplay) valDisplay.textContent = `${val} cm`;
      const isClose = val < 20;
      if (isClose) {
        bulbContainer.innerHTML = `<i data-lucide="alert-triangle" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-rose-500 flex items-center justify-center text-white animate-pulse drop-shadow-[0_0_30px_rgba(244,63,94,0.9)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-rose-950/70 border border-rose-500/50 text-rose-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping"></span> <span>${isEn ? `🚨 OBSTACLE DETECTED! (${val}cm) Buzzer Active!` : `🚨 തടസ്സം കണ്ടെത്തി! (${val}cm) ബസർ മുഴങ്ങുന്നു!`}</span>`;
      } else {
        bulbContainer.innerHTML = `<i data-lucide="radio" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> <span>${isEn ? `✅ Safe Distance: ${val}cm (Path Clear)` : `✅ സുരക്ഷിത അകലം: ${val}cm (തടസ്സമില്ല)`}</span>`;
      }
      break;
    }

    case 3: { // Talking Plant Moisture
      if (valDisplay) valDisplay.textContent = `${val}%`;
      const isThirsty = val < 35;
      if (isThirsty) {
        bulbContainer.innerHTML = `<i data-lucide="droplet" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 animate-bounce drop-shadow-[0_0_25px_rgba(245,158,11,0.8)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-amber-950/70 border border-amber-500/50 text-amber-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span> <span>${isEn ? `🌱 'Please water me! Soil is dry at ${val}%'` : `🌱 'എനിക്ക് ദാഹിക്കുന്നു! വെള്ളം ഒഴിക്കൂ (${val}%)'`}</span>`;
      } else {
        bulbContainer.innerHTML = `<i data-lucide="flower" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 drop-shadow-[0_0_25px_rgba(16,185,129,0.8)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> <span>${isEn ? `🌿 'I am happy and hydrated!' (${val}%)` : `🌿 'ചെടി ആരോഗ്യത്തോടെരിക്കുന്നു!' (${val}%)`}</span>`;
      }
      break;
    }

    case 4: { // Robotic Servo Flapper & Arm
      if (valDisplay) valDisplay.textContent = `${val}°`;
      bulbContainer.innerHTML = `<i data-lucide="hand" class="w-12 h-12 stroke-[2.5] transition-transform duration-200" style="transform: rotate(${val - 90}deg);"></i>`;
      bulbContainer.className = "w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white drop-shadow-[0_0_30px_rgba(99,102,241,0.8)]";
      statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-indigo-950/70 border border-indigo-500/50 text-indigo-300 flex items-center space-x-2";
      statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span> <span>${isEn ? `🦾 Servo Position: ${val}° (${val < 60 ? 'Open Flap' : val < 120 ? 'Waving' : 'Gripping'})` : `🦾 സെർവോ ആംഗിൾ: ${val}° (${val < 60 ? 'തുറന്ന കൈ' : val < 120 ? 'വീശുന്നു' : 'പിടിച്ചിരിക്കുന്നു'})`}</span>`;
      break;
    }

    case 5: { // Smart Door Security
      if (valDisplay) valDisplay.textContent = `${val} cm`;
      const isDoorOpen = val > 15;
      if (isDoorOpen) {
        bulbContainer.innerHTML = `<i data-lucide="door-open" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-rose-600 flex items-center justify-center text-white animate-bounce drop-shadow-[0_0_35px_rgba(225,29,72,0.95)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-rose-950/70 border border-rose-500/50 text-rose-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping"></span> <span>${isEn ? `🚨 INTRUDER ALERT! Door opened by ${val}cm! Siren Active!` : `🚨 അപായ മുന്നറിയിപ്പ്! വാതിൽ ${val}cm തുറന്നു! ബസർ സജീവം!`}</span>`;
      } else {
        bulbContainer.innerHTML = `<i data-lucide="shield-check" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.7)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> <span>${isEn ? `🛡️ Door Secured & Locked (Gap: ${val}cm)` : `🛡️ വാതിൽ അടച്ചിരിക്കുന്നു (സുരക്ഷിതം: ${val}cm)`}</span>`;
      }
      break;
    }

    case 6: { // Musical Color Piano
      const noteIdx = Math.min(Math.max(val - 1, 0), PIANO_NOTES.length - 1);
      const note = PIANO_NOTES[noteIdx];
      if (valDisplay) valDisplay.textContent = `${note.name} (${note.freq}Hz)`;
      bulbContainer.innerHTML = `<i data-lucide="music" class="w-12 h-12 stroke-[2.5]"></i>`;
      bulbContainer.style.backgroundColor = note.color;
      bulbContainer.className = "w-20 h-20 rounded-full flex items-center justify-center text-slate-950 drop-shadow-[0_0_35px_rgba(255,255,255,0.7)]";
      statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-indigo-950/70 border border-indigo-500/50 text-indigo-300 flex items-center space-x-2";
      statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span> <span>${isEn ? `🎵 Playing Note: ${note.name} @ ${note.freq}Hz (RGB LED Active)` : `🎵 നോട്ട്: ${note.name} (${note.freq}Hz) കളർ ലൈറ്റ് കത്തുന്നു!`}</span>`;
      break;
    }

    case 7: { // Laser Tripwire
      if (valDisplay) valDisplay.textContent = `${val}%`;
      const isBeamBroken = val < 50;
      if (isBeamBroken) {
        bulbContainer.innerHTML = `<i data-lucide="alert-octagon" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-rose-600 flex items-center justify-center text-white animate-pulse drop-shadow-[0_0_35px_rgba(225,29,72,0.9)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-rose-950/70 border border-rose-500/50 text-rose-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping"></span> <span>${isEn ? `⚡ PERIMETER BREACH! Laser beam interrupted at ${val}%!` : `⚡ ലേസർ രശ്മി മുറിഞ്ഞു (${val}%)! സൈറൺ മുഴങ്ങുന്നു!`}</span>`;
      } else {
        bulbContainer.innerHTML = `<i data-lucide="crosshair" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> <span>${isEn ? `🟢 Laser Grid Armed: Perimeter Secure (${val}%)` : `🟢 ലേസർ രശ്മി കൃത്യമാണ് (${val}% സുരക്ഷിതം)`}</span>`;
      }
      break;
    }

    case 8: { // Smart Rain Detector
      if (valDisplay) valDisplay.textContent = `${val}%`;
      const isRaining = val > 35;
      if (isRaining) {
        bulbContainer.innerHTML = `<i data-lucide="cloud-rain" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white drop-shadow-[0_0_30px_rgba(37,99,235,0.9)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-blue-950/70 border border-blue-500/50 text-blue-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping"></span> <span>${isEn ? `🌧️ Rain Detected (${val}%)! Closing Auto-Canopy!` : `🌧️ മഴ പെയ്യുന്നു (${val}%)! ഓട്ടോ-റൂഫ് അടയുന്നു!`}</span>`;
      } else {
        bulbContainer.innerHTML = `<i data-lucide="sun" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 drop-shadow-[0_0_25px_rgba(251,191,36,0.8)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> <span>${isEn ? `☀️ Dry Weather (${val}% Moisture) • Canopy Open` : `☀️ തെളിഞ്ഞ കാലാവസ്ഥ (${val}%) • റൂഫ് തുറന്നിരിക്കുന്നു`}</span>`;
      }
      break;
    }

    case 9: { // Smart Fire Alert
      if (valDisplay) valDisplay.textContent = `${val} °C`;
      const isFire = val > 55;
      if (isFire) {
        bulbContainer.innerHTML = `<i data-lucide="flame" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-rose-600 flex items-center justify-center text-white animate-bounce drop-shadow-[0_0_40px_rgba(244,63,94,1)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-rose-950/70 border border-rose-500/50 text-rose-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping"></span> <span>${isEn ? `🔥 FIRE HAZARD! Thermal Level: ${val}°C! Siren Active!` : `🔥 തീപിടുത്ത സാധ്യത! താപനില: ${val}°C! സൈറൺ മുഴങ്ങുന്നു!`}</span>`;
      } else {
        bulbContainer.innerHTML = `<i data-lucide="thermometer" class="w-12 h-12 stroke-[2.5]"></i>`;
        bulbContainer.className = "w-20 h-20 rounded-full bg-cyan-600 flex items-center justify-center text-white drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]";
        statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 flex items-center space-x-2";
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> <span>${isEn ? `✅ Temperature Normal: ${val}°C (Safe)` : `✅ താപനില സാധാരണ നിലയിൽ: ${val}°C (സുരക്ഷിതം)`}</span>`;
      }
      break;
    }

    case 10: { // IoT Smart Car (Tutors: Alfina A & Salma A R)
      if (valDisplay) valDisplay.textContent = `${val} cm/s`;
      bulbContainer.innerHTML = `<i data-lucide="car" class="w-12 h-12 stroke-[2.5] ${val > 0 ? 'animate-pulse' : ''}"></i>`;
      bulbContainer.className = val > 0 
        ? "w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white drop-shadow-[0_0_35px_rgba(6,182,212,0.9)]" 
        : "w-20 h-20 rounded-full bg-slate-800 opacity-40 flex items-center justify-center text-slate-400";
      statusBadge.className = "px-4 py-2 rounded-full text-xs font-semibold bg-indigo-950/70 border border-indigo-500/50 text-indigo-300 flex items-center space-x-2";
      statusBadge.innerHTML = val > 0 
        ? `<span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span> <span>${isEn ? `🚗 Cruising Forward at ${val} cm/s • Wi-Fi Telemetry Strong` : `🚗 സ്മാർട്ട് കാർ സഞ്ചരിക്കുന്നു (${val} cm/s) • വൈഫൈ ലൈവ്`}</span>`
        : `<span class="w-2.5 h-2.5 rounded-full bg-slate-500"></span> <span>${isEn ? `🛑 Smart Car Parked • System Online` : `🛑 സ്മാർട്ട് കാർ നിർത്തിയിരിക്കുന്നു • സിസ്റ്റം ലൈവ്`}</span>`;
      break;
    }
  }

  if (window.lucide) lucide.createIcons();
}

// Wokwi Workbench Logic
function setupWokwiPreset(projectId) {
  const p = PROJECTS_DATA[projectId] || PROJECTS_DATA[1];
  if (elements.codeEditorArea) {
    elements.codeEditorArea.value = p.code;
  }
  autoWirePreset(projectId);
}

function autoWirePreset(projectId) {
  const p = PROJECTS_DATA[projectId] || PROJECTS_DATA[1];
  state.connectedWires = [...p.wires];
  renderSvgWires();
  appendSerialLog(`[System] Auto-wired ${state.connectedWires.length} connections for '${p.title_en}'. Tutors: Alfina A & Salma A R.`);
}

function clearWires() {
  state.connectedWires = [];
  state.selectedPin = null;
  renderSvgWires();
  appendSerialLog(`[System] All jumper wires cleared.`);
}

function handlePinClick(pinId) {
  if (!state.selectedPin) {
    state.selectedPin = pinId;
    highlightPin(pinId, true);
    appendSerialLog(`[Wiring] Started wire from pin '${pinId}'. Click destination pin.`);
  } else {
    if (state.selectedPin === pinId) {
      highlightPin(pinId, false);
      state.selectedPin = null;
      return;
    }
    state.connectedWires.push({
      from: state.selectedPin,
      to: pinId,
      color: state.selectedWireColor
    });
    highlightPin(state.selectedPin, false);
    appendSerialLog(`[Wiring] Connected '${state.selectedPin}' to '${pinId}'.`);
    state.selectedPin = null;
    renderSvgWires();
  }
}

function highlightPin(pinId, isSelected) {
  const el = document.getElementById(`pin-${pinId}`);
  if (el) {
    if (isSelected) el.classList.add('selected-pin');
    else el.classList.remove('selected-pin');
  }
}

function renderSvgWires() {
  if (!elements.wireSvg) return;
  const svg = elements.wireSvg;
  const svgRect = svg.getBoundingClientRect();

  if (elements.wireCountBadge) {
    elements.wireCountBadge.textContent = `Wires: ${state.connectedWires.length}`;
  }
  if (elements.wireStatusText) {
    elements.wireStatusText.textContent = state.connectedWires.length > 0 
      ? `${state.connectedWires.length} wires connected. Ready to upload!` 
      : `No wires connected. Click pins or use 1-Click Auto-Wire.`;
  }

  let svgContent = '';
  state.connectedWires.forEach((wire, idx) => {
    const fromEl = document.getElementById(`pin-${wire.from}`);
    const toEl = document.getElementById(`pin-${wire.to}`);
    if (fromEl && toEl) {
      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      const x1 = fromRect.left + fromRect.width / 2 - svgRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - svgRect.top;
      const x2 = toRect.left + toRect.width / 2 - svgRect.left;
      const y2 = toRect.top + toRect.height / 2 - svgRect.top;

      const dx = (x2 - x1) * 0.5;
      const dy = (y2 - y1) * 0.5;
      const cx1 = x1 + dx;
      const cy1 = y1 - 30;
      const cx2 = x2 - dx;
      const cy2 = y2 + 30;

      const pathData = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
      svgContent += `
        <path d="${pathData}" 
              stroke="${wire.color}" 
              stroke-width="3.5" 
              fill="none" 
              stroke-linecap="round"
              class="${state.isSimRunning ? 'active-wire' : ''}"
              data-idx="${idx}"
              style="cursor:pointer;"
              onclick="removeWire(${idx})" />
      `;
    }
  });

  svg.innerHTML = svgContent;
}

window.removeWire = function(idx) {
  state.connectedWires.splice(idx, 1);
  renderSvgWires();
  appendSerialLog(`[Wiring] Removed wire #${idx + 1}.`);
};

function appendSerialLog(msg) {
  if (!elements.serialLogBox) return;
  const now = new Date();
  const timeStr = `[${now.toTimeString().split(' ')[0]}]`;
  elements.serialLogBox.value += `${timeStr} ${msg}
`;
  elements.serialLogBox.scrollTop = elements.serialLogBox.scrollHeight;
}

function startSimulation() {
  if (state.isSimRunning) return;
  state.isSimRunning = true;
  if (elements.btnUploadRun) {
    elements.btnUploadRun.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Running...</span>`;
    elements.btnUploadRun.classList.remove('from-emerald-600', 'to-teal-600');
    elements.btnUploadRun.classList.add('from-amber-600', 'to-orange-600');
  }

  appendSerialLog(`[Compiler] Compiling sketch.ino...`);
  appendSerialLog(`[AVR-GCC] Binary Sketch Size: 3,428 bytes (11% storage). Dynamic RAM: 184 bytes.`);
  appendSerialLog(`[Flash] Writing to ATmega328P @ COM4... 100% OK!`);
  appendSerialLog(`[Boot] Arduino setup() executed. Sensors initialized! Tutors: Alfina A & Salma A R`);

  renderSvgWires();

  state.simInterval = setInterval(() => {
    state.simTime += 1;
    const p = PROJECTS_DATA[state.selectedProject] || PROJECTS_DATA[1];
    
    // Simulate real serial telemetry ticks
    if (state.simTime % 2 === 0) {
      if (p.id === 1) {
        appendSerialLog(`[Serial A0] Light = ${state.sensorSliderVal} Lux -> LED: ${state.sensorSliderVal < 500 ? 'HIGH' : 'LOW'}`);
      } else if (p.id === 2) {
        appendSerialLog(`[Sonar Echo] Distance = ${state.sensorSliderVal} cm -> Buzzer: ${state.sensorSliderVal < 20 ? 'ACTIVE 🚨' : 'SILENT'}`);
      } else if (p.id === 10) {
        appendSerialLog(`[IoT Telemetry] Speed: ${state.sensorSliderVal} cm/s | Batt: 98% | Wi-Fi RSSI: -42dBm (Strong)`);
      } else {
        appendSerialLog(`[Sensor Data] Reading: ${state.sensorSliderVal} | State: NORMAL`);
      }
    }
  }, 1000);

  if (window.lucide) lucide.createIcons();
}

function stopSimulation() {
  if (!state.isSimRunning) return;
  state.isSimRunning = false;
  if (state.simInterval) {
    clearInterval(state.simInterval);
    state.simInterval = null;
  }
  if (elements.btnUploadRun) {
    elements.btnUploadRun.innerHTML = `<i data-lucide="zap" class="w-4 h-4 fill-white"></i><span data-ml="അപ്‌ലോഡ് & റൺ" data-en="Upload & Run">${state.currentLang === 'en' ? 'Upload & Run' : 'അപ്‌ലോഡ് & റൺ'}</span>`;
    elements.btnUploadRun.classList.remove('from-amber-600', 'to-orange-600');
    elements.btnUploadRun.classList.add('from-emerald-600', 'to-teal-600');
  }
  appendSerialLog(`[System] Simulation halted by user.`);
  renderSvgWires();
  if (window.lucide) lucide.createIcons();
}

// Modal handling
function openOrderModal(planTitle = "The Kerala Kid-Safe IoT Starter Kit") {
  const modal = elements.orderModal;
  const planInput = document.getElementById('selectedPlanInput');
  if (planInput) planInput.value = planTitle;
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeOrderModal() {
  const modal = elements.orderModal;
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}


// Global Set Language Handler
window.setLanguage = function(lang) {
  state.currentLang = lang;
  updateLanguageUI();
};

// COMPREHENSIVE FULL BILINGUAL LANGUAGE ENGINE (ML / EN)
function updateLanguageUI() {
  const lang = state.currentLang;
  const isEn = lang === 'en';
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['ml'];

  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const bLang = btn.getAttribute('data-lang');
    if (bLang === lang) {
      btn.className = "lang-btn px-2.5 py-1 text-xs rounded-full font-bold bg-indigo-600 text-white shadow-sm transition";
    } else {
      btn.className = "lang-btn px-2.5 py-1 text-xs rounded-full font-medium text-slate-400 hover:text-white transition";
    }
  });

  // Update elements with data-ml-html and data-en-html
  document.querySelectorAll('[data-ml-html]').forEach(el => {
    const html = el.getAttribute(`data-${lang}-html`);
    if (html) el.innerHTML = html;
  });

  // Update elements with data-ml and data-en (skipping if data-ml-html is present)
  document.querySelectorAll('[data-ml]:not([data-ml-html])').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  // Update placeholders
  document.querySelectorAll('[data-ml-placeholder]').forEach(el => {
    const ph = el.getAttribute(`data-${lang}-placeholder`);
    if (ph) el.setAttribute('placeholder', ph);
  });

  // Update specific dictionary elements by data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Refresh current project view in new language
  if (typeof renderProject === 'function') {
    renderProject(state.selectedProject);
  }

  // Refresh active game text if game view is open
  if (typeof updateWireQuestMission === 'function') {
    updateWireQuestMission();
  }

  if (window.lucide) lucide.createIcons();
}

function attachEventListeners() {
  // Navigation tabs
  const tabs = (elements && elements.tabs && elements.tabs.length) ? elements.tabs : document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = tab.getAttribute('data-tab');
      if (tabName) switchTab(tabName);
    });
  });

  // Language buttons (Toggle between Malayalam and English)
  const langBtns = (elements && elements.langBtns && elements.langBtns.length) ? elements.langBtns : document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.currentLang = btn.getAttribute('data-lang');
      updateLanguageUI();
    });
  });

  // Project selector pills (P1 to P10)
  document.querySelectorAll('.p-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = parseInt(btn.getAttribute('data-project'));
      renderProject(pId);
    });
  });

  // Preset selector
  if (elements.projectPresetSelect) {
    elements.projectPresetSelect.addEventListener('change', (e) => {
      const pId = parseInt(e.target.value);
      renderProject(pId);
      setupWokwiPreset(pId);
    });
  }

  // Wire color pickers
  document.querySelectorAll('.wire-color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      document.querySelectorAll('.wire-color-dot').forEach(d => d.classList.remove('ring-2', 'ring-white', 'scale-125'));
      dot.classList.add('ring-2', 'ring-white', 'scale-125');
      state.selectedWireColor = dot.getAttribute('data-color');
    });
  });

  // Wokwi buttons
  if (elements.btnAutoWire) elements.btnAutoWire.addEventListener('click', () => autoWirePreset(state.selectedProject));
  if (elements.btnClearWires) elements.btnClearWires.addEventListener('click', clearWires);
  if (elements.btnUploadRun) elements.btnUploadRun.addEventListener('click', startSimulation);
  if (elements.btnStopRun) elements.btnStopRun.addEventListener('click', stopSimulation);

  // Clear serial button
  const btnClearSerial = document.getElementById('btnClearSerial');
  if (btnClearSerial) {
    btnClearSerial.addEventListener('click', () => {
      if (elements.serialLogBox) elements.serialLogBox.value = '';
    });
  }

  // Reset code button
  const btnResetCode = document.getElementById('btnResetCode');
  if (btnResetCode) {
    btnResetCode.addEventListener('click', () => {
      const p = PROJECTS_DATA[state.selectedProject] || PROJECTS_DATA[1];
      if (elements.codeEditorArea) elements.codeEditorArea.value = p.code;
      appendSerialLog(`[Studio] Code reset to default sketch. Tutors: Alfina A & Salma A R.`);
    });
  }

  // Circuit pins click
  document.querySelectorAll('.circuit-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      const pinId = pin.getAttribute('data-pin');
      handlePinClick(pinId);
    });
  });

  // Light & sensor slider - REALTIME MULTI-PROJECT HANDLER!
  if (elements.lightSlider) {
    elements.lightSlider.addEventListener('input', (e) => {
      updateSimulationPhysics(parseInt(e.target.value));
    });
  }

  // Video player mockup controls
  const toggleVideoPlay = () => {
    state.videoPlaying = !state.videoPlaying;
    const playIcon = document.getElementById('playIconSvg');
    if (state.videoPlaying) {
      if (elements.videoCenterPlay) elements.videoCenterPlay.classList.add('scale-75', 'opacity-0');
      if (playIcon) playIcon.setAttribute('data-lucide', 'pause');
      if (elements.videoProgressBar) elements.videoProgressBar.style.width = '48%';
      if (elements.videoTimeDisplay) elements.videoTimeDisplay.textContent = '01:24 / 03:00';
    } else {
      if (elements.videoCenterPlay) elements.videoCenterPlay.classList.remove('scale-75', 'opacity-0');
      if (playIcon) playIcon.setAttribute('data-lucide', 'play');
    }
    if (window.lucide) lucide.createIcons();
  };

  if (elements.videoPlayBtn) elements.videoPlayBtn.addEventListener('click', toggleVideoPlay);
  if (elements.videoCenterPlay) elements.videoCenterPlay.addEventListener('click', toggleVideoPlay);

  if (elements.audioVoiceToggle) {
    elements.audioVoiceToggle.addEventListener('click', () => {
      state.audioMuted = !state.audioMuted;
      elements.audioVoiceToggle.textContent = state.audioMuted ? "മലയാളം വോയ്സ്: OFF" : "മലയാളം വോയ്സ്: ON";
      elements.audioVoiceToggle.classList.toggle('text-rose-400', state.audioMuted);
    });
  }

  // Video step chapter buttons
  document.querySelectorAll('.video-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.video-step-btn').forEach(b => {
        b.className = "video-step-btn px-3 py-1 rounded text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700";
      });
      btn.className = "video-step-btn px-3 py-1 rounded text-xs font-semibold bg-indigo-600 text-white shadow";
    });
  });

  // Order modal buttons
  document.querySelectorAll('.btn-open-order').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-plan') || "Hello2-IoT Starter Kit";
      openOrderModal(plan);
    });
  });

  const modalCloseBtn = document.getElementById('modalCloseBtn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeOrderModal);

  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const parentName = document.getElementById('inputParentName').value;
      const phone = document.getElementById('inputPhone').value;
      const district = document.getElementById('selectDistrict').value;
      const plan = document.getElementById('selectedPlanInput').value;

      alert(`നന്ദി ${parentName}! നിങ്ങളുടെ ഓർഡർ സ്വീകരിച്ചു.\nജില്ല: ${district}\nപ്ലാൻ: ${plan}\nഞങ്ങളുടെ ട്യൂട്ടർമാരായ അൽഫീന എ, സൽമ എ ആർ എന്നിവരുടെ ടീം ${phone} എന്ന നമ്പറിൽ ഉടൻ വാട്സ്ആപ്പിൽ ബന്ധപ്പെടും.`);
      closeOrderModal();
    });
  }

  // Resize window wire re-render
  window.addEventListener('resize', () => {
    renderSvgWires();
  });

  // Certificate Studio Interactivity
  const inputCertName = document.getElementById('inputCertName');
  const selectCertTrack = document.getElementById('selectCertTrack');
  const inputCertDate = document.getElementById('inputCertDate');
  const certStudentName = document.getElementById('certStudentName');
  const certTrackBadge = document.getElementById('certTrackBadge');
  const certDateDisplay = document.getElementById('certDateDisplay');

  if (inputCertName && certStudentName) {
    inputCertName.addEventListener('input', (e) => {
      certStudentName.textContent = e.target.value.trim() || "Ayesha Fathima";
    });
  }

  if (selectCertTrack && certTrackBadge) {
    selectCertTrack.addEventListener('change', (e) => {
      certTrackBadge.textContent = e.target.value;
    });
  }

  if (inputCertDate && certDateDisplay) {
    inputCertDate.addEventListener('input', (e) => {
      certDateDisplay.textContent = `Issued: ${e.target.value}`;
    });
  }

  // Certificate Print Handler
  const btnPrintCert = document.getElementById('btnPrintCert');
  if (btnPrintCert) {
    btnPrintCert.addEventListener('click', () => {
      window.print();
    });
  }

  // Certificate PNG Download Handler
  const btnDownloadCert = document.getElementById('btnDownloadCert');
  if (btnDownloadCert) {
    btnDownloadCert.addEventListener('click', () => {
      downloadCertificateCanvas();
    });
  }

  // Certificate WhatsApp Share Handler
  const btnShareCert = document.getElementById('btnShareCert');
  if (btnShareCert) {
    btnShareCert.addEventListener('click', () => {
      const name = inputCertName?.value || 'Student';
      const msg = encodeURIComponent(`🎉 I just earned my Junior Robotics & IoT Innovator Certificate from Hello2-IoT Kerala! Mentored by Tutors Alfina A & Salma A R. Student: ${name} (ID: KL-IOT-2026-8891).`);
      window.open(`https://wa.me/?text=${msg}`, '_blank');
    });
  }

  // Certificate Verification Lookup Handler
  const btnVerifyCert = document.getElementById('btnVerifyCert');
  const verifyResult = document.getElementById('verifyResult');
  if (btnVerifyCert && verifyResult) {
    btnVerifyCert.addEventListener('click', () => {
      verifyResult.classList.remove('hidden');
    });
  }
}

// Certificate PNG Canvas Renderer with Tutors Alfina A & Salma A R
function downloadCertificateCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');

  // Background Dark Theme
  const grad = ctx.createLinearGradient(0, 0, 1200, 800);
  grad.addColorStop(0, '#0a1020');
  grad.addColorStop(1, '#050813');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1200, 800);

  // Outer Gold Border
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 14;
  ctx.strokeRect(30, 30, 1140, 740);

  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.strokeRect(45, 45, 1110, 710);

  // Header Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('HELLO2-IOT JUNIOR INNOVATION ACADEMY', 600, 120);

  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('CERTIFICATE OF INNOVATION & EXCELLENCE', 600, 170);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '18px sans-serif';
  ctx.fillText('THIS IS PROUDLY PRESENTED TO', 600, 250);

  // Recipient Name
  const name = document.getElementById('inputCertName')?.value || 'Ayesha Fathima';
  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 48px serif';
  ctx.fillText(name, 600, 330);

  // Underline
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(350, 355);
  ctx.lineTo(850, 355);
  ctx.stroke();

  // Course statement
  const track = document.getElementById('selectCertTrack')?.value || 'Class 5 - 6 (Junior IoT Innovators Track)';
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '22px sans-serif';
  ctx.fillText('For successfully mastering 10 Hands-on STEM & Robotics Projects,', 600, 420);
  ctx.fillText('including Ultrasonic Sonar Radar, Magic Night Lamp & IoT Autonomous Smart Car.', 600, 460);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('[' + track + ']', 600, 520);

  // Signatures & ID - TUTORS: ALFINA A & SALMA A R
  ctx.fillStyle = '#94a3b8';
  ctx.font = '16px monospace';
  const certId = document.getElementById('certIdDisplay')?.textContent || 'ID: KL-IOT-2026-8891';
  ctx.fillText(certId + ' | Verified Credential', 600, 620);

  ctx.font = 'italic 22px serif';
  ctx.fillStyle = '#67e8f9';
  ctx.fillText('Alfina A.', 280, 680);
  ctx.fillText('Salma A. R.', 920, 680);

  ctx.fillStyle = '#64748b';
  ctx.font = '14px sans-serif';
  ctx.fillText('Lead Robotics & IoT Tutor', 280, 710);
  ctx.fillText('Curriculum & Innovation Tutor', 920, 710);

  // Trigger download
  const link = document.createElement('a');
  link.download = `Hello2-IoT_Certificate_${name.replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}


// =========================================================================
// KIDS IOT GAMES ZONE & SCOREBOARD LOGIC
// =========================================================================

let gameState = {
  activeGame: 1,
  userScore: 1450,
  stars: 14,
  wireQuestMissionIdx: 0,
  wireQuestTimer: 30,
  wireQuestInterval: null,
  wireQuestPoints: 450,
  sensorCrisisIdx: 0,
  sensorScore: 520,
  carGameScore: 480,
  currentUser: {
    role: 'student', // 'student' or 'teacher'
    name: 'Ayesha Fathima',
    id: 'KL-STU-2026-88',
    grade: 'Class 5',
    district: 'Ernakulam',
    tutors: 'Alfina A & Salma A R'
  }
};

const WIRE_QUEST_MISSIONS = [
  { text_en: "LDR Light Sensor -> Connect to Analog A0 Pin", text_ml: "LDR ലൈറ്റ് സെൻസർ -> അനലോഗ് A0 പിന്നിലേക്ക് ഘടിപ്പിക്കൂ", correctPin: "A0", desc: "Analog Light Reading" },
  { text_en: "Piezo Buzzer Positive (+) -> Connect to Digital Pin D8", text_ml: "പീസോ ബസർ (+) -> ഡിജിറ്റൽ പിൻ D8 ലേക്ക് ഘടിപ്പിക്കൂ", correctPin: "D11", desc: "Digital Siren Alarm" },
  { text_en: "Robotic SG90 Servo Signal -> Connect to Pin D11 PWM", text_ml: "SG90 സെർവോ സിഗ്നൽ -> പിൻ D11 PWM ലേക്ക് ഘടിപ്പിക്കൂ", correctPin: "D11", desc: "PWM 180° Angle Control" },
  { text_en: "Hardware Power VCC -> Connect to Arduino 5V Pin", text_ml: "ഹാർഡ്‌വെയർ പവർ VCC -> ആർഡ്യുയിനോ 5V പിന്നിലേക്ക് ഘടിപ്പിക്കൂ", correctPin: "5V", desc: "Safe 5V DC Supply" },
  { text_en: "Common Ground -> Connect to Arduino GND Pin", text_ml: "കോമൺ ഗ്രൗണ്ട് -> ആർഡ്യുയിനോ GND പിന്നിലേക്ക് ഘടിപ്പിക്കൂ", correctPin: "GND", desc: "0V Ground Return" }
];

const SENSOR_CRISES = [
  {
    icon: "🌧️",
    title_en: "Sudden Monsoon Cloudburst! Clothes outside will get soaked!",
    title_ml: "കേരളത്തിൽ പെട്ടെന്ന് കനത്ത മഴ പെയ്യുന്നു! തുണികൾ നനയാതിരിക്കാൻ ഓട്ടോ-റൂഫ് അടയ്ക്കണം!",
    subtitle_en: "Which sensor detects raindrops to drive the SG90 motorized canopy?",
    subtitle_ml: "ഏത് സെൻസറാണ് മഴത്തുള്ളികൾ തിരിച്ചറിഞ്ഞ് റൂഫ് അടയ്ക്കേണ്ടത്?",
    correctSensor: "rain"
  },
  {
    icon: "🚪",
    title_en: "Intruder Alert! Study room door is pushed open while you are away!",
    title_ml: "പഠനമുറിയുടെ വാതിൽ ആരോ തുറക്കാൻ ശ്രമിക്കുന്നു! അപായ അലാറം മുഴക്കണം!",
    subtitle_en: "Which sensor measures the distance gap to trigger the intruder siren?",
    subtitle_ml: "വാതിലിന്റെ വിടവ് തിരിച്ചറിഞ്ഞ് സൈറൺ മുഴക്കേണ്ട സെൻസർ ഏതാണ്?",
    correctSensor: "sonar"
  },
  {
    icon: "💡",
    title_en: "Night has fallen! The bedroom goes completely dark!",
    title_ml: "സന്ധ്യയായി, മുറിയിൽ ഇരുട്ട് വ്യാപിക്കുന്നു! മാജിക് ലാമ്പ് കത്തണം!",
    subtitle_en: "Which sensor reads light drop (Lux) to turn on the Pin D13 LED automatically?",
    subtitle_ml: "ഇരുട്ട് തിരിച്ചറിഞ്ഞ് മാജിക് ലാമ്പ് ഓട്ടോമാറ്റിക്കായി കത്തിക്കേണ്ട സെൻസർ ഏതാണ്?",
    correctSensor: "ldr"
  },
  {
    icon: "🔥",
    title_en: "Emergency! Elevated thermal heat and optical flame detected near kitchen!",
    title_ml: "അടുക്കളയിൽ അമിത ചൂടും തീപ്പൊരിയും ഉയരുന്നു! ഉടനടി മുന്നറിയിപ്പ് നൽകണം!",
    subtitle_en: "Which sensor detects infrared flame waves to trigger emergency alarm?",
    subtitle_ml: "ഇൻഫ്രാറെഡ് തരംഗങ്ങൾ വഴി തീപിടുത്തം കണ്ടെത്തുന്ന സെൻസർ ഏതാണ്?",
    correctSensor: "flame"
  }
];

function switchGameTab(tabNum) {
  gameState.activeGame = tabNum;
  document.querySelectorAll('.game-nav-btn').forEach((btn, idx) => {
    if (idx + 1 === tabNum) {
      btn.className = "game-nav-btn active px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center space-x-2 transition";
    } else {
      btn.className = "game-nav-btn px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold bg-slate-900 text-slate-300 hover:text-white border border-white/[0.08] flex items-center space-x-2 transition";
    }
  });

  const views = ['gameView1', 'gameView2', 'gameView3', 'gameViewLeaderboard'];
  views.forEach((vId, idx) => {
    const el = document.getElementById(vId);
    if (el) {
      if (idx + 1 === tabNum) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
  });

  if (tabNum === 1 && !gameState.wireQuestInterval) {
    startWireQuestTimer();
  }
}

function startWireQuestTimer() {
  const timerEl = document.getElementById('wireQuestTimer');
  if (gameState.wireQuestInterval) clearInterval(gameState.wireQuestInterval);

  gameState.wireQuestTimer = 30;
  gameState.wireQuestInterval = setInterval(() => {
    gameState.wireQuestTimer -= 1;
    if (timerEl) timerEl.textContent = `${gameState.wireQuestTimer}s`;
    if (gameState.wireQuestTimer <= 0) {
      clearInterval(gameState.wireQuestInterval);
      gameState.wireQuestInterval = null;
      const fb = document.getElementById('wireQuestFeedback');
      if (fb) fb.innerHTML = `<span class="text-amber-400">⏰ Time up! Great attempt! Starting next round...</span>`;
      setTimeout(() => {
        gameState.wireQuestMissionIdx = (gameState.wireQuestMissionIdx + 1) % WIRE_QUEST_MISSIONS.length;
        updateWireQuestMission();
        startWireQuestTimer();
      }, 1500);
    }
  }, 1000);
}

function updateWireQuestMission() {
  const m = WIRE_QUEST_MISSIONS[gameState.wireQuestMissionIdx];
  const missionText = document.getElementById('wireQuestMissionText');
  const isEn = state.currentLang === 'en';
  if (missionText) missionText.textContent = isEn ? m.text_en : m.text_ml;
}

function handleWireQuestClick(pin) {
  const m = WIRE_QUEST_MISSIONS[gameState.wireQuestMissionIdx];
  const fb = document.getElementById('wireQuestFeedback');
  const scoreEl = document.getElementById('wireQuestScore');
  const liveUserScore = document.getElementById('liveUserScore');

  if (pin === m.correctPin || (m.correctPin === 'D11' && (pin === 'D11' || pin === '5V'))) {
    gameState.wireQuestPoints += 100;
    gameState.userScore += 100;
    if (scoreEl) scoreEl.textContent = gameState.wireQuestPoints;
    if (liveUserScore) liveUserScore.textContent = `${gameState.userScore.toLocaleString()} pts`;
    if (fb) fb.innerHTML = `<span class="text-emerald-400 font-bold">✨ Excellent! Correct pin wired! (+100 Points) ⚡</span>`;
    
    setTimeout(() => {
      gameState.wireQuestMissionIdx = (gameState.wireQuestMissionIdx + 1) % WIRE_QUEST_MISSIONS.length;
      updateWireQuestMission();
      if (fb) fb.textContent = "Click the correct pin to wire the circuit before time runs out!";
    }, 1200);
  } else {
    if (fb) fb.innerHTML = `<span class="text-rose-400 font-bold">❌ Incorrect pin. Hint: Check the circuit pinout role!</span>`;
  }
}

function handleSensorDefense(chosenSensor) {
  const crisis = SENSOR_CRISES[gameState.sensorCrisisIdx];
  const fb = document.getElementById('sensorDefenderFeedback');
  const scoreEl = document.getElementById('sensorDefenderScore');
  const liveUserScore = document.getElementById('liveUserScore');

  if (chosenSensor === crisis.correctSensor) {
    gameState.sensorScore += 120;
    gameState.userScore += 120;
    if (scoreEl) scoreEl.textContent = gameState.sensorScore;
    if (liveUserScore) liveUserScore.textContent = `${gameState.userScore.toLocaleString()} pts`;
    if (fb) fb.innerHTML = `<span class="text-emerald-400 font-bold">🛡️ Heroic Save! Deployed correct IoT sensor! (+120 Points)</span>`;

    setTimeout(() => {
      gameState.sensorCrisisIdx = (gameState.sensorCrisisIdx + 1) % SENSOR_CRISES.length;
      const nextCrisis = SENSOR_CRISES[gameState.sensorCrisisIdx];
      const isEn = state.currentLang === 'en';
      document.getElementById('crisisIcon').textContent = nextCrisis.icon;
      document.getElementById('crisisTitle').textContent = isEn ? nextCrisis.title_en : nextCrisis.title_ml;
      document.getElementById('crisisSubtitle').textContent = isEn ? nextCrisis.subtitle_en : nextCrisis.subtitle_ml;
      if (fb) fb.textContent = "Tap the sensor that detects this environmental change!";
    }, 1500);
  } else {
    if (fb) fb.innerHTML = `<span class="text-rose-400 font-bold">⚠️ Warning! That sensor cannot detect this event. Try again!</span>`;
  }
}

function handleCarLogicChoice(isCorrect) {
  const fb = document.getElementById('carGameFeedback');
  const carSprite = document.getElementById('carSprite');
  const liveUserScore = document.getElementById('liveUserScore');

  if (isCorrect) {
    gameState.carGameScore += 150;
    gameState.userScore += 150;
    if (liveUserScore) liveUserScore.textContent = `${gameState.userScore.toLocaleString()} pts`;

    if (carSprite) {
      carSprite.style.transform = 'translateY(-25px) scale(1.05)';
      setTimeout(() => {
        carSprite.style.transform = 'translateY(0) scale(1)';
      }, 700);
    }

    if (fb) fb.innerHTML = `<span class="text-emerald-400 font-bold">🚗 Brilliant! Smart car executed steerRight() and dodged obstacle! (+150 Pts)</span>`;
  } else {
    if (carSprite) {
      carSprite.style.transform = 'translateX(15px)';
      setTimeout(() => {
        carSprite.style.transform = 'translateX(0)';
      }, 400);
    }
    if (fb) fb.innerHTML = `<span class="text-rose-400 font-bold">💥 Crash alert! Driving full speed into obstacle is unsafe! Choose Option A.</span>`;
  }
}

// =========================================================================
// STUDENT & TEACHER PORTAL ROLE-BASED SYSTEM
// =========================================================================

function switchPortalRole(role) {
  const btnStudent = document.getElementById('btnRoleStudent');
  const btnTeacher = document.getElementById('btnRoleTeacher');
  const studentView = document.getElementById('studentPortalView');
  const teacherView = document.getElementById('teacherPortalView');

  if (role === 'student') {
    if (btnStudent) btnStudent.className = "px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white shadow-md flex items-center space-x-2 transition";
    if (btnTeacher) btnTeacher.className = "px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white flex items-center space-x-2 transition";
    if (studentView) studentView.classList.remove('hidden');
    if (teacherView) teacherView.classList.add('hidden');
  } else {
    if (btnTeacher) btnTeacher.className = "px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 shadow-md flex items-center space-x-2 transition";
    if (btnStudent) btnStudent.className = "px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white flex items-center space-x-2 transition";
    if (teacherView) teacherView.classList.remove('hidden');
    if (studentView) studentView.classList.add('hidden');
  }
}

function quickLogin(preset) {
  switchTab('portal');
  if (preset === 'student') {
    switchPortalRole('student');
    const nameEl = document.getElementById('studentNameDisplay');
    if (nameEl) nameEl.textContent = "Ayesha Fathima";
    gameState.currentUser = { role: 'student', name: 'Ayesha Fathima', id: 'KL-STU-2026-88' };
    alert("👨‍🎓 Logged in as Student: Ayesha Fathima (Class 5 • Ernakulam)\\nTutors: Alfina A & Salma A R");
  } else if (preset === 'teacher_alfina') {
    switchPortalRole('teacher');
    const nameEl = document.getElementById('teacherNameDisplay');
    if (nameEl) nameEl.textContent = "Tutor Alfina A";
    gameState.currentUser = { role: 'teacher', name: 'Alfina A', title: 'Lead Robotics & IoT Tutor' };
    alert("👩‍🏫 Logged in as Teacher: Tutor Alfina A (Lead Robotics & IoT Mentor)");
  } else if (preset === 'teacher_salma') {
    switchPortalRole('teacher');
    const nameEl = document.getElementById('teacherNameDisplay');
    if (nameEl) nameEl.textContent = "Tutor Salma A R";
    gameState.currentUser = { role: 'teacher', name: 'Salma A R', title: 'Curriculum & Innovation Tutor' };
    alert("👩‍🏫 Logged in as Teacher: Tutor Salma A R (Curriculum & Innovation Mentor)");
  }
}

function logoutPortal() {
  alert("You have safely logged out of Hello2-IoT Portal.");
  switchTab('home');
}

function teacherIssueCert(studentName, track) {
  const inputCertName = document.getElementById('inputCertName');
  const certStudentName = document.getElementById('certStudentName');
  const selectCertTrack = document.getElementById('selectCertTrack');
  const certTrackBadge = document.getElementById('certTrackBadge');

  if (inputCertName) inputCertName.value = studentName;
  if (certStudentName) certStudentName.textContent = studentName;
  if (selectCertTrack) selectCertTrack.value = track;
  if (certTrackBadge) certTrackBadge.textContent = track;

  switchTab('workshops');
  setTimeout(() => {
    const certArea = document.getElementById('certificatePrintableArea');
    if (certArea) certArea.scrollIntoView({ behavior: 'smooth' });
    alert(`🎓 Certificate Ready for: ${studentName}!\nTrack: ${track}\nSigned by Tutors: Alfina A & Salma A R.`);
  }, 300);
}

function sendMentorBroadcast() {
  const input = document.getElementById('mentorBroadcastInput');
  if (!input || !input.value.trim()) {
    alert("Please enter an announcement message.");
    return;
  }
  const msg = input.value.trim();
  alert(`📢 Announcement Broadcasted to all 14 Districts:\n"${msg}"\nFrom: Tutors Alfina A & Salma A R`);
  input.value = '';
}

// =========================================================================
// ASSESSMENT ZONE AUTOMATIC GRADING & CERTIFICATE ISSUE FLOW
// =========================================================================

function handleAssessmentSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('assessmentForm');
  const formData = new FormData(form);

  // Correct answers: Q1: A, Q2: A, Q3: A, Q4: A, Q5: A
  let correctCount = 0;
  if (formData.get('q1') === 'A') correctCount += 1;
  if (formData.get('q2') === 'A') correctCount += 1;
  if (formData.get('q3') === 'A') correctCount += 1;
  if (formData.get('q4') === 'A') correctCount += 1;
  if (formData.get('q5') === 'A') correctCount += 1;

  const percentage = (correctCount / 5) * 100;
  const resultCard = document.getElementById('assessmentResultCard');
  const scoreDisplay = document.getElementById('assessmentScoreDisplay');

  if (resultCard && scoreDisplay) {
    resultCard.classList.remove('hidden');
    scoreDisplay.textContent = `Your Score: ${percentage}% (${correctCount}/5 Correct)`;

    if (percentage >= 80) {
      resultCard.className = "glass-panel rounded-3xl p-8 border-2 border-emerald-500/50 text-center space-y-4 shadow-2xl relative overflow-hidden bg-emerald-950/20";
    } else {
      resultCard.className = "glass-panel rounded-3xl p-8 border-2 border-rose-500/50 text-center space-y-4 shadow-2xl relative overflow-hidden bg-rose-950/20";
      scoreDisplay.textContent += " - Passing is 80%. Review videos & retake!";
    }

    resultCard.scrollIntoView({ behavior: 'smooth' });
  }
}

function navigateToCertWithStudent() {
  const inputCertName = document.getElementById('inputCertName');
  const certStudentName = document.getElementById('certStudentName');
  const studentName = (gameState.currentUser && gameState.currentUser.name) ? gameState.currentUser.name : "Ayesha Fathima";

  if (inputCertName) inputCertName.value = studentName;
  if (certStudentName) certStudentName.textContent = studentName;

  switchTab('workshops');
  setTimeout(() => {
    const certArea = document.getElementById('certificatePrintableArea');
    if (certArea) certArea.scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

// Global Exports for all inline onclick handlers
window.switchTab = switchTab;
window.setLanguage = setLanguage;
window.initApp = initApp;
window.switchGameTab = switchGameTab;
window.handleWireQuestClick = handleWireQuestClick;
window.handleSensorDefense = handleSensorDefense;
window.handleCarLogicChoice = handleCarLogicChoice;
window.switchPortalRole = switchPortalRole;
window.quickLogin = quickLogin;
window.logoutPortal = logoutPortal;
window.teacherIssueCert = teacherIssueCert;
window.sendMentorBroadcast = sendMentorBroadcast;
window.handleAssessmentSubmit = handleAssessmentSubmit;
window.navigateToCertWithStudent = navigateToCertWithStudent;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initApp();
    if (window.lucide) lucide.createIcons();
  });
} else {
  initApp();
  if (window.lucide) lucide.createIcons();
}
