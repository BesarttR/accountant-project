import { useState, useEffect, useRef, createContext, useContext } from "react";

const TRANSLATIONS = {"en": {"nav": {"about": "Our Team", "advisors": "Advisors", "services": "Services", "testimonials": "Clients", "contact": "Contact", "cta": "Get in Touch", "logoSmall": "Certified Accountants · Skopje"}, "hero": {"tag": "Certified Accounting Firm · Skopje, North Macedonia", "h1Line1": "Expert financial", "h1Line2": "guidance for your", "h1Em": "business growth.", "p": "A professional accounting partnership combining 40+ years of experience. Trusted by over 30 companies across Macedonia for precision, compliance, and strategic insight.", "cta": "Schedule a Consultation", "ctaSecondary": "Our Services →", "stat1Num": "30", "stat1Sup": "+", "stat1Label": "Active Clients", "stat2Num": "40", "stat2Sup": "+", "stat2Label": "Years Combined", "stat3Num": "100", "stat3Sup": "%", "stat3Label": "Compliance Rate", "partner1Name": "Nuran Ramadani", "partner1Role": "Partner · Certified Accountant", "partner1Exp": "7 Years of Experience", "partner2Name": "Hajra Demirovic", "partner2Role": "Partner · Senior Accountant", "partner2Exp": "40+ Years of Experience"}, "about": {"tag": "Our Firm", "h2Line1": "A partnership built on", "h2Em": "expertise & trust.", "p1": "Adea Consulting is a Skopje-based accounting firm bringing together two generations of expertise. We serve <strong>more than 30 companies</strong> — from startups to established enterprises — delivering comprehensive accounting, tax, and advisory services tailored to the Macedonian market.", "p2": "Our approach is both rigorous and personal. Every client receives dedicated attention, strategic guidance, and the peace of mind that comes with full regulatory compliance.", "stat1Num": "30+", "stat1Label": "Companies Served", "stat2Num": "40+", "stat2Label": "Combined Experience", "stat3Num": "2", "stat3Label": "Certified Partners", "stat4Num": "100%", "stat4Label": "Compliance Rate", "nuranTitle": "Partner & Certified Accountant", "nuranExp": "7 Years of Experience", "nuranBio": "Nuran specialises in bookkeeping, payroll management, and tax compliance for SMEs in North Macedonia. Her modern, tech-driven approach ensures clients benefit from efficient processes and current regulatory knowledge. She serves as the primary contact for day-to-day financial operations across the firm's growing client portfolio.", "hajraTitle": "Partner & Senior Accountant", "hajraExp": "40+ Years of Experience", "hajraBio": "Hajra brings over four decades of deep financial expertise to the firm. Her extensive background spans complex tax planning, financial restructuring, and long-term strategic advisory. Her unparalleled knowledge of Macedonian financial law provides the senior oversight that gives every client absolute confidence in their financial decisions."}, "advisors": {"tag": "Professional Advisors", "h2Line1": "Backed by a network of", "h2Em": "specialist experts.", "sub": "Our clients benefit from access to a carefully assembled panel of professional advisors — covering every dimension of business, legal, and financial complexity.", "cards": [{"field": "Legal Advisory", "desc": "Specialist legal counsel on corporate law, contract disputes, regulatory compliance, and business structuring under Macedonian law."}, {"field": "Tax Law Specialists", "desc": "Expert guidance on VAT, corporate income tax, cross-border transactions, and tax dispute resolution with the Public Revenue Office."}, {"field": "Financial Planning", "desc": "Strategic financial planning, investment advisory, cash flow optimisation, and long-term financial modelling for sustainable growth."}, {"field": "Audit & Assurance", "desc": "Independent audit services and internal control reviews ensuring financial statements accurately reflect company performance."}, {"field": "Business Consulting", "desc": "Operational efficiency, market entry strategy, restructuring, and performance improvement for companies at every stage of growth."}, {"field": "Company Formation", "desc": "End-to-end guidance for new business registration, governance setup, and compliance infrastructure from the very first day."}]}, "services": {"tag": "What We Offer", "h2Line1": "Services tailored to", "h2Em": "your business.", "sub": "Comprehensive accounting and advisory solutions for companies in North Macedonia — from daily bookkeeping to long-term financial strategy.", "cards": [{"num": "01", "title": "Bookkeeping & Financial Records", "desc": "Accurate, timely maintenance of all financial records — accounts payable/receivable, bank reconciliation, and monthly reporting in full compliance with Macedonian standards."}, {"num": "02", "title": "Tax Planning & Compliance", "desc": "Strategic tax planning to minimise liabilities while ensuring full compliance. Preparation and filing of all required tax returns with the Public Revenue Office."}, {"num": "03", "title": "Payroll Management", "desc": "Full payroll processing, employee contribution calculations, and timely reporting to authorities — so you can focus on your people, not the paperwork."}, {"num": "04", "title": "Financial Reporting & Analysis", "desc": "Clear, actionable financial statements — balance sheets, profit & loss, cash flow — providing the insight to make confident business decisions."}, {"num": "05", "title": "Company Registration & Startup", "desc": "Complete guidance through business registration in Macedonia — legal structure advice, initial accounting setup, and compliance roadmap from day one."}, {"num": "06", "title": "Business & Financial Consulting", "desc": "Strategic financial planning, cost control, investment decisions, and growth advisory — a trusted partner beyond standard accounting."}]}, "testimonials": {"tag": "Our Clients", "h2Line1": "Companies that", "h2Em": "trust us.", "items": [{"text": "Nuran and Hajra have been indispensable to our business. Their combined expertise means we always have both up-to-date knowledge and deep strategic insight on hand.", "name": "Marko Kostovski", "company": "CEO · TechVenture Skopje", "initials": "MK"}, {"text": "From company registration to day-to-day bookkeeping — the team handled everything with professionalism. Five years in, I still wouldn't trust anyone else with our finances.", "name": "Sara Vasileva", "company": "Owner · Boutique Collective", "initials": "SV"}, {"text": "Hajra's experience is remarkable — she identified tax optimisation strategies our previous accountant had completely missed. The savings have been substantial.", "name": "Bojan Nikoloski", "company": "Director · NordBuild DOOEL", "initials": "BN"}]}, "contact": {"tag": "Get in Touch", "h2Line1": "Let's discuss your", "h2Em": "financial needs.", "p": "Ready to work with a firm that truly understands your business? Reach out for a free initial consultation — we'd love to learn about your goals.", "locationLabel": "Location", "locationVal": "Skopje, North Macedonia", "emailLabel": "Email", "phoneLabel": "Phone", "firstName": "First Name", "firstNamePh": "Your first name", "lastName": "Last Name", "lastNamePh": "Your last name", "emailPh": "your@company.mk", "companyLabel": "Company Name", "companyPh": "Your Company DOOEL", "serviceLabel": "Service of Interest", "serviceDefault": "Select a service...", "serviceOptions": ["Bookkeeping & Financial Records", "Tax Planning & Compliance", "Payroll Management", "Financial Reporting & Analysis", "Company Registration & Startup", "Business & Financial Consulting", "Professional Advisory Services"], "messageLabel": "Message", "messagePh": "Tell us briefly about your business and what you need help with...", "submit": "Send Message →", "submitted": "Message Sent ✓"}, "footer": {"logoSmall": "Certified Accountants · Skopje, North Macedonia", "copy": "© 2025 Adea Consulting. All rights reserved.", "team": "Team", "advisors": "Advisors", "services": "Services", "contact": "Contact"}}, "mk": {"nav": {"about": "Нашиот тим", "advisors": "Советници", "services": "Услуги", "testimonials": "Клиенти", "contact": "Контакт", "cta": "Контактирајте не", "logoSmall": "Овластени сметководители · Скопје"}, "hero": {"tag": "Овластена сметководствена фирма · Скопје, Северна Македонија", "h1Line1": "Стручно финансиско", "h1Line2": "водство за вашиот", "h1Em": "деловен раст.", "p": "Професионално сметководствено партнерство со повеќе од 40 години искуство. Доверба на повеќе од 30 компании низ Македонија за прецизност, усогласеност и стратешки увид.", "cta": "Закажи консултација", "ctaSecondary": "Нашите услуги →", "stat1Num": "30", "stat1Sup": "+", "stat1Label": "Активни клиенти", "stat2Num": "40", "stat2Sup": "+", "stat2Label": "Години искуство", "stat3Num": "100", "stat3Sup": "%", "stat3Label": "Стапка на усогласеност", "partner1Name": "Нуран Рамадани", "partner1Role": "Партнер · Овластен сметководител", "partner1Exp": "7 години искуство", "partner2Name": "Хајра Демировиќ", "partner2Role": "Партнер · Виш сметководител", "partner2Exp": "40+ години искуство"}, "about": {"tag": "Нашата фирма", "h2Line1": "Партнерство изградено на", "h2Em": "стручност и доверба.", "p1": "Адеа Консалтинг е сметководствена фирма со седиште во Скопје која обединува две генерации на стручност. Им служиме на <strong>повеќе од 30 компании</strong> — од стартапи до воспоставени претпријатија — обезбедувајќи сеопфатни сметководствени, даночни и советодавни услуги приспособени за македонскиот пазар.", "p2": "Нашиот пристап е истовремено строг и личен. Секој клиент добива посветено внимание, стратешко водство и мир на умот кој доаѓа со целосна регулаторна усогласеност.", "stat1Num": "30+", "stat1Label": "Опслужени компании", "stat2Num": "40+", "stat2Label": "Комбинирано искуство", "stat3Num": "2", "stat3Label": "Овластени партнери", "stat4Num": "100%", "stat4Label": "Стапка на усогласеност", "nuranTitle": "Партнер и овластен сметководител", "nuranExp": "7 години искуство", "nuranBio": "Нуран е специјализирана за книговодство, управување со плати и даночна усогласеност за МСП во Северна Македонија. Нејзиниот модерен, технолошки пристап осигурува дека клиентите имаат корист од ефикасни процеси и актуелно регулаторно знаење. Таа служи како примарен контакт за секојдневни финансиски операции во растечкото портфолио на клиенти на фирмата.", "hajraTitle": "Партнер и виш сметководител", "hajraExp": "40+ години искуство", "hajraBio": "Хајра носи повеќе од четири децении длабока финансиска стручност во фирмата. Нејзиното обемно искуство опфаќа комплексно даночно планирање, финансиско реструктурирање и долгорочно стратешко советување. Нејзиното непревземено познавање на македонското финансиско право обезбедува виш надзор кој им дава на секој клиент апсолутна доверба во нивните финансиски одлуки."}, "advisors": {"tag": "Професионални советници", "h2Line1": "Поддржани од мрежа на", "h2Em": "специјалистички експерти.", "sub": "Нашите клиенти имаат пристап до внимателно составен панел на професионални советници — кои покриваат секоја димензија на деловна, правна и финансиска сложеност.", "cards": [{"field": "Правно советување", "desc": "Специјалистички правен совет за корпоративно право, договорни спорови, регулаторна усогласеност и деловно структурирање според македонското право."}, {"field": "Специјалисти за даночно право", "desc": "Стручно водство за ДДВ, данок на добивка, прекугранични трансакции и решавање на даночни спорови со Управата за јавни приходи."}, {"field": "Финансиско планирање", "desc": "Стратешко финансиско планирање, инвестициско советување, оптимизација на готовинскиот тек и долгорочно финансиско моделирање за одржлив раст."}, {"field": "Ревизија и осигурување", "desc": "Независни ревизорски услуги и прегледи на внатрешна контрола кои осигуруваат дека финансиските извештаи точно ги одразуваат перформансите на компанијата."}, {"field": "Деловно советување", "desc": "Оперативна ефикасност, стратегија за влез на пазарот, реструктурирање и подобрување на перформансите за компании во секоја фаза на раст."}, {"field": "Основање на компании", "desc": "Сеопфатно водство за нова регистрација на бизниси, поставување на управување и инфраструктура за усогласеност од самиот прв ден."}]}, "services": {"tag": "Што нудиме", "h2Line1": "Услуги прилагодени на", "h2Em": "вашиот бизнис.", "sub": "Сеопфатни сметководствени и советодавни решенија за компании во Северна Македонија — од секојдневно книговодство до долгорочна финансиска стратегија.", "cards": [{"num": "01", "title": "Книговодство и финансиски записи", "desc": "Точно, навремено одржување на сите финансиски записи — побарувања/обврски, порамнување на сметки и месечно известување во целосна усогласеност со македонските стандарди."}, {"num": "02", "title": "Даночно планирање и усогласеност", "desc": "Стратешко даночно планирање за минимизирање на обврските при обезбедување на целосна усогласеност. Подготовка и поднесување на сите потребни даночни пријави до Управата за јавни приходи."}, {"num": "03", "title": "Управување со плати", "desc": "Целосна обработка на плати, пресметки на придонеси на вработените и навремено известување до властите — за да можете да се фокусирате на луѓето, не на документацијата."}, {"num": "04", "title": "Финансиско известување и анализа", "desc": "Јасни, акциски финансиски извештаи — биланси на состојба, добивка и загуба, готовински тек — обезбедувајќи увид за донесување на самоуверени деловни одлуки."}, {"num": "05", "title": "Регистрација на компании и стартап", "desc": "Целосно водство низ регистрацијата на бизниси во Македонија — совет за правна структура, почетно сметководствено поставување и план за усогласеност од ден еден."}, {"num": "06", "title": "Деловно и финансиско советување", "desc": "Стратешко финансиско планирање, контрола на трошоци, инвестициски одлуки и советување за раст — доверлив партнер надвор од стандардното сметководство."}]}, "testimonials": {"tag": "Наши клиенти", "h2Line1": "Компании кои", "h2Em": "ни веруваат.", "items": [{"text": "Нуран и Хајра беа незаменливи за нашиот бизнис. Нивната комбинирана стручност значи дека секогаш имаме и актуелно знаење и длабок стратешки увид при рака.", "name": "Марко Костовски", "company": "Извршен директор · TechVenture Скопје", "initials": "МК"}, {"text": "Од регистрација на компанијата до секојдневно книговодство — тимот се справи со сè со професионализам. Пет години подоцна, сè уште не би им верувал на никој друг нашите финансии.", "name": "Сара Василева", "company": "Сопственик · Boutique Collective", "initials": "СВ"}, {"text": "Искуството на Хајра е забележително — таа идентификуваше стратегии за даночна оптимизација кои нашиот претходен сметководител целосно ги пропушти. Заштедите беа значајни.", "name": "Бојан Николоски", "company": "Директор · NordBuild ДООЕЛ", "initials": "БН"}]}, "contact": {"tag": "Контактирајте не", "h2Line1": "Да разговараме за вашите", "h2Em": "финансиски потреби.", "p": "Подготвени сте да работите со фирма која навистина го разбира вашиот бизнис? Обратете се за бесплатна почетна консултација — сакаме да дознаеме за вашите цели.", "locationLabel": "Локација", "locationVal": "Скопје, Северна Македонија", "emailLabel": "Е-пошта", "phoneLabel": "Телефон", "firstName": "Име", "firstNamePh": "Вашето име", "lastName": "Презиме", "lastNamePh": "Вашето презиме", "emailPh": "vashata@kompanija.mk", "companyLabel": "Назив на компанија", "companyPh": "Вашата компанија ДООЕЛ", "serviceLabel": "Услуга од интерес", "serviceDefault": "Изберете услуга...", "serviceOptions": ["Книговодство и финансиски записи", "Даночно планирање и усогласеност", "Управување со плати", "Финансиско известување и анализа", "Регистрација на компании и стартап", "Деловно и финансиско советување", "Услуги на професионални советници"], "messageLabel": "Порака", "messagePh": "Накратко кажете ни за вашиот бизнис и со што ви е потребна помош...", "submit": "Испрати порака →", "submitted": "Пораката е испратена ✓"}, "footer": {"logoSmall": "Овластени сметководители · Скопје, Северна Македонија", "copy": "© 2025 Адеа Консалтинг. Сите права се задржани.", "team": "Тим", "advisors": "Советници", "services": "Услуги", "contact": "Контакт"}}, "sq": {"nav": {"about": "Ekipi Ynë", "advisors": "Këshilltarë", "services": "Shërbime", "testimonials": "Klientë", "contact": "Kontakt", "cta": "Na Kontaktoni", "logoSmall": "Kontabilistë të Certifikuar · Shkup"}, "hero": {"tag": "Firmë Kontabiliteti e Certifikuar · Shkup, Maqedonia e Veriut", "h1Line1": "Udhëzim financiar", "h1Line2": "ekspert për", "h1Em": "rritjen e biznesit tuaj.", "p": "Një partneritet kontabiliteti profesional që kombinon mbi 40 vjet përvojë. I besuar nga mbi 30 kompani në të gjithë Maqedoninë për saktësi, pajtueshmëri dhe njohuri strategjike.", "cta": "Planifiko një Konsultim", "ctaSecondary": "Shërbimet Tona →", "stat1Num": "30", "stat1Sup": "+", "stat1Label": "Klientë Aktivë", "stat2Num": "40", "stat2Sup": "+", "stat2Label": "Vite të Kombinuara", "stat3Num": "100", "stat3Sup": "%", "stat3Label": "Shkalla e Pajtueshmërisë", "partner1Name": "Nuran Ramadani", "partner1Role": "Partner · Kontabiliste e Certifikuar", "partner1Exp": "7 Vjet Përvojë", "partner2Name": "Hajra Demirovic", "partner2Role": "Partner · Kontabiliste e Lartë", "partner2Exp": "Mbi 40 Vjet Përvojë"}, "about": {"tag": "Firma Jonë", "h2Line1": "Një partneritet i ndërtuar mbi", "h2Em": "ekspertizë dhe besim.", "p1": "Adea Consulting është një firmë kontabiliteti me seli në Shkup që bashkon dy gjenerata ekspertize. Ne u shërbejmë <strong>më shumë se 30 kompanive</strong> — nga startup-et te ndërmarrjet e konsoliduara — duke ofruar shërbime gjithëpërfshirëse kontabiliteti, taksash dhe këshillimi të përshtatura për tregun maqedonas.", "p2": "Qasja jonë është njëkohësisht rigoroze dhe personale. Çdo klient merr vëmendje të dedikuar, udhëzim strategjik dhe qetësi mendore që vjen me pajtueshmëri të plotë rregullatore.", "stat1Num": "30+", "stat1Label": "Kompani të Shërbyera", "stat2Num": "40+", "stat2Label": "Përvojë e Kombinuar", "stat3Num": "2", "stat3Label": "Partnerë të Certifikuar", "stat4Num": "100%", "stat4Label": "Shkalla e Pajtueshmërisë", "nuranTitle": "Partner & Kontabiliste e Certifikuar", "nuranExp": "7 Vjet Përvojë", "nuranBio": "Nuran specializohet në kontabilitet, menaxhim të pagave dhe pajtueshmëri tatimore për NVM-të në Maqedoninë e Veriut. Qasja e saj moderne, e drejtuar nga teknologjia, siguron që klientët të përfitojnë nga proceset efikase dhe njohuritë aktuale rregullatore. Ajo shërben si kontakti kryesor për operacionet financiare të përditshme në portofolon në rritje të klientëve të firmës.", "hajraTitle": "Partner & Kontabiliste e Lartë", "hajraExp": "Mbi 40 Vjet Përvojë", "hajraBio": "Hajra sjell mbi katër dekada ekspertize të thellë financiare në firmë. Sfondi i saj i gjerë përfshin planifikimin e taksave komplekse, ristrukturimin financiar dhe këshillimin strategjik afatgjatë. Njohuria e saj e pakrahasueshme e ligjit financiar maqedonas ofron mbikëqyrjen e lartë që i jep çdo klienti besim absolut në vendimet e tyre financiare."}, "advisors": {"tag": "Këshilltarë Profesionalë", "h2Line1": "Mbështetur nga një rrjet", "h2Em": "ekspertësh specialistë.", "sub": "Klientët tanë përfitojnë nga qasja në një panel të montuar me kujdes të këshilltarëve profesionalë — që mbulojnë çdo dimensión të kompleksitetit të biznesit, ligjit dhe financave.", "cards": [{"field": "Këshillim Ligjor", "desc": "Këshillim ligjor specialist për të drejtën e korporatave, mosmarrëveshjet kontraktuale, pajtueshmërinë rregullatore dhe strukturimin e biznesit sipas ligjit maqedonas."}, {"field": "Specialistë të Ligjit Tatimor", "desc": "Udhëzim ekspert mbi TVSH-në, tatimin mbi fitimin e korporatave, transaksionet ndërkufitare dhe zgjidhjen e mosmarrëveshjeve tatimore me Drejtorinë e të Ardhurave Publike."}, {"field": "Planifikim Financiar", "desc": "Planifikim financiar strategjik, këshillim investimesh, optimizim i rrjedhës së parasë dhe modelim financiar afatgjatë për rritje të qëndrueshme."}, {"field": "Auditim dhe Siguri", "desc": "Shërbime auditimi të pavarura dhe rishikime të kontrollit të brendshëm që sigurojnë që pasqyrat financiare pasqyrojnë saktësisht performancën e kompanisë."}, {"field": "Konsulencë Biznesi", "desc": "Efikasitet operacional, strategji hyrjeje në treg, ristrukturim dhe përmirësim i performancës për kompanitë në çdo fazë rritjeje."}, {"field": "Themelim i Kompanisë", "desc": "Udhëzim gjithëpërfshirës për regjistrimin e ri të biznesit, konfigurimin e qeverisjes dhe infrastrukturën e pajtueshmërisë nga dita e parë."}]}, "services": {"tag": "Çfarë Ofrojmë", "h2Line1": "Shërbime të përshtatura për", "h2Em": "biznesin tuaj.", "sub": "Zgjidhje gjithëpërfshirëse kontabiliteti dhe këshillimi për kompanitë në Maqedoninë e Veriut — nga kontabiliteti i përditshëm deri te strategjia financiare afatgjatë.", "cards": [{"num": "01", "title": "Kontabilitet & Regjistrime Financiare", "desc": "Mirëmbajtje e saktë dhe në kohë e të gjitha regjistrimeve financiare — llogaritë e pagueshme/të arkëtueshme, rakordimi bankar dhe raportimi mujor në pajtim të plotë me standardet maqedonase."}, {"num": "02", "title": "Planifikim Tatimor & Pajtueshmëri", "desc": "Planifikim tatimor strategjik për minimizimin e detyrimeve duke siguruar pajtueshmëri të plotë. Përgatitja dhe depozitimi i të gjitha deklaratave tatimore të nevojshme pranë Drejtorisë së të Ardhurave Publike."}, {"num": "03", "title": "Menaxhim i Pagave", "desc": "Përpunimi i plotë i pagave, llogaritjet e kontributeve të punonjësve dhe raportimi në kohë ndaj autoriteteve — për t'u fokusuar te njerëzit, jo te letrat."}, {"num": "04", "title": "Raportim & Analizë Financiare", "desc": "Pasqyra financiare të qarta dhe të zbatueshme — bilance, fitim & humbje, rrjedhë parash — duke ofruar njohuri për vendimmarrje të sigurt biznesi."}, {"num": "05", "title": "Regjistrim Kompanie & Startup", "desc": "Udhëzim i plotë gjatë regjistrimit të biznesit në Maqedoni — këshilla për strukturën ligjore, konfigurimi fillestar i kontabilitetit dhe plani i pajtueshmërisë nga dita e parë."}, {"num": "06", "title": "Konsulencë Biznesi & Financiare", "desc": "Planifikim financiar strategjik, kontroll i kostove, vendime investimesh dhe këshillim rritjeje — një partner i besuar përtej kontabilitetit standard."}]}, "testimonials": {"tag": "Klientët Tanë", "h2Line1": "Kompanitë që", "h2Em": "na besojnë.", "items": [{"text": "Nurani dhe Hajra kanë qenë të domosdoshme për biznesin tonë. Ekspertiza e tyre e kombinuar do të thotë që gjithmonë kemi njohuri të përditësuara dhe njohuri të thellë strategjike.", "name": "Marko Kostovski", "company": "CEO · TechVenture Shkup", "initials": "MK"}, {"text": "Nga regjistrimi i kompanisë deri te kontabiliteti i përditshëm — ekipi trajtoi gjithçka me profesionalizëm. Pesë vjet më vonë, ende nuk do t'i besoja financat tona askujt tjetër.", "name": "Sara Vasileva", "company": "Pronar · Boutique Collective", "initials": "SV"}, {"text": "Përvoja e Hajrës është e jashtëzakonshme — ajo identifikoi strategji optimizimi tatimor që kontabilisti ynë i mëparshëm i kishte humbur plotësisht. Kursimet kanë qenë të konsiderueshme.", "name": "Bojan Nikoloski", "company": "Drejtor · NordBuild DOOEL", "initials": "BN"}]}, "contact": {"tag": "Na Kontaktoni", "h2Line1": "Le të diskutojmë", "h2Em": "nevojat tuaja financiare.", "p": "Gati të punoni me një firmë që vërtet e kupton biznesin tuaj? Kontaktoni për një konsultim fillestar falas — do të donim të mësojmë për qëllimet tuaja.", "locationLabel": "Vendndodhja", "locationVal": "Shkup, Maqedonia e Veriut", "emailLabel": "Email", "phoneLabel": "Telefon", "firstName": "Emri", "firstNamePh": "Emri juaj", "lastName": "Mbiemri", "lastNamePh": "Mbiemri juaj", "emailPh": "juaj@kompania.mk", "companyLabel": "Emri i Kompanisë", "companyPh": "Kompania Juaj DOOEL", "serviceLabel": "Shërbimi i Interesit", "serviceDefault": "Zgjidhni një shërbim...", "serviceOptions": ["Kontabilitet & Regjistrime Financiare", "Planifikim Tatimor & Pajtueshmëri", "Menaxhim i Pagave", "Raportim & Analizë Financiare", "Regjistrim Kompanie & Startup", "Konsulencë Biznesi & Financiare", "Shërbime Këshillimi Profesional"], "messageLabel": "Mesazh", "messagePh": "Na tregoni shkurtimisht për biznesin tuaj dhe me çfarë keni nevojë për ndihmë...", "submit": "Dërgo Mesazhin →", "submitted": "Mesazhi u Dërgua ✓"}, "footer": {"logoSmall": "Kontabilistë të Certifikuar · Shkup, Maqedonia e Veriut", "copy": "© 2025 Adea Consulting. Të gjitha të drejtat të rezervuara.", "team": "Ekipi", "advisors": "Këshilltarë", "services": "Shërbime", "contact": "Kontakt"}}, "tr": {"nav": {"about": "Ekibimiz", "advisors": "Danışmanlar", "services": "Hizmetler", "testimonials": "Müşteriler", "contact": "İletişim", "cta": "Bize Ulaşın", "logoSmall": "Sertifikalı Muhasebeciler · Üsküp"}, "hero": {"tag": "Sertifikalı Muhasebe Firması · Üsküp, Kuzey Makedonya", "h1Line1": "İşletmenizin büyümesi için", "h1Line2": "uzman finansal", "h1Em": "rehberlik.", "p": "40+ yıllık deneyimi bir araya getiren profesyonel bir muhasebe ortaklığı. Hassasiyet, uyumluluk ve stratejik anlayış için Makedonya genelinde 30'dan fazla şirket tarafından güvenilmektedir.", "cta": "Danışma Randevusu Al", "ctaSecondary": "Hizmetlerimiz →", "stat1Num": "30", "stat1Sup": "+", "stat1Label": "Aktif Müşteri", "stat2Num": "40", "stat2Sup": "+", "stat2Label": "Toplam Yıl Deneyim", "stat3Num": "100", "stat3Sup": "%", "stat3Label": "Uyumluluk Oranı", "partner1Name": "Nuran Ramadani", "partner1Role": "Ortak · Sertifikalı Muhasebeci", "partner1Exp": "7 Yıl Deneyim", "partner2Name": "Hajra Demirovic", "partner2Role": "Ortak · Kıdemli Muhasebeci", "partner2Exp": "40+ Yıl Deneyim"}, "about": {"tag": "Firmamız", "h2Line1": "Üzerine kurulu bir ortaklık", "h2Em": "uzmanlık ve güven.", "p1": "Adea Consulting, iki neslin uzmanlığını bir araya getiren Üsküp merkezli bir muhasebe firmasıdır. Makedonya pazarına özel kapsamlı muhasebe, vergi ve danışmanlık hizmetleri sunarak <strong>30'dan fazla şirkete</strong> — startuplardan köklü işletmelere — hizmet veriyoruz.", "p2": "Yaklaşımımız hem titiz hem de kişiseldir. Her müşteri, tam yasal uyumlulukla birlikte gelen gönül rahatlığı, stratejik rehberlik ve özel ilgi alır.", "stat1Num": "30+", "stat1Label": "Hizmet Verilen Şirket", "stat2Num": "40+", "stat2Label": "Toplam Deneyim", "stat3Num": "2", "stat3Label": "Sertifikalı Ortak", "stat4Num": "100%", "stat4Label": "Uyumluluk Oranı", "nuranTitle": "Ortak & Sertifikalı Muhasebeci", "nuranExp": "7 Yıl Deneyim", "nuranBio": "Nuran, Kuzey Makedonya'daki KOBİ'ler için defter tutma, bordro yönetimi ve vergi uyumluluğu konusunda uzmanlaşmıştır. Modern, teknoloji odaklı yaklaşımı, müşterilerin verimli süreçlerden ve güncel mevzuat bilgisinden yararlanmasını sağlar. Firmanın büyüyen müşteri portföyündeki günlük finansal operasyonlar için birincil iletişim noktası olarak görev yapmaktadır.", "hajraTitle": "Ortak & Kıdemli Muhasebeci", "hajraExp": "40+ Yıl Deneyim", "hajraBio": "Hajra, firmaya kırk yılı aşkın derin finansal uzmanlık getirmektedir. Kapsamlı geçmişi; karmaşık vergi planlaması, finansal yeniden yapılanma ve uzun vadeli stratejik danışmanlığı kapsamaktadır. Makedonya finans hukukuna olan eşsiz hakimiyeti, her müşteriye finansal kararlarında tam güven veren üst düzey denetimi sağlar."}, "advisors": {"tag": "Profesyonel Danışmanlar", "h2Line1": "Bir ağ tarafından desteklenen", "h2Em": "uzman profesyoneller.", "sub": "Müşterilerimiz, iş, hukuk ve finansal karmaşıklığın her boyutunu kapsayan özenle oluşturulmuş bir profesyonel danışman paneline erişim imkânından yararlanır.", "cards": [{"field": "Hukuki Danışmanlık", "desc": "Makedonya hukuku kapsamında şirketler hukuku, sözleşme uyuşmazlıkları, düzenleyici uyumluluk ve iş yapılanması konularında uzman hukuki danışmanlık."}, {"field": "Vergi Hukuku Uzmanları", "desc": "KDV, kurumlar vergisi, sınır ötesi işlemler ve Kamu Gelirler İdaresi ile vergi uyuşmazlıklarının çözümü konularında uzman rehberlik."}, {"field": "Finansal Planlama", "desc": "Sürdürülebilir büyüme için stratejik finansal planlama, yatırım danışmanlığı, nakit akışı optimizasyonu ve uzun vadeli finansal modelleme."}, {"field": "Denetim & Güvence", "desc": "Mali tabloların şirket performansını doğru yansıttığını sağlayan bağımsız denetim hizmetleri ve iç kontrol incelemeleri."}, {"field": "İş Danışmanlığı", "desc": "Her büyüme aşamasındaki şirketler için operasyonel verimlilik, pazar giriş stratejisi, yeniden yapılanma ve performans iyileştirme."}, {"field": "Şirket Kuruluşu", "desc": "Yeni işletme tescili, yönetim kurulumu ve uyumluluk altyapısı için ilk günden kapsamlı rehberlik."}]}, "services": {"tag": "Ne Sunuyoruz", "h2Line1": "İşletmenize özel", "h2Em": "hizmetler.", "sub": "Kuzey Makedonya'daki şirketler için günlük defter tutmadan uzun vadeli finansal stratejiye kadar kapsamlı muhasebe ve danışmanlık çözümleri.", "cards": [{"num": "01", "title": "Defter Tutma & Finansal Kayıtlar", "desc": "Makedonya standartlarına tam uyum içinde tüm finansal kayıtların — borçlar/alacaklar, banka mutabakatı ve aylık raporlama — doğru ve zamanında tutulması."}, {"num": "02", "title": "Vergi Planlaması & Uyumu", "desc": "Yükümlülükleri en aza indirirken tam uyumu sağlamak için stratejik vergi planlaması. Kamu Gelirler İdaresi'ne tüm gerekli vergi beyannamelerinin hazırlanması ve sunulması."}, {"num": "03", "title": "Bordro Yönetimi", "desc": "Tam bordro işleme, çalışan katkı hesaplamaları ve yetkililere zamanında raporlama — böylece insanlara odaklanabilirsiniz, evrak işlerine değil."}, {"num": "04", "title": "Finansal Raporlama & Analiz", "desc": "Güvenli iş kararları almak için gerekli içgörüyü sağlayan net, uygulanabilir mali tablolar — bilançolar, kâr & zarar, nakit akışı."}, {"num": "05", "title": "Şirket Tescili & Startup", "desc": "Makedonya'da işletme tescili sürecinde kapsamlı rehberlik — hukuki yapı tavsiyesi, başlangıç muhasebe kurulumu ve ilk günden itibaren uyumluluk yol haritası."}, {"num": "06", "title": "İş & Finansal Danışmanlık", "desc": "Standart muhasebenin ötesinde güvenilir bir ortak olarak stratejik finansal planlama, maliyet kontrolü, yatırım kararları ve büyüme danışmanlığı."}]}, "testimonials": {"tag": "Müşterilerimiz", "h2Line1": "Bize güvenen", "h2Em": "şirketler.", "items": [{"text": "Nuran ve Hajra işimiz için vazgeçilmez oldu. Birleşik uzmanlıkları, her zaman hem güncel bilgiye hem de derin stratejik içgörüye sahip olmamız anlamına geliyor.", "name": "Marko Kostovski", "company": "CEO · TechVenture Üsküp", "initials": "MK"}, {"text": "Şirket tescilinden günlük defter tutmaya kadar — ekip her şeyi profesyonellikle halletti. Beş yıl sonra hâlâ finanslarımızı başka kimseye emanet etmezdim.", "name": "Sara Vasileva", "company": "Sahibi · Boutique Collective", "initials": "SV"}, {"text": "Hajra'nın deneyimi dikkat çekici — önceki muhasebecimizin tamamen kaçırdığı vergi optimizasyon stratejilerini belirledi. Tasarruflar önemli ölçüde oldu.", "name": "Bojan Nikoloski", "company": "Direktör · NordBuild DOOEL", "initials": "BN"}]}, "contact": {"tag": "Bize Ulaşın", "h2Line1": "Finansal ihtiyaçlarınızı", "h2Em": "konuşalım.", "p": "İşletmenizi gerçekten anlayan bir firma ile çalışmaya hazır mısınız? Ücretsiz ilk danışma için ulaşın — hedefleriniz hakkında bilgi almak isteriz.", "locationLabel": "Konum", "locationVal": "Üsküp, Kuzey Makedonya", "emailLabel": "E-posta", "phoneLabel": "Telefon", "firstName": "Ad", "firstNamePh": "Adınız", "lastName": "Soyad", "lastNamePh": "Soyadınız", "emailPh": "siz@sirket.mk", "companyLabel": "Şirket Adı", "companyPh": "Şirketiniz DOOEL", "serviceLabel": "İlgilendiğiniz Hizmet", "serviceDefault": "Bir hizmet seçin...", "serviceOptions": ["Defter Tutma & Finansal Kayıtlar", "Vergi Planlaması & Uyumu", "Bordro Yönetimi", "Finansal Raporlama & Analiz", "Şirket Tescili & Startup", "İş & Finansal Danışmanlık", "Profesyonel Danışmanlık Hizmetleri"], "messageLabel": "Mesaj", "messagePh": "İşletmeniz ve yardıma ihtiyaç duyduğunuz konular hakkında kısaca bilgi verin...", "submit": "Mesaj Gönder →", "submitted": "Mesaj Gönderildi ✓"}, "footer": {"logoSmall": "Sertifikalı Muhasebeciler · Üsküp, Kuzey Makedonya", "copy": "© 2025 Adea Consulting. Tüm hakları saklıdır.", "team": "Ekip", "advisors": "Danışmanlar", "services": "Hizmetler", "contact": "İletişim"}}};

const LangContext = createContext(null);
function useLang() { return useContext(LangContext); }

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return isMobile;
}

const T = {
  ink:"#141210", cream:"#f6f3ee", warm:"#ece7dd", navy:"#1c2340",
  gold:"#b8924a", goldLight:"#d4aa6a", muted:"#6b6560", white:"#ffffff",
  border:"rgba(184,146,74,0.18)", borderNav:"rgba(184,146,74,0.22)",
};
const FONT_DISPLAY = "'Cormorant Garamond', serif";
const FONT_BODY    = "'DM Sans', sans-serif";

function FontInjector() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const base = document.createElement("style");
    base.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { font-family: ${FONT_BODY}; background: ${T.cream}; color: ${T.ink}; overflow-x: hidden; }
      ::selection { background: ${T.gold}; color: ${T.white}; }
      .reveal { opacity:0; transform:translateY(28px); transition: opacity .65s ease, transform .65s ease; }
      .reveal.visible { opacity:1; transform:translateY(0); }
    `;
    document.head.appendChild(base);
  }, []);
  return null;
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.classList.add("reveal");
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function SectionTag({ children, light = false }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:14, fontSize:".95rem", letterSpacing:".22em", textTransform:"uppercase", color: light ? T.goldLight : T.gold, marginBottom:24, fontFamily:FONT_BODY }}>
      <div style={{ width:32, height:1, background: light ? T.goldLight : T.gold, flexShrink:0 }} />
      {children}
    </div>
  );
}

function SectionH2({ children, light = false, style = {} }) {
  return (
    <h2 style={{ fontFamily:FONT_DISPLAY, fontSize:"clamp(2.6rem,4vw,4.8rem)", fontWeight:300, lineHeight:1.1, color: light ? "rgba(246,243,238,.92)" : T.ink, ...style }}>
      {children}
    </h2>
  );
}

function BtnPrimary({ children, onClick, fullWidth }) {
  const [hov, setHov] = useState(false);
  return (
    <button style={{ background: hov ? T.gold : T.navy, color:T.white, padding:"20px 52px", fontSize:"1rem", letterSpacing:".12em", textTransform:"uppercase", border:"none", cursor:"pointer", fontFamily:FONT_BODY, transition:"background .3s", width: fullWidth ? "100%" : "auto" }}
      onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </button>
  );
}
function BtnOutline({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return <button style={{ fontSize:"1rem", letterSpacing:".1em", textTransform:"uppercase", color: hov ? T.gold : T.muted, background:"transparent", border:"none", cursor:"pointer", fontFamily:FONT_BODY, transition:"color .3s", display:"flex", alignItems:"center", gap:8 }} onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>;
}

function LangSwitcher({ lang, setLang }) {
  const langs = [{ code:"en", label:"EN" }, { code:"mk", label:"МК" }, { code:"sq", label:"SQ" }, { code:"tr", label:"TR" }];
  return (
    <div style={{ display:"flex", gap:6, alignItems:"center" }}>
      {langs.map(({ code, label }) => (
        <button key={code} onClick={() => setLang(code)} style={{ background: lang === code ? T.gold : "transparent", color: lang === code ? T.white : T.muted, border:`1px solid ${lang === code ? T.gold : T.border}`, padding:"5px 12px", fontSize:".78rem", letterSpacing:".1em", cursor:"pointer", fontFamily:FONT_BODY, transition:"all .25s", borderRadius:2 }}>{label}</button>
      ))}
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ lang, setLang }) {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const scroll = (id) => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:200,
        padding: isMobile ? "14px 0" : scrolled ? "20px 0" : "32px 0",
        display:"flex", alignItems:"center",
        transition:"background .4s, padding .4s",
        background: isMobile ? T.cream : scrolled ? "rgba(246,243,238,0.96)" : "transparent",
        backdropFilter: (!isMobile && scrolled) ? "blur(16px)" : "none",
        borderBottom: isMobile ? `1px solid ${T.borderNav}` : scrolled ? `1px solid ${T.borderNav}` : "1px solid transparent",
        boxShadow: isMobile ? "0 2px 12px rgba(0,0,0,0.06)" : "none"
      }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", maxWidth:1800, margin:"0 auto", padding: isMobile ? "0 20px" : "0 80px" }}>
          {/* LOGO */}
          <a href="#" style={{ fontFamily:FONT_DISPLAY, fontSize: isMobile ? "1.35rem" : "1.7rem", fontWeight:500, letterSpacing:".04em", color:T.ink, textDecoration:"none", lineHeight:1.15, cursor:"pointer", flexShrink:0 }} onClick={e => { e.preventDefault(); window.scrollTo({top:0, behavior:"smooth"}); setMenuOpen(false); }}>
            ADEA <span style={{ color:T.gold }}>Consulting</span>
            {!isMobile && <small style={{ display:"block", fontFamily:FONT_BODY, fontSize:".75rem", letterSpacing:".18em", textTransform:"uppercase", color:T.muted, fontWeight:400, marginTop:2 }}>{t("nav.logoSmall")}</small>}
          </a>

          {/* DESKTOP: nav links + lang + cta */}
          {!isMobile && (
            <>
              <ul style={{ display:"flex", gap:40, listStyle:"none" }}>
                {[["about","nav.about"],["advisors","nav.advisors"],["services","nav.services"],["testimonials","nav.testimonials"],["contact","nav.contact"]].map(([id,key]) => (
                  <li key={id}><span style={{ fontSize:"1rem", letterSpacing:".1em", textTransform:"uppercase", color:T.muted, transition:"color .3s", fontFamily:FONT_BODY, cursor:"pointer" }} onClick={() => scroll(id)} onMouseEnter={e => e.target.style.color=T.gold} onMouseLeave={e => e.target.style.color=T.muted}>{t(key)}</span></li>
                ))}
              </ul>
              <div style={{ display:"flex", alignItems:"center", gap:20 }}>
                <LangSwitcher lang={lang} setLang={setLang} />
                <button style={{ fontSize:"1rem", letterSpacing:".1em", textTransform:"uppercase", padding:"13px 36px", border:`1px solid ${T.gold}`, color:T.gold, cursor:"pointer", transition:"all .3s", fontFamily:FONT_BODY, background:"transparent" }} onClick={() => scroll("contact")} onMouseEnter={e => { e.target.style.background=T.gold; e.target.style.color=T.white; }} onMouseLeave={e => { e.target.style.background="transparent"; e.target.style.color=T.gold; }}>{t("nav.cta")}</button>
              </div>
            </>
          )}

          {/* MOBILE: hamburger only */}
          {isMobile && (
            <button onClick={() => setMenuOpen(o => !o)} style={{ background:"none", border:"none", cursor:"pointer", padding:"8px", display:"flex", flexDirection:"column", justifyContent:"center", gap:"6px", flexShrink:0 }}>
              <span style={{ display:"block", width:26, height:2, background: menuOpen ? T.gold : T.ink, transition:"all .28s", transformOrigin:"center", transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }} />
              <span style={{ display:"block", width:26, height:2, background: menuOpen ? T.gold : T.ink, transition:"all .28s", opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "scaleX(1)" }} />
              <span style={{ display:"block", width:26, height:2, background: menuOpen ? T.gold : T.ink, transition:"all .28s", transformOrigin:"center", transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }} />
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE FULL MENU */}
      {isMobile && (
        <div style={{
          position:"fixed", top:57, left:0, right:0, bottom:0, zIndex:190,
          background:T.cream,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition:"transform .32s ease",
          display:"flex", flexDirection:"column",
          overflowY:"auto"
        }}>
          {/* Nav links */}
          <div style={{ flex:1, display:"flex", flexDirection:"column", padding:"12px 0" }}>
            {[["about","nav.about"],["advisors","nav.advisors"],["services","nav.services"],["testimonials","nav.testimonials"],["contact","nav.contact"]].map(([id,key]) => (
              <button key={id} onClick={() => scroll(id)} style={{ fontFamily:FONT_DISPLAY, fontSize:"2rem", fontWeight:300, color:T.ink, background:"none", border:"none", borderBottom:`1px solid ${T.border}`, cursor:"pointer", padding:"18px 28px", textAlign:"left", letterSpacing:".02em" }}>{t(key)}</button>
            ))}
          </div>
          {/* CTA + lang at bottom */}
          <div style={{ padding:"24px 28px 40px", borderTop:`1px solid ${T.border}`, display:"flex", flexDirection:"column", gap:20 }}>
            <button style={{ width:"100%", fontSize:".9rem", letterSpacing:".14em", textTransform:"uppercase", padding:"18px", background:T.navy, color:T.white, border:"none", cursor:"pointer", fontFamily:FONT_BODY }} onClick={() => scroll("contact")}>{t("nav.cta")}</button>
            <div style={{ display:"flex", justifyContent:"center" }}>
              <LangSwitcher lang={lang} setLang={setLang} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  const anim = (d) => visible ? { opacity:1, transform:"translateY(0)", transition:`opacity .65s ease ${d}ms, transform .65s ease ${d}ms` } : { opacity:0, transform:"translateY(28px)" };
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  if (isMobile) {
    return (
      <section id="hero" style={{ background:T.cream, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none", backgroundImage:`linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`, backgroundSize:"80px 80px", opacity:.35 }} />
        {/* Partner cards */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", background:T.navy, position:"relative", zIndex:1, marginTop:56 }}>
          {[
            { mono:"NR", nameKey:"hero.partner1Name", roleKey:"hero.partner1Role", expKey:"hero.partner1Exp", bg:"linear-gradient(160deg,#253060,#1c2340)", borderR:`1px solid rgba(184,146,74,.2)` },
            { mono:"HD", nameKey:"hero.partner2Name", roleKey:"hero.partner2Role", expKey:"hero.partner2Exp", bg:"linear-gradient(160deg,#1a1e35,#141829)", borderR:"none" },
          ].map(p => (
            <div key={p.mono} style={{ background:p.bg, borderRight:p.borderR, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"32px 16px", minHeight:200 }}>
              <div style={{ fontFamily:FONT_DISPLAY, fontSize:"4rem", fontWeight:300, color:"rgba(184,146,74,.12)", lineHeight:1, userSelect:"none" }}>{p.mono}</div>
              <div style={{ textAlign:"center", marginTop:10 }}>
                <div style={{ fontFamily:FONT_DISPLAY, fontSize:"1.15rem", fontWeight:400, color:"rgba(246,243,238,.9)", lineHeight:1.2 }}>{t(p.nameKey)}</div>
                <div style={{ fontSize:".65rem", letterSpacing:".14em", textTransform:"uppercase", color:T.goldLight, marginTop:8, fontFamily:FONT_BODY, lineHeight:1.5 }}>{t(p.roleKey)}</div>
                <div style={{ fontSize:".75rem", color:"rgba(246,243,238,.35)", marginTop:5, fontFamily:FONT_BODY }}>{t(p.expKey)}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Hero content */}
        <div style={{ padding:"40px 24px 60px", position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:".75rem", letterSpacing:".14em", textTransform:"uppercase", color:T.gold, marginBottom:20, fontFamily:FONT_BODY, ...anim(80) }}>
            <div style={{ width:20, height:1, background:T.gold, flexShrink:0 }} />{t("hero.tag")}
          </div>
          <h1 style={{ fontFamily:FONT_DISPLAY, fontSize:"clamp(2.8rem,10vw,3.8rem)", fontWeight:300, lineHeight:1.06, marginBottom:24, ...anim(200) }}>
            {t("hero.h1Line1")}<br />{t("hero.h1Line2")}<br /><em style={{ fontStyle:"italic", color:T.gold }}>{t("hero.h1Em")}</em>
          </h1>
          <p style={{ fontSize:"1.05rem", color:T.muted, lineHeight:1.75, marginBottom:36, fontWeight:300, ...anim(320) }}>{t("hero.p")}</p>
          <div style={{ display:"flex", flexDirection:"column", gap:12, ...anim(440) }}>
            <BtnPrimary onClick={() => scroll("contact")} fullWidth>{t("hero.cta")}</BtnPrimary>
            <div style={{ display:"flex", justifyContent:"center" }}><BtnOutline onClick={() => scroll("services")}>{t("hero.ctaSecondary")}</BtnOutline></div>
          </div>
          <div style={{ marginTop:44, paddingTop:32, borderTop:`1px solid ${T.border}`, display:"flex", ...anim(560) }}>
            {[["hero.stat1Num","hero.stat1Sup","hero.stat1Label",false],["hero.stat2Num","hero.stat2Sup","hero.stat2Label",false],["hero.stat3Num","hero.stat3Sup","hero.stat3Label",true]].map(([nk,sk,lk,last]) => (
              <div key={lk} style={last ? { flex:1 } : { flex:1, paddingRight:12, borderRight:`1px solid ${T.border}`, marginRight:12 }}>
                <div style={{ fontFamily:FONT_DISPLAY, fontSize:"2.4rem", fontWeight:300, lineHeight:1, color:T.ink }}>{t(nk)}<sup style={{ fontSize:"1.1rem", color:T.gold, verticalAlign:"super" }}>{t(sk)}</sup></div>
                <div style={{ fontSize:".7rem", letterSpacing:".1em", textTransform:"uppercase", color:T.muted, marginTop:6, fontFamily:FONT_BODY }}>{t(lk)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP — untouched
  return (
    <section id="hero" style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", background:T.cream }}>
      <div style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none", backgroundImage:`linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`, backgroundSize:"80px 80px", opacity:.35 }} />
      <div style={{ display:"grid", gridTemplateColumns:"1.1fr .9fr", width:"100%", maxWidth:1800, margin:"0 auto", padding:"160px 80px 100px", position:"relative", zIndex:2, gap:0 }}>
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", paddingRight:80 }}>
          <div style={{ display:"flex", alignItems:"center", gap:14, fontSize:"1rem", letterSpacing:".22em", textTransform:"uppercase", color:T.gold, marginBottom:32, fontFamily:FONT_BODY, ...anim(80) }}>
            <div style={{ width:36, height:1, background:T.gold }} />{t("hero.tag")}
          </div>
          <h1 style={{ fontFamily:FONT_DISPLAY, fontSize:"clamp(3.8rem,5.5vw,7rem)", fontWeight:300, lineHeight:1.04, letterSpacing:"-.01em", marginBottom:40, ...anim(220) }}>
            {t("hero.h1Line1")}<br />{t("hero.h1Line2")}<br /><em style={{ fontStyle:"italic", color:T.gold }}>{t("hero.h1Em")}</em>
          </h1>
          <p style={{ fontSize:"1.25rem", color:T.muted, lineHeight:1.75, maxWidth:520, marginBottom:56, fontWeight:300, ...anim(360) }}>{t("hero.p")}</p>
          <div style={{ display:"flex", alignItems:"center", gap:36, ...anim(500) }}>
            <BtnPrimary onClick={() => scroll("contact")}>{t("hero.cta")}</BtnPrimary>
            <BtnOutline onClick={() => scroll("services")}>{t("hero.ctaSecondary")}</BtnOutline>
          </div>
          <div style={{ marginTop:80, paddingTop:44, borderTop:`1px solid ${T.border}`, display:"flex", ...anim(640) }}>
            {[["hero.stat1Num","hero.stat1Sup","hero.stat1Label",false],["hero.stat2Num","hero.stat2Sup","hero.stat2Label",false],["hero.stat3Num","hero.stat3Sup","hero.stat3Label",true]].map(([nk,sk,lk,last]) => (
              <div key={lk} style={last ? {} : { paddingRight:56, borderRight:`1px solid ${T.border}`, marginRight:56 }}>
                <div style={{ fontFamily:FONT_DISPLAY, fontSize:"3.8rem", fontWeight:300, lineHeight:1, color:T.ink }}>{t(nk)}<sup style={{ fontSize:"1.8rem", color:T.gold, verticalAlign:"super" }}>{t(sk)}</sup></div>
                <div style={{ fontSize:".9rem", letterSpacing:".14em", textTransform:"uppercase", color:T.muted, marginTop:8, fontFamily:FONT_BODY }}>{t(lk)}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position:"relative", overflow:"hidden", background:T.navy, minHeight:"80vh", borderRadius:2 }}>
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(184,146,74,.08) 0%, transparent 60%)" }} />
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:1, background:`linear-gradient(to bottom, transparent, ${T.gold}, transparent)` }} />
          <div style={{ position:"absolute", inset:0, display:"grid", gridTemplateRows:"1fr 1fr", gap:2 }}>
            {[
              { mono:"NR", nameKey:"hero.partner1Name", roleKey:"hero.partner1Role", expKey:"hero.partner1Exp", bg:"linear-gradient(160deg, #253060 0%, #1c2340 100%)", border:`1px solid rgba(184,146,74,.2)` },
              { mono:"HD", nameKey:"hero.partner2Name", roleKey:"hero.partner2Role", expKey:"hero.partner2Exp", bg:"linear-gradient(160deg, #1a1e35 0%, #141829 100%)", border:"none" },
            ].map(p => (
              <div key={p.mono} style={{ background:p.bg, borderBottom:p.border, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
                <div style={{ fontFamily:FONT_DISPLAY, fontSize:"7rem", fontWeight:300, color:"rgba(184,146,74,.15)", lineHeight:1, userSelect:"none" }}>{p.mono}</div>
                <div style={{ textAlign:"center", marginTop:16 }}>
                  <div style={{ fontFamily:FONT_DISPLAY, fontSize:"1.6rem", fontWeight:400, color:"rgba(246,243,238,.9)" }}>{t(p.nameKey)}</div>
                  <div style={{ fontSize:".85rem", letterSpacing:".18em", textTransform:"uppercase", color:T.goldLight, marginTop:8, fontFamily:FONT_BODY }}>{t(p.roleKey)}</div>
                  <div style={{ fontSize:".9rem", color:"rgba(246,243,238,.35)", marginTop:6, fontFamily:FONT_BODY }}>{t(p.expKey)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const r1=useReveal(), r2=useReveal(), r3=useReveal(), r4=useReveal();
  return (
    <section id="about" style={{ padding: isMobile ? "60px 24px" : "140px 80px", background:T.white }}>
      <div style={{ maxWidth:1800, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 100, alignItems:"end", marginBottom: isMobile ? 40 : 80 }}>
          <div>
            <div ref={r1}><SectionTag>{t("about.tag")}</SectionTag></div>
            <div ref={r2}><SectionH2 style={{marginTop:4}}>{t("about.h2Line1")}<br /><em style={{fontStyle:"italic",color:T.gold}}>{t("about.h2Em")}</em></SectionH2></div>
            <p ref={r3} style={{ fontSize: isMobile ? "1.05rem" : "1.2rem", color:T.muted, lineHeight:1.8, fontWeight:300, marginTop:24 }} dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
            <p style={{ fontSize: isMobile ? "1.05rem" : "1.2rem", color:T.muted, lineHeight:1.8, fontWeight:300, marginTop:24 }}>{t("about.p2")}</p>
          </div>
          <div ref={r4} style={{ background:T.cream, padding: isMobile ? "32px 20px" : 56, display:"grid", gridTemplateColumns:"1fr 1fr", gap: isMobile ? 24 : 48, borderTop:`3px solid ${T.gold}` }}>
            {[["about.stat1Num","about.stat1Label"],["about.stat2Num","about.stat2Label"],["about.stat3Num","about.stat3Label"],["about.stat4Num","about.stat4Label"]].map(([nk,lk]) => (
              <div key={lk}>
                <div style={{ fontFamily:FONT_DISPLAY, fontSize: isMobile ? "2.4rem" : "3.4rem", fontWeight:300, color:T.navy, lineHeight:1 }}>{t(nk)}</div>
                <div style={{ fontSize:".82rem", letterSpacing:".12em", textTransform:"uppercase", color:T.muted, marginTop:8, fontFamily:FONT_BODY }}>{t(lk)}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:2, background:T.warm }}>
          <TeamCard fullName="Nuran Ramadani" initials="NR" titleKey="about.nuranTitle" expKey="about.nuranExp" bioKey="about.nuranBio" />
          <TeamCard fullName="Hajra Demirovic" initials="HD" titleKey="about.hajraTitle" expKey="about.hajraExp" bioKey="about.hajraBio" />
        </div>
      </div>
    </section>
  );
}

function TeamCard({ fullName, initials, titleKey, expKey, bioKey }) {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const [hov, setHov] = useState(false);
  const ref = useReveal();
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: hov ? T.cream : T.white, padding: isMobile ? "36px 24px" : "64px 60px", position:"relative", overflow:"hidden", transition:"background .3s", borderTop: hov ? `3px solid ${T.gold}` : `3px solid transparent` }}>
      <div style={{ width:72, height:72, background:T.navy, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:FONT_DISPLAY, fontSize:"1.8rem", color:"rgba(184,146,74,.7)", fontWeight:300, marginBottom:24 }}>{initials}</div>
      <div style={{ fontFamily:FONT_DISPLAY, fontSize: isMobile ? "2rem" : "2.4rem", fontWeight:400, color:T.ink, marginBottom:8, lineHeight:1.15 }}>{fullName}</div>
      <div style={{ fontSize:".85rem", letterSpacing:".18em", textTransform:"uppercase", color:T.gold, marginBottom:16, fontFamily:FONT_BODY }}>{t(titleKey)}</div>
      <div style={{ display:"inline-block", background:T.navy, color:"rgba(246,243,238,.7)", fontSize:".82rem", letterSpacing:".12em", textTransform:"uppercase", padding:"6px 16px", marginBottom:24, fontFamily:FONT_BODY }}>{t(expKey)}</div>
      <p style={{ fontSize:"1.05rem", color:T.muted, lineHeight:1.75, fontWeight:300 }}>{t(bioKey)}</p>
      <div style={{ position:"absolute", right:-10, bottom:-20, fontFamily:FONT_DISPLAY, fontSize:"10rem", fontWeight:300, color:"rgba(184,146,74,.05)", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>{initials}</div>
    </div>
  );
}

// ─── ADVISORS ─────────────────────────────────────────────────────────────────
function Advisors() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const r1=useReveal(), r2=useReveal(), r3=useReveal();
  const cards = t("advisors.cards");
  return (
    <section id="advisors" style={{ padding: isMobile ? "60px 24px" : "140px 80px", background:T.navy }}>
      <div style={{ maxWidth:1800, margin:"0 auto" }}>
        <div style={{ marginBottom: isMobile ? 40 : 72 }}>
          <div ref={r1}><SectionTag light>{t("advisors.tag")}</SectionTag></div>
          <div ref={r2}><SectionH2 light style={{marginTop:4}}>{t("advisors.h2Line1")}<br /><em style={{fontStyle:"italic",color:T.gold}}>{t("advisors.h2Em")}</em></SectionH2></div>
          <p ref={r3} style={{ fontSize:"1.05rem", color:"rgba(246,243,238,.4)", lineHeight:1.75, fontWeight:300, maxWidth:520, marginTop:20, fontFamily:FONT_BODY }}>{t("advisors.sub")}</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap:1, background:"rgba(255,255,255,.05)" }}>
          {Array.isArray(cards) && cards.map((c, i) => <AdvisorCard key={i} field={c.field} desc={c.desc} icon={["⚖","📋","📈","🔍","💼","🏛"][i]} />)}
        </div>
      </div>
    </section>
  );
}

function AdvisorCard({ field, desc, icon }) {
  const isMobile = useIsMobile();
  const [hov, setHov] = useState(false);
  const ref = useReveal();
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: hov ? "rgba(255,255,255,.03)" : T.navy, padding: isMobile ? "28px 24px" : "52px 44px", borderBottom: hov ? `2px solid ${T.gold}` : "2px solid transparent", transition:"border-color .3s, background .3s" }}>
      <span style={{ fontSize:"2rem", marginBottom:18, display:"block", opacity: hov ? 1 : .5, transition:"opacity .3s" }}>{icon}</span>
      <div style={{ fontFamily:FONT_DISPLAY, fontSize:"1.6rem", fontWeight:400, color:"rgba(246,243,238,.88)", marginBottom:12, lineHeight:1.2 }}>{field}</div>
      <p style={{ fontSize:"1rem", color:"rgba(246,243,238,.4)", lineHeight:1.75, fontWeight:300, fontFamily:FONT_BODY }}>{desc}</p>
    </div>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function Services() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const r1 = useReveal();
  const cards = t("services.cards");
  return (
    <section id="services" style={{ padding: isMobile ? "60px 24px" : "140px 80px", background:T.cream }}>
      <div style={{ maxWidth:1800, margin:"0 auto" }}>
        <div ref={r1} style={{ marginBottom: isMobile ? 40 : 72 }}>
          <SectionTag>{t("services.tag")}</SectionTag>
          <SectionH2 style={{marginTop:16}}>{t("services.h2Line1")}<br /><em style={{fontStyle:"italic",color:T.gold}}>{t("services.h2Em")}</em></SectionH2>
          <p style={{ maxWidth:520, color:T.muted, fontSize:"1.05rem", lineHeight:1.75, fontWeight:300, marginTop:20 }}>{t("services.sub")}</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap:2, background:T.warm }}>
          {Array.isArray(cards) && cards.map(sv => <ServiceCard key={sv.num} num={sv.num} title={sv.title} desc={sv.desc} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ num, title, desc }) {
  const isMobile = useIsMobile();
  const [hov, setHov] = useState(false);
  const ref = useReveal();
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: hov ? T.cream : T.white, padding: isMobile ? "32px 24px" : "56px 48px", borderBottom: hov ? `2px solid ${T.gold}` : "2px solid transparent", transition:"border-bottom-color .3s, background .3s" }}>
      <span style={{ fontFamily:FONT_DISPLAY, fontSize:"1rem", color:T.gold, letterSpacing:".18em", marginBottom:20, display:"block" }}>{num}</span>
      <h3 style={{ fontFamily:FONT_DISPLAY, fontSize:"1.55rem", fontWeight:400, color:T.ink, marginBottom:14, lineHeight:1.25 }}>{title}</h3>
      <p style={{ fontSize:"1rem", color:T.muted, lineHeight:1.75, fontWeight:300, fontFamily:FONT_BODY }}>{desc}</p>
    </div>
  );
}

// ─── CLIENTS ──────────────────────────────────────────────────────────────────
const CLIENT_NAMES = [
  "Sloga Jugomagnat","Forever Trend","Erko Prom","Dubai MM","Dzambo",
  "Orto Pro Eter","Tan Energy","Idea Plus","Aria Trans","Lona \u0160ped",
  "Dans International","Srma Inzinering","Sen Kompani","Kron Oil","B Petrol",
  "Besa Trans Group","Mimer","Triumviri","Alba Energy","Krnjovo Komerc",
  "Sheko Trans","Senta Klas","Vejslo Kompani","Reksus Led","Elektro Remont",
];

function Clients() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const r1 = useReveal();
  const r2 = useReveal();
  return (
    <section id="testimonials" style={{ padding: isMobile ? "60px 24px" : "140px 80px", background:T.white }}>
      <div style={{ maxWidth:1400, margin:"0 auto" }}>
        <div ref={r1}><SectionTag>{t("testimonials.tag")}</SectionTag></div>
        <div ref={r2}>
          <SectionH2 style={{marginTop:4}}>
            {t("testimonials.h2Line1")}<br />
            <em style={{fontStyle:"italic", color:T.gold}}>{t("testimonials.h2Em")}</em>
          </SectionH2>
        </div>
        <div style={{
          display:"grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)",
          gap:1,
          marginTop: isMobile ? 40 : 72,
          background:T.warm,
        }}>
          {CLIENT_NAMES.map((name, i) => <ClientItem key={i} name={name} />)}
        </div>
      </div>
    </section>
  );
}

function ClientItem({ name }) {
  const [hov, setHov] = useState(false);
  const ref = useReveal();
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? T.cream : T.white, padding:"28px 24px", borderBottom: hov ? `2px solid ${T.gold}` : "2px solid transparent", transition:"background .25s, border-color .25s", display:"flex", alignItems:"center", gap:12 }}>
      <div style={{ width:6, height:6, background: hov ? T.gold : T.muted, borderRadius:"50%", flexShrink:0, transition:"background .25s" }} />
      <span style={{ fontFamily:FONT_DISPLAY, fontSize:"1.25rem", fontWeight:400, color: hov ? T.ink : T.muted, lineHeight:1.2, transition:"color .25s" }}>{name}</span>
    </div>
  );
}


// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const r1=useReveal(), r2=useReveal();
  const [submitted, setSubmitted] = useState(false);
  const opts = t("contact.serviceOptions");
  const inp = { width:"100%", background:T.cream, border:`1px solid ${T.border}`, padding:"14px 16px", fontFamily:FONT_BODY, fontSize:"1rem", color:T.ink, outline:"none" };
  const lbl = { display:"block", fontSize:".82rem", letterSpacing:".14em", textTransform:"uppercase", color:T.muted, marginBottom:8, fontFamily:FONT_BODY };
  const details = [
    { icon:"📍", labelKey:"contact.locationLabel", val:t("contact.locationVal") },
    { icon:"✉️", labelKey:"contact.emailLabel",    val:"info@adeaconsulting.mk" },
    { icon:"📞", labelKey:"contact.phoneLabel",    val:"+389 70 424 069" },
  ];
  return (
    <section id="contact" style={{ padding: isMobile ? "60px 24px" : "140px 80px", background:T.warm }}>
      <div style={{ maxWidth:1400, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr", gap: isMobile ? 40 : 100 }}>
          <div>
            <div ref={r1}><SectionTag>{t("contact.tag")}</SectionTag></div>
            <SectionH2 style={{marginTop:4}}>{t("contact.h2Line1")}<br /><em style={{fontStyle:"italic",color:T.gold}}>{t("contact.h2Em")}</em></SectionH2>
            <p style={{ fontSize:"1.05rem", color:T.muted, lineHeight:1.8, fontWeight:300, margin:"24px 0 36px" }}>{t("contact.p")}</p>
            {details.map((d, i) => (
              <div key={d.labelKey} style={{ display:"flex", alignItems:"flex-start", gap:16, marginBottom:20, paddingBottom:20, ...(i < details.length-1 ? { borderBottom:`1px solid ${T.border}` } : {}) }}>
                <span style={{ color:T.gold, fontSize:"1.2rem", flexShrink:0, marginTop:2 }}>{d.icon}</span>
                <div>
                  <div style={{ fontSize:".8rem", letterSpacing:".14em", textTransform:"uppercase", color:T.muted, marginBottom:4, fontFamily:FONT_BODY }}>{t(d.labelKey)}</div>
                  <div style={{ fontSize:"1.05rem", color:T.ink, fontFamily:FONT_BODY }}>{d.val}</div>
                </div>
              </div>
            ))}
          </div>
          <div ref={r2} style={{ background:T.white, padding: isMobile ? "32px 20px" : "64px 60px" }}>
            <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap:16 }}>
              <div style={{ marginBottom:16 }}><label style={lbl}>{t("contact.firstName")}</label><input style={inp} placeholder={t("contact.firstNamePh")} /></div>
              <div style={{ marginBottom:16 }}><label style={lbl}>{t("contact.lastName")}</label><input style={inp} placeholder={t("contact.lastNamePh")} /></div>
            </div>
            <div style={{ marginBottom:16 }}><label style={lbl}>{t("contact.emailLabel")}</label><input style={inp} type="email" placeholder={t("contact.emailPh")} /></div>
            <div style={{ marginBottom:16 }}><label style={lbl}>{t("contact.companyLabel")}</label><input style={inp} placeholder={t("contact.companyPh")} /></div>
            <div style={{ marginBottom:16 }}>
              <label style={lbl}>{t("contact.serviceLabel")}</label>
              <select style={inp}>
                <option value="">{t("contact.serviceDefault")}</option>
                {Array.isArray(opts) && opts.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div style={{ marginBottom:16 }}><label style={lbl}>{t("contact.messageLabel")}</label><textarea style={{ ...inp, resize:"vertical", minHeight:110 }} placeholder={t("contact.messagePh")} /></div>
            <button style={{ width:"100%", background: submitted ? "#1a5c3a" : T.navy, color:T.white, border:"none", padding:18, fontFamily:FONT_BODY, fontSize:"1rem", letterSpacing:".13em", textTransform:"uppercase", cursor:"pointer", marginTop:8, transition:"background .3s" }}
              onClick={() => { setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }}
              onMouseEnter={e => { if (!submitted) e.target.style.background = T.gold; }}
              onMouseLeave={e => { if (!submitted) e.target.style.background = submitted ? "#1a5c3a" : T.navy; }}
            >{submitted ? t("contact.submitted") : t("contact.submit")}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const { t } = useLang();
  const isMobile = useIsMobile();
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  return (
    <footer style={{ background:T.ink, padding: isMobile ? "44px 24px" : "64px 80px", display:"flex", flexDirection: isMobile ? "column" : "row", alignItems:"center", justifyContent: isMobile ? "center" : "space-between", gap: isMobile ? 20 : 0, textAlign: isMobile ? "center" : "left" }}>
      <div style={{ fontFamily:FONT_DISPLAY, fontSize:"1.6rem", color:"rgba(246,243,238,.85)", fontWeight:300, lineHeight:1.2 }}>
        Adea <span style={{ color:T.gold }}>Consulting</span>
        <small style={{ display:"block", fontFamily:FONT_BODY, fontSize:".78rem", letterSpacing:".18em", textTransform:"uppercase", color:"rgba(246,243,238,.3)", marginTop:4 }}>{t("footer.logoSmall")}</small>
      </div>
      <div style={{ fontSize:".88rem", color:"rgba(246,243,238,.3)", fontFamily:FONT_BODY }}>{t("footer.copy")}</div>
      <div style={{ display:"flex", gap: isMobile ? 16 : 40, flexWrap:"wrap", justifyContent:"center" }}>
        {[["about","footer.team"],["advisors","footer.advisors"],["services","footer.services"],["contact","footer.contact"]].map(([id,key]) => (
          <button key={id} style={{ fontSize:".85rem", letterSpacing:".12em", textTransform:"uppercase", color:"rgba(246,243,238,.35)", background:"none", border:"none", cursor:"pointer", fontFamily:FONT_BODY, transition:"color .3s" }} onClick={() => scroll(id)} onMouseEnter={e => e.target.style.color=T.gold} onMouseLeave={e => e.target.style.color="rgba(246,243,238,.35)"}>{t(key)}</button>
        ))}
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("en");

  function t(key) {
    const parts = key.split(".");
    let val = TRANSLATIONS[lang];
    for (const p of parts) { val = val?.[p]; }
    if (val === undefined) {
      let fb = TRANSLATIONS["en"];
      for (const p of parts) { fb = fb?.[p]; }
      val = fb;
    }
    return val ?? key;
  }

  return (
    <LangContext.Provider value={{ lang, t }}>
      <FontInjector />
      <Navbar lang={lang} setLang={setLang} />
      <Hero />
      <About />
      <Advisors />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </LangContext.Provider>
  );
}