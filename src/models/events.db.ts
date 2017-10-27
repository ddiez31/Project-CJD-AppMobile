// Interface
export interface EventsModel {
    id : number;
    name : string;
    image : string;
    date : string;
    time : string;
    duration : string;
    actorName : string;
    address : string;
    lat : number;
    lng : number;
    region : string;
    description : string;
    placeNbr : number;
}

// Mocks
export const EventsMock = [
    {
        'id': 0,
        'name': 'Plénière',
        'image': 'https://unsplash.it/100/100?image=100',
        'date': '15/10/2017',
        'time': '10h00',
        'duration': '2h00',
        'actorName': 'Marc Canitrot',
        'address': '52, rue Babinet 31100 Toulouse',
        'lat': 43.5751437,
        'lng': 1.4082407,
        'region': 'Midi Pyrénées',
        'description': 'Réunion générale',
        'placeNbr': 25
    }, {
        'id': 1,
        'name': 'Assemblée Générale',
        'image': 'https://unsplash.it/100/100?image=200',
        'date': '15/11/2017',
        'time': '10h00',
        'duration': '2h30',
        'actorName': 'Marc Canitrot',
        'address': '116, rue de Cugnaux 31400 Toulouse',
        'lat': 43.59466680000001,
        'lng': 1.42945,
        'region': 'Midi Pyrénées',
        'description': 'Assemblée Générale annuelle, présence obligatoire',
        'placeNbr': 40
    }, {
        'id': 2,
        'name': 'Marketing numérique',
        'image': 'https://unsplash.it/100/100?image=300',
        'date': '15/12/2017',
        'time': '18h00',
        'duration': '1h00',
        'actorName': 'Marc Canitrot',
        'address': 'Place du Capitole 31000 Toulouse',
        'lat': 43.6038155,
        'lng': 1.4440601,
        'region': 'Midi Pyrénées',
        'description': 'Améliorer sa visibilité grâce au marketing numérique',
        'placeNbr': 30
    }, {
        'id': 3,
        'name': 'Plénière',
        'image': 'https://unsplash.it/100/100?image=400',
        'date': '25/10/2017',
        'time': '14h30',
        'duration': '1h30',
        'actorName': 'Inconnu',
        'address': 'Place Pey Berland 33000 Bordeaux',
        'lat': 44.8380313,
        'lng': -0.5773290999999999,
        'region': 'Aquitaine',
        'description': 'Réunion générale',
        'placeNbr': 35
    }

]
