export const user = {
  profile: {
    id: 1,
    fullName: "Zayn",
    email: "zayn@mail.com",
    username: "zayn",
    bio: "Rapper in Black Pink, Brand Ambasador Penshoppe",
    image: require("../assets/images/avatar/zayn.png"),
    insight: {
      posts: 6,
      followers: 30,
      following: 1,
    },
  },
  feed: [
    {
      id: 1,
      fullName: "Zayn",
      username: "zayn",
      photo: require("../assets/images/avatar/zayn.png"),
      image: require("../assets/images/1.png"),
      like: 54000,
      caption: "Beautiful place",
      comment: [
        {
          id: 1,
          photo: require("../assets/images/avatar/lisa.png"),
          username: "lisa",
          comment: "Awesome!",
        },
        {
          id: 2,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
        {
          id: 3,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
        {
          id: 4,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
        {
          id: 5,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
        {
          id: 6,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
        {
          id: 7,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
        {
          id: 8,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
        {
          id: 9,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
        {
          id: 10,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
      ],
    },
    {
      id: 2,
      fullName: "Zayn",
      username: "zayn",
      photo: require("../assets/images/avatar/zayn.png"),
      image: require("../assets/images/4.png"),
      like: 31922,
      caption: "Nostalgic",
      comment: [
        {
          id: 1,
          photo: require("../assets/images/avatar/lisa.png"),
          username: "lisa",
          comment: "Awesome!",
        },
        {
          id: 2,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
      ],
    },
    {
      id: 3,
      fullName: "Zayn",
      username: "zayn",
      photo: require("../assets/images/avatar/zayn.png"),
      image: require("../assets/images/2.png"),
      like: true,
      caption: "Join",
      comment: [
        {
          id: 1,
          photo: require("../assets/images/avatar/lisa.png"),
          username: "lisa",
          comment: "Awesome!",
        },
        {
          id: 2,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
      ],
    },
    {
      id: 4,
      fullName: "Zayn",
      username: "zayn",
      photo: require("../assets/images/avatar/zayn.png"),
      image: require("../assets/images/5.png"),
      like: 9091,
      caption: "Yeah!",
      comment: [
        {
          id: 1,
          photo: require("../assets/images/avatar/lisa.png"),
          username: "lisa",
          comment: "Awesome!",
        },
        {
          id: 2,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
      ],
    },
    {
      id: 5,
      fullName: "Zayn",
      username: "zayn",
      photo: require("../assets/images/avatar/zayn.png"),
      image: require("../assets/images/3.png"),
      like: 19091,
      caption: "See in my eye",
      comment: [
        {
          id: 1,
          photo: require("../assets/images/avatar/lisa.png"),
          username: "lisa",
          comment: "Awesome!",
        },
        {
          id: 2,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
      ],
    },
    {
      id: 6,
      fullName: "Zayn",
      username: "zayn",
      photo: require("../assets/images/avatar/zayn.png"),
      image: require("../assets/images/7.png"),
      like: 9091,
      caption: "Peacefull",
      comment: [
        {
          id: 1,
          photo: require("../assets/images/avatar/lisa.png"),
          username: "lisa",
          comment: "Awesome!",
        },
        {
          id: 2,
          photo: require("../assets/images/avatar/zayn.png"),
          username: "zayn",
          comment: "Thanks!",
        },
      ],
    },
  ],
};

export const dataContact = [
  {
    id: 3,
    username: "leo",
    image: require("../assets/images/1.png"),
    chat: "Hi!",
  },
  {
    id: 2,
    username: "lisa",
    image: require("../assets/images/avatar/lisa.png"),
    chat: "Hello!",
  },
  {
    id: 4,
    username: "nina",
    image: require("../assets/images/2.png"),
    chat: "Where are you?",
  },
  {
    id: 5,
    username: "bob",
    image: require("../assets/images/3.png"),
    chat: "Dude!",
  },
  {
    id: 6,
    username: "bob",
    image: require("../assets/images/5.png"),
    chat: "Dude!",
  },
  {
    id: 8,
    username: "bob",
    image: require("../assets/images/8.png"),
    chat: "Dude!",
  },
  {
    id: 7,
    username: "bob",
    image: require("../assets/images/9.png"),
    chat: "Dude!",
  },
  {
    id: 9,
    username: "bob",
    image: require("../assets/images/9.png"),
    chat: "Dude!",
  },
];

export const dataChat = [
  {
    id: 1,
    userId: 3,
    recipient: 1,
    chat: "Hi!",
  },
  {
    id: 1,
    userId: 1,
    recipient: 3,
    chat: "Hi!",
  },
];
