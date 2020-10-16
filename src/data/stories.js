import profilePicture1 from "../../assets/profile-picture/profile-picture1.jpg"
import profilePicture2 from "../../assets/profile-picture/profile-picture2.jpg";
import profilePicture3 from "../../assets/profile-picture/profile-picture3.jpg"
import profilePicture4 from "../../assets/profile-picture/profile-picture4.jpg";

export default [
    {
        user: {
            id: '1',
            source: profilePicture1,
            name: "James",
        },
        stories: [
            {
                source:profilePicture2,
                postedTime: '25 m'
            },
            {
                source:profilePicture3,
                postedTime: '1 day'
            },
            {
                source:profilePicture4,
                postedTime: '2 h'
            }
        ]
    },
    {
        user: {
            id: '2',
            source: profilePicture2,
            name: "Lucas",
        },
        stories: [
            {
                source:profilePicture3,
                postedTime: '25 m'
            },
            {
                source:profilePicture2,
                postedTime: '2 days'
            },
            {
                source:profilePicture1,
                postedTime: '3 h'
            }
        ]
    },
    {
        user: {
            id: '3',
            source: profilePicture3,
            name: "Williams",
        },
        stories: [
            {
                source:profilePicture4,
                postedTime: '2 m'
            },
        ]
    },
    {
        user: {
            id: '4',
            source: profilePicture4,
            name: "Alex",
        },
        stories: [
            {
                source:profilePicture1,
                postedTime: '2 m'
            },
        ]
    },
    {
        user: {
            id: '5',
            source: profilePicture1,
            name: "Kim",
        },
        stories: [
            {
                source:profilePicture4,
                postedTime: '2 m'
            },
        ]
    },
    {
        user: {
            id: '6',
            source: profilePicture2,
            name: "Anderson",
        },
        stories: [
            {
                source:profilePicture3,
                postedTime: '2 m'
            },
        ]
    },
    {
        user: {
            id: '7',
            source: profilePicture3,
            name: "Tim",
        },
        stories: [
            {
                source:profilePicture1,
                postedTime: '2 m'
            },
        ]
    },
    {
        user: {
            id: '8',
            source: profilePicture4,
            name: "Pieterson",
        },
        stories: [
            {
                source:profilePicture3,
                postedTime: '2 m'
            },
        ]
    }
]