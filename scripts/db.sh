if psql -lqt | cut -d \| -f 1 | grep -w 2cents; then
  dropdb 2cents; createdb 2cents; psql -d 2cents -f ./lib/user_schema.sql
else
  createdb 2cents; psql -d 2cents -f ./lib/user_schema.sql
fi
