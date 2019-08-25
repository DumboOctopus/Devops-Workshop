db = db.getSiblingDB('admin');
db.createUser({user: "admin", pwd: "userAdmin123", roles: [{role: "root", db: "admin"}]});

