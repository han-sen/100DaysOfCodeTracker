# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Gift.create(
    description: 'Office Space DVD',
    value: 4.19,
    event: 'birthday',
    gift_giver: 'random coworker'
)

Gift.create(
    description: 'Potpourri',
    value: 4.99,
    event: 'Christmas',
    gift_giver: 'aunt tilda'
)

Gift.create(
    description: 'Scented Peach Candle',
    value: 9.99,
    event: 'Christmas',
    gift_giver: 'Mom'
)

Gift.create(
    description: 'Vintage Snuggie',
    value: 13.79,
    event: 'Name Day',
    gift_giver: 'Weird Neighbor'
)