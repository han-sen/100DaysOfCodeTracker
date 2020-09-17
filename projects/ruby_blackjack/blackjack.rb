#########################
############### BLACKJACK

##### Player

class Player
    attr_accessor :bank_roll, :hand
    attr_reader :name
    def initialize name
        @name = name
        @bank_roll = 100
        @hand = []
    end
    def draw_card
        @hand << $deck.pop()
    end
    def total_hand
        total = 0
        @hand.each do |card|
            total += card.value
        end
        total
    end
    def empty_hand
        @hand = []
    end
end

##### House

class House
    attr_accessor :bank_roll, :hand
    attr_reader :name
    def initialize
        @name = 'Da House'
        @bank_roll = 10000
        @hand = []
    end
    def draw_card
        @hand << $deck.pop()
    end
    def total_hand
        total = 0
        @hand.each do |card|
            total += card.value
        end
        total
    end
    def empty_hand
        @hand = []
    end
end

###### The DECK

$deck = []

class Card
    attr_reader :value
    def initialize value
        @value = value
    end        
end

def make_deck
    # push numbered cards to deck (4 times, for 4 suits)
    4.times do
        (2..10).each do |num|
            $deck.push(Card.new num)
        end
        3.times do
            # push 3 'face' cards to deck each outer loop
            $deck.push(Card.new 10)
        end
        # push an 'ace' to deck each outer loop
        $deck.push(Card.new 11)
    end
end

make_deck

$deck.shuffle!()

#### Start the game ?

puts 'Please enter your name'

player = Player.new gets
dealer = House.new

puts "play a round? yes | no"
answer = gets.chomp
while answer == "yes"
    if player.bank_roll > 0 && $deck.length > 0
        puts "place an integer to bet"
        bet = gets.chomp.to_i
        if bet > player.bank_roll
            puts "you can't afford that"
        else
            puts "___________________________________"
            2.times do 
                player.draw_card
                dealer.draw_card
            end
            puts "player total: #{player.total_hand}"
            puts "dealer total: #{dealer.total_hand}"
            if player.total_hand > dealer.total_hand && player.total_hand <= 21
                puts "player wins"
                player.bank_roll += bet
                dealer.bank_roll -= bet
            else
                puts "dealer wins"
                dealer.bank_roll += bet
                player.bank_roll -= bet
            end
            puts "player balance: #{player.bank_roll}"
            puts "dealer balance: #{dealer.bank_roll}"
            puts "___________________________________"
            player.empty_hand
            dealer.empty_hand
            puts "There are #{$deck.length} cards left."
        end
    else
        answer = "no"
        puts "can't play round, hit restart"
        break
    end
    puts "play another hand? yes | no"
    answer = gets.chomp
end

puts "game over dude"


