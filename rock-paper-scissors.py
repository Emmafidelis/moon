import random

options = ["Rock", "Paper", "Scissors"]

player_move = input("Enter a choice (Rock, Paper, Scissors): ")

computer_move = random.choice(options)
print(f"\nYou chose {player_move}, computer chose {computer_move}.\n")

if player_move == computer_move:
  print(f"Both players selected {player_move}. It,s a tie!")
elif player_move == "Rock":
  if computer_move == "Rock":
    print("It's a tie!")
  elif computer_move == "Paper":
    print("You lose!")
  elif computer_move == "Scissors":
    print("You win!")
elif player_move == "Paper":
  if computer_move == "Rock":
    print("You win!")
  elif computer_move == "Paper":
    print("It's a tie!")
  elif computer_move == "Scissors":
    print("You lose!")
elif player_move == "Scissors":
  if computer_move == "Rock":
    print("You lose!")
  elif computer_move == "Paper":
    print("It's a tie!")
  elif computer_move == "Scissors":
    print("You win!")