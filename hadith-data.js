// ======================================
// RAZA EDUCATION HUB
// HADITH DATABASE
// Authentic Hadith Collection
// ======================================

const hadiths = [

{
id:1,
title:"Actions are by Intentions",
arabic:"إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
english:"Actions are judged by intentions.",
urdu:"اعمال کا دارومدار نیتوں پر ہے۔",
category:"Iman",
reference:"Sahih al-Bukhari 1, Sahih Muslim 1907"
},

{
id:2,
title:"Speak Good or Remain Silent",
arabic:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
english:"Whoever believes in Allah and the Last Day should speak good or remain silent.",
urdu:"جو اللہ اور آخرت پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے۔",
category:"Character",
reference:"Sahih al-Bukhari 6018, Sahih Muslim 47"
},

{
id:3,
title:"Love for Your Brother",
arabic:"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
english:"None of you truly believes until he loves for his brother what he loves for himself.",
urdu:"تم میں سے کوئی کامل مومن نہیں جب تک اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
category:"Character",
reference:"Sahih al-Bukhari 13, Sahih Muslim 45"
},

{
id:4,
title:"Cleanliness",
arabic:"الطُّهُورُ شَطْرُ الْإِيمَانِ",
english:"Cleanliness is half of faith.",
urdu:"پاکیزگی ایمان کا نصف حصہ ہے۔",
category:"Iman",
reference:"Sahih Muslim 223"
},

{
id:5,
title:"Mercy",
arabic:"الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمٰنُ",
english:"The Most Merciful shows mercy to those who are merciful.",
urdu:"رحم کرنے والوں پر رحمٰن رحم فرماتا ہے۔",
category:"Character",
reference:"Jami' at-Tirmidhi 1924"
},

{
id:6,
title:"Prayer is Light",
arabic:"الصَّلَاةُ نُورٌ",
english:"Prayer is light.",
urdu:"نماز نور ہے۔",
category:"Salah",
reference:"Sahih Muslim 223"
},

{
id:7,
title:"Smiling is Charity",
arabic:"تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
english:"Your smile to your brother is charity.",
urdu:"اپنے بھائی کے سامنے مسکرانا بھی صدقہ ہے۔",
category:"Character",
reference:"Jami' at-Tirmidhi 1956"
},

{
id:8,
title:"Helping Others",
arabic:"وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ",
english:"Allah helps His servant as long as he helps his brother.",
urdu:"اللہ بندے کی مدد کرتا ہے جب تک بندہ اپنے بھائی کی مدد کرتا ہے۔",
category:"Character",
reference:"Sahih Muslim 2699"
},

{
id:9,
title:"Seeking Knowledge",
arabic:"مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
english:"Whoever follows a path in search of knowledge, Allah will make easy for him a path to Paradise.",
urdu:"جو علم حاصل کرنے کے راستے پر چلتا ہے اللہ اس کے لیے جنت کا راستہ آسان فرما دیتا ہے۔",
category:"Knowledge",
reference:"Sahih Muslim 2699"
},

{
id:10,
title:"Best Among People",
arabic:"خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
english:"The best of people are those who are most beneficial to others.",
urdu:"بہترین لوگ وہ ہیں جو دوسروں کو سب سے زیادہ فائدہ پہنچاتے ہیں۔",
category:"Character",
reference:"Reported in al-Mu'jam al-Awsat (widely quoted)"
},

{
id:11,
title:"Truthfulness",
arabic:"عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ",
english:"Hold firmly to truthfulness, for truthfulness leads to righteousness.",
urdu:"سچائی کو لازم پکڑو کیونکہ سچ نیکی کی طرف لے جاتا ہے۔",
category:"Character",
reference:"Sahih al-Bukhari 6094, Sahih Muslim 2607"
},

{
id:12,
title:"Avoid Anger",
arabic:"لَا تَغْضَبْ",
english:"Do not become angry.",
urdu:"غصہ نہ کرو۔",
category:"Character",
reference:"Sahih al-Bukhari 6116"
},

{
id:13,
title:"Respect Parents",
arabic:"رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ",
english:"The pleasure of the Lord is in the pleasure of the parents.",
urdu:"اللہ تعالیٰ کی رضا والدین کی رضا میں ہے۔",
category:"Family",
reference:"Jami' at-Tirmidhi 1899"
},

{
id:14,
title:"Brotherhood",
arabic:"الْمُسْلِمُ أَخُو الْمُسْلِمِ",
english:"A Muslim is the brother of another Muslim.",
urdu:"مسلمان مسلمان کا بھائی ہے۔",
category:"Brotherhood",
reference:"Sahih al-Bukhari 2442, Sahih Muslim 2580"
},

{
id:15,
title:"Good Character",
arabic:"إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلَاقًا",
english:"The best among you are those with the best character.",
urdu:"تم میں بہترین وہ ہیں جن کے اخلاق سب سے اچھے ہیں۔",
category:"Character",
reference:"Sahih al-Bukhari 3559"
},

{
id:16,
title:"Trust in Allah",
arabic:"لَوْ أَنَّكُمْ تَتَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ",
english:"If you relied upon Allah as He deserves, He would provide for you.",
urdu:"اگر تم اللہ پر حقیقی بھروسہ کرو تو وہ تمہیں ضرور رزق عطا فرمائے گا۔",
category:"Iman",
reference:"Jami' at-Tirmidhi 2344"
},

{
id:17,
title:"Kindness",
arabic:"إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ",
english:"Allah is Gentle and loves gentleness.",
urdu:"اللہ نرمی والا ہے اور نرمی کو پسند فرماتا ہے۔",
category:"Character",
reference:"Sahih Muslim 2593"
},

{
id:18,
title:"No Backbiting",
arabic:"لَا يَغْتَبْ بَعْضُكُمْ بَعْضًا",
english:"Do not backbite one another.",
urdu:"ایک دوسرے کی غیبت نہ کرو۔",
category:"Character",
reference:"Qur'an 49:12"
},

{
id:19,
title:"Supplication is Worship",
arabic:"الدُّعَاءُ هُوَ الْعِبَادَةُ",
english:"Supplication is worship.",
urdu:"دعا ہی عبادت ہے۔",
category:"Worship",
reference:"Jami' at-Tirmidhi 2969"
},

{
id:20,
title:"Fasting is a Shield",
arabic:"الصِّيَامُ جُنَّةٌ",
english:"Fasting is a shield.",
urdu:"روزہ ڈھال ہے۔",
category:"Ramadan",
reference:"Sahih al-Bukhari 1894, Sahih Muslim 1151"
},

{
id:21,
title:"Charity is Proof",
arabic:"الصَّدَقَةُ بُرْهَانٌ",
english:"Charity is a proof of faith.",
urdu:"صدقہ ایمان کی دلیل ہے۔",
category:"Zakat",
reference:"Sahih Muslim 223"
},

{
id:22,
title:"Patience is Light",
arabic:"الصَّبْرُ ضِيَاءٌ",
english:"Patience is illumination.",
urdu:"صبر روشنی ہے۔",
category:"Character",
reference:"Sahih Muslim 223"
},

{
id:23,
title:"Remember Allah",
arabic:"مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُ رَبَّهُ",
english:"The one who remembers Allah and the one who does not are like the living and the dead.",
urdu:"اللہ کا ذکر کرنے والا اور نہ کرنے والا زندہ اور مردہ کی مانند ہیں۔",
category:"Dhikr",
reference:"Sahih al-Bukhari 6407"
},

{
id:24,
title:"Return the Trust",
arabic:"أَدِّ الْأَمَانَةَ إِلَى مَنِ ائْتَمَنَكَ",
english:"Return the trust to the one who entrusted you.",
urdu:"امانت اس کے مالک کو واپس کرو۔",
category:"Character",
reference:"Jami' at-Tirmidhi 1264"
},

{
id:25,
title:"Fear Allah Wherever You Are",
arabic:"اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ",
english:"Fear Allah wherever you are.",
urdu:"جہاں بھی ہو اللہ سے ڈرتے رہو۔",
category:"Iman",
reference:"Jami' at-Tirmidhi 1987"
},

{
id:26,
title:"Allah Loves Beauty",
arabic:"إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
english:"Allah is Beautiful and loves beauty.",
urdu:"بے شک اللہ خوبصورت ہے اور خوبصورتی کو پسند فرماتا ہے۔",
category:"Character",
reference:"Sahih Muslim 91"
},

{
id:27,
title:"Gentleness Beautifies",
arabic:"إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ",
english:"Gentleness beautifies everything.",
urdu:"نرمی جس چیز میں ہوتی ہے اسے خوبصورت بنا دیتی ہے۔",
category:"Character",
reference:"Sahih Muslim 2594"
},

{
id:28,
title:"Control Anger",
arabic:"لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ",
english:"The strong one is the one who controls himself when angry.",
urdu:"طاقتور وہ ہے جو غصے کے وقت اپنے آپ پر قابو رکھے۔",
category:"Character",
reference:"Sahih al-Bukhari 6114, Sahih Muslim 2609"
},

{
id:29,
title:"Honor the Guest",
arabic:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
english:"Whoever believes in Allah and the Last Day should honor his guest.",
urdu:"جو اللہ اور آخرت پر ایمان رکھتا ہے وہ اپنے مہمان کی عزت کرے۔",
category:"Character",
reference:"Sahih al-Bukhari 6019, Sahih Muslim 48"
},

{
id:30,
title:"Good Neighbor",
arabic:"مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ",
english:"Jibreel kept advising me about the neighbor until I thought he would make him an heir.",
urdu:"حضرت جبرائیل علیہ السلام مجھے پڑوسی کے بارے میں مسلسل وصیت کرتے رہے۔",
category:"Character",
reference:"Sahih al-Bukhari 6014, Sahih Muslim 2625"
},

 {
id:31,
title:"Best Charity",
arabic:"أَفْضَلُ الصَّدَقَةِ مَا كَانَ عَنْ ظَهْرِ غِنًى",
english:"The best charity is that given from surplus wealth.",
urdu:"بہترین صدقہ وہ ہے جو اپنی ضرورت سے زائد مال میں سے دیا جائے۔",
category:"Zakat",
reference:"Sahih al-Bukhari 1426"
},

{
id:32,
title:"Allah Does Not Look at Appearance",
arabic:"إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَلَا إِلَى أَجْسَادِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
english:"Allah does not look at your appearance or wealth, but at your hearts and deeds.",
urdu:"اللہ تمہاری صورتوں اور مال کو نہیں بلکہ تمہارے دلوں اور اعمال کو دیکھتا ہے۔",
category:"Iman",
reference:"Sahih Muslim 2564"
},

{
id:33,
title:"Visit the Sick",
arabic:"عُودُوا الْمَرِيضَ",
english:"Visit the sick.",
urdu:"بیمار کی عیادت کرو۔",
category:"Character",
reference:"Sahih al-Bukhari 5657"
},

{
id:34,
title:"Feed the Hungry",
arabic:"أَطْعِمُوا الطَّعَامَ",
english:"Feed the hungry.",
urdu:"بھوکوں کو کھانا کھلاؤ۔",
category:"Character",
reference:"Sahih al-Bukhari 12"
},

{
id:35,
title:"Spread Salam",
arabic:"أَفْشُوا السَّلَامَ بَيْنَكُمْ",
english:"Spread the greeting of peace among yourselves.",
urdu:"آپس میں سلام کو عام کرو۔",
category:"Character",
reference:"Sahih Muslim 54"
},

{
id:36,
title:"Believer Loves for Others",
arabic:"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ",
english:"None of you truly believes until he loves for his brother what he loves for himself.",
urdu:"کوئی شخص اس وقت تک کامل مومن نہیں جب تک اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
category:"Brotherhood",
reference:"Sahih al-Bukhari 13"
},

{
id:37,
title:"Seeking Forgiveness",
arabic:"مَنْ لَزِمَ الِاسْتِغْفَارَ",
english:"Whoever regularly seeks Allah's forgiveness, Allah will make a way out for him.",
urdu:"جو استغفار کو لازم پکڑتا ہے اللہ اس کے لیے ہر تنگی سے نکلنے کا راستہ بنا دیتا ہے۔",
category:"Worship",
reference:"Sunan Abu Dawud 1518"
},

{
id:38,
title:"Modesty",
arabic:"الْحَيَاءُ مِنَ الْإِيمَانِ",
english:"Modesty is part of faith.",
urdu:"حیا ایمان کا حصہ ہے۔",
category:"Iman",
reference:"Sahih al-Bukhari 24, Sahih Muslim 36"
},

{
id:39,
title:"Thanking People",
arabic:"مَنْ لَا يَشْكُرِ النَّاسَ لَا يَشْكُرِ اللَّهَ",
english:"Whoever does not thank people does not thank Allah.",
urdu:"جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا بھی شکر ادا نہیں کرتا۔",
category:"Character",
reference:"Jami' at-Tirmidhi 1954"
},

{
id:40,
title:"Maintain Family Ties",
arabic:"مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ",
english:"Whoever wishes for increased provision and a longer life should maintain family ties.",
urdu:"جو چاہتا ہے کہ اس کے رزق اور عمر میں برکت ہو وہ صلہ رحمی کرے۔",
category:"Family",
reference:"Sahih al-Bukhari 5986, Sahih Muslim 2557"
},

 {
id:41,
title:"The Best of You",
arabic:"خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",
english:"The best of you are those who are best to their families.",
urdu:"تم میں بہترین وہ ہیں جو اپنے گھر والوں کے لیے بہترین ہیں۔",
category:"Family",
reference:"Jami' at-Tirmidhi 3895"
},

{
id:42,
title:"Strong Believer",
arabic:"الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ",
english:"The strong believer is better and more beloved to Allah than the weak believer.",
urdu:"طاقتور مومن اللہ کے نزدیک کمزور مومن سے بہتر اور زیادہ محبوب ہے۔",
category:"Iman",
reference:"Sahih Muslim 2664"
},

{
id:43,
title:"Do Not Hate One Another",
arabic:"لَا تَبَاغَضُوا",
english:"Do not hate one another.",
urdu:"آپس میں ایک دوسرے سے بغض نہ رکھو۔",
category:"Character",
reference:"Sahih Muslim 2563"
},

{
id:44,
title:"Do Not Envy",
arabic:"لَا تَحَاسَدُوا",
english:"Do not envy one another.",
urdu:"آپس میں حسد نہ کرو۔",
category:"Character",
reference:"Sahih Muslim 2563"
},

{
id:45,
title:"Do Not Spy",
arabic:"وَلَا تَجَسَّسُوا",
english:"Do not spy on one another.",
urdu:"ایک دوسرے کی جاسوسی نہ کرو۔",
category:"Character",
reference:"Sahih al-Bukhari 6064, Sahih Muslim 2563"
},

{
id:46,
title:"Mercy to People",
arabic:"مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
english:"Whoever does not show mercy to people, Allah will not show mercy to him.",
urdu:"جو لوگوں پر رحم نہیں کرتا، اللہ اس پر رحم نہیں فرماتا۔",
category:"Character",
reference:"Sahih al-Bukhari 7376, Sahih Muslim 2319"
},

{
id:47,
title:"Easy Religion",
arabic:"إِنَّ الدِّينَ يُسْرٌ",
english:"Indeed, this religion is easy.",
urdu:"بے شک دین آسان ہے۔",
category:"Iman",
reference:"Sahih al-Bukhari 39"
},

{
id:48,
title:"Allah Loves Excellence",
arabic:"إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ",
english:"Allah has prescribed excellence in everything.",
urdu:"اللہ تعالیٰ نے ہر کام میں احسان (بہتری) کو لازم فرمایا ہے۔",
category:"Character",
reference:"Sahih Muslim 1955"
},

{
id:49,
title:"Do Not Harm",
arabic:"لَا ضَرَرَ وَلَا ضِرَارَ",
english:"There should be neither harming nor reciprocating harm.",
urdu:"نہ خود نقصان پہنچاؤ اور نہ بدلے میں نقصان دو۔",
category:"Character",
reference:"Sunan Ibn Majah 2340"
},

{
id:50,
title:"Truth Leads to Paradise",
arabic:"إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
english:"Truthfulness leads to righteousness, and righteousness leads to Paradise.",
urdu:"سچائی نیکی کی طرف لے جاتی ہے اور نیکی جنت کی طرف لے جاتی ہے۔",
category:"Character",
reference:"Sahih al-Bukhari 6094, Sahih Muslim 2607"
},

 {
id:51,
title:"Religion is Sincerity",
arabic:"الدِّينُ النَّصِيحَةُ",
english:"Religion is sincerity.",
urdu:"دین خیر خواہی کا نام ہے۔",
category:"Iman",
reference:"Sahih Muslim 55"
},

{
id:52,
title:"Allah is Pure",
arabic:"إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا",
english:"Allah is Pure and accepts only what is pure.",
urdu:"اللہ پاک ہے اور صرف پاک چیز ہی قبول فرماتا ہے۔",
category:"Iman",
reference:"Sahih Muslim 1015"
},

{
id:53,
title:"Removing Harm",
arabic:"إِمَاطَةُ الْأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ",
english:"Removing harmful things from the road is charity.",
urdu:"راستے سے تکلیف دہ چیز ہٹانا بھی صدقہ ہے۔",
category:"Character",
reference:"Sahih al-Bukhari 2989, Sahih Muslim 1009"
},

{
id:54,
title:"Allah Looks at Hearts",
arabic:"إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ",
english:"Allah does not look at your appearance but at your hearts.",
urdu:"اللہ تمہاری شکلوں کو نہیں بلکہ تمہارے دلوں کو دیکھتا ہے۔",
category:"Iman",
reference:"Sahih Muslim 2564"
},

{
id:55,
title:"Amazing Affair of the Believer",
arabic:"عَجَبًا لِأَمْرِ الْمُؤْمِنِ",
english:"Amazing is the affair of the believer.",
urdu:"مومن کا معاملہ بڑا عجیب ہے۔",
category:"Iman",
reference:"Sahih Muslim 2999"
},

{
id:56,
title:"Love the Prophet ﷺ",
arabic:"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ",
english:"None of you truly believes until I am more beloved to him than anyone else.",
urdu:"تم میں سے کوئی کامل مومن نہیں جب تک میں اسے سب سے زیادہ محبوب نہ ہو جاؤں۔",
category:"Iman",
reference:"Sahih al-Bukhari 15"
},

{
id:57,
title:"Gentleness",
arabic:"مَنْ يُحْرَمِ الرِّفْقَ يُحْرَمِ الْخَيْرَ",
english:"Whoever is deprived of gentleness is deprived of goodness.",
urdu:"جو نرمی سے محروم رہا وہ خیر سے محروم رہا۔",
category:"Character",
reference:"Sahih Muslim 2592"
},

{
id:58,
title:"Visit the Sick",
arabic:"عُودُوا الْمَرِيضَ",
english:"Visit the sick.",
urdu:"بیمار کی عیادت کرو۔",
category:"Character",
reference:"Sahih al-Bukhari 5657"
},

{
id:59,
title:"Feed the Hungry",
arabic:"أَطْعِمُوا الْجَائِعَ",
english:"Feed the hungry.",
urdu:"بھوکوں کو کھانا کھلاؤ۔",
category:"Character",
reference:"Sahih al-Bukhari 5373"
},

{
id:60,
title:"Spread Peace",
arabic:"أَفْشُوا السَّلَامَ بَيْنَكُمْ",
english:"Spread the greeting of peace among yourselves.",
urdu:"آپس میں سلام کو عام کرو۔",
category:"Character",
reference:"Sahih Muslim 54"
},

{
id:61,
title:"Actions Depend on Intentions",
arabic:"إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
english:"Actions are judged by intentions.",
urdu:"اعمال کا دارومدار نیتوں پر ہے۔",
category:"Iman"
},

{
id:62,
title:"Remember Allah",
arabic:"اذْكُرُوا اللَّهَ كَثِيرًا",
english:"Remember Allah often.",
urdu:"اللہ کا کثرت سے ذکر کرو۔",
category:"Dhikr"
},

{
id:63,
title:"Honor Parents",
arabic:"رِضَا اللَّهِ فِي رِضَا الْوَالِدَيْنِ",
english:"Allah's pleasure is in pleasing one's parents.",
urdu:"اللہ کی رضا والدین کی رضا میں ہے۔",
category:"Family"
},

{
id:64,
title:"Speak the Truth",
arabic:"عَلَيْكُمْ بِالصِّدْقِ",
english:"Always speak the truth.",
urdu:"ہمیشہ سچ بولو۔",
category:"Character"
},

{
id:65,
title:"Be Humble",
arabic:"مَنْ تَوَاضَعَ لِلَّهِ رَفَعَهُ اللَّهُ",
english:"Whoever humbles himself for Allah, Allah raises him.",
urdu:"جو اللہ کے لیے عاجزی اختیار کرتا ہے اللہ اسے بلند فرماتا ہے۔",
category:"Character"
},

{
id:66,
title:"Avoid Oppression",
arabic:"اتَّقُوا الظُّلْمَ",
english:"Beware of oppression.",
urdu:"ظلم سے بچو۔",
category:"Character"
},

{
id:67,
title:"Help Others",
arabic:"وَاللَّهُ فِي عَوْنِ الْعَبْدِ",
english:"Allah helps His servant as long as he helps others.",
urdu:"اللہ بندے کی مدد کرتا ہے جب تک بندہ دوسروں کی مدد کرتا ہے۔",
category:"Character"
},

{
id:68,
title:"Rights of Neighbors",
arabic:"مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ",
english:"Jibreel kept advising me regarding the neighbor.",
urdu:"حضرت جبرائیلؑ مجھے پڑوسی کے حقوق کے بارے میں مسلسل نصیحت کرتے رہے۔",
category:"Character"
},

{
id:69,
title:"Remember Death",
arabic:"أَكْثِرُوا ذِكْرَ هَادِمِ اللَّذَّاتِ",
english:"Remember often the destroyer of pleasures (death).",
urdu:"لذتوں کو ختم کرنے والی چیز یعنی موت کو کثرت سے یاد کرو۔",
category:"Akhirah"
},

{
id:70,
title:"Be a Traveler in the World",
arabic:"كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ",
english:"Live in this world as though you are a stranger or a traveler.",
urdu:"دنیا میں ایسے رہو جیسے تم مسافر یا اجنبی ہو۔",
category:"Akhirah"
},

{
id:71,
title:"Prayer on Time",
arabic:"أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ الصَّلَاةُ عَلَى وَقْتِهَا",
english:"The most beloved deed to Allah is prayer at its proper time.",
urdu:"اللہ کے نزدیک سب سے محبوب عمل وقت پر نماز ادا کرنا ہے۔",
category:"Salah"
},

{
id:72,
title:"Learn and Teach the Quran",
arabic:"خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
english:"The best among you are those who learn the Quran and teach it.",
urdu:"تم میں بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔",
category:"Quran"
},

{
id:73,
title:"Joy of the Fasting Person",
arabic:"لِلصَّائِمِ فَرْحَتَانِ",
english:"The fasting person has two moments of joy.",
urdu:"روزہ دار کے لیے دو خوشیاں ہیں۔",
category:"Ramadan"
},

{
id:74,
title:"Charity Erases Sins",
arabic:"الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ",
english:"Charity extinguishes sins.",
urdu:"صدقہ گناہوں کو مٹا دیتا ہے۔",
category:"Zakat"
},

{
id:75,
title:"Trustworthiness",
arabic:"لَا إِيمَانَ لِمَنْ لَا أَمَانَةَ لَهُ",
english:"There is no complete faith for the one who is not trustworthy.",
urdu:"جس میں امانت داری نہیں اس کا ایمان کامل نہیں۔",
category:"Character"
},

{
id:76,
title:"The Strong Believer",
arabic:"الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ",
english:"The strong believer is better and more beloved to Allah.",
urdu:"طاقتور مومن اللہ کے نزدیک زیادہ بہتر اور محبوب ہے۔",
category:"Iman"
},

{
id:77,
title:"Do Not Envy",
arabic:"لَا تَحَاسَدُوا",
english:"Do not envy one another.",
urdu:"آپس میں حسد نہ کرو۔",
category:"Character"
},

{
id:78,
title:"Muslims Are Brothers",
arabic:"الْمُسْلِمُ أَخُو الْمُسْلِمِ",
english:"A Muslim is the brother of another Muslim.",
urdu:"مسلمان مسلمان کا بھائی ہے۔",
category:"Brotherhood"
},

{
id:79,
title:"Allah Loves Repentance",
arabic:"التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لَا ذَنْبَ لَهُ",
english:"The one who repents from sin is like one who has no sin.",
urdu:"گناہ سے توبہ کرنے والا ایسا ہے جیسے اس نے گناہ کیا ہی نہ ہو۔",
category:"Iman"
},

{
id:80,
title:"Best Character",
arabic:"أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا",
english:"The believers with the most complete faith are those with the best character.",
urdu:"کامل ایمان والے وہ ہیں جن کے اخلاق سب سے بہتر ہیں۔",
category:"Character"
},

{
id:81,
title:"Do Not Harm Others",
arabic:"لَا ضَرَرَ وَلَا ضِرَارَ",
english:"There should be neither harming nor reciprocating harm.",
urdu:"نہ خود نقصان پہنچاؤ اور نہ بدلے میں نقصان پہنچاؤ۔",
category:"Character"
},

{
id:82,
title:"Best to Family",
arabic:"خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",
english:"The best of you are those who are best to their families.",
urdu:"تم میں بہترین وہ ہے جو اپنے گھر والوں کے لیے بہترین ہو۔",
category:"Family"
},

{
id:83,
title:"Recite the Quran",
arabic:"اقْرَؤُوا الْقُرْآنَ",
english:"Recite the Quran.",
urdu:"قرآن کی تلاوت کیا کرو۔",
category:"Quran"
},

{
id:84,
title:"Mosques are Beloved",
arabic:"أَحَبُّ الْبِلَادِ إِلَى اللَّهِ مَسَاجِدُهَا",
english:"The most beloved places to Allah are the mosques.",
urdu:"اللہ کے نزدیک سب سے محبوب جگہیں مساجد ہیں۔",
category:"Worship"
},

{
id:85,
title:"Good Intention",
arabic:"نِيَّةُ الْمُؤْمِنِ خَيْرٌ مِنْ عَمَلِهِ",
english:"The intention of a believer is better than his action.",
urdu:"مومن کی نیت اس کے عمل سے بہتر ہے۔",
category:"Iman"
},

{
id:86,
title:"Maintain Family Ties",
arabic:"مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ",
english:"Whoever wishes for increased provision should maintain family ties.",
urdu:"جو رزق میں برکت چاہتا ہے وہ صلہ رحمی کرے۔",
category:"Family"
},

{
id:87,
title:"Be Thankful",
arabic:"مَنْ لَا يَشْكُرِ النَّاسَ لَا يَشْكُرِ اللَّهَ",
english:"Whoever does not thank people does not thank Allah.",
urdu:"جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا بھی شکر ادا نہیں کرتا۔",
category:"Character"
},

{
id:88,
title:"Avoid Arrogance",
arabic:"الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ",
english:"Arrogance is rejecting the truth and looking down on people.",
urdu:"تکبر حق کو ٹھکرانا اور لوگوں کو حقیر سمجھنا ہے۔",
category:"Character"
},

{
id:89,
title:"Join Relations",
arabic:"صِلْ مَنْ قَطَعَكَ",
english:"Maintain ties even with those who cut you off.",
urdu:"جو تم سے تعلق توڑے تم اس سے تعلق جوڑو۔",
category:"Character"
},

{
id:90,
title:"Seek Patience",
arabic:"وَمَنْ يَتَصَبَّرْ يُصَبِّرْهُ اللَّهُ",
english:"Whoever strives to be patient, Allah grants him patience.",
urdu:"جو صبر اختیار کرتا ہے اللہ اسے صبر عطا فرماتا ہے۔",
category:"Character"
},

{
id:91,
title:"Forgive Others",
arabic:"ارْحَمُوا تُرْحَمُوا",
english:"Show mercy to others and you will be shown mercy.",
urdu:"لوگوں پر رحم کرو، تم پر بھی رحم کیا جائے گا۔",
category:"Character"
},

{
id:92,
title:"Seek Halal Earnings",
arabic:"طَلَبُ الْحَلَالِ فَرِيضَةٌ",
english:"Seeking lawful earnings is an obligation.",
urdu:"حلال روزی کمانا فرض ہے۔",
category:"Lifestyle"
},

{
id:93,
title:"Allah is Near",
arabic:"وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
english:"Allah is nearer to His servant than his jugular vein.",
urdu:"اللہ اپنے بندے کی شہ رگ سے بھی زیادہ قریب ہے۔",
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
title:"Smile is Charity",
arabic:"تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ",
english:"Your smile for your brother is charity.",
urdu:"اپنے بھائی کے سامنے مسکرانا بھی صدقہ ہے۔",
category:"Character"
},

{
id:96,
title:"Good Company",
arabic:"الْمَرْءُ مَعَ مَنْ أَحَبَّ",
english:"A person will be with those whom he loves.",
urdu:"انسان قیامت میں انہی کے ساتھ ہوگا جن سے وہ محبت کرتا ہے۔",
category:"Akhirah"
},

{
id:97,
title:"Spread Salam",
arabic:"أَفْشُوا السَّلَامَ بَيْنَكُمْ",
english:"Spread the greeting of peace among yourselves.",
urdu:"آپس میں سلام کو عام کرو۔",
category:"Character"
},

{
id:98,
title:"Love for Allah",
arabic:"مَنْ أَحَبَّ لِلَّهِ",
english:"Love for the sake of Allah.",
urdu:"اللہ کی رضا کے لیے محبت کرو۔",
category:"Iman"
},

{
id:99,
title:"Remember Allah Often",
arabic:"لَا يَزَالُ لِسَانُكَ رَطْبًا مِنْ ذِكْرِ اللَّهِ",
english:"Keep your tongue moist with the remembrance of Allah.",
urdu:"اپنی زبان کو اللہ کے ذکر سے تر رکھو۔",
category:"Dhikr"
},

{
id:100,
title:"Paradise Under Mothers' Feet",
arabic:"الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ",
english:"Paradise lies beneath the feet of mothers.",
urdu:"ماں کے قدموں کے نیچے جنت ہے۔",
category:"Family"
}

];    
