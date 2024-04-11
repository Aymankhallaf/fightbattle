#Champ de bataille
Nous voulons créer un jeu faisant combattre aléatoirement 4 personnages. Chaque personnage possède :

un nom ;
des points de vie initialement à 50 ;
un niveau d’expérience, défini entre 1 et 10 ;
une force d’arme, définie entre 1 et 10 ;
une puissance de bouclier, définie entre 1 et 10.
La bataille se déroule en tours successifs qui sont des combats. La bataille se termine uniquement lorsque qu’il n’y a plus qu’un seul personnage vivant. Lors d’un combat, l’un des personnages tirés au hasard attaque un autre personnage tiré au hasard. Lors d’un combat :

L’attaquant obtient un score d’attaque correspondant à la somme entre son niveau d’expérience et une valeur aléatoire comprise entre 0 et la force de son arme.
Le défenseur obtient un score de défense correspondant à la somme entre son niveau d’expérience et une valeur aléatoire comprise entre 0 et la puissance de son bouclier.
L’attaquant gagne le combat si son score d’attaque est supérieur au score de défense de son adversaire. Dans ce cas seulement, le défenseur perd autant de points de vie que la valeur du score d’attaque. Un personnage est mort et est sorti du champ de bataille quand il n’a plus de points de vie
##Consigne
Nommez et définissez dans une variable les 4 personnages avec les caractéristiques décrites ci-dessus. Développez le code permettant d'exécuter les combats successifs comme décrit ci-dessus. Le code doit pouvoir faire combattre autant de personnages qu’il y en a de défini au départ. Vous devez utiliser tant que possible des fonctions pour structurer votre code. Chaque fonction doit posséder une documentation complète. Affichez à chaque tour un résumé du combat (attaquant, défenseur, résultat du combat, mort d’un personnage, …). Affichez au final le gagnant de la bataille
