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
        'headline': "Selon un rapport de l'ONU, l'Asie est la région qui rejette le plus de déchets plastiques dans la mer. En 2001, l'Asie était responsable de 60 % des déchets plastiques rejetés dans les océans.",
        'question': 'Que devriez-vous faire pour résoudre ce problème?',
        'choix': [
            {
                'texte': 'Investir 25% dans des entreprises produisant des véhicules hybrides',
                'temperature': -0.15, // température diminuée aléatoirement
                'argent': -1000000,

            },
            {
                'texte': 'Mettre en place des politiques strictes de réduction des déchets plastiques',
                'temperature': -0.07, // température diminuée aléatoirement
                'argent': -200000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature':+0.12, // température augmentée aléatoirement

            }
        ]
    },
    2002: {
        'headline': "Une sécheresse prolongée a frappé l'Afrique de l'Ouest en 2002, tuant plus de 100 000 personnes. La sécheresse a été causée par un phénomène climatique appelé 'El Niño'.",
        'question': 'Comment devriez-vous réagir à cette crise environnementale majeure?',
        'choix': [
            {
                'texte': "Augmenter le prix de l'essence en Europe pour encourager une conduite responsable",
                'temperature': -0.02, // température diminuée aléatoirement
                'argent': -500000,
            },
            {
                'texte': 'Financer la recherche sur des technologies écologiques avancées (15%)',
                'temperature':-0.07, // température diminuée aléatoirement
                'argent': -1020000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.17, // température augmentée aléatoirement
                
            }
        ]
    },
    2003: {
        'headline': "Une canicule record a frappé l'Europe en 2003, tuant plus de 70 000 personnes.",
        'question': 'Comment devriez-vous réagir à cette crise environnementale majeure?',
        'choix': [
            {
                'texte': 'Investir dans les énergies durables',
                'temperature': -0.05, // température diminuée aléatoirement
                'argent': -1400000,
            },
            {
                'texte': 'Mettre en place des politiques de réduction de la consommation d\'énergie',
                'temperature': -0.03, // température diminuée aléatoirement
                'argent': -2800000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature':+0.10, // température augmentée aléatoirement

            }
        ]
    },
    2004: {
        'headline': "Le tsunami de 2004 a été causé par un séisme sous-marin d'une magnitude de 9,1. Il a frappé l'Indonésie, le Sri Lanka, l'Inde et la Thaïlande, tuant plus de 225 000 personnes.",
        'question': 'Comment devriez-vous réagir à cette catastrophe naturelle majeure?',
        'choix': [
            {
                'texte': 'Investir dans des systèmes d\'alerte au tsunami et des infrastructures de protection côtière',
                'temperature': -0.05, // température diminuée aléatoirement
                'argent': -100000,
            },
            {
                'texte': 'Mettre en place des politiques de zonage pour restreindre le développement côtier',
                'temperature': -0.08, // température diminuée aléatoirement
                'argent': -100000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature':+0.04, // température augmentée aléatoirement
                
            }
        ]
    },
    2004: {
        'headline': "Le tsunami de 2004 a été causé par un séisme sous-marin d'une magnitude de 9,1. Il a frappé l'Indonésie, le Sri Lanka, l'Inde et la Thaïlande, tuant plus de 225 000 personnes.",
        'question': 'Comment devriez-vous réagir à cette catastrophe naturelle majeure?',
        'choix': [
            {
                'texte': 'Investir dans des systèmes d\'alerte au tsunami et des infrastructures de protection côtière',
                'temperature': -0.05,
                'argent': -100000,
            },
            {
                'texte': 'Mettre en place des politiques de zonage pour restreindre le développement côtier',
                'temperature': -0.08,
                'argent': -100000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.04,
                
            }
        ]
    },
    2005: {
        'headline': "En 2005, l'ouragan Katrina a frappé la côte sud des États-Unis, causant des inondations massives à La Nouvelle-Orléans et dans d'autres régions.",
        'question': 'Comment devriez-vous réagir à cette catastrophe naturelle majeure?',
        'choix': [
            {
                'texte': 'Investir dans la mise à niveau des infrastructures pour résister aux ouragans',
                'temperature': -0.1,
                'argent': -100000,
            },
            {
                'texte': 'Mettre en place des politiques de gestion des zones inondables et d\'évacuation',
                'temperature': -0.15,
                'argent': -100000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.14,
                
            }
        ]
    },
    2006: {
        'headline': "Selon l'Organisation mondiale de la santé (OMS), en 2006, la pollution de l'air extérieur était responsable de plus de 2 millions de décès prématurés chaque année.",
        'question': 'Comment devriez-vous réagir à cette crise sanitaire liée à la pollution de l\'air?',
        'choix': [
            {
                'texte': 'Investir dans des technologies de réduction de la pollution de l\'air',
                'temperature': -0.15,
                'argent': -500000,
            },
            {
                'texte': 'Mettre en place des politiques strictes pour contrôler les émissions industrielles',
                'temperature': -0.08,
                'argent': -600000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.17,
                
            }
        ]
    },
    2007: {
        'headline': "En 2007, les experts ont averti que les émissions de gaz à effet de serre atteignaient des niveaux record, contribuant au changement climatique.",
        'question': 'Que devriez-vous faire pour lutter contre le changement climatique?',
        'choix': [
            {
                'texte': 'Investir massivement dans les énergies renouvelables (20%)',
                'temperature': -0.13,
                'argent': -1500000,
            },
            {
                'texte': 'Mettre en place des réglementations strictes sur les émissions de gaz à effet de serre',
                'temperature': -0.15,
                'argent': -1200000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.09,
                
            }
        ]
    },
    2008: {
        'headline': "La fonte accélérée des glaces en Arctique en 2008 a attiré l'attention sur les impacts du réchauffement climatique.",
        'question': 'Comment devriez-vous réagir à cette crise environnementale majeure?',
        'choix': [
            {
                'texte': 'Investir dans la recherche sur le changement climatique et ses impacts (15%)',
                'temperature': -0.11,
                'argent': -1000000,
            },
            {
                'texte': 'Mettre en place des politiques pour réduire les émissions de gaz à effet de serre',
                'temperature': -0.12,
                'argent': -1300000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.05,
                
            }
        ]
    },
    2009: {
        'headline': "En 2009, la crise économique mondiale a conduit à une diminution temporaire des émissions de gaz à effet de serre en raison d'une réduction de l'activité industrielle.",
        'question': 'Comment devriez-vous réagir à cette opportunité de réduire les émissions?',
        'choix': [
            {
                'texte': 'Investir dans des projets de relance verte pour stimuler l\'économie',
                'temperature': -0.15,
                'argent': -800000,
            },
            {
                'texte': 'Mettre en place des régulations plus strictes pour maintenir les émissions à des niveaux bas',
                'temperature': -0.12,
                'argent': -1000000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.1,
                
            }
        ]
    },
    2010: {
        'headline': "En 2010, la marée noire de BP dans le golfe du Mexique a été l'une des pires catastrophes environnementales de l'histoire.",
        'question': 'Comment devriez-vous réagir à cette catastrophe environnementale majeure?',
        'choix': [
            {
                'texte': 'Augmenter les réglementations sur l\'industrie pétrolière et gazière',
                'temperature': -0.12,
                'argent': -800000,
            },
            {
                'texte': 'Investir dans la recherche sur les énergies propres (15%)',
                'temperature': -0.15,
                'argent': -700000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.08,
                
            }
        ]
    },
    2011: {
        'headline': "En 2011, le Japon a été touché par un séisme et un tsunami, entraînant un accident nucléaire à la centrale de Fukushima.",
        'question': 'Comment devriez-vous réagir à cette catastrophe nucléaire majeure?',
        'choix': [
            {
                'texte': 'Favoriser le développement des énergies renouvelables et réduire la dépendance au nucléaire',
                'temperature': -0.1,
                'argent': -900000,
            },
            {
                'texte': 'Renforcer les normes de sécurité nucléaire et investir dans la recherche sur les technologies nucléaires plus sûres',
                'temperature': -0.15,
                'argent': -1100000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.1,
                
            }
        ]
    },
    2012: {
        'headline': "En 2012, la Banque mondiale a averti que le monde risquait de faire face à des pénuries d'eau critiques d'ici 2025.",
        'question': 'Comment devriez-vous réagir à cette menace imminente de pénurie d\'eau?',
        'choix': [
            {
                'texte': 'Investir dans des projets de gestion de l\'eau et de conservation (20%)',
                'temperature': -0.05,
                'argent': -1200000,
            },
            {
                'texte': 'Mettre en place des politiques de réduction de la consommation d\'eau',
                'temperature': -0.07,
                'argent': -800000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.08,
                
            }
        ]
    },
    2013: {
        'headline': "En 2013, une étude a révélé que la déforestation progressait rapidement, mettant en danger la biodiversité et contribuant au changement climatique.",
        'question': 'Que devriez-vous faire pour lutter contre la déforestation?',
        'choix': [
            {
                'texte': 'Mettre en place des politiques de protection des forêts et de reforestation (20%)',
                'temperature': -0.02,
                'argent': -1000000,
            },
            {
                'texte': 'Imposer des sanctions sévères aux entreprises impliquées dans la déforestation',
                'temperature': -0.08,
                'argent': -900000,
            },
            {
                'texte': 'Ne rien faire et économiser l\'argent',
                'temperature': +0.1,
                
            }
        ]
    },
    2014: {
        'headline': "La crise de l'eau à Flint met en évidence les enjeux liés à l'approvisionnement en eau potable.",
        'question': 'Comment devriez-vous gérer la qualité de l\'eau potable en 2014?',
        'choix': [
            {
                'texte': 'Investir dans la modernisation des infrastructures d\'approvisionnement en eau potable',
                'temperature': -0.09,
                'argent': -400000,
            },
            {
                'texte': 'Renforcer les réglementations sur la qualité de l\'eau et les contrôles de sécurité',
                'temperature': -0.12,
                'argent': -350000,
            },
            {
                'texte': 'Ignorer les problèmes liés à la qualité de l\'eau pour économiser de l\'argent',
                'temperature': 0.15,
                
            }
        ]
    },
    2015: {
        'headline': "L'Accord de Paris représente une étape cruciale dans la lutte mondiale contre le changement climatique.",
        'question': 'Comment devriez-vous mettre en œuvre l\'Accord de Paris en 2015?',
        'choix': [
            {
                'texte': 'Soutenir activement les initiatives de l\'Accord de Paris (20%), bonus : partenariats internationaux',
                'temperature': -0.11,
                'argent': -600000,
            },
            {
                'texte': 'Investir dans des entreprises respectueuses de l\'environnement (25%)',
                'temperature': -0.06,
                'argent': -500000,
            },
            {
                'texte': 'Ignorer les obligations de l\'Accord de Paris et poursuivre les politiques actuelles',
                'temperature': +0.2,
                
            }
        ]
    },
    2016: {
        'headline': "La déforestation en Amazonie souligne l'importance de la conservation des écosystèmes critiques.",
        'question': 'Comment devriez-vous préserver l\'Amazonie en 2016?',
        'choix': [
            {
                'texte': 'Investir dans des projets de conservation de la forêt amazonienne (25%), bonus : préservation de la biodiversité',
                'temperature': -0.13,
                'argent': -550000,
            },
            {
                'texte': 'Mettre en place des réglementations strictes sur l\'exploitation forestière',
                'temperature': -0.12,
                'argent': -450000,
            },
            {
                'texte': 'Ignorer les problèmes de déforestation pour favoriser le développement économique',
                'temperature': +0.25,
                
            }
        ]
    },
    2017: {
        'headline': "La crise des réfugiés climatiques met en lumière les conséquences humaines des changements climatiques.",
        'question': 'Comment devriez-vous gérer les réfugiés climatiques en 2017?',
        'choix': [
            {
                'texte': 'Investir dans des initiatives d\'adaptation pour les communautés touchées',
                'temperature': -0.07,
                'argent': -600000,
            },
            {
                'texte': 'Plaider en faveur d\'accords internationaux sur les réfugiés climatiques',
                'temperature': -0.03,
                'argent': -500000,
            },
            {
                'texte': 'Ignorer la question des réfugiés climatiques',
                'temperature': +0.18,
                
            }
        ]
    },
    2018: {
    'headline': "Sécheresse et incendies de forêt en Californie",
    'question': 'Comment devriez-vous répondre à la crise environnementale majeure en Californie en 2018?',
    'choix': [
        {
            'texte': 'Investir dans des technologies de prévention des incendies de forêt.',
            'temperature': -0.02,
            'argent': -800000,

        },
        {
            'texte': 'Mettre en place des politiques de gestion de l\'eau pour atténuer la sécheresse.',
            'temperature': -0.1,
            'argent': -500000,

        },
        {
            'texte': 'Ne rien faire et économiser l\'argent.',
            'temperature': +0.15,


        }
    ]
},
    2019: {
        'headline': "Urgence Climatique Mondiale",
        'question': 'Comment devriez-vous répondre à l\'urgence climatique mondiale en 2019?',
        'choix': [
            {
                'texte': 'Investir 20% dans des projets d\'urgence climatique, bonus : leadership dans la lutte mondiale',
                'temperature': -0.05,
                'argent': -500000,
            },
            {
                'texte': 'Continuer à investir dans des secteurs moins durables (15%)',
                'temperature': +0.18,
                'argent': -450000,
            },
            {
                'texte': 'Ne rien faire',
                'temperature': +0.15,
                
            }
        ]
    },
    2020: {
        'headline': "Pandémie Mondiale",
        'question': 'Comment devriez-vous répondre à la pandémie mondiale en 2020?',
        'choix': [
            {
                'texte': 'Investir 25% dans des technologies pour rendre les entreprises plus durables, bonus : adaptation rapide',
                'temperature': -0.17,
                'argent': -500000,
            },
            {
                'texte': 'Consolidation des actifs pour minimiser les pertes (30%)',
                'temperature': -0.12,
                'argent': -550000,
            },
            {
                'texte': 'Ne rien faire',
                'temperature': +0.18,
                
            }
        ]
    },
    2021: {
        'headline': "Transition vers l'Hydrogène Vert",
        'question': 'Comment devriez-vous effectuer la transition vers l\'hydrogène vert en 2021?',
        'choix': [
            {
                'texte': 'Investir 20% dans des projets liés à l\'hydrogène vert, bonus : énergie propre et polyvalente',
                'temperature': -0.07,
                'argent': -600000,
            },
            {
                'texte': 'Continuer à investir dans des énergies fossiles (15%)',
                'temperature': -0.02,
                'argent': -550000,
            },
            {
                'texte': 'Ne rien faire',
                'temperature': 0.15,
                
            }
        ]
    },
    2022: {
        'headline': "Croissance des Villes Durables",
        'question': 'Comment devriez-vous favoriser la croissance des villes durables en 2022?',
        'choix': [
            {
                'texte': 'Investir 25% dans des projets de développement urbain durable, bonus : qualité de vie améliorée',
                'temperature': -0.12,
                'argent': -650000,
            },
            {
                'texte': 'Continuer à investir dans des projets immobiliers conventionnels (20%)',
                'temperature': -0.08,
                'argent': -600000,
            },
            {
                'texte': 'Ne rien faire',
                'temperature': +0.2,
                
            }
        ]
    },
    2023: {
        'headline': "Dernières Décisions Cruciales",
        'question': 'Quelles décisions cruciales devriez-vous prendre en 2023?',
        'choix': [
            {
                'texte': 'Participer à des projets de captage et stockage du carbone (25%), bonus : leadership environnemental',
                'temperature': -0.05,
                'argent': -700000,
            },
            {
                'texte': 'Financer des projets d\'adaptation aux changements climatiques (20%)',
                'temperature': -0.02,
                'argent': -650000,
            },
            {
                'texte': 'Ignorer les enjeux environnementaux et maximiser les profits',
                'temperature': +0.22,
                
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
    argent = 5000000;
    joker = 3;
    temperature = 14.5;
    annee = 2000;

    $(ANNEE).text("Année : " + annee);
    $(TEMPERATURE).text('Température moyenne de la terre : ' + temperature + ' °C');
    $(TEMPERATURE_BARRE).css('width', temperature*(50/14.5) + '%');
    $(ARGENT).text(argent);
    $(JOKER).text(joker);

    $(REP1).hide();
    $(REP2).hide();
    $(REP3).hide();

    $(HEADLINE).text('RETOUR DANS LES ANNEES 2000 : LA TERRE VOUS DONNE UNE SECONDE CHANCE');
    $(CONTENU).text('Vous allez être confronté à de réelles catastrophes naturelles causées depuis 2000 à cause du réchauffement climatique. Vous allez devoir faire des choix stratégiques pour sauver la planète et éviter certaines catastrophes que nous avons connu tout en maintenant votre budget. En bref, faites mieux que ce que l\'humanité a fait ! Bonne chance !');
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
                if (!isNaN(catastrophe.choix[0].argent)) {
                    $(REP1).text(catastrophe.choix[0].texte + " - COÛT : " + Math.abs(catastrophe.choix[0].argent) + " $");
                } else {
                    $(REP1).text(catastrophe.choix[0].texte);
                }
                
                if (!isNaN(catastrophe.choix[1].argent)) {
                    $(REP2).text(catastrophe.choix[1].texte + " - COÛT : " + Math.abs(catastrophe.choix[1].argent) + " $");
                } else {
                    $(REP2).text(catastrophe.choix[1].texte);
                }
                
                if (!isNaN(catastrophe.choix[2].argent)) {
                    $(REP3).text(catastrophe.choix[2].texte + " - COÛT : " + Math.abs(catastrophe.choix[2].argent) + " $");
                } else {
                    $(REP3).text(catastrophe.choix[2].texte);
                }

                function onRepClick(choiceIndex, choice) {
                    argent += choice.argent;
                    temperature += choice.temperature;
                    $(ARGENT).text(argent);
                    if (temperature < 0) {
                        temperature = 0;
                    }
                    $(TEMPERATURE).text('Température moyenne de la terre : ' + temperature + ' °C');
                    $(TEMPERATURE_BARRE).css('width', temperature*(50/14.5) + '%');
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

    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    n = 0;
    $(document).keydown(function (e) {
        if (e.keyCode === k[n++]) {
            if (n === k.length) {
                window.open("https://youtu.be/irOhM9HfNkM?si=B8ZhsEzS-mpRBVEs&t=64", '_blank').focus();
                n = 0;
                return false;
            }
        }
        else {
            n = 0;
        }
    });
});