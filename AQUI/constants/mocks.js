const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspirations'],
        count: 147,
        image: require('../assets/images/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'shop'],
        count: 16,
        image: require('../assets/images/seeds.png')
    },
    {
        id:'flowers',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 68,
        image: require('../assets/images/flowers.png')
    },
    {
        id:'sprayers',
        name: 'Sprayers',
        tags: ['products', 'shop'],
        count: 47,
        image: require('../assets/images/sprayers.png')
    },
    {
        id:'pots',
        name: 'Pots',
        tags: ['products', 'shop'],
        count: 17,
        image: require('../assets/images/pots.png')
    },
    {
        id:'fertilizers',
        name: 'Fertilizers',
        tags: ['products', 'shop'],
        count: 17,
        image: require('../assets/images/fertilizers.png')
    },
];

const products = [
    {
        id: 1,
        name: '16 Best Plants That Thrive In Your Bedroom',
        description: 'Aqui is an app that allows users to take attendance quickly and reliably. The app alows the user to display a     morphing dynamic QR code to the audience who are then able to use the app to scan the GIF and check into the class. By using a constantly changing QR code the app makes it nearly impossible for those not in the classroom to check in. Aqui then allows the user to acess attendance information.\n',
        tags: ['Interior', '27m','Ideas'],
        gallery: [
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
            // showing only 3 images, show +3 for the rest
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
        ]
    }
];

const explore = [
    // images
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png'),
];

const profile = {
    username: 'www',
    location: 'Europe',
    email: 'www@psu.edu',
    avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
};

export {
    categories,
    products,
    profile,
    explore,
}