const ANNEE = $('.date span');
const TEMPERATURE = $('.temperature .pourcentage');
const TEMPERATURE_BARRE = $('.temperature .barre .progress');
const ARGENT = $('.stats .argent .valeurArgent');
const JOKER = $('.stats .joker .valeurJoker');
const HEADLINE = $('.flash .flash-up h1');
const CONTENU = $('.flash .flash-down span');
const SUIVANT = $('.suivant');
const PRESENTATEUR = $('.presentateur');
const MAP = $('.map .map-img');
const MAP_NORMALE = 'assets/map.png';
const MAP_PREFIXE = 'assets/catastrophes/';
const REP1 = $('.reponses .rep1');
const REP2 = $('.reponses .rep2');
const REP3 = $('.reponses .rep3');

const CATASTROPHES = {
    2001: {
        'headline': "Selon un rapport de l'ONU sur la pollution plastique dans les océans, l'Asie est la région qui rejette le plus de déchets plastiques dans la mer. En 2001, l'Asie était responsable de 60 % des déchets plastiques rejetés dans les océans, soit environ 3,4 millions de tonnes.",
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
    2002: {
        'headline': "Une sécheresse prolongée a frappé l'Afrique de l'Ouest en 2002, tuant plus de 100 000 personnes. La sécheresse a été causée par un phénomène climatique appelé 'El Niño', qui est exacerbé par le réchauffement climatique.",
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
    2003: {
        'headline': "Une canicule record a frappé l'Europe en 2003, tuant plus de 70 000 personnes. La canicule a été attribuée à l'augmentation des températures moyennes dans la région.",
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
    2004: {
        'headline': "Le tsunami de 2004 a été causé par un séisme sous-marin d'une magnitude de 9,1. Il a frappé l'Indonésie, le Sri Lanka, l'Inde et la Thaïlande, tuant plus de 225 000 personnes. Le tsunami a été exacerbé par l'élévation du niveau de la mer due au réchauffement climatique.",
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
    2005: {
        'headline': "En 2005, l'ouragan Katrina a frappé la côte sud des États-Unis, causant des inondations massives à La Nouvelle-Orléans et dans d'autres régions. La réponse lente et inefficace des autorités a été critiquée, et l'ouragan a mis en lumière les risques croissants liés aux tempêtes de plus en plus puissantes attribuées au changement climatique.",
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
    2006: {
        'headline': "Selon l'Organisation mondiale de la santé (OMS), en 2006, la pollution de l'air extérieur était responsable de plus de 2 millions de décès prématurés chaque année, principalement dans les pays en développement.",
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
    2007: {
        'headline': "En 2007, le cyclone Sidr a frappé le Bangladesh, causant la mort de plus de 3 000 personnes. Les conséquences ont été aggravées par la vulnérabilité socio-économique de la région.",
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
    2008: {
        'headline': "La Banque mondiale a souligné l'importance de la finance verte pour stimuler la croissance économique tout en atténuant les impacts négatifs sur l'environnement.",
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
    2009: {
        'headline': "Selon l'Organisation mondiale de la santé (OMS), les pandémies futures pourraient être exacerbées par des facteurs tels que la mondialisation et le changement climatique.",
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
    2010: {
        'headline': "L'incident a mis en évidence les risques environnementaux liés à l'exploitation pétrolière en eaux profondes.",
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
    2011: {
        'headline': "Le Printemps arabe a souligné l'importance des questions socio-économiques et environnementales dans les mouvements populaires.",
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
    2012: {
        'headline': "La conférence a mis en lumière la nécessité d'actions coordonnées pour relever les défis mondiaux liés à la durabilité.",
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
    2013: {
        'headline': "Les événements météorologiques extrêmes comme le Typhon Haiyan soulignent l'importance de l'adaptation aux changements climatiques.",
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
    2014: {
        'headline': "La crise de l'eau à Flint met en évidence les enjeux liés à l'approvisionnement en eau potable.",
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
    2015: {
        'headline': "L'Accord de Paris représente une étape cruciale dans la lutte mondiale contre le changement climatique.",
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
    2016: {
        'headline': "La déforestation en Amazonie souligne l'importance de la conservation des écosystèmes critiques.",
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
    2017: {
        'headline': "La crise des réfugiés climatiques met en lumière les conséquences humaines des changements climatiques.",
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
    2019: {
        'headline': "Urgence Climatique Mondiale",
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
    2020: {
        'headline': "Pandémie Mondiale",
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
    2021: {
        'headline': "Transition vers l'Hydrogène Vert",
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
    2022: {
        'headline': "Croissance des Villes Durables",
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
    2023: {
        'headline': "Dernières Décisions Cruciales",
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

var argent;
var joker;
var temperature;
var annee;
var probaCatastrophe = 1;

function initGame() {
    argent = 100000000;
    joker = 3;
    temperature = 14.5;
    annee = 2000;

    $(ANNEE).text("Année : " + annee);
    $(TEMPERATURE).text(temperature + ' °C');
    $(TEMPERATURE_BARRE).css('width', temperature + '%');
    $(ARGENT).text(argent);
    $(JOKER).text(joker);

    $(REP1).hide();
    $(REP2).hide();
    $(REP3).hide();

    $(HEADLINE).text('BIENVENUE DANS LE JEU');
    $(CONTENU).text('Vous allez devoir faire des choix pour sauver la planète. Bonne chance !');
}

function changerAnnee() {
    if (annee < 2023) {
        annee++;
        $(ANNEE).text("Année : " + annee);
        $(SUIVANT).hide();

        let proba = Math.random();

        if (proba <= 0.5) {
            $(PRESENTATEUR).attr('src', 'assets/presentateur.png');
        } else {
            $(PRESENTATEUR).attr('src', 'assets/presentatrice.png');
        }

        if (proba <= probaCatastrophe) {
            let catastrophe = CATASTROPHES[annee];
            if (catastrophe) {
                $(HEADLINE).text(catastrophe.headline);
                $(CONTENU).text("");
                $(MAP).css('background-image', 'url(' + MAP_PREFIXE + annee + '.jpg)');
                $(REP1).show();
                $(REP2).show();
                $(REP3).show();
                $(REP1).text(catastrophe.choix[0].texte);
                $(REP2).text(catastrophe.choix[1].texte);
                $(REP3).text(catastrophe.choix[2].texte);

                function onRepClick(choiceIndex, choice) {
                    argent += choice.argent;
                    temperature += choice.temperature;
                    $(ARGENT).text(argent);
                    if (temperature < 0) {
                        temperature = 0;
                    }
                    $(TEMPERATURE).text(temperature + ' °C');
                    $(TEMPERATURE_BARRE).css('width', temperature + '%');
                    if (temperature <= 14.5) {
                        $(TEMPERATURE_BARRE).css('background-color', 'green');
                    } else {
                        $(TEMPERATURE_BARRE).css('background-color', 'red');
                    }
                    changerAnnee();
                }

                $(REP1).one("click", function () {
                    onRepClick(0, catastrophe.choix[0]);
                });
                $(REP2).one("click", function () {
                    onRepClick(1, catastrophe.choix[1]);
                });
                $(REP3).one("click", function () {
                    onRepClick(2, catastrophe.choix[2]);
                });
            }
        } else {
            $(HEADLINE).text('RIEN À SIGNALER');
            $(CONTENU).text('La planète se porte bien ! Passez à l\'année suivante.');
        }
    }
}

$(document).ready(function () {
    initGame();

    $(SUIVANT).click(function () {
        $(SUIVANT).off("click");
        changerAnnee();
    });
});