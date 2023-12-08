const CATASTROPHES = {
    2000: {
        'headline': 'Graves innondations en Russie',
        'contenu': 'Des inondations massives ont frappé la Russie, tuant plus de 200 personnes et causant des dommages estimés à 10 milliards de dollars. Les inondations ont été causées par des précipitations exceptionnelles, qui ont été exacerbées par le réchauffement climatique.',
        'reparations': 100000,
        'question': '???',
        'reponses': [
            {
                'texte': 'Bonne rep 1',
                'temperature': -0.25,
                'argent': 750000,
            },
            {
                'texte': '???',
                'temperature': -0.5,
                'argent': 500000,
            },
            {
                'texte': 'Je fais rien',
                'temperature': 0.5,
                'argent': 0,
            }
        ]
    },
};



const POLLUTION_OCEANS = {
    2001: {
        'texte': "Selon un rapport de l'ONU sur la pollution plastique dans les océans, l'Asie est la région qui rejette le plus de déchets plastiques dans la mer. En 2001, l'Asie était responsable de 60 % des déchets plastiques rejetés dans les océans, soit environ 3,4 millions de tonnes.",
        'investissement': -10000,
        'question': 'Que devriez-vous faire pour résoudre ce problème?',
        'choix': [
            {
                'texte': 'Investir 25% dans des entreprises produisant des véhicules hybrides',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des politiques strictes de réduction des déchets plastiques',
                'temperature': Math.random() * -0.75, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};



const DROUGHT_AFRICA_2002 = {
    2002: {
        'texte': "Une sécheresse prolongée a frappé l'Afrique de l'Ouest en 2002, tuant plus de 100 000 personnes. La sécheresse a été causée par un phénomène climatique appelé 'El Niño', qui est exacerbé par le réchauffement climatique.",
        'investissement': -10000,
        'question': 'Comment devriez-vous réagir à cette crise environnementale majeure?',
        'choix': [
            {
                'texte': "Augmenter le prix de l'essence en Europe pour encourager une conduite responsable",
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Financer la recherche sur des technologies écologiques avancées (15%)',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const HEATWAVE_EUROPE_2003 = {
    2003: {
        'texte': "Une canicule record a frappé l'Europe en 2003, tuant plus de 70 000 personnes. La canicule a été attribuée à l'augmentation des températures moyennes dans la région.",
        'investissement': -10000,
        'question': 'Comment devriez-vous réagir à cette crise environnementale majeure?',
        'choix': [
            {
                'texte': 'Investir dans les énergies durables',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des politiques de réduction de la consommation d\'énergie',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};

const TSUNAMI_2004 = {
    2004: {
        'texte': "Le tsunami de 2004 a été causé par un séisme sous-marin d'une magnitude de 9,1. Il a frappé l'Indonésie, le Sri Lanka, l'Inde et la Thaïlande, tuant plus de 225 000 personnes. Le tsunami a été exacerbé par l'élévation du niveau de la mer due au réchauffement climatique.",
        'investissement': -10000,
        'question': 'Comment devriez-vous réagir à cette catastrophe naturelle majeure?',
        'choix': [
            {
                'texte': 'Investir dans des systèmes d\'alerte au tsunami et des infrastructures de protection côtière',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des politiques de zonage pour restreindre le développement côtier',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const HURRICANE_KATRINA_2005 = {
    2005: {
        'texte': "En 2005, l'ouragan Katrina a frappé la côte sud des États-Unis, causant des inondations massives à La Nouvelle-Orléans et dans d'autres régions. La réponse lente et inefficace des autorités a été critiquée, et l'ouragan a mis en lumière les risques croissants liés aux tempêtes de plus en plus puissantes attribuées au changement climatique.",
        'investissement': -10000,
        'question': 'Comment devriez-vous réagir à cette catastrophe naturelle majeure?',
        'choix': [
            {
                'texte': 'Investir dans la mise à niveau des infrastructures pour résister aux ouragans',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des politiques de gestion des zones inondables et d\'évacuation',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const AIR_POLLUTION_CRISIS_2006 = {
    2006: {
        'texte': "Selon l'Organisation mondiale de la santé (OMS), en 2006, la pollution de l'air extérieur était responsable de plus de 2 millions de décès prématurés chaque année, principalement dans les pays en développement.",
        'investissement': -10000,
        'question': 'Comment devriez-vous réagir à cette crise sanitaire liée à la pollution de l\'air?',
        'choix': [
            {
                'texte': 'Investir dans des technologies de réduction de la pollution de l\'air',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des politiques strictes pour contrôler les émissions industrielles',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const CYCLONE_SIDR_2007 = {
    2007: {
        'texte': "En 2007, le cyclone Sidr a frappé le Bangladesh, causant la mort de plus de 3 000 personnes. Les conséquences ont été aggravées par la vulnérabilité socio-économique de la région.",
        'investissement': -10000,
        'question': 'Comment devriez-vous réagir à cette catastrophe naturelle majeure?',
        'choix': [
            {
                'texte': 'Investir dans des infrastructures résistantes aux cyclones et des systèmes d\'alerte précoce',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des politiques de réduction de la pauvreté et d\'amélioration de l\'éducation',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};

const GREEN_FINANCE_RESPONSE_2008 = {
    2008: {
        'texte': "La Banque mondiale a souligné l'importance de la finance verte pour stimuler la croissance économique tout en atténuant les impacts négatifs sur l'environnement.",
        'investissement': -10000,
        'question': 'Comment devriez-vous répondre à la crise financière de 2008 avec des solutions durables?',
        'choix': [
            {
                'texte': 'Investir dans des projets d\'infrastructures durables pour stimuler l\'économie',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Soutenir financièrement des entreprises innovantes axées sur la durabilité',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};

const PANDEMIC_PREPARATION_2009 = {
    2009: {
        'texte': "Selon l'Organisation mondiale de la santé (OMS), les pandémies futures pourraient être exacerbées par des facteurs tels que la mondialisation et le changement climatique.",
        'investissement': -10000,
        'question': 'Comment devriez-vous vous préparer aux pandémies futures en 2009?',
        'choix': [
            {
                'texte': 'Investir dans la recherche médicale pour le développement de vaccins et de traitements',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des politiques de gestion des crises sanitaires et de renforcement des systèmes de santé',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const OIL_RISK_MANAGEMENT_2010 = {
    2010: {
        'texte': "L'incident a mis en évidence les risques environnementaux liés à l'exploitation pétrolière en eaux profondes.",
        'investissement': -10000,
        'question': 'Comment devriez-vous gérer les risques environnementaux liés à l\'exploitation pétrolière en 2010?',
        'choix': [
            {
                'texte': 'Investir dans des technologies de prévention des catastrophes pétrolières',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des réglementations strictes pour encadrer l\'exploitation pétrolière',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};

const ARAB_SPRING_RESPONSE_2011 = {
    2011: {
        'texte': "Le Printemps arabe a souligné l'importance des questions socio-économiques et environnementales dans les mouvements populaires.",
        'investissement': -10000,
        'question': 'Comment devriez-vous répondre aux revendications socio-économiques en 2011?',
        'choix': [
            {
                'texte': 'Investir dans des programmes de développement socio-économique pour répondre aux demandes des manifestants',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des réformes politiques pour répondre aux revendications démocratiques',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};

const SUSTAINABILITY_COORDINATION_2012 = {
    2012: {
        'texte': "La conférence a mis en lumière la nécessité d'actions coordonnées pour relever les défis mondiaux liés à la durabilité.",
        'investissement': -10000,
        'question': 'Comment devriez-vous coordonner les efforts internationaux pour la durabilité en 2012?',
        'choix': [
            {
                'texte': 'Renforcer la coopération internationale pour la mise en œuvre des objectifs de développement durable',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Investir dans des technologies vertes et des initiatives de développement durable au niveau national',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ignorer les appels à l\'action internationale et se concentrer sur les préoccupations nationales',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};

const EXTREME_WEATHER_PREPARATION_2013 = {
    2013: {
        'texte': "Les événements météorologiques extrêmes comme le Typhon Haiyan soulignent l'importance de l'adaptation aux changements climatiques.",
        'investissement': -10000,
        'question': 'Comment devriez-vous vous préparer aux événements météorologiques extrêmes en 2013?',
        'choix': [
            {
                'texte': 'Investir dans des infrastructures résilientes aux catastrophes naturelles',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des politiques de réduction des émissions de gaz à effet de serre pour lutter contre le changement climatique',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ignorer la nécessité d\'une adaptation aux changements climatiques',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const WATER_QUALITY_MANAGEMENT_2014 = {
    2014: {
        'texte': "La crise de l'eau à Flint met en évidence les enjeux liés à l'approvisionnement en eau potable.",
        'investissement': -10000,
        'question': 'Comment devriez-vous gérer la qualité de l\'eau potable en 2014?',
        'choix': [
            {
                'texte': 'Investir dans la modernisation des infrastructures d\'approvisionnement en eau potable',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Renforcer les réglementations sur la qualité de l\'eau et les contrôles de sécurité',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ignorer les problèmes liés à la qualité de l\'eau pour économiser de l\'argent',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};

const PARIS_AGREEMENT_IMPLEMENTATION_2015 = {
    2015: {
        'texte': "L'Accord de Paris représente une étape cruciale dans la lutte mondiale contre le changement climatique.",
        'investissement': -10000,
        'question': 'Comment devriez-vous mettre en œuvre l\'Accord de Paris en 2015?',
        'choix': [
            {
                'texte': 'Soutenir activement les initiatives de l\'Accord de Paris (20%), bonus : partenariats internationaux',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Investir dans des entreprises respectueuses de l\'environnement (25%)',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ignorer les obligations de l\'Accord de Paris et poursuivre les politiques actuelles',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};

const AMAZON_CONSERVATION_2016 = {
    2016: {
        'texte': "La déforestation en Amazonie souligne l'importance de la conservation des écosystèmes critiques.",
        'investissement': -10000,
        'question': 'Comment devriez-vous préserver l\'Amazonie en 2016?',
        'choix': [
            {
                'texte': 'Investir dans des projets de conservation de la forêt amazonienne (25%), bonus : préservation de la biodiversité',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Mettre en place des réglementations strictes sur l\'exploitation forestière',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ignorer les problèmes de déforestation pour favoriser le développement économique',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const CLIMATE_REFUGEE_MANAGEMENT_2017 = {
    2017: {
        'texte': "La crise des réfugiés climatiques met en lumière les conséquences humaines des changements climatiques.",
        'investissement': -10000,
        'question': 'Comment devriez-vous gérer les réfugiés climatiques en 2017?',
        'choix': [
            {
                'texte': 'Investir dans des initiatives d\'adaptation pour les communautés touchées',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Plaider en faveur d\'accords internationaux sur les réfugiés climatiques',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ignorer la question des réfugiés climatiques',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const GLOBAL_CLIMATE_EMERGENCY_2019 = {
    2019: {
        'texte': "Urgence Climatique Mondiale",
        'investissement': -10000,
        'question': 'Comment devriez-vous répondre à l\'urgence climatique mondiale en 2019?',
        'choix': [
            {
                'texte': 'Investir 20% dans des projets d\'urgence climatique, bonus : leadership dans la lutte mondiale',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Continuer à investir dans des secteurs moins durables (15%)',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const GLOBAL_PANDEMIC_2020 = {
    2020: {
        'texte': "Pandémie Mondiale",
        'investissement': -10000,
        'question': 'Comment devriez-vous répondre à la pandémie mondiale en 2020?',
        'choix': [
            {
                'texte': 'Investir 25% dans des technologies pour rendre les entreprises plus durables, bonus : adaptation rapide',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Consolidation des actifs pour minimiser les pertes (30%)',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};

const HYDROGEN_TRANSITION_2021 = {
    2021: {
        'texte': "Transition vers l'Hydrogène Vert",
        'investissement': -10000,
        'question': 'Comment devriez-vous effectuer la transition vers l\'hydrogène vert en 2021?',
        'choix': [
            {
                'texte': 'Investir 20% dans des projets liés à l\'hydrogène vert, bonus : énergie propre et polyvalente',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Continuer à investir dans des énergies fossiles (15%)',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const SUSTAINABLE_URBAN_GROWTH_2022 = {
    2022: {
        'texte': "Croissance des Villes Durables",
        'investissement': -10000,
        'question': 'Comment devriez-vous favoriser la croissance des villes durables en 2022?',
        'choix': [
            {
                'texte': 'Investir 25% dans des projets de développement urbain durable, bonus : qualité de vie améliorée',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Continuer à investir dans des projets immobiliers conventionnels (20%)',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};


const CRUCIAL_DECISIONS_2023 = {
    2023: {
        'texte': "Dernières Décisions Cruciales",
        'investissement': -10000,
        'question': 'Quelles décisions cruciales devriez-vous prendre en 2023?',
        'choix': [
            {
                'texte': 'Participer à des projets de captage et stockage du carbone (25%), bonus : leadership environnemental',
                'temperature': Math.random() * -0.5, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Financer des projets d\'adaptation aux changements climatiques (20%)',
                'temperature': Math.random() * -0.25, // température diminuée aléatoirement
                'argent': -10000,
            },
            {
                'texte': 'Ne rien faire',
                'temperature': Math.random() * 0.5, // température augmentée aléatoirement
                'argent': 0,
            }
        ]
    },
};
