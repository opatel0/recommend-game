const seedData = {
    users: [
        {
            username: 'xoGaMeRgIrLxo',
            password: 'password'
        },
        {
            username: 'johnDoe',
            password: 'secure123'
        },
        {
            username: 'gamer123',
            password: 'gamingPass'
        },
        {
            username: 'codingGamer',
            password: 'code4fun'
        },
        {
            username: 'gameMaster',
            password: 'masterPass'
        },
        {
            username: 'techGamer',
            password: 'techPass123'
        },
        {
            username: 'stealthPlayer',
            password: 'hidden123'
        },
        {
            username: 'fantasyGamer',
            password: 'dragonsRule'
        },
        {
            username: 'spaceExplorer',
            password: 'galaxy123'
        },
        {
            username: 'arcadeFanatic',
            password: 'highScore321'
        },
        {
            username: 'puzzleMaster',
            password: 'solveItNow'
        },
        {
            username: 'sportsGamer',
            password: 'playHard789'
        },
        {
            username: 'comedyGamer',
            password: 'laughing123'
        },
        {
            username: 'historyExplorer',
            password: 'timeTraveler'
        },
        {
            username: 'cyberPunkGamer',
            password: 'hackTheWorld'
        },
        {
            username: 'horrorFan',
            password: 'scareMeNow'
        },
        {
            username: 'username18',
            password: 'password18'
        },
        {
            username: 'username19',
            password: 'password19'
        },
        {
            username: 'username20',
            password: 'password20'
        }
    ],
    recommendations: [
        {
            searchCriteria: {
                genre: 'fps',
            },
            games: [
                {
                    game: 'Call of Duty: Modern Warfare 2',
                    price: 4.99
                },
                {
                    game: 'BioShock',
                    price: 5.00
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'action',
            },
            games: [
                {
                    game: 'Assassin\'s Creed',
                    price: 9.99
                },
                {
                    game: 'Uncharted 4',
                    price: 14.99
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'rpg',
            },
            games: [
                {
                    game: 'The Witcher 3',
                    price: 19.99
                },
                {
                    game: 'Final Fantasy XV',
                    price: 24.99
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'strategy',
            },
            games: [
                {
                    game: 'Civilization VI',
                    price: 29.99
                },
                {
                    game: 'Stellaris',
                    price: 22.50
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'adventure',
            },
            games: [
                {
                    game: 'The Legend of Zelda: Breath of the Wild',
                    price: 39.99
                },
                {
                    game: 'Red Dead Redemption 2',
                    price: 49.99
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'simulation',
            },
            games: [
                {
                    game: 'Cities: Skylines',
                    price: 19.99
                },
                {
                    game: 'The Sims 4',
                    price: 29.99
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'stealth',
            },
            games: [
                {
                    game: 'Metal Gear Solid V: The Phantom Pain',
                    price: 12.99
                },
                {
                    game: 'Dishonored',
                    price: 15.00
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'fantasy',
            },
            games: [
                {
                    game: 'Dragon Age: Inquisition',
                    price: 17.99
                },
                {
                    game: 'The Elder Scrolls V: Skyrim',
                    price: 21.50
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'space',
            },
            games: [
                {
                    game: 'Elite Dangerous',
                    price: 29.99
                },
                {
                    game: 'No Man\'s Sky',
                    price: 24.50
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'arcade',
            },
            games: [
                {
                    game: 'Pac-Man',
                    price: 4.99
                },
                {
                    game: 'Street Fighter II',
                    price: 9.99
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'puzzle',
            },
            games: [
                {
                    game: 'Portal 2',
                    price: 14.99
                },
                {
                    game: 'Tetris',
                    price: 2.99
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'sports',
            },
            games: [
                {
                    game: 'FIFA 22',
                    price: 49.99
                },
                {
                    game: 'NBA 2K22',
                    price: 54.50
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'comedy',
            },
            games: [
                {
                    game: 'Untitled Goose Game',
                    price: 12.99
                },
                {
                    game: 'Octodad: Dadliest Catch',
                    price: 9.50
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'history',
            },
            games: [
                {
                    game: 'Assassin\'s Creed Origins',
                    price: 29.99
                },
                {
                    game: 'Total War: Three Kingdoms',
                    price: 34.50
                }
            ]
        },
        {
            searchCriteria: {
                genre: 'cyberpunk',
            },
            games: [
                {
                    game: 'Cyberpunk 2077',
                    price: 39.99
                },
                {
                    game: 'Deus Ex: Mankind Divided',
                    price: 22.00
                }
            ]
        },
        {
            searchCriteria: {
                game: 'Hollow Knight',
            },
            games: [
                {
                    game: 'Dead Cells',
                    price: 19.99
                },
                {
                    game: 'Super Metroid',
                    price: 5.00
                }
            ]
        },
        {
            searchCriteria: {
                game: 'Celeste',
            },
            games: [
                {
                    game: 'Stardew Valley',
                    price: 14.99
                },
                {
                    game: 'Oxenfree',
                    price: 9.99
                }
            ]
        },
        {
            searchCriteria: {
                game: 'Undertale',
            },
            games: [
                {
                    game: 'The Binding of Isaac',
                    price: 12.99
                },
                {
                    game: 'Enter the Gungeon',
                    price: 14.50
                }
            ]
        },
        {
            searchCriteria: {
                game: 'Rez'
            },
            games: [
                {
                    game: 'Child of Eden',
                    price: 9.99
                },
                {
                    game: 'Tetris Effect',
                    price: 39.99
                }
            ]
        }
    ]
}

module.exports = seedData