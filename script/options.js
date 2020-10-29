const options = [
  {
    id: 1,
    questionId: 1,
    option: 'Tandem',
    isCorrect: false
  },
  {
    id: 2,
    questionId: 1,
    option: 'Burger Shack',
    isCorrect: false
  },
  {
    id: 4,
    questionId: 1,
    option: 'Extraordinary Humans',
    isCorrect: false
  },
  {
    id: 3,
    questionId: 1,
    option: 'Devmynd',
    isCorrect: true
  },
  {
    id: 8,
    questionId: 2,
    option: 'Iacta alea est!',
    isCorrect: false
  },
  {
    id: 6,
    questionId: 2,
    option: 'Vidi, vini, vici',
    isCorrect: false
  },
  {
    id: 7,
    questionId: 2,
    option: 'Aegri somnia vana',
    isCorrect: false
  },
  {
    id: 5,
    questionId: 2,
    option: 'Et tu, Brute?',
    isCorrect: true
  },
  {
    id: 11,
    questionId: 3,
    option: 'Chowder',
    isCorrect: false
  },
  {
    id: 10,
    questionId: 3,
    option: 'Pride',
    isCorrect: false
  },
  {
    id: 12,
    questionId: 3,
    option: 'Destruction',
    isCorrect: false
  },
  {
    id: 9,
    questionId: 3,
    option: 'Ambush',
    isCorrect: true
  },
  {
    id: 13,
    questionId: 4,
    option: '42 mph',
    isCorrect: false
  },
  {
    id: 14,
    questionId: 4,
    option: '13 mph',
    isCorrect: false
  },
  {
    id: 15,
    questionId: 4,
    option: '9 mph',
    isCorrect: false
  },
  {
    id: 16,
    questionId: 4,
    option: '31 mph',
    isCorrect: true
  },
  {
    id: 17,
    questionId: 5,
    option: '3',
    isCorrect: false
  },
  {
    id: 18,
    questionId: 5,
    option: '9',
    isCorrect: false
  },
  {
    id: 19,
    questionId: 5,
    option: '7',
    isCorrect: false
  },
  {
    id: 20,
    questionId: 5,
    option: '5',
    isCorrect: true
  },
  {
    id: 21,
    questionId: 6,
    option: 'M',
    isCorrect: false
  },
  {
    id: 24,
    questionId: 6,
    option: 'Z',
    isCorrect: false
  },
  {
    id: 23,
    questionId: 6,
    option: 'X',
    isCorrect: false
  },
  {
    id: 22,
    questionId: 6,
    option: 'Q',
    isCorrect: true
  },
  {
    id: 25,
    questionId: 7,
    option: 'Cowson',
    isCorrect: false
  },
  {
    id: 26,
    questionId: 7,
    option: 'Bicow',
    isCorrect: false
  },
  {
    id: 28,
    questionId: 7,
    option: 'Mooson',
    isCorrect: false
  },
  {
    id: 27,
    questionId: 7,
    option: 'Beefalo',
    isCorrect: true
  },
  {
    id: 32,
    questionId: 8,
    option: 'Lake Baikal',
    isCorrect: false
  },
  {
    id: 30,
    questionId: 8,
    option: 'Lake Michigan',
    isCorrect: false
  },
  {
    id: 31,
    questionId: 8,
    option: 'Lake Victoria',
    isCorrect: false
  },
  {
    id: 29,
    questionId: 8,
    option: 'Lake Superior',
    isCorrect: true
  },
  {
    id: 33,
    questionId: 9,
    option: 'Wild Wild West',
    isCorrect: false
  },
  {
    id: 34,
    questionId: 9,
    option: 'War World Web',
    isCorrect: false
  },
  {
    id: 35,
    questionId: 9,
    option: 'World Wide Web',
    isCorrect: true
  },
  {
    id: 36,
    questionId: 10,
    option: '20',
    isCorrect: false
  },
  {
    id: 39,
    questionId: 10,
    option: '55',
    isCorrect: false
  },
  {
    id: 38,
    questionId: 10,
    option: '77',
    isCorrect: false
  },
  {
    id: 37,
    questionId: 10,
    option: '22',
    isCorrect: true
  },
  {
    id: 40,
    questionId: 11,
    option: 'Lilith',
    isCorrect: false
  },
  {
    id: 41,
    questionId: 11,
    option: 'Eve',
    isCorrect: false
  },
  {
    id: 42,
    questionId: 11,
    option: 'Hera',
    isCorrect: false
  },
  {
    id: 43,
    questionId: 11,
    option: 'Pandora',
    isCorrect: true
  },
  {
    id: 44,
    questionId: 12,
    option: 'London',
    isCorrect: false
  },
  {
    id: 45,
    questionId: 12,
    option: 'Belgium',
    isCorrect: false
  },
  {
    id: 46,
    questionId: 12,
    option: 'Munich',
    isCorrect: false
  },
  {
    id: 47,
    questionId: 12,
    option: 'Paris',
    isCorrect: true
  },
  {
    id: 48,
    questionId: 13,
    option: 'California',
    isCorrect: false
  },
  {
    id: 51,
    questionId: 13,
    option: 'Siberia',
    isCorrect: false
  },
  {
    id: 50,
    questionId: 13,
    option: 'China',
    isCorrect: false
  },
  {
    id: 49,
    questionId: 13,
    option: 'The Moon',
    isCorrect: true
  },
  {
    id: 52,
    questionId: 14,
    option: 'Van Gogh',
    isCorrect: false
  },
  {
    id: 53,
    questionId: 14,
    option: 'Picasso',
    isCorrect: false
  },
  {
    id: 55,
    questionId: 14,
    option: 'Da Vinci',
    isCorrect: false
  },
  {
    id: 54,
    questionId: 14,
    option: 'Vermeer',
    isCorrect: true
  },
  {
    id: 56,
    questionId: 15,
    option: 'Number sign',
    isCorrect: false
  },
  {
    id: 59,
    questionId: 15,
    option: 'Hash Sign',
    isCorrect: false
  },
  {
    id: 58,
    questionId: 15,
    option: 'Pound',
    isCorrect: false
  },
  {
    id: 57,
    questionId: 15,
    option: 'Octothorpe',
    isCorrect: true
  },
  {
    id: 60,
    questionId: 16,
    option: 'Japan',
    isCorrect: false
  },
  {
    id: 61,
    questionId: 16,
    option: 'Ethiopia',
    isCorrect: false
  },
  {
    id: 62,
    questionId: 16,
    option: 'Canada',
    isCorrect: false
  },
  {
    id: 63,
    questionId: 16,
    option: 'England',
    isCorrect: true
  },
  {
    id: 64,
    questionId: 17,
    option: 'Bear',
    isCorrect: false
  },
  {
    id: 65,
    questionId: 17,
    option: 'Rabbit',
    isCorrect: false
  },
  {
    id: 66,
    questionId: 17,
    option: 'Seal',
    isCorrect: false
  },
  {
    id: 67,
    questionId: 17,
    option: 'Unicorn',
    isCorrect: true
  },
  {
    id: 68,
    questionId: 18,
    option: 'Alaska',
    isCorrect: false
  },
  {
    id: 69,
    questionId: 18,
    option: 'Russia',
    isCorrect: false
  },
  {
    id: 70,
    questionId: 18,
    option: 'Washington',
    isCorrect: false
  },
  {
    id: 71,
    questionId: 18,
    option: 'Detroit',
    isCorrect: true
  },
  {
    id: 72,
    questionId: 19,
    option: '500',
    isCorrect: false
  },
  {
    id: 75,
    questionId: 19,
    option: '200',
    isCorrect: false
  },
  {
    id: 74,
    questionId: 19,
    option: '1000',
    isCorrect: false
  },
  {
    id: 73,
    questionId: 19,
    option: '700',
    isCorrect: true
  },
  {
    id: 76,
    questionId: 20,
    option: '$0.25',
    isCorrect: false
  },
  {
    id: 77,
    questionId: 20,
    option: '$1',
    isCorrect: false
  },
  {
    id: 79,
    questionId: 20,
    option: '$5',
    isCorrect: false
  },
  {
    id: 78,
    questionId: 20,
    option: '$0.05',
    isCorrect: true
  },
  {
    id: 83,
    questionId: 21,
    option: 'Receive withdrawls in rosary beads',
    isCorrect: false
  },
  {
    id: 81,
    questionId: 21,
    option: 'Vote for the Pope',
    isCorrect: false
  },
  {
    id: 82,
    questionId: 21,
    option: 'Purchase indulgences',
    isCorrect: false
  },
  {
    id: 80,
    questionId: 21,
    option: 'Perform transactions in Latin',
    isCorrect: true
  }
]

module.exports = options
