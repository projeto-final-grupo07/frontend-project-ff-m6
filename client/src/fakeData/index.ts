import imgCarro from '../assets/images/unsplash_3ZUsNJhi_Ik.png';
import imgCarro2 from '../assets/images/unsplash_6lSBynPRaAQ.png';

export const fakeUser = {
  id: '2s148ae-10e8-407f-a56b-8837463bac22',
  name: 'John Bravo',
  describe:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  vehicles: [
    {
      id: '1ea148ae-10e8-407f-a56b-8837463bac74',
      typeOffer: true,
      title: 'Carro1',
      year: 2000,
      mileage: 159159,
      price: 500,
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
      title: 'Carro2',
      year: 2000,
      mileage: 159159,
      price: 500,
      describe: 'Faz vrun vrun',
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
  ],
};
