import imgCarro from '../assets/images/unsplash_3ZUsNJhi_Ik.png';
import imgCarro2 from '../assets/images/unsplash_6lSBynPRaAQ.png';
import imgCarro3 from '../assets/images/unsplash_f_SDCASisgs.png';
import imgCarro4 from '../assets/images/unsplash_a4S6KUuLeoM.png';

export const fakeUser = {
  id: '2s148ae-10e8-407f-a56b-8837463bac22',
  name: 'John Bravo',
  describe:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  vehicles: [
    {
      id: '1ea148ae-10e8-407f-a56b-8837463bac74',
      typeOffer: true,
      title: 'Carrão',
      year: 2000,
      mileage: 120,
      price: 20000,
      describe: 'Faz vrun vrun',
      typeVehicles: false,
      coverImg: imgCarro,
      GalleryImgs: [
        {
          id: '11171562-115b-4d5a-acad-ed2f6075645c',
          url: 'uma',
          vehicle_id: '11a148ae-10e8-407f-a56b-8837463bac74',
        },
        {
          id: '118e94b7-1b93-4c61-92a1-b090df88dcec',
          url: 'duas',
          vehicle_id: '12a148ae-10e8-407f-a56b-8837463bac74',
        },
      ],
    },
    {
      id: '2ea148ae-10e8-407f-a56b-8837463bac74',
      typeOffer: true,
      title: 'Carrin',
      year: 2020,
      mileage: 69,
      price: 50000,
      describe: 'Muito rapido',
      typeVehicles: false,
      coverImg: imgCarro2,
      GalleryImgs: [
        {
          id: '22171562-115b-4d5a-acad-ed2f6075645c',
          url: 'uma',
          vehicle_id: '21a148ae-10e8-407f-a56b-8837463bac74',
        },
        {
          id: '228e94b7-1b93-4c61-92a1-b090df88dcec',
          url: 'duas',
          vehicle_id: '22a148ae-10e8-407f-a56b-8837463bac74',
        },
      ],
    },
    {
      id: '3ea148ae-10e8-407f-a56b-8837463bac74',
      typeOffer: true,
      title: 'Carroide',
      year: 2019,
      mileage: 420,
      price: 10000,
      describe: 'Eu sou a velocidade',
      typeVehicles: false,
      coverImg: imgCarro3,
      GalleryImgs: [
        {
          id: '33171562-115b-4d5a-acad-ed2f6075645c',
          url: 'uma',
          vehicle_id: '31a148ae-10e8-407f-a56b-8837463bac74',
        },
        {
          id: '338e94b7-1b93-4c61-92a1-b090df88dcec',
          url: 'duas',
          vehicle_id: '32a148ae-10e8-407f-a56b-8837463bac74',
        },
      ],
    },
    {
      id: '4ea148ae-10e8-407f-a56b-8837463bac74',
      typeOffer: true,
      title: 'Motinha',
      year: 1999,
      mileage: 666,
      price: 11111,
      describe: 'Claramente uma moto',
      typeVehicles: true,
      coverImg: imgCarro4,
      GalleryImgs: [
        {
          id: '44171562-115b-4d5a-acad-ed2f6075645c',
          url: 'uma',
          vehicle_id: '41a148ae-10e8-407f-a56b-8837463bac74',
        },
        {
          id: '448e94b7-1b93-4c61-92a1-b090df88dcec',
          url: 'duas',
          vehicle_id: '42a148ae-10e8-407f-a56b-8837463bac74',
        },
      ],
    },
  ],
};
