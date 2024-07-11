const express = require("express");
require("dotenv").config();
const twilio = require("twilio");

const client = twilio(process.env.AUTH_SID, process.env.AUTH_TOKEN);

client.calls.create({
    from:'+13217326295',
    to:"+998904930615",

})