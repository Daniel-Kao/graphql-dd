mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  db.createUser({
    roles: [
      { role: 'readWrite', db: "auth" }
    ]
  })
EOF