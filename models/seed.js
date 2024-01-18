const seedData = [
    {
        username: 'xoGaMeRgIrLxo',
        password: 'password',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'fps',
                    numberOfPlayers: 4
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
            }
        ]
    },
    {
        username: 'johnDoe',
        password: 'secure123',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'action',
                    numberOfPlayers: 2
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
            }
        ]
    },
    {
        username: 'gamer123',
        password: 'gamingPass',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'rpg',
                    numberOfPlayers: 1
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
            }
        ]
    },
    {
        username: 'codingGamer',
        password: 'code4fun',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'strategy',
                    numberOfPlayers: 2
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
            }
        ]
    },
    {
        username: 'gameMaster',
        password: 'masterPass',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'adventure',
                    numberOfPlayers: 1
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
            }
        ]
    },
    {
        username: 'techGamer',
        password: 'techPass123',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'simulation',
                    numberOfPlayers: 1
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
            }
        ]
    },
    {
        username: 'stealthPlayer',
        password: 'hidden123',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'stealth',
                    numberOfPlayers: 1
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
            }
        ]
    },
    {
        username: 'fantasyGamer',
        password: 'dragonsRule',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'fantasy',
                    numberOfPlayers: 4
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
            }
        ]
    },
    {
        username: 'spaceExplorer',
        password: 'galaxy123',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'space',
                    numberOfPlayers: 2
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
            }
        ]
    },
    {
        username: 'arcadeFanatic',
        password: 'highScore321',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'arcade',
                    numberOfPlayers: 1
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
            }
        ]
    },
    {
        username: 'puzzleMaster',
        password: 'solveItNow',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'puzzle',
                    numberOfPlayers: 1
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
            }
        ]
    },
    {
        username: 'sportsGamer',
        password: 'playHard789',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'sports',
                    numberOfPlayers: 2
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
            }
        ]
    },
    {
        username: 'comedyGamer',
        password: 'laughing123',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'comedy',
                    numberOfPlayers: 4
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
            }
        ]
    },
    {
        username: 'historyExplorer',
        password: 'timeTraveler',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'history',
                    numberOfPlayers: 1
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
            }
        ]
    },
    {
        username: 'cyberPunkGamer',
        password: 'hackTheWorld',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'cyberpunk',
                    numberOfPlayers: 1
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
            }
        ]
    },
    {
        username: 'horrorFan',
        password: 'scareMeNow',
        recommendations: [
            {
                searchCriteria: {
                    genre: 'horror',
                    numberOfPlayers: 1
                },
            }
        ]
    },
];

module.exports = seedData