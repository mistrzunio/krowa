var czuonki = {
    destrawuj(ath) {
        if (ath.firstname == 'Daniel' && ath.lastname == 'F.') {
            ath.nick = 'Daniellek'
            return ath.nick
        } else if (ath.firstname == 'Marcin' && ath.lastname == 'B.') {
            ath.nick = 'Yans'
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
        } else {
            return ath.firstname+' '+ath.lastname
        }
    }
}