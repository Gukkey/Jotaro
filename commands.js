module.exports = {
  commands: [
    {
      name: "ping",
      description: "Replies with Pong!",
    },
    {
      name: "donate",
      description: 'Gives a "Buy me a coffee link" to donate to devs for this project', // some commands like this one and the commands like open source are not neccessary for moderation or multi utility but for our own learning process and donation jar.
    },
    {
      name: "source",
      description: "Provides the source code for this bot",
    },
    {
      name: "ban",
      description: "Ban an user",
      options: [
        {
          name: "user",
          description: "Enter User name",
          required: true,
          type: 6,
        },
        {
          name: "reason",
          description: "Reason for kick",
          required: true,
          type: 3,
        },
      ],
    },
    {
      name: "kick",
      description: "Kick user",
      options: [
        {
          name: "user",
          description: "Enter User name",
          required: true,
          type: 6,
        },
        {
          name: "reason",
          description: "Reason for kick",
          required: false,
          type: 3, // type 3 ordinary string
        },
      ],
    },
    {
      name: "warn",
      description: "Warn an user",
      options: [
        {
          name: "user",
          description: "Enter User name",
          required: true,
          type: 9, // type 6 member type
        },
        {
          name: "reason",
          description: "Enter a reason for the warning",
          required: false,
          type: 3,
        },
      ],
    },
  ],
};
