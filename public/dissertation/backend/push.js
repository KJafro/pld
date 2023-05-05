var push = require('web-push')


let vapidKeys = {
    publicKey: 'BGcIvr4sKScLIw84bPGFVC2YdZWFq2QvQlHcqc7aPOhxRGo0bO92zvt5y6V4u85c85o4lTukMT3iDNAIudKwwS8',
    privateKey: 'N-2_ldIA_UjeoYX3KhcsIfAGSsQCHmTdQLL9NC_JE74'
  }


  push.setVapidDetails("mailto:Kurtjeffries@yahoo.com", vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {
    endpoint:"https://wns2-ln2p.notify.windows.com/w/?token=BQYAAAB8ZfNCXsLnu4m8DZxENiYdDME1vpoJNDce17LY0aUK%2bJ%2bcr1wazdz1trnr6k01dcU1WITODafgtOs9QYf%2fRpfM3Refm%2f%2f0NGwd4EU8xdFdi3sgio%2bY7sM4clqyorgKzgMz5qIsnmen7YALWINFIsi2aHtwvc0KnmVD14MXnMgZuFpifVZolL7lRfBym4Uv%2fyl%2feYmRGySIT1PxnyvKm%2fjII7sApxTOlqD4ZnxmmVe3vYRVLQuDUDvdDPBf8U6EfFQ5N2tIVcPYR3ZIqdADq2T5SBEcE80iToEADG4Vgjpt2ucay24gL3fXIE7OTex2fe6Ejf9Qf9bPhJKU5Kgso7kk",
    expirationTime: null,
    keys:{
      p256dh:"BNdLR6M1KwHnDYkGWTODwPYAFmTPEOAG2WgOx7vF9ALGjPYvWl90LFZfgyjWJHZKTv8uD4ngp2HhjYwkMABrHp0",
      auth:"iXplciy65Nkv93QSnXnNwg"
    }
  }

let sub2 = {
  endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkUYxl8yWYcwTgGo8DLHX8d1W6jGoLOuKBMlfuv3R7a2-FuDXCUdMc7CYDAQYf_4UCDR6TaDCPuxQO08Tr8rl6rsBksmIHwi4IkwUtbHsS1aoP82dQjnz-Fd44RH8iZN4Ndcwjb0RjBFZLp_f64cq9WsQcPBAEQTlNNuIXPTNMsBbVBAM",
  expirationTime: null,
  keys:{
    auth:"3-CtRiOwDQ8evk0w9q1cEQ",
    p256dh:"BHevjgLbv_RA72eK06aK1dNzk7iM5Lou-5Th_V439q0AfSAAsj4pwMzP4bLmnBF9jyG_QnNEZpsTAVQwNlxy9Oc"
  }
}

let sub4 = {
  endpoint:"https://web.push.apple.com/QIcYYuLASgz8kPJ50Isrpt7I3gjpElRTC9XyfT5SywVK9JElMCfA-bNMRsAjWz8vFByLgOIg074jysJusrOVjsR8_sPnl_sFoeMHAHvVLmtATwE5DdrKlXL5lda2fxg4aMX2Bu0KCdN5PtnNAMYAn9ecUa2hQLjSR6hXbO3ypYE",
  keys:{
    p256dh:"BGu5qAJen06nxdwd5ngLunKsmYmM4_MkOvgH4H_1qSIczqXynVUgN4gb_9vzMRZNeP_Iu8w4KMMSl07RyzQBPpo",
    auth:"iy3KcVNP2f72XtXsWCXO2Q"
  }
}

let sub5 = {
  endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkUYxl8yWYcwTgGo8DLHX8d1W6jGoLOuKBMlfuv3R7a2-FuDXCUdMc7CYDAQYf_4UCDR6TaDCPuxQO08Tr8rl6rsBksmIHwi4IkwUtbHsS1aoP82dQjnz-Fd44RH8iZN4Ndcwjb0RjBFZLp_f64cq9WsQcPBAEQTlNNuIXPTNMsBbVBAM",
  expirationTime: null,
  keys:{
    auth:"3-CtRiOwDQ8evk0w9q1cEQ",
    p256dh:"BHevjgLbv_RA72eK06aK1dNzk7iM5Lou-5Th_V439q0AfSAAsj4pwMzP4bLmnBF9jyG_QnNEZpsTAVQwNlxy9Oc"
  }
}

let sub6 = {
  endpoint:"https://fcm.googleapis.com/fcm/send/dYCWPInp48U:APA91bF_efABc8Q4CV3SxhJmvadwjXNLaqmShmSLoXEzTZlr0ZCQTVyfIfqCm6wkt-qpp5H7fT1EsT4l_ch0D9-TFnAn8nZwKvKa7f9tTEsKB4FNkrl_4CXbLlwLZR3_liXERQVufyNa",
  expirationTime: null,
  keys:{
    p256dh:"BKSegZAHUQUYSWgN1iu2hmKBhRJrBAxAaFQ5cpqdJ1zMevR2RQfvIg1_ABfJhRzm3kXBfpc1iQhecj0K-0YzVpQ",
    auth:"jul7xPJeuVr5ECrL8ALOnQ"
  }
}

  push.sendNotification(sub, '{}')
  push.sendNotification(sub2, '{}')
  push.sendNotification(sub4, '{}')
  push.sendNotification(sub5, '{}')
  push.sendNotification(sub6, '{}')