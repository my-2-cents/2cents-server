# create or reset 2cents db

if psql -lqt | cut -d \| -f 1 | grep -w 2cents; then
  #if it does, drop it, create it, and run the schema
  dropdb 2cents; createdb 2cents; psql -d 2cents -f ./lib/user_schema.sql
else
  #if it doesn't, create it and run the schema
  createdb 2cents; psql -d 2cents -f ./lib/user_schema.sql
fi
