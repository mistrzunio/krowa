var czuonki = {
    destrawuj(ath) {
        if (ath.firstname == 'Daniel' && ath.lastname == 'F.') {
            ath.nick = 'Daniellek'
            return ath.nick
        } else if (ath.firstname == 'Marcin' && ath.lastname == 'B.') {
            ath.nick = 'Mrs Yans'
            return ath.nick           
        } else if (ath.firstname == 'Maciek' && ath.lastname == 'O.') {
            ath.nick = 'Olej'
            return ath.nick           
        } else if (ath.firstname == 'Anna' && ath.lastname == 'S.') {
            ath.nick = 'Łatka'
            return ath.nick  
        } else if (ath.firstname == 'Wojtek' && ath.lastname == 'D.') {
            ath.nick = 'defiks'
            return ath.nick  
        } else if (ath.firstname == 'Marzena' && ath.lastname == 'F.') {
            ath.nick = 'Buzz A.'
            return ath.nick  
        } else if (ath.firstname == 'Piotr' && ath.lastname == 'S.') {
            ath.nick = 'Sir Batą'
            return ath.nick  
        } else {
            return ath.firstname+' '+ath.lastname
        }
    },
    processStravaData(obj) {
        if (typeof obj.errors == "object") { 
            console.log('Bad strava API response'); 
            return []
        } else {
            return obj
        }
    }
}
