/**

1.install jsonwebtoken
2.jwt.sign (payload, secret, {expiresIn: '1h})
3. res.send(token)


*/ 

/**
* how to store token in the client side
1. memory --> ok type
2. local storage --> ok type (XSS)
3. cookies: httpOnly

*/ 

/**

1. set cookies with httpOnly. for development secure: false,



2. cors
app.use(cors({
    origin: ['http://localhost:5173'], 
    credentials: true
}));

3. client side axios setting

**/ 