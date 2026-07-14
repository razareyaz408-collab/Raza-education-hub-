// ======================================
// RAZA EDUCATION HUB
// HADITH DATABASE
// PART 1 (1-25)
// ======================================

const hadiths = [

{
id:1,
title:"Actions are by Intentions",
arabic:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
english:"Actions are judged by intentions.",
urdu:"اعمال کا دارومدار نیتوں پر ہے۔",
category:"Iman"
},

{
id:2,
title:"Speak Good or Remain Silent",
arabic:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ",
english:"Whoever believes in Allah should speak good or remain silent.",
urdu:"جو اللہ اور آخرت پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے۔",
category:"Character"
},

{
id:3,
title:"Love for Your Brother",
arabic:"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ",
english:"None of you truly believes until he loves for his brother what he loves for himself.",
urdu:"تم میں سے کوئی کامل مومن نہیں جب تک اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
category:"Character"
},

{
id:4,
title:"Cleanliness",
arabic:"الطُّهُورُ شَطْرُ الإِيمَانِ",
english:"Cleanliness is half of faith.",
urdu:"پاکیزگی ایمان کا نصف حصہ ہے۔",
category:"Iman"
},

{
id:5,
title:"Mercy",
arabic:"الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ",
english:"The merciful are shown mercy by the Most Merciful.",
urdu:"رحم کرنے والوں پر رحمن رحم فرماتا ہے۔",
category:"Character"
},

{
id:6,
title:"Prayer",
arabic:"الصَّلَاةُ نُورٌ",
english:"Prayer is light.",
urdu:"نماز نور ہے۔",
category:"Salah"
},

{
id:7,
title:"Smiling is Charity",
arabic:"تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
english:"Your smile for your brother is charity.",
urdu:"اپنے بھائی کے سامنے مسکرانا بھی صدقہ ہے۔",
category:"Character"
},

{
id:8,
title:"Helping Others",
arabic:"وَاللَّهُ فِي عَوْنِ الْعَبْدِ",
english:"Allah helps the servant as long as he helps his brother.",
urdu:"اللہ بندے کی مدد کرتا ہے جب تک بندہ اپنے بھائی کی مدد کرتا ہے۔",
category:"Character"
},

{
id:9,
title:"Seeking Knowledge",
arabic:"طَلَبُ الْعِلْمِ فَرِيضَةٌ",
english:"Seeking knowledge is an obligation.",
urdu:"علم حاصل کرنا فرض ہے۔",
category:"Knowledge"
},

{
id:10,
title:"Best Among People",
arabic:"خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
english:"The best people are those who benefit others.",
urdu:"بہترین لوگ وہ ہیں جو دوسروں کو فائدہ پہنچاتے ہیں۔",
category:"Character"
},

{
id:11,
title:"Truthfulness",
arabic:"عَلَيْكُمْ بِالصِّدْقِ",
english:"Hold fast to truthfulness.",
urdu:"سچائی کو لازم پکڑو۔",
category:"Character"
},

{
id:12,
title:"Avoid Anger",
arabic:"لَا تَغْضَبْ",
english:"Do not become angry.",
urdu:"غصہ نہ کرو۔",
category:"Character"
},

{
id:13,
title:"Respect Parents",
arabic:"رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ",
english:"The pleasure of Allah is in the pleasure of parents.",
urdu:"اللہ کی رضا والدین کی رضا میں ہے۔",
category:"Family"
},

{
id:14,
title:"Brotherhood",
arabic:"الْمُسْلِمُ أَخُو الْمُسْلِمِ",
english:"A Muslim is the brother of another Muslim.",
urdu:"مسلمان مسلمان کا بھائی ہے۔",
category:"Brotherhood"
},

{
id:15,
title:"Good Manners",
arabic:"إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ",
english:"I was sent to perfect good character.",
urdu:"مجھے اچھے اخلاق کی تکمیل کے لیے بھیجا گیا۔",
category:"Character"
},

{
id:16,
title:"Faith and Trust",
arabic:"تَوَكَّلْ عَلَى اللَّهِ",
english:"Put your trust in Allah.",
urdu:"اللہ پر بھروسہ کرو۔",
category:"Iman"
},

{
id:17,
title:"Kindness",
arabic:"إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ",
english:"Allah is kind and loves kindness.",
urdu:"اللہ نرمی کو پسند فرماتا ہے۔",
category:"Character"
},

{
id:18,
title:"Avoid Backbiting",
arabic:"وَلَا يَغْتَبْ بَعْضُكُمْ بَعْضًا",
english:"Do not backbite one another.",
urdu:"ایک دوسرے کی غیبت نہ کرو۔",
category:"Character"
},

{
id:19,
title:"Dua",
arabic:"الدُّعَاءُ مُخُّ الْعِبَادَةِ",
english:"Supplication is the essence of worship.",
urdu:"دعا عبادت کا مغز ہے۔",
category:"Worship"
},

{
id:20,
title:"Fasting",
arabic:"الصِّيَامُ جُنَّةٌ",
english:"Fasting is a shield.",
urdu:"روزہ ڈھال ہے۔",
category:"Ramadan"
},

{
id:21,
title:"Charity",
arabic:"الصَّدَقَةُ بُرْهَانٌ",
english:"Charity is a proof.",
urdu:"صدقہ دلیل ہے۔",
category:"Zakat"
},

{
id:22,
title:"Patience",
arabic:"الصَّبْرُ ضِيَاءٌ",
english:"Patience is illumination.",
urdu:"صبر روشنی ہے۔",
category:"Character"
},

{
id:23,
title:"Remember Allah",
arabic:"مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ",
english:"The one who remembers Allah is alive.",
urdu:"جو اللہ کو یاد کرتا ہے وہ زندہ دل ہے۔",
category:"Dhikr"
},

{
id:24,
title:"Honesty",
arabic:"أَدِّ الْأَمَانَةَ",
english:"Return the trust to the one who entrusted you.",
urdu:"امانت اس کے مالک کو واپس کرو۔",
category:"Character"
},

{
id:25,
title:"Good Deeds",
arabic:"اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ",
english:"Be mindful of Allah wherever you are.",
urdu:"جہاں بھی ہو اللہ سے ڈرتے رہو۔",
category:"Iman"
},

// ======================================
// HADITH DATABASE
// PART 2 (26-50)
// ======================================

{
id:26,
title:"Allah Loves Beauty",
arabic:"إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
english:"Allah is beautiful and loves beauty.",
urdu:"بے شک اللہ خوبصورت ہے اور خوبصورتی کو پسند فرماتا ہے۔",
category:"Character"
},

{
id:27,
title:"Gentleness",
arabic:"إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ",
english:"Gentleness is not found in anything except that it beautifies it.",
urdu:"نرمی جس چیز میں ہو اسے خوبصورت بنا دیتی ہے۔",
category:"Character"
},

{
id:28,
title:"Control Anger",
arabic:"لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ",
english:"The strong person is the one who controls himself when angry.",
urdu:"طاقتور وہ نہیں جو دوسروں کو پچھاڑ دے بلکہ وہ ہے جو غصے کے وقت خود پر قابو رکھے۔",
category:"Character"
},

{
id:29,
title:"Allah's Forgiveness",
arabic:"إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
english:"Allah forgives all sins for those who repent.",
urdu:"اللہ توبہ کرنے والوں کے گناہ معاف فرماتا ہے۔",
category:"Iman"
},

{
id:30,
title:"Remember Allah Often",
arabic:"سَبَقَ الْمُفَرِّدُونَ",
english:"Those who remember Allah frequently have excelled.",
urdu:"کثرت سے اللہ کا ذکر کرنے والے کامیاب ہوگئے۔",
category:"Dhikr"
},

{
id:31,
title:"The Best Charity",
arabic:"أَفْضَلُ الصَّدَقَةِ",
english:"The best charity is what you give while you are in need.",
urdu:"بہترین صدقہ وہ ہے جو ضرورت کے باوجود دیا جائے۔",
category:"Zakat"
},

{
id:32,
title:"Respect Guests",
arabic:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ فَلْيُكْرِمْ ضَيْفَهُ",
english:"Whoever believes in Allah should honor his guest.",
urdu:"جو اللہ پر ایمان رکھتا ہے وہ اپنے مہمان کی عزت کرے۔",
category:"Character"
},

{
id:33,
title:"Good Neighbor",
arabic:"أَحْسِنْ إِلَى الْجَارِ",
english:"Be good to your neighbor.",
urdu:"اپنے پڑوسی کے ساتھ اچھا سلوک کرو۔",
category:"Character"
},

{
id:34,
title:"Love of Allah",
arabic:"مَنْ أَحَبَّ لِقَاءَ اللَّهِ",
english:"Whoever loves to meet Allah, Allah loves to meet him.",
urdu:"جو اللہ سے ملاقات کو پسند کرے اللہ بھی اسے پسند فرماتا ہے۔",
category:"Iman"
},

{
id:35,
title:"Clean Heart",
arabic:"أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً",
english:"There is a piece of flesh in the body; if it is good, the whole body is good.",
urdu:"جسم میں ایک ٹکڑا ہے، اگر وہ درست ہو تو پورا جسم درست ہوتا ہے۔",
category:"Iman"
},

{
id:36,
title:"Helping the Poor",
arabic:"السَّاعِي عَلَى الْأَرْمَلَةِ",
english:"The one who helps the needy is like one who strives in worship.",
urdu:"ضرورت مند کی مدد کرنے والا بڑی فضیلت رکھتا ہے۔",
category:"Character"
},

{
id:37,
title:"Avoid Pride",
arabic:"لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ",
english:"A person with arrogance in his heart will not enter Paradise.",
urdu:"دل میں تکبر رکھنے والا کامیابی نہیں پاتا۔",
category:"Character"
},

{
id:38,
title:"Love for Believers",
arabic:"الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ",
english:"A believer to another believer is like a building.",
urdu:"مومن دوسرے مومن کے لیے عمارت کی طرح ہے۔",
category:"Brotherhood"
},

{
id:39,
title:"Keeping Promises",
arabic:"آيَةُ الْمُنَافِقِ ثَلَاثٌ",
english:"One sign of hypocrisy is breaking promises.",
urdu:"وعدہ خلافی منافقت کی علامتوں میں سے ہے۔",
category:"Character"
},

{
id:40,
title:"Seeking Forgiveness",
arabic:"طُوبَى لِمَنْ وَجَدَ فِي صَحِيفَتِهِ",
english:"Blessed is the one who finds much seeking forgiveness in his record.",
urdu:"خوش نصیب ہے وہ جس کے اعمال نامے میں استغفار زیادہ ہو۔",
category:"Worship"
},

{
id:41,
title:"Good Speech",
arabic:"الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
english:"A good word is charity.",
urdu:"اچھی بات بھی صدقہ ہے۔",
category:"Character"
},

{
id:42,
title:"Mercy on Earth",
arabic:"ارْحَمُوا مَنْ فِي الْأَرْضِ",
english:"Show mercy to those on earth.",
urdu:"زمین والوں پر رحم کرو۔",
category:"Character"
},

{
id:43,
title:"Avoid Waste",
arabic:"كُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا",
english:"Eat and drink but do not waste.",
urdu:"کھاؤ پیو مگر فضول خرچی نہ کرو۔",
category:"Lifestyle"
},

{
id:44,
title:"Modesty",
arabic:"الْحَيَاءُ مِنَ الْإِيمَانِ",
english:"Modesty is part of faith.",
urdu:"حیا ایمان کا حصہ ہے۔",
category:"Iman"
},

{
id:45,
title:"Brotherly Support",
arabic:"الْمُسْلِمُ أَخُو الْمُسْلِمِ",
english:"A Muslim is the brother of another Muslim.",
urdu:"مسلمان مسلمان کا بھائی ہے۔",
category:"Brotherhood"
},

{
id:46,
title:"Gratitude",
arabic:"مَنْ لَا يَشْكُرِ النَّاسَ",
english:"Whoever does not thank people does not thank Allah.",
urdu:"جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا بھی شکر ادا نہیں کرتا۔",
category:"Character"
},

{
id:47,
title:"Trust in Allah",
arabic:"لَوْ أَنَّكُمْ تَوَكَّلُونَ",
english:"Put your trust in Allah.",
urdu:"اللہ پر بھروسہ رکھو۔",
category:"Iman"
},

{
id:48,
title:"Good Intention",
arabic:"نِيَّةُ الْمُؤْمِنِ خَيْرٌ",
english:"The intention of a believer is important.",
urdu:"مومن کی نیت بہت اہم ہے۔",
category:"Iman"
},

{
id:49,
title:"Avoid Envy",
arabic:"إِيَّاكُمْ وَالْحَسَدَ",
english:"Avoid envy.",
urdu:"حسد سے بچو۔",
category:"Character"
},

{
id:50,
title:"Spread Peace",
arabic:"أَفْشُوا السَّلَامَ",
english:"Spread peace among yourselves.",
urdu:"آپس میں سلام کو عام کرو۔",
category:"Character"
},

  // ======================================
// HADITH DATABASE
// PART 3 (51-75)
// ======================================

{
id:51,
title:"Islam is Sincerity",
arabic:"الدِّينُ النَّصِيحَةُ",
english:"The religion is sincerity.",
urdu:"دین خیر خواہی کا نام ہے۔",
category:"Iman"
},

{
id:52,
title:"Allah's Mercy",
arabic:"إِنَّ رَحْمَتِي سَبَقَتْ غَضَبِي",
english:"Allah's mercy surpasses His anger.",
urdu:"اللہ کی رحمت اس کے غضب پر غالب ہے۔",
category:"Iman"
},

{
id:53,
title:"Removing Harm",
arabic:"إِمَاطَةُ الْأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ",
english:"Removing harm from the road is charity.",
urdu:"راستے سے تکلیف دہ چیز ہٹانا صدقہ ہے۔",
category:"Character"
},

{
id:54,
title:"Allah Looks at Hearts",
arabic:"إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ",
english:"Allah does not look at your appearance, but your hearts and deeds.",
urdu:"اللہ تمہاری شکلوں کو نہیں بلکہ دلوں اور اعمال کو دیکھتا ہے۔",
category:"Iman"
},

{
id:55,
title:"Patience in Difficulties",
arabic:"عَجَبًا لِأَمْرِ الْمُؤْمِنِ",
english:"The affair of a believer is amazing; there is good in every situation.",
urdu:"مومن کا معاملہ عجیب ہے، ہر حال میں اس کے لیے خیر ہے۔",
category:"Iman"
},

{
id:56,
title:"Love of the Prophet ﷺ",
arabic:"لَا يُؤْمِنُ أَحَدُكُمْ",
english:"Faith is not complete until the Prophet ﷺ is more beloved than everything else.",
urdu:"ایمان کامل نہیں ہوتا جب تک نبی ﷺ سب سے زیادہ محبوب نہ ہوں۔",
category:"Iman"
},

{
id:57,
title:"Gentle Treatment",
arabic:"مَنْ يُحْرَمِ الرِّفْقَ يُحْرَمِ الْخَيْرَ",
english:"The one deprived of gentleness is deprived of goodness.",
urdu:"جو نرمی سے محروم ہوا وہ خیر سے محروم ہوا۔",
category:"Character"
},

{
id:58,
title:"Visit the Sick",
arabic:"عُودُوا الْمَرِيضَ",
english:"Visit the sick.",
urdu:"بیمار کی عیادت کرو۔",
category:"Character"
},

{
id:59,
title:"Feed Others",
arabic:"أَطْعِمُوا الطَّعَامَ",
english:"Feed people.",
urdu:"لوگوں کو کھانا کھلاؤ۔",
category:"Character"
},

{
id:60,
title:"Spread Salam",
arabic:"السَّلَامُ قَبْلَ الْكَلَامِ",
english:"Spread greetings before speaking.",
urdu:"بات سے پہلے سلام کو عام کرو۔",
category:"Character"
},

{
id:61,
title:"Clean Intentions",
arabic:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
english:"Actions depend on intentions.",
urdu:"اعمال کا دارومدار نیتوں پر ہے۔",
category:"Iman"
},

{
id:62,
title:"Allah Remembers Those Who Remember Him",
arabic:"فَاذْكُرُونِي أَذْكُرْكُمْ",
english:"Remember Allah and He will remember you.",
urdu:"اللہ کو یاد کرو اللہ تمہیں یاد فرمائے گا۔",
category:"Dhikr"
},

{
id:63,
title:"Obedience to Parents",
arabic:"رِضَا اللَّهِ فِي رِضَا الْوَالِدَيْنِ",
english:"Allah's pleasure is connected with parents' pleasure.",
urdu:"اللہ کی رضا والدین کی رضا میں ہے۔",
category:"Family"
},

{
id:64,
title:"Avoid Lying",
arabic:"وَإِيَّاكُمْ وَالْكَذِبَ",
english:"Avoid falsehood.",
urdu:"جھوٹ سے بچو۔",
category:"Character"
},

{
id:65,
title:"Be Humble",
arabic:"مَنْ تَوَاضَعَ لِلَّهِ",
english:"Whoever humbles himself for Allah, Allah raises him.",
urdu:"جو اللہ کے لیے عاجزی اختیار کرتا ہے اللہ اسے بلند فرماتا ہے۔",
category:"Character"
},

{
id:66,
title:"Justice",
arabic:"اتَّقُوا الظُّلْمَ",
english:"Avoid ظلم and be just.",
urdu:"ظلم سے بچو اور انصاف کرو۔",
category:"Character"
},

{
id:67,
title:"Helping a Believer",
arabic:"وَاللَّهُ فِي عَوْنِ الْعَبْدِ",
english:"Allah helps the servant who helps others.",
urdu:"اللہ بندے کی مدد فرماتا ہے جو دوسروں کی مدد کرتا ہے۔",
category:"Character"
},

{
id:68,
title:"Good Neighbor",
arabic:"مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ",
english:"Jibreel kept advising me about the neighbor.",
urdu:"حضرت جبریل علیہ السلام پڑوسی کے بارے میں تاکید فرماتے رہے۔",
category:"Character"
},

{
id:69,
title:"Remember Death",
arabic:"أَكْثِرُوا ذِكْرَ هَادِمِ اللَّذَّاتِ",
english:"Remember often the destroyer of pleasures.",
urdu:"موت کو کثرت سے یاد کرو۔",
category:"Akhirah"
},

{
id:70,
title:"Worldly Life",
arabic:"كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ",
english:"Live in this world as if you are a stranger.",
urdu:"دنیا میں ایسے رہو جیسے مسافر ہو۔",
category:"Akhirah"
},

{
id:71,
title:"Prayer on Time",
arabic:"أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ",
english:"The most beloved deeds to Allah are prayers at their proper times.",
urdu:"اللہ کو سب سے محبوب عمل وقت پر نماز ہے۔",
category:"Salah"
},

{
id:72,
title:"Quran Recitation",
arabic:"خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ",
english:"The best among you are those who learn the Quran and teach it.",
urdu:"تم میں بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔",
category:"Quran"
},

{
id:73,
title:"Fasting Reward",
arabic:"لِلصَّائِمِ فَرْحَتَانِ",
english:"The fasting person has two joys.",
urdu:"روزہ دار کے لیے دو خوشیاں ہیں۔",
category:"Ramadan"
},

{
id:74,
title:"Charity Removes Sins",
arabic:"الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ",
english:"Charity wipes away sins.",
urdu:"صدقہ گناہوں کو مٹاتا ہے۔",
category:"Zakat"
},

{
id:75,
title:"Trustworthiness",
arabic:"لَا إِيمَانَ لِمَنْ لَا أَمَانَةَ لَهُ",
english:"There is no faith for the one who is not trustworthy.",
urdu:"جس میں امانت نہیں اس میں کامل ایمان نہیں۔",
category:"Character"
},

  // ======================================
// HADITH DATABASE
// PART 4 (76-100)
// ======================================

{
id:76,
title:"The Strong Believer",
arabic:"الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ",
english:"The strong believer is better and more beloved to Allah.",
urdu:"طاقتور مومن اللہ کو زیادہ محبوب ہے۔",
category:"Iman"
},

{
id:77,
title:"Avoid Jealousy",
arabic:"لَا تَحَاسَدُوا",
english:"Do not envy one another.",
urdu:"ایک دوسرے سے حسد نہ کرو۔",
category:"Character"
},

{
id:78,
title:"Brotherhood of Muslims",
arabic:"الْمُسْلِمُ أَخُو الْمُسْلِمِ",
english:"A Muslim is the brother of another Muslim.",
urdu:"مسلمان مسلمان کا بھائی ہے۔",
category:"Brotherhood"
},

{
id:79,
title:"Allah Loves Repentance",
arabic:"التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لَا ذَنْبَ لَهُ",
english:"The one who repents from sin is like one who did not sin.",
urdu:"گناہ سے توبہ کرنے والا ایسا ہے جیسے اس نے گناہ کیا ہی نہیں۔",
category:"Iman"
},

{
id:80,
title:"Good Character",
arabic:"أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا",
english:"The most complete believers are those with the best character.",
urdu:"کامل ایمان والے وہ ہیں جن کے اخلاق اچھے ہیں۔",
category:"Character"
},

{
id:81,
title:"Do Not Harm Others",
arabic:"لَا ضَرَرَ وَلَا ضِرَارَ",
english:"Do not cause harm or return harm.",
urdu:"نہ نقصان پہنچاؤ نہ بدلے میں نقصان دو۔",
category:"Character"
},

{
id:82,
title:"Kindness to Family",
arabic:"خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",
english:"The best of you are those who are best to their families.",
urdu:"تم میں بہترین وہ ہیں جو اپنے گھر والوں کے لیے بہترین ہیں۔",
category:"Family"
},

{
id:83,
title:"Honor the Quran",
arabic:"اقْرَؤُوا الْقُرْآنَ",
english:"Recite the Quran.",
urdu:"قرآن کی تلاوت کرو۔",
category:"Quran"
},

{
id:84,
title:"Mosques",
arabic:"أَحَبُّ الْبِلَادِ إِلَى اللَّهِ مَسَاجِدُهَا",
english:"The most beloved places to Allah are the mosques.",
urdu:"اللہ کے نزدیک سب سے محبوب جگہیں مساجد ہیں۔",
category:"Worship"
},

{
id:85,
title:"Good Intention",
arabic:"نِيَّةُ الْمُؤْمِنِ خَيْرٌ مِنْ عَمَلِهِ",
english:"The intention of a believer is important.",
urdu:"مومن کی نیت کی بڑی اہمیت ہے۔",
category:"Iman"
},

{
id:86,
title:"Keep Family Ties",
arabic:"مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ",
english:"Whoever wants blessings in life should maintain family ties.",
urdu:"جو رزق اور عمر میں برکت چاہے وہ صلہ رحمی کرے۔",
category:"Family"
},

{
id:87,
title:"Be Thankful",
arabic:"مَنْ لَا يَشْكُرِ النَّاسَ",
english:"Whoever does not thank people does not thank Allah.",
urdu:"جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا شکر بھی ادا نہیں کرتا۔",
category:"Character"
},

{
id:88,
title:"Avoid Arrogance",
arabic:"الْكِبْرُ بَطَرُ الْحَقِّ",
english:"Arrogance is rejecting the truth.",
urdu:"تکبر حق کو ٹھکرانے کا نام ہے۔",
category:"Character"
},

{
id:89,
title:"Visit Relatives",
arabic:"صِلْ مَنْ قَطَعَكَ",
english:"Maintain ties even with those who cut you off.",
urdu:"جو تم سے تعلق توڑے تم اس سے تعلق جوڑو۔",
category:"Character"
},

{
id:90,
title:"Patience",
arabic:"وَمَنْ يَتَصَبَّرْ يُصَبِّرْهُ اللَّهُ",
english:"Whoever tries to be patient, Allah grants him patience.",
urdu:"جو صبر اختیار کرتا ہے اللہ اسے صبر عطا فرماتا ہے۔",
category:"Character"
},

{
id:91,
title:"Forgiveness",
arabic:"وَلْيَعْفُوا وَلْيَصْفَحُوا",
english:"Forgive and overlook.",
urdu:"معاف کرو اور درگزر کرو۔",
category:"Character"
},

{
id:92,
title:"Seeking Halal",
arabic:"طَلَبُ الْحَلَالِ فَرِيضَةٌ",
english:"Seeking lawful earnings is important.",
urdu:"حلال رزق حاصل کرنا اہم ہے۔",
category:"Lifestyle"
},

{
id:93,
title:"Allah Is Near",
arabic:"وَنَحْنُ أَقْرَبُ إِلَيْهِ",
english:"Allah is near to His servants.",
urdu:"اللہ اپنے بندوں کے قریب ہے۔",
category:"Iman"
},

{
id:94,
title:"Dua is Worship",
arabic:"الدُّعَاءُ هُوَ الْعِبَادَةُ",
english:"Supplication is worship.",
urdu:"دعا عبادت ہے۔",
category:"Worship"
},

{
id:95,
title:"Smile",
arabic:"تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ",
english:"Your smile is charity.",
urdu:"تمہاری مسکراہٹ صدقہ ہے۔",
category:"Character"
},

{
id:96,
title:"Avoid Bad Company",
arabic:"الْمَرْءُ مَعَ مَنْ أَحَبَّ",
english:"A person will be with those whom he loves.",
urdu:"انسان قیامت میں انہی کے ساتھ ہوگا جن سے محبت کرتا ہے۔",
category:"Akhirah"
},

{
id:97,
title:"Give Salam",
arabic:"أَفْشُوا السَّلَامَ بَيْنَكُمْ",
english:"Spread greetings of peace among yourselves.",
urdu:"آپس میں سلام کو عام کرو۔",
category:"Character"
},

{
id:98,
title:"Love for Allah",
arabic:"مَنْ أَحَبَّ لِلَّهِ",
english:"Love for the sake of Allah.",
urdu:"اللہ کے لیے محبت کرو۔",
category:"Iman"
},

{
id:99,
title:"Remember Allah",
arabic:"لَا يَزَالُ لِسَانُكَ رَطْبًا",
english:"Keep your tongue moist with remembrance of Allah.",
urdu:"اپنی زبان کو اللہ کے ذکر سے تر رکھو۔",
category:"Dhikr"
},

{
id:100,
title:"Paradise",
arabic:"الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ",
english:"Paradise is associated with honoring mothers.",
urdu:"ماؤں کی خدمت بڑی فضیلت رکھتی ہے۔",
category:"Family"
}
];
