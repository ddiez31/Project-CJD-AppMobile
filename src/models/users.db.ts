// Interface
export interface UsersModel {
    id : number;
    firstName : string;
    lastName : string;
    phone : number;
    image : string;
    mail : string;
    region : string;
    section : string;
    societyName : string;
    jobName : string;
    address : string;
    description : string;
    nbrEmployee : number;
    businessRevenue : number;
    officeTeam : string;
    commission : number;
    roleCJD : string;
    roleOther : string;
    hobbies : string;
    points : number;
}

// Mocks
export const UsersMock = [
    {
        'id': 0,
        'firstName': 'Marc',
        'lastName': 'Canitrot',
        'phone': + 33123456789,
        'image': 'https://unsplash.it/50/50?image=10',
        'mail': 'm.canitrot@prometil.com',
        'region': 'Alsace',
        'section': 'Colmar',
        'societyName': 'Prometil',
        'jobName': 'Directeur',
        'address': '52, rue Babinet 31000 Toulouse',
        'description': 'Conseil et Services en ingénierie système et logicielle',
        'nbrEmployee': 50,
        'businessRevenue': 500000,
        'officeTeam': 'bureau 1',
        'commission': 150,
        'roleCJD': 'Administrateur',
        'roleOther': 'Président adjoint club Portésien',
        'hobbies': 'Pétanque',
        'points': 645
    }, {
        'id': 1,
        'firstName': 'Marine',
        'lastName': 'Bardet',
        'phone': + 33123456789,
        'image': 'https://unsplash.it/50/50?image=20',
        'mail': 'm.bardet@prometil.com',
        'region': 'Alsace',
        'section': 'Mulhouse',
        'societyName': 'OneLight Studio',
        'jobName': 'Développeuse Web',
        'address': '52, rue Babinet 31000 Toulouse',
        'description': 'Applications métier web & mobile',
        'nbrEmployee': 10,
        'businessRevenue': 100000,
        'officeTeam': 'bureau 2',
        'commission': 50,
        'roleCJD': 'Aucun',
        'roleOther': 'Aucun',
        'hobbies': 'Roller',
        'points': 50
    }, {
        'id': 2,
        'firstName': 'Pierre-Yves',
        'lastName': 'Malisova',
        'phone': + 33123456789,
        'image': 'https://unsplash.it/50/50?image=30',
        'mail': 'py.malisova@prometil.com',
        'region': 'Aquitaine',
        'section': 'Bordeaux',
        'societyName': 'OneLight Studio',
        'jobName': 'Développeur Web',
        'address': '52, rue Babinet 31000 Toulouse',
        'description': 'Applications métier web & mobile',
        'nbrEmployee': 10,
        'businessRevenue': 100000,
        'officeTeam': 'bureau 2',
        'commission': 80,
        'roleCJD': 'Aucun',
        'roleOther': 'Aucun',
        'hobbies': 'Jeux vidéo',
        'points': 80
    }, {
        'id': 3,
        'firstName': 'Jérôme',
        'lastName': 'Barthas',
        'phone': + 33123456789,
        'image': 'https://unsplash.it/50/50?image=40',
        'mail': 'j.barthas@prometil.com',
        'region': 'Aquitaine',
        'section': 'Bordeaux',
        'societyName': 'OneLight Studio',
        'jobName': 'Développeur Web',
        'address': '52, rue Babinet 31000 Toulouse',
        'description': 'Applications métier web & mobile',
        'nbrEmployee': 10,
        'businessRevenue': 100000,
        'officeTeam': 'bureau 2',
        'commission': 75,
        'roleCJD': 'Aucun',
        'roleOther': 'Aucun',
        'hobbies': 'Musique',
        'points': 120
    }, {
        'id': 4,
        'firstName': 'Sébastien',
        'lastName': 'Balard',
        'phone': + 33123456789,
        'image': 'https://unsplash.it/50/50?image=50',
        'mail': 's.balard@prometil.com',
        'region': 'Aquitaine',
        'section': 'Landes',
        'societyName': 'OneLight Studio',
        'jobName': 'Développeur Android',
        'address': '52, rue Babinet 31000 Toulouse',
        'description': 'Applications métier web & mobile',
        'nbrEmployee': 10,
        'businessRevenue': 100000,
        'officeTeam': 'bureau 2',
        'commission': 100,
        'roleCJD': 'Aucun',
        'roleOther': 'Trésorier Club Android Toulouse',
        'hobbies': 'Voyages',
        'points': 330
    }, {
        'id': 5,
        'firstName': 'Thomas',
        'lastName': 'Gayral',
        'phone': + 33123456789,
        'image': 'https://unsplash.it/50/50?image=60',
        'mail': 't.gayral@prometil.com',
        'region': 'Auvergne',
        'section': 'Thiers',
        'societyName': 'OneLight Studio',
        'jobName': 'Développeur Web',
        'address': '52, rue Babinet 31000 Toulouse',
        'description': 'Applications métier web & mobile',
        'nbrEmployee': 10,
        'businessRevenue': 100000,
        'officeTeam': 'bureau 2',
        'commission': 125,
        'roleCJD': 'Aucun',
        'roleOther': 'Aucun',
        'hobbies': 'Cinéma',
        'points': 95
    }, {
        'id': 6,
        'firstName': 'David',
        'lastName': 'Diez',
        'phone': + 33782063177,
        'image': 'https://unsplash.it/50/50?image=70',
        'mail': 'd.diez@prometil.com',
        'region': 'Auvergne',
        'section': 'Vichy',
        'societyName': 'OneLight Studio',
        'jobName': 'Développeur Web Junior',
        'address': '52, rue Babinet 31000 Toulouse',
        'description': 'Applications métier web & mobile',
        'nbrEmployee': 10,
        'businessRevenue': 100000,
        'officeTeam': 'bureau 3',
        'commission': 0,
        'roleCJD': 'Aucun',
        'roleOther': 'Aucun',
        'hobbies': 'Rugby',
        'points': 0
    }
]
