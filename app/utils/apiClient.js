import axios from 'axios';

const froshList = [
    {
        id: 1,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 2,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 3,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 4,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 5,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 6,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 7,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 8,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 9,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 10,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 11,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 12,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 13,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 14,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 15,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 16,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 17,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 18,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 19,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 20,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 21,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 22,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
    {
        id: 23,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9579&photo=show",
    },
    {
        id: 24,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "http://donut.caltech.edu/directory/card_image.php?inum=9671&photo=show",
    },
]

const comments = [
    {
        author: "Joon Hee Lee",
        content: "This guy is cool!",
    },
    {
        author: "Anish Thilagar",
        content: "This guy is aite",
    },
    {
        author: "Joon Hee Lee",
        content: "This guy is cool!",
    }, 
]

const apiClient = {
    getFroshList: function() {
        return froshList
    },
    getComments: function() {
        return comments
    }
}

export default apiClient;