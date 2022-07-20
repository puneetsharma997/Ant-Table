import sarees from '../assets/images/sarees.jpeg';
import handbags from '../assets/images/handbags.jpg';
import salwarsuit from '../assets/images/salwarsuit.jpeg';
import accessories from '../assets/images/accessories.jpg';


const data = [
    {
        key: '1',
        batchId: '#123',
        family: 'Sarees',
        source: 'Amazon',
        results: 85,
        imported: 85,
        lastUpdated: 'March 10, 2022',
        link: 'https://www.google.com',
        img: sarees,
    },
    {
        key: '2',
        batchId: '#456',
        family: 'Handbags',
        source: 'Amazon',
        results: 12,
        imported: 12,
        lastUpdated: 'March 10, 2022',
        link: 'https://www.amazon.in',
        img: handbags,
    },
    {
        key: '3',
        batchId: '#789',
        family: 'Salwar Suit',
        source: 'Flipkart',
        results: 9,
        imported: 9,
        lastUpdated: 'March 10, 2022',
        link: 'https://www.flipkart.com',
        img: salwarsuit,
    },
    {
        key: '4',
        batchId: '#849',
        family: 'Accessories',
        source: 'Amazon',
        results: 300,
        imported: 300,
        lastUpdated: 'March 10, 2022',
        link: 'https://www.jiomart.com/',
        img: accessories,
    },
]

export default data;