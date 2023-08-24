const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const amqplib = require("amqplib");

const { APP_SECRET, MSG_QUEUE_URL, EXCHANGE_NAME  } = require('../config');

//Utility functions
  (module.exports.ValidateSignature = async (req) => {
    const signature = req.get('Authorization');

    if (signature) {
      const payload = await jwt.verify(signature.split(' ')[1], APP_SECRET);
      req.user = payload;
      return true;
    }

    return false;
  });

module.exports.FormateData = (data) => {
  if (data) {
    return { data };
  } else {
    throw new Error('Data Not found!');
  }
};

//Message Broker
module.exports.CreateChannel = async () => {
    try {
      const connection = await amqplib.connect(MSG_QUEUE_URL);
      const channel = await connection.createChannel();
      await channel.assertQueue(EXCHANGE_NAME, "direct", { durable: true });
      return channel;
    } catch (err) {
      throw err;
    }
  };
