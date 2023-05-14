let zaposleni = [
    {
        ime: 'Uros',
        prezime: 'Jankovic',
        pozicija: 'frontend developer',
        senioritet: 'medior',
        godineIskustva: 2,
        plata: 158000,
        bonusiKvartalni: 65000,
        bonusNaKrajuGodine: 240000,
        godisnjiOdmor: 25
    },
    {
        ime: 'Marta',
        prezime: 'Nesovic',
        pozicija: 'project menadzer',
        senioritet: 'medior',
        godineIskustva: 2.5,
        plata: 95000,
        bonusiKvartalni: 35000,
        bonusNaKrajuGodine: 120000,
        godisnjiOdmor: 25
    },
    {
        ime: 'Stefan',
        prezime: 'Janketic',
        pozicija: 'fullstack developer',
        senioritet: 'senior',
        godineIskustva: 4,
        plata: 281000,
        bonusiKvartalni: 100000,
        bonusNaKrajuGodine: 500000,
        godisnjiOdmor: 25
    },
    {
        ime: 'Kristina',
        prezime: 'Miskovic',
        pozicija: 'backend developer',
        senioritet: 'medior',
        godineIskustva: 1,
        plata: 223000,
        bonusiKvartalni: 80000,
        bonusNaKrajuGodine: 130000,
        godisnjiOdmor: 25
    },
    {
        ime: 'Teodora',
        prezime: 'Jovanovic',
        pozicija: 'frontend developer',
        senioritet: 'junior',
        godineIskustva: 0.5,
        plata: 78000,
        bonusiKvartalni: 25000,
        bonusNaKrajuGodine: 80000,
        godisnjiOdmor: 25
    },
    {
        ime: 'Jovana',
        prezime: 'Petrovic',
        pozicija: 'project menadzer',
        senioritet: 'senior',
        godineIskustva: 5,
        plata: 120000,
        bonusiKvartalni: 45000,
        bonusNaKrajuGodine: 150000,
        godisnjiOdmor: 25
    },
]

// 1. Isfiltrirati sve koji su mediori.
// 2. Mapirati zaposlene koji imaju platu vecu od 200000 dinara. (u objektu treba da bude samo ime, senioritet i plata)