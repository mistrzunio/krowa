# krowa
jaka jest każdy widzi

trochę działająca wersja testowa: <https://mistrzunio.github.io/krowa.org/>

odświeżenie aktywności ze stravy:
```
 echo "var kro = " > kro.js;  curl -X GET "https://www.strava.com/api/v3/clubs/269723/activities?page=1&per_page=100" -H "accept: application/json" -H "authorization: Bearer TOKEN_OD_STRAVY" --noproxy "*" >> kro.js
 ```