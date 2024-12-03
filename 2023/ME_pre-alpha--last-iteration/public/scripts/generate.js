//generate-side (nombre del side, nombre del boton)
	generator.generateSide('mathematics', 'mth');
	generator.generateSide('web-development', 'dw');
	generator.generateSide('networks', 'net');
	generator.generateSide('algorithms', 'agth');
	generator.generateSide('neuroscience', 'neuro');
//generate-tech (nombre del side, nombre del tech)
	generator.generateTech('web-development', 'js');
	generator.generateTech('web-development', 'css');
	generator.generateTech('web-development', 'php');
	generator.generateTech('web-development', 'db');
	generator.generateTech('web-development', 'ruby');

	generator.generateTech('mathematics', 'ath');
	generator.generateTech('mathematics', 'ag');
	generator.generateTech('mathematics', 'amt');

	generator.generateTech('networks', 'osi');
	generator.generateTech('networks', 'w¡ptc');

	generator.generateTech('algorithms', 'others');	

	generator.generateTech('neuroscience', 'mindfss');
//genrate-switch (nombre del side, nombre del switch) (los ultimos seran primeros y los primeros seran ultimos)
	generator.generateSwitch('neuroscience', 'guide');

	generator.generateSwitch('algorithms', 'reference');
	generator.generateSwitch('algorithms', 'articles');
	generator.generateSwitch('algorithms', 'courses');

	generator.generateSwitch('networks', 'reference');
	generator.generateSwitch('networks', 'courses');
	generator.generateSwitch('networks', 'articles');

	generator.generateSwitch('web-development', 'courses');
	generator.generateSwitch('web-development', 'articles');
	generator.generateSwitch('web-development', 'reference');

	generator.generateSwitch('mathematics', 'courses');
	generator.generateSwitch('mathematics', 'articles');

//generate-subTech (nombre del tech, nombre del subTech)
	generator.generateSubTech('js', 'core-js');
	generator.generateSubTech('js', 'frame-js');
	generator.generateSubTech('js', 'others-js');
	generator.generateSubTech('css', 'core-css');
	generator.generateSubTech('css', 'frame-css');
	generator.generateSubTech('css', 'others-css');
	generator.generateSubTech('php', 'core-php');
	generator.generateSubTech('php', 'frame-php');
	generator.generateSubTech('php', 'others-php');
	generator.generateSubTech('db', 'rdbms-db');
	generator.generateSubTech('db', 'nosql-db');
	generator.generateSubTech('db', 'cdb-db');
	generator.generateSubTech('db', 'others-db');
	generator.generateSubTech('ruby', 'core-ruby');
	generator.generateSubTech('ruby', 'frame-ruby');
	generator.generateSubTech('ruby', 'others-ruby');


	generator.generateSubTech('ath', 'references-ath');
	generator.generateSubTech('ath', 'theory-ath');
	generator.generateSubTech('ath', 'others-ath');
	generator.generateSubTech('ag', 'ref-ag');
	generator.generateSubTech('ag', 'elemental-ag');
	generator.generateSubTech('ag', 'lineal-ag');
	generator.generateSubTech('ag', 'abstracta-ag');
	generator.generateSubTech('ag', 'booleana-ag');
	generator.generateSubTech('ag', 'others-ag');
	generator.generateSubTech('amt', 'ref-amt');
	generator.generateSubTech('amt', 'caldif-amt');
	generator.generateSubTech('amt', 'calint-amt');
	generator.generateSubTech('amt', 'ed-amt');
	generator.generateSubTech('amt', 'ac-amt');
	generator.generateSubTech('amt', 'af-amt');
	generator.generateSubTech('amt', 'an-amt');
	generator.generateSubTech('amt', 'others-amt');


	generator.generateSubTech('w¡ptc', 'http¡s-w¡ptc');
	generator.generateSubTech('w¡ptc', 'tcp¡ip-w¡ptc');
	generator.generateSubTech('w¡ptc', 'ftp-w¡ptc');
	generator.generateSubTech('w¡ptc', 'smtp-w¡ptc');
	generator.generateSubTech('osi', 'layer-1');
	generator.generateSubTech('osi', 'layer-2');
	generator.generateSubTech('osi', 'layer-3');
	generator.generateSubTech('osi', 'layer-4');
	generator.generateSubTech('osi', 'layer-5');
	generator.generateSubTech('osi', 'layer-6');
	generator.generateSubTech('osi', 'layer-7');
	generator.generateSubTech('osi', 'others-osi');

	generator.generateSubTech('others', 'others-o');

	generator.generateSubTech('mindfss', 'mindfss');

//generate-link (nombre del subTech, numero del switch, identificacion del linker) (los ultimos seran primeros y los primeros seran ultimos)
	generator.generateLink('.subTechmindfss', 1, 'neurosciencemindfssguidemindfss');
													//side,tech,swt,subTech
	generator.generateLink('.subTechothers-o', 1, 'algorithmsothersreferenceothers');
	generator.generateLink('.subTechothers-o', 2, 'algorithmsothersarticlesothers');
	generator.generateLink('.subTechothers-o', 3, 'algorithmsotherscoursesothers');

	generator.generateLink('.subTechhttp¡s-w¡ptc', 1, 'networksw¡ptcreferencehttp¡s');
	generator.generateLink('.subTechtcp¡ip-w¡ptc', 1, 'networksw¡ptcreferencetcp¡ip');
	generator.generateLink('.subTechftp-w¡ptc', 1, 'networksw¡ptcreferenceftp');
	generator.generateLink('.subTechsmtp-w¡ptc', 1, 'networksw¡ptcreferencesmtp');
	generator.generateLink('.subTechhttp¡s-w¡ptc', 2, 'networksw¡ptccourseshttp¡s');
	generator.generateLink('.subTechtcp¡ip-w¡ptc', 2, 'networksw¡ptccoursestcp¡ip');
	generator.generateLink('.subTechftp-w¡ptc', 2, 'networksw¡ptccoursesftp');
	generator.generateLink('.subTechsmtp-w¡ptc', 2, 'networksw¡ptccoursessmtp');
	generator.generateLink('.subTechhttp¡s-w¡ptc', 3, 'networksw¡ptcarticleshttp¡s');
	generator.generateLink('.subTechtcp¡ip-w¡ptc', 3, 'networksw¡ptcarticlestcp¡ip');
	generator.generateLink('.subTechftp-w¡ptc', 3, 'networksw¡ptcarticlesftp');
	generator.generateLink('.subTechsmtp-w¡ptc', 3, 'networksw¡ptcarticlessmtp');
	generator.generateLink('.subTechlayer-1', 1, 'networksosireferencelayer-1');
	generator.generateLink('.subTechlayer-2', 1, 'networksosireferencelayer-2');
	generator.generateLink('.subTechlayer-3', 1, 'networksosireferencelayer-3');
	generator.generateLink('.subTechlayer-4', 1, 'networksosireferencelayer-4');
	generator.generateLink('.subTechlayer-5', 1, 'networksosireferencelayer-5');
	generator.generateLink('.subTechlayer-6', 1, 'networksosireferencelayer-6');
	generator.generateLink('.subTechlayer-7', 1, 'networksosireferencelayer-7');
	generator.generateLink('.subTechothers-osi', 1, 'networksosireferenceothers-osi');
	generator.generateLink('.subTechlayer-1', 2, 'networksosicourseslayer-1');
	generator.generateLink('.subTechlayer-2', 2, 'networksosicourseslayer-2');
	generator.generateLink('.subTechlayer-3', 2, 'networksosicourseslayer-3');
	generator.generateLink('.subTechlayer-4', 2, 'networksosicourseslayer-4');
	generator.generateLink('.subTechlayer-5', 2, 'networksosicourseslayer-5');
	generator.generateLink('.subTechlayer-6', 2, 'networksosicourseslayer-6');
	generator.generateLink('.subTechlayer-7', 2, 'networksosicourseslayer-7');
	generator.generateLink('.subTechothers-osi', 2, 'networksosicoursesothers-osi');
	generator.generateLink('.subTechlayer-1', 3, 'networksosiarticleslayer-1');
	generator.generateLink('.subTechlayer-2', 3, 'networksosiarticleslayer-2');
	generator.generateLink('.subTechlayer-3', 3, 'networksosiarticleslayer-3');
	generator.generateLink('.subTechlayer-4', 3, 'networksosiarticleslayer-4');
	generator.generateLink('.subTechlayer-5', 3, 'networksosiarticleslayer-5');
	generator.generateLink('.subTechlayer-6', 3, 'networksosiarticleslayer-6');
	generator.generateLink('.subTechlayer-7', 3, 'networksosiarticleslayer-7');
	generator.generateLink('.subTechothers-osi', 3, 'networksosiarticlesothers-osi');

	generator.generateLink('.subTechcore-js', 1, 'web-developmentjscoursescore');
	generator.generateLink('.subTechframe-js', 1, 'web-developmentjscoursesframe');
	generator.generateLink('.subTechothers-js', 1, 'web-developmentjscoursesothers');
	generator.generateLink('.subTechcore-js', 2, 'web-developmentjsarticlescore');
	generator.generateLink('.subTechframe-js', 2, 'web-developmentjsarticlesframe');
	generator.generateLink('.subTechothers-js', 2, 'web-developmentjsarticlesothers');
	generator.generateLink('.subTechcore-js', 3, 'web-developmentjsreferencecore');
	generator.generateLink('.subTechframe-js', 3, 'web-developmentjsreferenceframe');
	generator.generateLink('.subTechothers-js', 3, 'web-developmentjsreferenceothers');
	generator.generateLink('.subTechcore-css', 1, 'web-developmentcsscoursescore');
	generator.generateLink('.subTechframe-css', 1, 'web-developmentcsscoursesframe');
	generator.generateLink('.subTechothers-css', 1, 'web-developmentcsscoursesothers');
	generator.generateLink('.subTechcore-css', 2, 'web-developmentcssarticlescore');
	generator.generateLink('.subTechframe-css', 2, 'web-developmentcssarticlesframe');
	generator.generateLink('.subTechothers-css', 2, 'web-developmentcssarticlesothers');
	generator.generateLink('.subTechcore-css', 3, 'web-developmentcssreferencecore');
	generator.generateLink('.subTechframe-css', 3, 'web-developmentcssreferenceframe');
	generator.generateLink('.subTechothers-css', 3, 'web-developmentcssreferenceothers');
	generator.generateLink('.subTechcore-php', 1, 'web-developmentphpcoursescore');
	generator.generateLink('.subTechframe-php', 1, 'web-developmentphpcoursesframe');
	generator.generateLink('.subTechothers-php', 1, 'web-developmentphpcoursesothers');
	generator.generateLink('.subTechcore-php', 2, 'web-developmentphparticlescore');
	generator.generateLink('.subTechframe-php', 2, 'web-developmentphparticlesframe');
	generator.generateLink('.subTechothers-php', 2, 'web-developmentphparticlesothers');
	generator.generateLink('.subTechcore-php', 3, 'web-developmentphpreferencecore');
	generator.generateLink('.subTechframe-php', 3, 'web-developmentphpreferenceframe');
	generator.generateLink('.subTechothers-php', 3, 'web-developmentphpreferenceothers');
	generator.generateLink('.subTechrdbms-db', 1, 'web-developmentdbcoursesrdbms');
	generator.generateLink('.subTechnosql-db', 1, 'web-developmentdbcoursesnosql');
	generator.generateLink('.subTechcdb-db', 1, 'web-developmentdbcoursescdb');
	generator.generateLink('.subTechothers-db', 1, 'web-developmentdbcoursesothers');
	generator.generateLink('.subTechrdbms-db', 2, 'web-developmentdbarticlesrdbms');
	generator.generateLink('.subTechnosql-db', 2, 'web-developmentdbarticlesnosql');
	generator.generateLink('.subTechcdb-db', 2, 'web-developmentdbarticlescdb');
	generator.generateLink('.subTechothers-db', 2, 'web-developmentdbarticlesothers');
	generator.generateLink('.subTechrdbms-db', 3, 'web-developmentdbreferencerdbms');
	generator.generateLink('.subTechnosql-db', 3, 'web-developmentdbreferencenosql');
	generator.generateLink('.subTechcdb-db', 3, 'web-developmentdbreferencecdb');
	generator.generateLink('.subTechothers-db', 3, 'web-developmentdbreferenceothers');
	generator.generateLink('.subTechcore-ruby', 1, 'web-developmentphpcoursescore');
	generator.generateLink('.subTechframe-ruby', 1, 'web-developmentphpcoursesframe');
	generator.generateLink('.subTechothers-ruby', 1, 'web-developmentphpcoursesothers');
	generator.generateLink('.subTechcore-ruby', 2, 'web-developmentphparticlescore');
	generator.generateLink('.subTechframe-ruby', 2, 'web-developmentphparticlesframe');
	generator.generateLink('.subTechothers-ruby', 2, 'web-developmentphparticlesothers');
	generator.generateLink('.subTechcore-ruby', 3, 'web-developmentphpreferencecore');
	generator.generateLink('.subTechframe-ruby', 3, 'web-developmentphpreferenceframe');
	generator.generateLink('.subTechothers-ruby', 3, 'web-developmentphpreferenceothers');

	generator.generateLink('.subTechreferences-ath', 1, 'mathematicsathcoursesreferences');
	generator.generateLink('.subTechtheory-ath', 1, 'mathematicsathcoursestheory');
	generator.generateLink('.subTechothers-ath', 1, 'mathematicsathcoursesothers');
	generator.generateLink('.subTechreferences-ath', 2, 'mathematicsatharticlesreferences');
	generator.generateLink('.subTechtheory-ath', 2, 'mathematicsatharticlestheory');
	generator.generateLink('.subTechothers-ath', 2, 'mathematicsatharticlesothers');
	generator.generateLink('.subTechref-ag', 1, 'mathematicsagcoursesref');
	generator.generateLink('.subTechref-ag', 2, 'mathematicsagarticlesref');
	generator.generateLink('.subTechelemental-ag', 1, 'mathematicsagcourseselemental');
	generator.generateLink('.subTechlineal-ag', 1, 'mathematicsagcourseslineal');
	generator.generateLink('.subTechabstracta-ag', 1, 'mathematicsagcoursesabstracta');
	generator.generateLink('.subTechbooleana-ag', 1, 'mathematicsagcoursesbooleana');
	generator.generateLink('.subTechothers-ag', 1, 'mathematicsagcoursesothers');
	generator.generateLink('.subTechelemental-ag', 2, 'mathematicsarticleselemental');
	generator.generateLink('.subTechlineal-ag', 2, 'mathematicsagarticleslineal');
	generator.generateLink('.subTechabstracta-ag', 2, 'mathematicsagarticlesabstracta');
	generator.generateLink('.subTechbooleana-ag', 2, 'mathematicsagarticlesbooleana');
	generator.generateLink('.subTechothers-ag', 2, 'mathematicsagarticlesothers');
	generator.generateLink('.subTechref-amt', 1, 'mathematicsamtcoursesref');
	generator.generateLink('.subTechref-amt', 2, 'mathematicsamtarticlesref');
	generator.generateLink('.subTechcaldif-amt', 1, 'mathematicsamtcoursescaldif');
	generator.generateLink('.subTechcalint-amt', 1, 'mathematicsamtcoursescalint');
	generator.generateLink('.subTeched-amt', 1, 'mathematicsamtcoursesed');
	generator.generateLink('.subTechac-amt', 1, 'mathematicsamtcoursesac');
	generator.generateLink('.subTechaf-amt', 1, 'mathematicsamtcoursesaf');
	generator.generateLink('.subTechan-amt', 1, 'mathematicsamtcoursesan');
	generator.generateLink('.subTechothers-amt', 1, 'mathematicsamtcoursesothers');
	generator.generateLink('.subTechcaldif-amt', 2, 'mathematicsamtarticlescaldif');
	generator.generateLink('.subTechcalint-amt', 2, 'mathematicsamtarticlescalint');
	generator.generateLink('.subTeched-amt', 2, 'mathematicsamtarticlesed');
	generator.generateLink('.subTechac-amt', 2, 'mathematicsamtarticlesac');
	generator.generateLink('.subTechaf-amt', 2, 'mathematicsamtarticlesaf');
	generator.generateLink('.subTechan-amt', 2, 'mathematicsamtarticlesan');
	generator.generateLink('.subTechothers-amt', 2, 'mathematicsamtarticlesothers');


//RLM('networks', 'osi', 'reference', 'others-osi', 1, 'completereference', '', '', bv, false);
//(side, tech, swt, subTech, numero, txt, href, title, bg, state)
//rudimentary linker modifier
	RLM('web-development', 'js', 'courses', 'core', 1, 'w3s-js', 'https://w3schools.com/js', 'tutorial/reference', bw, false);
	RLM('web-development', 'js', 'courses', 'others', 1, 'w3s-json', 'https://www.w3schools.com/js/js_json_intro.asp', 'tutorial/reference', bw, false);
	RLM('networks', 'w¡ptc', 'reference', 'http¡s', 1, 'mdn-http', 'https://developer.mozilla.org/es/docs/Web/HTTP', 'reference', bw, false);
	RLM('algorithms', 'others', 'reference', 'others', 1, 'introduction to algorithms fourth edition', 'file:///C:/Users/nazar/Desktop/Work%20Files/web/proyectos/ExcelenciaStudio%20-%20Advanced%20not-alpha/thecursedowl369/sources/link/introductiontoalgorithms4edition.pdf', 'Introduction to Algorithms Fourth Edition', bl, false);
	RLM('networks', 'osi', 'reference', 'layer-1', 1, 'irytr', 'https://www.youtube.com/watch?v=lXacNs-1TmM&ab_channel=IsmaelRobles', 'Capa 1 del modelo OSI: capa física', bv, false);
	RLM('networks', 'osi', 'reference', 'layer-2', 1, 'irytr', 'https://www.youtube.com/watch?v=VADBlwDCxnw&ab_channel=IsmaelRobles', 'Capa 2 del modelo OSI: Capa de enlace de datos y subcapa de acceso al medio (MAC)', bv, false);
	RLM('networks', 'osi', 'reference', 'layer-2', 2, 'irytr', 'https://www.youtube.com/watch?v=oDAzj7ohh7o&list=PL9Q_hx03xipK-BUH0a_FAKGM6au2-VFRU&index=10&ab_channel=IsmaelRobles', 'Capa 2 del modelo OSI: Capa de enlace de datos y subcapa de enlace de datos (LLC)', bv, true);
	RLM('neuroscience', 'mindfss', 'guide', 'mindfss', 1, 'mindfssreference', 'file:///C:/Users/nazar/Desktop/Work%20Files/web/proyectos/ExcelenciaStudio%20-%20Advanced%20not-alpha/thecursedowl369/sources/link/the-mind-illuminated-by-culadasa-john-yates-ph.d.-matthew-immergut-jeremy-graves-2017.pdf', 'mindfssreference', bl, false)
	RLM('networks', 'osi', 'reference', 'others-osi', 1, 'comref', 'file:///C:/Users/nazar/Desktop/Work%20Files/web/proyectos/ExcelenciaStudio%20-%20Advanced%20not-alpha/thecursedowl369/sources/link/andrewstanenbaumcomputernetworks.pdf', 'ANDREW S. TANENBAUM Computer Networks Complete Reference Quality information +900 pages full information', bl, false);
	RLM('mathematics', 'ath', 'courses', 'others', 1, 'matessimp2', 'C:/Users/nazar/Desktop/Study Files/Information-Courses/matesimp2.pdf', 'matematicasSimplificadas2', bl, true);


